// import { products } from "../data/product";
// import ProductCard from "../components/ProductCard";
// import { useTranslation } from "react-i18next";
// import ProductsHero from "../components/ProductsHero";

// const Products = () => {
//   const { t, i18n } = useTranslation();
//   const isRTL = i18n.language === "ar";

//   return (
//     <section className="py-20 bg-white min-h-screen">
//       <ProductsHero />

//       {/* Grid */}
//       <div
//         className={`max-w-7xl mx-auto px-6 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-12 ${
//           isRTL ? "text-right" : ""
//         }`}
//       >
//         {products.map((product) => (
//           <ProductCard key={product.id} product={product} />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Products;

import { useState } from "react";
import { products } from "../data/product";
import ProductCard from "../components/ProductCard";
import { useTranslation } from "react-i18next";
import ProductsHero from "../components/ProductsHero";

const categories = ["ALL", "CITRUS", "DETOX", "ENERGY", "TROPICAL"];

const Products = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  const [active, setActive] = useState("ALL");

  // 🔥 Filter logic
  const filteredProducts =
    active === "ALL" ? products : products.filter((p) => p.category === active);

  return (
    <section className="py-20 bg-white min-h-screen">
      <ProductsHero />

      {/* 🔥 FILTER BUTTONS */}
      <div className="max-w-7xl mx-auto px-6 mt-10 flex flex-wrap gap-4 justify-center">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            // className={`px-6 py-2 rounded-full font-medium transition ${
            //   active === cat
            //     ? "bg-orange-500 text-white shadow-md"
            //     : "bg-gray-100 text-gray-700 hover:bg-orange-100"
            // }`}
            className={`px-6 py-2 rounded-full font-medium transition ${
              active === cat
                ? "bg-orange-600 text-white"
                : "bg-gray-200 text-gray-600 hover:bg-gray-300"
            }`}
          >
            {cat === "ALL" ? "All Juices" : cat}
          </button>
        ))}
      </div>

      {/* PRODUCTS GRID */}
      <div
        className={`max-w-7xl mx-auto px-6 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-12 ${
          isRTL ? "text-right" : ""
        }`}
      >
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default Products;
