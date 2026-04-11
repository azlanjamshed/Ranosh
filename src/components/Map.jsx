
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