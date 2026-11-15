"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

const zones = {
  selvedge: {
    number: "Zone 01 / 04",
    tag: "Structural Border",
    title: "The Kinār (Selvedge & Zari Piping)",
    desc: "The protective edge of the textile reinforced with doubled warp ends. In our archival mulmuls, the selvedge features a fine 1mm gold zari piping flanking a natural madder-dyed border that prevents unraveling and weights the silhouette.",
    spec1: "26.2 N/cm² (Reinforced)",
    spec2: "4 ends per dent",
    spec3: "Dense Double-Pass Selvedge",
  },
  zameen: {
    number: "Zone 02 / 04",
    tag: "Center Field",
    title: "Gossamer Zamīn (The Field)",
    desc: "The core expansive body of the saree, handspun with 100s combed single cotton yarn. Woven in an open, square plain weave that breathes spontaneously in high humidity, creating the legendary translucent drape that melts upon the wearer.",
    spec1: "18.4 N/cm²",
    spec2: "2 ends per dent",
    spec3: "Straight Fly-Shuttle",
  },
  pallu: {
    number: "Zone 03 / 04",
    tag: "Ceremonial Fall",
    title: "Aanchal / Pallu (The Crown)",
    desc: "The terminating 90 centimeters of the saree, worn draped over the shoulder. Dense with supplementary weft motifs (Jamdani) and geometric zari lines, providing intentional acoustic and tactile drape weight to secure the textile.",
    spec1: "22.0 N/cm²",
    spec2: "Supplemental Pick Insertion",
    spec3: "Discontinuous Bamboo Kandu",
  },
};

