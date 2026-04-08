// import { useTranslation } from "react-i18next";

// const SplitHero = ({
//   tag,
//   title1,
//   title2,
//   desc,
//   image,
//   showBadge = false,
//   badgeText = "12+",
//   badgeLabel = "Active Branches",
//   reverse = false,
// }) => {
//   const { i18n } = useTranslation();
//   const isRTL = i18n.language === "ar";

//   return (
//     <section className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-6">
//         <div
//           className={`bg-orange-50 rounded-[40px] p-8 md:p-12 grid md:grid-cols-2 gap-10 items-center ${
//             reverse ? "md:flex-row-reverse" : ""
//           } ${isRTL ? "text-right" : "text-left"}`}
//         >
//           {/* LEFT CONTENT */}
//           <div>
//             {/* Tag */}
//             {tag && (
//               <span className="inline-block bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-medium">
//                 {tag}
//               </span>
//             )}

//             {/* Heading */}
//             <h2 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
//               {title1} <br />
//               <span className="text-orange-500 italic">{title2}</span>
//             </h2>

//             {/* Description */}
//             <p className="mt-4 text-gray-600 max-w-md">{desc}</p>
//           </div>

//           {/* RIGHT IMAGE */}
//           <div className="relative flex justify-center">
//             <img
//               src={image}
//               alt="section"
//               className="rounded-3xl w-full max-w-[500px] shadow-lg hover:scale-105 transition-transform duration-300"
//             />

//             {/* Optional Badge */}
//             {showBadge && (
//               <div className="absolute bottom-[-20px] right-[-20px] bg-orange-500 text-white px-6 py-4 rounded-2xl shadow-lg text-center">
//                 <h3 className="text-2xl font-bold">{badgeText}</h3>
//                 <p className="text-sm">{badgeLabel}</p>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SplitHero;

import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const SplitHero = ({
  tag,
  title1,
  title2,
  desc,
  image,
  showBadge = false,
  badgeText = "12+",
  badgeLabel = "Active Branches",
  reverse = false,
}) => {
  const { i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div
          dir={isRTL ? "rtl" : "ltr"}
          className={`bg-orange-50 rounded-[40px] p-8 md:p-12 grid md:grid-cols-2 gap-10 items-center ${
            isRTL ? "text-right" : "text-left"
          }`}
        >
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 80 : -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* Tag */}
            {tag && (
              <motion.span
                className="inline-block bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-medium"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                {tag}
              </motion.span>
            )}

            {/* Heading */}
            <motion.h2
              className="mt-4 text-4xl md:text-5xl font-bold text-gray-900 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {title1} <br />
              <span className="text-orange-500 italic">{title2}</span>
            </motion.h2>

            {/* Description */}
            <motion.p
              className="mt-4 text-gray-600 max-w-md"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              {desc}
            </motion.p>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            className="relative flex justify-center"
            initial={{ opacity: 0, x: isRTL ? -80 : 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            <motion.img
              src={image}
              alt="section"
              className="rounded-3xl w-full max-w-[500px] shadow-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            />

            {/* Badge */}
            {showBadge && (
              <motion.div
                className="absolute bottom-[-20px] right-[-20px] bg-orange-500 text-white px-6 py-4 rounded-2xl shadow-lg text-center"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: 0.6,
                  type: "spring",
                  stiffness: 120,
                }}
              >
                <h3 className="text-2xl font-bold">{badgeText}</h3>
                <p className="text-sm">{badgeLabel}</p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SplitHero;
