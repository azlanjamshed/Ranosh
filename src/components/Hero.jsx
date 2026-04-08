// import { useTranslation } from "react-i18next";
// import juiceImg from "../assets/hero.jpg"; // add any juice image

// const Hero = () => {
//   const { t, i18n } = useTranslation();

//   const isRTL = i18n.language === "ar";

//   return (
//     <section className="w-full min-h-[90vh] flex items-center bg-gradient-to-br from-orange-50 to-white">
//       <div
//         className={`max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-10 items-center ${
//           isRTL ? "md:flex-row-reverse text-right" : ""
//         }`}
//       >
//         {/* Text Content */}
//         <div>
//           <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
//             {t("hero_title")}
//           </h1>

//           <p className="mt-4 text-gray-600 text-lg">
//             {t("hero_desc") || "Fresh, natural, and full of energy. Taste the best juices every day."}
//           </p>

//           {/* Buttons */}
//           <div className="mt-6 flex gap-4">
//             <button className="bg-orange-500 text-white px-6 py-3 rounded-lg shadow hover:bg-orange-600 transition">
//               {t("order_now")}
//             </button>

//             <button className="border border-orange-500 text-orange-500 px-6 py-3 rounded-lg hover:bg-orange-50 transition">
//               {t("products")}
//             </button>
//           </div>
//         </div>

//         {/* Image */}
//         <div className="flex justify-center">
//           <img
//             src={juiceImg}
//             alt="juice"
//             className="w-[500px] md:w-[600px] drop-shadow-xl hover:scale-105 transition duration-500"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;
import React from "react";
import juiceImg from "../assets/hero.jpg";
import mainImage from "../assets/main.png";
import { motion } from "framer-motion";
// import DarkArrow from "../assets/dark-arrow.png";
// import LightArrow from "../assets/white-arrow.png";
import { NavLink } from "react-router-dom";
import Reveal from "./Reveal";
const Hero = () => {
  return (
    <div
      className="w-full py-20 md:py-40  object-contain bg-center bg-cover text-white text-center flex  items-center justify-center"
      style={{
        backgroundImage: `linear-gradient(rgba(39,38,38,0.8), rgba(39,38,38,0.8)), url(${juiceImg})`,
      }}
    >
      <div className="w-11/12 sm:w-10/12 md:w-3/4 lg:w-2/3 flex flex-col justify-center items-center gap-3 md:gap-5 text-center">
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <img src={mainImage} alt="" />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
