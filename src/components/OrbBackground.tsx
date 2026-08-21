"use client";

const DRIFTS = [
  { name: "orbDrift1", size: 560, x: "8%", y: "12%", opacity: 0.13, blur: 140, duration: 22, delay: 0 },
  { name: "orbDrift2", size: 340, x: "72%", y: "10%", opacity: 0.16, blur: 90, duration: 24, delay: 2 },
  { name: "orbDrift3", size: 680, x: "42%", y: "48%", opacity: 0.11, blur: 160, duration: 28, delay: 5 },
  { name: "orbDrift1", size: 260, x: "15%", y: "65%", opacity: 0.14, blur: 70, duration: 20, delay: 3 },
  { name: "orbDrift2", size: 480, x: "78%", y: "72%", opacity: 0.10, blur: 120, duration: 26, delay: 7 },
  { name: "orbDrift3", size: 180, x: "55%", y: "25%", opacity: 0.15, blur: 50, duration: 18, delay: 1 },
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