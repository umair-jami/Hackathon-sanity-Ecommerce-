import React from "react";
import { Poppins } from "next/font/google";
import { getNewProduct } from "@/sanity/lib/products/getNewProduct";

import ProductsView from "./ProductsView";
import { getAllCategories } from "@/sanity/lib/products/getAllCategories";
import ProductGrid from "./ProductGrid";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const NewArrival =async () => {
    const products=await getNewProduct()
    const categories = await getAllCategories();
  return (
    <section
      id="arrivals"
      className={`${poppins.className} h-auto container mx-auto p-4`}
    >
      <div className="flex justify-center items-center mt-7">
        <h1 className="text-6xl" style={{ fontWeight: 900 }}>
          NEW ARRIVAL
        </h1>
      </div>
      <ProductGrid products={products} />

      {/* Button */}
      <div className="mt-10 flex justify-center">
        <button className="bg-red-500 border border-black rounded-full px-6 py-3 text-sm hover:bg-red-600">
          View All Products
        </button>
      </div>
    </section>
  );
};

export default NewArrival;
