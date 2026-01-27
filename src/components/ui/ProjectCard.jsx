import { CheckCircleOutlined } from "@ant-design/icons";

const ProjectCard = ({ project }) => {
  return (
    <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-sky-500/30 hover:shadow-2xl hover:shadow-sky-500/10 transition-all">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-2xl font-bold mb-2 group-hover:text-sky-400 transition-colors">
                {project.name}
              </h3>
              <span className="inline-block bg-sky-500/10 border border-sky-500/20 text-sky-400 px-3 py-1 rounded-full text-sm">
                {project.type}
              </span>
            </div>
          </div>

          <p className="text-gray-400 mb-4 leading-relaxed">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-4">
            {project.highlights.map((highlight, i) => (
              <span
                key={i}
                className="bg-green-500/10 border border-green-500/20 text-green-400 px-3 py-1 rounded-full text-xs"
              >
                <CheckCircleOutlined className="mr-1" />
                {highlight}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((tech, i) => (
              <span
                key={i}
                className="bg-white/5 border border-white/10 px-3 py-1 rounded-lg text-sm text-gray-300"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-4">
            {Object.entries(project.metrics).map(([key, value], i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 rounded-lg p-3"
              >
                <div className="text-xl font-bold text-sky-400">{value}</div>
                <div className="text-xs text-gray-400 capitalize">{key}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
