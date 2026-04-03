import { useEffect, useRef } from "react";

export default function ParticleCanvas({ height = 180 }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const SPACING = 22;
    const R = 1.3;
    let particles = [];
    let mouse = { x: -9999, y: -9999 };
    let animId;

    const init = () => {
      particles = [];
      const cols = Math.floor(canvas.width / SPACING) + 1;
      const rows = Math.floor(canvas.height / SPACING) + 1;
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const ox = c * SPACING + (SPACING / 2);
          const oy = r * SPACING + (SPACING / 2);
          particles.push({ x: ox, y: oy, ox, oy, vx: 0, vy: 0 });
        }
      }
    };

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      init();
    };
    resize();

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const onMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    const onLeave = () => { mouse.x = -9999; mouse.y = -9999; };
    window.addEventListener("mousemove", onMove);
    canvas.addEventListener("mouseleave", onLeave);

    const REPEL_R = 90;
    const REPEL_STR = 4.5;
    const SPRING = 0.055;
    const DAMP = 0.82;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        const sx = (p.ox - p.x) * SPRING;
        const sy = (p.oy - p.y) * SPRING;
        p.vx += sx;
        p.vy += sy;

        const mdx = p.x - mouse.x;
        const mdy = p.y - mouse.y;
        const dist = Math.sqrt(mdx * mdx + mdy * mdy);
        if (dist < REPEL_R && dist > 0) {
          const f = ((REPEL_R - dist) / REPEL_R) * REPEL_STR;
          p.vx += (mdx / dist) * f;
          p.vy += (mdy / dist) * f;
        }

        p.vx *= DAMP;
        p.vy *= DAMP;
        p.x += p.vx;
        p.y += p.vy;

        const displaced = Math.min(dist, REPEL_R) / REPEL_R;
        const alpha = 0.12 + (1 - displaced) * 0.06;
        ctx.beginPath();
        ctx.arc(p.x, p.y, R, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(235,235,235,${alpha.toFixed(2)})`;
        ctx.fill();
      });

      animId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      ro.disconnect();
      window.removeEventListener("mousemove", onMove);
      canvas.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: "100%", height, display: "block" }}
    />
  );
}
