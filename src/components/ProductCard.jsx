import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useState } from "react";

const ProductCard = ({ product }) => {
  const { t, i18n } = useTranslation();

  const isRTL = i18n.language === "ar";
  const [loading, setLoading] = useState(true);

  const categoryColors = {
    cocktail: "bg-pink-400 text-white",
    coffee: "bg-amber-700 text-white",
    dessert: "bg-purple-400 text-white",
    fresh_juice: "bg-orange-400 text-white",
    ice_cream: "bg-blue-300 text-white",
    juice_box: "bg-yellow-400 text-white",
    shake: "bg-indigo-400 text-white",
    mojito: "bg-green-400 text-white",
    salad: "bg-lime-400 text-white",
    shawarma: "bg-red-500 text-white",
    shawarma_sauce: "bg-rose-400 text-white",

    default: "bg-gray-300 text-black",
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.1 }}
      className={`bg-white rounded-2xl border border-orange-100 shadow-sm  transition p-3 hover:shadow-[0_0_10px_rgba(251,146,60,0.4)] hover:border-orange-300 ${
        isRTL ? "text-right" : "text-left"
      }`}
    >
      {/* Image */}
      <div className="relative flex justify-center border rounded-2xl border-orange-100 p-4 h-36 items-center">
       
        {/* 🔥 LOADER */}
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center">
            {/* OPTION 1: Spinner */}
            <div className="w-6 h-6 border-2 border-orange-400 border-t-transparent rounded-full animate-spin"></div>

           
          </div>
        )}

        {/* Image */}
        <img
          src={`/products/${product.image}`}
          alt={product.name}
          loading="lazy"
          onLoad={() => setLoading(false)}
          className={`object-contain max-h-full transition duration-500 ${
            loading ? "opacity-0" : "opacity-100"
          }`}
        />

        {/* Category */}
        <span
          className={`absolute top-1  ${
            isRTL ? "left-1" : "right-1"
          } text-[8px] md:text-xs lg:text-sm px-2 md:px-3 py-1 rounded-full font-semibold ${
            categoryColors[product.category] || categoryColors.default
          }`}
        >
          {t(`categories.${product.category}`)}
        </span>
      </div>

      {/* Content */}
      <div className="mt-3">
        <h3 className=" text-xs md:text-lg lg:text-xl font-bold text-gray-900 line-clamp-1">
          {t(`products.${product.name}`)}
        </h3>

        <p className=" text-[10px] md:text-sm lg:text-base text-gray-500 mt-1 line-clamp-2">
          {t(`products.${product.description}`)}
        </p>

        {/* Tags */}
        <div
          className={`flex flex-wrap gap-1 mt-2 ${isRTL ? "justify-end" : ""}`}
        >
          {(product.tags || []).slice(0, 2).map((tag, index) => (
            <span
              key={index}
              className="bg-orange-100 text-orange-600 text-[8px] md:text-xs lg:text-sm px-3 py-1 rounded-full"
            >
              {t(`products.${tag}`)}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
