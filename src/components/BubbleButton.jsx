import { useState } from "react";

export default function BubbleButton({ children, className = "", onClick, href }) {
  const [bubbles, setBubbles] = useState([]);

  const spawnBubbles = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const cx = e.clientX - rect.left;
    const cy = e.clientY - rect.top;

    const next = Array.from({ length: 10 }, (_, i) => ({
      id: Date.now() + i,
      x: cx,
      y: cy,
      size: 6 + Math.random() * 18,
      tx: (Math.random() - 0.5) * 110,
      ty: -(25 + Math.random() * 90),
      hue: Math.random() > 0.5 ? "139,92,246" : "34,211,238",
    }));

    setBubbles((prev) => [...prev, ...next]);
    setTimeout(() => {
      setBubbles((prev) => prev.filter((b) => !next.some((n) => n.id === b.id)));
    }, 900);

    onClick?.(e);
  };

  const shared = {
    onClick: spawnBubbles,
    className: `relative overflow-hidden select-none ${className}`,
  };

  const inner = (
    <>
      <span className="relative z-10">{children}</span>
      {bubbles.map((b) => (
        <span
          key={b.id}
          style={{
            position: "absolute",
            left: b.x,
            top: b.y,
            width: b.size,
            height: b.size,
            borderRadius: "50%",
            background: `rgba(${b.hue}, 0.55)`,
            transform: "translate(-50%, -50%)",
            pointerEvents: "none",
            animation: "bubble-rise 0.9s ease-out forwards",
            "--tx": `${b.tx}px`,
            "--ty": `${b.ty}px`,
          }}
        />
      ))}
    </>
  );

  if (href) {
    return <a href={href} {...shared}>{inner}</a>;
  }
  return <button {...shared}>{inner}</button>;
}
