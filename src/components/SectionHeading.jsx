import Reveal from "./Reveal";

export default function SectionHeading({ eyebrow, title, subtitle }) {
  return (
    <Reveal className="mb-14 text-center">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-purple-400">
        {eyebrow}
      </p>
      <h2 className="font-display text-4xl font-bold text-white md:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mx-auto mt-4 max-w-2xl text-slate-400">{subtitle}</p>
      )}
      <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500" />
    </Reveal>
  );
}
