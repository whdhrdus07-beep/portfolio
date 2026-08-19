import { about } from "@/data/portfolio";

export default function About() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="About"
          title="저를 소개합니다"
          description="디자이너로서의 여정과, 일 태도를 소개합니다."
        />

        <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-start">
          <div className="relative">
            <div className="aspect-square max-w-sm overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-primary/20 to-primary/5">
              <div className="flex h-full items-center justify-center">
                <span className="text-7xl font-bold tracking-tighter text-foreground/20">
                  {about.highlights[0]?.value ?? "3+"}
                </span>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-2xl border border-primary/20" />
          </div>

          <div>
            <div className="space-y-4 text-secondary leading-relaxed">
              {about.description.map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
            </div>

            <dl className="mt-10 grid gap-4 sm:grid-cols-3">
              {about.highlights.map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border border-border bg-surface p-4 transition-colors hover:border-border-hover"
                >
                  <dt className="text-xs uppercase tracking-wider text-muted">
                    {item.label}
                  </dt>
                  <dd className="mt-1 font-semibold text-foreground">{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionHeading({
  label,
  title,
  description,
}: {
  label: string;
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-2xl">
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
        {label}
      </p>
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      <p className="mt-3 text-secondary">{description}</p>
    </div>
  );
}
