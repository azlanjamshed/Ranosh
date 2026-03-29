const ContactMapCard = () => {
  return (
    <div className="bg-white rounded-3xl p-4 shadow-md relative">
      <iframe
        src="https://www.google.com/maps?q=24.7724354,46.7207624&z=15&output=embed"
        className="w-full h-80 rounded-2xl"
        loading="lazy"
      />

      {/* Floating label */}
      <div className="absolute bottom-4 left-4 bg-white px-4 py-2 rounded-xl shadow">
        <p className="text-xs text-gray-400">Main Branch</p>
        <p className="text-sm font-semibold">Riyadh, Saudi Arabia</p>
      </div>
    </div>
  );
};

export default ContactMapCard;
