import { createShopifyCheckout } from "@/lib/shopify";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as { variantId?: unknown };
    if (typeof body.variantId !== "string" || !body.variantId.startsWith("gid://shopify/ProductVariant/")) {
      return Response.json({ error: "A valid Shopify variant ID is required." }, { status: 400 });
    }
    const forwardedFor = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
    const buyerIp = forwardedFor ?? request.headers.get("x-real-ip") ?? undefined;
    const checkoutUrl = await createShopifyCheckout(body.variantId, buyerIp);
    return Response.json({ checkoutUrl });
  } catch (error) {
    console.error("Shopify checkout error:", error);
    return Response.json({
      error: "Could not start Shopify checkout.",
      details: process.env.NODE_ENV === "development"
        ? error instanceof Error ? error.message : String(error)
        : undefined,
    }, { status: 502 });
  }
}
