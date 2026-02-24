export default function Projects() {
  const projects = [
    { name: "E-Participation", desc: "Civic platform system." },
    { name: "Control Desk", desc: "Coordination management system." },
    { name: "Correspondence Tracker", desc: "Communication tracking system." },
    { name: "Smart Library System", desc: "Online library management with real-time tracking." },
    { name: "Online Bookstore", desc: "E-commerce platform for books with payment integration." },
    { name: "Restaurant Order System", desc: "Digital ordering and feedback system for restaurants." },
    { name: "Password Authenticator", desc: "Secure authentication system with hashed passwords and token login." },
    { name: "Real-Time Chat App", desc: "Full-stack chat application with live messaging and notifications." },
    { name: "Mobile Payment System", desc: "Digital wallet and payments platform with secure transactions." },
  ];

  return (
    <section id="projects" className="py-16">
      <h2 className="text-3xl font-bold mb-10 text-center">Projects</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((p, i) => (
          <div
            key={i}
            className="bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 p-[2px] rounded-2xl hover:scale-105 transition-transform duration-300"
          >
            <div className="bg-gray-900 rounded-2xl p-6 flex flex-col justify-between h-60 shadow-xl">
              <h3 className="text-2xl font-semibold mb-3 text-white">{p.name}</h3>
              <p className="text-gray-400">{p.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}