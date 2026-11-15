"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

const categories = [
  { id: "all", label: "All Stories (34)" },
  { id: "guilds", label: "Guild Dispatches" },
  { id: "dyes", label: "Botanical Dyes & Pigments" },
  { id: "draping", label: "Draping Chronicles" },
  { id: "bengal", label: "Heritage Weaves of Bengal" },
];

export default function JournalPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [subscribed, setSubscribed] = useState(false);

  return (
    <>
      {/* TOP WRAPPER / HERO: Full-bleed authentic handcrafted Mulmul saree image (/images/stitch/img-2ac93d536e81.png) */}
<div className="relative w-full overflow-hidden bg-primary">
{/* Authentic Handcrafted Saree Texture Background */}
<div className="absolute inset-0 w-full h-full pointer-events-none">
<img alt="Handcrafted Mulmul Cotton Saree Texture" className="w-full h-full object-cover object-top opacity-95" src="/images/stitch/img-2ac93d536e81.png"/>
{/* Soft editorial gradient overlay for readability while letting green & red selvedge shine */}
<div className="absolute inset-0 bg-gradient-to-b from-black/25 via-primary/30 to-[#0c3523]/80"></div>
</div>
{/* SIGNATURE NAVBAR (Sitting directly over the top red selvedge band) */}
        <Header />
{/* ARCHIVAL TICKER SUB-STRIP (Directly under gold selvedge transition) */}
<div className="relative z-20 w-full bg-[#0c3523]/70 backdrop-blur-sm border-b border-[#d8ac42]/20 py-2 px-margin-mobile lg:px-margin">
<div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-y-2 text-[#fff9ee]/80 font-label-sm text-label-sm uppercase tracking-widest">
<div className="flex items-center gap-space-sm">
<span className="inline-block w-1.5 h-1.5 bg-[#fe716c] rounded-full"></span>
<span>Journal &amp; Archival Monograph</span>
<span className="text-[#d8ac42]/50">/</span>
<span className="text-[#ffdf9c] font-semibold">Fascicle No. 28</span>
</div>
<div className="flex items-center gap-space-md text-[10px]">
<span>Santipur &amp; Phulia Loom Guilds</span>
<span className="text-[#d8ac42]/50">|</span>
<span>Quarter IV "¢ Season of Hemanta</span>
</div>
</div>
</div>
{/* PERIODICAL MASTHEAD & HERO INTRODUCTION */}
<div className="relative z-20 max-w-7xl mx-auto px-margin-mobile lg:px-margin pt-10 pb-12 lg:pt-14 lg:pb-16 text-center">
<div className="inline-flex items-center gap-2 px-3.5 py-1 mb-4 rounded-full border border-[#d8ac42]/40 bg-[#3d2c00]/40 backdrop-blur-sm">
<span className="w-1.5 h-1.5 rounded-full bg-[#d8ac42]"></span>
<span className="font-label-sm text-[10px] sm:text-xs text-[#ffdf9c] uppercase tracking-[0.25em] font-medium">
          Desi Dhaaga Periodical "¢ Archival Monograph
        </span>
</div>
<h1 className="font-headline-lg text-4xl sm:text-5xl lg:text-6xl text-[#fff9ee] tracking-tight font-serif italic drop-shadow-sm">
        The Loom Gazette
      </h1>
<p className="mt-3 text-sm sm:text-base text-[#e8e2d7] max-w-2xl mx-auto font-body-md font-light leading-relaxed">
        Vol. IV "¢ An open-format ledger documenting ancient warp systems, natural botanical dyes, and pit-loom oral histories from Santipur and Phulia.
      </p>
{/* Zari Line Accent */}
<div className="w-full max-w-lg mx-auto py-5 flex items-center justify-center relative">
<div className="w-full h-px bg-gradient-to-r from-transparent via-[#d8ac42]/60 to-transparent"></div>
<div className="absolute px-3 bg-[#113a27] rounded-full flex items-center gap-1.5 text-[#ffdf9c]">
<span className="inline-block w-1 h-1 bg-[#d8ac42] rotate-45"></span>
<span className="font-label-sm text-[9px] uppercase tracking-[0.25em] text-[#ffdf9c]">Brocade &amp; Weft</span>
<span className="inline-block w-1 h-1 bg-[#d8ac42] rotate-45"></span>
</div>
</div>
</div>
{/* FEATURED LEAD MONOGRAPH CARD (Hero Spotlight) */}
<div className="relative z-20 max-w-7xl mx-auto px-margin-mobile lg:px-margin pb-16">
<article className="bg-surface-container-low rounded-none overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0 shadow-2xl border border-[#d8ac42]/30">
{/* Lead Image Column */}
<div className="lg:col-span-7 relative min-h-[380px] lg:min-h-[520px] overflow-hidden group">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="Close up view of artisanal fine count pure cotton Mulmul fabric in deep botanical sage green and olive tones, showcasing rich translucent folds, gossamer warp threads, subtle natural slubs, and delicate selvage edge softly lit by morning window sunlight." src="/images/stitch/img-a77de685e8b3.png"/>
<div className="absolute top-4 left-4 bg-primary text-on-primary font-label-sm text-label-sm uppercase px-3 py-1.5 tracking-widest border border-[#d8ac42]/30">
            Fascicle Lead
          </div>
<div className="absolute bottom-4 right-4 bg-surface-container/90 backdrop-blur-sm text-on-surface font-label-sm text-label-sm px-3 py-1 flex items-center gap-1.5 border border-[#d8ac42]/30">
<span className="material-symbols-outlined text-[14px] text-secondary">fiber_manual_record</span>
<span>100s Count Handspun Warp</span>
</div>
</div>
{/* Lead Story Content Column */}
<div className="lg:col-span-5 p-space-md sm:p-space-lg lg:p-space-xl flex flex-col justify-between bg-surface-container-low">
<div className="space-y-space-md">
<div className="flex items-center gap-space-sm text-secondary font-label-md text-label-md uppercase tracking-widest">
<span className="material-symbols-outlined text-[16px]">history_edu</span>
<span>Heritage Weaves of Bengal</span>
<span className="text-outline-variant">"¢</span>
<span className="text-on-surface-variant">11 Min Read</span>
</div>
<h2 className="font-headline-lg text-headline-lg lg:text-[2.1rem] lg:leading-[2.6rem] text-primary">
              Draped in Clouds: Why 100s Count Mulmul is the Sovereign Textile of the Gangetic Plain
            </h2>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Before steam cylinder mechanization emptied our riverfront guilds, muslin from Santipur and Dhaka was described as woven vapor. We trace how twelve multigenerational families in Nadia district preserved the fragile art of spinning Gossypium arboreum into drapes that soften with every ritual wash.
            </p>
{/* Technical Weave Metadata Plinth */}
<div className="bg-surface-container p-space-md space-y-space-xs border-l-2 border-[#d8ac42]">
<div className="grid grid-cols-2 gap-y-2 gap-x-4 font-body-sm text-body-sm">
<div>
<span className="block font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">Loom Architecture</span>
<span className="font-medium text-primary">4-Pedal Pit Loom</span>
</div>
<div>
<span className="block font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">Weft Density</span>
<span className="font-medium text-primary">112 Picks / Inch</span>
</div>
<div>
<span className="block font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">Field Pigment</span>
<span className="font-medium text-secondary">Ablution Ferment Neel</span>
</div>
<div>
<span className="block font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">Guild Origin</span>
<span className="font-medium text-primary">Phulia Cluster</span>
</div>
</div>
</div>
</div>
<div className="pt-space-md mt-space-md flex items-center justify-between border-t border-outline-variant/30">
<div className="flex items-center gap-space-sm">
<div className="w-10 h-10 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center font-headline-sm text-headline-sm">
                A
              </div>
<div className="flex flex-col">
<span className="font-label-md text-label-md font-semibold text-primary uppercase tracking-wider">Arundhati Gangopadhyay</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Curator, Eastern Guilds Registry</span>
</div>
</div>
<a className="inline-flex items-center gap-2 font-label-lg text-label-lg uppercase tracking-wider text-primary hover:text-secondary transition-colors group" href="#">
<span>Read Monograph</span>
<span className="material-symbols-outlined text-[16px] transition-transform duration-200 group-hover:translate-x-1">arrow_forward</span>
</a>
</div>
</div>
</article>
</div>
</div>
      <main className="w-full bg-surface">
{/* Editorial Category Filter Bar (Sticky) */}
<section className="w-full bg-surface-container py-space-sm px-margin-mobile lg:px-margin sticky top-0 z-40 backdrop-blur-md border-b border-outline-variant/30">
<div className="max-w-7xl mx-auto flex items-center justify-between gap-space-md overflow-x-auto no-scrollbar">
<div className="flex items-center gap-2 whitespace-nowrap py-1" id="categoryFilterContainer">
<button className="px-space-md py-1.5 bg-primary text-on-primary font-label-md text-label-md uppercase tracking-wider transition-colors filter-btn active" data-category="all">
            All Stories (34)
          </button>
<button className="px-space-md py-1.5 bg-surface text-on-surface hover:bg-surface-container-high font-label-md text-label-md uppercase tracking-wider transition-colors filter-btn" data-category="guilds">
            Guild Dispatches
          </button>
<button className="px-space-md py-1.5 bg-surface text-on-surface hover:bg-surface-container-high font-label-md text-label-md uppercase tracking-wider transition-colors filter-btn" data-category="dyes">
            Botanical Dyes &amp; Pigments
          </button>
<button className="px-space-md py-1.5 bg-surface text-on-surface hover:bg-surface-container-high font-label-md text-label-md uppercase tracking-wider transition-colors filter-btn" data-category="draping">
            Draping Chronicles
          </button>
<button className="px-space-md py-1.5 bg-surface text-on-surface hover:bg-surface-container-high font-label-md text-label-md uppercase tracking-wider transition-colors filter-btn" data-category="bengal">
            Heritage Weaves of Bengal
          </button>
</div>
<div className="hidden lg:flex items-center gap-space-sm whitespace-nowrap pl-4">
<span className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant">Archive Index:</span>
<span className="font-label-md text-label-md font-semibold text-primary">1890—2024</span>
</div>
</div>
</section>
{/* Main Grid & Sidebar Layout (12-Column Asymmetric) */}
<section className="w-full bg-surface py-space-xl px-margin-mobile lg:px-margin">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-space-lg">
{/* Primary Editorial Flow (8 Columns) */}
<div className="lg:col-span-8 space-y-space-xl">
{/* Section Subheading */}
<div className="flex items-baseline justify-between border-b border-outline-variant/30 pb-3">
<div>
<span className="font-label-sm text-label-sm uppercase tracking-[0.2em] text-secondary font-semibold">Field Monograph Dispatch</span>
<h3 className="font-headline-md text-headline-md text-primary mt-1">Curated Articles &amp; Weft Chronicles</h3>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant tracking-wider">6 Essays in Print</span>
</div>
{/* 2-Column Responsive Card Grid */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg">
{/* Card 1: Geometry of Jamdani */}
<article className="bg-surface-container-low group flex flex-col justify-between h-full shadow-sm border border-outline-variant/20 hover:border-[#d8ac42]/50 transition-colors">
<div className="relative overflow-hidden aspect-[4/3]">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" data-alt="Editorial macro flat lay photograph of a folded crimson madder red Jamdani handloom cotton saree on an aged wooden rustic surface with woven gold zari border accents and intricate floral paisley bootis." src="/images/stitch/img-72477e3118dc.png"/>
<span className="absolute top-3 left-3 bg-surface/90 backdrop-blur-sm text-secondary font-label-sm text-label-sm uppercase px-2.5 py-1 tracking-widest border border-[#d8ac42]/30">
                  Bengal Weaves
                </span>
</div>
<div className="p-space-md flex-1 flex flex-col justify-between">
<div>
<div className="flex items-center gap-2 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-2">
<span>8 Min Read</span>
<span>"¢</span>
<span>Shuttle Math</span>
</div>
<h4 className="font-headline-sm text-headline-sm text-primary mb-space-xs group-hover:text-secondary transition-colors">
                    The Geometry of Jamdani: Reading the Ancient Paisley and Floral Motifs
                  </h4>
<p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-3">
                    Every floral sprig (butidar) and almond-form paisley (kalka) is non-structural, laid by bamboo needle between the shed without graphs. An analysis of memory-based weaving verses.
                  </p>
</div>
<div className="pt-space-md mt-space-md flex items-center justify-between border-t border-outline-variant/20">
<span className="font-label-sm text-label-sm text-primary uppercase font-medium">B. Mukherjee</span>
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest font-semibold flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                    Explore <span className="material-symbols-outlined text-[14px]">arrow_right_alt</span>
</span>
</div>
</div>
</article>
{/* Card 2: Madder Harvest */}
<article className="bg-surface-container-low group flex flex-col justify-between h-full shadow-sm border border-outline-variant/20 hover:border-[#d8ac42]/50 transition-colors">
<div className="relative overflow-hidden aspect-[4/3]">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" data-alt="Artisanal vat dyeing laboratory showing bundles of pure cotton yarn immersed in natural terracotta red madder root dye liquor, with dried Rubia cordifolia roots displayed in clay bowls beside brass testing weights." src="/images/stitch/img-e7a57c4d8326.png"/>
<span className="absolute top-3 left-3 bg-surface/90 backdrop-blur-sm text-secondary font-label-sm text-label-sm uppercase px-2.5 py-1 tracking-widest border border-[#d8ac42]/30">
                  Natural Pigments
                </span>
</div>
<div className="p-space-md flex-1 flex flex-col justify-between">
<div>
<div className="flex items-center gap-2 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-2">
<span>6 Min Read</span>
<span>"¢</span>
<span>Alum &amp; Roots</span>
</div>
<h4 className="font-headline-sm text-headline-sm text-primary mb-space-xs group-hover:text-secondary transition-colors">
                    The Madder Harvest: How Rubia Cordifolia Creates India's Deep Sacred Red
                  </h4>
<p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-3">
                    Unveiling the cold-vat fermentation rites used by master dyers in Murshidabad to extract rich scarlet without synthetic fixatives, yielding colors that breathe alongside skin.
                  </p>
</div>
<div className="pt-space-md mt-space-md flex items-center justify-between border-t border-outline-variant/20">
<span className="font-label-sm text-label-sm text-primary uppercase font-medium">Dr. S. Ray</span>
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest font-semibold flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                    Explore <span className="material-symbols-outlined text-[14px]">arrow_right_alt</span>
</span>
</div>
</div>
</article>
{/* Card 3: Six Drapes, Six Seasons */}
<article className="bg-surface-container-low group flex flex-col justify-between h-full shadow-sm border border-outline-variant/20 hover:border-[#d8ac42]/50 transition-colors">
<div className="relative overflow-hidden aspect-[4/3]">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" data-alt="Graceful editorial full body portrait of an Indian woman draped in a madder red handspun cotton saree with intricate zari borders, standing inside a warm sandstone courtyard with arched architectural niches in soft natural light." src="/images/stitch/img-bf61d835ecad.png"/>
<span className="absolute top-3 left-3 bg-surface/90 backdrop-blur-sm text-secondary font-label-sm text-label-sm uppercase px-2.5 py-1 tracking-widest border border-[#d8ac42]/30">
                  Draping Chronicles
                </span>
</div>
<div className="p-space-md flex-1 flex flex-col justify-between">
<div>
<div className="flex items-center gap-2 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-2">
<span>14 Min Read</span>
<span>"¢</span>
<span>Sari Morphology</span>
</div>
<h4 className="font-headline-sm text-headline-sm text-primary mb-space-xs group-hover:text-secondary transition-colors">
                    Six Drapes, Six Seasons: Reviving Vintage Bengali and Chanderi Draping Styles
                  </h4>
<p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-3">
                    A step-by-step kinetic study moving from the pinless Atpoure drape of rural Bengal to the high-pleat movement designed for monsoon promenades and literary assemblies.
                  </p>
</div>
<div className="pt-space-md mt-space-md flex items-center justify-between border-t border-outline-variant/20">
<span className="font-label-sm text-label-sm text-primary uppercase font-medium">Kavita Sen</span>
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest font-semibold flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                    Explore <span className="material-symbols-outlined text-[14px]">arrow_right_alt</span>
</span>
</div>
</div>
</article>
{/* Card 4: Sound of the Shuttle */}
<article className="bg-surface-container-low group flex flex-col justify-between h-full shadow-sm border border-outline-variant/20 hover:border-[#d8ac42]/50 transition-colors">
<div className="relative overflow-hidden aspect-[4/3]">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" data-alt="Atmospheric documentary photograph of an elderly master weaver sitting at an earthy wooden pit loom surrounded by suspended cotton threads, shuttle flying through taut green and ecru warp yarns in soft ambient studio lighting." src="/images/stitch/img-1fa9c8419e98.png"/>
<span className="absolute top-3 left-3 bg-surface/90 backdrop-blur-sm text-secondary font-label-sm text-label-sm uppercase px-2.5 py-1 tracking-widest border border-[#d8ac42]/30">
                  Guild Dispatches
                </span>
</div>
<div className="p-space-md flex-1 flex flex-col justify-between">
<div>
<div className="flex items-center gap-2 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-2">
<span>10 Min Read</span>
<span>"¢</span>
<span>Master Portrait</span>
</div>
<h4 className="font-headline-sm text-headline-sm text-primary mb-space-xs group-hover:text-secondary transition-colors">
                    The Sound of the Shuttle: A Day in the Life of Santipur Weaver Biren Basak
                  </h4>
<p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-3">
                    At 71, Padma Shri recipient Biren Basak still calibrates warp tension by thumb resonance before dawn. An unhurried oral history recorded inside his bamboo-framed loom shed.
                  </p>
</div>
<div className="pt-space-md mt-space-md flex items-center justify-between border-t border-outline-variant/20">
<span className="font-label-sm text-label-sm text-primary uppercase font-medium">Guild Archives</span>
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest font-semibold flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                    Explore <span className="material-symbols-outlined text-[14px]">arrow_right_alt</span>
</span>
</div>
</div>
</article>
{/* Card 5: Seed to Selvedge */}
<article className="bg-surface-container-low group flex flex-col justify-between h-full shadow-sm border border-outline-variant/20 hover:border-[#d8ac42]/50 transition-colors">
<div className="relative overflow-hidden aspect-[4/3]">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" data-alt="Macro photography of raw desi organic cotton bolls with seeds on unbleached textured linen background beside brass calipers and hand-spun gossamer thread spools." src="/images/stitch/img-2a5b5376e9f8.png"/>
<span className="absolute top-3 left-3 bg-surface/90 backdrop-blur-sm text-secondary font-label-sm text-label-sm uppercase px-2.5 py-1 tracking-widest border border-[#d8ac42]/30">
                  Sustainability
                </span>
</div>
<div className="p-space-md flex-1 flex flex-col justify-between">
<div>
<div className="flex items-center gap-2 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-2">
<span>5 Min Read</span>
<span>"¢</span>
<span>Ecological Grace</span>
</div>
<h4 className="font-headline-sm text-headline-sm text-primary mb-space-xs group-hover:text-secondary transition-colors">
                    From Seed to Selvedge: The Environmental Grace of Slow Handloom Fashion
                  </h4>
<p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-3">
                    Measuring the literal zero-electricity footprint of rainfed Kala cotton and traditional pit-loom mechanics compared to high-speed jet spinning units.
                  </p>
</div>
<div className="pt-space-md mt-space-md flex items-center justify-between border-t border-outline-variant/20">
<span className="font-label-sm text-label-sm text-primary uppercase font-medium">N. Tarafdar</span>
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest font-semibold flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                    Explore <span className="material-symbols-outlined text-[14px]">arrow_right_alt</span>
</span>
</div>
</div>
</article>
{/* Card 6: Caring for Gossamer Cotton */}
<article className="bg-surface-container-low group flex flex-col justify-between h-full shadow-sm border border-outline-variant/20 hover:border-[#d8ac42]/50 transition-colors">
<div className="relative overflow-hidden aspect-[4/3]">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" data-alt="Still life photograph of folded heirloom ivory and red handloom mulmul sarees resting in an open antique teakwood armoire with dried neem leaves and lavender textile sachets tucked inside cloth wraps." src="/images/stitch/img-efce47ef31d4.png"/>
<span className="absolute top-3 left-3 bg-surface/90 backdrop-blur-sm text-secondary font-label-sm text-label-sm uppercase px-2.5 py-1 tracking-widest border border-[#d8ac42]/30">
                  Textile Preservation
                </span>
</div>
<div className="p-space-md flex-1 flex flex-col justify-between">
<div>
<div className="flex items-center gap-2 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-2">
<span>7 Min Read</span>
<span>"¢</span>
<span>Heirloom Care</span>
</div>
<h4 className="font-headline-sm text-headline-sm text-primary mb-space-xs group-hover:text-secondary transition-colors">
                    Caring for Gossamer Cotton: Preserving Your Mulmul Saree for Generations
                  </h4>
<p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-3">
                    Why dry-cleaning ruins the breathing fiber pore, how sunning replaces washing, and the ancestral technique of storing sarees with dried margosa (neem) leaves in unbleached muslin.
                  </p>
</div>
<div className="pt-space-md mt-space-md flex items-center justify-between border-t border-outline-variant/20">
<span className="font-label-sm text-label-sm text-primary uppercase font-medium">Conservators Guild</span>
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest font-semibold flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                    Explore <span className="material-symbols-outlined text-[14px]">arrow_right_alt</span>
</span>
</div>
</div>
</article>
</div>
{/* Pagination / Load Dispatch */}
<div className="pt-space-md flex items-center justify-between bg-surface-container-low p-space-md border border-outline-variant/30">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest">
              Showing 6 of 34 Monograph Dispatches
            </span>
<div className="flex items-center gap-2">
<button className="px-space-md py-2 bg-surface text-primary border border-outline-variant/40 hover:bg-surface-container-high font-label-md text-label-md uppercase tracking-wider transition-colors">
                Previous
              </button>
<button className="px-space-md py-2 bg-primary text-on-primary font-label-md text-label-md uppercase tracking-wider transition-colors">
                Next Fascicle
              </button>
</div>
</div>
</div>
{/* Curated Sidebar & Monograph Indices (4 Columns) */}
<aside className="lg:col-span-4 space-y-space-lg">
{/* Weavers' Dispatch Newsletter Monograph Box */}
<div className="bg-primary text-on-primary p-space-lg shadow-md relative overflow-hidden border border-[#d8ac42]/40">
<div className="space-y-space-md relative z-10">
<div className="flex items-center gap-space-xs text-[#ffdf9c]">
<span className="material-symbols-outlined text-[20px]">mark_email_read</span>
<span className="font-label-md text-label-md uppercase tracking-widest font-semibold">The Weaver's Dispatch</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-primary">
                Subscribe to Bi-Monthly Printed Monographs &amp; Archival Releases
              </h3>
<p className="font-body-sm text-body-sm text-[#e8e2d7] leading-relaxed">
                Every turn of the lunar month, we deliver hand-pressed botanical folios, guild interviews, and first access to limited yardage releases straight to your correspondence.
              </p>
<form className="space-y-space-sm pt-2" onSubmit={(e) => e.preventDefault()}>
<div>
<label className="block font-label-sm text-label-sm text-on-primary/70 uppercase tracking-wider mb-1" htmlFor="subscriber-name">
                    Full Name / Title
                  </label>
<input className="w-full bg-[#1b3c2c] text-on-primary placeholder:text-on-primary/50 text-body-sm font-body-sm px-space-md py-2.5 border border-[#d8ac42]/30 focus:outline-none focus:border-[#d8ac42]" id="subscriber-name" placeholder="Lady / Patron Name" required type="text"/>
</div>
<div>
<label className="block font-label-sm text-label-sm text-on-primary/70 uppercase tracking-wider mb-1" htmlFor="subscriber-email">
                    Mailing Address
                  </label>
<input className="w-full bg-[#1b3c2c] text-on-primary placeholder:text-on-primary/50 text-body-sm font-body-sm px-space-md py-2.5 border border-[#d8ac42]/30 focus:outline-none focus:border-[#d8ac42]" id="subscriber-email" placeholder="patron@domain.com" required type="email"/>
</div>
<button className="w-full py-3 bg-secondary text-on-secondary font-label-lg text-label-lg uppercase tracking-widest hover:bg-[#891b1f] transition-colors mt-2" type="submit">
                  Inscribe to Gazette
                </button>
<span className="block text-center font-label-sm text-[10px] text-on-primary/60 tracking-wider pt-1">
                  Zero spam. Printed on recycled mill parchment.
                </span>
</form>
</div>
</div>
{/* Most Read Monographs & Curated Reading List */}
<div className="bg-surface-container-low p-space-lg shadow-sm space-y-space-md border border-outline-variant/30">
<div className="flex items-center justify-between pb-space-xs border-b border-outline-variant/30">
<h4 className="font-headline-sm text-headline-sm text-primary">
                Most Read Monographs
              </h4>
<span className="font-label-sm text-label-sm text-secondary font-semibold uppercase tracking-widest">
                Indices
              </span>
</div>
<div className="space-y-space-md divide-y divide-outline-variant/30">
{/* Article Item 01 */}
<a className="pt-space-md first:pt-0 group block" href="#">
<div className="flex items-start gap-space-sm">
<span className="font-headline-sm text-headline-sm text-[#d8ac42] group-hover:text-secondary transition-colors font-serif">01</span>
<div>
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest block mb-0.5">Dye History</span>
<h5 className="font-body-md text-body-md font-medium text-primary group-hover:text-secondary transition-colors leading-snug">
                      The Indigo Vats of Nadia: Chemical Independence and River Silt
                    </h5>
<span className="font-label-sm text-label-sm text-on-surface-variant mt-1 block">9,410 Readings</span>
</div>
</div>
</a>
{/* Article Item 02 */}
<a className="pt-space-md group block" href="#">
<div className="flex items-start gap-space-sm">
<span className="font-headline-sm text-headline-sm text-[#d8ac42] group-hover:text-secondary transition-colors font-serif">02</span>
<div>
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest block mb-0.5">Loom Anatomy</span>
<h5 className="font-body-md text-body-md font-medium text-primary group-hover:text-secondary transition-colors leading-snug">
                      Why the Throw-Shuttle Pit Loom Produces Softer Cloth Than Fly-Shuttles
                    </h5>
<span className="font-label-sm text-label-sm text-on-surface-variant mt-1 block">7,820 Readings</span>
</div>
</div>
</a>
{/* Article Item 03 */}
<a className="pt-space-md group block" href="#">
<div className="flex items-start gap-space-sm">
<span className="font-headline-sm text-headline-sm text-[#d8ac42] group-hover:text-secondary transition-colors font-serif">03</span>
<div>
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest block mb-0.5">Saree Rituals</span>
<h5 className="font-body-md text-body-md font-medium text-primary group-hover:text-secondary transition-colors leading-snug">
                      The Wedding Aanchal: Symbolic Motifs Woven into Bengali Bridal Mulmul
                    </h5>
<span className="font-label-sm text-label-sm text-on-surface-variant mt-1 block">11,204 Readings</span>
</div>
</div>
</a>
{/* Article Item 04 */}
<a className="pt-space-md group block" href="#">
<div className="flex items-start gap-space-sm">
<span className="font-headline-sm text-headline-sm text-[#d8ac42] group-hover:text-secondary transition-colors font-serif">04</span>
<div>
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest block mb-0.5">Guild Legal</span>
<h5 className="font-body-md text-body-md font-medium text-primary group-hover:text-secondary transition-colors leading-snug">
                      Protecting Geographical Indication for Santipur Cotton Sarees
                    </h5>
<span className="font-label-sm text-label-sm text-on-surface-variant mt-1 block">5,630 Readings</span>
</div>
</div>
</a>
</div>
</div>
{/* Curated Reading List: Archival Box */}
<div className="bg-surface-container p-space-md space-y-space-sm border border-outline-variant/30">
<span className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-semibold block">
              Archivist's Recommended Anthology
            </span>
<p className="font-body-sm text-body-sm text-on-surface-variant">
              Explore our downloadable monographs formatted for print and academic preservation. Includes full loom threading diagrams and oral histories.
            </p>
<a className="inline-flex items-center gap-2 font-label-md text-label-md uppercase tracking-wider text-secondary font-medium pt-1 hover:underline" href="#">
<span className="material-symbols-outlined text-[16px]">file_download</span>
<span>Download Fascicle PDF (18 MB)</span>
</a>
</div>
{/* Textile Glossary Micro-Card */}
<div className="bg-surface-container-low p-space-md shadow-sm border border-outline-variant/30">
<div className="flex items-center justify-between mb-2">
<span className="font-label-sm text-label-sm text-secondary font-semibold uppercase tracking-widest">Glossary Term</span>
<span className="material-symbols-outlined text-[16px] text-tertiary-fixed-dim">translate</span>
</div>
<h5 className="font-headline-sm text-headline-sm text-primary mb-1">Kora (à¤•à¥‹à¤°à¤¾)</h5>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              Raw, unbleached, and unstarched natural cotton straight from the pit loom. It retains the delicate natural scent of sun-warmed cotton fields and river mist.
            </p>
</div>
</aside>
</div>
</section>
{/* Visual Monograph Strip: Tactile Fabric Exploration */}
<section className="w-full bg-surface-container-high py-space-xl px-margin-mobile lg:px-margin border-t border-outline-variant/30">
<div className="max-w-7xl mx-auto space-y-space-lg">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
<div>
<span className="font-label-sm text-label-sm uppercase tracking-[0.2em] text-secondary font-semibold">Micro-Inspection &amp; Field Records</span>
<h3 className="font-headline-md text-headline-md text-primary mt-1">The Tactile Geometry of 100s Count Mulmul</h3>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant max-w-md">
            A physical exploration of our warp-and-weft densities, recorded under natural daylight on traditional mahogany trestles in Phulia.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
{/* Visual 1 */}
<div className="bg-surface p-space-md shadow-sm space-y-space-sm border border-outline-variant/20">
<div className="aspect-square overflow-hidden bg-surface-container">
<img className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" data-alt="Macro textile photograph of folded rich moss green cotton saree fabric highlighting natural textured surface slubs, gossamer thread density, and organic cotton warp drape." src="/images/stitch/img-ea257d204573.png"/>
</div>
<div className="flex items-center justify-between pt-2">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-semibold">Plate A-12</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Nadia Cluster</span>
</div>
<h4 className="font-headline-sm text-headline-sm text-primary">Moss Mulmul Selvage</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant">
              Unrefined natural botanical dye bath creating undulating organic green hues that breathe with warmth.
            </p>
</div>
{/* Visual 2 */}
<div className="bg-surface p-space-md shadow-sm space-y-space-sm border border-outline-variant/20">
<div className="aspect-square overflow-hidden bg-surface-container">
<img className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" data-alt="Editorial close up photograph of deep madder red cotton saree pallu with gold zari interwoven stripes laid on historic textured wood." src="/images/stitch/img-cf4add457dff.png"/>
</div>
<div className="flex items-center justify-between pt-2">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-semibold">Plate B-04</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Santipur Guild</span>
</div>
<h4 className="font-headline-sm text-headline-sm text-primary">Madder &amp; Zari Inlay</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant">
              Pure metallic electroplated gold thread paired with hand-dyed madder red root extracts.
            </p>
</div>
{/* Visual 3 */}
<div className="bg-surface p-space-md shadow-sm space-y-space-sm border border-outline-variant/20">
<div className="aspect-square overflow-hidden bg-surface-container">
<img className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" data-alt="Atmospheric studio photograph of a woman gracefully wrapping an opulent crimson red handloom saree with intricate floral motifs in a serene architectural setting." src="/images/stitch/img-42f80556d9a0.png"/>
</div>
<div className="flex items-center justify-between pt-2">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-semibold">Plate C-09</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Kolkata Archives</span>
</div>
<h4 className="font-headline-sm text-headline-sm text-primary">Ceremonial Draping Fall</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant">
              The airy gravity of 100s count sheer weave cascading over the shoulder in the historic Atpoure style.
            </p>
</div>
</div>
</div>
</section>
{/* Editorial Quote & Colophon Banner */}
<section className="w-full bg-surface py-space-xl px-margin-mobile lg:px-margin border-t border-outline-variant/20">
<div className="max-w-4xl mx-auto text-center space-y-space-md">
<span className="material-symbols-outlined text-[36px] text-secondary">format_quote</span>
<blockquote className="font-headline-lg text-headline-lg lg:text-3xl text-primary italic leading-relaxed font-serif">
          "The true glory of Indian mulmul lies not in mechanical symmetry, but in the living rhythm of the weaver's heartbeat transferred through the shuttle into cloth."
        </blockquote>
<div className="pt-2">
<span className="font-label-lg text-label-lg uppercase tracking-widest text-primary font-semibold block">Kamaladevi Chattopadhyay</span>
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Champion of Indian Handlooms &amp; Guild Revival</span>
</div>
</div>
</section>
</main>
      <Footer />
    </>
  );
}
