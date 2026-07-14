import { useEffect, useRef, useState } from "react";

const Reveal = ({ children, className = "", delay = 0 }) => {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -8%", threshold: 0.08 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={elementRef} className={`reveal ${isVisible ? "is-visible" : ""} ${className}`} style={{ "--reveal-delay": `${delay}ms` }}>
      {children}
    </div>
  );
};

export default Reveal;
