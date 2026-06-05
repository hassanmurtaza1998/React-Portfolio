import {
  ApiOutlined,
  ThunderboltOutlined,
  DatabaseOutlined,
  CloudOutlined,
  SafetyOutlined,
  RocketOutlined,
} from "@ant-design/icons";
import SectionHeader from "../ui/SectionHeader";
import SkillCard from "../ui/SkillCard";
import { expertise } from "../../data/expertise";

const iconMap = {
  ApiOutlined: <ApiOutlined />,
  ThunderboltOutlined: <ThunderboltOutlined />,
  DatabaseOutlined: <DatabaseOutlined />,
  CloudOutlined: <CloudOutlined />,
  SafetyOutlined: <SafetyOutlined />,
  RocketOutlined: <RocketOutlined />,
};

const Expertise = () => {
  return (
    <section id="expertise" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-white/[0.02]">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          title="Core"
          highlight="Expertise"
          description="Specialized skills and technologies I leverage to build exceptional solutions"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {expertise.map((skill) => (
            <SkillCard
              key={skill.id}
              skill={skill}
              icon={iconMap[skill.iconName]}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
