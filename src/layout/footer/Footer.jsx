import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { HiArrowUp } from "react-icons/hi2";
import { personalInfo } from "../../data/personalInfo";
import { normalizeUrl, externalLinkProps } from "../../utils/links";

const Footer = () => (
  <footer className="border-t border-white/[0.08] py-8">
    <div className="site-container flex flex-col items-center justify-between gap-5 text-sm text-slate-500 sm:flex-row">
      <p>© {new Date().getFullYear()} {personalInfo.name}. Designed &amp; built with intention.</p>
      <div className="flex items-center gap-2">
        <a href={normalizeUrl(personalInfo.contact.github)} {...externalLinkProps} className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 text-slate-400 transition hover:border-cyan-300/30 hover:text-cyan-200" aria-label="GitHub profile"><FaGithub /></a>
        <a href={normalizeUrl(personalInfo.contact.linkedin)} {...externalLinkProps} className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 text-slate-400 transition hover:border-cyan-300/30 hover:text-cyan-200" aria-label="LinkedIn profile"><FaLinkedinIn /></a>
        <a href="#hero" className="ml-2 inline-flex items-center gap-2 rounded-xl px-3 py-2 text-slate-400 transition hover:text-white">Back to top <HiArrowUp /></a>
      </div>
    </div>
  </footer>
);

export default Footer;
