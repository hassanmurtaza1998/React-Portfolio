import { useState } from "react";
import SectionHeader from "../ui/SectionHeader";
import ExperienceButton from "../ui/ExperienceButton";
import ExperienceDetail from "../ui/ExperienceDetail";
import Reveal from "../ui/Reveal";
import { experiences } from "../../data/experiences";

const Experience = () => {
  const [selectedExperience, setSelectedExperience] = useState(0);

  const handleTabKeyDown = (event, index) => {
    const lastIndex = experiences.length - 1;
    let nextIndex = index;
    if (["ArrowDown", "ArrowRight"].includes(event.key)) nextIndex = index === lastIndex ? 0 : index + 1;
    else if (["ArrowUp", "ArrowLeft"].includes(event.key)) nextIndex = index === 0 ? lastIndex : index - 1;
    else if (event.key === "Home") nextIndex = 0;
    else if (event.key === "End") nextIndex = lastIndex;
    else return;

    event.preventDefault();
    setSelectedExperience(nextIndex);
    requestAnimationFrame(() => document.getElementById(`experience-tab-${experiences[nextIndex].id}`)?.focus());
  };

  return (
    <section id="experience" className="section-shell section-rule">
      <div className="site-container">
        <SectionHeader eyebrow="Experience" title="A journey of growing" highlight="scope & ownership." description="From backend architecture to end-to-end product delivery, each role has expanded the systems and teams I can move forward." />
        <Reveal className="grid gap-5 lg:grid-cols-[20rem_1fr] lg:gap-8">
          <div className="relative space-y-3" role="tablist" aria-label="Professional experience">
            <div className="absolute bottom-5 left-[1.4rem] top-5 -z-10 w-px bg-gradient-to-b from-cyan-300/30 to-transparent" />
            {experiences.map((experience, index) => (
              <ExperienceButton key={experience.id} experience={experience} index={index} isActive={selectedExperience === index} onClick={() => setSelectedExperience(index)} onKeyDown={(event) => handleTabKeyDown(event, index)} />
            ))}
          </div>
          <ExperienceDetail experience={experiences[selectedExperience]} />
        </Reveal>
      </div>
    </section>
  );
};

export default Experience;
