// Edit this file to update the content of the site.

export const profile = {
  name: "Sayyad Mahammad",
  role: "Frontend Developer",
  tagline:
    "I make complex workflows easier to use — from taking an exam to understanding what a student needs next.",
  about: [
    "I'm Sayyad, a frontend developer working remotely from Hyderabad. Since joining Aakash in July 2022, I've worked on the experiences students use to learn and take exams, and the tools faculty use behind the scenes.",
    "I enjoy the parts of frontend work where a small decision makes a real difference: a document that stays usable on a low-end phone, a chart that makes a weak topic obvious, or an automated check that saves another round of manual testing. React and Next.js are my main tools; leading three developers on TestPlayer has also given me experience taking work from planning through production support.",
  ],
  email: "sydmd99@gmail.com",
  phone: { label: "+91 7090962847", href: "tel:+917090962847" },
  resume: "",
  socials: [
    { label: "GitHub", href: "https://github.com/sayyadmd" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/sayyadmd" },
  ],
};

export const skills = [
  { group: "Frontend", items: ["JavaScript (ES6+)", "TypeScript", "React", "Next.js", "HTML5", "CSS3", "SCSS", "Tailwind CSS"] },
  { group: "State & API Integration", items: ["Redux Toolkit", "TanStack Query", "REST APIs", "Asynchronous polling", "MSW"] },
  { group: "Design Systems & Visualisation", items: ["Storybook", "Reusable components", "Figma-to-code", "Responsive design", "Recharts"] },
  { group: "Testing & Delivery", items: ["Cypress", "Jest", "React Testing Library", "LambdaTest", "Jenkins", "JMeter", "ESLint", "Husky"] },
  { group: "Build & Cloud", items: ["Git", "Webpack", "Rollup", "Next.js Bundle Analyzer", "AWS S3"] },
  { group: "Analytics Instrumentation", items: ["Google Analytics 4", "Google Tag Manager", "WebEngage", "Netcore"] },
  { group: "Familiarity", items: ["Vue.js", "Pinia", "WebSockets"] },
];

export const projects = [
  {
    title: "Falcon — Making student performance easier to explore",
    description:
      "A faculty member should be able to see where a student needs help and ask follow-up questions without losing context. For Falcon, I built charts for chapter and question-type performance, plus an AI chat interface that lets faculty explore an individual student or a whole batch using the relevant profile data.",
    outcome: "Runner-up at the Aakash Innovation Hackathon 2026.",
    tags: ["Next.js", "React", "Recharts", "TanStack Query", "Tailwind CSS", "AI chat"],
    link: "",
    source: "",
  },
  {
    title: "TestPlayer — Both sides of an exam",
    description:
      "Students see an online exam; faculty also need to prepare it, process OMR uploads and publish results. I led three developers across these two sides of TestPlayer, which hosts ANTHE. Our faculty tools brought scheduling, evaluation and reporting into clearer workflows, including ZEN for exam preparation.",
    outcome: "OMR workflows reduced faculty effort by 50–60%; ZEN reduced exam-preparation effort by approximately 80%.",
    tags: ["React", "Next.js", "Redux", "TanStack Query", "AWS S3"],
    link: "",
    source: "",
  },
  {
    title: "TestPlayer — Taking repetition out of release checks",
    description:
      "Every deployment used to mean another round of manual checks. I built a Cypress framework to run those repeatable checks through Jenkins, across Chrome and Firefox. Reports and failure screenshots go to S3 so the team can see what failed and investigate it.",
    outcome: "Approximately 84% of test cases automated, with QA sanity effort reduced by 50–60%.",
    tags: ["Cypress", "Jenkins", "LambdaTest", "AWS S3", "Redis"],
    link: "",
    source: "",
  },
  {
    title: "myAakash — The details that make learning smoother",
    description:
      "Learning resources need to work well on the device a student actually has. Alongside notes, performance insights and AI hints, I worked on making PDF zooming and rendering more usable on low-end phones. Behind the interface, I led a Next.js upgrade and wrote an ESLint plugin to keep analytics events consistent.",
    outcome: "Delivered across the web application and in-app mobile webviews.",
    tags: ["Next.js", "Redux Toolkit", "TanStack Query", "Tailwind CSS", "pdf.js"],
    link: "",
    source: "",
  },
  {
    title: "Aakash React Components — Shared building blocks",
    description:
      "When several apps need the same UI, fixing it in one place is better than maintaining separate versions. I contributed to a shared React component library, with TypeScript for its interfaces, Storybook for component examples and Rollup for packaging.",
    outcome: "Shared components used across multiple frontend applications.",
    tags: ["React", "TypeScript", "Storybook", "Rollup"],
    link: "",
    source: "",
  },
  {
    title: "This portfolio — A place to share my work",
    description:
      "I wanted a place to explain the work behind the bullet points. This site brings together the products I've worked on, the problems I enjoy solving and a few ways to get in touch. It's built with Next.js and Tailwind CSS.",
    outcome: "A responsive home for my projects, experience and contact details.",
    tags: ["Next.js", "React", "Tailwind CSS"],
    link: "https://sayyadmd.vercel.app/",
    source: "",
  },
];

export const experience = [
  {
    role: "Frontend Developer",
    company: "Aakash Educational Services Limited",
    period: "July 2022 — Present",
    location: "Remote / Hyderabad",
    points: [
      "My responsibilities grew from delivering frontend features to leading three developers across TestPlayer's faculty and student applications, including supporting those features in production.",
      "Working with faculty workflows taught me to think beyond individual screens: an upload also needs progress, failure handling, correction and a useful result at the end.",
      "On myAakash, I've balanced new student features with the work that keeps an application maintainable — upgrades, state-management changes, shared components and rendering improvements.",
      "Falcon gave me a chance to connect data visualisation with conversational AI, helping faculty explore performance through both charts and questions.",
      "Across these projects, I work with product, UX, backend and data colleagues to turn requirements into interfaces, review code and follow through on releases.",
    ],
  },
];

export const awards = [
  {
    title: "Runner-up — Aakash Innovation Hackathon",
    period: "2026",
    description: "Falcon earned runner-up recognition for helping faculty explore student performance through analytics and contextual AI chat.",
  },
  {
    title: "Engineering Hero Award",
    period: "Q3 2024",
    description: "Recognition for my contributions to high-impact features on myAakash.",
  },
];

export const education = [
  {
    institution: "B.M.S. College of Engineering",
    degree: "B.E., Electronics and Communication Engineering",
    location: "Bengaluru",
    period: "2018 — 2022",
  },
];