export default function CraftsmanshipPage() {
  const [activeZone, setActiveZone] = useState<keyof typeof zones>("zameen");
  const currentZone = zones[activeZone];

  const inspectZone = (key: string) => {
    if (key in zones) {
      setActiveZone(key as keyof typeof zones);
    }
  };

  return (
    <>
      {/* Immersive Textile Hero & Transparent Navbar Wrapper */}
<div className="relative w-full overflow-hidden bg-[#254c38]">
{/* Background Image: Authentic Mulmul Cotton Saree with Top Red Selvedge Band */}
<img alt="Authentic handcrafted Mulmul cotton saree with crimson red selvedge and yellow-gold piping" className="absolute inset-0 w-full h-full object-cover object-top select-none pointer-events-none" src="/images/stitch/img-2ac93d536e81.png"/>
{/* Subtle gradient overlay to enhance legibility of title without losing fabric grain */}
<div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/25 to-[#254c38]/90 pointer-events-none"></div>
{/* Header / Navbar placed directly over the red selvedge band */}
        <Header />
{/* Top Monograph Ribbon over Green Field */}
<div className="relative z-20 w-full border-t border-[#d8ac42]/30 bg-black/25 backdrop-blur-sm py-2 px-margin-mobile lg:px-margin flex items-center justify-between text-[#fff9ee]">
<div className="flex items-center gap-space-sm">
<span className="w-1.5 h-1.5 rotate-45 bg-[#d8ac42] inline-block"></span>
<span className="font-label-sm text-label-sm tracking-widest uppercase text-[#ffdf9c]">Guild Archive "¢ Monograph No. 04</span>
</div>
<div className="hidden md:flex items-center gap-space-lg text-[#ffdf9c]/90 font-label-sm text-label-sm tracking-widest uppercase">
<span>100s Gossamer Count</span>
<span className="text-[#d8ac42]">"¢</span>
<span>Phulia &amp; Santipur Clusters</span>
<span className="text-[#d8ac42]">"¢</span>
<span>Natural Botanical Extracts</span>
</div>
<div className="flex items-center gap-space-xs text-[#d8ac42]">
<span className="material-symbols-outlined text-[14px]">history_edu</span>
<span className="font-label-sm text-label-sm tracking-widest uppercase text-[#ffdf9c]">Authenticated Pit Loom</span>
</div>
</div>
{/* Hero Content: Editorial Typography over authentic Mulmul */}
<section className="relative z-20 max-w-7xl mx-auto px-margin-mobile lg:px-margin pt-12 pb-16 md:pt-16 md:pb-24">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-end">
<div className="lg:col-span-8 space-y-space-md text-[#fff9ee]">
<div className="flex items-center gap-space-sm">
<span className="font-label-lg text-label-lg uppercase tracking-widest text-[#fe716c] font-semibold bg-black/30 px-2 py-0.5 border border-[#fe716c]/40">Technical Monograph</span>
<span className="h-px w-10 bg-[#d8ac42]"></span>
<span className="font-label-sm text-label-sm text-[#ffdf9c] uppercase tracking-widest">Warp &amp; Weft Mechanics</span>
</div>
<h1 className="font-headline-lg text-display-mobile md:text-display text-[#fff9ee] tracking-tight font-normal leading-[1.15] max-w-3xl drop-shadow-md">
            The Alchemy of <span className="italic font-light text-[#ffdf9c]">TÄna BÄna</span>: Anatomy of a Handwoven Mulmul
          </h1>
<p className="font-body-lg text-body-lg text-[#fff9ee]/90 font-light max-w-2xl leading-relaxed drop-shadow-sm">
            How raw organic 100s combed cotton turns into a featherweight 240-gram cloud of sheer grace between tensioned warp threads and the rhythmic breath of the Bengal pit loom.
          </p>
</div>
<div className="lg:col-span-4 flex flex-col justify-end space-y-space-sm">
<div className="bg-[#1d1c15]/75 backdrop-blur-md p-space-md border border-[#d8ac42]/40 shadow-xl space-y-space-xs text-[#fff9ee]">
<div className="flex justify-between items-baseline">
<span className="font-label-sm text-label-sm uppercase tracking-widest text-[#ffdf9c]">Standard Net Mass</span>
<span className="font-headline-sm text-headline-sm text-[#fff9ee] font-serif">238 — 245 g</span>
</div>
<div className="w-full bg-white/20 h-1 overflow-hidden">
<div className="bg-[#d8ac42] h-full w-[88%]"></div>
</div>
<div className="flex justify-between font-label-sm text-label-sm text-[#fff9ee]/80 pt-space-xs">
<span>Warp: 100s combed single</span>
<span>Weft: Untwisted filament</span>
</div>
</div>
</div>
</div>
{/* Quick Metrics Strip */}
<div className="grid grid-cols-2 md:grid-cols-4 gap-gutter mt-12 pt-6 border-t border-[#d8ac42]/30 text-[#fff9ee]">
<div className="space-y-1 bg-black/20 p-3 backdrop-blur-sm border border-white/10">
<span className="font-label-sm text-label-sm text-[#fe716c] uppercase tracking-widest block font-medium">Loom Cadence</span>
<span className="font-headline-sm text-headline-sm text-[#fff9ee] block font-serif">3,400</span>
<span className="text-xs text-[#fff9ee]/80">Picks hand-thrown per saree</span>
</div>
<div className="space-y-1 bg-black/20 p-3 backdrop-blur-sm border border-white/10">
<span className="font-label-sm text-label-sm text-[#fe716c] uppercase tracking-widest block font-medium">Loom Span</span>
<span className="font-headline-sm text-headline-sm text-[#fff9ee] block font-serif">14–22 Days</span>
<span className="text-xs text-[#fff9ee]/80">Continuous artisan engagement</span>
</div>
<div className="space-y-1 bg-black/20 p-3 backdrop-blur-sm border border-white/10">
<span className="font-label-sm text-label-sm text-[#fe716c] uppercase tracking-widest block font-medium">Count Density</span>
<span className="font-headline-sm text-headline-sm text-[#fff9ee] block font-serif">100 x 100</span>
<span className="text-xs text-[#fff9ee]/80">Ultra-fine sheer gossamer yarn</span>
</div>
<div className="space-y-1 bg-black/20 p-3 backdrop-blur-sm border border-white/10">
<span className="font-label-sm text-label-sm text-[#fe716c] uppercase tracking-widest block font-medium">Chemical Footprint</span>
<span className="font-headline-sm text-headline-sm text-[#fff9ee] block font-serif">0.0%</span>
<span className="text-xs text-[#fff9ee]/80">Zero synthetic sizing agents</span>
</div>
</div>
</section>
</div>
      <main className="w-full bg-surface min-h-[calc(100vh-80px)]">
{/* Interactive Anatomy of the Saree Section */}
<section className="w-full bg-surface py-space-xl px-margin-mobile lg:px-margin border-b border-outline-variant/30">
<div className="max-w-7xl mx-auto space-y-space-lg">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
<div className="space-y-space-xs">
<span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-semibold">Textile Architecture</span>
<h2 className="font-headline-lg text-headline-lg text-primary font-normal">Anatomy of the 5.5-Metre Drape</h2>
<p className="font-body-md text-body-md text-on-surface-variant max-w-xl">
              Each quadrant of the handloom saree obeys ancestral architectural laws—from the structural rib of the selvedge to the ceremonial weight of the gold-tipped pallu.
            </p>
</div>
<div className="flex items-center gap-space-xs text-on-surface-variant font-label-sm text-label-sm uppercase tracking-widest bg-surface-container px-3 py-1.5 border border-outline-variant/40">
<span className="material-symbols-outlined text-secondary text-[18px]">touch_app</span>
<span>Select component zone to inspect technical weave</span>
</div>
</div>
{/* Architectural Anatomy Display */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
{/* Visual Presentation Canvas */}
<div className="lg:col-span-8 bg-surface-container-low p-space-md shadow-sm relative group overflow-hidden border border-outline-variant/20">
<div className="relative w-full aspect-[16/10] bg-primary overflow-hidden">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="Editorial close-up of a deep forest green gossamer Indian cotton mulmul saree spread across an unvarnished teakwood artisan worktable with crimson border and gold selvedge piping." src="/images/stitch/img-1253430321d9.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent"></div>
{/* Hotspot Pins */}
<button aria-label="Inspect Selvedge" className="absolute top-[28%] left-[24%] -translate-x-1/2 -translate-y-1/2 group/pin cursor-pointer focus:outline-none" onClick={() => inspectZone("selvedge")}>
<span className="relative flex h-8 w-8 items-center justify-center">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-on-tertiary-container opacity-60"></span>
<span className="relative inline-flex rounded-full h-5 w-5 bg-on-tertiary-container text-tertiary font-label-sm text-[10px] font-bold items-center justify-center shadow-md">01</span>
</span>
<span className="absolute left-9 top-1/2 -translate-y-1/2 bg-surface text-on-surface font-label-sm text-label-sm tracking-wider uppercase px-2 py-1 shadow-md whitespace-nowrap hidden sm:inline-block border border-outline-variant/40">The Kinār (Selvedge)</span>
</button>
<button aria-label="Inspect Zameen" className="absolute top-[58%] left-[48%] -translate-x-1/2 -translate-y-1/2 group/pin cursor-pointer focus:outline-none" onClick={() => inspectZone("zameen")}>
<span className="relative flex h-8 w-8 items-center justify-center">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-surface-bright opacity-60"></span>
<span className="relative inline-flex rounded-full h-5 w-5 bg-surface-bright text-primary font-label-sm text-[10px] font-bold items-center justify-center shadow-md">02</span>
</span>
<span className="absolute left-9 top-1/2 -translate-y-1/2 bg-surface text-on-surface font-label-sm text-label-sm tracking-wider uppercase px-2 py-1 shadow-md whitespace-nowrap hidden sm:inline-block border border-outline-variant/40">Gossamer Zamīn (Field)</span>
</button>
<button aria-label="Inspect Pallu" className="absolute top-[35%] right-[18%] -translate-x-1/2 -translate-y-1/2 group/pin cursor-pointer focus:outline-none" onClick={() => inspectZone("pallu")}>
<span className="relative flex h-8 w-8 items-center justify-center">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-60"></span>
<span className="relative inline-flex rounded-full h-5 w-5 bg-secondary text-on-secondary font-label-sm text-[10px] font-bold items-center justify-center shadow-md">03</span>
</span>
<span className="absolute right-9 top-1/2 -translate-y-1/2 bg-surface text-on-surface font-label-sm text-label-sm tracking-wider uppercase px-2 py-1 shadow-md whitespace-nowrap hidden sm:inline-block border border-outline-variant/40">Aanchal / Pallu</span>
</button>
</div>
<div className="mt-space-md flex flex-wrap items-center justify-between gap-space-sm">
<div className="flex items-center gap-space-xs font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest">
<span className="w-2 h-2 rounded-full bg-secondary inline-block"></span>
<span>Specimen: Madder &amp; Forest Green Kora Mulmul</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant tracking-wider uppercase">Scale 1:1 Loom Spec</span>
</div>
</div>
{/* Dynamic Spec Detail Drawer */}
<div className="lg:col-span-4 bg-surface-container p-space-lg space-y-space-md border border-outline-variant/30" id="anatomy-card">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm tracking-widest text-[#d8ac42] uppercase font-bold">{currentZone.number}</span>
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">{currentZone.tag}</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-primary mb-space-xs">{currentZone.title}</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mb-space-md">{currentZone.desc}</p>
<div className="space-y-space-xs pt-space-sm bg-surface p-space-md border border-outline-variant/20">
<div className="flex justify-between font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
<span>Warp Tension</span>
<span className="font-medium text-primary">{currentZone.spec1}</span>
</div>
<div className="flex justify-between font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
<span>Reed Denting</span>
<span className="font-medium text-primary">{currentZone.spec2}</span>
</div>
<div className="flex justify-between font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
<span>Artisan Technique</span>
<span className="font-medium text-primary">{currentZone.spec3}</span>
</div>
</div>
<div className="flex gap-space-xs pt-space-xs">
<button className="flex-1 py-2 font-label-sm text-label-sm uppercase tracking-wider bg-surface border border-outline-variant/40 hover:bg-primary hover:text-on-primary transition-colors text-center" onClick={() => inspectZone("selvedge")}>Selvedge</button>
<button className="flex-1 py-2 font-label-sm text-label-sm uppercase tracking-wider bg-primary text-on-primary border border-primary transition-colors text-center" onClick={() => inspectZone("zameen")}>Zamīn</button>
<button className="flex-1 py-2 font-label-sm text-label-sm uppercase tracking-wider bg-surface border border-outline-variant/40 hover:bg-primary hover:text-on-primary transition-colors text-center" onClick={() => inspectZone("pallu")}>Pallu</button>
</div>
</div>
</div>
</div>
</section>
{/* The 6-Stage Artisanal Lifecycle */}
<section className="w-full bg-surface-container-low py-space-xl px-margin-mobile lg:px-margin border-b border-outline-variant/30">
<div className="max-w-7xl mx-auto space-y-space-xl">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
<div>
<span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-semibold block mb-space-xs">Chronology of Creation</span>
<h2 className="font-headline-lg text-headline-lg text-primary font-normal">The Six Stages of Metamorphosis</h2>
</div>
<p className="font-body-md text-body-md text-on-surface-variant max-w-md">
            A purely non-mechanical, sun-lit lifecycle executed entirely within an eight-mile radius across the rural Nadia artisan corridor.
          </p>
</div>
{/* Lifecycle Staggered Timeline Grid */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
{/* Stage 01 */}
<article className="bg-surface p-space-lg flex flex-col justify-between space-y-space-md shadow-sm border border-outline-variant/30 group hover:shadow-md hover:border-secondary/40 transition-all">
<div className="space-y-space-sm">
<div className="flex items-baseline justify-between">
<span className="font-display text-headline-lg text-on-tertiary-container font-light">01</span>
<span className="font-label-sm text-label-sm tracking-widest uppercase text-secondary font-semibold">Fibre &amp; Yarn</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-primary">Sourcing &amp; Charkha Spinning</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Organic extra-long staple Indian cotton fibers are manually carded and combed to strip out impurities. Master women spinners draw gossamer 100s count singles on amber-polished wooden Amber Charkhas during humid dawn hours to prevent yarn breakage.
              </p>
</div>
<div className="pt-space-md bg-surface-container-low p-space-sm space-y-space-xs border border-outline-variant/20">
<div className="flex justify-between font-label-sm text-label-sm text-on-surface-variant uppercase">
<span>Fiber Staple</span>
<span className="font-semibold text-primary">34.5 mm</span>
</div>
<div className="flex justify-between font-label-sm text-label-sm text-on-surface-variant uppercase">
<span>Spinning Tool</span>
<span className="font-semibold text-primary">Hand-Tuned Charkha</span>
</div>
</div>
</article>
{/* Stage 02 */}
<article className="bg-surface p-space-lg flex flex-col justify-between space-y-space-md shadow-sm border border-outline-variant/30 group hover:shadow-md hover:border-secondary/40 transition-all">
<div className="space-y-space-sm">
<div className="flex items-baseline justify-between">
<span className="font-display text-headline-lg text-on-tertiary-container font-light">02</span>
<span className="font-label-sm text-label-sm tracking-widest uppercase text-secondary font-semibold">Botanical Alchemy</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-primary">Natural Vat Dyeing</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Cotton hanks undergo alkaline scouring in wood-ash water before immersion in living fermentation vats. Madder root (Manjistha) yields terracotta crimsons, harda (Myrobalan) sets deep warm ochres, and wild Indigo extracts brew meditative forest greens.
              </p>
</div>
<div className="pt-space-md bg-surface-container-low p-space-sm space-y-space-xs border border-outline-variant/20">
<div className="flex justify-between font-label-sm text-label-sm text-on-surface-variant uppercase">
<span>Vat Medium</span>
<span className="font-semibold text-primary">Rainwater &amp; Jaggery</span>
</div>
<div className="flex justify-between font-label-sm text-label-sm text-on-surface-variant uppercase">
<span>Fixative</span>
<span className="font-semibold text-primary">Alum &amp; Harda Seed</span>
</div>
</div>
</article>
{/* Stage 03 */}
<article className="bg-surface p-space-lg flex flex-col justify-between space-y-space-md shadow-sm border border-outline-variant/30 group hover:shadow-md hover:border-secondary/40 transition-all">
<div className="space-y-space-sm">
<div className="flex items-baseline justify-between">
<span className="font-display text-headline-lg text-on-tertiary-container font-light">03</span>
<span className="font-label-sm text-label-sm tracking-widest uppercase text-secondary font-semibold">Architectural Prepping</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-primary">TÄna (Warp) &amp; BÄna Setup</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Warping occurs outdoors across long bamboo trestles under shade. Thousands of thread ends are counted, rice-gruel starched for structural resilience, and individually drafted through the fine reed teeth in a delicate, two-day manual alignment ritual.
              </p>
</div>
<div className="pt-space-md bg-surface-container-low p-space-sm space-y-space-xs border border-outline-variant/20">
<div className="flex justify-between font-label-sm text-label-sm text-on-surface-variant uppercase">
<span>Warp Length</span>
<span className="font-semibold text-primary">60 Metres (10 Drapes)</span>
</div>
<div className="flex justify-between font-label-sm text-label-sm text-on-surface-variant uppercase">
<span>Sizing Base</span>
<span className="font-semibold text-primary">Fermented Conjee Water</span>
</div>
</div>
</article>
{/* Stage 04 */}
<article className="bg-surface p-space-lg flex flex-col justify-between space-y-space-md shadow-sm border border-outline-variant/30 group hover:shadow-md hover:border-secondary/40 transition-all">
<div className="space-y-space-sm">
<div className="flex items-baseline justify-between">
<span className="font-display text-headline-lg text-on-tertiary-container font-light">04</span>
<span className="font-label-sm text-label-sm tracking-widest uppercase text-secondary font-semibold">The Pit Loom</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-primary">The Treadle Symphony</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Suspended over an excavated earthen floor pit to regulate natural ground humidity, the weaver works twin foot treadles. The polished teakwood shuttle (MÄku) darts horizontally across the shed, driven by subtle wrist flicks at 40 picks per minute.
              </p>
</div>
<div className="pt-space-md bg-surface-container-low p-space-sm space-y-space-xs border border-outline-variant/20">
<div className="flex justify-between font-label-sm text-label-sm text-on-surface-variant uppercase">
<span>Loom Structure</span>
<span className="font-semibold text-primary">Sunken Pit Frame</span>
</div>
<div className="flex justify-between font-label-sm text-label-sm text-on-surface-variant uppercase">
<span>Daily Output</span>
<span className="font-semibold text-primary">0.6 — 0.9 Metres</span>
</div>
</div>
</article>
{/* Stage 05 */}
<article className="bg-surface p-space-lg flex flex-col justify-between space-y-space-md shadow-sm border border-outline-variant/30 group hover:shadow-md hover:border-secondary/40 transition-all">
<div className="space-y-space-sm">
<div className="flex items-baseline justify-between">
<span className="font-display text-headline-lg text-on-tertiary-container font-light">05</span>
<span className="font-label-sm text-label-sm tracking-widest uppercase text-secondary font-semibold">Surface Artistry</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-primary">Jamdani Discontinuous Weft</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Without any mechanical assistance, the master weaver inserts heavier bleached or gold zari threads thread-by-thread into the open weave using fine pointed bamboo needles (Kandu), creating motifs that float weightlessly like ink washed upon water.
              </p>
</div>
<div className="pt-space-md bg-surface-container-low p-space-sm space-y-space-xs border border-outline-variant/20">
<div className="flex justify-between font-label-sm text-label-sm text-on-surface-variant uppercase">
<span>Needle Gauge</span>
<span className="font-semibold text-primary">Carved Horn / Bamboo</span>
</div>
<div className="flex justify-between font-label-sm text-label-sm text-on-surface-variant uppercase">
<span>Motif Geometry</span>
<span className="font-semibold text-primary">Butidar Floral Scatter</span>
</div>
</div>
</article>
{/* Stage 06 */}
<article className="bg-surface p-space-lg flex flex-col justify-between space-y-space-md shadow-sm border border-outline-variant/30 group hover:shadow-md hover:border-secondary/40 transition-all">
<div className="space-y-space-sm">
<div className="flex items-baseline justify-between">
<span className="font-display text-headline-lg text-on-tertiary-container font-light">06</span>
<span className="font-label-sm text-label-sm tracking-widest uppercase text-secondary font-semibold">Natural Release</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-primary">River Rinsing &amp; Sun Softening</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                The finished mulmul is liberated from the loom rollers and rinsed in free-flowing Gangetic river waters to release the protective starch. Dried flat under the morning canopy of date palms, the cloth emerges with its celebrated cloud-like drape.
              </p>
</div>
<div className="pt-space-md bg-surface-container-low p-space-sm space-y-space-xs border border-outline-variant/20">
<div className="flex justify-between font-label-sm text-label-sm text-on-surface-variant uppercase">
<span>Finishing Process</span>
<span className="font-semibold text-primary">Flowing River Wash</span>
</div>
<div className="flex justify-between font-label-sm text-label-sm text-on-surface-variant uppercase">
<span>Drying Method</span>
<span className="font-semibold text-primary">Open-Air Canopy Shade</span>
</div>
</div>
</article>
</div>
</div>
</section>
{/* Weaver Tools & Loom Heritage Showcase */}
<section className="w-full bg-surface py-space-xl px-margin-mobile lg:px-margin border-b border-outline-variant/30">
<div className="max-w-7xl mx-auto space-y-space-xl">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
<div className="lg:col-span-5 space-y-space-md">
<div className="space-y-space-xs">
<span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-semibold">Instrumentarium</span>
<h2 className="font-headline-lg text-headline-lg text-primary font-normal">Tools of the Master Guild</h2>
</div>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              The handloom weaver relies on no electric current or pneumatic tensioner. Every instrument is carved from local saal, seasoned bamboo, or virgin brass—honed across generations to fit the exact contours of the weaver's palms.
            </p>
<div className="bg-surface-container p-space-md space-y-space-sm border border-outline-variant/30">
<div className="flex items-center gap-space-xs text-primary font-headline-sm text-headline-sm">
<span className="material-symbols-outlined text-secondary">handyman</span>
<span>The Bengal Pit Loom (Khaddi)</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
                Unlike raised European frame looms, the Indian pit loom sits low. The weaver's legs rest inside a carved earthen pit that stays cool, allowing natural humidity to preserve the fragility of high-count pure cotton singles.
              </p>
</div>
</div>
<div className="lg:col-span-7">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-gutter">
{/* Tool 1 */}
<div className="bg-surface-container-low p-space-md space-y-space-sm shadow-sm border border-outline-variant/20">
<div className="w-full aspect-[4/3] bg-surface overflow-hidden relative">
<img className="w-full h-full object-cover" data-alt="Macro still life of a handcrafted Indian weaver shuttle called a Maku made from aged dark teakwood with brass tipped ends." src="/images/stitch/img-88449e800cb5.png"/>
<span className="absolute bottom-2 left-2 bg-primary text-on-primary font-label-sm text-label-sm uppercase px-2 py-0.5">Wood &amp; Brass</span>
</div>
<h4 className="font-headline-sm text-headline-sm text-primary">MÄku (Flying Shuttle)</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant">
                  Carved from seasoned mahogany with brass caps, engineered for frictionless flight across fragile 100s warp threads without snagging.
                </p>
</div>
{/* Tool 2 */}
<div className="bg-surface-container-low p-space-md space-y-space-sm shadow-sm border border-outline-variant/20">
<div className="w-full aspect-[4/3] bg-surface overflow-hidden relative">
<img className="w-full h-full object-cover" data-alt="Close up architectural detail of a traditional Bengal Sana reed comb made with bamboo slivers." src="/images/stitch/img-0e37e4666a76.png"/>
<span className="absolute bottom-2 left-2 bg-primary text-on-primary font-label-sm text-label-sm uppercase px-2 py-0.5">Bamboo Splines</span>
</div>
<h4 className="font-headline-sm text-headline-sm text-primary">SÄna (Bamboo Reed)</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant">
                  Crafted from hand-split river bamboo teeth, governing the precise count and breathability of the drape per square centimetre.
                </p>
</div>
{/* Tool 3 */}
<div className="bg-surface-container-low p-space-md space-y-space-sm shadow-sm border border-outline-variant/20">
<div className="w-full aspect-[4/3] bg-surface overflow-hidden relative">
<img className="w-full h-full object-cover" data-alt="Traditional wooden spindles called Natai holding fine dyed cotton yarn inside an artisan workshop." src="/images/stitch/img-996eb280e43b.png"/>
<span className="absolute bottom-2 left-2 bg-primary text-on-primary font-label-sm text-label-sm uppercase px-2 py-0.5">Skein Spindle</span>
</div>
<h4 className="font-headline-sm text-headline-sm text-primary">Natai (Spindle Cage)</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant">
                  The lightweight skeletal bamboo wheel rotated by hand to transfer freshly botanically dyed skeins onto compact bobbins without tangling.
                </p>
</div>
{/* Tool 4 */}
<div className="bg-surface-container-low p-space-md space-y-space-sm shadow-sm border border-outline-variant/20">
<div className="w-full aspect-[4/3] bg-surface overflow-hidden relative">
<img className="w-full h-full object-cover" data-alt="Slender carved horn and bamboo Jamdani needles called Kandu placing pure gold zari into cotton mulmul." src="/images/stitch/img-8a0a36c70273.png"/>
<span className="absolute bottom-2 left-2 bg-primary text-on-primary font-label-sm text-label-sm uppercase px-2 py-0.5">Needlework</span>
</div>
<h4 className="font-headline-sm text-headline-sm text-primary">Kandu (Weft Needles)</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant">
                  Polished horn needles utilized in Jamdani inlays to physically embroider intricate botanical motifs directly upon the active loom shed.
                </p>
</div>
</div>
</div>
</div>
</div>
</section>
{/* Authenticity, Verification & Purity Standards */}
<section className="w-full bg-surface-container-low py-space-xl px-margin-mobile lg:px-margin">
<div className="max-w-7xl mx-auto space-y-space-lg">
<div className="max-w-3xl space-y-space-xs">
<span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-semibold">Provenance &amp; Integrity</span>
<h2 className="font-headline-lg text-headline-lg text-primary font-normal">Authenticity &amp; Purity Verification</h2>
<p className="font-body-md text-body-md text-on-surface-variant">
            In an era saturated with synthetic powerloom imitations, Desi Dhaaga maintains unbending benchmarks of natural handloom fidelity.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
{/* Certification Card 1 */}
<div className="bg-surface p-space-lg space-y-space-md shadow-sm border border-outline-variant/30">
<div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[26px]">verified</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-primary">India Handloom Mark Registry</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              Every sari carries a verified government-accredited handloom identification number, confirming authentic hand-shuttle execution with zero synthetic blend intrusion.
            </p>
<div className="font-label-sm text-label-sm text-secondary uppercase tracking-widest font-semibold flex items-center gap-1">
<span>Cert No. IHM-WB-44910</span>
<span className="material-symbols-outlined text-[14px]">arrow_forward</span>
</div>
</div>
{/* Verification Card 2: Burn Test Protocol */}
<div className="bg-surface p-space-lg space-y-space-md shadow-sm border border-outline-variant/30">
<div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[26px]">local_fire_department</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-primary">The Ancestral Burn Protocol</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              Pure 100s combed cotton yarn burns with a clear, steady yellow flame smelling of burnt paper, leaving a delicate gray, crushable ash without bead or synthetic melting.
            </p>
<div className="font-label-sm text-label-sm text-secondary uppercase tracking-widest font-semibold flex items-center gap-1">
<span>Pure Botanical Cellulosic Test</span>
<span className="material-symbols-outlined text-[14px]">arrow_forward</span>
</div>
</div>
{/* Care Guidelines */}
<div className="bg-surface p-space-lg space-y-space-md shadow-sm border border-outline-variant/30">
<div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[26px]">spa</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-primary">Mindful Care &amp; Longevity</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              Gently hand-rinse in cold water using natural reetha (soapnuts). Avoid direct scorching sunlight; dry in deep shade and store folded in unbleached muslin with dried neem leaves.
            </p>
<div className="font-label-sm text-label-sm text-secondary uppercase tracking-widest font-semibold flex items-center gap-1">
<span>Heirloom Preservation Guide</span>
<span className="material-symbols-outlined text-[14px]">arrow_forward</span>
</div>
</div>
</div>
{/* Guild Dispatch Inscription Box */}
<div className="bg-primary text-on-primary p-space-lg md:p-space-xl mt-space-xl relative overflow-hidden border border-[#d8ac42]/40">
<div className="absolute -right-10 -bottom-10 opacity-10 pointer-events-none">
<span className="material-symbols-outlined text-[240px]">texture</span>
</div>
<div className="relative z-10 max-w-2xl space-y-space-md">
<div className="flex items-center gap-space-xs text-on-tertiary-container font-label-sm text-label-sm tracking-widest uppercase">
<span className="w-1.5 h-1.5 rotate-45 bg-on-tertiary-container inline-block"></span>
<span>Artisan Direct Patronage</span>
</div>
<h3 className="font-headline-lg text-headline-lg font-normal leading-tight">
              Commission a Custom Count Weave
            </h3>
<p className="font-body-md text-body-md text-on-primary/80 font-light leading-relaxed">
              For ceremonial ceremonies and archival collectors, we arrange bespoke pit-loom commissions directly with our Santipur master weavers. Specify warp densities, natural dye extract baths, and personal Zari inlays.
            </p>
<div className="pt-space-xs flex flex-wrap gap-space-md items-center">
<a className="inline-block bg-on-tertiary-container text-tertiary px-space-lg py-space-md font-label-lg text-label-lg tracking-widest uppercase hover:bg-tertiary-fixed transition-colors font-semibold" href="#">
                Inquire With Our Guild Curator
              </a>
<a className="inline-flex items-center gap-space-xs text-tertiary-fixed hover:text-on-primary font-label-sm text-label-sm tracking-widest uppercase transition-colors" href="#">
<span>View Loom Dispatch Calendar</span>
<span className="material-symbols-outlined text-[16px]">north_east</span>
</a>
</div>
</div>
</div>
</div>
</section>
</main>
      <Footer />
    </>
  );
}
