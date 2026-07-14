import { useEffect, useState } from "react";
import { HiBars3, HiXMark, HiArrowUpRight } from "react-icons/hi2";
import { personalInfo } from "../../data/personalInfo";
import { useContactModal } from "../../context/useContactModal";
import { externalLinkProps } from "../../utils/links";

const navItems = [
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Work", id: "projects" },
  { label: "Experience", id: "experience" },
  { label: "Education", id: "education" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [isScrolled, setIsScrolled] = useState(false);
  const { openContactModal } = useContactModal();

  useEffect(() => {
    const sections = ["hero", ...navItems.map(({ id }) => id)]
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: "-20% 0px -65%", threshold: [0, 0.15, 0.4] },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const handleContactClick = () => {
    setIsOpen(false);
    openContactModal();
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
      <nav
        aria-label="Primary navigation"
        className={`mx-auto flex h-16 max-w-7xl items-center justify-between rounded-2xl border px-4 transition-all duration-300 sm:px-5 ${
          isScrolled ? "border-white/10 bg-[#070c16]/80 shadow-2xl shadow-black/20 backdrop-blur-xl" : "border-transparent bg-transparent"
        }`}
      >
        <a href="#hero" className="group flex items-center gap-3" aria-label="Go to homepage">
          <span className="grid h-9 w-9 place-items-center rounded-xl border border-cyan-300/20 bg-cyan-300/10 text-sm font-bold text-cyan-200 transition-transform group-hover:-rotate-6">HM</span>
          <span className="hidden text-sm font-semibold tracking-wide text-white sm:block">
            {personalInfo.firstName} <span className="text-slate-400">{personalInfo.lastName}</span>
          </span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map(({ label, id }) => (
            <a
              key={id}
              href={`#${id}`}
              className={`rounded-lg px-3 py-2 text-sm transition-colors ${activeSection === id ? "text-white" : "text-slate-400 hover:text-white"}`}
              aria-current={activeSection === id ? "location" : undefined}
            >
              {label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={encodeURI(personalInfo.resume)}
            {...externalLinkProps}
            className="inline-flex items-center gap-1.5 rounded-xl px-3 py-2 text-sm font-medium text-slate-300 transition-colors hover:text-white"
          >
            Résumé <HiArrowUpRight />
          </a>
          <button type="button" onClick={openContactModal} className="rounded-xl bg-white px-4 py-2.5 text-sm font-bold text-slate-950 transition-transform hover:-translate-y-0.5">
            Let&apos;s talk
          </button>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-xl text-white lg:hidden"
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          aria-label={isOpen ? "Close navigation" : "Open navigation"}
        >
          {isOpen ? <HiXMark /> : <HiBars3 />}
        </button>
      </nav>

      <div
        id="mobile-navigation"
        className={`absolute left-3 right-3 top-[5.25rem] origin-top rounded-2xl border border-white/10 bg-[#090f1d]/95 p-3 shadow-2xl backdrop-blur-xl transition-all duration-300 sm:left-5 sm:right-5 ${
          isOpen ? "visible scale-100 opacity-100" : "invisible scale-95 opacity-0"
        } lg:hidden`}
      >
        {navItems.map(({ label, id }) => (
          <a key={id} href={`#${id}`} onClick={() => setIsOpen(false)} className="flex items-center justify-between rounded-xl px-4 py-3.5 text-slate-300 hover:bg-white/5 hover:text-white">
            {label}<span className="text-cyan-300">0{navItems.findIndex((item) => item.id === id) + 1}</span>
          </a>
        ))}
        <div className="mt-2 grid grid-cols-2 gap-2 border-t border-white/10 pt-3">
          <a href={encodeURI(personalInfo.resume)} {...externalLinkProps} onClick={() => setIsOpen(false)} className="rounded-xl border border-white/10 px-4 py-3 text-center text-sm text-white">View résumé</a>
          <button type="button" onClick={handleContactClick} className="rounded-xl bg-white px-4 py-3 text-sm font-bold text-slate-950">Let&apos;s talk</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
