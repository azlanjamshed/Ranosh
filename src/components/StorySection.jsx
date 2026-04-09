// import { useTranslation } from "react-i18next";
// import storeImg from "../assets/hero.jpg"; // your image

// const StorySection = () => {
//   const { t, i18n } = useTranslation();
//   const isRTL = i18n.language === "ar";

//   return (
//     <section className="w-full py-20 bg-white">
//       <div
//         dir={isRTL ? "rtl" : "ltr"}
//         className={`max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center ${
//           isRTL ? "text-right" : "text-left"
//         }`}
//       >
//         {/* Text */}
//         <div>
//           <h2 className="text-4xl md:text-5xl font-bold leading-tight">
//             <span className="text-gray-900">{t("discover") || "Discover"}</span>{" "}
//             <br />
//             <span className="bg-gradient-to-r from-orange-500 to-red-400 bg-clip-text text-transparent">
//               {t("our_story") || "Our Story"}
//             </span>
//           </h2>

//           <p className="mt-6 text-gray-600 leading-7">
//             {t("story_desc") ||
//               "Ranosh Company was created over a decade ago with a mission to deliver fresh and high-quality beverages. Starting from a single branch, it has expanded across regions, offering a wide variety of juices, desserts, and more. We focus on quality, freshness, and customer satisfaction every day."}
//           </p>

//           <button className="mt-8 px-6 py-3 border-2 border-orange-500 text-orange-500 rounded-lg hover:bg-orange-500 hover:text-white transition font-medium">
//             {t("timeline") || "View Timeline"}
//           </button>
//         </div>

//         {/* Image */}
//         <div className="flex justify-center">
//           <img
//             src={storeImg}
//             alt="store"
//             className="rounded-2xl shadow-xl w-full max-w-[500px] hover:scale-105 transition duration-500"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default StorySection;

import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import storeImg from "../assets/hero.jpg";

const StorySection = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  return (
    <section className="w-full py-20 bg-white">
      <div
        dir={isRTL ? "rtl" : "ltr"}
        className={`max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center ${
          isRTL ? "text-right" : "text-left"
        }`}
      >
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: isRTL ? 100 : -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            <span className="text-gray-900">{t("discover") || "Discover"}</span>{" "}
            <br />
            <span className="bg-gradient-to-r from-orange-500 to-red-400 bg-clip-text text-transparent">
              {t("our_story") || "Our Story"}
            </span>
          </h2>

          <p className="mt-6 text-gray-600 leading-7">
            {t("story_desc") ||
              "Ranosh Company was created over a decade ago with a mission to deliver fresh and high-quality beverages..."}
          </p>

          {/* <button className="mt-8 px-6 py-3 border-2 border-orange-500 text-orange-500 rounded-lg hover:bg-orange-500 hover:text-white transition font-medium">
            {t("timeline") || "View Timeline"}
          </button> */}
        </motion.div>

        {/* Image */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, x: isRTL ? -100 : 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          <motion.img
            src={storeImg}
            alt="store"
            className="rounded-2xl shadow-xl w-full max-w-[500px]"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default StorySection;
