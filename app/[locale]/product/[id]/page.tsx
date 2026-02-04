import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Link } from "@/i18n/routing";
// 👇 修复点1：路径层级修正。因为在 product/[id] 下，所以要往上找 3 层才能到 data
import { getProductById, getRelatedProducts } from "../../../data/products";
import { ProductCard } from "../../../components/ProductCard";
import { MotionDiv } from "../../../components/MotionDiv";

// 👇 修复点2：Next.js 15 要求 params 必须定义为 Promise
type Props = {
  params: Promise<{ id: string; locale: string }>;
};

export default async function ProductPage({ params }: Props) {
  const t = await getTranslations();
  
  // 👇 修复点3：必须 await params 才能拿到 id
  const { id } = await params;
  
  const product = getProductById(id);

  // 如果找不到产品，显示 404
  if (!product) {
    notFound();
  }

  const relatedProducts = getRelatedProducts(id);

  return (
    <div className="min-h-screen bg-cream-50 pt-20 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 面包屑导航 */}
        <nav className="flex items-center text-sm text-gray-500 mb-8 font-serif">
          <Link href="/shop" className="hover:text-gold transition-colors">
            Shop
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-800">{product.name}</span>
        </nav>

        {/* 产品详情主区域 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* 左侧：产品图片 */}
          <MotionDiv 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative aspect-square bg-white rounded-2xl overflow-hidden shadow-sm"
          >
            <Image
              src={product.image}
              alt={product.name}
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
            <span className="text-gold font-serif italic text-lg mb-2">
              {product.category} Collection
            </span>
            <h1 className="text-4xl font-serif font-bold text-charcoal mb-4">
              {product.name}
            </h1>
            <p className="text-2xl font-medium text-gray-900 mb-8">
              ${product.price.toLocaleString()}
            </p>

            <div className="prose prose-lg text-gray-600 mb-10 leading-relaxed">
              <p>{product.description}</p>
            </div>

            {/* 购买按钮组 */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex-1 bg-charcoal text-white px-8 py-4 rounded-full font-medium hover:bg-black transition-all shadow-lg hover:shadow-xl">
                Add to Cart
              </button>
              <button className="flex-1 border-2 border-charcoal text-charcoal px-8 py-4 rounded-full font-medium hover:bg-gray-50 transition-colors">
                Save for Later
              </button>
            </div>

            {/* 额外信息 */}
            <div className="mt-12 grid grid-cols-2 gap-6 border-t border-gray-100 pt-8">
              <div>
                <h4 className="font-serif font-bold text-charcoal mb-2">Free Shipping</h4>
                <p className="text-sm text-gray-500">On all orders over $200</p>
              </div>
              <div>
                <h4 className="font-serif font-bold text-charcoal mb-2">Warranty</h4>
                <p className="text-sm text-gray-500">Lifetime craftsmanship warranty</p>
              </div>
            </div>
          </MotionDiv>
        </div>

        {/* 相关推荐 */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-charcoal mb-4">
              You May Also Like
            </h2>
            <div className="w-16 h-0.5 bg-gold mx-auto" />
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