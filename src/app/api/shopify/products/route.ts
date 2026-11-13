import { getShopifyProducts } from "@/lib/shopify";

export async function GET() {
  try {
    return Response.json({ products: await getShopifyProducts() });
  } catch (error) {
    console.error("Shopify products request failed:", error);
    return Response.json({ error: "Could not load Shopify products." }, { status: 502 });
  }
}
