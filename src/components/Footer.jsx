// import { useTranslation } from "react-i18next";

// const Footer = () => {
//   const { t, i18n } = useTranslation();
//   const isRTL = i18n.language === "ar";

//   return (
//     <footer className="bg-[#0f172a] text-gray-300 pt-16 pb-8">
//       <div className="max-w-7xl mx-auto px-6">
//         {/* Top Section */}
//         <div
//           dir={isRTL ? "rtl" : "ltr"}
//           className={`grid md:grid-cols-3 gap-10 ${
//             isRTL ? "text-right" : "text-left"
//           }`}
//         >
//           {/* About */}
//           <div>
//             <h2 className="text-white text-xl font-semibold mb-4">
//               {t("footer_about")}
//             </h2>

//             <p className="text-sm leading-6 text-gray-400">
//               {t("footer_desc")}
//             </p>

//             <button className="mt-5 px-5 py-2 border border-orange-500 text-orange-500 rounded hover:bg-orange-500 hover:text-white transition">
//               {t("footer_story")}
//             </button>
//           </div>

//           {/* Products */}
//           <div>
//             <h2 className="text-white text-xl font-semibold mb-4">
//               {t("footer_products")}
//             </h2>

//             <div className="grid grid-cols-3 gap-3">
//               {["🍊", "🥝", "🍓", "🍍", "🍉", "🥭"].map((item, index) => (
//                 <div
//                   key={index}
//                   className="bg-white/5 p-4 rounded-lg flex items-center justify-center text-2xl hover:bg-orange-500/20 transition"
//                 >
//                   {item}
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Contact */}
//           <div>
//             <h2 className="text-white text-xl font-semibold mb-4">
//               {t("footer_contact")}
//             </h2>

//             <ul className="space-y-3 text-sm text-gray-400">
//               <li>{t("footer_address")}</li>
//               <li>{t("footer_phone")}</li>
//               <li>{t("footer_email")}</li>
//             </ul>
//           </div>
//         </div>

//         {/* Divider */}
//         <div className="border-t border-gray-700 my-8"></div>

//         {/* Bottom Section */}
//         <div
//           className={`flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400 ${
//             isRTL ? "md:flex-row-reverse text-right" : ""
//           }`}
//         >
//           <p>{t("footer_copy")}</p>

//           {/* Socials */}
//           <div
//             className={`flex gap-4 text-lg ${isRTL ? "flex-row-reverse" : ""}`}
//           >
//             <span className="hover:text-orange-400 cursor-pointer">🌐</span>
//             <span className="hover:text-orange-400 cursor-pointer">📘</span>
//             <span className="hover:text-orange-400 cursor-pointer">📸</span>
//             <span className="hover:text-orange-400 cursor-pointer">▶️</span>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import { useTranslation } from "react-i18next";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { FiGlobe } from "react-icons/fi";
import { Link } from "react-router-dom";

const Footer = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  return (
    <footer className="bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-gray-300 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* TOP */}
        <div
          dir={isRTL ? "rtl" : "ltr"}
          className={`grid md:grid-cols-3 gap-10 ${
            isRTL ? "text-right" : "text-left"
          }`}
        >
          {/* About */}
          <div>
            <h2 className="text-white text-xl font-semibold mb-4">
              {t("footer_about")}
            </h2>

            <p className="text-sm text-gray-400 leading-6">
              {t("footer_desc")}
            </p>
            <Link to="/about">
              <button className="mt-5 px-5 py-2 border border-orange-500 text-orange-500 rounded-full hover:bg-orange-500 hover:text-white transition">
                {t("footer_story")}
              </button>
            </Link>
          </div>

          {/* Products */}
          <div>
            <h2 className="text-white text-xl font-semibold mb-4">
              {t("footer_products")}
            </h2>

            <div className="grid grid-cols-3 gap-3">
              {["🍊", "🥝", "🍓", "🍍", "🍉", "🥭"].map((item, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-md p-4 rounded-xl flex items-center justify-center text-2xl hover:bg-orange-500/20 transition"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-white text-xl font-semibold mb-4">
              {t("footer_contact")}
            </h2>

            <ul className="space-y-3 text-sm text-gray-400">
              <li>{t("footer_address")}</li>
              <li>{t("footer_phone")}</li>
              <li>{t("footer_email")}</li>
            </ul>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="border-t border-gray-700 my-10"></div>

        {/* BOTTOM */}
        <div
          className={`flex flex-col md:flex-row items-center justify-between gap-4 ${
            isRTL ? "md:flex-row-reverse text-right" : ""
          }`}
        >
          <p className="text-sm text-gray-400">{t("footer_copy")}</p>

          {/* Socials */}
          <div
            className={`flex gap-4 text-lg ${isRTL ? "flex-row-reverse" : ""}`}
          >
            {[FiGlobe, FaFacebookF, FaInstagram, FaYoutube].map((Icon, i) => (
              <div
                key={i}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-orange-500 transition cursor-pointer hover:-translate-y-1 transition-all duration-300"
              >
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <Icon />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
