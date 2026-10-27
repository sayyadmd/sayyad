// Edit this file to update the content of the site.

export const profile = {
  name: "Sayyad Mahammad",
  role: "Frontend Developer",
  tagline:
    "I build responsive enterprise applications, interactive analytics dashboards and AI-assisted interfaces with React and Next.js.",
  about: [
    "I'm a frontend developer at Aakash Educational Services with 4+ years of experience turning complex student, faculty and admin workflows into clear, useful interfaces.",
    "I've led a team of three developers across two TestPlayer repositories, delivered features for myAakash, and built Falcon's faculty analytics and contextual AI chat interfaces. My work spans reusable components, rendering performance, API integration and automated testing.",
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
    title: "Falcon — Faculty Analytics & AI Chat",
    description:
      "Built faculty-facing dashboards that reveal students' strengths and areas for improvement. Responsive Recharts visualisations show chapter-wise accuracy and question-type performance, while an AI chat interface uses relevant profile data to answer questions about an individual student or batch. Runner-up at the Aakash Innovation Hackathon 2026.",
    tags: ["Next.js", "React", "Recharts", "TanStack Query", "Tailwind CSS", "AI chat"],
    link: "",
    source: "",
  },
  {
    title: "TestPlayer — Scholarship Exam Platform",
    description:
      "Led three developers across the faculty exam-management and student online test-taking repositories. TestPlayer conducts ANTHE, one of Aakash's major scholarship exams. Automated OMR workflows reduced faculty effort by 50–60%, while ZEN consolidated exam preparation workflows and reduced effort by approximately 80%.",
    tags: ["React", "Next.js", "Redux", "TanStack Query", "AWS S3"],
    link: "",
    source: "",
  },
  {
    title: "TestPlayer — Deployment Test Automation",
    description:
      "Built a Cypress framework covering approximately 84% of test cases, replacing repeated manual checks for covered workflows at each deployment and reducing QA sanity effort by 50–60%. Integrated Jenkins, cross-browser LambdaTest runs and reports published to AWS S3.",
    tags: ["Cypress", "Jenkins", "LambdaTest", "AWS S3", "Redis"],
    link: "",
    source: "",
  },
  {
    title: "myAakash — Student Platform",
    description:
      "Delivered performance-insight screens, learning resources and an AI Hints panel across web and mobile webviews. Reworked the PDF viewer for low-end devices, led the Next.js 13-to-15 upgrade, and standardised analytics instrumentation with a custom ESLint plugin.",
    tags: ["Next.js", "Redux Toolkit", "TanStack Query", "Tailwind CSS", "pdf.js"],
    link: "",
    source: "",
  },
  {
    title: "Aakash React Components",
    description:
      "Contributed reusable components to a shared design system consumed by multiple frontend applications, supporting consistent styling and maintainable interfaces with React, TypeScript, Storybook and Rollup.",
    tags: ["React", "TypeScript", "Storybook", "Rollup"],
    link: "",
    source: "",
  },
  {
    title: "Personal Portfolio",
    description:
      "A responsive portfolio presenting my frontend engineering work, projects and experience, built with Next.js and Tailwind CSS.",
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
    location: "Bengaluru",
    points: [
      "Led a team of three developers across two TestPlayer repositories, owning feature delivery, production support and frontend optimisation.",
      "Built faculty exam-management workflows for OMR evaluation, scheduling, ranking and downloadable performance reports.",
      "Developed myAakash features, improved document rendering, and led the Next.js upgrade and Redux Toolkit migration.",
      "Built Falcon's interactive analytics dashboards and contextual AI chat for student- and batch-level insights.",
      "Automated approximately 84% of test cases with Cypress and integrated cross-browser testing into Jenkins CI/CD.",
    ],
  },
];

export const awards = [
  {
    title: "Runner-up — Aakash Innovation Hackathon",
    period: "2026",
    description: "For building Falcon, an AI-powered faculty analytics platform with student insights and contextual AI chat.",
  },
  {
    title: "Engineering Hero Award",
    period: "Q3 2024",
    description: "For delivering high-impact myAakash product features.",
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
