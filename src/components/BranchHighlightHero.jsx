import { useTranslation } from "react-i18next";
import bgImage from "../assets/hero.jpg"; // your image
import { useNavigate } from "react-router-dom";

const BranchHighlightHero = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";
  const navigate = useNavigate();

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img src={bgImage} alt="juice" className="w-full h-full object-cover" />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div
        className={`relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center ${
          isRTL ? "text-right" : "text-left"
        }`}
      >
        {/* LEFT */}
        <div>
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            <span className="text-orange-400">
              {t("best_juice") || "Best Juice in Riyadh"}
            </span>
          </h2>

          <p className="mt-4 text-gray-200 max-w-md">
            {t("brand_desc") ||
              "We grew up in a place where everyone deserved fresh, natural juice. Our mission is to bring that experience to you."}
          </p>

          <button
            className="mt-6 border border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition"
            onClick={() => navigate("/about")}
          >
            {t("read_more") || "Read More"}
          </button>
        </div>

        {/* RIGHT - Features */}
        <div className="space-y-4">
          {[
            {
              title: "Best Juice in Riyadh",
              desc: "Fresh, natural, and loved by everyone.",
            },
            {
              title: "Nice Atmosphere",
              desc: "Relaxing spaces with premium vibes.",
            },
            {
              title: "Natural Juice",
              desc: "100% fresh fruits, no compromise.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md border border-white/20 p-5 rounded-2xl text-white hover:bg-white/20 transition"
            >
              <h3 className="text-orange-400 font-semibold">{item.title}</h3>
              <p className="text-sm text-gray-200 mt-1">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BranchHighlightHero;
