import { branches } from "../data/branches";
import BranchCard from "../components/BranchCard";
import { useTranslation } from "react-i18next";
import BranchHighlight from "../components/BrandHighlight";

const Branch = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 via-white to-yellow-50 min-h-screen">
      <BranchHighlight />
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
        // className={`max-w-5xl mx-auto  px-6 flex flex-col gap-6 ${
        //   isRTL ? "text-right" : ""
        // }`}
        className={`max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3  gap-6 ${
          isRTL ? "text-right" : ""
        }`}
      >
        {branches.map((branch) => (
          <BranchCard key={branch.id} branch={branch} />
        ))}
      </div>
    </section>
  );
};

export default Branch;
