

const GlobalLoader = () => {
  return (
    <div className="fixed inset-0 bg-white z-[9999] opacity-50 flex items-center justify-center">
      {/* OPTION 1: Spinner */}
      {/* <div className="w-10 h-10 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div> */}

      {/* OPTION 2: Logo (better) */}
      <img src="/logo.png" className="w-30 md:w-50 animate-ping" />
    </div>
  );
};

export default GlobalLoader;
