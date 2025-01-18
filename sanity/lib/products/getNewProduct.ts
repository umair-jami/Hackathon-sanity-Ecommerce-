import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";

export const getNewProduct = async () => {
  const NEW_PRODUCT_QUERY = defineQuery(
    `*[_type == "product" && "NewArrival" in tags]`
  );
  try {
    const products = await sanityFetch({ query: NEW_PRODUCT_QUERY });
    return products.data || [];
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};
