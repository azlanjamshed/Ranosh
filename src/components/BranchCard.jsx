// const BranchCard = ({ branch }) => {
//   return (
//     <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-6 flex items-start gap-6">

//       {/* Image */}
//       <img
//         src={branch.image}
//         alt="branch"
//         className="w-20 h-20 rounded-full object-contain border"
//       />

//       {/* Content */}
//       <div className="flex-1">
//         <h3 className="text-xl font-bold text-gray-900">
//           {branch.name}{" "}
//           <span className="text-orange-500">({branch.location})</span>
//         </h3>

//         <p className="text-gray-600 mt-2 text-sm">
//           📍 {branch.address}
//         </p>

//         <p className="text-gray-600 text-sm">
//           📞 {branch.phone}
//         </p>

//         <a
//           href={branch.map}
//           target="_blank"
//           rel="noreferrer"
//           className="inline-block mt-3 text-orange-500 font-medium hover:underline"
//         >
//           View on Map →
//         </a>
//       </div>
//     </div>
//   );
// };

// export default BranchCard;
const BranchCard = ({ branch }) => {
  return (
    <div className="bg-white rounded-3xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden ">
      {/* Top Image */}
      <img
        src={branch.image}
        alt="branch"
        className="w-full h-40 object-contain"
      />

      {/* Content */}
      <div className="p-5 bg-gray-100">
        {/* Title */}
        <h3 className="text-lg font-bold text-gray-900">{branch.name}</h3>

        <p className="text-gray-500 text-sm mt-1">{branch.address}</p>

        {/* Divider */}
        <div className="border-t my-4"></div>

        {/* Info */}
        <div className="space-y-3 text-sm text-gray-600">
          {/* Timing */}
          <div className="flex items-center gap-3">
            <span className="bg-orange-100 text-orange-500 p-2 rounded-full">
              ⏰
            </span>
            <div>
              <p className="text-xs text-gray-400">Opening Hours</p>
              <p>{branch.hours || "07:30 AM - 09:00 PM"}</p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-3">
            <span className="bg-orange-100 text-orange-500 p-2 rounded-full">
              📞
            </span>
            <div>
              <p className="text-xs text-gray-400">Contact</p>
              <p>{branch.phone}</p>
            </div>
          </div>
        </div>

        {/* Button */}
        <a
          href={branch.map}
          target="_blank"
          rel="noreferrer"
          className="block mt-5 text-center bg-orange-500 text-white py-3 rounded-xl font-medium hover:bg-orange-600 transition"
        >
          Get Directions →
        </a>
      </div>
    </div>
  );
};

export default BranchCard;
