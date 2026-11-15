import "server-only";

const shopDomain = process.env.SHOPIFY_STORE_DOMAIN;
const storefrontToken = process.env.SHOPIFY_STOREFRONT_PRIVATE_TOKEN;
const apiVersion = process.env.SHOPIFY_STOREFRONT_API_VERSION ?? "2026-10";

export type ShopifyProduct = {
  id: string;
  handle: string;
  title: string;
  description: string;
  featuredImage: { url: string; altText: string | null } | null;
  images: { nodes: { url: string; altText: string | null }[] };
  priceRange: { minVariantPrice: { amount: string; currencyCode: string } };
  variants: { nodes: { id: string; availableForSale: boolean }[] };
};

export async function getShopifyProducts(first = 12): Promise<ShopifyProduct[]> {
  if (!shopDomain || !storefrontToken) {
    throw new Error("Set SHOPIFY_STORE_DOMAIN and SHOPIFY_STOREFRONT_PRIVATE_TOKEN.");
  }

  const response = await fetch(`https://${shopDomain}/api/${apiVersion}/graphql.json`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Shopify-Storefront-Private-Token": storefrontToken,
    },
    body: JSON.stringify({
      query: `query Products($first: Int!) {
        products(first: $first) {
          nodes {
            id
            handle
            title
            description
            featuredImage { url altText }
            images(first: 250) { nodes { url altText } }
            priceRange { minVariantPrice { amount currencyCode } }
            variants(first: 100) { nodes { id availableForSale } }
          }
        }
      }`,
      variables: { first },
    }),
    cache: "no-store",
  });

  if (!response.ok) throw new Error(`Shopify Storefront API returned ${response.status}.`);

  const result = (await response.json()) as {
    data?: { products?: { nodes: ShopifyProduct[] } };
    errors?: { message: string }[];
  };
  if (result.errors?.length) throw new Error(result.errors.map(({ message }) => message).join("; "));
  return result.data?.products?.nodes ?? [];
}

export async function getShopifyProduct(handle: string): Promise<ShopifyProduct | null> {
  if (!shopDomain || !storefrontToken) {
    throw new Error("Set SHOPIFY_STORE_DOMAIN and SHOPIFY_STOREFRONT_PRIVATE_TOKEN.");
  }

  const response = await fetch(`https://${shopDomain}/api/${apiVersion}/graphql.json`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Shopify-Storefront-Private-Token": storefrontToken,
    },
    body: JSON.stringify({
      query: `query Product($handle: String!) {
        product(handle: $handle) {
          id
          handle
          title
          description
          featuredImage { url altText }
          images(first: 250) { nodes { url altText } }
          priceRange { minVariantPrice { amount currencyCode } }
          variants(first: 100) { nodes { id availableForSale } }
        }
      }`,
      variables: { handle },
    }),
    cache: "no-store",
  });

  if (!response.ok) throw new Error(`Shopify Storefront API returned ${response.status}.`);

  const result = (await response.json()) as {
    data?: { product?: ShopifyProduct | null };
    errors?: { message: string }[];
  };
  if (result.errors?.length) throw new Error(result.errors.map(({ message }) => message).join("; "));
  return result.data?.product ?? null;
}

export type ShopifyCart = {
  id: string;
  checkoutUrl: string;
  totalQuantity: number;
  cost: { subtotalAmount: { amount: string; currencyCode: string }; totalAmount: { amount: string; currencyCode: string } };
  lines: { nodes: { id: string; quantity: number; merchandise: { product: { title: string; featuredImage: { url: string; altText: string | null } | null }; price: { amount: string; currencyCode: string } } }[] };
};

async function shopifyCartRequest<T>(query: string, variables: Record<string, unknown>): Promise<T | null> {
  if (!shopDomain || !storefrontToken) throw new Error("Set SHOPIFY_STORE_DOMAIN and SHOPIFY_STOREFRONT_PRIVATE_TOKEN.");
  const response = await fetch(`https://${shopDomain}/api/${apiVersion}/graphql.json`, {
    method: "POST",
    headers: { "Content-Type": "application/json", "Shopify-Storefront-Private-Token": storefrontToken },
    body: JSON.stringify({ query, variables }),
    cache: "no-store",
  });
  const raw = await response.text();
  if (!response.ok) throw new Error(`Shopify API HTTP ${response.status}: ${raw.slice(0, 1500)}`);
  let result: { data?: T; errors?: { message: string }[] };
  try { result = JSON.parse(raw); } catch { throw new Error("Shopify returned invalid JSON."); }
  if (result.errors?.length) throw new Error(result.errors.map(({ message }) => message).join("; "));
  return result.data ?? null;
}

const cartFields = `id checkoutUrl totalQuantity cost { subtotalAmount { amount currencyCode } totalAmount { amount currencyCode } } lines(first: 100) { nodes { id quantity merchandise { ... on ProductVariant { price { amount currencyCode } product { title featuredImage { url altText } } } } } }`;

