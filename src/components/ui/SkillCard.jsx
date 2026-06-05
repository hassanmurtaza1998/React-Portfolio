const SkillCard = ({ skill, icon }) => {
  return (
    <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 sm:p-8 hover:border-sky-500/30 hover:shadow-xl hover:shadow-sky-500/10 transition-all">
      <div className="text-3xl sm:text-4xl text-sky-400 mb-4 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-lg sm:text-xl font-bold mb-2 text-white">{skill.name}</h3>
      <p className="text-gray-400 text-sm">{skill.description}</p>
    </div>
  );
};

export default SkillCard;
