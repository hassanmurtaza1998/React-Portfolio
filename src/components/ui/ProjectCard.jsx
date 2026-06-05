import { CheckCircleOutlined } from "@ant-design/icons";
import ProjectPreview from "./ProjectPreview";

const ProjectCard = ({ project }) => {
  const handleOpen = () => {
    if (project.url) {
      window.open(project.url, "_blank", "noopener,noreferrer");
    }
  };

  const handleKeyDown = (event) => {
    if (project.url && (event.key === "Enter" || event.key === " ")) {
      event.preventDefault();
      handleOpen();
    }
  };

  return (
    <div
      onClick={handleOpen}
      onKeyDown={handleKeyDown}
      role={project.url ? "link" : undefined}
      tabIndex={project.url ? 0 : undefined}
      className="group block bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 sm:p-8 hover:border-sky-500/30 hover:shadow-2xl hover:shadow-sky-500/10 transition-all cursor-pointer"
      aria-label={project.url ? `Open ${project.name}` : undefined}
    >
      <div className="flex flex-col sm:flex-row sm:items-start gap-5 sm:gap-6 mb-5 sm:mb-6">
        <div className="flex-1 min-w-0 order-2 sm:order-1">
          <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-sky-400 transition-colors mb-3">
            {project.name}
          </h3>

          <span className="inline-flex items-center bg-sky-500/15 border border-sky-500/30 text-sky-300 px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium mb-4">
            {project.type}
          </span>

          <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
            {project.description}
          </p>
        </div>

        {project.url && (
          <div className="shrink-0 order-1 sm:order-2 self-end sm:self-start">
            <ProjectPreview
              url={project.url}
              name={project.name}
              projectId={project.id}
              previewImage={project.previewImage}
            />
          </div>
        )}
      </div>

      <ul className="space-y-2.5 mb-5 sm:mb-6">
        {project.highlights.map((highlight, i) => (
          <li
            key={i}
            className="flex items-start gap-2.5 text-sm text-gray-300 leading-relaxed"
          >
            <CheckCircleOutlined className="text-green-400 mt-0.5 shrink-0 text-base" />
            <span>{highlight}</span>
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-2 mb-5 sm:mb-6">
        {project.tech.map((tech, i) => (
          <span
            key={i}
            className="bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg text-xs sm:text-sm text-gray-300"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
        {Object.entries(project.metrics).map(([key, value], i) => (
          <div
            key={i}
            className="bg-white/5 border border-white/10 rounded-lg p-4 text-center"
          >
            <div className="text-lg sm:text-xl font-bold text-sky-400 mb-1">
              {value}
            </div>
            <div className="text-xs text-gray-400 capitalize">{key}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
