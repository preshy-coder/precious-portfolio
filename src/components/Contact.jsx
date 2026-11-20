import Reveal from "./Reveal";
import Icon from "./Icons";
import { profile } from "../data";

export default function Contact() {
  return (
    <section id="contact" className="section">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-purple-600/25 via-[#0f1530] to-blue-600/25 p-10 text-center md:p-16">
          <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-purple-500/30 blur-[90px]" />
          <div className="pointer-events-none absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-blue-500/30 blur-[90px]" />

          <div className="relative">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-purple-300">
              Contact
            </p>
            <h2 className="font-display text-4xl font-bold text-white md:text-5xl">
              Let&apos;s work together
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-slate-300">
              Have a project in mind, an internship or a collaboration? Let&apos;s build
              something powerful.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-semibold text-slate-900 shadow-xl transition hover:scale-105"
              >
                <Icon name="mail" /> Get in touch
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="glass inline-flex items-center gap-2 rounded-full px-8 py-4 font-semibold text-white transition hover:bg-white/10"
              >
                <Icon name="github" /> GitHub
              </a>
            </div>

            <p className="mt-8 text-sm text-slate-400">{profile.email}</p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
