import { HiOutlineAcademicCap, HiOutlineCheckBadge } from "react-icons/hi2";
import SectionHeader from "../ui/SectionHeader";
import CertificationCard from "../ui/CertificationCard";
import Reveal from "../ui/Reveal";
import { education } from "../../data/education";

const Education = () => (
  <section id="education" className="section-shell section-rule">
    <div className="site-container">
      <SectionHeader eyebrow="Learning" title="Foundations &" highlight="continuous growth." description="Formal education backed by focused certifications and a career-long habit of learning through building." />
      <div className="grid gap-5 lg:grid-cols-2">
        <Reveal className="glass-panel rounded-3xl p-6 sm:p-8">
          <div className="mb-7 flex items-center gap-3"><span className="grid h-11 w-11 place-items-center rounded-2xl bg-cyan-300/10 text-xl text-cyan-200"><HiOutlineAcademicCap /></span><h3 className="text-xl font-semibold text-white">Education</h3></div>
          <div className="space-y-3">
            {education.degrees.map((degree) => <article key={degree.id} className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-5"><div className="flex justify-between gap-4"><div><h4 className="font-semibold text-white">{degree.name}</h4><p className="mt-2 text-sm text-slate-400">{degree.field}</p></div><span className="shrink-0 text-xs text-cyan-200">{degree.period}</span></div></article>)}
          </div>
        </Reveal>
        <Reveal delay={100} className="glass-panel rounded-3xl p-6 sm:p-8">
          <div className="mb-7 flex items-center gap-3"><span className="grid h-11 w-11 place-items-center rounded-2xl bg-violet-300/10 text-xl text-violet-200"><HiOutlineCheckBadge /></span><h3 className="text-xl font-semibold text-white">Certifications</h3></div>
          <div className="space-y-3">{education.certifications.map((certification, index) => <CertificationCard key={certification.id} certification={certification} index={index} />)}</div>
        </Reveal>
      </div>
    </div>
  </section>
);

export default Education;
