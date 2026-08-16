import { projects } from "@/data/portfolio";

const PROJECT_ICONS: Record<string, string> = {
  Branding: "◆",
  Logo: "◈",
  Print: "▣",
  "UI/UX": "◐",
  Figma: "⬡",
  "Web Design": "□",
  Poster: "▤",
  Typography: "▥",
  Illustration: "◉",
};

function ProjectThumbnail({ project }: { project: (typeof projects)[0] }) {
  const icon = PROJECT_ICONS[project.tags[0]] ?? "◇";

  return (
    <div
      className={`flex h-full w-full items-center justify-center bg-gradient-to-br ${project.color ?? "from-primary/10 to-primary/5"}`}
    >
      <div className="relative">
        <span className="text-5xl font-light tracking-tighter text-white/[0.07]">
          {icon}
        </span>
        <span className="absolute inset-0 flex items-center justify-center text-2xl font-bold tracking-tight text-white/15">
          {project.title.split(" ").map((w) => w[0]).slice(0, 2).join("")}
        </span>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
            Projects
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            주요 프로젝트
          </h2>
          <p className="mt-3 text-zinc-400">
            문제를 정의하고, 설계하고, 구현한 작업들입니다.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group flex flex-col rounded-2xl border border-border bg-surface transition-all hover:border-border-hover hover:bg-surface-hover"
            >
              <div className="relative mb-4 h-40 overflow-hidden rounded-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <ProjectThumbnail project={project} />
                )}
              </div>

              <div className="flex flex-1 flex-col px-1">
                <h3 className="text-xl font-semibold text-white">
                  {project.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-400">
                  {project.description}
                </p>

                <ul className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex gap-4 text-sm">
                  <a
                    href={project.href}
                    className="font-medium text-accent transition-colors hover:text-accent-hover"
                  >
                    Live Demo &rarr;
                  </a>
                  <a
                    href={project.github}
                    className="text-zinc-500 transition-colors hover:text-zinc-300"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}