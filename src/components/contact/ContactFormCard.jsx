// import { useState } from "react";

// const ContactFormCard = () => {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//   });

//   return (
//     <div className="bg-white rounded-3xl p-8 shadow-md">

//       <h2 className="text-xl font-semibold mb-6">Send us a message</h2>

//       <div className="grid md:grid-cols-2 gap-4">
//         <input
//           placeholder="Your name"
//           className="p-3 rounded-xl bg-gray-100 outline-none"
//         />
//         <input
//           placeholder="hello@example.com"
//           className="p-3 rounded-xl bg-gray-100 outline-none"
//         />
//       </div>

//       <select className="mt-4 p-3 rounded-xl bg-gray-100 w-full outline-none">
//         <option>Feedback</option>
//         <option>Support</option>
//       </select>

//       <textarea
//         placeholder="Tell us what's on your mind..."
//         rows={4}
//         className="mt-4 p-3 rounded-xl bg-gray-100 w-full outline-none"
//       />

//       <button className="mt-6 bg-orange-500 text-white px-6 py-3 rounded-xl hover:bg-orange-600 transition">
//         Send Message
//       </button>
//     </div>
//   );
// };

// export default ContactFormCard;
import { useForm } from "react-hook-form";
const ContactFormCard = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    // simulate API
    setTimeout(() => {
      alert("Message sent ✅");
      reset();
    }, 1000);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white rounded-3xl p-8 shadow-md"
    >
      <h2 className="text-xl font-semibold mb-6">Send us a message</h2>

      {/* Name + Email */}
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <input
            {...register("name", { required: "Name is required" })}
            placeholder="Your name"
            className="p-3 rounded-xl bg-gray-100 outline-none w-full"
          />
          {errors.name && (
            <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
          )}
        </div>

        <div>
          <input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email",
              },
            })}
            placeholder="hello@example.com"
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
        <option value="feedback">Feedback</option>
        <option value="support">Support</option>
        <option value="business">Business</option>
      </select>

      {/* Message */}
      <div>
        <textarea
          {...register("message", {
            required: "Message is required",
          })}
          placeholder="Tell us what's on your mind..."
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
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
};

export default ContactFormCard;
