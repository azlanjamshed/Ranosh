// import React from "react";

// const Map = () => {
//   return (
//     <>
//       <div className="md:w-1/2 rounded-2xl overflow-hidden shadow-lg">
//         <iframe
//           src="https://www.google.com/maps/place/Ranosh/@24.7724364,46.7203163,19.25z/data=!4m6!3m5!1s0x3e2efdd58193b1cf:0x91d3e7d2a4d88c86!8m2!3d24.7724354!4d46.7207624!16s%2Fg%2F11cjqxp6jb?entry=ttu&g_ep=EgoyMDI2MDMxOC4xIKXMDSoASAFQAw%3D%3D"
//           width="100%"
//           height="100%"
//           style={{ minHeight: "400px", border: 0 }}
//           allowFullScreen=""
//           loading="lazy"
//           referrerPolicy="no-referrer-when-downgrade"
//           title="Office Location"
//         ></iframe>
//       </div>
//     </>
//   );
// };

// export default Map;
const Map = () => {
  return (
    <div className="w-full h-[400px] rounded-2xl overflow-hidden shadow-lg border">
      <iframe
        src="https://www.google.com/maps?q=24.7724354,46.7207624&z=15&output=embed"
        className="w-full h-full"
        loading="lazy"
        title="map"
      ></iframe>
    </div>
  );
};

export default Map;