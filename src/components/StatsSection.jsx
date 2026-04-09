import { useTranslation } from "react-i18next";

const StatsSection = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  const stats = [
    { value: "50+", label: t("branches") },
    { value: "1000+", label: t("dailyOrders") },
    { value: "10+", label: t("yearsExperience") },
    { value: "100%", label: t("freshQuality") },
  ];

  return (
    <section className="py-16 bg-orange-50  ">
      <div
        className={`max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 ${
          isRTL ? "text-right" : "text-left"
        }`}
      >
        {stats.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl p-8 text-center shadow-md hover:shadow-xl hover:scale-105 transition"
          >
            <h2 className="text-3xl font-bold text-orange-600">{item.value}</h2>

            <p className="text-gray-500 mt-2 uppercase text-sm tracking-wide">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
