"use client";

import { useEffect, useState } from "react";

const SECTIONS = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export default function HeroNav() {
  const [active, setActive] = useState("");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 200);
      for (const s of SECTIONS) {
        const el = document.getElementById(s.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            setActive(s.id);
            break;
          }
        }
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <nav
      className="fixed right-6 top-1/2 z-40 -translate-y-1/2 hidden lg:flex flex-col gap-3"
      aria-label="섹션 네비게이션"
    >
      {SECTIONS.map((s) => (
        <a
          key={s.id}
          href={`#${s.id}`}
          aria-label={s.label}
          title={s.label}
          className="group relative flex items-center justify-end"
        >
          <span
            className={`text-xs font-medium tracking-wider transition-all duration-300 ${
              active === s.id
                ? "text-accent-soft opacity-100 translate-x-0"
                : "text-zinc-600 opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"
            }`}
          >
            {s.label}
          </span>
          <span
            className={`ml-3 rounded-full transition-all duration-300 ${
              active === s.id
                ? "h-2.5 w-2.5 bg-accent shadow-md shadow-primary/30"
                : "h-1.5 w-1.5 bg-zinc-700 group-hover:bg-zinc-500"
            }`}
          />
        </a>
      ))}
    </nav>
  );
}