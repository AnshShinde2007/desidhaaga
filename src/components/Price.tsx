"use client";

import { useCart } from "@/components/CartProvider";

export default function Price({ amount, currency }: { amount: string; currency: string }) {
  const { formatPrice } = useCart();
  return <>{formatPrice(Number(amount), currency)}</>;
}
