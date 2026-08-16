"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { skills } from "@/data/portfolio";
import type { SkillItem } from "@/data/portfolio";

const TOTAL_DOTS = 20;

function usePrefersReducedMotion(): boolean {
  const [prefers, setPrefers] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefers(mq.matches);
    const handler = (e: MediaQueryListEvent) => setPrefers(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
  return prefers;
}

function SkillDots({ percent, animated }: { percent: number; animated: boolean }) {
  const filledCount = Math.round((percent / 100) * TOTAL_DOTS);
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: TOTAL_DOTS }).map((_, i) => {
        const isFilled = animated && i < filledCount;
        return (
          <span
            key={i}
            className="inline-block h-1.5 w-1.5 rounded-sm transition-colors duration-300"
            style={{
              backgroundColor: isFilled
                ? "var(--primary)"
                : "var(--border)",
              transform: isFilled && !prefersReducedMotion
                ? "scale(1)"
                : "scale(0.85)",
              transitionDelay: animated && !prefersReducedMotion
                ? `${i * 40}ms`
                : "0ms",
              transitionProperty: "background-color, transform",
              transitionDuration: prefersReducedMotion ? "0ms" : "300ms",
            }}
          />
        );
      })}
    </div>
  );
}

function SkillCounter({ percent, animated }: { percent: number; animated: boolean }) {
  const [displayed, setDisplayed] = useState(0);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (!animated) {
      setDisplayed(percent);
      return;
    }

    const duration = 800;
    const startTime = performance.now();

    function tick(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out curve
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayed(Math.round(eased * percent));
      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    }

    if (prefersReducedMotion) {
      setDisplayed(percent);
    } else {
      requestAnimationFrame(tick);
    }
  }, [animated, percent]);

  return (
    <span className="text-sm font-semibold tabular-nums text-accent-soft">
      {displayed}%
    </span>
  );
}

export default function Skills() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.25 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
            Skills
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            기술 스택
          </h2>
          <p className="mt-3 text-zinc-400">
            프로젝트에서 사용해 온 기술과 도구들입니다.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {skills.map((group) => (
            <div
              key={group.category}
              className="rounded-2xl border border-border bg-surface p-6 transition-all duration-300"
            >
              <h3 className="mb-5 text-lg font-semibold text-white">
                {group.category}
              </h3>
              <ul className="space-y-4">
                {group.items.map((item: SkillItem) => (
                  <li key={item.name}>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-sm text-zinc-300">{item.name}</span>
                      <SkillCounter
                        percent={item.percent}
                        animated={visible}
                      />
                    </div>
                    <SkillDots
                      percent={item.percent}
                      animated={visible}
                    />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}