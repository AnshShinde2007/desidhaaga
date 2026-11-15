import BuyButton from "@/components/BuyButton";
import ProductGallery from "@/components/ProductGallery";
import type { ShopifyProduct } from "@/lib/shopify";
import Price from "@/components/Price";
import Link from "next/link";

type ProductGridProps = { products: ShopifyProduct[] };

const filters = [
  { label: "All Weaves", active: true },
  { label: "Natural Dyes", active: false },
  { label: "Gold Zari", active: false },
  { label: "Gossamer 100s", active: false },
];

export default function ProductGrid({ products }: ProductGridProps) {
  return (
    <section className="w-full bg-surface py-space-xl border-b border-[#254c38]/10">
      <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md mb-space-xl pb-space-md border-b border-[#254c38]/15">
          <div>
            <div className="flex items-center gap-2 mb-space-xs">
              <span className="w-2 h-2 rounded-full bg-secondary inline-block" />
              <span className="font-label-sm text-label-sm uppercase tracking-[0.22em] text-secondary font-bold">
                Curated Archive • Batch 08
              </span>
            </div>
            <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight font-normal leading-tight">
              Handwoven Mulmul Editions
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant font-light mt-1">
              Featherweight 100s count combed cotton spun on heritage pit looms
              in Bengal.
            </p>
          </div>

          {/* Filter Chips */}
          <div className="flex flex-wrap items-center gap-2 pt-2 md:pt-0">
            {filters.map((filter) => (
              <button
                key={filter.label}
                type="button"
                className={`font-label-sm text-label-sm uppercase tracking-widest px-4 py-2 rounded-full transition-colors cursor-pointer ${
                  filter.active
                    ? "bg-primary text-on-primary"
                    : "bg-surface-container-low text-primary border border-primary/20 hover:border-primary"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <article key={product.id} className="group flex flex-col">
              {/* Image */}
              <Link href={`/products/${product.handle}`} className="relative mb-4 block" aria-label={`View ${product.title}`}>
                <ProductGallery
                  title={product.title}
                  images={product.images.nodes.length ? product.images.nodes : product.featuredImage ? [product.featuredImage] : []}
                />
                {/* Quick checkout */}
              </Link>

              {/* Details */}
              <div className="flex flex-col flex-1">
                <Link href={`/products/${product.handle}`} className="font-headline-sm text-[18px] text-on-surface font-medium leading-snug mt-1 group-hover:text-primary transition-colors">
                    {product.title}
                </Link>
                <p className="font-body-sm text-body-sm text-on-surface-variant font-light line-clamp-2 mt-1">
                    {product.description}
                </p>
                <div className="flex items-center justify-between mt-3 pt-3 border-t border-[#254c38]/10">
                  <span className="font-body-md text-body-md text-primary font-semibold">
                    <Price amount={product.priceRange.minVariantPrice.amount} currency={product.priceRange.minVariantPrice.currencyCode} />
                  </span>
                  <BuyButton variantId={product.variants.nodes.find((variant) => variant.availableForSale)?.id} />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
