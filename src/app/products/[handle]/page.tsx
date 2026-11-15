import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductGallery from "@/components/ProductGallery";
import BuyButton from "@/components/BuyButton";
import Price from "@/components/Price";
import { getShopifyProduct } from "@/lib/shopify";
import ProductShare from "@/components/ProductShare";

export default async function ProductPage({ params }: PageProps<"/products/[handle]">) {
  const { handle } = await params;
  let product;
  try {
    product = await getShopifyProduct(handle);
  } catch (error) {
    console.error("Shopify product unavailable:", error);
    throw error;
  }
  if (!product) notFound();

  const variantId = product.variants.nodes.find((variant) => variant.availableForSale)?.id;
  const images = product.images.nodes.length ? product.images.nodes : product.featuredImage ? [product.featuredImage] : [];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-surface px-margin-mobile pb-space-xl pt-32 lg:px-margin">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2 md:gap-12">
          <ProductGallery title={product.title} images={images} />
          <section className="py-4 md:py-12">
            <p className="font-label-sm uppercase tracking-[0.22em] text-secondary">Handwoven Mulmul Edition</p>
            <h1 className="mt-3 font-headline-lg text-headline-lg text-primary">{product.title}</h1>
            <p className="mt-4 font-body-lg text-body-lg text-on-surface-variant">
              <Price amount={product.priceRange.minVariantPrice.amount} currency={product.priceRange.minVariantPrice.currencyCode} />
            </p>
            <div className="my-6 border-t border-[#254c38]/15" />
            <p className="whitespace-pre-line font-body-md text-body-md text-on-surface-variant">{product.description}</p>
            <div className="mt-8">
              <BuyButton variantId={variantId} />
            </div>
            <p className="mt-6 font-label-sm uppercase tracking-widest text-on-surface-variant">Thoughtfully woven in Bengal</p>
            <ProductShare handle={product.handle} title={product.title} />
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
