"use client";

import { useEffect, useRef } from "react";

export default function MouseOrb() {
  const glowRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const posRef = useRef({ x: -300, y: -300 });
  const visibleRef = useRef(false);

  useEffect(() => {
    const glow = glowRef.current;
    const dot = dotRef.current;
    if (!glow || !dot) return;

    let rafId: number;

    const onMove = (e: MouseEvent) => {
      posRef.current = { x: e.clientX, y: e.clientY };
      if (!visibleRef.current) {
        visibleRef.current = true;
        glow.style.opacity = "0.6";
        dot.style.opacity = "0.5";
      }
    };

    const onLeave = () => {
      visibleRef.current = false;
      glow.style.opacity = "0";
      dot.style.opacity = "0";
    };

    // DOM 직접 조작 — React re-render 없이 60fps 부드럽게
    const animate = () => {
      const { x, y } = posRef.current;
      glow.style.left = `${x}px`;
      glow.style.top = `${y}px`;
      dot.style.left = `${x}px`;
      dot.style.top = `${y}px`;
      rafId = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseleave", onLeave);
    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <div ref={glowRef} className="mouse-orb" style={{ left: -300, top: -300 }} aria-hidden="true" />
      <div ref={dotRef} className="mouse-orb__dot" style={{ left: -300, top: -300 }} aria-hidden="true" />
    </>
  );
}