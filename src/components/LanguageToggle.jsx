// import { useTranslation } from "react-i18next";

// const LanguageToggle = () => {
//   const { i18n } = useTranslation();

//   const changeLang = (lang) => {
//     i18n.changeLanguage(lang);
//     localStorage.setItem("lang", lang);

//     // RTL handling
//     document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
//   };

//   return (
//     <div className="flex items-center gap-2">
//       <button
//         onClick={() => changeLang("en")}
//         className="px-3 py-1 rounded bg-gray-200 hover:bg-orange-400 hover:text-white transition"
//       >
//         EN
//       </button>
//       <button
//         onClick={() => changeLang("ar")}
//         className="px-3 py-1 rounded bg-gray-200 hover:bg-orange-400 hover:text-white transition"
//       >
//         AR
//       </button>
//     </div>
//   );
// };

// export default LanguageToggle;
import { useTranslation } from "react-i18next";

const LanguageToggle = () => {
  const { i18n } = useTranslation();

  const currentLang = i18n.language;

  const changeLang = () => {
    const newLang = currentLang === "en" ? "ar" : "en";

    i18n.changeLanguage(newLang);
    localStorage.setItem("lang", newLang);

    document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";
  };

  return (
    <button
      onClick={changeLang}
      className="px-3 py-1 rounded bg-gray-200 hover:bg-orange-400 hover:text-white transition font-medium"
    >
      {currentLang === "en" ? "AR" : "EN"}
    </button>
  );
};

export default LanguageToggle;