const ExperienceButton = ({ experience, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`w-full text-left p-4 sm:p-6 rounded-2xl transition-all ${
        isActive
          ? "bg-gradient-to-r from-blue-600 to-sky-500 shadow-xl shadow-sky-500/20 scale-[1.02] sm:scale-105 text-white"
          : "bg-white/5 border border-white/10 hover:bg-white/10 text-white"
      }`}
    >
      <div className="flex items-start justify-between mb-2 gap-2">
        <h3 className="text-base sm:text-xl font-bold">{experience.role}</h3>
        {isActive && experience.status && (
          <span className="bg-white/20 px-3 py-1 rounded-full text-xs animate-pulse">
            {experience.status}
          </span>
        )}
      </div>
      <p className="text-sm opacity-90 mb-1">{experience.company}</p>
      <div className="flex items-center gap-2 text-xs opacity-75">
        <span>{experience.period}</span>
        <span>•</span>
        <span>{experience.type}</span>
      </div>
    </button>
  );
};

export default ExperienceButton;
