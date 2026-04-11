import React from "react";
import juiceImg from "../assets/hero.jpg";
import mainImage from "../assets/main.png";
import mainImage2 from "../assets/hero.png";
import { motion } from "framer-motion";

import { NavLink } from "react-router-dom";

const Hero = () => {
  return (
    <div
      className="w-full py-20 md:py-40  object-contain bg-center bg-cover text-white text-center flex  items-center justify-center"
      style={{
        backgroundImage: `linear-gradient(rgba(39,38,38,0.8), rgba(39,38,38,0.8)), url(${juiceImg})`,
      }}
    >
      <div className="w-11/12 sm:w-10/12 md:w-3/4 lg:w-2/3 flex flex-col justify-center items-center gap-3 md:gap-5 text-center">
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <img src={mainImage} alt="" className="w-full h-auto" />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
