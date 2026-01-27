import {
  MailOutlined,
  PhoneOutlined,
  GithubOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";
import { personalInfo } from "../../data/personalInfo";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-6 pt-20"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-block px-4 py-2 bg-sky-500/10 border border-sky-500/20 rounded-full mb-6">
            <span className="text-sky-400 text-sm font-medium">
              ● {personalInfo.availability}
            </span>
          </div>

          <h1 className="text-6xl md:text-7xl font-bold mb-4 leading-tight">
            {personalInfo.firstName}
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600">
              {personalInfo.lastName}
            </span>
          </h1>

          <p className="text-3xl font-semibold text-gray-300 mb-4">
            {personalInfo.title}
          </p>

          <p className="text-xl text-gray-400 mb-8 leading-relaxed">
            {personalInfo.tagline}
          </p>

          <div className="flex flex-wrap gap-4 mb-8">
            <a
              href={`mailto:${personalInfo.contact.email}`}
              className="bg-gradient-to-r from-blue-600 to-sky-500 px-8 py-4 rounded-lg font-medium hover:shadow-xl hover:shadow-sky-500/30 transition-all flex items-center gap-2"
            >
              <MailOutlined /> Get In Touch
            </a>
            <a
              href={personalInfo.contact.github}
              className="bg-white/5 border border-white/10 px-8 py-4 rounded-lg font-medium hover:bg-white/10 transition-all flex items-center gap-2"
            >
              <GithubOutlined /> View Work
            </a>
          </div>

          <div className="flex items-center gap-6 text-gray-400">
            <a
              href={personalInfo.contact.linkedin}
              className="hover:text-sky-400 transition-colors"
            >
              <LinkedinOutlined className="text-2xl" />
            </a>
            <a
              href={personalInfo.contact.github}
              className="hover:text-sky-400 transition-colors"
            >
              <GithubOutlined className="text-2xl" />
            </a>
            <a
              href={`mailto:${personalInfo.contact.email}`}
              className="hover:text-sky-400 transition-colors"
            >
              <MailOutlined className="text-2xl" />
            </a>
            <a
              href={`tel:${personalInfo.contact.phone}`}
              className="hover:text-sky-400 transition-colors"
            >
              <PhoneOutlined className="text-2xl" />
            </a>
          </div>
        </div>

        <div className="w-ful flex justify-center">
          <div className="relative w-80 ">
            {/* Animated glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-sky-500 to-purple-600 rounded-full blur-3xl opacity-30 animate-pulse" />

            {/* Outer border container with gradient */}
            <div className="relative p-1 bg-gradient-to-br from-sky-400 via-blue-500 to-purple-600 rounded-3xl shadow-2xl shadow-sky-500/50">
              {/* Inner container */}
              <div className="bg-gradient-to-br from-[#0a0f1e] to-[#1a1f2e] rounded-3xl p-2">
                {/* Image container with double border effect */}
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-sky-400 to-blue-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
                  <div className="relative">
                    <img
                      src={personalInfo.image}
                      alt={personalInfo.name}
                      className="relative w-full h-auto rounded-2xl shadow-2xl ring-2 ring-white/10 group-hover:ring-sky-400/50 transition-all duration-300"
                    />
                    {/* Shine effect overlay */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>

                {/* Decorative corner accents */}
                <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-sky-400 rounded-tl-3xl"></div>
                <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-purple-500 rounded-br-3xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
