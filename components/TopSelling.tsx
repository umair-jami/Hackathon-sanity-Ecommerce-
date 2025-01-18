import React from "react";
import { Poppins } from "next/font/google";

import { getTopSellin } from "@/sanity/lib/products/getTopSellin";
import ProductGrid from "./ProductGrid";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
console.log(process.env.NEXT_PUBLIC_BASE_URL)
const TopSelling =async () => {
    const products=await getTopSellin()
  return (
    <section
      id="arrivals"
      className={`${poppins.className} h-auto container mx-auto p-4`}
    >
      <div className="flex justify-center items-center mt-7">
        <h1 className="text-6xl" style={{ fontWeight: 900 }}>
          TOP SELLING
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

export default TopSelling;
