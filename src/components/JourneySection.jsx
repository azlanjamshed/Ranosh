import { useTranslation } from "react-i18next";
import { FaRegPaperPlane, FaFileInvoiceDollar, FaTruck } from "react-icons/fa";

const JourneySection = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  const steps = [
    {
      icon: <FaRegPaperPlane />,
      title: t("step1_title"),
      desc: t("step1_desc"),
    },
    {
      icon: <FaFileInvoiceDollar />,
      title: t("step2_title"),
      desc: t("step2_desc"),
    },
    {
      icon: <FaTruck />,
      title: t("step3_title"),
      desc: t("step3_desc"),
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div
        className={`max-w-7xl mx-auto px-6 ${
          isRTL ? "text-right" : "text-center"
        }`}
      >
        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
          {t("journey_title")}
        </h2>

        <p className="text-gray-500 mt-4">{t("journey_desc")}</p>

        {/* Steps */}
        <div className="mt-16 relative">
          {/* Line */}
          <div className="hidden md:block absolute top-10 left-0 right-0 h-[2px] bg-gray-200"></div>

          <div className="grid md:grid-cols-3 gap-12 relative">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center">
                {/* Circle */}
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-orange-600 text-white text-xl shadow-lg hover:scale-110 transition">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className="text-2xl text-orange-500 mt-4">{step.icon}</div>

                {/* Title */}
                <h3 className="mt-4 text-lg font-semibold text-gray-900">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-gray-500 text-sm mt-2 max-w-xs">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
