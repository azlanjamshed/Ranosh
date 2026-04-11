

import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";

const MenuShowcase = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  const [selectedImage, setSelectedImage] = useState(null);

  const items = [
    { key: "citrus", image: "/menu/menu2.jpeg" },
    { key: "energy", image: "/menu/menu1.jpeg" },
    { key: "detox", image: "/menu/menu3.jpeg" },
    { key: "tropical", image: "/menu/menu4.jpeg" },
  ];

  return (
    <section className="py-20 w-full">
      {/* Heading */}
      <div className="bg-gray-50 py-20 w-full rounded-3xl mb-12">
        <h2 className="text-3xl md:text-6xl font-bold text-center text-gray-900">
          {t("our")} <span className="text-orange-500">{t("menu")}</span>
        </h2>

        <p className="text-gray-600 text-sm md:text-lg text-center mt-6">
          {t("menu_desc")}
        </p>
      </div>

      {/* Grid */}
      <div
        className={`max-w-7xl mx-auto px-6 ${
          isRTL ? "text-right" : "text-left"
        }`}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((item) => (
            <motion.div
              key={item.key}
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedImage(item.image)}
              className="relative overflow-hidden rounded-3xl cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.key}
                className="w-full h-auto object-contain border border-orange-200 rounded-3xl"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* 🔥 MODAL WITH ANIMATION */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 text-white text-3xl font-bold"
            >
              ✕
            </button>

            {/* Image Zoom Animation */}
            <motion.img
              src={selectedImage}
              alt="menu"
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.6, opacity: 0 }}
              // transition={{ duration: 0.3 }}
              transition={{ type: "spring", stiffness: 120 }}
              className="max-w-[90%] max-h-[90%] object-contain rounded-2xl shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default MenuShowcase;
