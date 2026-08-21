"use client";

import { useEffect, useRef } from "react";

export default function MouseOrb() {
  const glowRef = useRef<HTMLDivElement>(null);
  const posRef = useRef({ x: -300, y: -300 });
  const visibleRef = useRef(false);

  useEffect(() => {
    const glow = glowRef.current;
    if (!glow) return;

    let rafId: number;

    const onMove = (x: number, y: number) => {
      posRef.current = { x, y };
      if (!visibleRef.current) {
        visibleRef.current = true;
        glow.style.opacity = "0.6";
      }
    };

    // 마우스
    const onMouse = (e: MouseEvent) => onMove(e.clientX, e.clientY);
    // 터치
    const onTouch = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        onMove(e.touches[0].clientX, e.touches[0].clientY);
      }
    };

    const onLeave = () => {
      visibleRef.current = false;
      glow.style.opacity = "0";
    };

    const animate = () => {
      const { x, y } = posRef.current;
      glow.style.left = `${x}px`;
      glow.style.top = `${y}px`;
      rafId = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMouse, { passive: true });
    window.addEventListener("touchmove", onTouch, { passive: true });
    window.addEventListener("touchend", onLeave);
    document.addEventListener("mouseleave", onLeave);
    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMouse);
      window.removeEventListener("touchmove", onTouch);
      window.removeEventListener("touchend", onLeave);
      document.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      className="mouse-orb"
      style={{ left: -300, top: -300 }}
      aria-hidden="true"
    />
  );
}