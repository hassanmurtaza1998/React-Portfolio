import { useEffect, useRef } from "react";

const ScrollProgress = () => {
  const progressRef = useRef(null);

  useEffect(() => {
    let frameId;
    const updateProgress = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = maxScroll > 0 ? window.scrollY / maxScroll : 0;
      if (progressRef.current) progressRef.current.style.transform = `scaleX(${progress})`;
      frameId = undefined;
    };
    const handleScroll = () => {
      if (!frameId) frameId = requestAnimationFrame(updateProgress);
    };
    updateProgress();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (frameId) cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <div className="fixed inset-x-0 top-0 z-[100] h-0.5 bg-transparent" aria-hidden="true">
      <div ref={progressRef} className="h-full origin-left scale-x-0 bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400" />
    </div>
  );
};

export default ScrollProgress;
