import SectionHeader from "../ui/SectionHeader";
import ProjectCard from "../ui/ProjectCard";
import { projects } from "../../data/projects";

const Projects = () => {
  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          title="Featured"
          highlight="Projects"
          description="A selection of high-impact projects showcasing technical excellence"
        />

        <div className="space-y-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
