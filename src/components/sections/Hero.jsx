import { FaGithub, FaLinkedinIn, FaNodeJs, FaReact } from "react-icons/fa6";
import { SiMongodb } from "react-icons/si";
import { HiArrowDown, HiArrowUpRight, HiOutlineDocumentText, HiOutlineEnvelope } from "react-icons/hi2";
import { personalInfo } from "../../data/personalInfo";
import { useContactModal } from "../../context/useContactModal";
import { normalizeUrl, externalLinkProps } from "../../utils/links";

const Hero = () => {
  const { openContactModal } = useContactModal();

  return (
    <section id="hero" className="relative flex min-h-screen items-center overflow-hidden pb-20 pt-28 sm:pt-32">
      <div className="absolute left-[8%] top-32 h-36 w-36 rounded-full border border-blue-400/10 [transform:perspective(500px)_rotateX(68deg)]" aria-hidden="true" />
      <div className="site-container relative z-10 grid items-center gap-14 lg:grid-cols-[1.18fr_.82fr] lg:gap-10">
        <div className="text-center lg:text-left">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-emerald-300/15 bg-emerald-300/[0.06] px-3.5 py-2 text-xs font-semibold text-emerald-200">
            <span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-300 opacity-60" /><span className="relative h-2 w-2 rounded-full bg-emerald-300" /></span>
            {personalInfo.availability}
          </div>

          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">Full-stack engineer · Lahore, PK</p>
          <h1 className="display-title mx-auto lg:mx-0">
            Building the <span className="gradient-text">systems</span> behind ambitious products.
          </h1>
          <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg lg:mx-0">
            I&apos;m {personalInfo.name}, a backend-focused full-stack developer crafting secure, scalable digital products—from architecture and APIs to polished React experiences.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
            <button type="button" onClick={openContactModal} className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-3.5 font-bold text-slate-950 shadow-xl shadow-white/5 transition-transform hover:-translate-y-1">
              Start a conversation <HiArrowUpRight className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
            <a href={encodeURI(personalInfo.resume)} {...externalLinkProps} className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-3.5 font-semibold text-white transition hover:border-white/20 hover:bg-white/[0.07]">
              <HiOutlineDocumentText /> View résumé
            </a>
          </div>

          <div className="mt-9 flex items-center justify-center gap-3 lg:justify-start">
            <span className="mr-2 text-xs uppercase tracking-[0.18em] text-slate-600">Connect</span>
            <a href={normalizeUrl(personalInfo.contact.github)} {...externalLinkProps} className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 text-slate-400 transition hover:-translate-y-1 hover:border-cyan-300/30 hover:text-cyan-200" aria-label="GitHub profile"><FaGithub /></a>
            <a href={normalizeUrl(personalInfo.contact.linkedin)} {...externalLinkProps} className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 text-slate-400 transition hover:-translate-y-1 hover:border-cyan-300/30 hover:text-cyan-200" aria-label="LinkedIn profile"><FaLinkedinIn /></a>
            <button type="button" onClick={openContactModal} className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 text-slate-400 transition hover:-translate-y-1 hover:border-cyan-300/30 hover:text-cyan-200" aria-label="Open contact details"><HiOutlineEnvelope /></button>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[27rem] [perspective:1000px]">
          <div className="absolute inset-8 rounded-full bg-gradient-to-br from-blue-500/25 to-violet-500/20 blur-3xl" aria-hidden="true" />
          <div className="absolute -inset-10 animate-[slow-spin_28s_linear_infinite] rounded-full border border-dashed border-white/10" aria-hidden="true">
            <span className="absolute left-5 top-16 grid h-12 w-12 place-items-center rounded-2xl border border-cyan-300/20 bg-[#09111f] text-xl text-cyan-300 shadow-xl"><FaReact /></span>
            <span className="absolute bottom-8 right-10 grid h-12 w-12 place-items-center rounded-2xl border border-emerald-300/20 bg-[#09111f] text-xl text-emerald-300 shadow-xl"><FaNodeJs /></span>
          </div>
          <div className="relative rotate-2 rounded-[2rem] border border-white/15 bg-gradient-to-br from-white/10 to-white/[0.02] p-2 shadow-[0_40px_100px_rgba(0,0,0,.5)] transition-transform duration-500 hover:rotate-0 hover:[transform:rotateY(-3deg)_rotateX(2deg)]">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.55rem] bg-slate-900">
              <img src={personalInfo.image} alt={`${personalInfo.name}, full-stack developer`} className="h-full w-full object-cover object-top" width="1023" height="1537" fetchPriority="high" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050914]/80 via-transparent to-transparent" />
              <div className="absolute inset-x-5 bottom-5 flex items-center justify-between rounded-2xl border border-white/10 bg-black/30 p-4 backdrop-blur-lg">
                <div><p className="text-sm font-bold text-white">{personalInfo.name}</p><p className="mt-1 text-xs text-slate-300">Full-stack developer</p></div>
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/10 text-xl text-emerald-300"><SiMongodb /></span>
              </div>
            </div>
          </div>
          <div className="absolute -right-3 top-16 rounded-2xl border border-white/10 bg-[#0b1424]/90 px-4 py-3 shadow-2xl backdrop-blur-xl sm:-right-10">
            <p className="text-xs text-slate-500">Currently building</p><p className="mt-1 text-sm font-semibold text-white">AI-powered products</p>
          </div>
        </div>
      </div>

      <a href="#about" className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-xs uppercase tracking-[0.18em] text-slate-500 transition hover:text-white sm:flex">Scroll to explore <HiArrowDown className="animate-bounce" /></a>
    </section>
  );
};

export default Hero;
