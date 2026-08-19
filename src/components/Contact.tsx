"use client";

import { FormEvent, useState, useRef, useEffect } from "react";
import { siteConfig } from "@/data/portfolio";

// 향후 카카오톡 링크만 이 값만 교체하면 됨
const KAKAOTALK_LINK = "#";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const resetTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "");
    const message = String(data.get("message") ?? "");
    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(message);
    window.location.href = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(siteConfig.email)}&subject=${subject}&body=${body}`;
    setSubmitted(true);
    form.reset();
    if (resetTimer.current) clearTimeout(resetTimer.current);
    resetTimer.current = setTimeout(() => setSubmitted(false), 5000);
  }

  useEffect(() => {
    return () => {
      if (resetTimer.current) clearTimeout(resetTimer.current);
    };
  }, []);

  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
              Contact
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              함께 일해요
            </h2>
            <p className="mt-3 text-secondary">
              새로운 기회, 협업, 또는 프로젝트 문의를 환영합니다.
            </p>

            <ul className="mt-8 space-y-4">
              <li>
                <a
                  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(siteConfig.email)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-foreground transition-colors hover:text-accent"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface text-accent" aria-hidden="true">
                    <MailIcon />
                  </span>
                  <div className="flex flex-col">
                    <span className="text-xs text-muted">Email</span>
                    <span className="text-sm font-medium text-foreground">{siteConfig.email}</span>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-center gap-3 text-foreground transition-colors hover:text-accent"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface text-accent" aria-hidden="true">
                    <PhoneIcon />
                  </span>
                  <div className="flex flex-col">
                    <span className="text-xs text-muted">Phone</span>
                    <span className="text-sm font-medium text-foreground">{siteConfig.phone}</span>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href={KAKAOTALK_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-foreground transition-colors hover:text-accent"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface text-accent" aria-hidden="true">
                    <KakaoIcon />
                  </span>
                  <div className="flex flex-col">
                    <span className="text-xs text-muted">KakaoTalk</span>
                    <span className="text-sm font-medium text-foreground">채팅 문의</span>
                  </div>
                </a>
              </li>
            </ul>
          </div>

          <form
            onSubmit={handleSubmit}
            className="neu-raised rounded-2xl p-6 sm:p-8"
          >
            <div className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm text-secondary">
                  이름
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  className="neu-inset mt-2 w-full rounded-lg px-4 py-3 text-foreground outline-none transition-colors focus:border-accent/50 focus:ring-1 focus:ring-accent/50"
                  placeholder="홍길동"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm text-secondary">
                  이메일
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="neu-inset mt-2 w-full rounded-lg px-4 py-3 text-foreground outline-none transition-colors focus:border-accent/50 focus:ring-1 focus:ring-accent/50"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm text-secondary"
                >
                  메시지
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="mt-2 w-full resize-none rounded-lg border border-border bg-background px-4 py-3 text-foreground outline-none transition-colors focus:border-accent/50 focus:ring-1 focus:ring-accent/50"
                  placeholder="프로젝트나 협업에 대해 자유롭게 이야기해 주세요."
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={submitted}
              className="mt-6 w-full rounded-full bg-accent px-6 py-3 text-sm font-semibold text-black transition-all hover:bg-accent-hover hover:shadow-lg hover:shadow-primary/20 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {submitted ? "메일 앱을 확인해 주세요" : "메시지 보내기"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function MailIcon() {
  return (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
    </svg>
  );
}

function KakaoIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 3C6.5 3 2 6.58 2 11c0 2.76 1.74 5.22 4.38 6.63-.2.74-.72 2.62-.82 2.97-.12.42.16.4.37.29.18-.1 2.72-1.84 3.82-2.6.67.2 1.38.3 2.1.3 5.5 0 10-3.58 10-8s-4.5-8-10-8z" />
    </svg>
  );
}