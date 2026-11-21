<div align="center">

<img src="assets/desk-setup.png" alt="A cozy coding setup at sunset: dual monitors showing code, a laptop, headphones and a glowing keyboard" width="100%" />

<br />

# ✨ Precious Rhys Kihugwa — Portfolio

**Full Stack Developer · Backend & API Developer · Cybersecurity Enthusiast**

A modern, animated, fully responsive personal portfolio showcasing my projects, skills, education and experience.

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-0055FF?logo=framer&logoColor=white)

</div>

---

## 🌟 About

I specialize in backend systems, APIs and full-stack architecture, and I'm studying a BSc in Cybersecurity and Digital Forensics at the Open University of Kenya. This portfolio is where I share what I've built and what I'm learning.

## 🎨 Features

- **Animated hero** with a typewriter effect, floating gradient orbs and an availability badge
- **About section** with highlight cards for backend, full-stack and security work
- **Skills** shown as animated proficiency bars plus grouped tech chips
- **Filterable project gallery** (Systems, Commerce & Payments, Security & Real-time) with links to source code
- **Journey timeline** covering education and internship experience
- **Certifications** section that shows a "coming soon" state until a link is added
- **Fully responsive**, with a mobile menu, active-section highlighting and a scroll-progress bar
- **Glassmorphism dark theme** with a gradient accent palette
- **Accessible**: keyboard focus styles, semantic HTML, ARIA labels and `prefers-reduced-motion` support

## 🛠️ Tech stack

| Area      | Tools                                  |
| --------- | -------------------------------------- |
| Framework | React 19                               |
| Build     | Vite                                   |
| Styling   | Tailwind CSS 3 + PostCSS               |
| Animation | Framer Motion                          |
| Quality   | ESLint (React Hooks + React Refresh)   |
| Fonts     | Inter, Space Grotesk (Google Fonts)    |

## 🚀 Getting started

**Prerequisites:** Node.js 18+ and npm.

```bash
# 1. Clone the repository
git clone https://github.com/preshy-coder/precious-portfolio.git
cd precious-portfolio

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

### Available scripts

| Command           | What it does                         |
| ----------------- | ------------------------------------ |
| `npm run dev`     | Start the development server         |
| `npm run build`   | Create an optimized production build |
| `npm run preview` | Preview the production build locally |
| `npm run lint`    | Run ESLint on the project            |

## ✏️ Customizing the content

All of the text lives in one file, **`src/data.js`**, so you rarely need to touch the components:

- `profile`: name, roles, tagline, email and GitHub link
- `skillGroups` / `coreSkills`: the skills section
- `projects`: add a project, set `repo` to its GitHub repository name (and `live` for a demo URL)
- `timeline`: education and experience
- `certifications`: set each `link` to the real certificate URL

## 📁 Project structure

```
precious-portfolio/
├── index.html              # Page shell, SEO meta tags, fonts
├── tailwind.config.cjs     # Fonts, animations, keyframes
├── src/
│   ├── main.jsx            # App entry point
│   ├── App.jsx             # Page layout (section order)
│   ├── data.js             # All portfolio content
│   ├── index.css           # Tailwind layers + custom utilities
│   └── components/
│       ├── Navbar.jsx      # Sticky nav, mobile menu, progress bar
│       ├── Home.jsx        # Hero section
│       ├── About.jsx
│       ├── Skills.jsx
│       ├── Projects.jsx    # Filterable project cards
│       ├── Journey.jsx     # Education & experience timeline
│       ├── Certifications.jsx
│       ├── Contact.jsx
│       ├── Footer.jsx
│       ├── Typewriter.jsx  # Typing animation
│       ├── Reveal.jsx      # Scroll-in animation wrapper
│       ├── SectionHeading.jsx
│       └── Icons.jsx       # Inline SVG icon set
└── vite.config.js
```

## 📬 Contact

- **Email:** [bgprecious544@gmail.com](mailto:bgprecious544@gmail.com)
- **GitHub:** [@preshy-coder](https://github.com/preshy-coder)

---

<div align="center">

Designed & built by **Precious Rhys Kihugwa**

</div>
