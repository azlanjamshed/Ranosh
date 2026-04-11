import React from "react";
import Hero from "../components/Hero";
import StorySection from "../components/StorySection";
import ProductsSection from "../components/ProductsSection";

import BranchHighlightHero from "../components/BranchHighlightHero";


const Home = () => {


  return (
    <>
      
      <Hero />
      <StorySection />
      <BranchHighlightHero />
      <ProductsSection />
    </>
  );
};

export default Home;
