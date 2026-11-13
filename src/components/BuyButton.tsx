"use client";

import { useState } from "react";

export default function BuyButton({ variantId, iconOnly = false }: { variantId?: string; iconOnly?: boolean }) {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function checkout() {
    if (!variantId) return;
    setLoading(true);
    setError("");
    try {
      const response = await fetch("/api/shopify/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ variantId }),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error);
      window.location.assign(result.checkoutUrl);
    } catch {
      setError("Checkout could not start. Please try again.");
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
        {iconOnly ? <span className="material-symbols-outlined text-[18px]">{loading ? "hourglass_top" : "arrow_forward"}</span> : loading ? "Opening checkout…" : variantId ? "Buy now ↗" : "Unavailable"}
      </button>
      {error && <p role="alert" className="text-sm text-red-700">{error}</p>}
    </div>
  );
}
