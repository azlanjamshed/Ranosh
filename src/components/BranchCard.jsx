const BranchCard = ({ branch }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-6 flex items-start gap-6">

      {/* Image */}
      <img
        src={branch.image}
        alt="branch"
        className="w-20 h-20 rounded-full object-contain border"
      />

      {/* Content */}
      <div className="flex-1">
        <h3 className="text-xl font-bold text-gray-900">
          {branch.name}{" "}
          <span className="text-orange-500">({branch.location})</span>
        </h3>

        <p className="text-gray-600 mt-2 text-sm">
          📍 {branch.address}
        </p>

        <p className="text-gray-600 text-sm">
          📞 {branch.phone}
        </p>

        <a
          href={branch.map}
          target="_blank"
          rel="noreferrer"
          className="inline-block mt-3 text-orange-500 font-medium hover:underline"
        >
          View on Map →
        </a>
      </div>
    </div>
  );
};

export default BranchCard;