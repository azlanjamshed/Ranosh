import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

const B2BForm = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = (data) => {
    const subject = encodeURIComponent(`B2B Inquiry - ${data.fullName}`);

    const body = encodeURIComponent(`
🔔 NEW B2B INQUIRY

━━━━━━━━━━━━━━━━━━

👤 ${t("full_name")}: ${data.fullName}
🏢 ${t("company_name")}: ${data.company}
📧 ${t("email")}: ${data.email}
📞 ${t("phone")}: ${data.phone}
📦 ${t("requirement")}: ${data.requirement}

━━━━━━━━━━━━━━━━━━

💬 ${t("message")}:
${data.message}

━━━━━━━━━━━━━━━━━━
`);

    const email = "azlanjamshed1234@gmail.com"; // 🔥 change if needed

    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`,
      "_blank",
    );
    reset();
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-6">
        <div
          className={`bg-white p-8 md:p-10 rounded-3xl shadow-md ${
            isRTL ? "text-right" : "text-left"
          }`}
        >
          {/* Title */}
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            {t("start_journey")}
          </h2>

          <p className="text-gray-500 mt-2 mb-6">{t("form_desc")}</p>

          {/* FORM */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Name + Company */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <input
                  {...register("fullName", { required: t("required_field") })}
                  placeholder={t("full_name")}
                  className={`w-full p-3 rounded-xl bg-gray-100 outline-none ${
                    isRTL ? "text-right" : ""
                  }`}
                />
                {errors.fullName && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.fullName.message}
                  </p>
                )}
              </div>

              <div>
                <input
                  {...register("company", { required: t("required_field") })}
                  placeholder={t("company_name")}
                  className={`w-full p-3 rounded-xl bg-gray-100 outline-none ${
                    isRTL ? "text-right" : ""
                  }`}
                />
                {errors.company && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.company.message}
                  </p>
                )}
              </div>
            </div>

            {/* Email + Phone */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <input
                  {...register("email", {
                    required: t("required_field"),
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: t("invalid_email"),
                    },
                  })}
                  placeholder={t("email")}
                  className={`w-full p-3 rounded-xl bg-gray-100 outline-none ${
                    isRTL ? "text-right" : ""
                  }`}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <input
                  {...register("phone", { required: t("required_field") })}
                  placeholder={t("phone")}
                  className={`w-full p-3 rounded-xl bg-gray-100 outline-none ${
                    isRTL ? "text-right" : ""
                  }`}
                />
                {errors.phone && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.phone.message}
                  </p>
                )}
              </div>
            </div>

            {/* Requirement */}
            <div>
              <input
                {...register("requirement", {
                  required: t("required_field"),
                })}
                placeholder={t("requirement")}
                className={`w-full p-3 rounded-xl bg-gray-100 outline-none ${
                  isRTL ? "text-right" : ""
                }`}
              />
              {errors.requirement && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.requirement.message}
                </p>
              )}
            </div>

            {/* Message */}
            <div>
              <textarea
                {...register("message", {
                  required: t("required_field"),
                })}
                placeholder={t("message")}
                rows={4}
                className={`w-full p-3 rounded-xl bg-gray-100 outline-none ${
                  isRTL ? "text-right" : ""
                }`}
              />
              {errors.message && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.message.message}
                </p>
              )}
            </div>

            {/* Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-orange-600 text-white py-3 rounded-xl font-semibold hover:bg-orange-700 transition"
            >
              {isSubmitting ? t("sending") : t("submit")}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default B2BForm;
