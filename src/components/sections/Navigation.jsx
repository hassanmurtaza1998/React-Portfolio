import { personalInfo } from "../../data/personalInfo";

const Navigation = ({ activeSection }) => {
  const navItems = ["About", "Expertise", "Projects", "Experience"];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0f1e]/80 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold">
          <span className="text-white">{personalInfo.firstName}</span>
          <span className="text-sky-400"> {personalInfo.lastName}</span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`text-sm font-medium transition-colors ${
                activeSection === item.toLowerCase()
                  ? "text-sky-400"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {item}
            </a>
          ))}
          <a
            href={`mailto:${personalInfo.contact.email}`}
            className="bg-gradient-to-r from-blue-600 to-sky-500 px-6 py-2 rounded-lg text-sm font-medium hover:shadow-lg hover:shadow-sky-500/30 transition-all"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
