import { useEffect, useRef } from "react";

function makeStars(w, h) {
  return Array.from({ length: 220 }, () => ({
    x: Math.random() * w,
    y: Math.random() * h,
    r: Math.random() * 1.4 + 0.3,
    alpha: Math.random() * 0.7 + 0.3,
    dir: Math.random() > 0.5 ? 1 : -1,
    speed: 0.003 + Math.random() * 0.006,
    vx: (Math.random() - 0.5) * 0.08,
    vy: (Math.random() - 0.5) * 0.08,
  }));
}

export default function StarField() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let stars = [];
    const shoots = [];
    let animId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      stars = makeStars(canvas.width, canvas.height);
    };
    resize();
    window.addEventListener("resize", resize);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw + update stars
      stars.forEach((s) => {
        s.alpha += s.speed * s.dir;
        if (s.alpha >= 1 || s.alpha <= 0.1) s.dir *= -1;
        s.x += s.vx;
        s.y += s.vy;
        if (s.x < 0) s.x = canvas.width;
        if (s.x > canvas.width) s.x = 0;
        if (s.y < 0) s.y = canvas.height;
        if (s.y > canvas.height) s.y = 0;

        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${s.alpha})`;
        ctx.fill();
      });

      // Shooting stars
      if (Math.random() < 0.004) {
        shoots.push({
          x: Math.random() * canvas.width * 0.8,
          y: Math.random() * canvas.height * 0.4,
          len: 90 + Math.random() * 80,
          spd: 9 + Math.random() * 7,
          ang: Math.PI / 4 + (Math.random() - 0.5) * 0.25,
          alpha: 1,
        });
      }

      for (let i = shoots.length - 1; i >= 0; i--) {
        const ss = shoots[i];
        ss.x += Math.cos(ss.ang) * ss.spd;
        ss.y += Math.sin(ss.ang) * ss.spd;
        ss.alpha -= 0.022;
        if (ss.alpha <= 0) { shoots.splice(i, 1); continue; }

        const grd = ctx.createLinearGradient(
          ss.x, ss.y,
          ss.x - Math.cos(ss.ang) * ss.len,
          ss.y - Math.sin(ss.ang) * ss.len
        );
        grd.addColorStop(0, `rgba(255,255,255,${ss.alpha})`);
        grd.addColorStop(1, "rgba(255,255,255,0)");
        ctx.beginPath();
        ctx.moveTo(ss.x, ss.y);
        ctx.lineTo(ss.x - Math.cos(ss.ang) * ss.len, ss.y - Math.sin(ss.ang) * ss.len);
        ctx.strokeStyle = grd;
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }

      animId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
      }}
    />
  );
}
