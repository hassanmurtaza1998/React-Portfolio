const AmbientBackground = () => (
  <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
    <div className="ambient-orb -left-32 top-24 h-80 w-80 bg-blue-600/[0.08] blur-3xl" />
    <div className="ambient-orb -right-40 top-[38%] h-96 w-96 bg-violet-600/[0.07] blur-3xl [animation-delay:-5s]" />
    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.018)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.018)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />
  </div>
);

export default AmbientBackground;
