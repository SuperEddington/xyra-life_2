"use client";

import { ShoppingBag, Check } from "lucide-react";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { Product } from "../types";
import { useCart } from "../hooks/useCart";

interface AddToCartButtonProps {
  product: Product;
}

export function AddToCartButton({ product }: AddToCartButtonProps) {
  const t = useTranslations("product");
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem(product);
    }
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Quantity Selector */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {t("quantity")}
        </label>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-lg hover:border-gold hover:text-gold transition-colors"
          >
            -
          </button>
          <span className="w-12 text-center font-medium">{quantity}</span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-lg hover:border-gold hover:text-gold transition-colors"
          >
            +
          </button>
        </div>
      </div>

      {/* Add to Cart Button */}
      <button
        onClick={handleAddToCart}
        className={`w-full py-4 px-8 rounded-lg font-medium flex items-center justify-center gap-3 transition-all ${
          added
            ? "bg-green-500 text-white"
            : "bg-gold text-white hover:bg-gold-hover"
        }`}
      >
        {added ? (
          <>
            <Check className="w-5 h-5" />
            Added to Cart
          </>
        ) : (
          <>
            <ShoppingBag className="w-5 h-5" />
            {t("addToCart")}
          </>
        )}
      </button>
    </div>
  );
}
