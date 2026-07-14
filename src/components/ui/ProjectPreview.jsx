import { HiArrowUpRight } from "react-icons/hi2";

const palettes = [
  "from-emerald-400/20 via-cyan-400/10 to-blue-500/20",
  "from-amber-300/20 via-orange-400/10 to-rose-500/20",
  "from-violet-400/20 via-fuchsia-400/10 to-blue-500/20",
  "from-cyan-300/20 via-sky-400/10 to-indigo-500/20",
];

const getHostname = (url) => {
  try { return new URL(url).hostname.replace("www.", ""); } catch { return "Live project"; }
};

const ProjectPreview = ({ url, name, projectId = 1 }) => (
  <div className={`relative aspect-[16/10] overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br ${palettes[(projectId - 1) % palettes.length]} p-4 shadow-2xl shadow-black/20`}>
    <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full border-[20px] border-white/[0.035]" />
    <div className="relative h-full rounded-xl border border-white/10 bg-[#07101d]/75 p-3 backdrop-blur-sm">
      <div className="flex items-center gap-1.5 border-b border-white/[0.07] pb-2.5"><i className="h-1.5 w-1.5 rounded-full bg-rose-300/70" /><i className="h-1.5 w-1.5 rounded-full bg-amber-300/70" /><i className="h-1.5 w-1.5 rounded-full bg-emerald-300/70" /><span className="ml-2 truncate text-[9px] text-slate-600">{getHostname(url)}</span></div>
      <div className="grid h-[calc(100%-1.25rem)] place-items-center text-center">
        <div><span className="mx-auto grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-white/[0.06] text-lg font-bold text-white">{name.split(" ").map((word) => word[0]).slice(0, 2).join("")}</span><p className="mt-3 text-sm font-semibold text-white">{name}</p><p className="mt-1 inline-flex items-center gap-1 text-[10px] text-cyan-200">Live product <HiArrowUpRight /></p></div>
      </div>
    </div>
  </div>
);

export default ProjectPreview;
