import { useState, useEffect, useRef, useMemo } from "react";
import {
  GlobalOutlined,
  LinkOutlined,
  LoadingOutlined,
} from "@ant-design/icons";

const getHostname = (url) => {
  try {
    return new URL(url).hostname.replace("www.", "");
  } catch {
    return "Live Site";
  }
};

const buildMicrolinkUrl = (url, { waitUntil = "networkidle2", waitFor } = {}) => {
  const params = new URLSearchParams({
    url,
    screenshot: "true",
    meta: "false",
    embed: "screenshot.url",
    "viewport.width": "1280",
    "viewport.height": "720",
    waitUntil,
  });

  if (waitFor) params.set("waitFor", String(waitFor));

  return `https://api.microlink.io/?${params.toString()}`;
};

const getPreviewSources = (url) => [
  buildMicrolinkUrl(url, { waitUntil: "networkidle2" }),
  buildMicrolinkUrl(url, { waitUntil: "load", waitFor: 5000 }),
  buildMicrolinkUrl(url, { waitUntil: "domcontentloaded", waitFor: 8000 }),
];

const ProjectPreview = ({ url, name, projectId = 1, previewImage }) => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [attempt, setAttempt] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const hostname = getHostname(url);
  const sources = useMemo(() => getPreviewSources(url), [url]);

  const imageSrc = previewImage || (isVisible ? sources[attempt] : null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let timer;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const delay = (projectId - 1) * 800;
          timer = setTimeout(() => setIsVisible(true), delay);
          observer.disconnect();
        }
      },
      { rootMargin: "120px" }
    );

    observer.observe(container);

    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, [projectId]);

  useEffect(() => {
    if (isVisible) {
      setAttempt(0);
      setLoading(true);
      setError(false);
    }
  }, [isVisible, url]);

  const handleImageLoad = () => {
    setLoading(false);
    setError(false);
  };

  const handleImageError = () => {
    if (attempt < sources.length - 1) {
      setAttempt((prev) => prev + 1);
      setLoading(true);
      return;
    }

    setLoading(false);
    setError(true);
  };

  return (
    <div
      ref={containerRef}
      className="relative shrink-0 w-full sm:w-44 md:w-52 lg:w-56 h-32 sm:h-36 rounded-xl overflow-hidden border border-white/10 bg-[#0d1428] shadow-lg shadow-black/20 group-hover:border-sky-500/40 group-hover:shadow-sky-500/20 transition-all duration-300"
    >
      {loading && !error && (
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-2 bg-[#0d1428]">
          <LoadingOutlined className="text-2xl text-sky-400 animate-spin" />
          <span className="text-[10px] text-gray-400">Loading preview...</span>
        </div>
      )}

      {imageSrc && !error && (
        <img
          key={`${imageSrc}-${attempt}`}
          src={imageSrc}
          alt={`${name} website preview`}
          className={`w-full h-full object-cover object-top transition-all duration-500 ${
            loading ? "opacity-0 scale-100" : "opacity-100 scale-[1.02] group-hover:scale-105"
          }`}
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          onLoad={handleImageLoad}
          onError={handleImageError}
        />
      )}

      {error && (
        <div className="w-full h-full flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-sky-500/10 via-[#0d1428] to-blue-600/10 px-4">
          <GlobalOutlined className="text-3xl text-sky-400" />
          <span className="text-xs text-gray-300 text-center">{hostname}</span>
          <span className="text-[10px] text-gray-500">Click card to visit</span>
        </div>
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1e]/90 via-transparent to-transparent pointer-events-none z-10" />

      <div className="absolute top-2 left-2 z-10 flex items-center gap-1.5 bg-black/50 backdrop-blur-sm border border-white/10 rounded-full px-2.5 py-1 pointer-events-none">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
        </span>
        <span className="text-[10px] sm:text-xs font-medium text-white">
          Live
        </span>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-10 p-2.5 flex items-center justify-between pointer-events-none">
        <span className="text-[10px] sm:text-xs text-gray-300 truncate max-w-[70%]">
          {hostname}
        </span>
        <LinkOutlined className="text-sky-400 text-sm shrink-0" />
      </div>

      <div className="absolute inset-0 z-10 bg-sky-500/0 group-hover:bg-sky-500/15 transition-colors duration-300 flex items-center justify-center pointer-events-none">
        <span className="opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 bg-sky-500/90 text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg">
          Visit Site →
        </span>
      </div>
    </div>
  );
};

export default ProjectPreview;
