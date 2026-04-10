import { useTranslation } from "react-i18next";
import TeamCard from "./TeamCard";
import { team } from "../data/team";

const TeamSection = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  return (
    <section className=" bg-[#f5f5f5] ">
      <div
        className={`max-w-7xl mx-auto px-6 ${
          isRTL ? "text-center" : "text-center"
        }`}
      >
        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
          {t("team_title") || "The Juice Crafters"}
        </h2>

        <p className="text-xs md:text-sm px-5 mt-3 text-gray-600 max-w-2xl mx-auto">
          {t("team_desc") ||
            "Meet the passionate experts who turn seasonal harvests into your favorite daily rituals."}
        </p>

        {/* Grid */}
        <div className="mt-12 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {team.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
