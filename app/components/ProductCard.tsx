"use client";

import { ShoppingBag, Eye } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { Product } from "../types";
import { useCart } from "../hooks/useCart";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const t = useTranslations("shop");
  const { addItem } = useCart();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
    >
      {/* Product Image */}
      <div className="relative aspect-square bg-gray-100 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Quick Actions */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
          <Link
            href={`/product/${product.id}`}
            className="p-3 bg-white rounded-full text-charcoal hover:text-gold transition-colors"
            aria-label={t("viewDetails")}
          >
            <Eye className="w-5 h-5" />
          </Link>
          <button
            onClick={() => addItem(product)}
            className="p-3 bg-gold rounded-full text-white hover:bg-gold-hover transition-colors"
            aria-label={t("addToCart")}
          >
            <ShoppingBag className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-5">
        <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">
          {product.category}
        </p>
        <h3 className="font-serif text-lg text-charcoal mb-2">
          {product.name}
        </h3>
        <p className="text-gold font-semibold">${product.price}</p>
      </div>
    </motion.div>
  );
}
