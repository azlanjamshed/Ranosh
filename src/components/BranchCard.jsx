// const BranchCard = ({ branch }) => {
//   return (
//     <div className="bg-white rounded-3xl  transition duration-300 overflow-hidden hover:scale-105 border border-orange-200 shadow-md hover:shadow-[0_0_15px_#fb923c] group">
//       {/* Top Image */}
//       <img
//         src={branch.image}
//         alt="branch"
//         className="w-full h-40 object-contain group-hover:scale-105"
//       />

//       {/* Content */}
//       <div className="p-5 bg-gray-100">
//         {/* Title */}
//         <h3 className="text-lg font-bold text-gray-900">{branch.name}</h3>

//         <p className="text-gray-500 text-sm mt-1">{branch.address}</p>

//         {/* Divider */}
//         <div className="border-t my-4"></div>

//         {/* Info */}
//         <div className="space-y-3 text-sm text-gray-600">
//           {/* Timing */}
//           <div className="flex items-center gap-3">
//             <span className="bg-orange-100 text-orange-500 p-2 rounded-full">
//               ⏰
//             </span>
//             <div>
//               <p className="text-xs text-gray-400">Opening Hours</p>
//               <p>{branch.hours || "07:30 AM - 10:00 PM"}</p>
//             </div>
//           </div>

//           {/* Phone */}
//           <div className="flex items-center gap-3">
//             <span className="bg-orange-100 text-orange-500 p-2 rounded-full">
//               📞
//             </span>
//             <div>
//               <p className="text-xs text-gray-400">Contact</p>
//               <p>{branch.phone}</p>
//             </div>
//           </div>
//         </div>

//         {/* Button */}
//         <a
//           href={branch.map}
//           target="_blank"
//           rel="noreferrer"
//           className="block mt-5 text-center bg-orange-500 text-white py-3 rounded-xl font-medium hover:bg-orange-600 transition"
//         >
//           Get Directions →
//         </a>
//       </div>
//     </div>
//   );
// };

// export default BranchCard;
import { useTranslation } from "react-i18next";

const BranchCard = ({ branch }) => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  return (
    <div
      className={`bg-white rounded-3xl overflow-hidden border border-orange-200 shadow-md hover:shadow-[0_0_15px_#fb923c] transition duration-300  group hover:scale-105 ${
        isRTL ? "text-right" : "text-left"
      }`}
    >
      {/* Image */}
      <img
        src={branch.image}
        alt="branch"
        className="w-full h-50 p-5 object-contain border border-orange-200 rounded-3xl group-hover:scale-105 transition duration-500"
      />

      {/* Content */}
      <div className="p-6 bg-white">
        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900">{branch.name}</h3>

        <p className="text-gray-500 mt-1">{branch.address}</p>

        {/* Divider */}
        <div className="border-t my-5"></div>

        {/* Info */}
        <div className="space-y-4">
          {/* Hours */}
          <div
            className={`flex items-center gap-3 ${
              isRTL ? "flex-row-reverse" : ""
            }`}
          >
            <span className="bg-orange-100 text-orange-500 p-3 rounded-full">
              ⏰
            </span>

            <div className="flex-1">
              <p className="text-xs text-gray-400">{t("opening_hours")}</p>
              <p className="font-medium text-gray-700">
                {branch.hours || "07:30 AM - 09:00 PM"}
              </p>
            </div>
          </div>

          {/* Phone */}
          <div
            className={`flex items-center gap-3 ${
              isRTL ? "flex-row-reverse" : ""
            }`}
          >
            <span className="bg-orange-100 text-orange-500 p-3 rounded-full">
              📞
            </span>

            <div className="flex-1">
              <p className="text-xs text-gray-400">{t("contact")}</p>
              <p className="font-medium text-gray-700">{branch.phone}</p>
            </div>
          </div>
        </div>

        {/* Button */}
        <a
          href={branch.map}
          target="_blank"
          rel="noreferrer"
          className="mt-6 w-full flex items-center justify-center gap-2 bg-orange-500 text-white py-3 rounded-2xl font-medium hover:bg-orange-600 transition"
        >
          <span>{t("get_directions")}</span>
          <span>→</span>
        </a>
      </div>
    </div>
  );
};

export default BranchCard;
