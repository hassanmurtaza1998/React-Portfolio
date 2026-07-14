const ExperienceButton = ({ experience, isActive, onClick, onKeyDown, index }) => (
  <button
    type="button"
    role="tab"
    id={`experience-tab-${experience.id}`}
    aria-controls="experience-panel"
    aria-selected={isActive}
    tabIndex={isActive ? 0 : -1}
    onClick={onClick}
    onKeyDown={onKeyDown}
    className={`relative w-full rounded-2xl border p-5 text-left transition-all ${isActive ? "border-cyan-300/20 bg-cyan-300/[0.07] shadow-xl shadow-cyan-950/10" : "border-transparent bg-transparent hover:border-white/10 hover:bg-white/[0.03]"}`}
  >
    <span className={`absolute left-[-1px] top-6 h-3 w-3 -translate-x-1/2 rounded-full border-2 ${isActive ? "border-cyan-200 bg-cyan-300 shadow-[0_0_16px_rgba(103,232,249,.7)]" : "border-slate-700 bg-[#080e1a]"}`} />
    <span className="font-mono text-[10px] text-slate-600">0{index + 1}</span>
    <h3 className={`mt-2 font-semibold ${isActive ? "text-white" : "text-slate-300"}`}>{experience.role}</h3>
    <p className="mt-1 text-sm text-slate-500">{experience.company}</p>
    <p className="mt-3 text-xs text-slate-600">{experience.period}</p>
  </button>
);

export default ExperienceButton;
