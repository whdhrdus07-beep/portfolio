"use client";

const ORBS = [
  { size: 420, x: "15%", y: "20%", opacity: 0.12, blur: 100, duration: 14, delay: 0 },
  { size: 320, x: "70%", y: "18%", opacity: 0.10, blur: 90, duration: 18, delay: 2 },
  { size: 500, x: "50%", y: "55%", opacity: 0.09, blur: 120, duration: 22, delay: 5 },
  { size: 260, x: "20%", y: "65%", opacity: 0.11, blur: 80, duration: 16, delay: 3 },
  { size: 380, x: "80%", y: "70%", opacity: 0.08, blur: 110, duration: 20, delay: 7 },
  { size: 200, x: "40%", y: "35%", opacity: 0.06, blur: 70, duration: 12, delay: 1 },
];

export default function OrbBackground() {
  return (
    <div
      className="orb-layer fixed inset-0 -z-10 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      {ORBS.map((orb, i) => (
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
            animation: `orbFloat ${orb.duration}s ease-in-out ${orb.delay}s infinite`,
            willChange: "transform",
          }}
        />
      ))}
    </div>
  );
}