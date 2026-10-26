// Edit this file to update the content of the site.

export const profile = {
  name: "Sayyad Mahammad",
  role: "Software Engineer",
  location: "Hyderabad, India",
  tagline:
    "I build clean, fast and reliable web applications, with a growing focus on AI and machine learning.",
  about: [
    "I'm a software engineer who enjoys turning ideas into simple, useful products. I work across the stack, from building interfaces with React and Next.js to designing APIs and data pipelines.",
    "Lately I've been exploring machine learning and applying it to real-world problems. When I'm not coding, I'm usually learning something new or sharing what I've learned.",
  ],
  email: "you@example.com",
  resume: "",
  socials: [
    { label: "GitHub", href: "https://github.com/" },
    { label: "LinkedIn", href: "https://www.linkedin.com/" },
  ],
};

export const skills = [
  { group: "Languages", items: ["JavaScript", "TypeScript", "Python", "SQL"] },
  { group: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "HTML & CSS"] },
  { group: "Backend", items: ["Node.js", "REST APIs", "PostgreSQL", "MongoDB"] },
  { group: "AI / ML", items: ["scikit-learn", "PyTorch", "Pandas", "LLM APIs"] },
  { group: "Tools", items: ["Git", "Docker", "Linux", "Vercel"] },
];

export const projects = [
  {
    title: "Portfolio Website",
    description:
      "This site. A fast, responsive personal portfolio built with the Next.js App Router and Tailwind CSS.",
    tags: ["Next.js", "React", "Tailwind"],
    link: "",
    source: "",
  },
  {
    title: "ML Prediction Service",
    description:
      "A machine learning model served behind a small API, with a simple dashboard to try predictions.",
    tags: ["Python", "scikit-learn", "FastAPI"],
    link: "",
    source: "",
  },
  {
    title: "Task Manager",
    description:
      "A full-stack task tracking app with authentication, labels and due-date reminders.",
    tags: ["Node.js", "PostgreSQL", "React"],
    link: "",
    source: "",
  },
];

export const experience = [
  {
    role: "Software Engineer",
    company: "Company Name",
    period: "2023 — Present",
    points: [
      "Build and maintain web applications used by internal and external users.",
      "Work on AI/ML features, from data preparation to deployment.",
    ],
  },
  {
    role: "Software Engineering Intern",
    company: "Company Name",
    period: "2022 — 2023",
    points: ["Shipped features across the frontend and backend of a production app."],
  },
];
