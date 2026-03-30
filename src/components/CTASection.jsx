import { Link } from "react-router-dom";
import bgImg from "../assets/hero.jpg"; // background image

const CTASection = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative rounded-[40px] overflow-hidden">
          {/* Background Image */}
          <img
            src={bgImg}
            alt="background"
            className="absolute inset-0 w-full h-full object-cover opacity-80 "
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>

          {/* Content */}
          <div className="relative z-10 grid md:grid-cols-2 items-center p-10 md:p-16 gap-10">
            {/* LEFT CONTENT */}
            <div className="text-white max-w-xl">
              <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                Taste the Orchard Today.
              </h2>

              <p className="mt-4 text-gray-300 text-lg">
                Experience the difference of cold-pressed, organic ingredients
                delivered straight to your door or prepared fresh in-store.
              </p>

              {/* Buttons */}
              <div className="mt-8 flex flex-wrap gap-4">
                {/* Primary */}
                <Link
                  to="/products"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-semibold transition"
                >
                  Explore Menu
                </Link>

                {/* Secondary */}
                <Link
                  to="/branch"
                  className="border border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition"
                >
                  Find a Branch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
