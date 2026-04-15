import ContactHero from "../components/contact/ContactHero";
import ContactFormCard from "../components/contact/ContactFormCard";
import ContactMapCard from "../components/contact/ContactMapCard";
import ContactInfoCard from "../components/contact/ContactInfoCard";
import ContactExtras from "../components/contact/ContactExtras";
import { useTranslation } from "react-i18next";
import contact from "../assets/contact.png";
import SplitHero from "../components/SplitHero";

const Contact = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";
  return (
    <>
      <section className="py-10 bg-orange-50  min-h-screen">
        <SplitHero
          tag={t("contact_tag")}
          title1={t("contact_title1")}
          title2={t("contact_title2")}
          desc={t("contact_desc")}
          image={contact}
          isRTL={isRTL}
        />
        <div className="max-w-7xl mx-auto px-6 py-5">
          {/* <ContactHero /> */}

          <div className="grid lg:grid-cols-2 gap-10">
            {/* LEFT */}
            <ContactFormCard />

            {/* RIGHT */}
            <div className="flex flex-col gap-6">
              <ContactMapCard />

              <div className="grid grid-cols-2 gap-4">
                <ContactInfoCard
                  title="call_us"
                  value="+966-535116126"
                  color="bg-yellow-300"
                />
                <ContactInfoCard
                  title="email_us"
                  value="ales@ranosh.com"
                  color="bg-blue-300"
                />

                <ContactInfoCard
                  title="open_daily"
                  value="8 AM - 12 AM"
                  color="bg-green-300"
                />
              </div>

              {/* <ContactExtras /> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
