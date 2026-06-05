import { useEffect, useState } from "react";
import {
  MailOutlined,
  PhoneOutlined,
  GithubOutlined,
  LinkedinOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import { personalInfo } from "../../data/personalInfo";
import { normalizeUrl, externalLinkProps } from "../../utils/links";

const getGmailUrl = (email) =>
  `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}`;

const ContactModal = ({ isOpen, onClose }) => {
  const [phoneCopied, setPhoneCopied] = useState(false);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") onClose();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!isOpen) setPhoneCopied(false);
  }, [isOpen]);

  const handleCopyPhone = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.contact.phone);
      setPhoneCopied(true);
      setTimeout(() => setPhoneCopied(false), 2000);
    } catch {
      setPhoneCopied(false);
    }
  };

  if (!isOpen) return null;

  const contactItems = [
    {
      icon: <MailOutlined className="text-xl text-sky-400" />,
      label: "Email",
      value: personalInfo.contact.email,
      href: getGmailUrl(personalInfo.contact.email),
      external: true,
    },
    {
      icon: <PhoneOutlined className="text-xl text-sky-400" />,
      label: "Phone",
      value: personalInfo.contact.phone,
      copyable: true,
    },
    {
      icon: <GithubOutlined className="text-xl text-sky-400" />,
      label: "GitHub",
      value: "github.com/hassanmurtaza1998",
      href: normalizeUrl(personalInfo.contact.github),
      external: true,
    },
    {
      icon: <LinkedinOutlined className="text-xl text-sky-400" />,
      label: "LinkedIn",
      value: "linkedin.com/in/hassan-murtaza-dev",
      href: normalizeUrl(personalInfo.contact.linkedin),
      external: true,
    },
  ];

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      <div
        className="relative w-full max-w-md bg-gradient-to-br from-[#111827] to-[#0a0f1e] border border-white/10 rounded-2xl shadow-2xl shadow-sky-500/10 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-sky-500 to-purple-600" />

        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-10"
          aria-label="Close contact modal"
        >
          <CloseOutlined className="text-lg" />
        </button>

        <div className="p-6 sm:p-8">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-white mb-1">
              Get In Touch
            </h3>
            <p className="text-gray-400 text-sm">
              Feel free to reach out — I'd love to hear from you!
            </p>
          </div>

          <div className="space-y-3">
            {contactItems.map((item) => {
              const content = (
                <>
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/5 border border-white/10 shrink-0">
                    {item.icon}
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-gray-500 mb-0.5">{item.label}</p>
                    <p className="text-sm text-gray-200 truncate">{item.value}</p>
                  </div>
                </>
              );

              if (item.copyable) {
                return (
                  <button
                    key={item.label}
                    type="button"
                    onClick={handleCopyPhone}
                    className="relative w-full flex items-center gap-4 p-3 rounded-xl bg-white/5 border border-white/10 hover:border-sky-500/30 hover:bg-white/10 transition-all text-left"
                  >
                    {content}
                    {phoneCopied && (
                      <span className="absolute -top-2 right-3 bg-sky-500 text-white text-xs font-medium px-2.5 py-1 rounded-md shadow-lg">
                        Copied!
                      </span>
                    )}
                  </button>
                );
              }

              return (
                <a
                  key={item.label}
                  href={item.href}
                  {...(item.external ? externalLinkProps : {})}
                  className="flex items-center gap-4 p-3 rounded-xl bg-white/5 border border-white/10 hover:border-sky-500/30 hover:bg-white/10 transition-all group"
                >
                  {content}
                </a>
              );
            })}
          </div>

          <div className="mt-6">
            <a
              href={getGmailUrl(personalInfo.contact.email)}
              {...externalLinkProps}
              className="block w-full bg-gradient-to-r from-blue-600 to-sky-500 px-4 py-3 rounded-xl font-medium text-white text-sm text-center hover:shadow-lg hover:shadow-sky-500/30 transition-all"
            >
              Send Email
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
