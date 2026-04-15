import { useTranslation } from "react-i18next";

const BranchCard = ({ branch }) => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  return (
    <div
      className={`bg-white rounded-2xl overflow-hidden border border-orange-200 shadow-sm hover:shadow-md transition duration-300 group hover:scale-[1.02] ${
        isRTL ? "text-right" : "text-left"
      }`}
    >
      {/* Image */}
      <img
        src={branch.image}
        alt="branch"
        className="w-full h-36 object-contain    group-hover:scale-105 transition duration-500"
      />

      {/* Content */}
      <div className="p-4">
        {/* Title */}
        <h3 className="text-lg font-semibold text-gray-900">{branch.name}</h3>

        <p className="text-gray-500 text-sm mt-1 line-clamp-2">
          {branch.address}
        </p>

        {/* Divider */}
        <div className="border-t my-3"></div>

        {/* Info */}
        <div className="space-y-3 text-sm">
          {/* Hours */}
          <div
            className={`flex items-center gap-2 ${
              isRTL ? "flex-row-reverse" : ""
            }`}
          >
            <span className="bg-orange-100 text-orange-500 p-2 rounded-full text-xs">
              ⏰
            </span>

            <div className="flex-1">
              <p className="text-xs text-gray-400">{t("opening_hours")}</p>
              <p className="text-gray-700">
                {branch.hours || "07:30 AM - 09:00 PM"}
              </p>
            </div>
          </div>

          {/* Phone */}
          <div
            className={`flex items-center gap-2 ${
              isRTL ? "flex-row-reverse" : ""
            }`}
          >
            <span className="bg-orange-100 text-orange-500 p-2 rounded-full text-xs">
              📞
            </span>

            <div className="flex-1">
              <p className="text-xs text-gray-400">{t("contact")}</p>
              <p className="text-gray-700">{branch.phone}</p>
            </div>
          </div>
        </div>

        {/* Button */}
        <a
          href={branch.map}
          target="_blank"
          rel="noreferrer"
          className={`mt-4 w-full flex items-center justify-center gap-2 bg-orange-500 text-white py-2.5 rounded-xl text-sm font-medium hover:bg-orange-600 transition ${
            isRTL ? "flex-row-reverse" : ""
          }`}
        >
          <span>{t("get_directions")}</span>
          <span>{isRTL ? "←" : "→"}</span>
        </a>
      </div>
    </div>
  );
};

export default BranchCard;
