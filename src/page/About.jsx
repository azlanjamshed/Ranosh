import React from "react";
import SplitHero from "../components/SplitHero";
import aboutImg from "../assets/hero.jpg";
import OurRoots from "../components/OurRoots";
import TeamSection from "../components/TeamSection";
import CTASection from "../components/CTASection";
const About = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 via-white to-yellow-50 min-h-screen">
      <SplitHero
        tag="Since 1998"
        title1="Squeezing the Soul of"
        title2="Nature"
        desc="Ranoosh began as a small family vision to transform fresh fruits into a celebration of health."
        image={aboutImg}
      />
      <OurRoots />
      <TeamSection />
      <CTASection />
    </section>
  );
};

export default About;
