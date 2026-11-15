import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Story — Desi Dhaaga",
  description: "Centuries of living memory, subterranean pit looms, and 100s count gossamer cotton along Bengal's historic riverbanks.",
};

export default function OurStoryPage() {
  return (
    <>
      {/* IMMERSIVE TEXTILE HERO WRAPPER (Includes transparent navbar over red selvedge band & green body below) */}
<div className="relative w-full overflow-hidden bg-[#254C38]">
{/* Authentic Mulmul Cotton Saree Background (Red top selvedge + gold thread line + rich green mulmul body) */}
<img alt="Authentic Handcrafted Mulmul Cotton Saree Textile" className="absolute inset-0 w-full h-full object-cover object-top select-none pointer-events-none" src="/images/stitch/img-2ac93d536e81.png"/>
{/* Subtle gradient scrim to enhance contrast while preserving authentic weave texture */}
<div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-primary/80 pointer-events-none"></div>
{/* SIGNATURE NAVBAR (Sitting directly over the top red selvedge band with transparent background) */}
        <Header />
{/* HERO CONTENT (Resting on the green mulmul weave field) */}
<section className="relative z-20 w-full px-margin-mobile lg:px-margin pt-12 md:pt-16 pb-20 md:pb-24">
<div className="max-w-7xl mx-auto flex flex-col items-start">
{/* Breadcrumb & Monograph Index */}
<div className="flex items-center justify-between w-full pb-space-sm mb-space-md border-b border-[#D9AD43]/20">
<div className="flex items-center gap-space-xs font-label-sm text-label-sm text-[#fff9ee]/80 uppercase tracking-widest">
<a className="hover:text-[#ffdf9c] transition-colors" data-path="shop-sarees" href="#">Provenance</a>
<span>/</span>
<span className="text-[#ffdf9c] font-semibold">Our Story &amp; Loom Ethos</span>
</div>
<span className="hidden md:inline-block font-label-sm text-label-sm uppercase tracking-widest text-[#ffdf9c] font-semibold">
          ESTD. 2018 "¢ PHULIA &amp; SANTIPUR
        </span>
</div>
{/* Eyebrow Tag */}
<div className="inline-flex items-center gap-space-sm mb-space-md bg-black/25 backdrop-blur-sm border border-[#D9AD43]/40 px-space-md py-1">
<span className="h-1.5 w-1.5 rounded-full bg-[#D9AD43] animate-pulse"></span>
<span className="font-label-sm text-label-sm uppercase tracking-[0.2em] text-[#ffdf9c] font-bold">PROVENANCE &amp; ANCESTRAL WEFT</span>
</div>
{/* Primary Editorial Headline */}
<h1 className="font-display text-3xl sm:text-5xl lg:text-6xl text-[#fff9ee] leading-[1.15] mb-space-md max-w-4xl drop-shadow-sm">
        Woven into Being — <br className="hidden sm:inline"/>
<span className="italic font-normal text-[#ffdf9c]">The Soul of Desi Dhaaga.</span>
</h1>
{/* Editorial Subtitle */}
<p className="font-body-lg text-lg sm:text-xl text-[#f9f3e8]/90 max-w-2xl leading-relaxed mb-space-lg font-light">
        Centuries of living memory, subterranean pit looms, and 100s count gossamer cotton along Bengal's historic riverbanks.
      </p>
{/* Key Floating Metrics Badges / Archival Tags */}
<div className="flex flex-wrap items-center gap-space-sm sm:gap-space-md pt-space-xs">
<div className="flex items-center gap-space-xs bg-[#fff9ee]/10 backdrop-blur-md border border-[#D9AD43]/50 px-space-md py-2 shadow-md">
<span className="material-symbols-outlined text-[#ffdf9c] text-[18px]">verified</span>
<span className="font-label-sm text-label-sm tracking-widest uppercase text-[#fff9ee] font-semibold">100s Gossamer Count</span>
</div>
<div className="flex items-center gap-space-xs bg-[#fff9ee]/10 backdrop-blur-md border border-[#D9AD43]/50 px-space-md py-2 shadow-md">
<span className="material-symbols-outlined text-[#ffdf9c] text-[18px]">groups</span>
<span className="font-label-sm text-label-sm tracking-widest uppercase text-[#fff9ee] font-semibold">14 Master Guilds</span>
</div>
<div className="flex items-center gap-space-xs bg-[#fff9ee]/10 backdrop-blur-md border border-[#D9AD43]/50 px-space-md py-2 shadow-md">
<span className="material-symbols-outlined text-[#ffdf9c] text-[18px]">location_on</span>
<span className="font-label-sm text-label-sm tracking-widest uppercase text-[#fff9ee] font-semibold">Phulia &amp; Santipur</span>
</div>
<div className="flex items-center gap-space-xs bg-[#fff9ee]/10 backdrop-blur-md border border-[#D9AD43]/50 px-space-md py-2 shadow-md">
<span className="material-symbols-outlined text-[#ffdf9c] text-[18px]">eco</span>
<span className="font-label-sm text-label-sm tracking-widest uppercase text-[#fff9ee] font-semibold">100% Organic Mulmul</span>
</div>
</div>
</div>
</section>
</div>
      <main className="w-full bg-surface min-h-[calc(100vh-80px)]"><div className="flex flex-col w-full">
{/* Top Editorial Notice Bar */}
<section className="w-full bg-surface-container-high py-space-xs px-margin-mobile lg:px-margin border-b border-outline-variant/30">
<div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-space-xs text-on-surface-variant">
<div className="flex items-center gap-space-sm">
<span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
<span className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-semibold">Archival Registry Edition "¢ Vol. IV</span>
</div>
<p className="font-label-sm text-label-sm tracking-widest text-on-surface-variant uppercase">
        Preserving 14 Master Guilds across Nadia &amp; Hooghly Basins
      </p>
</div>
</section>
{/* Section 1: The Genesis Narrative & Archival Composition */}
<section className="w-full px-margin-mobile lg:px-margin pt-space-lg lg:pt-space-xl pb-space-xl">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg lg:gap-gutter items-start">
{/* Left: Poetic Story Genesis (7 cols) */}
<div className="lg:col-span-7 flex flex-col pr-0 lg:pr-space-lg">
<div className="inline-flex items-center gap-space-sm mb-space-md">
<span className="h-px w-10 bg-secondary"></span>
<span className="font-label-lg text-label-lg uppercase tracking-widest text-secondary font-semibold">The Genesis of Gossamer</span>
</div>
<h2 className="font-headline-lg text-headline-lg lg:text-3xl text-primary leading-tight mb-space-md">
            Woven winds born on the banks of Nadia &amp; the Hooghly basin.
</h2>
<p className="font-body-lg text-body-lg text-on-surface-variant font-light leading-relaxed mb-space-lg">
            From the historic, misted banks of Santipur and Phulia, breathing timeless breath into India's 100s count sheer mulmul cotton tradition.
</p>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md pt-space-xs mb-space-lg">
<div className="space-y-space-xs bg-surface-container-low p-space-md border-l-2 border-primary">
<span className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-bold block">01 / The Forgotten Cloud</span>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Centuries before mechanical spindles sped across factories, Bengal's mulmul was spoken of by Roman travelers as <em>venti textiles</em>—woven winds. A fabric so light, it could slip through a signet ring and vanish against morning skin.
              </p>
</div>
<div className="space-y-space-xs bg-surface-container-low p-space-md border-l-2 border-secondary">
<span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold block">02 / The Handloom Sanctuary</span>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Desi Dhaaga was founded as a quiet resistance against synthetic churn. We weave exclusively on traditional sunken pit looms, sustaining master guilds who carry two centuries of unbroken generational memory.
              </p>
</div>
</div>
{/* Technical Weave Badge */}
<div className="bg-surface-container p-space-md flex flex-wrap items-center justify-between gap-space-sm border border-outline-variant/30">
<div className="flex items-center gap-space-md">
<div className="w-10 h-10 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-[22px]">nest_eco_leaf</span>
</div>
<div>
<span className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-bold block">Natural Alchemy Only</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Indigofera Tinctoria "¢ Indian Madder "¢ Raw Kattha &amp; Turmeric</span>
</div>
</div>
<a className="font-label-sm text-label-sm uppercase tracking-widest text-secondary hover:text-primary transition-colors flex items-center gap-1 font-semibold" href="#philosophy">
              Read Registry <span className="material-symbols-outlined text-[16px]">arrow_downward</span>
</a>
</div>
</div>
{/* Right: Archival Visual Composition (5 cols) */}
<div className="lg:col-span-5 flex flex-col gap-space-md relative">
{/* Primary Portrait Frame */}
<div className="relative bg-surface-container-low shadow-sm p-space-sm group border border-outline-variant/30">
<div className="overflow-hidden aspect-[4/5] relative">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="Editorial portrait of an Indian woman wearing an ethereal off-white mulmul cotton saree with delicate green woven temple border and small hand-block printed buti motifs, standing gracefully in a sunlit ancestral courtyard with textured plaster walls and lush greenery in Phulia, soft warm cinematic lighting, editorial fine art photography." src="/images/stitch/img-3cbe8c12820b.png"/>
<div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent p-space-md text-on-primary">
<span className="font-label-sm text-label-sm uppercase tracking-widest text-[#ffdf9c] block mb-0.5">Varanasi &amp; Nadia Archive</span>
<p className="font-headline-sm text-headline-sm italic">The Ivory Kora Mulmul Saree with Neer-Jali Pallu</p>
</div>
</div>
</div>
{/* Micro Inset Overlap Card */}
<div className="bg-surface-container-lowest p-space-md shadow-md sm:-mt-12 sm:ml-8 sm:w-11/12 relative z-10 border border-outline-variant/30">
<div className="flex items-center gap-space-md">
<div className="w-16 h-16 shrink-0 bg-surface-container overflow-hidden">
<img className="w-full h-full object-cover" data-alt="Macro close-up shot of gossamer fine 100s count unbleached off-white mulmul cotton textile showing delicate open weave threads and a shimmering real zari gold thread selvage resting on rustic weathered dark wooden loom beam." src="/images/stitch/img-46884c078fd3.png"/>
</div>
<div className="flex-1 min-w-0">
<span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold block">Warp Purity Index</span>
<p className="font-body-sm text-body-sm text-on-surface truncate">100/1s Combed Handspun Gossamer Weft</p>
<span className="font-label-sm text-label-sm text-on-surface-variant block mt-0.5">Average count density: 88 picks/inch</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
{/* Zari Accent Rule */}
<div className="max-w-7xl mx-auto w-full px-margin-mobile lg:px-margin my-space-md flex items-center justify-center gap-space-md">
<div className="h-px bg-[#d8ac42]/40 flex-1"></div>
<div className="flex items-center gap-1.5 text-on-tertiary-container">
<span className="w-2 h-2 rotate-45 bg-[#d8ac42]/80 inline-block"></span>
<span className="w-1.5 h-1.5 rotate-45 bg-[#d8ac42]/50 inline-block"></span>
</div>
<div className="h-px bg-[#d8ac42]/40 flex-1"></div>
</div>
{/* Section 2: The Genesis & Guild Philosophy */}
<section className="w-full bg-surface-container-low py-space-xl px-margin-mobile lg:px-margin" id="philosophy">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl">
{/* Left Column: The Philosophy Narrative */}
<div className="lg:col-span-4 flex flex-col justify-between">
<div>
<span className="font-label-lg text-label-lg uppercase tracking-widest text-secondary font-bold mb-space-xs block">The Weaver's Monolith</span>
<h2 className="font-headline-lg text-headline-lg text-primary mb-space-md leading-tight">
              An unhurried cadence against industrial speed.
            </h2>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-space-lg">
              Each sari created under the Desi Dhaaga banner represents an intimate covenant between the tree, the earth, the artisan's breath, and your skin. We do not mass-produce; we archive human patience.
            </p>
</div>
{/* Guild Seal / Brand Mark Plinth */}
<div className="bg-surface-container p-space-md flex items-center gap-space-md border border-outline-variant/30">
<div className="w-14 h-14 rounded-full bg-surface-container-lowest flex items-center justify-center shrink-0 shadow-sm overflow-hidden p-1 border border-[#D9AD43]/30">
<img alt="Desi Dhaaga Handloom Seal" className="w-full h-full object-cover" src="/images/stitch/img-c1751dc03526.png"/>
</div>
<div>
<span className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-bold block">Santipur &amp; Phulia Guild Covenant</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Guaranteed direct-to-artisan royalty per drape.</span>
</div>
</div>
</div>
{/* Right Column: 3-Pillar Asymmetric Layout */}
<div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-space-md">
{/* Pillar 1 */}
<div className="bg-surface p-space-lg shadow-sm flex flex-col justify-between border border-outline-variant/30">
<div>
<div className="flex items-center justify-between mb-space-md">
<span className="font-label-sm text-label-sm tracking-widest text-secondary uppercase font-bold">Pillar I</span>
<span className="material-symbols-outlined text-primary">psychology_alt</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-primary mb-space-xs">Ancestral Pit Looms</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Our artisans sit on wooden planks over earthen pits dug into the floor of their homes. This subterranean pit retains natural humid microclimates, preventing gossamer 100s count cotton yarn from snapping under tension during hot summer days.
              </p>
</div>
<div className="mt-space-md pt-space-sm bg-surface-container-low px-space-sm py-1 inline-block">
<span className="font-label-sm text-label-sm uppercase tracking-widest text-primary">0% Motorized Intervention</span>
</div>
</div>
{/* Pillar 2 */}
<div className="bg-surface p-space-lg shadow-sm flex flex-col justify-between border border-outline-variant/30">
<div>
<div className="flex items-center justify-between mb-space-md">
<span className="font-label-sm text-label-sm tracking-widest text-secondary uppercase font-bold">Pillar II</span>
<span className="material-symbols-outlined text-primary">water_drop</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-primary mb-space-xs">Gangetic Herbal Vats</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                We shun chemical azos. Deep indigo is fermented with jaggery and lime; madder roots lend earthy terracottas; sweet khair bark delivers warm teak browns. Sarees are washed in fresh flowing river currents to set mineral fastness.
              </p>
</div>
<div className="mt-space-md pt-space-sm bg-surface-container-low px-space-sm py-1 inline-block">
<span className="font-label-sm text-label-sm uppercase tracking-widest text-primary">Rainfed &amp; River Cleansed</span>
</div>
</div>
{/* Pillar 3: Spanning Wide */}
<div className="md:col-span-2 bg-surface p-space-lg shadow-sm flex flex-col md:flex-row gap-space-lg items-center border border-outline-variant/30">
<div className="w-full md:w-1/3 aspect-[4/3] bg-surface-container overflow-hidden shrink-0">
<img className="w-full h-full object-cover" data-alt="Artisan weaver hand placing delicate needle shuttle through fine white cotton threads on a traditional wooden pit loom, dust motes dancing in shafts of natural morning light inside an open-air village workshop." src="/images/stitch/img-f323fa8af63f.png"/>
</div>
<div className="flex-1">
<div className="flex items-center justify-between mb-space-xs">
<span className="font-label-sm text-label-sm tracking-widest text-secondary uppercase font-bold">Pillar III</span>
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Living Heirlooms</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-primary mb-space-xs">Revival of Lost Jamdani Motifs</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mb-space-sm">
                In partnership with regional textile scholars, we have resurrected 18 historic Jamdani motifs—from the delicate <em>Butidar</em> (sprigged florals) to the ceremonial <em>Panna Hajar</em> (thousand emeralds) border, woven entirely by eye without graph paper guides.
              </p>
<div className="flex items-center gap-space-sm text-primary font-label-md text-label-md uppercase tracking-wider font-semibold">
<span>Santipur "¢ Samudragarh "¢ Phulia Basin</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
{/* Section 3: The Guild Tapestry (Milestones & Fair Trade Ethics) */}
<section className="w-full py-space-xl px-margin-mobile lg:px-margin bg-surface">
<div className="max-w-7xl mx-auto">
<div className="text-center max-w-2xl mx-auto mb-space-xl">
<span className="font-label-lg text-label-lg uppercase tracking-widest text-secondary font-bold block mb-space-xs">Timeline of Slow Weaving</span>
<h2 className="font-headline-lg text-headline-lg text-primary">Milestones in Textile Preservation</h2>
<div className="w-12 h-0.5 bg-secondary mx-auto mt-space-sm"></div>
</div>
{/* Asymmetrical Milestone Cards */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md">
{/* Milestone 1 */}
<div className="bg-surface-container p-space-md flex flex-col justify-between hover:bg-surface-container-high transition-colors border border-outline-variant/30">
<div>
<span className="font-display text-headline-lg text-secondary/30 font-bold block mb-space-xs">2018</span>
<span className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-bold block mb-space-xs">The Initial 12 Looms</span>
<p className="font-body-sm text-body-sm text-on-surface-variant">
              Begun in Phulia with twelve generational pit looms facing obsolescence due to synthetic powerloom dumping in local markets.
            </p>
</div>
<div className="pt-space-md mt-space-md bg-surface-container-low/50 px-space-xs py-1">
<span className="font-label-sm text-label-sm text-on-surface-variant font-medium">Fair Wage Guarantee "¢ +65% Above Mill Rates</span>
</div>
</div>
{/* Milestone 2 */}
<div className="bg-surface-container p-space-md flex flex-col justify-between hover:bg-surface-container-high transition-colors border border-outline-variant/30">
<div>
<span className="font-display text-headline-lg text-secondary/30 font-bold block mb-space-xs">2020</span>
<span className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-bold block mb-space-xs">The 100s Yarn Mandate</span>
<p className="font-body-sm text-body-sm text-on-surface-variant">
              Completely phased out blended mill cottons. Certified 100% GOTS indigenous organic staple cotton yarn spun specifically for handloom drapes.
            </p>
</div>
<div className="pt-space-md mt-space-md bg-surface-container-low/50 px-space-xs py-1">
<span className="font-label-sm text-label-sm text-on-surface-variant font-medium">Pure Breathability "¢ Zero Microplastics</span>
</div>
</div>
{/* Milestone 3 */}
<div className="bg-surface-container p-space-md flex flex-col justify-between hover:bg-surface-container-high transition-colors border border-outline-variant/30">
<div>
<span className="font-display text-headline-lg text-secondary/30 font-bold block mb-space-xs">2022</span>
<span className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-bold block mb-space-xs">Women Weavers Guild</span>
<p className="font-body-sm text-body-sm text-on-surface-variant">
              Established the first independent Jamdani design co-operative led by women master inlayers across Santipur, reclaiming autonomous family wages.
            </p>
</div>
<div className="pt-space-md mt-space-md bg-surface-container-low/50 px-space-xs py-1">
<span className="font-label-sm text-label-sm text-on-surface-variant font-medium">78 Master Women Artisans Enrolled</span>
</div>
</div>
{/* Milestone 4 */}
<div className="bg-surface-container p-space-md flex flex-col justify-between hover:bg-surface-container-high transition-colors border border-outline-variant/30">
<div>
<span className="font-display text-headline-lg text-secondary/30 font-bold block mb-space-xs">2024</span>
<span className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-bold block mb-space-xs">The Living Archive</span>
<p className="font-body-sm text-body-sm text-on-surface-variant">
              Every Desi Dhaaga sari now ships with an artisan QR registry card detailing loom coordinates, days woven, and the master's personal signature mark.
            </p>
</div>
<div className="pt-space-md mt-space-md bg-surface-container-low/50 px-space-xs py-1">
<span className="font-label-sm text-label-sm text-on-surface-variant font-medium">100% Provenance Traceability</span>
</div>
</div>
</div>
</div>
</section>
{/* Section 4: Master Weaver Portrait Spotlight (Deep Forest Green #254C38 background) */}
<section className="w-full bg-[#254C38] text-on-primary py-space-xl px-margin-mobile lg:px-margin relative overflow-hidden">
{/* Subtle Background Ambient Glow */}
<div className="absolute -right-20 -bottom-20 w-96 h-96 rounded-full bg-[#3f6651]/30 blur-3xl pointer-events-none"></div>
<div className="max-w-7xl mx-auto relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
{/* Left: Imagery of Master Weaver */}
<div className="lg:col-span-5 relative">
<div className="aspect-[3/4] bg-[#0c3523] overflow-hidden shadow-xl ring-1 ring-[#D9AD43]/30">
<img className="w-full h-full object-cover" data-alt="Intimate portrait of an elderly Indian master weaver with gentle eyes and weathered silver hair, wearing simple khadi kurta, sitting by a wooden loom reed in an artisan workshop in Bengal, golden afternoon light hitting his hands as he threads cotton yarn, documentary editorial photography." src="/images/stitch/img-9ea909dc6426.png"/>
</div>
<div className="bg-surface text-on-surface p-space-md shadow-lg sm:-mt-10 sm:-mr-8 sm:w-10/12 relative z-10 ml-auto border-l-4 border-secondary">
<span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold block">Artisan ID: DD-PHL-004</span>
<h4 className="font-headline-sm text-headline-sm text-primary">Master Biren Basak</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant">42 Years on the Pit Loom "¢ Phulia Guild Elder</p>
</div>
</div>
{/* Right: The Weaver's Voice */}
<div className="lg:col-span-7 flex flex-col justify-center pl-0 lg:pl-space-lg">
<div className="flex items-center gap-space-sm mb-space-md">
<span className="material-symbols-outlined text-[#ffdf9c] text-[32px]">format_quote</span>
<span className="font-label-md text-label-md uppercase tracking-widest text-[#ffdf9c]">Voices from the Pit Loom</span>
</div>
<blockquote className="font-headline-lg text-headline-lg lg:text-headline-lg text-[#fff9ee] leading-relaxed mb-space-lg italic">
            "When you touch machine cloth, you feel iron and clockwork. When you touch a true mulmul, you feel human hands that breathed with every passing of the shuttle. It does not cling to you; it embraces you like clean water."
          </blockquote>
<div className="space-y-space-sm mb-space-lg">
<div className="flex items-center gap-space-md">
<span className="w-2.5 h-2.5 rounded-full bg-[#D9AD43]"></span>
<p className="font-body-sm text-body-sm text-[#fff9ee]/90">
<strong>Aruna Sen (Santipur Jamdani Guild):</strong> "Each pallu pattern is calculated in our heads through rhythm. We sing counting songs passed down from grandmother to daughter."
              </p>
</div>
<div className="flex items-center gap-space-md">
<span className="w-2.5 h-2.5 rounded-full bg-[#D9AD43]"></span>
<p className="font-body-sm text-body-sm text-[#fff9ee]/90">
<strong>Subal Das (Dye Master):</strong> "Our indigo fermentation vats are living creatures. We listen to the bubble pitch each dawn before immersing the combed skeins."
              </p>
</div>
</div>
<div className="flex flex-wrap items-center gap-space-md pt-space-xs">
<a className="bg-surface text-primary font-label-lg text-label-lg uppercase tracking-widest px-space-lg py-space-md hover:bg-surface-container transition-colors inline-flex items-center gap-space-sm font-semibold shadow-sm" data-path="craftsmanship" href="#">
              Explore Our Guild Roster <span className="material-symbols-outlined text-[18px]">north_east</span>
</a>
<a className="font-label-lg text-label-lg uppercase tracking-widest text-[#fff9ee] hover:text-[#ffdf9c] transition-colors py-space-md px-space-sm inline-flex items-center gap-1 border-b border-[#D9AD43]/50" data-path="journal" href="#">
              Read Weaver Monographs
            </a>
</div>
</div>
</div>
</div>
</section>
{/* Section 5: By The Numbers & Archival Metrics */}
<section className="w-full bg-surface-container py-space-xl px-margin-mobile lg:px-margin border-y border-outline-variant/30">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-2 md:grid-cols-4 gap-space-md text-center">
<div className="p-space-lg bg-surface flex flex-col justify-center items-center shadow-sm border border-outline-variant/20">
<span className="font-display text-display text-primary block font-normal">100s</span>
<span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold mt-space-xs block">Thread Count</span>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Gossamer sheer organic combed warp yarn</p>
</div>
<div className="p-space-lg bg-surface flex flex-col justify-center items-center shadow-sm border border-outline-variant/20">
<span className="font-display text-display text-primary block font-normal">14</span>
<span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold mt-space-xs block">Village Guilds</span>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Direct fair-trade rural workshops</p>
</div>
<div className="p-space-lg bg-surface flex flex-col justify-center items-center shadow-sm border border-outline-variant/20">
<span className="font-display text-display text-primary block font-normal">18–24</span>
<span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold mt-space-xs block">Weaving Days</span>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Dedicated to hand-inlaying a single saree</p>
</div>
<div className="p-space-lg bg-surface flex flex-col justify-center items-center shadow-sm border border-outline-variant/20">
<span className="font-display text-display text-primary block font-normal">0%</span>
<span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold mt-space-xs block">Synthetic Fibers</span>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Pure soil-biodegradable natural cotton</p>
</div>
</div>
</div>
</section>
{/* Section 6: Curated Drapes from the Archive */}
<section className="w-full py-space-xl px-margin-mobile lg:px-margin bg-surface">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-space-lg">
<div>
<span className="font-label-lg text-label-lg uppercase tracking-widest text-secondary font-bold block mb-space-xs">The Physical Result</span>
<h2 className="font-headline-lg text-headline-lg text-primary">Signature Drapes from the Archive</h2>
</div>
<a className="mt-space-md md:mt-0 font-label-lg text-label-lg uppercase tracking-widest text-primary hover:text-secondary transition-colors inline-flex items-center gap-1 font-semibold" data-path="shop-sarees" href="#">
          View Complete Collection <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
</a>
</div>
{/* Curated Product / Archival Preview Cards */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-gutter">
{/* Card 1 */}
<article className="bg-surface-container-low flex flex-col group cursor-pointer border border-outline-variant/30">
<div className="aspect-[3/4] overflow-hidden bg-surface-container relative">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" data-alt="Full-length lookbook photo of an Indian woman draped in a natural off-white sheer mulmul saree with subtle green borders and hand block print, walking barefoot on weathered courtyard stone tiles with soft natural light and shadows." src="/images/stitch/img-717c024a4d84.png"/>
<div className="absolute top-space-sm left-space-sm bg-surface/90 px-space-xs py-1 border border-outline-variant/30">
<span className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-bold">100s Count Mulmul</span>
</div>
</div>
<div className="p-space-md flex flex-col justify-between flex-1">
<div>
<span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary block mb-1 font-semibold">Phulia Pit Loom "¢ 21 Days</span>
<h3 className="font-headline-sm text-headline-sm text-primary mb-1 group-hover:text-secondary transition-colors">The Mayurakshi Ivory Drape</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">
                Handspun raw unbleached mulmul with traditional madder-dyed selvedge and floral buti inlays.
              </p>
</div>
<div className="flex items-center justify-between mt-space-md pt-space-xs border-t border-outline-variant/20">
<span className="font-body-md text-body-md font-semibold text-primary">₹14,800</span>
<span className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant">Archived Piece</span>
</div>
</div>
</article>
{/* Card 2 */}
<article className="bg-surface-container-low flex flex-col group cursor-pointer border border-outline-variant/30">
<div className="aspect-[3/4] overflow-hidden bg-surface-container relative">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" data-alt="Editorial still life of draped fine gossamer sheer mulmul fabric in soft cream with real gold zari woven border cascading across an ancient rustic wooden weaver table, warm sunlight." src="/images/stitch/img-b02ce92e441a.png"/>
<div className="absolute top-space-sm left-space-sm bg-surface/90 px-space-xs py-1 border border-outline-variant/30">
<span className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-bold">Zari Kora Mulmul</span>
</div>
</div>
<div className="p-space-md flex flex-col justify-between flex-1">
<div>
<span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary block mb-1 font-semibold">Santipur Guild "¢ 26 Days</span>
<h3 className="font-headline-sm text-headline-sm text-primary mb-1 group-hover:text-secondary transition-colors">The Kora Swarna Pallu</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">
                Featherweight cotton body offset by a tested real zari temple border, designed for ceremonies of quiet grace.
              </p>
</div>
<div className="flex items-center justify-between mt-space-md pt-space-xs border-t border-outline-variant/20">
<span className="font-body-md text-body-md font-semibold text-primary">₹18,500</span>
<span className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant">Archived Piece</span>
</div>
</div>
</article>
{/* Card 3 */}
<article className="bg-surface-container-low flex flex-col group cursor-pointer sm:col-span-2 lg:col-span-1 border border-outline-variant/30">
<div className="aspect-[3/4] overflow-hidden bg-surface-container relative">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" data-alt="Macro detail of dark indigo dyed mulmul cotton saree fabric with fine cream geometric jamdani motifs handwoven into the weave, displaying subtle organic slub texture and soft drape, moody studio lighting." src="/images/stitch/img-b38ef8e5ca5b.png"/>
<div className="absolute top-space-sm left-space-sm bg-surface/90 px-space-xs py-1 border border-outline-variant/30">
<span className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-bold">Natural Neel Vat</span>
</div>
</div>
<div className="p-space-md flex flex-col justify-between flex-1">
<div>
<span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary block mb-1 font-semibold">Hooghly Basin "¢ 19 Days</span>
<h3 className="font-headline-sm text-headline-sm text-primary mb-1 group-hover:text-secondary transition-colors">The Neelambari Monsoon Weave</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">
                Seven-times dipped natural indigo yardage with unbleached hand-twisted tassels and whisper-light fall.
              </p>
</div>
<div className="flex items-center justify-between mt-space-md pt-space-xs border-t border-outline-variant/20">
<span className="font-body-md text-body-md font-semibold text-primary">₹16,200</span>
<span className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant">Archived Piece</span>
</div>
</div>
</article>
</div>
</div>
</section>
{/* Section 7: Final Manifesto Plinth / Call to Action */}
<section className="w-full bg-surface-container-highest py-space-xl px-margin-mobile lg:px-margin border-t border-outline-variant/30">
<div className="max-w-4xl mx-auto text-center flex flex-col items-center">
<div className="w-16 h-16 rounded-full bg-surface-container-lowest flex items-center justify-center mb-space-md shadow-sm border border-[#D9AD43]/30">
<span className="material-symbols-outlined text-primary text-[32px]">spa</span>
</div>
<span className="font-label-lg text-label-lg uppercase tracking-widest text-secondary font-bold mb-space-xs block">
        A Drape to Outlive Trends
      </span>
<h2 className="font-display text-headline-lg lg:text-display text-primary mb-space-md leading-tight">
        Wear the memory of the loom.
      </h2>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mb-space-lg leading-relaxed font-light">
        We invite you to hold our mulmul in your hands. Feel the unhurried warmth of real cotton yarn, spun without shortcuts, and become part of a living preservation story.
      </p>
<div className="flex flex-col sm:flex-row items-center gap-space-md">
<a className="bg-primary text-on-primary font-label-lg text-label-lg uppercase tracking-widest px-space-xl py-space-md hover:bg-primary-container transition-colors shadow-sm font-semibold" data-path="shop-sarees" href="#">
          Acquire an Archival Saree
        </a>
<a className="bg-transparent text-primary border border-primary/40 font-label-lg text-label-lg uppercase tracking-widest px-space-lg py-space-md hover:bg-primary hover:text-on-primary transition-colors font-semibold" data-path="craftsmanship" href="#">
          Read Craftsmanship Guide
        </a>
</div>
<div className="mt-space-lg flex items-center gap-space-md text-on-surface-variant font-label-sm text-label-sm uppercase tracking-widest">
<span>Handcrafted in Bengal</span>
<span>"¢</span>
<span>Worldwide Insured Dispatch</span>
<span>"¢</span>
<span>Certificate of Artisan Origin</span>
</div>
</div>
</section>
</div></main>
      <Footer />
    </>
  );
}