export async function getShopifyCart(cartId: string) {
  const data = await shopifyCartRequest<{ cart: ShopifyCart | null }>(`query Cart($id: ID!) { cart(id: $id) { ${cartFields} } }`, { id: cartId });
  return data?.cart ?? null;
}

export async function addShopifyCartLine(cartId: string | null, variantId: string) {
  if (cartId) {
    const data = await shopifyCartRequest<{ cartLinesAdd: { cart: ShopifyCart | null; userErrors: { message: string }[] } }>(`mutation AddLines($cartId: ID!, $lines: [CartLineInput!]!) { cartLinesAdd(cartId: $cartId, lines: $lines) { cart { ${cartFields} } userErrors { message } } }`, { cartId, lines: [{ merchandiseId: variantId, quantity: 1 }] });
    const result = data?.cartLinesAdd;
    if (result?.userErrors.length) throw new Error(result.userErrors.map((error) => error.message).join("; "));
    if (result?.cart) return result.cart;
  }
  const data = await shopifyCartRequest<{ cartCreate: { cart: ShopifyCart | null; userErrors: { message: string }[] } }>(`mutation CreateCart($lines: [CartLineInput!]!) { cartCreate(input: { lines: $lines }) { cart { ${cartFields} } userErrors { message } } }`, { lines: [{ merchandiseId: variantId, quantity: 1 }] });
  const result = data?.cartCreate;
  if (result?.userErrors.length) throw new Error(result.userErrors.map((error) => error.message).join("; "));
  if (!result?.cart) throw new Error("Shopify did not return a cart.");
  return result.cart;
}

export async function updateShopifyCartLine(cartId: string, lineId: string, quantity: number) {
  const data = await shopifyCartRequest<{ cartLinesUpdate: { cart: ShopifyCart | null; userErrors: { message: string }[] } }>(`mutation UpdateLines($cartId: ID!, $lines: [CartLineUpdateInput!]!) { cartLinesUpdate(cartId: $cartId, lines: $lines) { cart { ${cartFields} } userErrors { message } } }`, { cartId, lines: [{ id: lineId, quantity }] });
  const result = data?.cartLinesUpdate;
  if (result?.userErrors.length) throw new Error(result.userErrors.map((error) => error.message).join("; "));
  return result?.cart ?? null;
}

export async function removeShopifyCartLine(cartId: string, lineId: string) {
  const data = await shopifyCartRequest<{ cartLinesRemove: { cart: ShopifyCart | null; userErrors: { message: string }[] } }>(`mutation RemoveLines($cartId: ID!, $lineIds: [ID!]!) { cartLinesRemove(cartId: $cartId, lineIds: $lineIds) { cart { ${cartFields} } userErrors { message } } }`, { cartId, lineIds: [lineId] });
  const result = data?.cartLinesRemove;
  if (result?.userErrors.length) throw new Error(result.userErrors.map((error) => error.message).join("; "));
  return result?.cart ?? null;
}

export async function createShopifyCheckout(variantId: string, buyerIp?: string) {
  if (!shopDomain || !storefrontToken) {
    throw new Error("Missing Shopify store domain or Storefront private token.");
  }

  const response = await fetch(`https://${shopDomain}/api/${apiVersion}/graphql.json`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Shopify-Storefront-Private-Token": storefrontToken,
      ...(buyerIp ? { "Shopify-Storefront-Buyer-IP": buyerIp } : {}),
    },
    body: JSON.stringify({
      query: `mutation CreateCart($variantId: ID!) {
        cartCreate(input: { lines: [{ merchandiseId: $variantId, quantity: 1 }] }) {
          cart { id checkoutUrl }
          userErrors { field message }
          warnings { message }
        }
      }`,
      variables: { variantId },
    }),
    cache: "no-store",
  });

  const raw = await response.text();
  if (!response.ok) throw new Error(`Shopify API HTTP ${response.status}: ${raw.slice(0, 1500)}`);

  let result: {
    data?: { cartCreate?: { cart?: { id?: string; checkoutUrl?: string }; userErrors?: { message: string }[] } };
    errors?: { message: string }[];
  };
  try {
    result = JSON.parse(raw);
  } catch {
    throw new Error("Shopify returned invalid JSON.");
  }

  if (result.errors?.length) throw new Error(`Shopify GraphQL errors: ${result.errors.map(({ message }) => message).join("; ")}`);
  const payload = result.data?.cartCreate;
  if (!payload) throw new Error(`Shopify returned no cartCreate payload: ${raw.slice(0, 1500)}`);
  if (payload.userErrors?.length) throw new Error(`Shopify cart errors: ${payload.userErrors.map(({ message }) => message).join("; ")}`);
  const checkoutUrl = payload.cart?.checkoutUrl;
  if (!checkoutUrl) throw new Error(`Cart created without checkout URL. Cart ID: ${payload.cart?.id ?? "missing"}`);

  let parsedUrl: URL;
  try {
    parsedUrl = new URL(checkoutUrl);
  } catch {
    throw new Error("Shopify returned a malformed checkout URL.");
  }
  if (parsedUrl.protocol !== "https:") throw new Error("Shopify returned a non-HTTPS checkout URL.");

  return checkoutUrl;
}
