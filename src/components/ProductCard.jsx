// import { useTranslation } from "react-i18next";
// const ProductCard = ({ product }) => {
//   const categoryColors = {
//     citrus: "bg-orange-400 text-white",
//     detox: "bg-green-400 text-white",
//     berry: "bg-pink-400 text-white",
//     tropical: "bg-yellow-400 text-black",
//     energy: "bg-red-400 text-white",
//     default: "bg-gray-300 text-black",
//   };
//   const { t } = useTranslation();

//   return (
//     <div className="bg-white rounded-3xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden group hover:scale-105">
//       {/* Image */}
//       <div className="relative">
//         <img
//           src={product.image}
//           alt={product.name}
//           className="w-full h-52 object-contain group-hover:scale-105 transition duration-500"
//         />

//         {/* Category Badge */}
//         <span
//           className={`absolute top-3 right-3 text-xs px-3 py-1 rounded-full font-semibold ${
//             categoryColors[product.category] || categoryColors.default
//           }`}
//         >
//           {t(`categories.${product.category || "c"}`)}
//         </span>
//       </div>

//       {/* Content */}
//       <div className="p-5">
//         {/* Title */}
//         <h3 className="text-lg font-bold text-gray-900">
//           {t(`products.${product.name}`)}
//         </h3>

//         {/* Description */}
//         <p className="text-gray-500 text-sm mt-2">
//           {t(
//             `products.${
//               product.description ||
//               "A refreshing juice crafted with natural ingredients."
//             }`,
//           )}
//         </p>

//         {/* Tags */}
//         <div className="flex flex-wrap gap-2 mt-4">
//           {(product.tags || ["Fresh", "Organic"]).map((tag, index) => (
//             <span
//               key={index}
//               className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full"
//             >
//               {t(`products.${tag}`)}
//             </span>
//           ))}
//         </div>

//         {/* CTA */}
//         <button className="mt-5 text-orange-500 font-semibold hover:underline flex items-center gap-1">
//           View Details →
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;

import { useTranslation } from "react-i18next";

const ProductCard = ({ product }) => {
  const { t, i18n } = useTranslation();

  const isRTL = i18n.language === "ar";

  const categoryColors = {
    citrus: "bg-orange-400 text-white",
    detox: "bg-green-400 text-white",
    berry: "bg-pink-400 text-white",
    tropical: "bg-yellow-400 text-black",
    energy: "bg-red-400 text-white",
    default: "bg-gray-300 text-black",
  };

  return (
    <div
      className={`bg-white rounded-3xl border border-orange-200 shadow-md hover:shadow-[0_0_15px_#fb923c] transition duration-300  overflow-hidden group hover:scale-105 ${
        isRTL ? "text-right" : "text-left"
      }`}
    >
      {/* Image */}
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-52 p-5 object-contain border rounded-3xl border-orange-200 group-hover:scale-105 transition duration-500"
        />

        {/* Category Badge */}
        <span
          className={`absolute top-3 ${
            isRTL ? "left-3" : "right-3"
          } text-xs px-3 py-1 rounded-full font-semibold ${
            categoryColors[product.category] || categoryColors.default
          }`}
        >
          {t(`categories.${product.category}`)}
        </span>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Title */}
        <h3 className="text-lg font-bold text-gray-900">
          {t(`products.${product.name}`)}
        </h3>

        {/* Description */}
        <p className="text-gray-500 text-sm mt-2">
          {t(`products.${product.description}`)}
        </p>

        {/* Tags */}
        <div
          className={`flex flex-wrap gap-2 mt-4 ${isRTL ? "justify-end" : ""}`}
        >
          {(product.tags || []).map((tag, index) => (
            <span
              key={index}
              className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full"
            >
              {t(`products.${tag}`)}
            </span>
          ))}
        </div>

        {/* CTA */}
        {/* <button
          className={`mt-5 text-orange-500 font-semibold hover:underline flex items-center gap-1 ${
            isRTL ? "flex-row-reverse justify-end" : ""
          }`}
        >
          <span>{t("view_details")}</span>
          <span>{isRTL ? "←" : "→"}</span>
        </button> */}
        <button className="mt-5 text-orange-500 font-semibold hover:underline flex items-center gap-2 justify-end w-full">
          <span>{t("view_details")}</span>
          <span>→</span>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
