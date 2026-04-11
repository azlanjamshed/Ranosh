import { branches } from "../data/branches";
import BranchCard from "../components/BranchCard";
import { useTranslation } from "react-i18next";
import BranchHighlight from "../components/BrandHighlight";

import branchImage from "../assets/hero.jpg"; // your image
import SplitHero from "../components/SplitHero";

const Branch = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  return (
    <>
      <section
        dir={isRTL ? "rtl" : "ltr"}
        className={`py-20 bg-gradient-to-br from-orange-50 via-white to-yellow-50 min-h-screen  ${
          isRTL ? "text-right" : "text-left"
        }`}
      >
        {/* <BranchHighlight /> */}

        <SplitHero
          tag={t("branch_tag")}
          title1={t("branch_title1")}
          title2={t("branch_title2")}
          desc={t("branch_desc")}
          image={branchImage}
          showBadge={true}
          badgeText="12+"
          badgeLabel={t("branch_badge")}
        />
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900">
            {t("branch") || "Our Branches"}
          </h1>
          <p className="text-gray-600 mt-3">
            {t("branch_desc") || "Find your nearest juice spot"}
          </p>
        </div>

        {/* Branch List */}
        <div
         
          className={`max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3  gap-6 ${
            isRTL ? "text-right" : ""
          }`}
        >
          {branches.map((branch) => (
            <BranchCard key={branch.id} branch={branch} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Branch;
