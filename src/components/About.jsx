export default function About() {
  return (
    <section
      id="about"
      className="py-16 flex justify-center"
    >
      <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 p-12 rounded-3xl shadow-2xl max-w-3xl hover:scale-[1.02] transition-transform duration-300 space-y-6">
        {/* Section Title */}
        <h2 className="text-4xl font-bold mb-6 text-center bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-transparent">
     
        </h2>

        {/* Introduction */}
        <p className="text-gray-300 text-lg leading-relaxed text-center">
          I specialize in backend systems, APIs, and full-stack architecture.
          I love designing efficient systems, secure solutions, and beautiful interfaces.
          Passionate about modern web development, cybersecurity, and continuous learning.
        </p>

        {/* Skills */}
        <div>
          <h3 className="text-2xl font-semibold text-purple-400 mb-3 text-center">Skills</h3>
          <div className="flex flex-wrap justify-center gap-3">
             <span className="px-4 py-2 bg-purple-600/30 rounded-full text-sm text-white font-medium hover:bg-purple-500/50 transition">Python</span>
              <span className="px-4 py-2 bg-purple-600/30 rounded-full text-sm text-white font-medium hover:bg-purple-500/50 transition">Php</span>
               <span className="px-4 py-2 bg-purple-600/30 rounded-full text-sm text-white font-medium hover:bg-purple-500/50 transition">Javascript</span>
            <span className="px-4 py-2 bg-purple-600/30 rounded-full text-sm text-white font-medium hover:bg-purple-500/50 transition">React</span>
            <span className="px-4 py-2 bg-purple-600/30 rounded-full text-sm text-white font-medium hover:bg-purple-500/50 transition">Node.js</span>
             <span className="px-4 py-2 bg-purple-600/30 rounded-full text-sm text-white font-medium hover:bg-purple-500/50 transition">Next.js</span>
            <span className="px-4 py-2 bg-purple-600/30 rounded-full text-sm text-white font-medium hover:bg-purple-500/50 transition">Express</span>
            <span className="px-4 py-2 bg-purple-600/30 rounded-full text-sm text-white font-medium hover:bg-purple-500/50 transition">MySQL / PostgreSQL</span>
            <span className="px-4 py-2 bg-purple-600/30 rounded-full text-sm text-white font-medium hover:bg-purple-500/50 transition">Django</span>
            <span className="px-4 py-2 bg-purple-600/30 rounded-full text-sm text-white font-medium hover:bg-purple-500/50 transition">Cybersecurity</span>
          </div>
        </div>

        {/* Experience */}
        <div>
          <h3 className="text-2xl font-semibold text-purple-400 mb-3 text-center">Experience Highlights</h3>
          <ul className="list-disc list-inside text-gray-300 space-y-1 text-center">
            <li>Developed secure full-stack web applications for clients and personal projects.</li>
            <li>Integrated APIs and built automated workflows for internal systems.</li>
            <li>Worked with databases like MySQL, PostgreSQL, and SQLite for scalable solutions.</li>
            <li>Implemented authentication systems and cybersecurity best practices.</li>
          </ul>
        </div>

        {/* Personal Touch */}
        <div className="text-center mt-4">
          <p className="italic text-gray-400"> I love exploring innovative techy solutions and turning ideas into reality!</p>
        </div>
      </div>
    </section>
  );
}