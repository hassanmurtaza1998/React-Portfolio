import { HiOutlineCheck, HiOutlineCodeBracket, HiOutlineUsers } from "react-icons/hi2";
import { personalInfo } from "../../data/personalInfo";
import Reveal from "../ui/Reveal";

const About = () => (
  <section id="about" className="section-shell section-rule">
    <div className="site-container">
      <div className="grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:gap-20">
        <Reveal>
          <span className="eyebrow mb-5">About me</span>
          <h2 className="text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl">Engineering clarity into <span className="gradient-text">complex ideas.</span></h2>
          <p className="muted-copy mt-7 text-base sm:text-lg">{personalInfo.about.intro}</p>
          {personalInfo.about.focus && <p className="muted-copy mt-4 text-base sm:text-lg">{personalInfo.about.focus}</p>}

          <div className="mt-9 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-4 lg:grid-cols-2">
            {personalInfo.stats.map((stat) => (
              <div key={stat.label} className="bg-[#080e1a] p-5">
                <p className="text-2xl font-semibold tracking-tight text-white">{stat.value}</p>
                <p className="mt-1 text-xs leading-5 text-slate-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="space-y-5">
          <Reveal delay={100} className="glass-panel interactive-card rounded-3xl p-6 sm:p-8">
            <div className="mb-6 flex items-center gap-4">
              <span className="grid h-12 w-12 place-items-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-xl text-cyan-200"><HiOutlineCodeBracket /></span>
              <div><p className="text-xs uppercase tracking-[0.16em] text-slate-500">How I build</p><h3 className="mt-1 text-xl font-semibold text-white">Technical excellence</h3></div>
            </div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {personalInfo.values.map((value) => (
                <li key={value} className="flex items-start gap-3 rounded-xl border border-white/[0.06] bg-white/[0.025] p-3 text-sm leading-6 text-slate-300"><HiOutlineCheck className="mt-1 shrink-0 text-cyan-300" />{value}</li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={180} className="glass-panel interactive-card rounded-3xl p-6 sm:p-8">
            <div className="mb-6 flex items-center gap-4">
              <span className="grid h-12 w-12 place-items-center rounded-2xl border border-violet-300/20 bg-violet-300/10 text-xl text-violet-200"><HiOutlineUsers /></span>
              <div><p className="text-xs uppercase tracking-[0.16em] text-slate-500">Beyond the code</p><h3 className="mt-1 text-xl font-semibold text-white">Professional strengths</h3></div>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {personalInfo.professionalSkills.map((skill) => <span key={skill} className="rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-2 text-sm text-slate-300">{skill}</span>)}
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  </section>
);

export default About;
