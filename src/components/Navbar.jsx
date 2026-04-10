import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { NavLink, useNavigate } from "react-router-dom";
import LanguageToggle from "./LanguageToggle";
import logo from "../assets/logo.png";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const isRTL = i18n.language === "ar";

  return (
    <nav className="w-full bg-white shadow-md sticky top-0 z-50">
      <div
        //  className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between"
        dir={isRTL ? "rtl" : "ltr"}
        className={`max-w-7xl mx-auto px-6 py-4 flex items-center justify-between ${
          isRTL ? "flex-row-reverse" : ""
        }`}
      >
        {/* Logo */}
        {/* <div
          onClick={() => navigate("/")}
          className="flex items-center gap-2 cursor-pointer"
        >
          <img src={logo} alt="logo" className="w-20 h-20 object-contain" />
        </div> */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          onClick={() => navigate("/")}
          className="flex items-center gap-2 cursor-pointer h-10 w-25 md:h-20 md:w-40"
        >
          <img src={logo} alt="logo" className=" object-contain" />
        </motion.div>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8 font-medium text-gray-700 ">
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-orange-500 font-semibold underline"
                  : "hover:text-orange-400 transition"
              }
              to="/"
              end
            >
              {t("home")}
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-orange-500 font-semibold underline"
                  : "hover:text-orange-400 transition"
              }
              to="/about"
            >
              {t("about")}
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-orange-500 font-semibold underline"
                  : "hover:text-orange-400 transition"
              }
              to="/products"
            >
              {t("product")}
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-orange-500 font-semibold underline"
                  : "hover:text-orange-400 transition"
              }
              to="/branch"
            >
              {t("branch")}
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-orange-500 font-semibold underline"
                  : "hover:text-orange-400 transition"
              }
              to="/partner"
            >
              {t("partner")}
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-orange-500 font-semibold underline"
                  : "hover:text-orange-400 transition"
              }
              to="/contact"
            >
              {t("contact")}
            </NavLink>
          </li>
        </ul>

        {/* Right Side */}
        {/* <div className="flex items-center gap-4"> */}
        <div
          className={`flex items-center gap-4 ${
            isRTL ? "flex-row-reverse" : ""
          }`}
        >
          {/* Language Toggle */}
          <LanguageToggle />
          <NavLink
            to="/contact"
            className="bg-orange-500 hover:bg-orange-600 text-white text-xs md:text-lg font-medium  px-4 py-2 rounded-full cursor-pointer"
          >
            {t("reach_us") || "Reach Us"}
          </NavLink>
          {/* Mobile Menu Button */}
          <button className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
            {open ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        // <div
        //   className={`md:hidden px-6 pb-4 flex flex-col gap-4 font-medium text-gray-700 ${
        //     isRTL ? "text-right" : "text-left"
        //   }`}
        // >
        <div
          dir={isRTL ? "rtl" : "ltr"}
          className={`md:hidden px-6 pb-4 flex flex-col gap-4 font-medium text-gray-700 ${
            isRTL ? "text-right items-end" : "text-left items-start"
          }`}
        >
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-orange-500 font-semibold underline"
                : "hover:text-orange-400 transition"
            }
            to="/"
            onClick={() => setOpen(false)}
          >
            {t("home")}
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-orange-500 font-semibold underline"
                : "hover:text-orange-400 transition"
            }
            to="/about"
            onClick={() => setOpen(false)}
          >
            {t("about")}
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-orange-500 font-semibold underline"
                : "hover:text-orange-400 transition"
            }
            to="/products"
            onClick={() => setOpen(false)}
          >
            {t("product")}
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-orange-500 font-semibold underline"
                : "hover:text-orange-400 transition"
            }
            to="/branch"
            onClick={() => setOpen(false)}
          >
            {t("branch")}
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-orange-500 font-semibold underline"
                : "hover:text-orange-400 transition"
            }
            to="/partner"
            onClick={() => setOpen(false)}
          >
            {t("partner")}
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-orange-500 font-semibold underline"
                : "hover:text-orange-400 transition"
            }
            to="/contact"
            onClick={() => setOpen(false)}
          >
            {t("contact")}
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
