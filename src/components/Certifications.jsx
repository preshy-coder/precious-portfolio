import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import Icon from "./Icons";
import { certifications } from "../data";

export default function Certifications() {
  return (
    <section id="certifications" className="section">
      <SectionHeading
        eyebrow="Certifications"
        title="Always learning"
        subtitle="Courses and certificates that keep my skills sharp."
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((c, i) => {
          const hasLink = c.link && c.link !== "#";
          return (
            <Reveal key={c.name} delay={i * 0.07}>
              <div className="glass flex h-full flex-col rounded-2xl p-6 transition duration-300 hover:-translate-y-1 hover:border-purple-400/40">
                <span className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-purple-500/30 to-blue-500/30 text-purple-300">
                  <Icon name="award" className="h-6 w-6" />
                </span>
                <h3 className="font-display text-lg font-semibold text-white">{c.name}</h3>
                <p className="mt-1 flex-1 text-sm text-slate-400">{c.provider}</p>

                {hasLink ? (
                  <a
                    href={c.link}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-purple-300 transition hover:text-purple-200"
                  >
                    View certificate <Icon name="external" className="h-4 w-4" />
                  </a>
                ) : (
                  <span className="mt-5 text-sm text-slate-500">Link coming soon</span>
                )}
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
