import React from "react";
import SplitHero from "../components/SplitHero";
import aboutImg from "../assets/about.png";
import OurRoots from "../components/OurRoots";
import TeamSection from "../components/TeamSection";
import CTASection from "../components/CTASection";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";
  return (
    <section
      dir={isRTL ? "rtl" : "ltr"}
      className={`py-10 bg-orange-50 min-h-screen ${
        isRTL ? "text-right" : "text-left"
      }`}
    >
      <SplitHero
        tag={t("about_tag")}
        title1={t("about_title1")}
        title2={t("about_title2")}
        desc={t("about_desc")}
        image={aboutImg}
      />
      <OurRoots />
      <TeamSection />
      <CTASection />
    </section>
  );
};

export default About;
