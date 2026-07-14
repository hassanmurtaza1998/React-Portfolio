const CertificationCard = ({ certification, index }) => (
  <article className="group flex items-center gap-4 rounded-2xl border border-white/[0.07] bg-white/[0.025] p-5 transition-colors hover:border-violet-300/20">
    <span className="font-mono text-xs text-violet-300/60">0{index + 1}</span>
    <div><h4 className="font-semibold text-white">{certification.name}</h4><p className="mt-1.5 text-sm text-slate-500">{certification.org}</p></div>
  </article>
);

export default CertificationCard;
