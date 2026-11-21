import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "./SectionHeading";
import Icon from "./Icons";
import { projects, projectFilters, profile } from "../data";

export default function Projects() {
  const [filter, setFilter] = useState("all");
  const visible = projects.filter((p) => filter === "all" || p.category === filter);

  return (
    <section id="projects" className="section">
      <SectionHeading
        eyebrow="Projects"
        title="Things I've built"
        subtitle="A selection of systems and applications — from civic platforms to payments."
      />

      {/* Category filter */}
      <div className="mb-12 flex flex-wrap justify-center gap-3">
        {projectFilters.map((f) => (
          <button
            key={f.id}
            type="button"
            onClick={() => setFilter(f.id)}
            className={`rounded-full px-5 py-2 text-sm font-medium transition ${
              filter === f.id
                ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg shadow-purple-500/20"
                : "glass text-slate-300 hover:text-white"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <motion.div layout className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visible.map((p) => (
            <motion.article
              layout
              key={p.name}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.35 }}
              className="group rounded-2xl bg-gradient-to-br from-purple-500/60 via-pink-500/40 to-blue-500/60 p-[1.5px] transition duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-purple-500/20"
            >
              <div className="flex h-full flex-col rounded-2xl bg-[#0f1530] p-7">
                <div className="mb-5 flex items-center justify-between">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-purple-500/30 to-blue-500/30 font-display text-lg font-bold text-purple-200">
                    {p.name.charAt(0)}
                  </span>
                  <span className="text-xs uppercase tracking-wider text-slate-500">
                    {projectFilters.find((f) => f.id === p.category)?.label}
                  </span>
                </div>

                <h3 className="font-display text-xl font-semibold text-white">{p.name}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400">{p.desc}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-purple-500/15 px-3 py-1 text-xs font-medium text-purple-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex items-center gap-4 border-t border-white/10 pt-4 text-sm">
                  {p.repo && (
                    <a
                      href={`${profile.github}/${p.repo}`}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 font-medium text-slate-200 transition hover:text-purple-300"
                    >
                      <Icon name="github" className="h-4 w-4" /> Source code
                    </a>
                  )}
                  {p.live && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 font-medium text-slate-200 transition hover:text-purple-300"
                    >
                      <Icon name="external" className="h-4 w-4" /> Live demo
                    </a>
                  )}
                  {!p.repo && !p.live && (
                    <span className="inline-flex items-center gap-2 text-slate-500">
                      <Icon name="lock" className="h-4 w-4" /> Source available on request
                    </span>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>

      <div className="mt-12 text-center">
        <a
          href={`${profile.github}?tab=repositories`}
          target="_blank"
          rel="noreferrer"
          className="glass inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
        >
          <Icon name="github" className="h-4 w-4" /> See all repositories on GitHub
        </a>
      </div>
    </section>
  );
}
