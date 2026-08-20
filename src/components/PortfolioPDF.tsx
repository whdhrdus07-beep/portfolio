"use client";

export default function PortfolioPDF() {
  return (
    <section id="portfolio-pdf" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="pdf-card rounded-2xl p-8 sm:p-12">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
                Full Portfolio
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                전체 작업물 확인
              </h2>
              <p className="mt-4 text-secondary leading-relaxed">
                더 많은 프로젝트와 상세한 작업 과정은 PDF 포트폴리오에서 확인하실 수
                있습니다. 브랜딩, UI/UX, 그래픽 디자인 등 전 분야의 작업이
                수록되어 있습니다.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="/portfolio.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pdf-btn-primary inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all"
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
                      d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m.75 12l3-3m0 0l3 3m-3-3v6m-6-9h12a2.25 2.25 0 002.25-2.25V5.25A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25v10.5A2.25 2.25 0 005.25 18z"
                    />
                  </svg>
                  PDF 새 탭에서 열기
                </a>
                <a
                  href="/portfolio.pdf"
                  download
                  className="pdf-btn-secondary inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all"
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
                      d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                    />
                  </svg>
                  다운로드
                </a>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative">
                <div className="aspect-[3/4] w-48 rounded-lg border border-border bg-gradient-to-br from-primary/5 to-transparent shadow-2xl" />
                <div className="absolute -bottom-3 -right-3 -top-3 -left-3 -z-10 rounded-xl border border-primary/20" />
                <div className="absolute -bottom-6 -right-6 -top-6 -left-6 -z-20 rounded-xl border border-primary/10" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}