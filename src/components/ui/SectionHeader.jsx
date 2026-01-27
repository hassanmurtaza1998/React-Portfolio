const SectionHeader = ({ title, highlight, description }) => {
  return (
    <div className="text-center mb-16">
      <h2 className="text-5xl font-bold mb-4">
        {title} {highlight && <span className="text-sky-400">{highlight}</span>}
      </h2>
      {description && <p className="text-xl text-gray-400">{description}</p>}
    </div>
  );
};

export default SectionHeader;
