import { Poppins } from "next/font/google";
import ProductsView from "@/components/ProductsView";
import { getAllProducts } from "@/sanity/lib/products/getAllProducts";
import { getAllCategories } from "@/sanity/lib/products/getAllCategories";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
export default async function page() {
  const products = await getAllProducts();
  const categories = await getAllCategories();
  console.log(
    crypto.randomUUID().slice(0, 5) +
      `>>> Rerender the home page cache with ${products.length} products and ${categories.length} categories`
  );
  return (
    <>
      <section
        className={`${poppins.className}  container mx-auto px-4 sm:px-6 lg:px-8 my-12`}
      >
        <p className="text-Text1 text-sm my-10 text-center sm:text-left">
          Home / <span className="text-Text2">Casual</span>
        </p>

        <div className="flex">
          <div className="">
            <div className="flex flex-wrap justify-between items-center gap-4 md:gap-0">
              <h1 className="text-lg md:text-xl font-extrabold">Casual</h1>
              <p className="text-sm md:text-base text-Text1 flex flex-wrap items-center gap-2">
                Showing 1-10 of 100 Products
                <span className="whitespace-nowrap">
                  Sort by:{" "}
                  <select className="text-black text-sm md:text-base">
                    <option>Most Popular</option>
                  </select>
                </span>
              </p>
            </div>

            <ProductsView products={products} categories={categories} />
          </div>
        </div>
      </section>
    </>
  );
}
