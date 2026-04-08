import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
const ProductsHero = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  return (
    <section className="py-20 bg-gray-50 text-center">
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className={`max-w-4xl mx-auto px-6 ${
          isRTL ? "text-right" : "text-center"
        }`}
      >
        {/* Top Label */}
        <p className="text-sm tracking-widest text-orange-500 font-semibold uppercase">
          {t("freshly") || "Freshly Squeezed"}
        </p>

        {/* Heading */}
        <h1 className="mt-4 text-4xl md:text-6xl font-bold leading-tight text-gray-900">
          {t("nature") || "Nature's"}{" "}
          <span className="text-orange-500">
            {t("liquid") || "Liquid Gold"}
          </span>
        </h1>

        {/* Description */}
        <p className="mt-6 text-gray-600 text-lg">
          {t("products_desc") ||
            "Explore our curated selection of vitamin-rich juices, freshly prepared every day from the finest fruits."}
        </p>
      </motion.div>
    </section>
  );
};

export default ProductsHero;
