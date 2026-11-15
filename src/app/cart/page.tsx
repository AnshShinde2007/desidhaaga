"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useCart } from "@/components/CartProvider";
import Image from "next/image";

export default function CartPage() {
  const { cart, loading, error, change, remove, checkout, formatPrice } = useCart();

  return <>
    <Header />
    <main className="relative min-h-screen overflow-hidden bg-primary px-margin-mobile lg:px-margin pt-36 pb-space-xl">
      <Image src="/images/hero_saree_bg.jpg" alt="" fill priority className="object-cover object-center opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/35 via-primary/85 to-primary" />
      <div className="relative z-10 max-w-5xl mx-auto text-inverse-on-surface">
        <p className="font-label-sm uppercase tracking-[0.22em] text-on-tertiary-container font-semibold">Your selection · Desi Dhaga</p>
        <h1 className="font-display text-5xl md:text-6xl mt-3 mb-10">Shopping bag</h1>
        {loading ? <p className="text-surface-container">Loading your bag…</p> : !cart?.lines.nodes.length ? <div className="border-y border-on-tertiary-container/40 py-14 text-center"><p className="font-headline-md text-3xl">Your bag is empty</p><a href="/" className="inline-flex mt-6 bg-inverse-on-surface text-primary px-7 py-4 font-label-lg uppercase tracking-widest hover:bg-surface-variant">Explore the collection</a></div> : <>
          <div className="divide-y divide-on-tertiary-container/30 border-y border-on-tertiary-container/40">
            {cart.lines.nodes.map((line) => <article key={line.id} className="py-6 flex gap-5 items-center">
              {line.merchandise.product.featuredImage && <img src={line.merchandise.product.featuredImage.url} alt={line.merchandise.product.featuredImage.altText ?? line.merchandise.product.title} className="w-28 h-36 object-cover border border-on-tertiary-container/35" />}
              <div className="flex-1"><h2 className="font-headline-sm text-2xl">{line.merchandise.product.title}</h2><p className="mt-2 text-surface-container">{formatPrice(Number(line.merchandise.price.amount), line.merchandise.price.currencyCode)}</p>
                <div className="flex items-center gap-3 mt-4"><button aria-label="Decrease quantity" disabled={line.quantity <= 1} onClick={() => change(line.id, line.quantity - 1)} className="border border-on-tertiary-container/50 w-9 h-9 hover:bg-primary-container disabled:opacity-40">−</button><span>{line.quantity}</span><button aria-label="Increase quantity" disabled={line.quantity >= 99} onClick={() => change(line.id, line.quantity + 1)} className="border border-on-tertiary-container/50 w-9 h-9 hover:bg-primary-container disabled:opacity-40">+</button><button onClick={() => remove(line.id)} className="ml-3 text-sm text-on-tertiary-container underline underline-offset-4">Remove</button></div>
              </div>
              <p className="font-semibold">{formatPrice(Number(line.merchandise.price.amount) * line.quantity, line.merchandise.price.currencyCode)}</p>
            </article>)}
          </div>
          <div className="flex justify-between py-6 text-lg"><span>Subtotal</span><strong className="text-on-tertiary-container">{formatPrice(Number(cart.cost.subtotalAmount.amount), cart.cost.subtotalAmount.currencyCode)}</strong></div>
          <p className="text-sm text-surface-container/75">Shipping and taxes are calculated at checkout.</p>
          <button onClick={checkout} className="mt-6 w-full bg-inverse-on-surface text-primary py-4 uppercase tracking-widest font-semibold hover:bg-surface-variant">Continue to Shopify checkout <span aria-hidden="true">→</span></button>
        </>}
        {error && <p role="alert" className="mt-4 text-[#ffb3ae]">{error}</p>}
      </div>
    </main>
    <Footer />
  </>;
}
