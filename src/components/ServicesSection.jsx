import { useTranslation } from "react-i18next";
import { FaBox, FaBuilding, FaStore, FaTag } from "react-icons/fa";

const ServicesSection = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  const services = [
    {
      icon: <FaBox />,
      title: t("bulk_orders"),
      desc: t("bulk_orders_desc"),
      color: "text-orange-500",
    },
    {
      icon: <FaBuilding />,
      title: t("corporate_supply"),
      desc: t("corporate_supply_desc"),
      color: "text-green-500",
    },
    {
      icon: <FaStore />,
      title: t("franchise"),
      desc: t("franchise_desc"),
      color: "text-yellow-600",
    },
    {
      icon: <FaTag />,
      title: t("custom_branding"),
      desc: t("custom_branding_desc"),
      color: "text-red-500",
    },
  ];

  return (
    <section className="py-20 bg-orange-50  mt-5">
      <div
        className={`max-w-7xl mx-auto px-6 ${
          isRTL ? "text-right" : "text-left"
        }`}
      >
        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
          {t("our_services")}
        </h2>

        <p className="text-gray-600 mt-4 max-w-xl">{t("services_desc")}</p>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-6 shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300"
            >
              {/* Icon */}
              <div
                className={`w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 text-xl ${service.color}`}
              >
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="mt-5 text-lg font-semibold text-gray-900">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 text-sm mt-2">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
