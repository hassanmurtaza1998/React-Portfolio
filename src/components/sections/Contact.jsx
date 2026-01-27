import {
  MailOutlined,
  PhoneOutlined,
  GithubOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";
import { personalInfo } from "../../data/personalInfo";

const Contact = () => {
  return (
    <section className="py-32 px-6 bg-white/[0.02]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl md:text-6xl font-bold mb-6">
          Let's Build Something
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600">
            Extraordinary Together
          </span>
        </h2>
        <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
          I'm always interested in hearing about new opportunities, challenging
          projects, and innovative ideas. Let's connect and explore how we can
          work together.
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          <a
            href={`mailto:${personalInfo.contact.email}`}
            className="bg-gradient-to-r from-blue-600 to-sky-500 px-10 py-5 rounded-xl font-semibold text-lg hover:shadow-2xl hover:shadow-sky-500/30 transition-all flex items-center gap-3"
          >
            <MailOutlined className="text-xl" /> Email Me
          </a>
          <a
            href={`tel:${personalInfo.contact.phone}`}
            className="bg-white/5 border border-white/10 px-10 py-5 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all flex items-center gap-3"
          >
            <PhoneOutlined className="text-xl" /> Call Me
          </a>
        </div>

        <div className="mt-12 pt-12 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-gray-400">
            © 2024 {personalInfo.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href={personalInfo.contact.github}
              className="text-gray-400 hover:text-sky-400 transition-colors"
            >
              <GithubOutlined className="text-2xl" />
            </a>
            <a
              href={personalInfo.contact.linkedin}
              className="text-gray-400 hover:text-sky-400 transition-colors"
            >
              <LinkedinOutlined className="text-2xl" />
            </a>
            <a
              href={`mailto:${personalInfo.contact.email}`}
              className="text-gray-400 hover:text-sky-400 transition-colors"
            >
              <MailOutlined className="text-2xl" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
