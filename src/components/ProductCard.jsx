import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const ProductCard = ({ product }) => {
  const { t, i18n } = useTranslation();

  const isRTL = i18n.language === "ar";

  // const categoryColors = {
  //   citrus: "bg-orange-400 text-white",
  //   detox: "bg-green-400 text-white",
  //   berry: "bg-pink-400 text-white",
  //   tropical: "bg-yellow-400 text-black",
  //   energy: "bg-red-400 text-white",
  //   default: "bg-gray-300 text-black",
  // };

  const categoryColors = {
    cocktail: "bg-pink-400 text-white",
    coffee: "bg-amber-700 text-white",
    dessert: "bg-purple-400 text-white",
    fresh_juice: "bg-orange-400 text-white",
    ice_cream: "bg-blue-300 text-black",
    juice_box: "bg-yellow-400 text-black",
    shake: "bg-indigo-400 text-white",
    mojito: "bg-green-400 text-white",
    salad: "bg-lime-400 text-black",
    shawarma: "bg-red-500 text-white",
    shawarma_sauce: "bg-rose-400 text-white",

    default: "bg-gray-300 text-black",
  };
  return (
    //   <motion.div
    //     initial={{ opacity: 0, y: 50 }}
    //     whileInView={{ opacity: 1, x: 0 }}
    //     viewport={{ once: true, margin: "-100px" }}
    //     // transition={{ duration: 0.4, ease: "easeOut" }}

    //     whileHover={{ scale: 1.05 }} // ✅ Framer hover (better)
    //     transition={{ duration: 0.1, ease: "easeOut" }}
    //     className={`bg-white rounded-3xl border border-orange-200 shadow-md
    // hover:shadow-[0_0_15px_#fb923c] transition duration-300 overflow-hidden group
    // ${isRTL ? "text-right" : "text-left"}`}
    //   >
    //     {/* Image */}
    //     <div className="relative">
    //       <img
    //         src={product.image}
    //         alt={product.name}
    //         className="w-full h-52 p-5 object-contain border rounded-3xl border-orange-200 group-hover:scale-105 transition duration-500"
    //       />

    //       {/* Category Badge */}
    //       <span
    //         className={`absolute top-3 ${
    //           isRTL ? "left-3" : "right-3"
    //         } text-xs px-3 py-1 rounded-full font-semibold ${
    //           categoryColors[product.category] || categoryColors.default
    //         }`}
    //       >
    //         {t(`categories.${product.category}`)}
    //       </span>
    //     </div>

    //     {/* Content */}
    //     <div className="p-5">
    //       {/* Title */}
    //       <h3 className="text-lg font-bold text-gray-900">
    //         {t(`products.${product.name}`)}
    //       </h3>

    //       {/* Description */}
    //       <p className="text-gray-500 text-sm mt-2">
    //         {t(`products.${product.description}`)}
    //       </p>

    //       {/* Tags */}
    //       <div
    //         className={`flex flex-wrap gap-2 mt-4 ${isRTL ? "justify-end" : ""}`}
    //       >
    //         {(product.tags || []).map((tag, index) => (
    //           <span
    //             key={index}
    //             className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full"
    //           >
    //             {t(`products.${tag}`)}
    //           </span>
    //         ))}
    //       </div>

    //       <button className="mt-5 text-orange-500 font-semibold hover:underline flex items-center gap-2 justify-end w-full">
    //         <span>{t("view_details")}</span>
    //         <span>→</span>
    //       </button>
    //     </div>
    //   </motion.div>
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
      <div className="relative flex justify-center border rounded-2xl border-orange-100 p-4">
        <img
          src={`/products/${product.image}`}
          // src={product.image}
          alt={product.name}
          loading="lazy"
          className="object-cover group-hover:scale-105 transition duration-500"
        />

        {/* Category */}
        <span
          className={`absolute top-1  ${
            isRTL ? "left-1" : "right-1"
          } text-xs px-3 py-1 rounded-full font-semibold ${
            categoryColors[product.category] || categoryColors.default
          }`}
        >
          {t(`categories.${product.category}`)}
        </span>
      </div>

      {/* Content */}
      <div className="mt-3">
        <h3 className="text-lg font-bold text-gray-900 line-clamp-1">
          {t(`products.${product.name}`)}
        </h3>

        <p className="text-s text-gray-500 mt-1 line-clamp-2">
          {t(`products.${product.description}`)}
        </p>

        {/* Tags */}
        <div
          className={`flex flex-wrap gap-1 mt-2 ${isRTL ? "justify-end" : ""}`}
        >
          {(product.tags || []).slice(0, 2).map((tag, index) => (
            <span
              key={index}
              className="bg-orange-100 text-orange-600 text-xs px-3 py-1 rounded-full"
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
