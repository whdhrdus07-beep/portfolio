"use client";

import { useEffect, useRef, useState } from "react";

export default function MouseOrb() {
  const [pos, setPos] = useState({ x: -200, y: -200 });
  const [visible, setVisible] = useState(false);
  const rafRef = useRef<number>(0);
  const mouseRef = useRef({ x: -200, y: -200 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      if (!visible) setVisible(true);
    };

    const onLeave = () => {
      setVisible(false);
    };

    const animate = () => {
      setPos({ ...mouseRef.current });
      rafRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseleave", onLeave);
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(rafRef.current);
    };
  }, [visible]);

  return (
    <>
      {/* 부드러운 글로우 (딜레이 있음) */}
      <div
        className="mouse-orb"
        style={{
          left: `${pos.x}px`,
          top: `${pos.y}px`,
          opacity: visible ? 0.7 : 0,
        }}
        aria-hidden="true"
      />
      {/* 따라다니는 점 */}
      <div
        className="mouse-orb__dot"
        style={{
          left: `${pos.x}px`,
          top: `${pos.y}px`,
          opacity: visible ? 0.6 : 0,
        }}
        aria-hidden="true"
      />
    </>
  );
}