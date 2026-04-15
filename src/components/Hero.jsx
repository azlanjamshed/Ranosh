// import React from "react";
// import juiceImg from "../assets/hero.jpg";
// import mainImage from "../assets/main.png";
// import ranosh from "../../public/ran.png";

// import { motion } from "framer-motion";

// import { NavLink } from "react-router-dom";

// const Hero = () => {
//   return (
//     <div
//       className="w-full py-20 md:py-40  object-contain bg-center bg-cover text-white text-center flex  items-center justify-center"
//       style={{
//         backgroundImage: `linear-gradient(rgba(39,38,38,0.8), rgba(39,38,38,0.8)), url(${juiceImg})`,
//       }}
//     >
//       <div className="w-11/12 sm:w-10/12 md:w-3/4 lg:w-2/3 flex flex-col justify-center items-center gap-3 md:gap-5 text-center">
//         <motion.div
//           initial={{ opacity: 0, y: -100 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, margin: "-100px" }}
//           transition={{ duration: 1, ease: "easeInOut" }}
//         >
//           <img src={mainImage} alt="" className="w-full h-auto" />
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default Hero;

// import React, { useEffect, useRef, useState } from "react";
// import orange from "../assets/orange.png";
// import mango from "../assets/mango.png";
// import strawberry from "../assets/strawberry.png";
// import watermelon from "../assets/watermelon.png";
// import pomo from "../assets/pomo.png";
// import { AnimatePresence, motion } from "framer-motion";
// import { useTranslation } from "react-i18next";
// const juice = [
//   {
//     image: orange,
//   },
//   {
//     image: mango,
//   },
//   {
//     image: strawberry,
//   },
//   {
//     image: watermelon,
//   },
//   {
//     image: pomo,
//   },
// ];

// const Hero = () => {
//   const { t, i18n } = useTranslation();
//   const isRTL = i18n.language === "ar";
//   const contentVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2, // Time between each element appearing
//         delayChildren: 0.1,
//       },
//     },
//   };

//   // The fade-and-slide-up effect for individual text/feature items
//   const itemVariants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.8, ease: "easeOut" },
//     },
//   };

//   const [current, setCurrent] = useState(0);
//   const intervalRef = useRef(null);

//   const startAutoSlide = () => {
//     stopAutoSlide();
//     intervalRef.current = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % juice.length);
//     }, 5000);
//   };
//   const stopAutoSlide = () => {
//     if (intervalRef.current) {
//       clearInterval(intervalRef.current);
//     }
//   };
//   useEffect(() => {
//     startAutoSlide();
//     return () => stopAutoSlide();
//   });
//   const jui = juice[current];

//   return (
//     <section className="relative w-full  bg-gradient-to-r from-[#0a0502] via-[#2a1104] to-[#e67300] flex items-center justify-center py-12 md:py-20 overflow-hidden">
//       {/* Decorative Dots (Bottom Left) */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 0.6 }}
//         transition={{ duration: 1.5, delay: 1 }}
//         className="absolute bottom-10 left-10 grid grid-cols-4 gap-2 opacity-60 hidden lg:grid"
//       >
//         {[...Array(12)].map((_, i) => (
//           <div
//             key={i}
//             className={`w-1.5 h-1.5 rounded-full ${i % 4 === 0 ? "bg-[#ff5a1f]" : "bg-gray-600"}`}
//           ></div>
//         ))}
//       </motion.div>

//       <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 items-center gap-10 relative z-10">
//         {/* LEFT CONTENT */}
//         <motion.div
//           variants={contentVariants}
//           initial="hidden"
//           animate="visible"
//           // className="text-white text-center lg:text-left"
//           className={`text-white text-center ${
//             isRTL ? "lg:text-right" : "lg:text-left"
//           }`}
//         >
//           <motion.h1
//             variants={itemVariants}
//             className="text-4xl sm:text-6xl lg:text-[72px] font-extrabold tracking-tight leading-[1.1]"
//           >
//             {t("hero.title1")}
//             <br />
//             {t("hero.title2")}
//           </motion.h1>

//           {/* Note: To get the exact script font, you should import a Google Font like 'Dancing Script' or 'Caveat' in your CSS/HTML */}
//           <motion.h2
//             variants={itemVariants}
//             className="text-[#ff5a1f] text-4xl sm:text-5xl lg:text-6xl mt-2 font-bold"
//             style={{
//               fontFamily: "'Brush Script MT', 'Dancing Script', cursive",
//             }}
//           >
//             {t("hero.brand")}
//           </motion.h2>

//           {/* <p className="mt-8 hidden md:block text-white text-lg sm:text-xl max-w-md mx-auto lg:mx-0 font-light leading-relaxed">
//             100% natural juice made from the finest fruits. No added sugar, no
//             preservatives.
//           </p> */}

