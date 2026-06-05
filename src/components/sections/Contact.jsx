import {
  MailOutlined,
  PhoneOutlined,
  GithubOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";
import { personalInfo } from "../../data/personalInfo";
import { useContactModal } from "../../context/ContactModalContext";
import { normalizeUrl, externalLinkProps } from "../../utils/links";

const Contact = () => {
  const { openContactModal } = useContactModal();

  return (
    <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-white/[0.02]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-white">
          Let's Build Something
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600">
            Extraordinary Together
          </span>
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-8 sm:mb-12 max-w-2xl mx-auto px-2">
          I'm always interested in hearing about new opportunities, challenging
          projects, and innovative ideas. Let's connect and explore how we can
          work together.
        </p>

        <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
          <button
            type="button"
            onClick={openContactModal}
            className="bg-gradient-to-r from-blue-600 to-sky-500 px-6 sm:px-10 py-4 sm:py-5 rounded-xl font-semibold text-base sm:text-lg text-white hover:shadow-2xl hover:shadow-sky-500/30 transition-all flex items-center gap-3"
          >
            <MailOutlined className="text-xl" /> Email Me
          </button>
          <button
            type="button"
            onClick={openContactModal}
            className="bg-white/5 border border-white/10 px-6 sm:px-10 py-4 sm:py-5 rounded-xl font-semibold text-base sm:text-lg text-white hover:bg-white/10 transition-all flex items-center gap-3"
          >
            <PhoneOutlined className="text-xl" /> Call Me
          </button>
        </div>

        <div className="mt-12 pt-12 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
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
      </div>
    </section>
  );
};

export default Contact;
