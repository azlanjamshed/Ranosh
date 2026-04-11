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
