import SectionHeader from "../ui/SectionHeader";
import ProjectCard from "../ui/ProjectCard";
import { projects } from "../../data/projects";

const Projects = () => (
  <section id="projects" className="section-shell section-rule">
    <div className="site-container">
      <SectionHeader eyebrow="Selected work" title="Products engineered for" highlight="real-world impact." description="Nine production projects across commerce, real estate, ERP, AI, telecom, and healthtech—each solving a different systems challenge." />
      <div className="space-y-5">
        {projects.map((project, index) => <ProjectCard key={project.id} project={project} index={index} />)}
      </div>
    </div>
  </section>
);

export default Projects;
