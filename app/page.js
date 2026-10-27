import { awards, education, experience, profile, projects, skills } from "./data";

const nav = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#awards", label: "Awards" },
  { href: "#contact", label: "Contact" },
];

function Section({ id, title, children }) {
  return (
    <section id={id} className="py-16 border-t border-border">
      <h2 className="font-mono text-sm uppercase tracking-widest text-accent mb-8">
        {title}
      </h2>
      {children}
    </section>
  );
}

function Tag({ children }) {
  return (
    <span className="rounded-full border border-border px-3 py-1 text-xs text-muted">
      {children}
    </span>
  );
}

export default function Home() {
  const initials = profile.name
    .split(" ")
    .map((part) => part[0])
    .join("");

  return (
    <>
      <header className="sticky top-0 z-10 border-b border-border bg-background/80 backdrop-blur">
        <nav className="mx-auto flex max-w-4xl items-center justify-between px-6 h-16">
          <a href="#top" className="font-semibold tracking-tight">
            {initials}
            <span className="text-accent">.</span>
          </a>
          <ul className="hidden gap-6 text-sm text-muted sm:flex">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="hover:text-foreground transition-colors">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="rounded-full bg-foreground px-4 py-1.5 text-sm text-background hover:opacity-80 transition-opacity sm:hidden"
          >
            Contact
          </a>
        </nav>
      </header>

      <main id="top" className="mx-auto w-full max-w-4xl flex-1 px-6">
        <section className="py-24 sm:py-32">
          <p className="font-mono text-sm text-accent mb-4">Hi, my name is</p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">{profile.name}</h1>
          <p className="mt-3 text-2xl text-muted sm:text-3xl">{profile.role}</p>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">{profile.tagline}</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background hover:opacity-80 transition-opacity"
            >
              View my work
            </a>
            <a
              href="#contact"
              className="rounded-full border border-border px-6 py-3 text-sm font-medium hover:border-foreground transition-colors"
            >
              Get in touch
            </a>
            {profile.resume && (
              <a
                href={profile.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-border px-6 py-3 text-sm font-medium hover:border-foreground transition-colors"
              >
                Resume
              </a>
            )}
          </div>
        </section>

        <Section id="about" title="About">
          <div className="max-w-2xl space-y-4 text-lg leading-relaxed text-muted">
            {profile.about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </Section>

        <Section id="skills" title="Skills">
          <div className="grid gap-6 sm:grid-cols-2">
            {skills.map((skill) => (
              <div key={skill.group}>
                <h3 className="mb-3 font-medium">{skill.group}</h3>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <Tag key={item}>{item}</Tag>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section id="projects" title="Selected work">
          <p className="mb-8 max-w-2xl text-lg leading-relaxed text-muted">
            A closer look at the problems, decisions and teamwork behind my work at Aakash,
            alongside this portfolio.
          </p>
          <div className="grid gap-6 sm:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.title}
                className="flex flex-col rounded-2xl border border-border bg-card p-6 transition-colors hover:border-accent"
              >
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                  {project.description}
                </p>
                <p className="mt-4 border-l-2 border-accent pl-3 text-sm leading-relaxed text-foreground">
                  {project.outcome}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </div>
                {(project.link || project.source) && (
                  <div className="mt-5 flex gap-4 text-sm font-medium">
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                        Live ↗
                      </a>
                    )}
                    {project.source && (
                      <a href={project.source} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                        Source ↗
                      </a>
                    )}
                  </div>
                )}
              </article>
            ))}
          </div>
        </Section>

        <Section id="experience" title="Experience">
          <ol className="space-y-10">
            {experience.map((job) => (
              <li key={`${job.role}-${job.period}`} className="grid gap-2 sm:grid-cols-[10rem_1fr]">
                <p className="font-mono text-sm text-muted">{job.period}</p>
                <div>
                  <h3 className="font-semibold">
                    {job.role} <span className="text-muted font-normal">· {job.company}</span>
                  </h3>
                  <p className="mt-1 text-sm text-muted">{job.location}</p>
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-relaxed text-muted">
                    {job.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </Section>

        <Section id="awards" title="Honors & Awards">
          <div className="grid gap-6 sm:grid-cols-2">
            {awards.map((award) => (
              <article key={award.title} className="rounded-2xl border border-border bg-card p-6">
                <p className="font-mono text-sm text-accent">{award.period}</p>
                <h3 className="mt-2 text-lg font-semibold">{award.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{award.description}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section id="education" title="Education">
          {education.map((item) => (
            <article key={item.institution} className="grid gap-2 sm:grid-cols-[10rem_1fr]">
              <p className="font-mono text-sm text-muted">{item.period}</p>
              <div>
                <h3 className="font-semibold">{item.institution}</h3>
                <p className="mt-1 text-sm text-muted">{item.degree}</p>
                <p className="mt-1 text-sm text-muted">{item.location}</p>
              </div>
            </article>
          ))}
        </Section>

        <Section id="contact" title="Contact">
          <h3 className="text-3xl font-bold tracking-tight sm:text-4xl">Let&apos;s work together.</h3>
          <p className="mt-4 max-w-xl text-lg text-muted">
            Have a frontend problem to solve, an interesting product to build, or a role you think would fit? I&apos;d be happy to hear about it.
          </p>
          <a
            href={`mailto:${profile.email}`}
            className="mt-8 inline-block rounded-full bg-accent px-6 py-3 text-sm font-medium text-white hover:opacity-90 transition-opacity"
          >
            {profile.email}
          </a>
          <p className="mt-4 text-sm text-muted">
            <a href={profile.phone.href} className="hover:text-foreground transition-colors">
              {profile.phone.label}
            </a>
          </p>
          <ul className="mt-8 flex gap-6 text-sm">
            {profile.socials.map((social) => (
              <li key={social.label}>
                <a href={social.href} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-foreground transition-colors">
                  {social.label} ↗
                </a>
              </li>
            ))}
          </ul>
        </Section>
      </main>

      <footer className="border-t border-border py-8 text-center text-sm text-muted">
        © {profile.name}. Built with Next.js &amp; Tailwind CSS.
      </footer>
    </>
  );
}
