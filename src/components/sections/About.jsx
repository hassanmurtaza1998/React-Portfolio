import { CodeOutlined, TeamOutlined } from "@ant-design/icons";
import { personalInfo } from "../../data/personalInfo";

const About = () => {
  return (
    <section id="about" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-white/[0.02]">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-white">
              About <span className="text-sky-400">Me</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-400 leading-relaxed mb-4 sm:mb-6">
              {personalInfo.about.intro}
            </p>
            <p className="text-base sm:text-lg md:text-xl text-gray-400 leading-relaxed">
              {personalInfo.about.focus}
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 flex items-center gap-3 text-white">
                <span className="text-sky-400 text-2xl sm:text-3xl">
                  <CodeOutlined />
                </span>
                Technical Excellence
              </h3>
              <ul className="space-y-3 text-gray-400">
                {personalInfo.values.map((value, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-sky-400 mt-1">▹</span>
                    <span>{value}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 flex items-center gap-3 text-white">
                <span className="text-sky-400 text-2xl sm:text-3xl">
                  <TeamOutlined />
                </span>
                Professional Skills
              </h3>
              <div className="flex flex-wrap gap-3">
                {personalInfo.professionalSkills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="bg-white/5 border border-white/10 px-4 py-2 rounded-lg text-sm text-gray-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
