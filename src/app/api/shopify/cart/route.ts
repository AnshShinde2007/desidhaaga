import { addShopifyCartLine, getShopifyCart, removeShopifyCartLine, updateShopifyCartLine } from "@/lib/shopify";

const validCartId = (id: unknown): id is string => typeof id === "string" && id.startsWith("gid://shopify/Cart/");
const validLineId = (id: unknown): id is string => typeof id === "string" && id.startsWith("gid://shopify/CartLine/");
const errorResponse = (error: unknown) => Response.json({ error: error instanceof Error ? error.message : "Shopify cart request failed." }, { status: 502 });

export async function GET(request: Request) {
  const cartId = new URL(request.url).searchParams.get("id");
  if (!validCartId(cartId)) return Response.json({ cart: null });
  try { return Response.json({ cart: await getShopifyCart(cartId) }); } catch (error) { return errorResponse(error); }
}

export async function POST(request: Request) {
  try {
    const body = await request.json() as { cartId?: unknown; variantId?: unknown };
    if (body.cartId != null && !validCartId(body.cartId)) return Response.json({ error: "Invalid Shopify cart ID." }, { status: 400 });
    if (typeof body.variantId !== "string" || !body.variantId.startsWith("gid://shopify/ProductVariant/")) return Response.json({ error: "A valid Shopify variant ID is required." }, { status: 400 });
    return Response.json({ cart: await addShopifyCartLine(body.cartId ?? null, body.variantId) });
  } catch (error) { return errorResponse(error); }
}

export async function PATCH(request: Request) {
  try {
    const body = await request.json() as { cartId?: unknown; lineId?: unknown; quantity?: unknown };
    if (!validCartId(body.cartId) || !validLineId(body.lineId) || !Number.isInteger(body.quantity) || (body.quantity as number) < 1 || (body.quantity as number) > 99) return Response.json({ error: "A valid cart, line, and quantity (1–99) are required." }, { status: 400 });
    return Response.json({ cart: await updateShopifyCartLine(body.cartId, body.lineId, body.quantity as number) });
  } catch (error) { return errorResponse(error); }
}

export async function DELETE(request: Request) {
  try {
    const body = await request.json() as { cartId?: unknown; lineId?: unknown };
    if (!validCartId(body.cartId) || !validLineId(body.lineId)) return Response.json({ error: "A valid Shopify cart and line ID are required." }, { status: 400 });
    return Response.json({ cart: await removeShopifyCartLine(body.cartId, body.lineId) });
  } catch (error) { return errorResponse(error); }
}
