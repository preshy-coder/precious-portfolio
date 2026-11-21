import { motion } from "framer-motion";
import Typewriter from "./Typewriter";
import Icon from "./Icons";
import { profile } from "../data";

const stats = [
  { value: "Many+", label: "Projects & counting" },
  { value: "6+", label: "Languages & frameworks" },
  { value: "3", label: "Databases" },
];

export default function Home() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pb-16 pt-28"
    >
      {/* Background: grid + floating gradient orbs */}
      <div className="bg-grid pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute -left-24 top-24 h-80 w-80 animate-float rounded-full bg-purple-600/30 blur-[110px]" />
      <div className="pointer-events-none absolute -right-24 bottom-16 h-96 w-96 animate-float-slow rounded-full bg-blue-600/25 blur-[120px]" />
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-64 w-64 -translate-x-1/2 animate-float rounded-full bg-pink-500/15 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="glass mb-8 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm text-slate-300"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
          </span>
          {profile.availability}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-5xl font-bold leading-tight text-white md:text-7xl"
        >
          Hi, I&apos;m <span className="text-gradient">{profile.name}</span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-6 h-10 font-display text-2xl text-slate-200 md:text-3xl"
        >
          <Typewriter texts={profile.roles} />
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-400"
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="rounded-full bg-gradient-to-r from-purple-500 to-blue-500 px-8 py-4 font-semibold text-white shadow-lg shadow-purple-500/25 transition hover:scale-105"
          >
            View Projects
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="glass inline-flex items-center gap-2 rounded-full px-8 py-4 font-semibold text-white transition hover:bg-white/10"
          >
            <Icon name="github" /> GitHub
          </a>
          <a
            href="#contact"
            className="rounded-full px-6 py-4 font-semibold text-slate-300 transition hover:text-white"
          >
            Contact me →
          </a>
        </motion.div>

        <motion.dl
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="mx-auto mt-16 grid max-w-xl grid-cols-3 gap-4"
        >
          {stats.map((s) => (
            <div key={s.label} className="glass rounded-2xl px-3 py-4">
              <dt className="font-display text-3xl font-bold text-gradient">{s.value}</dt>
              <dd className="mt-1 text-xs text-slate-400 sm:text-sm">{s.label}</dd>
            </div>
          ))}
        </motion.dl>
      </div>

      <a
        href="#about"
        aria-label="Scroll to About"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 animate-bounce text-slate-500 hover:text-white md:block"
      >
        <Icon name="arrowDown" className="h-6 w-6" />
      </a>
    </section>
  );
}
