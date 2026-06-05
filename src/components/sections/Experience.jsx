import { useState } from "react";
import SectionHeader from "../ui/SectionHeader";
import ExperienceButton from "../ui/ExperienceButton";
import ExperienceDetail from "../ui/ExperienceDetail";
import { experiences } from "../../data/experiences";

const Experience = () => {
  const [selectedExperience, setSelectedExperience] = useState(0);

  return (
    <section id="experience" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-white/[0.02]">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          title="Professional"
          highlight="Journey"
          description="Click on each role to explore my career progression and achievements"
        />

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Timeline Selector */}
          <div className="lg:col-span-4 space-y-4">
            {experiences.map((exp, idx) => (
              <ExperienceButton
                key={exp.id}
                experience={exp}
                isActive={selectedExperience === idx}
                onClick={() => setSelectedExperience(idx)}
              />
            ))}
          </div>

          {/* Experience Details */}
          <div className="lg:col-span-8">
            <ExperienceDetail experience={experiences[selectedExperience]} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
