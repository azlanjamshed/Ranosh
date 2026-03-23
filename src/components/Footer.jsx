import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  return (
    <footer className="bg-[#0f172a] text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">

        {/* Top Section */}
        <div
          className={`grid md:grid-cols-3 gap-10 ${
            isRTL ? "text-right" : "text-left"
          }`}
        >

          {/* About */}
          <div>
            <h2 className="text-white text-xl font-semibold mb-4">
              {t("about") || "About Us"}
            </h2>
            <p className="text-sm leading-6 text-gray-400">
              The company Ranosh Ltd. one of the leading specialized companies to provide hot and cold beverages through customer service, which marked the optimum deal with customers through quality and performance.
            </p>

            <button className="mt-5 px-5 py-2 border border-orange-500 text-orange-500 rounded hover:bg-orange-500 hover:text-white transition">
              {t("our_story") || "Our Story"}
            </button>
          </div>

          {/* Products */}
          <div>
            <h2 className="text-white text-xl font-semibold mb-4">
              {t("products") || "Our Products"}
            </h2>

            <div className="grid grid-cols-3 gap-3">
              {["🍊", "🥝", "🍓", "🍍", "🍉", "🥭"].map((item, index) => (
                <div
                  key={index}
                  className="bg-white/5 p-4 rounded-lg flex items-center justify-center text-2xl hover:bg-orange-500/20 transition"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-white text-xl font-semibold mb-4">
              {t("contact") || "Contact"}
            </h2>

            <ul className="space-y-3 text-sm text-gray-400">
              <li>📍  Main Office: P.O. Box 89513 Riyadh 11692, K.S.A.</li>
              <li>📞  Tel. +966-11-2031111 Ext. 221,223</li>
              <li>✉️  info@ranosh.com</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">

          <p>© 2026 JuiceBrand. All rights reserved.</p>

          {/* Socials */}
          <div className="flex gap-4 text-lg">
            <span className="hover:text-orange-400 cursor-pointer">🌐</span>
            <span className="hover:text-orange-400 cursor-pointer">📘</span>
            <span className="hover:text-orange-400 cursor-pointer">📸</span>
            <span className="hover:text-orange-400 cursor-pointer">▶️</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;