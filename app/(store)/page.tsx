import Banner from "@/components/Banner";
import Brands from "@/components/Brands";
import NewArrival from "@/components/NewArrival";
import ProductsView from "@/components/ProductsView";
import SaleBanner from "@/components/SaleBanner";
import TopSelling from "@/components/TopSelling";
import { getAllCategories } from "@/sanity/lib/products/getAllCategories";
import { getAllProducts } from "@/sanity/lib/products/getAllProducts";

export default async function Home() {
  const products=await getAllProducts()
  const categories=await getAllCategories()
  return (
   <>
   <Banner/>
   <SaleBanner/>
   <Brands/>
   {/* <ProductsView products={products} categories={categories}/> */}
   <NewArrival/>
   <TopSelling/>
   </>
  );
}
