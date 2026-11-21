import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import Icon from "./Icons";
import { pillars, profile } from "../data";

export default function About() {
  return (
    <section id="about" className="section">
      <SectionHeading
        eyebrow="About me"
        title="Building systems people can trust"
        subtitle="Developer by craft, security student by curiosity."
      />

      <div className="grid items-center gap-10 lg:grid-cols-5">
        <Reveal className="lg:col-span-2">
          <div className="relative mx-auto max-w-xs">
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 opacity-70 blur-lg" />
            <div className="glass relative grid aspect-square place-items-center rounded-3xl bg-[#0f1530]">
              <span className="font-display text-8xl font-bold text-gradient">
                {profile.initials}
              </span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="space-y-5 lg:col-span-3">
          <p className="text-lg leading-relaxed text-slate-300">
            I&apos;m <span className="font-semibold text-white">{profile.name}</span>, a
            developer who specializes in backend systems, APIs and full-stack
            architecture. I love designing efficient systems, secure solutions and
            beautiful interfaces.
          </p>
          <p className="leading-relaxed text-slate-400">
            I&apos;m currently studying a BSc in Cybersecurity and Digital Forensics
            while building real-world applications, so security is never an
            afterthought in my work. I&apos;m passionate about modern web development
            and about continuously learning.
          </p>
          <p className="italic text-slate-500">
            I love exploring innovative techy solutions and turning ideas into reality!
          </p>
        </Reveal>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {pillars.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.1}>
            <div className="glass h-full rounded-2xl p-7 transition duration-300 hover:-translate-y-1 hover:border-purple-400/40">
              <span className="mb-5 grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-purple-500/30 to-blue-500/30 text-purple-300">
                <Icon name={p.icon} className="h-6 w-6" />
              </span>
              <h3 className="font-display text-xl font-semibold text-white">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{p.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
