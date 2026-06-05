import { useState } from "react";
import { personalInfo } from "../../data/personalInfo";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { useContactModal } from "../../context/ContactModalContext";
import { externalLinkProps } from "../../utils/links";

const Header = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { openContactModal } = useContactModal();
  const navItems = ["About", "Skills", "Expertise", "Projects", "Experience"];

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleContactClick = () => {
    setIsOpen(false);
    openContactModal();
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0f1e]/80 backdrop-blur-xl">
      <div className="max-w-full lg:mx-20 mx-4 sm:mx-6 px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
        <div className="text-xl sm:text-2xl font-bold cursor-default">
          <span className="text-white">{personalInfo.firstName}</span>
          <span className="text-sky-400"> {personalInfo.lastName}</span>
        </div>

        <div className="hidden lg:flex items-center gap-8">
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
            href={encodeURI(personalInfo.resume)}
            {...externalLinkProps}
            className="text-sm font-medium text-gray-300 hover:text-white border border-white/10 px-5 py-2 rounded-lg hover:border-sky-500/30 transition-all"
          >
            View CV
          </a>

          <button
            type="button"
            onClick={openContactModal}
            className="text-sm font-medium transition-all bg-gradient-to-r from-blue-600 to-sky-500 px-6 py-2 rounded-lg text-white hover:shadow-lg hover:shadow-sky-500/30"
          >
            Contact
          </button>
        </div>

        <button
          onClick={toggleMenu}
          className="lg:hidden text-white text-3xl focus:outline-none"
        >
          {isOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      <div
        className={`fixed top-0 right-0 h-screen w-[280px] bg-[#0f172a] shadow-2xl transform transition-transform duration-300 ease-in-out lg:hidden z-[60] ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-8">
          <button onClick={toggleMenu} className="text-white text-3xl">
            <HiX />
          </button>
        </div>

        <div className="flex flex-col items-start gap-8 px-10">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={toggleMenu}
              className={`text-lg font-medium ${
                activeSection === item.toLowerCase() ? "text-sky-400" : "text-gray-300"
              }`}
            >
              {item}
            </a>
          ))}
          <a
            href={encodeURI(personalInfo.resume)}
            {...externalLinkProps}
            onClick={toggleMenu}
            className="text-lg font-medium text-gray-300 hover:text-white"
          >
            View CV
          </a>
          <button
            type="button"
            onClick={handleContactClick}
            className="text-lg font-medium text-sky-400 border-t border-white/10 w-full pt-4 text-left"
          >
            Contact
          </button>
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 lg:hidden z-[50]"
          onClick={toggleMenu}
        />
      )}
    </nav>
  );
};

export default Header;
