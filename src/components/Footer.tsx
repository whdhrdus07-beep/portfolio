"use client";

import { useState, useEffect } from "react";
import { siteConfig } from "@/data/portfolio";

export default function Footer() {
  const [showTop, setShowTop] = useState(false);
  const year = new Date().getFullYear();

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <footer className="relative border-t border-border px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-xs text-muted">
          &copy; {year} {siteConfig.name}
        </p>

        {/* 모바일: 이메일만 표시, PC: 전체 링크 */}
        <div className="flex items-center gap-4 text-xs">
          <a
            href={`mailto:${siteConfig.email}`}
            className="text-muted transition-colors hover:text-accent"
          >
            {siteConfig.email}
          </a>
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden text-muted transition-colors hover:text-accent sm:inline"
          >
            GitHub
          </a>
        </div>
      </div>

      {showTop && (
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="페이지 상단으로 이동"
          className="absolute -top-4 right-6 flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background text-muted shadow-lg transition-all hover:border-accent-border hover:text-accent"
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
              d="M4.5 15.75l7.5-7.5 7.5 7.5"
            />
          </svg>
        </button>
      )}
    </footer>
  );
}