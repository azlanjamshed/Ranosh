const TeamCard = ({ member }) => {
  return (
    <div className="text-center group transform hover:-translate-y-2 transition-all  border border-orange-200 rounded-3xl p-4 bg-white shadow-md hover:shadow-[0_0_15px_#fb923c] group">
      {/* Image */}
      <div className="overflow-hidden rounded-3xl  p-15 md:p-0 ">
        <img
          src={member.image}
          alt={member.name}
          className=" w-full h-72 object-cover grayscale group-hover:grayscale-0 transition duration-500 group-hover:scale-105"
        />
      </div>

      {/* Info */}
      <h3 className="mt-4 text-lg font-semibold text-gray-900">
        {member.name}
      </h3>

      <p className="text-orange-600 text-sm font-medium mt-1">{member.role}</p>
    </div>
  );
};

export default TeamCard;
