"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";
import type { ShopifyCart } from "@/lib/shopify";

type CartContextValue = { cart: ShopifyCart | null; loading: boolean; error: string; currency: "INR" | "USD"; setCurrency: (currency: "INR" | "USD") => void; formatPrice: (amount: number, sourceCurrency: string) => string; add: (variantId: string) => Promise<void>; change: (lineId: string, quantity: number) => Promise<void>; remove: (lineId: string) => Promise<void>; checkout: () => void };
const CartContext = createContext<CartContextValue | null>(null);
const CART_KEY = "desidhaga-shopify-cart";
const CURRENCY_KEY = "desidhaga-currency";
const USD_TO_INR = 85;

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<ShopifyCart | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [currency, setCurrencyState] = useState<"INR" | "USD">("INR");

  useEffect(() => {
    const saved = localStorage.getItem(CURRENCY_KEY);
    if (saved === "INR" || saved === "USD") setCurrencyState(saved);
  }, []);

  const setCurrency = useCallback((value: "INR" | "USD") => {
    setCurrencyState(value);
    localStorage.setItem(CURRENCY_KEY, value);
  }, []);
  const formatPrice = useCallback((amount: number, sourceCurrency: string) => {
    const converted = currency === "USD" && sourceCurrency === "INR" ? amount / USD_TO_INR : currency === "INR" && sourceCurrency === "USD" ? amount * USD_TO_INR : amount;
    return new Intl.NumberFormat(currency === "INR" ? "en-IN" : "en-US", { style: "currency", currency }).format(converted);
  }, [currency]);

  const request = useCallback(async (method: string, body?: object, url = "/api/shopify/cart") => {
    const response = await fetch(url, { method, headers: body ? { "Content-Type": "application/json" } : undefined, body: body ? JSON.stringify(body) : undefined });
    const result = await response.json();
    if (!response.ok) throw new Error(result.error ?? "Cart request failed.");
    return result.cart as ShopifyCart | null;
  }, []);

  useEffect(() => {
    const id = localStorage.getItem(CART_KEY);
    if (!id) { setLoading(false); return; }
    request("GET", undefined, `/api/shopify/cart?id=${encodeURIComponent(id)}`)
      .then((value) => { setCart(value); if (!value) localStorage.removeItem(CART_KEY); })
      .catch(() => setError("Could not load your bag."))
      .finally(() => setLoading(false));
  }, [request]);

  const mutate = useCallback(async (method: string, body: object) => {
    setError("");
    const next = await request(method, body);
    setCart(next);
    if (next?.id) localStorage.setItem(CART_KEY, next.id);
    else localStorage.removeItem(CART_KEY);
  }, [request]);

  const add = useCallback(async (variantId: string) => mutate("POST", { cartId: cart?.id ?? null, variantId }), [cart?.id, mutate]);
  const change = useCallback(async (lineId: string, quantity: number) => mutate("PATCH", { cartId: cart?.id, lineId, quantity }), [cart?.id, mutate]);
  const remove = useCallback(async (lineId: string) => mutate("DELETE", { cartId: cart?.id, lineId }), [cart?.id, mutate]);
  const checkout = useCallback(() => { if (cart?.checkoutUrl) window.location.assign(cart.checkoutUrl); }, [cart?.checkoutUrl]);

  return <CartContext.Provider value={{ cart, loading, error, currency, setCurrency, formatPrice, add, change, remove, checkout }}>{children}</CartContext.Provider>;
}

export function useCart() {
  const value = useContext(CartContext);
  if (!value) throw new Error("useCart must be used inside CartProvider.");
  return value;
}
