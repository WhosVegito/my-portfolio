import { useEffect, useRef } from "react";

export default function CursorWave() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const ripples = [];
    const mouse = { x: -200, y: -200 };
    let lastRipple = 0;
    let animId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const onMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      const now = Date.now();
      if (now - lastRipple > 40) {
        lastRipple = now;
        ripples.push({ x: e.clientX, y: e.clientY, r: 0, alpha: 0.55 });
      }
    };
    window.addEventListener("mousemove", onMove);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update + draw ripples
      for (let i = ripples.length - 1; i >= 0; i--) {
        const rp = ripples[i];
        rp.r += 2.4;
        rp.alpha -= 0.018;
        if (rp.alpha <= 0) { ripples.splice(i, 1); continue; }

        // Outer purple ring
        ctx.beginPath();
        ctx.arc(rp.x, rp.y, rp.r, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(139, 92, 246, ${rp.alpha})`;
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // Inner cyan ring
        if (rp.r > 8) {
          ctx.beginPath();
          ctx.arc(rp.x, rp.y, rp.r * 0.55, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(34, 211, 238, ${rp.alpha * 0.6})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }

      // Custom cursor dot
      const grd = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 10);
      grd.addColorStop(0, "rgba(168, 85, 247, 0.95)");
      grd.addColorStop(1, "rgba(168, 85, 247, 0)");
      ctx.beginPath();
      ctx.arc(mouse.x, mouse.y, 10, 0, Math.PI * 2);
      ctx.fillStyle = grd;
      ctx.fill();

      ctx.beginPath();
      ctx.arc(mouse.x, mouse.y, 3.5, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(255, 255, 255, 0.95)";
      ctx.fill();

      animId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: 9998,
      }}
    />
  );
}
