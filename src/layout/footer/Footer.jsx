import {
  MailOutlined,
  GithubOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";
import { personalInfo } from "../../data/personalInfo";
import { useContactModal } from "../../context/ContactModalContext";
import { normalizeUrl, externalLinkProps } from "../../utils/links";

const Footer = () => {
  const { openContactModal } = useContactModal();

  return (
    <div className="mt-8 sm:mt-12 pt-8 sm:pt-12 px-4 sm:px-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
      <p className="text-gray-400">
        © 2024 {personalInfo.name}. All rights reserved.
      </p>
      <div className="flex items-center gap-6">
        <a
          href={normalizeUrl(personalInfo.contact.github)}
          {...externalLinkProps}
          className="text-gray-400 hover:text-sky-400 transition-colors"
          aria-label="GitHub"
        >
          <GithubOutlined className="text-2xl" />
        </a>
        <a
          href={normalizeUrl(personalInfo.contact.linkedin)}
          {...externalLinkProps}
          className="text-gray-400 hover:text-sky-400 transition-colors"
          aria-label="LinkedIn"
        >
          <LinkedinOutlined className="text-2xl" />
        </a>
        <button
          type="button"
          onClick={openContactModal}
          className="text-gray-400 hover:text-sky-400 transition-colors"
          aria-label="Contact"
        >
          <MailOutlined className="text-2xl" />
        </button>
      </div>
    </div>
  );
};

export default Footer;
