"use client";

import { FormEvent, useState } from "react";
import { siteConfig } from "@/data/portfolio";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "");
    const message = String(data.get("message") ?? "");
    const subject = encodeURIComponent(`Portfolio 문의 from ${name}`);
    const body = encodeURIComponent(message);
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-emerald-400">
              Contact
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              함께 일해요
            </h2>
            <p className="mt-3 text-zinc-400">
              새로운 기회, 협업, 또는 프로젝트 문의를 환영합니다.
            </p>

            <ul className="mt-8 space-y-4">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-3 text-zinc-300 transition-colors hover:text-emerald-400"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03]">
                    ✉
                  </span>
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-zinc-300 transition-colors hover:text-emerald-400"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03]">
                    GH
                  </span>
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-zinc-300 transition-colors hover:text-emerald-400"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03]">
                    in
                  </span>
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8"
          >
            <div className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm text-zinc-400">
                  이름
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  className="mt-2 w-full rounded-lg border border-white/10 bg-[#0b0f14] px-4 py-3 text-white outline-none transition-colors focus:border-emerald-500/50"
                  placeholder="이름을 입력해 주세요"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm text-zinc-400"
                >
                  메시지
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="mt-2 w-full resize-none rounded-lg border border-white/10 bg-[#0b0f14] px-4 py-3 text-white outline-none transition-colors focus:border-emerald-500/50"
                  placeholder="프로젝트나 협업에 대해 이야기해 주세요."
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-6 w-full rounded-full bg-emerald-500 py-3 text-sm font-semibold text-black transition-colors hover:bg-emerald-400"
            >
              {submitted ? "메일 앱을 확인해 주세요" : "메시지 보내기"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
