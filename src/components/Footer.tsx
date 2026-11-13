import Image from "next/image";
import Link from "next/link";

const curations = [
  "Jamdani Inlays",
  "Neel & Madder Dyes",
  "Zari Kora Mulmul",
  "Unbleached Ritual Drapes",
  "Artisanal Bridal Sets",
];

export default function Footer() {
  return (
    <footer className="w-full bg-surface-container-low pt-space-xl pb-space-lg">
      <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter mb-space-xl">
          {/* Brand Column */}
          <div className="md:col-span-5 flex flex-col justify-between pr-0 md:pr-space-lg">
            <div className="mb-space-lg">
              <div className="flex items-center gap-3 mb-space-xs">
                <Image
                  src="/images/logo.png"
                  alt="Desi Dhaga"
                  width={200}
                  height={64}
                  className="h-16 w-auto object-contain"
                  style={{ maxHeight: 64 }}
                />
                <span className="font-headline-sm text-headline-sm text-primary uppercase tracking-wider block">
                  Desi Dhaga
                </span>
              </div>
              <span className="font-label-md text-label-md text-secondary uppercase tracking-widest block mb-space-md">
                The Loom Archives • Santipur &amp; Phulia
              </span>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed max-w-sm">
                Handspun from 100s count sheer cotton yarn on traditional wooden
                pit looms. Each weave is an unhurried testament to India&apos;s
                gossamer mulmul legacy, revived for timeless ritual and quiet
                reverence.
              </p>
            </div>
            <div className="space-y-space-xs">
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface">
                Artisan Registry
              </span>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Documenting 14 master weaver guilds across the lower Gangetic
                basin.
              </p>
            </div>
          </div>

          {/* Curations Column */}
          <div className="md:col-span-3 flex flex-col space-y-space-md">
            <span className="font-label-lg text-label-lg uppercase tracking-widest text-primary">
              Curations
            </span>
            <ul className="space-y-space-sm font-body-sm text-body-sm text-on-surface-variant">
              {curations.map((item) => (
                <li
                  key={item}
                  className="hover:text-secondary transition-colors cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="md:col-span-4 flex flex-col">
            <span className="font-label-lg text-label-lg uppercase tracking-widest text-primary mb-space-xs">
              The Weavers&apos; Dispatch
            </span>
            <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">
              Receive periodic monographs on regional warp techniques, loom
              migrations, and archival seasonal releases.
            </p>
            <form className="flex flex-col space-y-space-md">
              <div className="flex items-center">
                <input
                  className="w-full bg-transparent border-0 border-b border-on-surface/40 pb-space-xs font-body-sm text-body-sm text-on-surface placeholder:text-on-surface-variant focus:border-primary focus:outline-none transition-colors"
                  placeholder="Your email address"
                  type="email"
                />
                <button
                  className="ml-space-sm font-label-lg text-label-lg uppercase text-primary hover:text-secondary transition-colors whitespace-nowrap cursor-pointer"
                  type="button"
                >
                  Inscribe
                </button>
              </div>
              <span className="font-label-sm text-label-sm text-on-surface-variant">
                By joining, you respect our commitment to quiet, mindful
                communication.
              </span>
            </form>
          </div>
        </div>

        {/* Bottom Utility Bar */}
        <div className="w-full flex flex-col sm:flex-row items-center justify-between pt-space-md gap-4 border-t border-[#254c38]/10">
          <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest text-center sm:text-left">
            © 2024 Desi Dhaga. All ancestral copyrights reserved to the artisan
            guilds.
          </span>
          <div className="flex items-center gap-space-md font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest">
            <Link
              className="hover:text-primary transition-colors"
              href="/craftsmanship"
            >
              Provenance
            </Link>
            <Link className="hover:text-primary transition-colors" href="/story">
              Ethics &amp; Guilds
            </Link>
            <Link className="hover:text-primary transition-colors" href="/journal">
              Archival Notes
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
