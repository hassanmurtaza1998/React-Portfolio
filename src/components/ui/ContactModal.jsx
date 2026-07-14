import { useCallback, useEffect, useRef, useState } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { HiOutlineCheck, HiOutlineEnvelope, HiOutlinePhone, HiXMark } from "react-icons/hi2";
import { personalInfo } from "../../data/personalInfo";
import { normalizeUrl, externalLinkProps } from "../../utils/links";

const ContactModal = ({ isOpen, onClose }) => {
  const [phoneCopied, setPhoneCopied] = useState(false);
  const dialogRef = useRef(null);
  const closeButtonRef = useRef(null);

  const closeModal = useCallback(() => {
    setPhoneCopied(false);
    onClose();
  }, [onClose]);

  useEffect(() => {
    if (!isOpen) return undefined;
    const previouslyFocused = document.activeElement;
    const dialog = dialogRef.current;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === "Escape") closeModal();
      if (event.key !== "Tab" || !dialog) return;
      const focusable = [...dialog.querySelectorAll('a[href], button:not([disabled])')];
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
      previouslyFocused?.focus();
    };
  }, [isOpen, closeModal]);

  const handleCopyPhone = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.contact.phone);
      setPhoneCopied(true);
    } catch {
      setPhoneCopied(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[120] grid place-items-center p-4" onMouseDown={closeModal}>
      <div className="absolute inset-0 -z-10 bg-[#02050b]/80 backdrop-blur-md" />
      <div ref={dialogRef} role="dialog" aria-modal="true" aria-labelledby="contact-dialog-title" onMouseDown={(event) => event.stopPropagation()} className="glass-panel relative w-full max-w-lg overflow-hidden rounded-3xl p-6 shadow-[0_40px_120px_rgba(0,0,0,.7)] sm:p-8">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent" />
        <button ref={closeButtonRef} type="button" onClick={closeModal} className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-xl border border-white/10 text-lg text-slate-400 transition hover:bg-white/5 hover:text-white" aria-label="Close contact dialog"><HiXMark /></button>
        <div className="pr-12">
          <span className="eyebrow mb-4">Contact</span>
          <h2 id="contact-dialog-title" className="text-3xl font-semibold tracking-tight text-white">Let&apos;s start a conversation.</h2>
          <p className="mt-3 text-sm leading-6 text-slate-400">Choose the channel that works best for you. I&apos;ll get back to you as soon as I can.</p>
        </div>

        <div className="mt-7 space-y-3">
          <a href={`mailto:${personalInfo.contact.email}`} className="group flex items-center gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.03] p-4 transition hover:border-cyan-300/20 hover:bg-white/[0.05]">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-cyan-300/10 text-lg text-cyan-200"><HiOutlineEnvelope /></span><span className="min-w-0"><span className="block text-xs text-slate-500">Email</span><span className="mt-1 block truncate text-sm text-white">{personalInfo.contact.email}</span></span>
          </a>
          <button type="button" onClick={handleCopyPhone} className="flex w-full items-center gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.03] p-4 text-left transition hover:border-cyan-300/20 hover:bg-white/[0.05]">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-blue-300/10 text-lg text-blue-200"><HiOutlinePhone /></span><span className="min-w-0 flex-1"><span className="block text-xs text-slate-500">Phone · click to copy</span><span className="mt-1 block text-sm text-white">{personalInfo.contact.phone}</span></span>{phoneCopied && <span className="inline-flex items-center gap-1 text-xs text-emerald-300"><HiOutlineCheck /> Copied</span>}
          </button>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-3">
          <a href={normalizeUrl(personalInfo.contact.github)} {...externalLinkProps} className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 py-3 text-sm text-slate-300 transition hover:text-white"><FaGithub /> GitHub</a>
          <a href={normalizeUrl(personalInfo.contact.linkedin)} {...externalLinkProps} className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 py-3 text-sm text-slate-300 transition hover:text-white"><FaLinkedinIn /> LinkedIn</a>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
