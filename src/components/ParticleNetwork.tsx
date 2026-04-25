"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
};

type Settings = {
  MAX_PARTICLES: number;
  LINK_DIST: number;
  SPEED: number;
  DOT_SIZE: number;
  ALPHA: number;
  FPS_LIMIT: number;
};

const ParticleNetwork = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number>(0);
  const particlesRef = useRef<Particle[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const DPR = Math.min(window.devicePixelRatio || 1, 1.5);

    const getSettings = (): Settings => {
      const isMobile = window.innerWidth < 640;
      const isTablet = window.innerWidth < 1024;

      return {
        MAX_PARTICLES: isMobile ? 75 : isTablet ? 120 : 220,
        LINK_DIST: isMobile ? 105 : isTablet ? 115 : 145,
        SPEED: isMobile ? 0.24 : 0.34,
        DOT_SIZE: isMobile ? 1.45 : 1.45,
        ALPHA: isMobile ? 0.26 : 0.22,
        FPS_LIMIT: 60,
      };
    };

    let settings = getSettings();

    const rand = (min: number, max: number) => {
      return Math.random() * (max - min) + min;
    };

    const spawnParticle = () => {
      const w = canvas.clientWidth || window.innerWidth;
      const h = canvas.clientHeight || window.innerHeight;

      particlesRef.current.push({
        x: rand(0, w),
        y: rand(0, h),
        vx: rand(-settings.SPEED, settings.SPEED),
        vy: rand(-settings.SPEED, settings.SPEED),
      });
    };

    const initParticles = () => {
      particlesRef.current = [];

      for (let i = 0; i < settings.MAX_PARTICLES; i++) {
        spawnParticle();
      }
    };

    const resize = () => {
      const parent = canvas.parentElement;
      const w = parent?.clientWidth || window.innerWidth;
      const h = parent?.clientHeight || window.innerHeight;

      canvas.width = Math.floor(w * DPR);
      canvas.height = Math.floor(h * DPR);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;

      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);

      settings = getSettings();

      if (particlesRef.current.length > settings.MAX_PARTICLES) {
        particlesRef.current = particlesRef.current.slice(
          0,
          settings.MAX_PARTICLES,
        );
      }

      while (particlesRef.current.length < settings.MAX_PARTICLES) {
        spawnParticle();
      }
    };

    resize();
    initParticles();

    let resizeTimer: ReturnType<typeof setTimeout> | null = null;

    const handleResize = () => {
      if (resizeTimer) {
        clearTimeout(resizeTimer);
      }

      resizeTimer = setTimeout(resize, 120);
    };

    window.addEventListener("resize", handleResize);

    let last = performance.now();

    const tick = (now: number) => {
      const fpsInterval = 1000 / settings.FPS_LIMIT;

      if (now - last < fpsInterval) {
        rafRef.current = requestAnimationFrame(tick);
        return;
      }

      const dt = Math.min(32, now - last);
      last = now;

      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      const particles = particlesRef.current;

      ctx.clearRect(0, 0, w, h);

      for (let i = 0; i < particles.length; i++) {
        const particle = particles[i];

        particle.x += particle.vx * (dt / 16);
        particle.y += particle.vy * (dt / 16);

        if (particle.x < 0) {
          particle.x = 0;
          particle.vx *= -1;
        }

        if (particle.x > w) {
          particle.x = w;
          particle.vx *= -1;
        }

        if (particle.y < 0) {
          particle.y = 0;
          particle.vy *= -1;
        }

        if (particle.y > h) {
          particle.y = h;
          particle.vy *= -1;
        }
      }

      const cellSize = settings.LINK_DIST;
      const grid = new Map<string, number[]>();

      for (let i = 0; i < particles.length; i++) {
        const gx = Math.floor(particles[i].x / cellSize);
        const gy = Math.floor(particles[i].y / cellSize);
        const key = `${gx},${gy}`;

        if (!grid.has(key)) {
          grid.set(key, []);
        }

        grid.get(key)?.push(i);
      }

      ctx.lineWidth = 1;

      for (let i = 0; i < particles.length; i++) {
        const a = particles[i];
        const gx = Math.floor(a.x / cellSize);
        const gy = Math.floor(a.y / cellSize);

        for (let ox = -1; ox <= 1; ox++) {
          for (let oy = -1; oy <= 1; oy++) {
            const key = `${gx + ox},${gy + oy}`;
            const nearby = grid.get(key);

            if (!nearby) continue;

            for (let k = 0; k < nearby.length; k++) {
              const j = nearby[k];

              if (j <= i) continue;

              const b = particles[j];

              const dx = a.x - b.x;
              const dy = a.y - b.y;
              const distSq = dx * dx + dy * dy;
              const linkDistSq = settings.LINK_DIST * settings.LINK_DIST;

              if (distSq < linkDistSq) {
                const dist = Math.sqrt(distSq);
                const opacity = 1 - dist / settings.LINK_DIST;

                ctx.strokeStyle = `rgba(99, 255, 190, ${
                  settings.ALPHA * opacity
                })`;

                ctx.beginPath();
                ctx.moveTo(a.x, a.y);
                ctx.lineTo(b.x, b.y);
                ctx.stroke();
              }
            }
          }
        }
      }

      ctx.fillStyle = `rgba(220, 255, 240, ${settings.ALPHA + 0.08})`;

      for (let i = 0; i < particles.length; i++) {
        ctx.beginPath();
        ctx.arc(
          particles[i].x,
          particles[i].y,
          settings.DOT_SIZE,
          0,
          Math.PI * 2,
        );
        ctx.fill();
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafRef.current);

      if (resizeTimer) {
        clearTimeout(resizeTimer);
      }

      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 h-full w-full"
      aria-hidden="true"
    />
  );
};

export default ParticleNetwork;
