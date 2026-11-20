import Icon from "./Icons";
import { profile } from "../data";

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-slate-500 sm:flex-row">
        <p>
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        <div className="flex items-center gap-5">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="transition hover:text-white"
          >
            <Icon name="github" />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="transition hover:text-white"
          >
            <Icon name="mail" />
          </a>
          <a
            href="#home"
            className="inline-flex items-center gap-1 transition hover:text-white"
          >
            Back to top <Icon name="arrowUp" className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
