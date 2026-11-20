import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import Icon from "./Icons";
import { timeline } from "../data";

export default function Journey() {
  return (
    <section id="journey" className="section">
      <SectionHeading
        eyebrow="Journey"
        title="Education & experience"
        subtitle="Where I've learned, and where I've been putting it into practice."
      />

      <div className="relative mx-auto max-w-3xl">
        {/* Vertical line */}
        <div className="absolute bottom-0 left-5 top-0 w-px bg-gradient-to-b from-purple-500 via-pink-500 to-blue-500 opacity-40" />

        <ol className="space-y-10">
          {timeline.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.1}>
              <li className="relative pl-16">
                <span className="absolute left-0 top-1 grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-purple-500 to-blue-500 text-white shadow-lg shadow-purple-500/30">
                  <Icon name={item.type === "edu" ? "graduation" : "briefcase"} />
                </span>

                <div className="glass rounded-2xl p-6">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="font-display text-xl font-semibold text-white">
                      {item.title}
                    </h3>
                    {item.period && (
                      <span className="rounded-full bg-purple-500/15 px-3 py-1 text-xs font-medium text-purple-200">
                        {item.period}
                      </span>
                    )}
                  </div>
                  {item.org && <p className="mt-1 text-sm text-slate-400">{item.org}</p>}
                  <ul className="mt-4 space-y-2 text-sm leading-relaxed text-slate-400">
                    {item.points.map((pt) => (
                      <li key={pt} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-purple-400" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
