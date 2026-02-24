export default function Skills() {
  const skills = [
    { name: "React", level: 90 },
    { name: "Node.js", level: 85 },
    { name: "PostgreSQL/MySQL", level: 80 },
    { name: "Cybersecurity", level: 75 },
    { name: "Tailwind CSS", level: 95 },
  ];

  return (
    <section id="skills" className="space-y-6">
      <h2 className="text-4xl font-bold text-purple-400 mb-6">Skills</h2>
      <div className="space-y-4">
        {skills.map((s, i) => (
          <div key={i}>
            <p className="font-semibold">{s.name}</p>
            <div className="bg-gray-700 h-3 rounded-full overflow-hidden">
              <div
                className="bg-purple-400 h-3"
                style={{ width: `${s.level}%`, transition: "width 1s ease-in-out" }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}