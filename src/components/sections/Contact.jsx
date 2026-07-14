import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { HiArrowUpRight, HiOutlineEnvelope, HiOutlineMapPin } from "react-icons/hi2";
import { personalInfo } from "../../data/personalInfo";
import { useContactModal } from "../../context/useContactModal";
import { normalizeUrl, externalLinkProps } from "../../utils/links";
import Reveal from "../ui/Reveal";

const Contact = () => {
  const { openContactModal } = useContactModal();

  return (
    <section id="contact" className="section-shell section-rule overflow-hidden">
      <div className="absolute left-1/2 top-1/2 -z-10 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/[0.09] blur-3xl" />
      <div className="site-container">
        <Reveal className="glass-panel relative overflow-hidden rounded-[2rem] px-6 py-16 text-center sm:px-12 sm:py-20">
          <div className="absolute -left-28 -top-28 h-64 w-64 rounded-full border-[40px] border-cyan-300/[0.025]" aria-hidden="true" />
          <div className="absolute -bottom-32 -right-24 h-72 w-72 rounded-full border-[45px] border-violet-300/[0.025]" aria-hidden="true" />
          <div className="relative z-10">
            <span className="eyebrow mb-6">Let&apos;s collaborate</span>
            <h2 className="mx-auto max-w-4xl text-4xl font-semibold tracking-[-0.055em] text-white sm:text-6xl lg:text-7xl">Have an ambitious idea? <span className="gradient-text">Let&apos;s make it real.</span></h2>
            <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">I&apos;m open to meaningful full-time opportunities and challenging products where thoughtful engineering can make a measurable difference.</p>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <button type="button" onClick={openContactModal} className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-3.5 font-bold text-slate-950 transition-transform hover:-translate-y-1">Get in touch <HiArrowUpRight className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></button>
              <a href={`mailto:${personalInfo.contact.email}`} className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-3.5 font-semibold text-white transition hover:border-white/20"><HiOutlineEnvelope /> Send an email</a>
            </div>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4 text-sm text-slate-500">
              <span className="inline-flex items-center gap-2"><HiOutlineMapPin className="text-cyan-300" />{personalInfo.contact.location}</span>
              <span className="hidden h-1 w-1 rounded-full bg-slate-700 sm:block" />
              <a href={normalizeUrl(personalInfo.contact.github)} {...externalLinkProps} className="inline-flex items-center gap-2 transition hover:text-white"><FaGithub />GitHub</a>
              <a href={normalizeUrl(personalInfo.contact.linkedin)} {...externalLinkProps} className="inline-flex items-center gap-2 transition hover:text-white"><FaLinkedinIn />LinkedIn</a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;
