import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/routing";
import { products } from "../data/products";
import { ProductCard } from "../components/ProductCard";
import { MotionDiv } from "../components/MotionDiv";
import Image from "next/image";

export default async function HomePage() {
  const t = await getTranslations();

  return (
    <div className="min-h-screen bg-cream-50"> {/* 整体背景微调为米白色 */}
      
      {/* 1. Hero Section - 使用 hero-main.jpg */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-main.jpg"
            alt="XYRA Lifestyle Fishing"
            fill
            className="object-cover"
            priority
          />
          {/* 遮罩层：加一点点暖色遮罩，让文字更清晰 */}
          <div className="absolute inset-0 bg-black/20" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto text-white">
          <MotionDiv
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl font-serif font-bold tracking-wider mb-4 drop-shadow-lg">
              {t("home.hero.title")}
            </h1>
            <p className="text-2xl md:text-3xl font-serif italic mb-8 drop-shadow-md">
              {t("home.hero.subtitle")}
            </p>
            <Link
              href="/shop"
              className="inline-block px-10 py-4 bg-white/90 text-charcoal font-serif font-medium rounded-full hover:bg-white transition-all shadow-lg hover:shadow-xl backdrop-blur-sm"
            >
              {t("home.hero.cta")}
            </Link>
          </MotionDiv>
        </div>
      </section>

      {/* 2. Featured Products Section (保持简洁) */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-charcoal mb-4">
              {t("home.featured.title")}
            </h2>
            <div className="w-20 h-1 bg-gold mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {products.map((product, index) => (
              <MotionDiv
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ProductCard product={product} />
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* 3. NEW: Gifting Section - 使用 gifting-banner.jpg */}
      <section className="py-24 bg-[#F9F8F6]"> {/* 浅米色背景 */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="w-full md:w-1/2 relative h-[500px] rounded-2xl overflow-hidden shadow-xl">
              <Image 
                src="/images/gifting-banner.jpg"
                alt="XYRA Gifting"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h2 className="text-4xl md:text-5xl font-serif text-charcoal mb-6">
                The Art of Gifting
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Whether for yourself or a loved one, every XYRA piece comes in our signature sustainable packaging. Unboxing is just the beginning of the journey.
              </p>
              <Link
                href="/shop?collection=gifts"
                className="inline-block border-b-2 border-charcoal text-charcoal pb-1 hover:text-gold hover:border-gold transition-colors text-lg"
              >
                Shop Gift Sets &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Brand Statement - 使用 philosophy-hands.jpg */}
      <section className="relative py-24 bg-charcoal text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row-reverse items-center gap-16">
             {/* 图片在右边 */}
             <div className="w-full md:w-1/2 relative h-[600px] rounded-sm overflow-hidden opacity-90">
              <Image 
                src="/images/philosophy-hands.jpg"
                alt="Philosophy"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            
            {/* 文字在左边 */}
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8 leading-tight">
                "Fishing is more than a sport—it's a moment of connection."
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                At XYRA, we believe in the quiet power of nature. Our curated collection brings elegance to every cast, empowering women to embrace the outdoors with confidence and grace.
              </p>
              <div className="h-px w-24 bg-gold mt-8" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}