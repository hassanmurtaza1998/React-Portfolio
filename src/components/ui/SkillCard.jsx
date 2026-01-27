const SkillCard = ({ skill, icon }) => {
  return (
    <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-sky-500/30 hover:shadow-xl hover:shadow-sky-500/10 transition-all">
      <div className="text-4xl text-sky-400 mb-4 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{skill.name}</h3>
      <p className="text-gray-400 text-sm mb-4">{skill.description}</p>

      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-gray-400">Proficiency</span>
          <span className="text-sky-400 font-semibold">{skill.level}%</span>
        </div>
        <div className="w-full bg-white/5 rounded-full h-2 overflow-hidden">
          <div
            className="bg-gradient-to-r from-blue-600 to-sky-500 h-full rounded-full transition-all duration-1000"
            style={{ width: `${skill.level}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
