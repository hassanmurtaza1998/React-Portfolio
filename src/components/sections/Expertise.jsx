import { HiOutlineBolt, HiOutlineCircleStack, HiOutlineCloud, HiOutlineLockClosed, HiOutlineRocketLaunch, HiOutlineServerStack } from "react-icons/hi2";
import SectionHeader from "../ui/SectionHeader";
import SkillCard from "../ui/SkillCard";
import { expertise } from "../../data/expertise";

const icons = [HiOutlineServerStack, HiOutlineBolt, HiOutlineCircleStack, HiOutlineCloud, HiOutlineLockClosed, HiOutlineRocketLaunch];

const Expertise = () => (
  <section id="expertise" className="section-shell section-rule overflow-hidden">
    <div className="absolute inset-x-0 top-1/2 -z-10 h-64 -translate-y-1/2 bg-blue-600/[0.04] blur-3xl" />
    <div className="site-container">
      <SectionHeader eyebrow="Core expertise" title="Architecture with" highlight="purpose." description="Deep backend thinking paired with the frontend and delivery skills needed to own a product end to end." />
      <div className="grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
        {expertise.map((skill, index) => <SkillCard key={skill.id} skill={skill} icon={icons[index]} index={index} />)}
      </div>
    </div>
  </section>
);

export default Expertise;
