export default function Contact() {
  return (
    <section id="contact">
      <div className="bg-white/5 border border-white/10 p-10 rounded-3xl text-center">
        <h2 className="text-3xl font-bold mb-6">Let’s Work Together</h2>

        <p className="text-gray-400 mb-6">
          Have a project in mind? Let’s build something powerful.
        </p>

        <a
          href="mailto:bgprecious544@gmail.com"
          className="inline-block px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-full transition"
        >
          Get In Touch
        </a>
      </div>
    </section>
  );
}