//           {/* FEATURES */}
//           <motion.div
//             variants={contentVariants}
//             // className="flex justify-center lg:justify-start gap-8 mt-12 flex-wrap"
//             className={`flex ${
//               isRTL ? "lg:justify-start" : "lg:justify-start"
//             } justify-center gap-8 mt-12 flex-wrap`}
//           >
//             {/* Feature 1: 100% Natural */}
//             <motion.div
//               variants={itemVariants}
//               className="flex flex-col items-center"
//             >
//               <div className="w-12 h-12 rounded-full border-2 border-[#ff5a1f] flex items-center justify-center text-[#ff5a1f] mb-3">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="22"
//                   height="22"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 >
//                   <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
//                   <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
//                 </svg>
//               </div>
//               <p className="text-sm font-medium text-white text-center leading-tight">
//                 {t("hero.feature1_line1")}
//                 <br />
//                 {t("hero.feature1_line2")}
//               </p>
//             </motion.div>

//             {/* Feature 2: No Added Sugar */}
//             <motion.div
//               variants={itemVariants}
//               className="flex flex-col items-center"
//             >
//               <div className="w-12 h-12 rounded-full border-2 border-[#ff5a1f] flex items-center justify-center text-[#ff5a1f] mb-3 relative">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="20"
//                   height="20"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 >
//                   <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
//                   <polyline points="3.29 7 12 12 20.71 7" />
//                   <line x1="12" y1="22" x2="12" y2="12" />
//                   {/* Slash line for "No" */}
//                   <line
//                     x1="2"
//                     y1="2"
//                     x2="22"
//                     y2="22"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                   />
//                 </svg>
//               </div>
//               <p className="text-sm font-medium text-white text-center leading-tight">
//                 {t("hero.feature2_line1")}
//                 <br />
//                 {t("hero.feature2_line2")}
//               </p>
//             </motion.div>

//             {/* Feature 3: No Preservatives */}
//             <motion.div
//               variants={itemVariants}
//               className="flex flex-col items-center"
//             >
//               <div className="w-12 h-12 rounded-full border-2 border-[#ff5a1f] flex items-center justify-center text-[#ff5a1f] mb-3 relative">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="22"
//                   height="22"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 >
//                   <path d="M10 2v7.31" />
//                   <path d="M14 9.3V1.99" />
//                   <path d="M8.5 2h7" />
//                   <path d="M14 9.3a6.5 6.5 0 1 1-4 0" />
//                   <line x1="5.52" y1="16" x2="18.48" y2="16" />
//                 </svg>
//               </div>
//               <p className="text-sm font-medium text-white text-center leading-tight">
//                 {t("hero.feature3_line1")}
//                 <br />
//                 {t("hero.feature3_line2")}
//               </p>
//             </motion.div>
//           </motion.div>
//         </motion.div>

//         {/* RIGHT IMAGE */}
//         <motion.div
//           initial={{ opacity: 0, x: 50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
//           className="relative flex justify-center items-center h-full"
//         >
//           {/* Intense Background Glow (mimicking the bright yellow spotlight in the image) */}
//           <motion.div
//             initial={{ scale: 0.5, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
//             className="absolute w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-[#ffaa00]/40 blur-[120px] rounded-full pointer-events-none z-0"
//           ></motion.div>

//           {/* IMAGE */}
//           {/* <motion.img
//             animate={{ y: [0, -15, 0] }}
//             transition={{
//               repeat: Infinity,
//               duration: 4,
//               ease: "easeInOut",
//             }}
//             src={juice[current].image}
//             alt="Ranosh Juice Bottle"
//             className="relative z-10 w-full max-w-md lg:max-w-[110%] object-contain drop-shadow-2xl transform hover:scale-110 transition duration-500 "
//           /> */}
//           <div
//             className="relative z-10 w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] flex items-center justify-center"
//             onMouseEnter={stopAutoSlide}
//             onMouseLeave={startAutoSlide}
//           >
//             <AnimatePresence mode="wait">
//               <motion.img
//                 key={current}
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 exit={{ opacity: 0, scale: 0.9 }}
//                 transition={{ duration: 0.5 }}
//                 src={juice[current].image}
//                 alt="Ranosh Juice"
//                 className="max-w-full max-h-full object-contain hover:scale-110 transition-transform duration-500"
//               />
//             </AnimatePresence>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

import React, { useEffect, useRef, useState } from "react";
import orange from "../assets/or.png";
import mango from "../assets/mango.png";
import strawberry from "../assets/strawberry.png";
import watermelon from "../assets/watermelon.png";
import pomo from "../assets/pomo.png";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const juice = [
  { image: orange },
  { image: mango },
  { image: strawberry },
  { image: watermelon },
  { image: pomo },
];

