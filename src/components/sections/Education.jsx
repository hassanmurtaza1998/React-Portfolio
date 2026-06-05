import SectionHeader from "../ui/SectionHeader";
import CertificationCard from "../ui/CertificationCard";
import { education } from "../../data/education";

const Education = () => {
  return (
    <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader title="Education &" highlight="Certifications" />

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            {education.degrees.map((degree) => (
              <div
                key={degree.id}
                className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 sm:p-8"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl sm:text-3xl text-sky-400 shrink-0">
                    {degree.icon}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    {degree.name}
                  </h3>
                </div>
                <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-2">{degree.field}</p>
                <p className="text-gray-400">{degree.period}</p>
              </div>
            ))}
          </div>

          <div className="space-y-4">
            {education.certifications.map((cert) => (
              <CertificationCard key={cert.id} certification={cert} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
