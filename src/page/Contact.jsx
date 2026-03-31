// import React from "react";
// import Map from "../components/Map";
// import ContactForm from "../components/ContactForm";
// import { useTranslation } from "react-i18next";

// const Contact = () => {
//   const { t, i18n } = useTranslation();
//   const isRTL = i18n.language === "ar";

//   return (
//     <section className="w-full py-16 bg-gradient-to-br from-orange-50 via-white to-yellow-50">

//       {/* Heading */}
//       <div className="text-center mb-12">
//         <h1 className="text-3xl md:text-5xl font-bold text-gray-900">
//           {t("contact") || "Contact Us"}
//         </h1>
//         <p className="text-gray-600 mt-3">
//           {t("contact_desc") || "We would love to hear from you"}
//         </p>
//       </div>

//       {/* Content */}
//       <div
//         className={`max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center ${
//           isRTL ? "text-right" : ""
//         }`}
//       >
//         <Map />
//         <ContactForm />
//       </div>
//     </section>
//   );
// };

// export default Contact;

import ContactHero from "../components/contact/ContactHero";
import ContactFormCard from "../components/contact/ContactFormCard";
import ContactMapCard from "../components/contact/ContactMapCard";
import ContactInfoCard from "../components/contact/ContactInfoCard";
import ContactExtras from "../components/contact/ContactExtras";

const Contact = () => {
  return (
    <section className="py-20 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <ContactHero />

        <div className="grid lg:grid-cols-2 gap-10">
          {/* LEFT */}
          <ContactFormCard />

          {/* RIGHT */}
          <div className="flex flex-col gap-6">
            <ContactMapCard />

            <div className="grid grid-cols-2 gap-4">
              <ContactInfoCard
                title="call_us"
                value="+966 6 555 0123"
                color="bg-yellow-300"
              />

              <ContactInfoCard
                title="open_daily"
                value="8 AM - 12 AM"
                color="bg-green-300"
              />
            </div>

            {/* <ContactExtras /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
