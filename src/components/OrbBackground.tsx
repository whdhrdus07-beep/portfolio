"use client";

const DRIFTS = [
  {
    name: "orbDrift1",
    size: 700,
    x: "6%",
    y: "10%",
    opacity: 0.09,
    blur: 160,
    duration: 22,
    delay: 0,
  },
  {
    name: "orbDrift2",
    size: 380,
    x: "78%",
    y: "62%",
    opacity: 0.16,
    blur: 95,
    duration: 18,
    delay: 2,
  },
  {
    name: "orbDrift3",
    size: 160,
    x: "52%",
    y: "78%",
    opacity: 0.22,
    blur: 40,
    duration: 13,
    delay: 1,
  },
];

export default function OrbBackground() {
  return (
    <div
      className="orb-layer fixed inset-0 -z-10 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      {DRIFTS.map((orb, i) => (
        <span
          key={i}
          className="absolute rounded-full"
          style={{
            width: orb.size,
            height: orb.size,
            left: orb.x,
            top: orb.y,
            backgroundColor: `rgba(217, 119, 6, ${orb.opacity})`,
            filter: `blur(${orb.blur}px)`,
            animation: `${orb.name} ${orb.duration}s ease-in-out ${orb.delay}s infinite`,
            willChange: "transform",
          }}
        />
      ))}
    </div>
  );
}