// import React from "react";
// import image from "/image.png";

// const Fallback = () => {
//   return (
//     <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-orange-50 to-orange-100 px-4">
//       {/* Card */}
//       <div className="w-full max-w-sm sm:max-w-md flex flex-col items-center justify-center px-6 sm:px-10 py-8 sm:py-12 bg-white rounded-3xl shadow-xl">
//         {/* Image */}
//         <img
//           src={image}
//           alt="Loading..."
//           className=" object-contain mb-5 sm:mb-6 animate-pulse"
//         />

//         {/* Text */}
//         <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 tracking-wide text-center">
//           Loading your experience...
//         </h2>

//         <p className="text-xs sm:text-sm text-gray-500 mb-5 sm:mb-6 text-center">
//           Please wait while we prepare everything
//         </p>

//         {/* Line Loader */}
//         <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
//           <div className="h-full bg-orange-500 rounded-full animate-loading-bar-slow"></div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Fallback;

// import React from "react";

// const Fallback = () => {
//   return (
//     <div className="min-h-screen w-full flex items-center justify-center bg-[#FDFAFA] px-4 relative overflow-hidden">
//       {/* Subtle Ambient Fluid Background Glows */}
//       <div className="absolute inset-0 pointer-events-none overflow-hidden">
//         <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-orange-200/20 blur-[100px]"></div>
//         <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-amber-200/20 blur-[100px]"></div>
//       </div>

//       <div className="z-10 flex flex-col items-center justify-center">
//         {/* Elegant Droplet Icon */}
//         <div className="relative mb-8">
//           {/* Droplet Glow */}
//           <div className="absolute inset-0 bg-orange-400 blur-xl opacity-30 animate-pulse"></div>
//           {/* Droplet SVG */}
//           <svg
//             className="w-10 h-10 sm:w-12 sm:h-12 text-orange-500 relative z-10 animate-pulse drop-shadow-sm"
//             fill="currentColor"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path d="M12 2.5s-6 7-6 11.5a6 6 0 0 0 12 0c0-4.5-6-11.5-6-11.5z" />
//           </svg>
//         </div>

//         {/* Brand Name */}
//         <h1 className="text-3xl sm:text-5xl font-light tracking-[0.4em] text-gray-900 uppercase mb-3 ml-[0.4em]">
//           Ranosh<span className="text-orange-500 font-bold">.</span>
//         </h1>

//         {/* Subtitle */}
//         <p className="text-xs sm:text-sm text-gray-400 tracking-widest uppercase mb-10 text-center">
//           Pouring nature's finest
//         </p>

//         {/* Minimalist Loading Indicator */}
//         <div className="w-32 sm:w-48 h-[2px] bg-gray-100 rounded-full overflow-hidden flex">
//           <div className="w-full h-full bg-gradient-to-r from-orange-50 via-orange-400 to-orange-50 animate-pulse"></div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Fallback;

import React from "react";

const Fallback = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#FDFAFA] px-4 relative overflow-hidden">
      {/* Subtle Ambient Fluid Background Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-orange-200/20 blur-[100px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-amber-200/20 blur-[100px]"></div>
      </div>

      <div className="z-10 flex flex-col items-center justify-center">
        {/* === UPDATED: Juice Glass with Straw Icon === */}
        <div className="relative mb-10">
          {/* Subtle Glow behind the glass */}
          <div className="absolute inset-0 -m-4 bg-orange-300 blur-2xl opacity-20 animate-pulse rounded-full"></div>

          {/* Glass & Straw SVG */}
          <svg
            className="w-16 h-16 sm:w-20 sm:h-20 text-gray-900 relative z-10 drop-shadow-sm"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* The Straw */}
            <path
              d="M16 2L13.7 8"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />

            {/* The Glass Outline */}
            <path
              d="M18.5 8H5.5L7.5 21H16.5L18.5 8Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />

            {/* The Juice (Orange Fill) with a subtle pulse animation */}
            <path
              className="text-orange-500/90 animate-pulse"
              d="M17.5 11H6.5L7.5 20H16.5L17.5 11Z"
              fill="currentColor"
            />
          </svg>
        </div>
        {/* =========================================== */}

        {/* Brand Name */}
        <h1
          className="text-3xl sm:text-5xl font-light tracking-[0.4em] text-[#ff5a1f] uppercase mb-3 ml-[0.4em]"
          style={{
            fontFamily: "'Brush Script MT', 'Dancing Script', cursive",
          }}
        >
          Ranosh<span className="text-orange-500 font-bold">.</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xs sm:text-sm text-gray-400 tracking-widest uppercase mb-12 text-center">
          Pouring nature's finest
        </p>

        {/* Minimalist Loading Indicator */}
        <div className="w-32 sm:w-48 h-[2px] bg-gray-100 rounded-full overflow-hidden flex">
          <div className="w-full h-full bg-gradient-to-r from-orange-50 via-orange-400 to-orange-50 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default Fallback;
