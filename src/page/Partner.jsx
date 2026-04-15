import React from "react";
import SplitHero from "../components/SplitHero";
import b2bImage from "../assets/partner.png";
import { useTranslation } from "react-i18next";
import StatsSection from "../components/StatsSection";
import ServicesSection from "../components/ServicesSection";
import JourneySection from "../components/JourneySection";
import B2BForm from "../components/B2BForm";

const Partner = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";
  return (
    <>
      <section
        dir={isRTL ? "rtl" : "ltr"}
        className={`py-10 bg-orange-50 min-h-screen ${
          isRTL ? "text-right" : "text-left"
        }`}
      >
        <SplitHero
          tag={t("partnership_tag")}
          title1={t("partner")}
          title2={t("with_us")}
          desc={t("partnership_desc")}
          image={b2bImage}
          buttons={[
            { label: t("become_partner"), variant: "primary" },
            { label: t("request_pricing"), variant: "secondary" },
          ]}
          isRTL={isRTL}
        />
        <StatsSection />
        <ServicesSection />
        <JourneySection />
        <B2BForm />
      </section>
    </>
  );
};

export default Partner;
