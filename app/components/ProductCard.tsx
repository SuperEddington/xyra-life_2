"use client";

import Image from "next/image";
import { Link } from "@/i18n/routing";
import { Product } from "../types"; // 确保引用的是刚才修改的那个 types
import { useTranslations } from "next-intl";

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const t = useTranslations("products"); // 获取产品翻译

  return (
    <Link href={`/product/${product.id}`} className="group block">
      <div className="relative aspect-[4/5] overflow-hidden bg-gray-100 mb-4">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* 遮罩层 (可选) */}
        <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/5" />
      </div>

      <div className="text-center">
        <p className="text-xs text-gold uppercase tracking-widest mb-1">
          {product.category}
        </p>
        <h3 className="text-lg font-serif text-charcoal group-hover:text-gold transition-colors">
          {/* 这里其实也可以用 t(`${product.id}.name`)，但用 product.name 做后备也行 */}
          {product.name}
        </h3>
        <p className="text-gray-500 mt-1 font-medium">
          ${product.price.toLocaleString()}
        </p>
      </div>
    </Link>
  );
};
