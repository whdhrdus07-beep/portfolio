"use client";

const DRIFTS = [
  { name: "orbDrift1", size: 420, x: "12%", y: "18%", opacity: 0.14, blur: 100, duration: 18, delay: 0 },
  { name: "orbDrift2", size: 340, x: "68%", y: "15%", opacity: 0.11, blur: 90, duration: 22, delay: 2 },
  { name: "orbDrift3", size: 520, x: "45%", y: "50%", opacity: 0.10, blur: 130, duration: 26, delay: 5 },
  { name: "orbDrift1", size: 280, x: "18%", y: "62%", opacity: 0.12, blur: 80, duration: 20, delay: 3 },
  { name: "orbDrift2", size: 400, x: "75%", y: "68%", opacity: 0.09, blur: 110, duration: 24, delay: 7 },
  { name: "orbDrift3", size: 220, x: "35%", y: "32%", opacity: 0.07, blur: 70, duration: 16, delay: 1 },
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