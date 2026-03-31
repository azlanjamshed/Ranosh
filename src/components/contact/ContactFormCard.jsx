// import { useForm } from "react-hook-form";
// const ContactFormCard = () => {
//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors, isSubmitting },
//   } = useForm();

//   const onSubmit = (data) => {
//     console.log(data);

//     // simulate API
//     setTimeout(() => {
//       alert("Message sent ✅");
//       reset();
//     }, 1000);
//   };

//   return (
//     <form
//       onSubmit={handleSubmit(onSubmit)}
//       className="bg-white rounded-3xl p-8 shadow-md"
//     >
//       <h2 className="text-xl font-semibold mb-6">Send us a message</h2>

//       {/* Name + Email */}
//       <div className="grid md:grid-cols-2 gap-4">
//         <div>
//           <input
//             {...register("name", { required: "Name is required" })}
//             placeholder="Your name"
//             className="p-3 rounded-xl bg-gray-100 outline-none w-full"
//           />
//           {errors.name && (
//             <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
//           )}
//         </div>

//         <div>
//           <input
//             {...register("email", {
//               required: "Email is required",
//               pattern: {
//                 value: /^\S+@\S+$/i,
//                 message: "Invalid email",
//               },
//             })}
//             placeholder="hello@example.com"
//             className="p-3 rounded-xl bg-gray-100 outline-none w-full"
//           />
//           {errors.email && (
//             <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
//           )}
//         </div>
//       </div>

//       {/* Subject */}
//       <select
//         {...register("subject")}
//         className="mt-4 p-3 rounded-xl bg-gray-100 w-full outline-none"
//       >
//         <option value="feedback">Feedback</option>
//         <option value="support">Support</option>
//         <option value="business">Business</option>
//       </select>

//       {/* Message */}
//       <div>
//         <textarea
//           {...register("message", {
//             required: "Message is required",
//           })}
//           placeholder="Tell us what's on your mind..."
//           rows={4}
//           className="mt-4 p-3 rounded-xl bg-gray-100 w-full outline-none"
//         />
//         {errors.message && (
//           <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>
//         )}
//       </div>

//       {/* Button */}
//       <button
//         type="submit"
//         disabled={isSubmitting}
//         className="mt-6 bg-orange-500 text-white px-6 py-3 rounded-xl hover:bg-orange-600 transition w-full"
//       >
//         {isSubmitting ? "Sending..." : "Send Message"}
//       </button>
//     </form>
//   );
// };

// export default ContactFormCard;

import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

const ContactFormCard = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    setTimeout(() => {
      alert(t("message_sent"));
      reset();
    }, 1000);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`bg-white rounded-3xl p-8 shadow-md ${
        isRTL ? "text-right" : "text-left"
      }`}
    >
      {/* Title */}
      <h2 className="text-xl font-semibold mb-6">{t("contact_form_title")}</h2>

      {/* Name + Email */}
      <div className="grid md:grid-cols-2 gap-4">
        {/* Name */}
        <div>
          <input
            {...register("name", {
              required: t("name_required"),
            })}
            placeholder={t("name_placeholder")}
            className="p-3 rounded-xl bg-gray-100 outline-none w-full"
          />
          {errors.name && (
            <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <input
            {...register("email", {
              required: t("email_required"),
              pattern: {
                value: /^\S+@\S+$/i,
                message: t("invalid_email"),
              },
            })}
            placeholder={t("email_placeholder")}
            className="p-3 rounded-xl bg-gray-100 outline-none w-full"
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
          )}
        </div>
      </div>

      {/* Subject */}
      <select
        {...register("subject")}
        className="mt-4 p-3 rounded-xl bg-gray-100 w-full outline-none"
      >
        <option value="feedback">{t("subject_feedback")}</option>
        <option value="support">{t("subject_support")}</option>
        <option value="business">{t("subject_business")}</option>
      </select>

      {/* Message */}
      <div>
        <textarea
          {...register("message", {
            required: t("message_required"),
          })}
          placeholder={t("message_placeholder")}
          rows={4}
          className="mt-4 p-3 rounded-xl bg-gray-100 w-full outline-none"
        />
        {errors.message && (
          <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>
        )}
      </div>

      {/* Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-6 bg-orange-500 text-white px-6 py-3 rounded-xl hover:bg-orange-600 transition w-full"
      >
        {isSubmitting ? t("sending") : t("send_message")}
      </button>
    </form>
  );
};

export default ContactFormCard;