const Hero = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  const contentVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Time between each element appearing
        delayChildren: 0.1,
      },
    },
  };

  // The fade-and-slide-up effect for individual text/feature items
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const [current, setCurrent] = useState(0);
  const intervalRef = useRef(null);

  const startAutoSlide = () => {
    stopAutoSlide();
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % juice.length);
    }, 3000);
  };

  const stopAutoSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  });

  return (
    <section className="relative w-full bg-gradient-to-r from-[#0a0502] via-[#2a1104] to-[#e67300] flex items-center justify-center py-12 md:py-20 overflow-hidden">
      {/* Decorative Dots (Bottom Left) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 1.5, delay: 1 }}
        className="absolute bottom-10 left-10 grid grid-cols-4 gap-2 opacity-60 hidden lg:grid"
      >
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className={`w-1.5 h-1.5 rounded-full ${i % 4 === 0 ? "bg-[#ff5a1f]" : "bg-gray-600"}`}
          ></div>
        ))}
      </motion.div>

      <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 items-center gap-10 relative z-10">
        {/* LEFT CONTENT */}
        <motion.div
          variants={contentVariants}
          initial="hidden"
          animate="visible"
          className={`text-white text-center ${
            isRTL ? "lg:text-right" : "lg:text-left"
          }`}
        >
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-6xl lg:text-[72px] font-extrabold tracking-tight leading-[1.1]"
          >
            {t("hero.title1")}
            <br />
            {t("hero.title2")}
          </motion.h1>

          <motion.h2
            variants={itemVariants}
            className="text-[#ff5a1f] text-4xl sm:text-5xl lg:text-6xl mt-2 font-bold"
            style={{
              fontFamily: "'Brush Script MT', 'Dancing Script', cursive",
            }}
          >
            {t("hero.brand")}
          </motion.h2>

          {/* FEATURES */}
          <motion.div
            variants={contentVariants}
            className={`flex ${
              isRTL ? "lg:justify-start" : "lg:justify-start"
            } justify-center gap-8 mt-12 flex-wrap`}
          >
            {/* Feature 1: 100% Natural */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col items-center"
            >
              <div className="w-12 h-12 rounded-full border-2 border-[#ff5a1f] flex items-center justify-center text-[#ff5a1f] mb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
                  <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
                </svg>
              </div>
              <p className="text-sm font-medium text-white text-center leading-tight">
                {t("hero.feature1_line1")}
                <br />
                {t("hero.feature1_line2")}
              </p>
            </motion.div>

            {/* Feature 2: No Added Sugar */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col items-center"
            >
              <div className="w-12 h-12 rounded-full border-2 border-[#ff5a1f] flex items-center justify-center text-[#ff5a1f] mb-3 relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                  <polyline points="3.29 7 12 12 20.71 7" />
                  <line x1="12" y1="22" x2="12" y2="12" />
                  <line
                    x1="2"
                    y1="2"
                    x2="22"
                    y2="22"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <p className="text-sm font-medium text-white text-center leading-tight">
                {t("hero.feature2_line1")}
                <br />
                {t("hero.feature2_line2")}
              </p>
            </motion.div>

            {/* Feature 3: No Preservatives */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col items-center"
            >
              <div className="w-12 h-12 rounded-full border-2 border-[#ff5a1f] flex items-center justify-center text-[#ff5a1f] mb-3 relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M10 2v7.31" />
                  <path d="M14 9.3V1.99" />
                  <path d="M8.5 2h7" />
                  <path d="M14 9.3a6.5 6.5 0 1 1-4 0" />
                  <line x1="5.52" y1="16" x2="18.48" y2="16" />
                </svg>
              </div>
              <p className="text-sm font-medium text-white text-center leading-tight">
                {t("hero.feature3_line1")}
                <br />
                {t("hero.feature3_line2")}
              </p>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          className="relative flex justify-center items-center h-full"
        >
          {/* Intense Background Glow */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
            className="absolute w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-[#ffaa00]/40 blur-[120px] rounded-full pointer-events-none z-0"
          ></motion.div>

          {/* IMAGE CAROUSEL AREA */}
          <div
            className="relative z-10 w-[280px] h-[350px] sm:w-[400px] sm:h-[500px]  overflow-visible "
            onMouseEnter={stopAutoSlide}
            onMouseLeave={startAutoSlide}
          >
            <AnimatePresence>
              <motion.img
                key={current}
                initial={{ opacity: 0, y: 50 }} // Starts from the right
                animate={{ opacity: 1, x: 0 }} // Slides to center
                exit={{ opacity: 0, y: -50 }} // Slides out to the left
                transition={{ duration: 0.8, ease: "easeInOut" }} // Smooth timing
                src={juice[current].image}
                loading="lazy"
                alt="Ranosh Juice"
                // 'absolute' plus 'w-full h-full' enforces uniform sizing and handles overlapping animations
                className="absolute  object-cover hover:scale-110 transition-transform duration-500"
              />
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
