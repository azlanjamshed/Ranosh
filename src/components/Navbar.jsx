// import { useTranslation } from "react-i18next";
// import { Link } from "react-router-dom";
// import LanguageToggle from "./LanguageToggle";
// import logo from "../assets/logo.jpg";

// const Navbar = () => {
//   const { t } = useTranslation();

//   return (
//     <nav className="w-full bg-white shadow-md sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

//         {/* Logo */}
//         <div className="flex items-center gap-2">
//           <img
//             src={logo}
//             alt="logo"
//             className="w-15 h-15 object-contain"
//           />
          
//         </div>

//         {/* Links */}
//         <ul className="hidden md:flex gap-8 font-medium text-gray-700">
//           <li><Link to="/">{t("home")}</Link></li>
//           <li><Link to="/about">{t("about")}</Link></li>
//           <li><Link to="/products">{t("products")}</Link></li>
//           <li><Link to="/branch">{t("branch")}</Link></li>
//           <li><Link to="/partner">{t("partner")}</Link></li>
//           <li><Link to="/contact">{t("contact")}</Link></li>
//         </ul>

//         {/* Right Side */}
//         <div className="flex items-center gap-4">
//           <LanguageToggle />
//         </div>

//       </div>
//     </nav>
//   );
// };

// export default Navbar;
import { useState } from "react";
import { useTranslation } from "react-i18next";
import {   NavLink, useNavigate } from "react-router-dom";
import LanguageToggle from "./LanguageToggle";
import logo from "../assets/logo.jpg";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);
const navigate=useNavigate()
  const isRTL = i18n.language === "ar";

  return (
    <nav className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <div onClick={() => navigate("/")} className="flex items-center gap-2">
          <img  src={logo} alt="logo" className="w-20 h-20 object-contain" />
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8 font-medium text-gray-700">
          <li><NavLink className={({ isActive }) =>
      isActive
        ? "text-orange-500 font-semibold"
        : "hover:text-orange-400 transition"
    }  to="/">{t("home")}</ NavLink></li>
          <li><NavLink className={({ isActive }) =>
      isActive
        ? "text-orange-500 font-semibold"
        : "hover:text-orange-400 transition"
    } to="/about">{t("about")}</NavLink></li>
          <li><NavLink className={({ isActive }) =>
      isActive
        ? "text-orange-500 font-semibold"
        : "hover:text-orange-400 transition"
    } to="/products">{t("products")}</NavLink></li>
          <li><NavLink className={({ isActive }) =>
      isActive
        ? "text-orange-500 font-semibold"
        : "hover:text-orange-400 transition"
    } to="/branch">{t("branch")}</NavLink></li>
          <li><NavLink className={({ isActive }) =>
      isActive
        ? "text-orange-500 font-semibold"
        : "hover:text-orange-400 transition"
    } to="/partner">{t("partner")}</NavLink></li>
          <li><NavLink className={({ isActive }) =>
      isActive
        ? "text-orange-500 font-semibold"
        : "hover:text-orange-400 transition"
    } to="/contact">{t("contact")}</NavLink></li>
        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-4">

          {/* Language Toggle */}
          <LanguageToggle />

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setOpen(!open)}
          >
            {open ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div
          className={`md:hidden px-6 pb-4 flex flex-col gap-4 font-medium text-gray-700 ${
            isRTL ? "text-right" : "text-left"
          }`}
        >
          <NavLink className={({ isActive }) =>
      isActive
        ? "text-orange-500 font-semibold"
        : "hover:text-orange-400 transition"
    }  to="/" onClick={() => setOpen(false)}>{t("home")}</ NavLink>
          <NavLink className={({ isActive }) =>
      isActive
        ? "text-orange-500 font-semibold"
        : "hover:text-orange-400 transition"
    } to="/about" onClick={() => setOpen(false)}>{t("about")}</NavLink>
          <NavLink className={({ isActive }) =>
      isActive
        ? "text-orange-500 font-semibold"
        : "hover:text-orange-400 transition"
    } to="/products" onClick={() => setOpen(false)}>{t("products")}</NavLink>
          <NavLink className={({ isActive }) =>
      isActive
        ? "text-orange-500 font-semibold"
        : "hover:text-orange-400 transition"
    } to="/branch" onClick={() => setOpen(false)}>{t("branch")}</NavLink>
          <NavLink className={({ isActive }) =>
      isActive
        ? "text-orange-500 font-semibold"
        : "hover:text-orange-400 transition"
    } to="/partner" onClick={() => setOpen(false)}>{t("partner")}</NavLink>
          <NavLink className={({ isActive }) =>
      isActive
        ? "text-orange-500 font-semibold"
        : "hover:text-orange-400 transition"
    } to="/contact" onClick={() => setOpen(false)}>{t("contact")}</NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;