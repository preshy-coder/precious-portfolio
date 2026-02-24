export default function Certifications() {
  const certs = [
    { name: "Full Stack Web Development", provider: "Coursera", link: "#" },
    { name: "React & Node.js Mastery", provider: "Udemy", link: "#" },
    { name: "Cybersecurity Fundamentals", provider: "edX", link: "#" },
    { name: "Advanced JavaScript", provider: "Pluralsight", link: "#" },
    { name: "Database Design & Management", provider: "Udacity", link: "#" },
  ];

  return (
    <section id="certifications" className="py-16">
      <h2 className="text-4xl font-bold text-center text-purple-400 mb-10">
        Certifications
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {certs.map((c, i) => (
          <div
            key={i}
            className="bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 p-[2px] rounded-2xl hover:scale-105 transition-transform duration-300"
          >
            <div className="bg-gray-900 rounded-2xl p-6 flex flex-col justify-between h-60 shadow-xl">
              <h3 className="font-semibold text-xl mb-2 text-white">{c.name}</h3>
              <p className="text-gray-400 mb-4">{c.provider}</p>
              <a
                href={c.link}
                target="_blank"
                className="text-purple-400 font-medium hover:text-purple-300 transition-colors"
              >
                View Certificate
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}