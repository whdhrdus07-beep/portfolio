"use client";

import { useState, useEffect, useRef } from "react";
import { skills } from "@/data/portfolio";
import type { SkillItem } from "@/data/portfolio";

const TOTAL_DOTS = 20;
const DOT_SIZE = 5;
const GAP = 3;
const STAGGER_DELAY = 80;
const ANIM_DURATION = 400;

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
  const reduced = usePrefersReducedMotion();

  return (
    <div className="flex items-center" style={{ gap: GAP, height: DOT_SIZE }}>
      {Array.from({ length: TOTAL_DOTS }).map((_, i) => {
        const isFilled = animated && i < filledCount;
        return (
          <span
            key={i}
            className="inline-block rounded-[2px]"
            style={{
              width: DOT_SIZE,
              height: DOT_SIZE,
              backgroundColor: isFilled ? "var(--primary)" : "var(--border)",
              transform: isFilled && !reduced ? "scale(1)" : "scale(0.6)",
              transitionDelay: animated && !reduced ? `${i * STAGGER_DELAY}ms` : "0ms",
              transitionProperty: "background-color, transform",
              transitionDuration: reduced ? "0ms" : `${ANIM_DURATION}ms`,
              transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
            }}
          />
        );
      })}
    </div>
  );
}

function SkillCounter({ percent, animated }: { percent: number; animated: boolean }) {
  const [displayed, setDisplayed] = useState(0);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    if (!animated) {
      setDisplayed(percent);
      return;
    }
    const duration = 1200;
    const startTime = performance.now();

    function tick(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayed(Math.round(eased * percent));
      if (progress < 1) requestAnimationFrame(tick);
    }

    if (reduced) {
      setDisplayed(percent);
    } else {
      requestAnimationFrame(tick);
    }
  }, [animated, percent]);

  return (
    <span className="neu-raised flex h-9 w-12 items-center justify-center rounded-lg text-sm font-semibold tabular-nums text-accent">
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
      { threshold: 0.3 }
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
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            기술 스택
          </h2>
          <p className="mt-3 text-secondary">
            프로젝트에서 사용해 온 기술과 도구들입니다.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {skills.map((group) => (
            <div
              key={group.category}
              className="neu-raised rounded-2xl p-6"
            >
              <h3 className="mb-5 text-lg font-semibold text-[#888888] transition-colors hover:text-accent">
                {group.category}
              </h3>
              <ul className="space-y-4">
                {group.items.map((item: SkillItem) => (
                  <li key={item.name}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-[#666666]">{item.name}</span>
                      <SkillCounter percent={item.percent} animated={visible} />
                    </div>
                    <SkillDots percent={item.percent} animated={visible} />
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