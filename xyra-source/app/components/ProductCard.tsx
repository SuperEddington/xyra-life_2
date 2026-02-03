"use client";

import { ShoppingBag, Eye } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
// 1. 修正路径：指向我们之前创建的 navigation.ts
import { Link } from "../../i18n/navigation"; 
// 2. 修正路径：指向刚才创建的 types
import { Product } from "../types";
// 3. 修正路径：指向刚才创建的 useCart
import { useCart } from "../hooks/useCart";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const t = useTranslations("product"); // 注意：这里通常用 "product" 或 "shop" namespace，取决于你的 json
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
            href={`/shop/${product.id}`} // 注意：通常详情页路由是 /shop/[id] 或 /product/[id]
            className="p-3 bg-white rounded-full text-[#333333] hover:text-[#D4AF37] transition-colors"
            aria-label={t("description")} // 暂时用 description 代替 viewDetails，防止 json 缺 key 报错
          >
            <Eye className="w-5 h-5" />
          </Link>
          <button
            onClick={() => addItem(product)}
            className="p-3 bg-[#D4AF37] rounded-full text-white hover:bg-[#C4A026] transition-colors"
            aria-label={t("addToCart")}
          >
            <ShoppingBag className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-5 text-center sm:text-left">
        <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">
          {product.category}
        </p>
        <h3 className="font-serif text-lg text-[#333333] mb-2">
          {product.name}
        </h3>
        <p className="text-[#D4AF37] font-semibold">${product.price}</p>
      </div>
    </motion.div>
  );
}
