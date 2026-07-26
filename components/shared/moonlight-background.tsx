"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

type Star = {
  x: number; // 0..1 relative
  y: number; // 0..1 relative
  radius: number;
  baseAlpha: number;
  twinkleSpeed: number;
  twinkleOffset: number;
};

type ShootingStar = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
};

/**
 * Moonlight scene — glowing moon with volumetric rays, twinkling star
 * field (canvas), drifting mist layers, and scroll parallax.
 * Designed to layer WITH the existing ParticleBackground.
 */
export function MoonlightBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reducedMotion = useReducedMotion();
  const { scrollY } = useScroll();

  // Parallax: moon drifts up and fades slightly as you scroll
  const moonY = useTransform(scrollY, [0, 1200], [0, -160]);
  const moonOpacity = useTransform(scrollY, [0, 900], [1, 0.5]);
  const mistY = useTransform(scrollY, [0, 1200], [0, 80]);

  /* ---------- Star field + shooting stars (canvas) ---------- */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || reducedMotion) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let stars: Star[] = [];
    let shooting: ShootingStar[] = [];
    let lastShoot = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const count = canvas.width < 768 ? 70 : 130;
      stars = Array.from({ length: count }, () => ({
        x: Math.random(),
        y: Math.random() * 0.85,
        radius: Math.random() * 1.1 + 0.3,
        baseAlpha: Math.random() * 0.5 + 0.15,
        twinkleSpeed: Math.random() * 0.002 + 0.0008,
        twinkleOffset: Math.random() * Math.PI * 2,
      }));
    };

    const spawnShootingStar = () => {
      const startX = Math.random() * canvas.width * 0.7;
      const startY = Math.random() * canvas.height * 0.3;
      const speed = 6 + Math.random() * 4;
      const angle = Math.PI / 4 + (Math.random() - 0.5) * 0.3;
      shooting.push({
        x: startX,
        y: startY,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        life: 0,
        maxLife: 50 + Math.random() * 30,
      });
    };

    const draw = (t: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Twinkling stars
      for (const s of stars) {
        const twinkle =
          s.baseAlpha +
          Math.sin(t * s.twinkleSpeed + s.twinkleOffset) * s.baseAlpha * 0.7;
        const alpha = Math.max(0.05, twinkle);
        ctx.beginPath();
        ctx.arc(s.x * canvas.width, s.y * canvas.height, s.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(226, 232, 255, ${alpha})`;
        ctx.fill();

        // Cross-glint on the brightest stars
        if (s.radius > 1.15 && alpha > 0.5) {
          const cx = s.x * canvas.width;
          const cy = s.y * canvas.height;
          const len = s.radius * 5;
          ctx.strokeStyle = `rgba(226, 232, 255, ${alpha * 0.35})`;
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.moveTo(cx - len, cy);
          ctx.lineTo(cx + len, cy);
          ctx.moveTo(cx, cy - len);
          ctx.lineTo(cx, cy + len);
          ctx.stroke();
        }
      }

      // Occasional shooting star (every ~7–14s)
      if (t - lastShoot > 7000 + Math.random() * 7000) {
        spawnShootingStar();
        lastShoot = t;
      }

      shooting = shooting.filter((m) => m.life < m.maxLife);
      for (const m of shooting) {
        m.x += m.vx;
        m.y += m.vy;
        m.life++;
        const fade = 1 - m.life / m.maxLife;
        const tailX = m.x - m.vx * 8;
        const tailY = m.y - m.vy * 8;
        const grad = ctx.createLinearGradient(m.x, m.y, tailX, tailY);
        grad.addColorStop(0, `rgba(255, 255, 255, ${0.8 * fade})`);
        grad.addColorStop(1, "rgba(255, 255, 255, 0)");
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.4;
        ctx.beginPath();
        ctx.moveTo(m.x, m.y);
        ctx.lineTo(tailX, tailY);
        ctx.stroke();
      }

      animationId = requestAnimationFrame(draw);
    };

    resize();
    animationId = requestAnimationFrame(draw);
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, [reducedMotion]);

  return (
    <div className="pointer-events-none fixed inset-0 -z-20 overflow-hidden" aria-hidden>
      {/* Deep night gradient wash */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(30,41,82,0.55),_transparent_60%)]" />

      {/* Star field */}
      {!reducedMotion && <canvas ref={canvasRef} className="absolute inset-0" />}

      {/* Moon + halo + rays (parallax group) */}
      <motion.div
        style={reducedMotion ? undefined : { y: moonY, opacity: moonOpacity }}
        className="absolute right-[8%] top-[6%] sm:right-[12%] sm:top-[8%]"
      >
        {/* Outer volumetric halo */}
        <div className="absolute left-1/2 top-1/2 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,_rgba(203,213,255,0.10)_0%,_rgba(148,163,255,0.05)_35%,_transparent_70%)] animate-moon-pulse" />
        {/* Mid glow */}
        <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,_rgba(226,232,255,0.16)_0%,_rgba(186,196,255,0.07)_45%,_transparent_72%)]" />
        {/* Moon body */}
        <div className="relative h-24 w-24 rounded-full sm:h-28 sm:w-28">
          <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_38%_35%,_#f4f6ff_0%,_#dde3f7_45%,_#aab4d8_100%)] shadow-[0_0_60px_18px_rgba(210,220,255,0.28),0_0_140px_60px_rgba(160,175,255,0.12)]" />
          {/* Craters */}
          <div className="absolute left-[22%] top-[30%] h-3.5 w-3.5 rounded-full bg-[#c3cbe8]/70 shadow-[inset_1px_1px_2px_rgba(90,100,140,0.35)]" />
          <div className="absolute left-[55%] top-[18%] h-2 w-2 rounded-full bg-[#c3cbe8]/60 shadow-[inset_1px_1px_2px_rgba(90,100,140,0.3)]" />
          <div className="absolute left-[60%] top-[55%] h-4 w-4 rounded-full bg-[#bcc5e4]/60 shadow-[inset_1px_1px_3px_rgba(90,100,140,0.35)]" />
          <div className="absolute left-[30%] top-[62%] h-2.5 w-2.5 rounded-full bg-[#c3cbe8]/50 shadow-[inset_1px_1px_2px_rgba(90,100,140,0.3)]" />
        </div>
        {/* Light rays */}
        {!reducedMotion && (
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="h-[420px] w-[2px] origin-center animate-ray-slow bg-gradient-to-b from-transparent via-white/[0.06] to-transparent" />
            <div className="absolute inset-0 h-[420px] w-[2px] rotate-45 animate-ray-slower bg-gradient-to-b from-transparent via-white/[0.05] to-transparent" />
            <div className="absolute inset-0 h-[420px] w-[2px] rotate-90 animate-ray-slow bg-gradient-to-b from-transparent via-white/[0.04] to-transparent" />
            <div className="absolute inset-0 h-[420px] w-[2px] -rotate-45 animate-ray-slower bg-gradient-to-b from-transparent via-white/[0.05] to-transparent" />
          </div>
        )}
      </motion.div>

      {/* Moonlight beam falling across the page */}
      <div className="absolute -top-24 right-0 h-[80vh] w-[55vw] rotate-[18deg] bg-[linear-gradient(200deg,_rgba(203,213,255,0.07)_0%,_rgba(203,213,255,0.02)_40%,_transparent_75%)] blur-2xl" />

      {/* Drifting mist layers */}
      <motion.div
        style={reducedMotion ? undefined : { y: mistY }}
        className="absolute inset-x-0 bottom-0 h-[45vh]"
      >
        <div className="absolute inset-x-[-20%] bottom-[-10%] h-64 animate-mist-1 rounded-[100%] bg-[radial-gradient(ellipse,_rgba(123,97,255,0.07)_0%,_transparent_70%)] blur-3xl" />
        <div className="absolute inset-x-[-30%] bottom-[5%] h-56 animate-mist-2 rounded-[100%] bg-[radial-gradient(ellipse,_rgba(148,163,255,0.06)_0%,_transparent_70%)] blur-3xl" />
        <div className="absolute inset-x-[-10%] bottom-[-5%] h-48 animate-mist-3 rounded-[100%] bg-[radial-gradient(ellipse,_rgba(0,245,212,0.04)_0%,_transparent_70%)] blur-3xl" />
      </motion.div>
    </div>
  );
}
