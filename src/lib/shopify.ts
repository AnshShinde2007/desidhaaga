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

export async function createShopifyCheckout(variantId: string, buyerIp?: string) {
  if (!shopDomain || !storefrontToken) {
    throw new Error("Set SHOPIFY_STORE_DOMAIN and SHOPIFY_STOREFRONT_PRIVATE_TOKEN.");
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
          cart { checkoutUrl }
          userErrors { message }
        }
      }`,
      variables: { variantId },
    }),
    cache: "no-store",
  });

  if (!response.ok) throw new Error(`Shopify Storefront API returned ${response.status}.`);
  const result = (await response.json()) as {
    data?: { cartCreate?: { cart?: { checkoutUrl: string }; userErrors: { message: string }[] } };
    errors?: { message: string }[];
  };
  const errors = [...(result.errors ?? []), ...(result.data?.cartCreate?.userErrors ?? [])];
  if (errors.length) throw new Error(errors.map(({ message }) => message).join("; "));
  const checkoutUrl = result.data?.cartCreate?.cart?.checkoutUrl;
  if (!checkoutUrl || new URL(checkoutUrl).hostname !== shopDomain) {
    throw new Error("Shopify did not return a valid checkout URL.");
  }
  return checkoutUrl;
}
