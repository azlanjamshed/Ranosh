const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-4 text-center group">
      
      {/* Image */}
      <img
        src={product.image}
        alt={product.name}
        className="w-28 h-28 mx-auto object-contain group-hover:scale-110 transition duration-300"
      />

      {/* Name */}
      <h3 className="mt-4 text-lg font-semibold text-gray-800">
        {product.name}
      </h3>

      {/* Price */}
      <p className="text-gray-500 mt-1">${product.price}</p>

      {/* Button */}
      {/* <button className="mt-4 bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition">
        Add to Cart
      </button> */}
    </div>
  );
};

export default ProductCard;