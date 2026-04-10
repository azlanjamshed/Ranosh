import { products } from "../data/products";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const ProductsSection = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";
  const homeProducts = products.slice(0, 8); // 🔥 only 8

  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 via-white to-yellow-50">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-6xl font-bold text-gray-900">
          {t("featured") || "Featured Juices"}
        </h2>
        <p className="text-sm md:text-lg text-gray-600 mt-3">
          {t("featured_desc") || "Our best-selling delicious fresh juices"}
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {homeProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* 🔥 View More Button */}
      {/* <div className="text-center mt-12">
        <Link
          to="/products"
          className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition font-medium"
        >
          {t("view_more_products")} {isRTL ? "←" : "→"}
        </Link>
      </div> */}
      <div className="text-center mt-20">
        <Link
          to="/products"
          // className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition font-medium inline-flex items-center gap-2"
          className={` text-xs md:text-base bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition font-medium inline-flex items-center gap-2 ${
            isRTL ? "flex-row-reverse" : ""
          }`}
        >
          {/* {isRTL && <span>←</span>} */}

          <span>{t("view_more_products")}</span>

          {/* {!isRTL && <span>→</span>} */}
        </Link>
      </div>
    </section>
  );
};

export default ProductsSection;
