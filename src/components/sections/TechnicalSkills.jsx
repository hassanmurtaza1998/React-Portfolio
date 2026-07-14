import { HiOutlineCircleStack, HiOutlineCloud, HiOutlineCodeBracket, HiOutlineCpuChip, HiOutlinePaintBrush, HiOutlineWrenchScrewdriver } from "react-icons/hi2";
import SectionHeader from "../ui/SectionHeader";
import Reveal from "../ui/Reveal";
import { technicalSkills } from "../../data/technicalSkills";

const icons = [HiOutlineCodeBracket, HiOutlineCpuChip, HiOutlineCircleStack, HiOutlineCpuChip, HiOutlinePaintBrush, HiOutlineWrenchScrewdriver, HiOutlineCircleStack, HiOutlineCloud, HiOutlineWrenchScrewdriver];

const TechnicalSkills = () => (
  <section id="skills" className="section-shell section-rule">
    <div className="site-container">
      <SectionHeader eyebrow="Technical toolkit" title="Built for the full" highlight="product lifecycle." description="A practical stack selected to ship fast, scale safely, and stay maintainable long after launch." />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {technicalSkills.map((group, index) => {
          const Icon = icons[index];
          return (
            <Reveal key={group.id} delay={(index % 3) * 70} className={`${index === 0 || index === 7 ? "lg:col-span-2" : ""}`}>
              <article className="glass-panel interactive-card h-full rounded-3xl p-6">
                <div className="relative z-10 mb-6 flex items-center justify-between">
                  <span className="grid h-11 w-11 place-items-center rounded-2xl border border-white/10 bg-white/[0.05] text-xl text-cyan-200"><Icon /></span>
                  <span className="font-mono text-xs text-slate-600">0{index + 1}</span>
                </div>
                <h3 className="relative z-10 text-lg font-semibold text-white">{group.category}</h3>
                <div className="relative z-10 mt-4 flex flex-wrap gap-2">
                  {group.skills.map((skill) => <span key={skill} className="rounded-lg border border-white/[0.07] bg-black/10 px-3 py-1.5 text-xs leading-5 text-slate-400 transition-colors hover:border-cyan-300/20 hover:text-cyan-100">{skill}</span>)}
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </div>
  </section>
);

export default TechnicalSkills;
