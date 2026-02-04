import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Link } from "@/i18n/routing";
import { getProductById, getRelatedProducts } from "../../../data/products";
import { ProductCard } from "../../../components/ProductCard";
import { MotionDiv } from "../../../components/MotionDiv";

type Props = {
  params: Promise<{ id: string; locale: string }>;
};

export default async function ProductPage({ params }: Props) {
  const t = await getTranslations(); // 获取翻译函数
  const { id } = await params;
  
  const product = getProductById(id);

  if (!product) {
    notFound();
  }

  const relatedProducts = getRelatedProducts(id);

  return (
    <div className="min-h-screen bg-stone-50 pt-20 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 面包屑导航 */}
        <nav className="flex items-center text-sm text-gray-500 mb-8 font-serif uppercase tracking-widest">
          <Link href="/shop" className="hover:text-gold transition-colors">
            {t("nav.shop")}
          </Link>
          <span className="mx-2">/</span>
          {/* 这里虽然 product.name 还在，但为了国际化，建议也用翻译 */}
          <span className="text-gray-800">{t(`products.${id}.name`)}</span>
        </nav>

        {/* 产品详情主区域 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* 左侧：产品图片 */}
          <MotionDiv 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative aspect-square bg-white rounded-sm overflow-hidden shadow-sm"
          >
            <Image
              src={product.image}
              alt={t(`products.${id}.name`)} // 图片 Alt 也用翻译
              fill
              className="object-cover"
              priority
            />
          </MotionDiv>

          {/* 右侧：产品信息 */}
          <MotionDiv 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col justify-center"
          >
            <span className="text-gold font-bold uppercase tracking-[0.2em] text-xs mb-4">
              {product.category} Collection
            </span>
            <h1 className="text-4xl md:text-5xl font-serif text-charcoal mb-6 leading-tight">
              {/* ✨ 关键修改：从翻译文件获取名称 */}
              {t(`products.${id}.name`)}
            </h1>
            <p className="text-2xl font-light text-gray-900 mb-8 border-b border-gray-100 pb-8">
              ${product.price.toLocaleString()}
            </p>

            <div className="prose prose-lg text-gray-600 mb-10 leading-relaxed font-light">
              {/* ✨ 关键修复：这里原来写的是 product.description (会报错)，现在改成翻译函数 */}
              <p>{t(`products.${id}.description`)}</p>
            </div>

            {/* 购买按钮组 */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex-1 bg-charcoal text-white px-8 py-4 rounded-full font-medium hover:bg-black transition-all shadow-lg hover:shadow-xl uppercase tracking-widest text-sm">
                {t("product.addToCart")}
              </button>
              <button className="flex-1 border border-charcoal text-charcoal px-8 py-4 rounded-full font-medium hover:bg-charcoal hover:text-white transition-colors uppercase tracking-widest text-sm">
                 Wishlist
              </button>
            </div>

            {/* 额外信息 */}
            <div className="mt-12 grid grid-cols-2 gap-6 pt-8">
              <div>
                <h4 className="font-serif font-bold text-charcoal mb-2">Free Shipping</h4>
                <p className="text-xs text-gray-500 uppercase tracking-wide">On all orders over $200</p>
              </div>
              <div>
                <h4 className="font-serif font-bold text-charcoal mb-2">Warranty</h4>
                <p className="text-xs text-gray-500 uppercase tracking-wide">Lifetime craftsmanship</p>
              </div>
            </div>
          </MotionDiv>
        </div>

        {/* 相关推荐 */}
        <div className="mt-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif text-charcoal mb-4">
              {t("product.relatedProducts")}
            </h2>
            <div className="w-16 h-px bg-gold mx-auto" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedProducts.map((p, index) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
