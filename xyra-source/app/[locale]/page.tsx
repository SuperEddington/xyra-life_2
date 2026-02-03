import { getTranslations, setRequestLocale } from "next-intl/server";
// 1. 修正路径：回退两层找到根目录的 i18n
import { Link } from "../../../i18n/navigation"; 
// 2. 修正路径：回退一层找到 app/data
import { products } from "../data/products"; 
// 3. 修正路径：回退一层找到 app/components
import { ProductCard } from "../components/ProductCard";
import { MotionDiv } from "../components/MotionDiv";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#FDFBF7] via-white to-[#FDFBF7]">
           {/* 背景装饰 */}
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <MotionDiv
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl font-serif font-bold text-[#333333] tracking-wider mb-4">
              {t("home.hero.title")}
            </h1>
            <p className="text-2xl md:text-3xl font-serif text-[#D4AF37] italic mb-6">
              {t("home.hero.subtitle")}
            </p>
            <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              {t("home.hero.description")}
            </p>
            <Link
              href="/shop"
              className="inline-block px-10 py-4 bg-[#D4AF37] text-white font-medium rounded-full hover:bg-[#C4A026] transition-colors shadow-lg"
            >
              {t("home.hero.cta")}
            </Link>
          </MotionDiv>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#333333] mb-4">
              {t("home.featured.title")}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
    </div>
  );
}
