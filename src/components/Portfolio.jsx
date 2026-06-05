import { useState, useEffect } from "react";
import Navigation from "./sections/Navigation";
import Hero from "./sections/Hero";
import About from "./sections/About";
import TechnicalSkills from "./sections/TechnicalSkills";
import Expertise from "./sections/Expertise";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Education from "./sections/Education";
import Contact from "./sections/Contact";

const Portfolio = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      const sections = ["hero", "about", "skills", "expertise", "projects", "experience"];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (


      <>
        <Hero />
        <About />
        <TechnicalSkills />
        <Expertise />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </>

    
  );
};

export default Portfolio;
