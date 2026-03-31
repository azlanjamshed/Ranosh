// const ContactInfoCard = ({ title, value, color }) => {
//   return (
//     <div className={`p-6 rounded-2xl text-black ${color}`}>
//       <p className="text-sm opacity-70">{title}</p>
//       <h3 className="text-lg font-semibold mt-1">{value}</h3>
//     </div>
//   );
// };

// export default ContactInfoCard;

import { useTranslation } from "react-i18next";

const ContactInfoCard = ({ title, value, color }) => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  return (
    <div
      className={`p-6 rounded-2xl text-black ${color} ${
        isRTL ? "text-right" : "text-left"
      }`}
    >
      {/* Title */}
      <p className="text-sm opacity-70">{t(title)}</p>

      {/* Value */}
      <h3 className="text-lg font-semibold mt-1">{value}</h3>
    </div>
  );
};

export default ContactInfoCard;
