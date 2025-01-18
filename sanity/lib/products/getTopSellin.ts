import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";

export const getTopSellin = async () => {
  const TOP_SELLING_QUERY = defineQuery(
    `*[_type == "product" && "TopSelling" in tags] | order(name desc)`
  );
  try{
    const products=await sanityFetch({query:TOP_SELLING_QUERY})
    return products.data || []
  }catch(error){
    console.error("Error fetching Top selling products:", error);
    return [];
  }
};
