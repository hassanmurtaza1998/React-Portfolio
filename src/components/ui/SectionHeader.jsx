import Reveal from "./Reveal";

const SectionHeader = ({ eyebrow, title, highlight, description, align = "center" }) => (
  <Reveal className={`mb-12 md:mb-16 ${align === "left" ? "text-left" : "mx-auto max-w-3xl text-center"}`}>
    <span className="eyebrow mb-5">{eyebrow || title}</span>
    <h2 className="text-4xl font-semibold tracking-[-0.045em] text-white sm:text-5xl lg:text-6xl">
      {title} {highlight && <span className="gradient-text">{highlight}</span>}
    </h2>
    {description && <p className={`mt-5 text-base leading-8 text-slate-400 sm:text-lg ${align === "left" ? "max-w-2xl" : "mx-auto max-w-2xl"}`}>{description}</p>}
  </Reveal>
);

export default SectionHeader;
