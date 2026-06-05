const SectionHeader = ({ title, highlight, description }) => {
  return (
    <div className="text-center mb-10 sm:mb-12 md:mb-16">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-white">
        {title} {highlight && <span className="text-sky-400">{highlight}</span>}
      </h2>
      {description && (
        <p className="text-base sm:text-lg md:text-xl text-gray-400 px-2">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
