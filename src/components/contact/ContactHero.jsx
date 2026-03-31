// const ContactHero = () => {
//   return (
//     <div className="mb-12">
//       <p className="text-sm text-orange-500 font-semibold uppercase">
//         Get in Touch
//       </p>

//       <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mt-2">
//         Freshly Squeezed <br />
//         <span className="text-orange-500">Conversations.</span>
//       </h1>

//       <p className="text-gray-600 mt-4 max-w-lg">
//         Whether you have a question, want to partner with us, or just share your
//         experience — we’re all ears.
//       </p>
//     </div>
//   );
// };

// export default ContactHero;

import { useTranslation } from "react-i18next";

const ContactHero = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  return (
    <div className={`mb-12 ${isRTL ? "text-right" : "text-left"}`}>
      {/* Tag */}
      <p className="text-sm text-orange-500 font-semibold uppercase">
        {t("contact_tag")}
      </p>

      {/* Heading */}
      <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mt-2">
        {t("contact_title1")} <br />
        <span className="text-orange-500">{t("contact_title2")}</span>
      </h1>

      {/* Description */}
      <p className="text-gray-600 mt-4 max-w-lg">{t("contact_desc")}</p>
    </div>
  );
};

export default ContactHero;
