import { useEffect, useState } from "react";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";
import { useTranslation } from "react-i18next";
import ProductsHero from "../components/ProductsHero";
import MenuShowcase from "../components/MenuShowcase";

// const categories = ["all", "citrus", "detox", "energy", "tropical"];
const categories = [
  "all",
  "cocktail",
  "coffee",
  "dessert",
  "fresh_juice",
  "ice_cream",
  "juice_box",
  "shake",
  "mojito",
  "salad",
  "shawarma",
  "shawarma_sauce",
];

const Products = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";
  const [active, setActive] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  // 🔥 Filter logic

  const filteredProducts =
    active === "all" ? products : products.filter((p) => p.category === active);

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProducts = filteredProducts.slice(
    startIndex,
    startIndex + itemsPerPage,
  );
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage, active]);
  return (
    <section className=" py-5 bg-white min-h-screen">
      <ProductsHero />

      {/* 🔥 FILTER BUTTONS */}
      <div className="max-w-7xl mx-auto px-6 mt-10 flex flex-wrap gap-4 justify-center">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setActive(cat);
              setCurrentPage(1);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className={`px-6 py-2 rounded-full font-medium transition ${
              active === cat
                ? "bg-orange-600 text-white"
                : "bg-gray-200 text-gray-600 hover:bg-gray-300"
            }`}
          >
            {/* {cat === "ALL" ? "All Juices" : cat} */}
            {t(`categories.${cat}`)}
          </button>
        ))}
      </div>

      {/* PRODUCTS GRID */}
      <div className="transition-all duration-300">
        <div
          className={`max-w-7xl mx-auto px-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-8 mt-12 ${
            isRTL ? "text-right" : ""
          }`}
        >
          {currentProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="flex justify-center items-center gap-3 mt-20 flex-wrap">
          {/* Prev */}
          <button
            onClick={() => {
              setCurrentPage((p) => p - 1);
            }}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
          >
            {isRTL ? "→" : "←"}
          </button>

          {/* Page Numbers */}
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => {
                setCurrentPage(page);
                // window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className={`px-4 py-2 rounded ${
                currentPage === page
                  ? "bg-orange-500 text-white"
                  : "bg-gray-200"
              }`}
            >
              {page}
            </button>
          ))}

          {/* Next */}
          <button
            onClick={() => {
              setCurrentPage((p) => p + 1);
            }}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
          >
            {isRTL ? "←" : "→"}
          </button>
        </div>
      </div>
      <MenuShowcase />
    </section>
  );
};

export default Products;
