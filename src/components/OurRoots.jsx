// import { useTranslation } from "react-i18next";
// import orangeImg from "../assets/hero.jpg";

// const OurRoots = () => {
//   const { t, i18n } = useTranslation();
//   const isRTL = i18n.language === "ar";

//   return (
//     <section className="py-24 bg-[#f5f5f5]">
//       <div
//         className={`max-w-6xl mx-auto px-6 ${
//           isRTL ? "text-right" : "text-left"
//         }`}
//       >
//         {/* MAIN GRID */}
//         <div className="grid md:grid-cols-2 gap-10 items-start">
//           {/* 🟤 LEFT SIDE (TITLE ONLY) */}
//           <div>
//             <h2 className="text-2xl md:text-6xl font-semibold text-orange-700">
//               {t("our_roots") || "Our Roots"}
//             </h2>
//             <div className="w-full h-[3px] bg-orange-500 mt-3"></div>
//           </div>

//           {/* 🔥 RIGHT SIDE (STACKED) */}
//           <div className="space-y-4">
//             {/* TOP CARD */}
//             <div className="bg-white rounded-3xl p-10 shadow-sm">
//               <p className="italic text-gray-700 text-lg leading-relaxed">
//                 {t("roots_quote") ||
//                   `"It wasn’t about selling juice. It was about bottling the energy of a sun-drenched orchard and sharing it with the community."`}
//               </p>

//               <p className="mt-6 text-gray-600 leading-7 text-sm">
//                 {t("roots_desc") ||
//                   "Founded in the heart of the city by the Al-Rashid family, Ranoosh started with just three recipes..."}
//               </p>
//             </div>

//             {/* 🔻 BOTTOM (IMAGE + CARD) */}
//             <div className="grid grid-cols-2 gap-6 items-stretch">
//               {/* IMAGE */}
//               <div className="overflow-hidden rounded-2xl">
//                 <img
//                   src={orangeImg}
//                   alt="oranges"
//                   className="w-full h-full object-cover rounded-2xl"
//                 />
//               </div>

//               {/* SECRET CARD */}
//               <div className="bg-[#efe2b5] rounded-2xl p-6 flex flex-col justify-center">
//                 <h3 className="text-lg font-semibold text-gray-900">
//                   {t("secret_title") || "The Secret Sauce?"}
//                 </h3>

//                 <p className="mt-3 text-gray-700 text-sm leading-6">
//                   {t("secret_desc") ||
//                     "No added sugars. No concentrates. Just cold-pressed perfection."}
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default OurRoots;

import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import orangeImg from "../assets/hero.jpg";

const OurRoots = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  return (
    <section className="py-24 bg-[#f5f5f5]">
      <div
        dir={isRTL ? "rtl" : "ltr"}
        className={`max-w-6xl mx-auto px-6 ${
          isRTL ? "text-right" : "text-left"
        }`}
      >
        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* 🟤 LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 80 : -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* Title */}
            <motion.h2
              className="text-2xl md:text-6xl font-semibold text-orange-700"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {t("our_roots") || "Our Roots"}
            </motion.h2>

            {/* 🔥 Animated line */}
            <motion.div
              className="h-[3px] bg-orange-500 mt-3"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ delay: 0.4, duration: 0.6 }}
            />
          </motion.div>

          {/* 🔥 RIGHT SIDE */}
          <div className="space-y-4">
            {/* TOP CARD */}
            <motion.div
              className="bg-white rounded-3xl p-10 shadow-sm"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="italic text-gray-700 text-lg leading-relaxed">
                {t("roots_quote") ||
                  `"It wasn’t about selling juice. It was about bottling the energy..."`}
              </p>

              <p className="mt-6 text-gray-600 leading-7 text-sm">
                {t("roots_desc") ||
                  "Founded in the heart of the city by the Al-Rashid family..."}
              </p>
            </motion.div>

            {/* 🔻 BOTTOM GRID */}
            <div className="grid grid-cols-2 gap-6 items-stretch">
              {/* IMAGE */}
              <motion.div
                className="overflow-hidden rounded-2xl"
                initial={{ opacity: 0, scale: 1.1 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <motion.img
                  src={orangeImg}
                  alt="oranges"
                  className="w-full h-full object-cover rounded-2xl"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.4 }}
                />
              </motion.div>

              {/* SECRET CARD */}
              <motion.div
                className="bg-[#efe2b5] rounded-2xl p-6 flex flex-col justify-center"
                initial={{ opacity: 0, x: isRTL ? -60 : 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ scale: 1.03 }}
              >
                <h3 className="text-lg font-semibold text-gray-900">
                  {t("secret_title") || "The Secret Sauce?"}
                </h3>

                <p className="mt-3 text-gray-700 text-sm leading-6">
                  {t("secret_desc") ||
                    "No added sugars. No concentrates. Just cold-pressed perfection."}
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurRoots;
