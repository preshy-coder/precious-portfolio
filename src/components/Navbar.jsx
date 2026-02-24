import Typewriter from "./Typewriter";

export default function Navbar() {
  return (
    <nav className="fixed w-full backdrop-blur-lg bg-white/5 border-b border-white/10 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Typing effect with Times New Roman */}
        <h1
          className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-transparent font-serif"
          style={{ fontFamily: "'Times New Roman', Times, serif" }}
        >
          <Typewriter
            texts={[
              "Precious Kihugwa Rhys Portfolio",
              "Full Stack Developer",
              "Cybersecurity Enthusiast"
            ]}
            speed={100}
            pause={2000}
          />
        </h1>

        <div className="space-x-8 hidden md:flex">
          <a href="#about" className="hover:text-purple-400 transition">About</a>
          <a href="#projects" className="hover:text-purple-400 transition">Projects</a>
          <a href="#contact" className="hover:text-purple-400 transition">Contact</a>
          <a href="#certifications" className="hover:text-purple-400 transition">Certifications</a>
        </div>
      </div>
    </nav>
  );
}