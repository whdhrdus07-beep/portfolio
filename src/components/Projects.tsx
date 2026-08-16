import { projects } from "@/data/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-emerald-400">
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
              className="group flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all hover:border-emerald-500/30 hover:bg-white/[0.05]"
            >
              <div className="mb-4 h-40 rounded-xl bg-gradient-to-br from-emerald-500/10 to-cyan-500/5 transition-transform group-hover:scale-[1.02]" />

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
                    className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300"
                  >
                    {tag}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex gap-4 text-sm">
                <a
                  href={project.href}
                  className="font-medium text-emerald-400 transition-colors hover:text-emerald-300"
                >
                  Live Demo →
                </a>
                <a
                  href={project.github}
                  className="text-zinc-500 transition-colors hover:text-zinc-300"
                >
                  GitHub
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
