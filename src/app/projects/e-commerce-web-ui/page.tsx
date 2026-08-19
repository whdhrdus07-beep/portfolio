import { projects } from "@/data/portfolio";
import Link from "next/link";

export const metadata = {
  title: "E-Commerce Web UI — 김경환 포트폴리오",
  description: "패션 브랜드 온라인 쇼핑몰 UI/UX 디자인",
};

export default function EcommercePage() {
  const project = projects.find((p) => p.title === "E-Commerce Web UI");
  if (!project) return null;

  return (
    <div className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-accent-soft"
        >
          <svg
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
          전체 프로젝트로 돌아가기
        </Link>

        <div className="mt-8">
          <div className="rounded-2xl border border-border bg-gradient-to-br from-primary/15 to-primary/5 p-8 sm:p-12">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
              Case Study
            </p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              {project.title}
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-secondary">
              {project.description}
            </p>
          </div>

          <dl className="mt-8 grid gap-4 sm:grid-cols-3">
            {project.role && (
              <div className="rounded-xl border border-border bg-surface p-4">
                <dt className="text-xs uppercase tracking-wider text-muted">역할</dt>
                <dd className="mt-1 font-medium text-foreground">{project.role}</dd>
              </div>
            )}
            {project.duration && (
              <div className="rounded-xl border border-border bg-surface p-4">
                <dt className="text-xs uppercase tracking-wider text-muted">기간</dt>
                <dd className="mt-1 font-medium text-foreground">{project.duration}</dd>
              </div>
            )}
            {project.client && (
              <div className="rounded-xl border border-border bg-surface p-4">
                <dt className="text-xs uppercase tracking-wider text-muted">클라이언트</dt>
                <dd className="mt-1 font-medium text-foreground">{project.client}</dd>
              </div>
            )}
          </dl>
        </div>

        {project.problem && (
          <section className="mt-12">
            <h2 className="text-2xl font-bold text-foreground">문제 정의</h2>
            <p className="mt-4 leading-relaxed text-secondary">{project.problem}</p>
          </section>
        )}

        {project.solution && (
          <section className="mt-12">
            <h2 className="text-2xl font-bold text-foreground">해결 방법</h2>
            <p className="mt-4 leading-relaxed text-secondary">{project.solution}</p>
          </section>
        )}

        {project.gallery && project.gallery.length > 0 && (
          <section className="mt-12">
            <h2 className="text-2xl font-bold text-foreground">주요 UI</h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {project.gallery.map((src, i) => (
                <div
                  key={src + i}
                  className="aspect-video overflow-hidden rounded-xl border border-border bg-gradient-to-br from-primary/5 to-transparent"
                >
                  <img
                    src={src}
                    alt={`${project.title} UI ${i + 1}`}
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </section>
        )}

        {project.keyFeatures && project.keyFeatures.length > 0 && (
          <section className="mt-12">
            <h2 className="text-2xl font-bold text-foreground">핵심 기능</h2>
            <ul className="mt-4 space-y-3">
              {project.keyFeatures.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-secondary">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {project.designPoints && project.designPoints.length > 0 && (
          <section className="mt-12">
            <h2 className="text-2xl font-bold text-foreground">디자인 포인트</h2>
            <ul className="mt-4 space-y-3">
              {project.designPoints.map((point) => (
                <li key={point} className="flex items-start gap-3 text-secondary">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent-soft" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {project.tech && project.tech.length > 0 && (
          <section className="mt-12">
            <h2 className="text-2xl font-bold text-foreground">사용 기술</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-foreground"
                >
                  {item}
                </span>
              ))}
            </div>
          </section>
        )}

        <div className="mt-12 flex flex-wrap gap-4">
          {project.href && project.href !== "#" && (
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-black transition-all hover:bg-accent-hover hover:shadow-lg hover:shadow-primary/25"
            >
              Live Demo
            </a>
          )}
          {project.github && project.github !== "#" && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition-all hover:border-accent-border hover:bg-accent-subtle hover:text-accent-soft"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
}