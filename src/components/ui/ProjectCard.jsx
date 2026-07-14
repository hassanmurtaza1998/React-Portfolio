import { HiArrowUpRight, HiOutlineCheckCircle } from "react-icons/hi2";
import ProjectPreview from "./ProjectPreview";
import Reveal from "./Reveal";
import { externalLinkProps } from "../../utils/links";

const ProjectCard = ({ project, index }) => (
  <Reveal delay={Math.min(index * 30, 150)}>
    <article className="glass-panel interactive-card group rounded-3xl p-5 sm:p-7 lg:p-8">
      <div className="relative z-10 grid gap-7 lg:grid-cols-[1fr_18rem] lg:items-start">
        <div>
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <span className="font-mono text-xs text-cyan-300">0{index + 1}</span>
            <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] font-medium text-slate-400">{project.type}</span>
          </div>
          <h3 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">{project.name}</h3>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400 sm:text-base">{project.description}</p>

          <ul className="mt-6 grid gap-2 sm:grid-cols-2">
            {project.highlights.map((highlight) => <li key={highlight} className="flex items-start gap-2.5 text-xs leading-5 text-slate-400"><HiOutlineCheckCircle className="mt-0.5 shrink-0 text-emerald-300" />{highlight}</li>)}
          </ul>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.tech.map((tech) => <span key={tech} className="rounded-lg bg-white/[0.04] px-2.5 py-1.5 text-[11px] text-slate-500">{tech}</span>)}
          </div>
        </div>

        <div>
          <ProjectPreview url={project.url} name={project.name} projectId={project.id} />
          <div className="mt-3 grid grid-cols-3 gap-2">
            {Object.entries(project.metrics).map(([key, value]) => <div key={key} className="rounded-xl border border-white/[0.07] bg-white/[0.025] p-2.5 text-center"><p className="truncate text-xs font-semibold text-white">{value}</p><p className="mt-1 truncate text-[9px] capitalize text-slate-600">{key}</p></div>)}
          </div>
          {project.url && <a href={project.url} {...externalLinkProps} className="mt-4 flex items-center justify-center gap-2 rounded-xl border border-white/10 py-2.5 text-xs font-semibold text-slate-300 transition hover:border-cyan-300/25 hover:text-cyan-200">Visit live project <HiArrowUpRight /></a>}
        </div>
      </div>
    </article>
  </Reveal>
);

export default ProjectCard;
