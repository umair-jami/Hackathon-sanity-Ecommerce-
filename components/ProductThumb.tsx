import { Product } from "@/sanity.types";
import { urlFor } from "@/sanity/lib/image";
import fourStar from "@/public/Four Star.png";

import Image from "next/image";
import Link from "next/link";
type Block = {
  _type: string;
  children?: Child[];
};

type Child = {
  _type: string;
  text?: string;
};

function ProductThumb({ product }: { product: Product }) {
  const isOutOfStock = product.stock != null && product.stock <= 0;
  console.log(product.price);
  return (
    <Link
      href={`/product/${product.slug?.current}`}
      className={`group flex flex-col h-full w-full bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden ${isOutOfStock ? "opacity-50" : ""}`}
    >
      <div className="relative aspect-square w-[80%] mx-auto overflow-hidden h-full">
        {product.image && (
          <Image
            src={urlFor(product.image).url()}
            alt={product.name || "product image"}
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        )}
        {isOutOfStock && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <span className="text-white text-lg font-bold">Out of Stock</span>
          </div>
        )}
      </div>
      <div className="p-4">
        <h2 className="text-lg font-medium text-gray-900 truncate">
          {product.name}
        </h2>
        <p className="text-sm text-gray-500 line-clamp-2">
          {product.description?.map((block: Block) =>
            block._type === "block"
              ? block.children?.map((child: Child) => child.text).join("")
              : ""
          )}
        </p>
      </div>
      <div className="mt-2 px-4 pb-1">
        {/* <p>{product?.description}</p> */}
        <div className="flex items-center">
          <Image src={fourStar} alt={`star`} className="h-5 w-20" />
          <p className="text-Text1 ml-2">
            {product.rating}/{product.ratingCount}
          </p>
        </div>
        <div className="flex items-center">
          <p className="text-Secondary2 text-xl" style={{ fontWeight: 500 }}>
            <span className="mt-2 text-lg font-bold text-gray-900">
              £{product.price?.toFixed(2)}
            </span>
            {product.priceWithoutDiscount && (
              <>
                <span className="text-Text1 line-through text-sm">
                  {product.priceWithoutDiscount}
                </span>{" "}
                <span className="text-red bg-redbg p-1 rounded-md text-sm">
                  -{product.discountPercentage}%
                </span>
              </>
            )}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default ProductThumb;
