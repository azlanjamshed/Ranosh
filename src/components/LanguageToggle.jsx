

import { useTranslation } from "react-i18next";

const LanguageToggle = () => {
  const { i18n } = useTranslation();

  const changeLanguage = () => {
    const newLang = i18n.language === "en" ? "ar" : "en";

    i18n.changeLanguage(newLang);
    localStorage.setItem("lang", newLang); // ✅ save language
  };

  return (
    <button
      onClick={changeLanguage}
      className="px-2 py-1 bg-white text-orange-600 border hover:text-white hover:bg-orange-600 rounded-lg transition"
    >
      {i18n.language === "en" ? "العربية" : "English"}
    </button>
  );
};

export default LanguageToggle;
