import { siteConfig } from "@/data/portfolio";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-6 pt-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-20 right-0 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-accent">
          Portfolio
        </p>
        <h1 className="relative max-w-3xl text-5xl font-bold leading-tight tracking-tight text-foreground sm:text-6xl lg:text-7xl">
          안녕하세요,
          <br />
          <span className="relative inline-block">
            <span className="text-accent">
              {siteConfig.name}
            </span>
            <span className="hero-orb hero-orb-1" aria-hidden="true" />
            <span className="hero-orb hero-orb-2" aria-hidden="true" />
            <span className="hero-orb hero-orb-3" aria-hidden="true" />
            <span className="hero-orb hero-orb-4" aria-hidden="true" />
            <span className="hero-orb hero-orb-5" aria-hidden="true" />
          </span>
          입니다.
        </h1>
        <p className="mt-2 text-2xl font-medium text-secondary sm:text-3xl">
          {siteConfig.title}
        </p>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-secondary">
          {siteConfig.tagline}
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-black transition-all hover:bg-accent-hover hover:shadow-lg hover:shadow-primary/25"
          >
            프로젝트 보기
          </a>
          <a
            href="#contact"
            className="rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition-all hover:border-accent-border hover:bg-accent-subtle hover:text-accent-soft"
          >
            연락하기
          </a>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted transition-colors hover:text-secondary"
        aria-label="아래로 스크롤"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-6 w-6 animate-bounce"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </a>
    </section>
  );
}