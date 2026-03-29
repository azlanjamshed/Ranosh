// const ProductCard = ({ product }) => {

//   return (
//     <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-4 text-center group">

//       {/* Image */}
//       <img
//         src={product.image}
//         alt={product.name}
//         className="w-28 h-28 mx-auto object-contain group-hover:scale-110 transition duration-300"
//       />

//       {/* Name */}
//       <h3 className="mt-4 text-lg font-semibold text-gray-800">
//         {product.name}
//       </h3>

//       {/* Price */}
//       <p className="text-gray-500 mt-1">${product.price}</p>

//       {/* Button */}
//       {/* <button className="mt-4 bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition">
//         Add to Cart
//       </button> */}
//     </div>
//   );
// };

// export default ProductCard;

const ProductCard = ({ product }) => {
  const categoryColors = {
    CITRUS: "bg-orange-400 text-white",
    DETOX: "bg-green-400 text-white",
    BERRY: "bg-pink-400 text-white",
    TROPICAL: "bg-yellow-400 text-black",
    ENERGY: "bg-red-400 text-white",
    DEFAULT: "bg-gray-300 text-black",
  };
  return (
    <div className="bg-white rounded-3xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden group hover:scale-105">
      {/* Image */}
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-52 object-contain group-hover:scale-105 transition duration-500"
        />

        {/* Category Badge */}
        <span
          className={`absolute top-3 right-3 text-xs px-3 py-1 rounded-full font-semibold ${
            categoryColors[product.category] || categoryColors.DEFAULT
          }`}
        >
          {product.category || "CITRUS"}
        </span>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Title */}
        <h3 className="text-lg font-bold text-gray-900">{product.name}</h3>

        {/* Description */}
        <p className="text-gray-500 text-sm mt-2">
          {product.description ||
            "A refreshing juice crafted with natural ingredients."}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-4">
          {(product.tags || ["Fresh", "Organic"]).map((tag, index) => (
            <span
              key={index}
              className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTA */}
        <button className="mt-5 text-orange-500 font-semibold hover:underline flex items-center gap-1">
          View Details →
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
