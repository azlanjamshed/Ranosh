import { products } from "../data/product";
import ProductCard from "../components/ProductCard";
import { useTranslation } from "react-i18next";

const Products = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  return (
    <section className="py-20 bg-white min-h-screen">
      
      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900">
          {t("products") || "Our Products"}
        </h1>
      </div>

      {/* Grid */}
      <div
        className={`max-w-7xl mx-auto px-6 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 ${
          isRTL ? "text-right" : ""
        }`}
      >
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default Products;