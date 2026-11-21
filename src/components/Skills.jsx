import { motion } from "framer-motion";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import Icon from "./Icons";
import { coreSkills, skillGroups } from "../data";

export default function Skills() {
  return (
    <section id="skills" className="section">
      <SectionHeading
        eyebrow="Skills"
        title="My toolkit"
        subtitle="The languages, frameworks and practices I use to ship dependable software."
      />

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Proficiency bars */}
        <Reveal>
          <div className="glass h-full rounded-3xl p-8">
            <h3 className="mb-6 font-display text-xl font-semibold text-white">
              Core strengths
            </h3>
            <div className="space-y-6">
              {coreSkills.map((s, i) => (
                <div key={s.name}>
                  <div className="mb-2 flex justify-between text-sm">
                    <span className="font-medium text-slate-200">{s.name}</span>
                    <span className="text-slate-400">{s.level}%</span>
                  </div>
                  <div className="h-2.5 overflow-hidden rounded-full bg-white/10">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${s.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.1, delay: 0.15 * i, ease: "easeOut" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Grouped chips */}
        <div className="grid gap-6 sm:grid-cols-2">
          {skillGroups.map((g, i) => (
            <Reveal key={g.title} delay={i * 0.08}>
              <div className="glass h-full rounded-2xl p-6 transition duration-300 hover:-translate-y-1 hover:border-purple-400/40">
                <div className="mb-4 flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-lg bg-purple-500/20 text-purple-300">
                    <Icon name={g.icon} />
                  </span>
                  <h3 className="font-display text-lg font-semibold text-white">{g.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {g.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
