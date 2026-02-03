import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/routing";
import { products } from "../data/products";
import { ProductCard } from "../components/ProductCard";
import { MotionDiv } from "../components/MotionDiv";

export default async function HomePage() {
  const t = await getTranslations();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-cream via-white to-cream">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/20 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <MotionDiv
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl font-serif font-bold text-charcoal tracking-wider mb-4">
              {t("home.hero.title")}
            </h1>
            <p className="text-2xl md:text-3xl font-serif text-gold italic mb-6">
              {t("home.hero.subtitle")}
            </p>
            <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              {t("home.hero.description")}
            </p>
            <Link
              href="/shop"
              className="inline-block px-10 py-4 bg-gold text-white font-medium rounded-full hover:bg-gold-hover transition-colors shadow-lg hover:shadow-xl"
            >
              {t("home.hero.cta")}
            </Link>
          </MotionDiv>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-charcoal mb-4">
              {t("home.featured.title")}
            </h2>
            <div className="w-20 h-1 bg-gold mx-auto" />
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

          <div className="text-center mt-12">
            <Link
              href="/shop"
              className="inline-block px-8 py-3 border-2 border-charcoal text-charcoal font-medium rounded-full hover:bg-charcoal hover:text-white transition-colors"
            >
              {t("home.featured.viewAll")}
            </Link>
          </div>
        </div>
      </section>

      {/* Brand Statement */}
      <section className="py-20 bg-charcoal text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            The Art of Fishing
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            At XYRA, we believe fishing is more than a sport—it&apos;s an art form.
            Our carefully curated collection brings elegance and sophistication
            to every moment on the water, empowering women to embrace their
            passion with style and confidence.
          </p>
        </div>
      </section>
    </div>
  );
}
