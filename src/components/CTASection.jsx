import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import bgImg from "../assets/hero.jpg";

const CTASection = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  return (
    <section className="py-15 bg-orange-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative rounded-[40px] overflow-hidden">
          {/* Background */}
          <img
            src={bgImg}
            alt="background"
            // className="absolute inset-0 w-full h-full object-cover opacity-80"
            className={`absolute inset-0 w-full h-full object-cover opacity-80 ${
              isRTL ? "scale-x-[-1]" : ""
            }`}
          />

          {/* 🔥 RTL-aware overlay */}
          <div
            className={`absolute inset-0 ${
              isRTL
                ? "bg-gradient-to-l from-black/80 via-black/60 to-transparent"
                : "bg-gradient-to-r from-black/80 via-black/60 to-transparent"
            }`}
          ></div>

          {/* Content */}
          <div
            dir={isRTL ? "rtl" : "ltr"}
            className={`relative z-10 flex flex-col md:flex-row items-center p-10 md:p-16 gap-10 ${
              isRTL ? "md:flex-row-reverse text-right" : "text-left"
            }`}
          >
            {/* TEXT */}
            <div className="text-white max-w-xl">
              <div className="mb-20">
                <h2 className="text-2xl md:text-5xl font-bold leading-tight">
                  {t("cta_title")}
                </h2>

                <p className="mt-4 text-gray-300 text-xs md:text-base">
                  {t("cta_desc")}
                </p>
              </div>
              {/* Buttons */}
              <div
                className={`mt-8 flex flex-wrap gap-4 ${
                  isRTL ? "justify-end" : "justify-start"
                }`}
              >
                <Link
                  to="/products"
                  className="text-xs md:text-sm bg-orange-500 hover:bg-orange-600 text-white px-3 md:px-6 py-3 rounded-full font-semibold transition"
                >
                  {t("cta_btn1")}
                </Link>

                <Link
                  to="/branch"
                  className="text-xs md:text-sm border border-white text-white px-3 md:px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition"
                >
                  {t("cta_btn2")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
