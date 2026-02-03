import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { getProductById, getRelatedProducts, products } from "../../../data/products";
import { ProductCard } from "../../../components/ProductCard";
import { MotionDiv } from "../../../components/MotionDiv";
import { AddToCartButton } from "../../../components/AddToCartButton";

interface ProductPageProps {
  params: Promise<{ id: string; locale: string }>;
}

export function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    notFound();
  }

  const t = await getTranslations();
  const relatedProducts = getRelatedProducts(id);

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Product Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Product Image */}
          <MotionDiv
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="aspect-square bg-gray-100 rounded-2xl overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </MotionDiv>

          {/* Product Info */}
          <MotionDiv
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <p className="text-sm text-gray-500 uppercase tracking-wider mb-2">
              {product.category}
            </p>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-charcoal mb-4">
              {product.name}
            </h1>
            <p className="text-3xl text-gold font-semibold mb-8">
              ${product.price}
            </p>

            <div className="prose prose-gray mb-8">
              <h3 className="text-lg font-medium text-charcoal mb-2">
                {t("product.description")}
              </h3>
              <p className="text-gray-600">{product.description}</p>
            </div>

            <AddToCartButton product={product} />
          </MotionDiv>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section>
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-charcoal mb-4">
                {t("product.relatedProducts")}
              </h2>
              <div className="w-16 h-1 bg-gold mx-auto" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {relatedProducts.map((relatedProduct, index) => (
                <MotionDiv
                  key={relatedProduct.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <ProductCard product={relatedProduct} />
                </MotionDiv>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
