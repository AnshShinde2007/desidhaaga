import { Suspense } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ZariDivider from "@/components/ZariDivider";
import ProductGrid from "@/components/ProductGrid";
import MetricsStrip from "@/components/MetricsStrip";
import Footer from "@/components/Footer";
import { getShopifyProducts } from "@/lib/shopify";

async function ShopifyProducts() {
  let products = [];
  try {
    products = await getShopifyProducts();
  } catch (error) {
    console.error("Shopify products unavailable:", error);
  }

  return <ProductGrid products={products} />;
}

export default function Home() {
  return (
    <>
      <Header />
      <main className="w-full bg-surface min-h-[calc(100vh-80px)]">
        <Hero />
        <ZariDivider />
        <Suspense fallback={<ProductGrid products={[]} />}>
          <ShopifyProducts />
        </Suspense>
        <MetricsStrip />
      </main>
      <Footer />
    </>
  );
}
