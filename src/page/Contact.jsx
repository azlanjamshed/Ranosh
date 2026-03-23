// import React from "react";
// import Map from "../components/Map";
// import ContactForm from "../components/ContactForm";
// import { NavLink } from "react-router-dom";

// const Contact = () => {
//   return (
//     <div className="relative w-full px-4 sm:px-6 lg:px-12 py-10 bg-[#272626]">
//       <NavLink
//         to={"/"}
//         className="fixed top-20 left-0 bg-amber-300 hover:bg-amber-400  text-sm md:text-base font-semibold text-black px-6 py-3 block z-10 shadow-lg rounded-tr-xl rounded-br-xl transition"
//       >
//         Home
//       </NavLink>

//       <div className="flex flex-col-reverse lg:flex-row gap-8 md:justify-around">
//         <Map />
//         <ContactForm />
//       </div>
//     </div>
//   );
// };

// export default Contact;
import React from "react";
import Map from "../components/Map";
import ContactForm from "../components/ContactForm";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  return (
    <section className="w-full py-16 bg-gradient-to-br from-orange-50 via-white to-yellow-50">
      
      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900">
          {t("contact") || "Contact Us"}
        </h1>
        <p className="text-gray-600 mt-3">
          {t("contact_desc") || "We would love to hear from you"}
        </p>
      </div>

      {/* Content */}
      <div
        className={`max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center ${
          isRTL ? "text-right" : ""
        }`}
      >
        <Map />
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;