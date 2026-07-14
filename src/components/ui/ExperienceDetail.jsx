import { HiOutlineCheckCircle, HiOutlineMapPin } from "react-icons/hi2";

const ExperienceDetail = ({ experience }) => (
  <article id="experience-panel" role="tabpanel" aria-labelledby={`experience-tab-${experience.id}`} className="glass-panel rounded-3xl p-6 sm:p-8 lg:p-10">
    <div className="flex flex-col justify-between gap-5 border-b border-white/[0.08] pb-7 sm:flex-row sm:items-start">
      <div>
        <div className="flex flex-wrap items-center gap-3">
          <span className="rounded-full border border-emerald-300/15 bg-emerald-300/[0.06] px-3 py-1 text-xs font-medium text-emerald-200">{experience.status}</span>
          <span className="text-xs text-slate-500">{experience.type}</span>
        </div>
        <h3 className="mt-5 text-2xl font-semibold tracking-tight text-white sm:text-3xl">{experience.role}</h3>
        <p className="mt-2 text-lg text-cyan-200">{experience.company}</p>
      </div>
      <div className="text-sm text-slate-500 sm:text-right"><p>{experience.period}</p><p className="mt-2 flex items-center gap-1.5 sm:justify-end"><HiOutlineMapPin />{experience.location}</p></div>
    </div>

    <div className="mt-7">
      <h4 className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">Key contributions</h4>
      <ul className="mt-5 space-y-4">
        {experience.achievements.map((achievement) => <li key={achievement} className="flex items-start gap-3 text-sm leading-7 text-slate-300 sm:text-base"><HiOutlineCheckCircle className="mt-1.5 shrink-0 text-cyan-300" />{achievement}</li>)}
      </ul>
    </div>

    <div className="mt-8 border-t border-white/[0.08] pt-6">
      <h4 className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">Technology stack</h4>
      <div className="mt-4 flex flex-wrap gap-2">{experience.technologies.map((tech) => <span key={tech} className="rounded-lg border border-white/[0.08] bg-white/[0.035] px-3 py-1.5 text-xs text-slate-400">{tech}</span>)}</div>
    </div>
  </article>
);

export default ExperienceDetail;
