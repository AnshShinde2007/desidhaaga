import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex flex-col justify-between bg-primary overflow-hidden">
      {/* Bridal model — left side, desktop only */}
      <div
        className="absolute left-[100px] bottom-0 pointer-events-none select-none z-10 hidden md:block"
        style={{ height: "calc(94% - 100px)", maxHeight: 760 }}
      >
        <Image
          src="/images/bridal_model.png"
          alt="Indian bridal model in Rani pink saree with gold jewelry, mehendi, and forest green background"
          width={1083}
          height={1452}
          className="h-full w-auto object-contain object-bottom select-none"
          priority
        />
      </div>

      {/* Background saree image — full bleed */}
      <Image
        src="/images/hero_saree_bg.jpg"
        alt="Top-down flat lay authentic Indian handcrafted Mulmul cotton saree in forest green with clean red border and gold selvedge"
        fill
        className="object-cover object-top select-none pointer-events-none"
        priority
      />

      {/* Hero Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-margin-mobile lg:px-margin pt-40 pb-16 flex flex-col justify-between flex-1">
        <div className="my-auto ml-auto w-full md:w-auto max-w-xl lg:px-8 py-space-lg">
          {/* Eyebrow */}
          <div className="flex items-center gap-space-sm opacity-90 mb-space-md">
            <span className="w-8 h-[1px] bg-on-tertiary-container inline-block" />
            <span className="font-label-sm text-label-sm uppercase tracking-[0.22em] text-on-tertiary-container font-semibold">
              ROOTED IN THE ART OF WEAVING
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-display text-inverse-on-surface tracking-tight font-normal leading-[1.08] mb-space-md drop-shadow-sm">
            Tradition in every thread
          </h1>

          {/* Subheadline */}
          <p className="font-body-lg text-body-lg text-surface-container font-light leading-relaxed max-w-xl mb-space-lg">
            Discover the effortless beauty of Mulmul cotton sarees, crafted for
            the rhythm of everyday life.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-space-md">
            <Link
              href="/shop"
              className="inline-flex items-center justify-center bg-inverse-on-surface text-primary font-label-lg text-label-lg uppercase tracking-widest px-8 py-4 transition-all duration-300 hover:bg-surface-variant hover:shadow-lg"
            >
              Explore the Collection
            </Link>
            <Link
              href="/story"
              className="inline-flex items-center gap-space-sm text-inverse-on-surface font-label-lg text-label-lg uppercase tracking-widest px-6 py-4 bg-transparent border border-inverse-on-surface/40 transition-all duration-300 hover:border-inverse-on-surface hover:text-on-tertiary-container group"
            >
              <span>Our Craft, Our Story</span>
              <span className="material-symbols-outlined text-[18px] transition-transform duration-300 group-hover:translate-x-1 text-on-tertiary-container">
                arrow_forward
              </span>
            </Link>
          </div>
        </div>

        {/* Bottom Metadata Bar */}
        <div className="pt-space-lg flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm">
          <div className="flex items-center gap-space-xs text-surface-dim font-label-sm text-label-sm tracking-widest uppercase flex-wrap">
            <span className="w-1.5 h-1.5 rounded-full bg-on-tertiary-container inline-block" />
            <span>Chanderi &amp; Phulia Weaving Guilds</span>
            <span className="opacity-40 px-1">•</span>
            <span>100s Count Pure Gossamer Cotton</span>
            <span className="opacity-40 px-1">•</span>
            <span>100% Handloom</span>
          </div>
          <div className="hidden md:flex items-center gap-2 text-inverse-on-surface/80 font-label-sm text-label-sm tracking-widest uppercase">
            <span className="material-symbols-outlined text-[16px] text-on-tertiary-container">
              fiber_manual_record
            </span>
            <span>Archival Batch 08 — Winter 2024</span>
          </div>
        </div>
      </div>
    </section>
  );
}
