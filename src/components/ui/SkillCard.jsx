import { createElement } from "react";
import Reveal from "./Reveal";

const SkillCard = ({ skill, icon, index }) => (
  <Reveal delay={(index % 3) * 70} className="h-full bg-[#080e1a]">
    <article className="group h-full p-7 transition-colors hover:bg-white/[0.025] sm:p-8">
      <div className="mb-10 flex items-center justify-between">
        <span className="grid h-12 w-12 place-items-center rounded-2xl border border-cyan-300/15 bg-cyan-300/[0.07] text-xl text-cyan-200 transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110">{createElement(icon)}</span>
        <span className="font-mono text-xs text-slate-700">0{index + 1}</span>
      </div>
      <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-500">{skill.description}</p>
    </article>
  </Reveal>
);

export default SkillCard;
