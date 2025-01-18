import { urlFor } from "@/sanity/lib/image";
import { getProductBySlug } from "@/sanity/lib/products/getProductBySlug";
import { PortableText } from "next-sanity";
import Image from "next/image";
import fourStar from "@/public/Four Star.png";
import { notFound } from "next/navigation";
import React from "react";
import AddtoBasketButton from "@/components/AddtoBasketButton";

const ProductPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  if (!product) {
    return notFound();
  }
  const isOutOfStock = product.stock != null && product.stock <= 0;
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div
          className={`relative aspect-square overflow-hidden rounded-lg  ${isOutOfStock ? "opacity-50" : ""}`}
        >
          {product.image && (
            <Image
              src={urlFor(product.image).url()}
              alt={product.name ?? "Product Image"}
              width={500}
              height={300}
              className="object-cover transition-transform duration-300 hover:scale-105 mx-auto rounded-lg"
            />
          )}
          {isOutOfStock && (
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
              Out of Stock
            </div>
          )}
        </div>
        <div className="flex flex-col gap-14">
          <div>
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            <div className="mt-2 px-1 pb-1 mb-3">
              {/* <p>{product?.description}</p> */}
              <div className="flex items-center">
                <Image src={fourStar} alt={`star`} className="h-5 w-20" />
                <p className="text-Text1 ml-2">
                  {product.rating}/{product.ratingCount}
                </p>
              </div>
              <div className="flex items-center">
                <p
                  className="text-Secondary2 text-xl"
                  style={{ fontWeight: 500 }}
                >
                  <span className="mt-2 text-lg font-bold text-gray-900">
                    £{product.price?.toFixed(2)}
                  </span>
                  {product.priceWithoutDiscount && (
                    <>
                      <span className="text-customColors-textMuted line-through text-sm">
                        {product.priceWithoutDiscount}
                      </span>{" "}
                      <span className="text-customColors-red bg-customColors-redbg p-1 rounded-md text-sm">
                        -{product.discountPercentage}%
                      </span>
                    </>
                  )}
                </p>
              </div>
            </div>
            <div className="prose max-w-none mb-6">
              {Array.isArray(product.description) && (
                <PortableText value={product.description} />
              )}
            </div>
          </div>
          <div className="mt-6">
            <AddtoBasketButton product={product} disabled={isOutOfStock} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
