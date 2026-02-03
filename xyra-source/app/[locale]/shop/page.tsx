import { getTranslations } from "next-intl/server";
import { products } from "../../data/products";
import { ProductCard } from "../../components/ProductCard";
import { MotionDiv } from "../../components/MotionDiv";

export default async function ShopPage() {
  const t = await getTranslations();

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-charcoal mb-4">
            {t("shop.title")}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t("shop.subtitle")}
          </p>
          <div className="w-20 h-1 bg-gold mx-auto mt-6" />
        </div>

        {/* Products Grid */}
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
    </div>
  );
}
