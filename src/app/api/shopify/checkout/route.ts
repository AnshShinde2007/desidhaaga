import { createShopifyCheckout } from "@/lib/shopify";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as { variantId?: unknown };
    if (typeof body.variantId !== "string" || !body.variantId.startsWith("gid://shopify/ProductVariant/")) {
      return Response.json({ error: "A valid Shopify variant ID is required." }, { status: 400 });
    }
    const forwardedFor = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
    const buyerIp = forwardedFor ?? request.headers.get("x-real-ip") ?? undefined;
    return Response.json({ checkoutUrl: await createShopifyCheckout(body.variantId, buyerIp) });
  } catch (error) {
    console.error("Shopify checkout request failed:", error);
    return Response.json({ error: "Could not start Shopify checkout." }, { status: 502 });
  }
}
