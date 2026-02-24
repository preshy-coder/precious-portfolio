export default function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 relative"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-blue-500/10 to-transparent blur-3xl"></div>

      <h1 className="text-5xl md:text-7xl font-extrabold mb-6 relative">
        Hi, I'm{" "}
        <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
          Precious Rhys Kihugwa
        </span>
      </h1>

      <h3 className="text-2xl md:text-3xl text-gray-300 mb-6 relative">
        Full Stack Developer
      </h3>

      <p className="max-w-2xl text-gray-400 text-lg mb-8 relative">
        Building powerful, scalable and beautiful web applications using modern technologies.
      </p>

      <a
        href="#projects"
        className="px-8 py-4 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 hover:scale-105 transition transform duration-300 shadow-lg shadow-purple-500/20"
      >
        View Projects
      </a>
    </section>
  );
}