import SectionHeader from "../ui/SectionHeader";
import { technicalSkills } from "../../data/technicalSkills";

const TechnicalSkills = () => {
  return (
    <section id="skills" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          title="Technical"
          highlight="Skills"
          description="Technologies and tools I use to build scalable, production-ready applications"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {technicalSkills.map((group) => (
            <div
              key={group.id}
              className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 sm:p-6 hover:border-sky-500/30 hover:shadow-xl hover:shadow-sky-500/10 transition-all"
            >
              <h3 className="text-lg sm:text-xl font-bold mb-4 text-white">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg text-xs sm:text-sm text-gray-300 hover:border-sky-500/30 hover:text-sky-300 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnicalSkills;
