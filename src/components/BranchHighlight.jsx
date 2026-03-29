import { useTranslation } from "react-i18next";
import branchImg from "../assets/hero.jpg"; // your image

const BranchHighlight = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div
          className={`bg-orange-50 rounded-[40px] p-8 md:p-12 grid md:grid-cols-2 gap-10 items-center ${
            isRTL ? "text-right" : "text-left"
          }`}
        >
          
          {/* LEFT CONTENT */}
          <div>
            {/* Tag */}
            <span className="inline-block bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-medium">
              {t("presence") || "Our Presence"}
            </span>

            {/* Heading */}
            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              {t("freshness") || "Freshness in"} <br />
              <span className="text-orange-500 italic">
                {t("every_corner") || "Every Corner"}
              </span>
            </h2>

            {/* Description */}
            <p className="mt-4 text-gray-600 max-w-md">
              {t("branch_text") ||
                "Find your nearest juice spot. From busy streets to calm neighborhoods, we bring freshness closer to you."}
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative flex justify-center">
            <img
              src={branchImg}
              alt="branch"
              className="rounded-3xl w-full max-w-[500px] shadow-lg"
            />

            {/* Floating Badge */}
            <div className="absolute bottom-[-20px] right-[-20px] bg-orange-500 text-white px-6 py-4 rounded-2xl shadow-lg text-center">
              <h3 className="text-2xl font-bold">12+</h3>
              <p className="text-sm">Active Branches</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BranchHighlight;