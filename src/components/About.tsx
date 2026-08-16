import { about } from "@/data/portfolio";

export default function About() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="About"
          title="저를 소개합니다"
          description="어떤 개발자인지, 무엇을 중요하게 생각하는지 알려드릴게요."
        />

        <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-start">
          <div className="relative">
            <div className="aspect-square max-w-sm overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-emerald-500/20 to-cyan-500/10">
              <div className="flex h-full items-center justify-center text-6xl font-bold text-white/20">
                {about.highlights[0]?.value ?? "Dev"}
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-2xl border border-emerald-500/20" />
          </div>

          <div>
            <div className="space-y-4 text-zinc-400 leading-relaxed">
              {about.description.map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
            </div>

            <dl className="mt-10 grid gap-4 sm:grid-cols-3">
              {about.highlights.map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border border-white/10 bg-white/[0.03] p-4"
                >
                  <dt className="text-xs uppercase tracking-wider text-zinc-500">
                    {item.label}
                  </dt>
                  <dd className="mt-1 font-semibold text-white">{item.value}</dd>
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
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-emerald-400">
        {label}
      </p>
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      <p className="mt-3 text-zinc-400">{description}</p>
    </div>
  );
}
