import {
  TrophyOutlined,
  CheckCircleOutlined,
  CodeOutlined,
} from "@ant-design/icons";

const ExperienceDetail = ({ experience }) => {
  return (
    <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 min-h-[600px]">
      <div className="flex items-start justify-between mb-8">
        <div>
          <h3 className="text-3xl font-bold mb-2">{experience.role}</h3>
          <p className="text-xl text-sky-400 mb-2">{experience.company}</p>
          <div className="flex flex-wrap items-center gap-4 text-gray-400">
            <span className="flex items-center gap-2">
              📅 {experience.period}
            </span>
            <span className="flex items-center gap-2">
              📍 {experience.location}
            </span>
            <span className="bg-sky-500/10 border border-sky-500/20 text-sky-400 px-3 py-1 rounded-full text-sm">
              {experience.type}
            </span>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
          <TrophyOutlined className="text-sky-400" /> Key Achievements
        </h4>
        <ul className="space-y-4">
          {experience.achievements.map((achievement, idx) => (
            <li key={idx} className="flex gap-4 items-start">
              <span className="text-sky-400 text-2xl mt-1">
                <CheckCircleOutlined />
              </span>
              <span className="text-lg text-gray-300 leading-relaxed">
                {achievement}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
          <CodeOutlined className="text-sky-400" /> Technologies Used
        </h4>
        <div className="flex flex-wrap gap-3">
          {experience.technologies.map((tech, idx) => (
            <span
              key={idx}
              className="bg-white/5 border border-white/10 px-4 py-2 rounded-lg text-sm text-gray-300 hover:bg-white/10 hover:border-sky-500/30 transition-all cursor-pointer"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceDetail;
