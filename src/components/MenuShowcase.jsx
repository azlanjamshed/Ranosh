import { useTranslation } from "react-i18next";

const MenuShowcase = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  const items = [
    {
      key: "citrus",
      image: "/menu/menu2.jpeg",
      //   className: "sm:col-span-2 aspect-[2/1]", // wide
    },
    {
      key: "energy",
      image: "/menu/menu1.jpeg",
      //   className: "aspect-[1/1]", // square
    },
    {
      key: "detox",
      image: "/menu/menu3.jpeg",
      //   className: "aspect-[1/1]", // square
    },
    {
      key: "tropical",
      image: "/menu/menu4.jpeg",
      //   className: "sm:col-span-2 aspect-[2/1]", // wide
    },
  ];

  return (
    <section className="py-20 w-full ">
      <div className="bg-gray-50 py-20  w-full rounded-3xl mb-12">
        {/* Heading */}
        <h2 className="text-4xl md:text-6xl font-bold leading-tight text-center text-gray-900">
          {t("our") || "Our"}{" "}
          <span className="text-orange-500">{t("menu") || "Menu"}</span>
        </h2>
        <p className="text-gray-600 text-lg text-center mt-4 ">
          {t("menu_desc")}
        </p>
      </div>
      <div
        className={`max-w-7xl mx-auto px-6 ${
          isRTL ? "text-right" : "text-left"
        }`}
      >
        {/* Responsive Grid */}
        <div className="grid grid-cols-1  md:grid-cols-2 gap-6">
          {items.map((item) => (
            <div
              key={item.key}
              className={`relative overflow-hidden rounded-3xl cursor-pointer group ${item.className}`}
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.key}
                className="w-full h-auto object-contain  transition duration-500 border border-orange-200 rounded-3xl"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuShowcase;
