// src/App.jsx
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Certifications from "./components/Certifications";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0f172a] text-white">

      {/* TOP NAVBAR */}
      <Navbar />

      {/* MAIN CONTENT */}
      <main className="pt-24 px-6 lg:px-16 space-y-32">
        <About />
        <Projects />
        <Contact />
        <Certifications />
      </main>

    </div>
  );
}