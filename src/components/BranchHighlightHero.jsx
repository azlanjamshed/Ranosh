// import { useTranslation } from "react-i18next";
// import bgImage from "../assets/hero.jpg"; // your image
// import { useNavigate } from "react-router-dom";

// const BranchHighlightHero = () => {
//   const { t, i18n } = useTranslation();
//   const isRTL = i18n.language === "ar";
//   const navigate = useNavigate();
//   const features = t("features", { returnObjects: true });
//   return (
//     <section className="relative py-24 overflow-hidden">
//       {/* Background Image */}
//       <div className="absolute inset-0">
//         <img src={bgImage} alt="juice" className="w-full h-full object-cover" />
//         {/* Dark overlay */}
//         <div className="absolute inset-0 bg-black/50"></div>
//       </div>

//       {/* Content */}
//       {/* <div
//         className={`relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center ${
//           isRTL ? "text-right" : "text-left"
//         }`}
//       > */}
//       <div
//         dir={isRTL ? "rtl" : "ltr"}
//         className={`relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center ${
//           isRTL ? "text-right" : "text-left"
//         }`}
//       >
//         {/* LEFT */}
//         <div>
//           <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
//             <span className="text-orange-400">
//               {t("best_juice") || "Best Juice in Riyadh"}
//             </span>
//           </h2>

//           <p className="mt-4 text-gray-200 max-w-md">
//             {t("brand_desc") ||
//               "We grew up in a place where everyone deserved fresh, natural juice. Our mission is to bring that experience to you."}
//           </p>

//           <button
//             className="mt-6 border border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition"
//             onClick={() => navigate("/about")}
//           >
//             {t("read_more") || "Read More"}
//           </button>
//         </div>

//         {/* RIGHT - Features */}
//         <div className="space-y-4">
//           {features.map((item, index) => (
//             <div
//               key={index}
//               className="bg-white/10 backdrop-blur-md border border-white/20 p-5 rounded-2xl text-white hover:bg-white/20 transition"
//             >
//               <h3 className="text-orange-400 font-semibold">{item.title}</h3>
//               <p className="text-sm text-gray-200 mt-1">{item.desc}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default BranchHighlightHero;

import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import bgImage from "../assets/hero.jpg";
import { useNavigate } from "react-router-dom";

const BranchHighlightHero = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";
  const navigate = useNavigate();
  const features = t("features", { returnObjects: true });

  // 🔥 Stagger for features
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, x: isRTL ? -50 : 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <section className="relative py-24 overflow-hidden">
      {/* 🔥 Background with subtle zoom */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <img src={bgImage} alt="juice" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50"></div>
      </motion.div>

      {/* Content */}
      <div
        dir={isRTL ? "rtl" : "ltr"}
        className={`relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center ${
          isRTL ? "text-right" : "text-left"
        }`}
      >
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: isRTL ? 80 : -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Heading */}
          <motion.h2
            className="text-3xl md:text-6xl font-bold text-white leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className=" text-orange-400">
              {t("best_juice") || "Best Juice in Riyadh"}
            </span>
          </motion.h2>

          {/* Paragraph */}
          <motion.p
            className="mt-4 text-gray-200 max-w-md text-sm md:text-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            {t("brand_desc") ||
              "We grew up in a place where everyone deserved fresh, natural juice..."}
          </motion.p>

          {/* Button */}
          <motion.button
            className="mt-6 border border-white text-white px-3 md:px-6 py-2 md:py-3 rounded-lg hover:bg-white hover:text-black transition"
            onClick={() => navigate("/about")}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
          >
            {t("read_more") || "Read More"}
          </motion.button>
        </motion.div>

        {/* RIGHT SIDE - Features */}
        <motion.div
          className="space-y-4"
          variants={containerVariants}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
        >
          {features.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ scale: 1.03 }}
              className="bg-white/10 backdrop-blur-md border border-white/20 p-5 rounded-2xl text-white hover:bg-white/20 transition"
            >
              <h3 className="text-xl md:text-3xl text-orange-400 font-semibold">
                {item.title}
              </h3>
              <p className="text-xs md:text-sm text-gray-200 mt-1">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BranchHighlightHero;
