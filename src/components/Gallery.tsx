"use client";

import { projects } from "@/data/portfolio";

export default function Gallery() {
  const featured = projects.filter((p) => p.gallery && p.gallery.length > 0);
  if (featured.length === 0) return null;

  return (
    <section id="gallery" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
            UI Gallery
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            프로젝트 미리보기
          </h2>
          <p className="mt-3 text-secondary">
            실제 작업 결과물의 주요 화면을 미리 볼 수 있습니다.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((project, idx) => (
            <a
              key={project.title}
              href={`/projects/${encodeURIComponent(
                project.title.toLowerCase().replace(/[^a-z0-9가-힣]/g, "-")
              )}`}
              className="neu-raised group relative overflow-hidden rounded-2xl transition-all"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-primary/10 to-transparent">
                <div className="flex h-full items-center justify-center">
                  <span className="text-6xl font-bold tracking-tighter text-foreground/10">
                    {idx + 1}
                  </span>
                </div>
                <div className="absolute inset-0 bg-accent-subtle opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="rounded-full bg-accent px-4 py-2 text-xs font-semibold text-black opacity-0 shadow-lg shadow-primary/25 transition-all duration-300 group-hover:opacity-100">
                    View Project
                  </span>
                </div>
              </div>
              <div className="px-1 pb-5">
                <h3 className="text-lg font-semibold text-foreground">
                  {project.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-secondary">
                  {project.description}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}