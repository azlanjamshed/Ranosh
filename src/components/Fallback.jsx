// import React from "react";
// import image from "/image.png";

// const Fallback = () => {
//   return (
//     <div className="h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-orange-50 to-orange-100">
//       {/* Card Container */}
//       <div className="flex flex-col items-center justify-center px-10 py-12 bg-white rounded-3xl shadow-xl">
//         {/* Image */}
//         <img
//           src={image}
//           alt="Loading..."
//           className=" object-contain mb-6 animate-pulse"
//         />

//         {/* Text */}
//         <h2 className="text-xl font-semibold text-gray-800 mb-2 tracking-wide">
//           Loading your experience...
//         </h2>

//         <p className="text-sm text-gray-500 mb-6">
//           Please wait while we prepare everything
//         </p>

//         {/* Premium Spinner */}
//         {/* <div className="relative w-12 h-12">
//           <div className="absolute inset-0 rounded-full border-4 border-gray-200"></div>
//           <div className="absolute inset-0 rounded-full border-4 border-blue-500 border-t-transparent animate-spin"></div>
//         </div> */}
//         <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
//           <div className="h-full bg-orange-500 rounded-full animate-loading-bar"></div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Fallback;

import React from "react";
import image from "/image.png";

const Fallback = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-orange-50 to-orange-100 px-4">
      {/* Card */}
      <div className="w-full max-w-sm sm:max-w-md flex flex-col items-center justify-center px-6 sm:px-10 py-8 sm:py-12 bg-white rounded-3xl shadow-xl">
        {/* Image */}
        <img
          src={image}
          alt="Loading..."
          className=" object-contain mb-5 sm:mb-6 animate-pulse"
        />

        {/* Text */}
        <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 tracking-wide text-center">
          Loading your experience...
        </h2>

        <p className="text-xs sm:text-sm text-gray-500 mb-5 sm:mb-6 text-center">
          Please wait while we prepare everything
        </p>

        {/* Line Loader */}
        <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
          <div className="h-full bg-orange-500 rounded-full animate-loading-bar-slow"></div>
        </div>
      </div>
    </div>
  );
};

export default Fallback;
