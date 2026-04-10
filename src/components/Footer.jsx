import { useTranslation } from "react-i18next";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { FiGlobe } from "react-icons/fi";
import { Link } from "react-router-dom";

const Footer = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";
  const products = [
    "/products/Fakhfakhina.avif",
    "/products/Crepe_2.avif",
    "/products/Ice_Cream_Vanilla_Pomegranate.avif",
    "/products/Round_Box.avif",
    "/products/Farah_Dish_1.avif",
    "/products/Arabic_Shawarma_with_Fries.avif",
  ];
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
            <h2 className="text-white text-2xl md:text5xl font-semibold mb-4">
              {t("footer_about")}
            </h2>

            <p className="text-xs md:text-sm text-gray-400 leading-6">
              {t("footer_desc")}
            </p>
            <Link to="/about">
              <button className=" mt-5 px-3 md:px-6 py-1 md:py-2 border border-orange-500 text-orange-500 rounded-full hover:bg-orange-500 hover:text-white transition">
                {t("footer_story")}
              </button>
            </Link>
          </div>

          {/* Products */}
          <div>
            <h2 className="text-white text-2xl md:text5xl font-semibold mb-4">
              {t("footer_products")}
            </h2>

            <div className="grid grid-cols-3 gap-3">
              {/* {["🍊", "🥝", "🍓", "🍍", "🍉", "🥭"] */}
              {products.map((img, index) => (
                <div
                  key={index}
                  className=" backdrop-blur-md  rounded-xl flex items-center justify-center text-2xl hover:bg-orange-500/20 transition"
                >
                  <img
                    src={img}
                    alt={`product-${index}`}
                    className=" object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-white text-2xl md:text5xl font-semibold mb-4">
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
