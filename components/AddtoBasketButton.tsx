"use client";
import { Product } from "@/sanity.types";
import userBasketStore from "@/store/store";
import { useEffect, useState } from "react";

interface AddtoBasketButtonProps {
  product: Product;
  disabled: boolean;
}

function AddtoBasketButton({ product, disabled }: AddtoBasketButtonProps) {
  const { addItem, removeItem, getItemCount } = userBasketStore();
  const itemCount = getItemCount(product._id);
  const [isClient, setIsClient] = useState(false);

  // useEffect to set isClient to true when the component is mounted
  // to prevent hydration errors
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  const handleRemoveFromBasket = () => {
    if (itemCount > 0) {
      removeItem(product._id);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-2">
      <div className="flex items-center space-x-2">
        <button
          onClick={handleRemoveFromBasket}
          className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-200 ${
            itemCount === 0
              ? "bg-gray-100 cursor-not-allowed"
              : "bg-gray-200 hover:bg-gray-300"
          }`}
          disabled={itemCount === 0 || disabled}
        >
          <span
            className={`text-xl font-bold ${
              itemCount === 0 ? "text-gray-400" : "text-gray-600"
            }`}
          >
            -
          </span>
        </button>
        <span className="w-8 text-center font-semibold">{itemCount}</span>
        <button
          onClick={() => addItem(product)}
          className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-200 ${
            disabled
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600"
          }`}
        >
          <span className="text-xl font-bold text-white">+</span>
        </button>
      </div>
    </div>
  );
}

export default AddtoBasketButton;
