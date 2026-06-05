const CertificationCard = ({ certification }) => {
  return (
    <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 sm:p-6 hover:border-sky-500/30 transition-all">
      <h4 className="font-bold text-base sm:text-lg mb-1 text-white">{certification.name}</h4>
      <p className="text-gray-400 text-sm">{certification.org}</p>
    </div>
  );
};

export default CertificationCard;
