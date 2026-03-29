const ContactInfoCard = ({ title, value, color }) => {
  return (
    <div className={`p-6 rounded-2xl text-black ${color}`}>
      <p className="text-sm opacity-70">{title}</p>
      <h3 className="text-lg font-semibold mt-1">{value}</h3>
    </div>
  );
};

export default ContactInfoCard;
