import {
  MailOutlined,
  PhoneOutlined,
  GithubOutlined,
  LinkedinOutlined,
  FileTextOutlined,
} from "@ant-design/icons";
import { personalInfo } from "../../data/personalInfo";
import { useContactModal } from "../../context/ContactModalContext";
import { normalizeUrl, externalLinkProps } from "../../utils/links";

const Hero = () => {
  const { openContactModal } = useContactModal();

  return (
    <section
      id="hero"
      className="flex items-center py-5 sm:py-14 md:py-16 px-4 sm:px-6"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-center">
          <div className="text-center md:text-left">
            <div className="inline-block px-4 py-2 bg-sky-500/10 border border-sky-500/20 rounded-full mb-4 sm:mb-6">
              <span className="text-sky-400 text-sm font-medium">
                ● {personalInfo.availability}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-3 sm:mb-4 leading-tight text-white">
              {personalInfo.firstName}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600">
                {personalInfo.lastName}
              </span>
            </h1>

            <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-300 mb-3 sm:mb-4">
              {personalInfo.title}
            </p>

            <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-6 sm:mb-8 leading-relaxed max-w-xl mx-auto md:mx-0">
              {personalInfo.tagline}
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-3 sm:gap-4 mb-6 sm:mb-8">
              <button
                type="button"
                onClick={openContactModal}
                className="bg-gradient-to-r from-blue-600 to-sky-500 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-medium text-white hover:shadow-xl hover:shadow-sky-500/30 transition-all flex items-center gap-2"
              >
                <MailOutlined /> Get In Touch
              </button>
              <a
                href={encodeURI(personalInfo.resume)}
                {...externalLinkProps}
                className="bg-white/5 border border-white/10 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-medium text-white hover:bg-white/10 hover:border-sky-500/30 transition-all flex items-center gap-2"
              >
                <FileTextOutlined /> View CV
              </a>
              <a
                href={normalizeUrl(personalInfo.contact.github)}
                {...externalLinkProps}
                className="bg-white/5 border border-white/10 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-medium text-white hover:bg-white/10 transition-all flex items-center gap-2"
              >
                <GithubOutlined /> View Work
              </a>
            </div>

            <div className="flex items-center justify-center md:justify-start gap-5 sm:gap-6 text-gray-400">
              <a
                href={normalizeUrl(personalInfo.contact.linkedin)}
                {...externalLinkProps}
                className="hover:text-sky-400 transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinOutlined className="text-2xl" />
              </a>
              <a
                href={normalizeUrl(personalInfo.contact.github)}
                {...externalLinkProps}
                className="hover:text-sky-400 transition-colors"
                aria-label="GitHub"
              >
                <GithubOutlined className="text-2xl" />
              </a>
              <button
                type="button"
                onClick={openContactModal}
                className="hover:text-sky-400 transition-colors"
                aria-label="Email"
              >
                <MailOutlined className="text-2xl" />
              </button>
              <button
                type="button"
                onClick={openContactModal}
                className="hover:text-sky-400 transition-colors"
                aria-label="Phone"
              >
                <PhoneOutlined className="text-2xl" />
              </button>
            </div>
          </div>

          <div className="w-full flex justify-center md:justify-end">
            <div className="relative w-56 sm:w-64 md:w-72 lg:w-80">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-sky-500 to-purple-600 rounded-full blur-3xl opacity-30 animate-pulse" />

              <div className="relative p-1 bg-gradient-to-br from-sky-400 via-blue-500 to-purple-600 rounded-3xl shadow-2xl shadow-sky-500/50">
                <div className="bg-gradient-to-br from-[#0a0f1e] to-[#1a1f2e] rounded-3xl p-2">
                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-sky-400 to-blue-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
                    <div className="relative">
                      <img
                        src={personalInfo.image}
                        alt={personalInfo.name}
                        className="relative w-full h-auto rounded-2xl shadow-2xl ring-2 ring-white/10 group-hover:ring-sky-400/50 transition-all duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                  </div>

                  <div className="absolute top-0 left-0 w-16 sm:w-20 h-16 sm:h-20 border-t-2 border-l-2 border-sky-400 rounded-tl-3xl"></div>
                  <div className="absolute bottom-0 right-0 w-16 sm:w-20 h-16 sm:h-20 border-b-2 border-r-2 border-purple-500 rounded-br-3xl"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
