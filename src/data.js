// ─────────────────────────────────────────────────────────────
//  All of the portfolio's content lives in this one file.
//  Edit the text here and the whole site updates.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: "Precious Rhys Kihugwa",
  firstName: "Precious",
  initials: "PK",
  roles: ["Full Stack Developer", "Backend & API Developer", "Cybersecurity Enthusiast"],
  tagline:
    "I design and build secure, scalable and beautiful web applications — from clean APIs to polished interfaces.",
  availability: "Open to work & collaborations",
  email: "bgprecious544@gmail.com",
  github: "https://github.com/preshy-coder",
};

export const navLinks = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "journey", label: "Journey" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];

// ── About ────────────────────────────────────────────────────
export const pillars = [
  {
    title: "Backend & APIs",
    text: "Designing efficient, well-structured APIs and server-side systems that scale.",
    icon: "server",
  },
  {
    title: "Full-stack apps",
    text: "Taking an idea from the database all the way to a polished, responsive interface.",
    icon: "layout",
  },
  {
    title: "Security-minded",
    text: "Authentication, hashing and cybersecurity best practices built in from day one.",
    icon: "shield",
  },
];

// ── Skills ───────────────────────────────────────────────────
export const coreSkills = [
  { name: "Tailwind CSS", level: 95 },
  { name: "React", level: 90 },
  { name: "Node.js", level: 85 },
  { name: "PostgreSQL / MySQL", level: 80 },
  { name: "Cybersecurity", level: 75 },
];

export const skillGroups = [
  {
    title: "Frontend",
    icon: "layout",
    items: ["React", "Next.js", "JavaScript", "Tailwind CSS", "HTML & CSS"],
  },
  {
    title: "Backend & APIs",
    icon: "server",
    items: ["Node.js", "Express", "Python", "Django", "PHP", "REST APIs"],
  },
  {
    title: "Databases",
    icon: "database",
    items: ["MySQL", "PostgreSQL", "SQLite"],
  },
  {
    title: "Security & Tools",
    icon: "shield",
    items: ["Cybersecurity", "Authentication & hashing", "Digital Forensics", "Git & GitHub"],
  },
];

// ── Projects ─────────────────────────────────────────────────
// repo: the GitHub repository name (adds a "Source code" link).
// live: optional URL of a live demo (adds a "Live demo" link).
// Leave repo as null for private work — the card shows "Source available on request".
export const projectFilters = [
  { id: "all", label: "All" },
  { id: "systems", label: "Systems" },
  { id: "commerce", label: "Commerce & Payments" },
  { id: "security", label: "Security & Real-time" },
];

export const projects = [
  {
    name: "E-Participation System",
    category: "systems",
    desc: "A civic platform that helps citizens take part in public processes and engage with their community.",
    tags: ["Civic Tech", "Web Platform"],
    repo: null,
    live: null,
  },
  {
    name: "Control Desk",
    category: "systems",
    desc: "A coordination management system built to keep work organized and on track.",
    tags: ["Operations", "Management"],
    repo: null,
    live: null,
  },
  {
    name: "Correspondence Tracker",
    category: "systems",
    desc: "A communication tracking system that keeps every letter and message accounted for.",
    tags: ["Tracking", "Workflow"],
    repo: null,
    live: null,
  },
  {
    name: "Smart Library System",
    category: "systems",
    desc: "Online library management with real-time tracking of books and records.",
    tags: ["Library", "Real-time"],
    repo: null,
    live: null,
  },
  {
    name: "Online Bookstore",
    category: "commerce",
    desc: "An e-commerce platform for books with payment integration.",
    tags: ["E-commerce", "Payments"],
    repo: "ONLINE-BOOKSTORE-SYSTEM",
    live: null,
  },
  {
    name: "Restaurant Feedback System",
    category: "commerce",
    desc: "A digital ordering and feedback system that helps restaurants hear from their customers.",
    tags: ["Ordering", "Feedback"],
    repo: "PROJECT",
    live: null,
  },
  {
    name: "Mobile Payment System",
    category: "commerce",
    desc: "A digital wallet and payments platform with secure transactions.",
    tags: ["FinTech", "Wallet"],
    repo: null,
    live: null,
  },
  {
    name: "Password Authenticator",
    category: "security",
    desc: "A secure authentication system with hashed passwords and token-based login.",
    tags: ["Security", "Auth"],
    repo: null,
    live: null,
  },
  {
    name: "Real-Time Chat App",
    category: "security",
    desc: "A full-stack chat application with live messaging and notifications.",
    tags: ["Real-time", "Messaging"],
    repo: null,
    live: null,
  },
  {
    name: "Web Application",
    category: "systems",
    desc: "A responsive web application with a clean, easy-to-use interface.",
    tags: ["Web App", "Responsive"],
    repo: "WEB-APP",
    live: null,
  },
];

// ── Journey (education & experience) ─────────────────────────
export const timeline = [
  {
    type: "edu",
    title: "BSc in Cybersecurity & Digital Forensics",
    org: "Open University of Kenya (OUK)",
    period: "2025 – Present",
    points: [
      "Studying cybersecurity and digital forensics alongside hands-on software development.",
      "Applying security thinking to every system I design and build.",
    ],
  },
  {
    type: "edu",
    title: "Pure Mathematics",
    org: "The Open University",
    period: "2025 – Present",
    points: [],
  },
  {
    type: "work",
    title: "Software Development Internship",
    org: null,
    period: "Started May 2024",
    points: [
      "Developed secure full-stack web applications for clients and personal projects.",
      "Integrated APIs and built automated workflows for internal systems.",
      "Worked with MySQL, PostgreSQL and SQLite for scalable solutions.",
      "Implemented authentication systems and cybersecurity best practices.",
    ],
  },
  {
    type: "edu",
    title: "Software Engineering",
    org: "Zetech University",
    period: "Completed 2025",
    points: ["Studied software engineering."],
  },
];

// ── Certifications ───────────────────────────────────────────
// Set `link` to the real certificate URL. While it is "#", the card shows "Link coming soon".
export const certifications = [
  { name: "Full Stack Web Development", provider: "Coursera", link: "#" },
  { name: "React & Node.js Mastery", provider: "Udemy", link: "#" },
  { name: "Cybersecurity Fundamentals", provider: "edX", link: "#" },
  { name: "Advanced JavaScript", provider: "Pluralsight", link: "#" },
  { name: "Database Design & Management", provider: "Udacity", link: "#" },
];
