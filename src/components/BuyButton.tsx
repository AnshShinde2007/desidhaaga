"use client";

import { useState } from "react";
import { useCart } from "@/components/CartProvider";

export default function BuyButton({ variantId, iconOnly = false }: { variantId?: string; iconOnly?: boolean }) {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { add } = useCart();

  async function checkout() {
    if (!variantId) return;
    setLoading(true);
    setError("");
    try {
      await add(variantId);
      setError("");
      setLoading(false);
    } catch {
      setError("Could not add this item. Please try again.");
      setLoading(false);
    }
  }

  return (
    <div>
      <button
        type="button"
        disabled={!variantId || loading}
        onClick={checkout}
        aria-label={iconOnly ? "Buy this product" : undefined}
        title={iconOnly ? "Buy this product" : undefined}
        className={iconOnly
          ? "inline-flex items-center justify-center w-9 h-9 rounded-full bg-surface text-primary shadow-md hover:bg-primary hover:text-on-primary transition-colors disabled:opacity-50"
          : "font-label-sm uppercase tracking-widest text-secondary font-semibold disabled:opacity-50"}
      >
        {iconOnly ? <span className="material-symbols-outlined text-[18px]">{loading ? "hourglass_top" : "shopping_bag"}</span> : loading ? "Adding…" : variantId ? "Add to bag" : "Unavailable"}
      </button>
      {error && <p role="alert" className="text-sm text-red-700">{error}</p>}
    </div>
  );
}
