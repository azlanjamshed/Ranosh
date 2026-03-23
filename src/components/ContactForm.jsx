// import React, { useState } from "react";
// // import emailjs from "@emailjs/browser";

// const ContactForm = () => {
//   const [status, setStatus] = useState("idle");

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone:"",
//     message: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setStatus("sending");

//     // emailjs
//     //   .send(
//     //     "service_ih15mke", // 👉 replace with your Service ID
//     //     "template_iyytq9e", // 👉 replace with your Template ID
//     //     {
//     //       from_name: formData.name,
//     //       from_email: formData.email,
//     //       message: formData.message,
//     //     },
//     //     "_exrgxfcfUueqB5SP" // 👉 replace with your Public Key
//     //   )
//     //   .then(() => {
//     //     setStatus("sent");
//     //     setFormData({ name: "", email: "", message: "" });

//     //     // Reset back to idle after 3s
//     //     setTimeout(() => setStatus("idle"), 3000);
//     //   })
//     //   .catch((err) => {
//     //     console.error("❌ Failed to send email:", err);
//     //     alert("Something went wrong. Try again later.");
//     //     setStatus("idle");
//     //   });
//   };

//   return (
//     <div className="md:w-1/2 flex flex-col lg:flex-row gap-8 items-stretch">
//       {/* Contact Form */}
//       <div className="flex-1 flex justify-center">
//         <form
//           onSubmit={handleSubmit}
//           className="w-full max-w-md sm:max-w-lg bg-[#1e1e1e] p-6 sm:p-8 rounded-2xl shadow-lg flex flex-col gap-4 hover:shadow-md hover:shadow-amber-300 transition-all duration-300"
//         >
//           <h2 className="text-2xl sm:text-3xl font-bold text-center text-amber-400 mb-4">
//             Contact Us
//           </h2>

//           <input
//             type="text"
//             name="name"
//             placeholder="Your Name"
//             value={formData.name}
//             onChange={handleChange}
//             className="border border-gray-600 bg-[#272626] text-white rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-amber-400 w-full text-sm sm:text-base placeholder-gray-400"
//             required
//           />

//           <input
//             type="email"
//             name="email"
//             placeholder="Your Email"
//             value={formData.email}
//             onChange={handleChange}
//             className="border border-gray-600 bg-[#272626] text-white rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-amber-400 w-full text-sm sm:text-base placeholder-gray-400"
//             required
//           />
//           <input
//             type="phone"
//             name="phone"
//             placeholder="Your Phone"
//             value={formData.phone}
//             onChange={handleChange}
//             className="border border-gray-600 bg-[#272626] text-white rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-amber-400 w-full text-sm sm:text-base placeholder-gray-400"
//             required
//           />

//           <textarea
//             name="message"
//             placeholder="Your Message"
//             value={formData.message}
//             onChange={handleChange}
//             rows="5"
//             className="border border-gray-600 bg-[#272626] text-white rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-amber-400 w-full text-sm sm:text-base resize-none placeholder-gray-400"
//             required
//           ></textarea>

//           <button
//             type="submit"
//             disabled={status === "sending"}
//             className={`${
//               status === "sent"
//                 ? "bg-green-500 text-white"
//                 : "bg-amber-300 text-black"
//             } hover:opacity-90 transition-all duration-300 font-semibold px-6 py-3 rounded-lg text-sm sm:text-base cursor-pointer`}
//           >
//             {status === "sending"
//               ? "Sending..."
//               : status === "sent"
//               ? "Mail Sent ✅"
//               : "Send Message"}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ContactForm;

import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const ContactForm = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  const [status, setStatus] = useState("idle");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    setTimeout(() => {
      setStatus("sent");
      setFormData({ name: "", email: "", phone: "", message: "" });
      setTimeout(() => setStatus("idle"), 3000);
    }, 1500);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`w-full bg-white p-8 rounded-2xl shadow-lg flex flex-col gap-4 ${
        isRTL ? "text-right" : ""
      }`}
    >
      <h2 className="text-2xl font-bold text-gray-800 text-center">
        {t("contact") || "Contact Us"}
      </h2>

      <input
        type="text"
        name="name"
        placeholder={t("name") || "Your Name"}
        value={formData.name}
        onChange={handleChange}
        className="border rounded-lg p-3 focus:ring-2 focus:ring-orange-400 outline-none"
        required
      />

      <input
        type="email"
        name="email"
        placeholder={t("email") || "Your Email"}
        value={formData.email}
        onChange={handleChange}
        className="border rounded-lg p-3 focus:ring-2 focus:ring-orange-400 outline-none"
        required
      />

      <input
        type="text"
        name="phone"
        placeholder={t("phone") || "Your Phone"}
        value={formData.phone}
        onChange={handleChange}
        className="border rounded-lg p-3 focus:ring-2 focus:ring-orange-400 outline-none"
        required
      />

      <textarea
        name="message"
        placeholder={t("message") || "Your Message"}
        value={formData.message}
        onChange={handleChange}
        rows="4"
        className="border rounded-lg p-3 focus:ring-2 focus:ring-orange-400 outline-none resize-none"
        required
      ></textarea>

      <button
        type="submit"
        disabled={status === "sending"}
        className={`${
          status === "sent"
            ? "bg-green-500 text-white"
            : "bg-orange-500 text-white"
        } py-3 rounded-lg font-semibold hover:opacity-90 transition`}
      >
        {status === "sending"
          ? "Sending..."
          : status === "sent"
          ? "Sent ✅"
          : t("send") || "Send Message"}
      </button>
    </form>
  );
};

export default ContactForm;