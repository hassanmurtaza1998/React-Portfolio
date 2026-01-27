import SectionHeader from "../ui/SectionHeader";
import CertificationCard from "../ui/CertificationCard";
import { education } from "../../data/education";

const Education = () => {
  return (
    <section className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader title="Education &" highlight="Certifications" />

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            {education.degrees.map((degree) => (
              <div
                key={degree.id}
                className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
              >
                <div className="text-3xl text-sky-400 mb-4">{degree.icon}</div>
                <h3 className="text-2xl font-bold mb-2">{degree.name}</h3>
                <p className="text-xl text-gray-300 mb-2">{degree.field}</p>
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
