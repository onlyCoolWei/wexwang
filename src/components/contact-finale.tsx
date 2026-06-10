'use client';

import { useEffect, useRef, useState } from 'react';

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

function easeInOutCubic(t: number) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

/**
 * Dot grid that collapses toward the section center as the finale scrolls
 * into view, leaving the email CTA as the only focal point.
 */
export function CollapsingDotGrid({ className = '' }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) {
      return;
    }

    const context = canvas.getContext('2d');

    if (!context) {
      return;
    }

    const reducedMotion = prefersReducedMotion();
    const spacing = 26;
    let animationFrame = 0;
    let running = false;
    let width = 0;
    let height = 0;
    let progress = 0;
    let targetProgress = 0;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const devicePixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.floor(width * devicePixelRatio);
      canvas.height = Math.floor(height * devicePixelRatio);
      context.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
    };

    const readScrollProgress = () => {
      const rect = canvas.getBoundingClientRect();
      const viewportHeight = window.innerHeight || 1;
      targetProgress = clamp(1 - rect.top / (viewportHeight * 0.85), 0, 1);
    };

    const draw = () => {
      progress += (targetProgress - progress) * 0.075;

      const eased = easeInOutCubic(reducedMotion ? 0 : progress);
      const centerX = width / 2;
      const centerY = height * 0.46;
      const maxDistance = Math.hypot(centerX, centerY) || 1;

      context.clearRect(0, 0, width, height);

      for (let y = spacing / 2; y < height; y += spacing) {
        for (let x = spacing / 2; x < width; x += spacing) {
          const dx = centerX - x;
          const dy = centerY - y;
          const distance = Math.hypot(dx, dy);
          const normalized = distance / maxDistance;
          // Outer dots travel a larger fraction so the whole field converges together.
          const pull = eased * (0.25 + 0.75 * normalized) * 0.94;
          const swirl = eased * 0.55 * (1 - normalized);
          const angle = Math.atan2(dy, dx) + swirl;
          const dotX = x + Math.cos(angle) * distance * pull;
          const dotY = y + Math.sin(angle) * distance * pull;
          const fade = 1 - pull * 0.85;
          const alpha = (0.07 + 0.13 * normalized) * fade + eased * 0.02;
          const radius = (1.05 + 0.5 * normalized) * (1 - pull * 0.55);

          context.beginPath();
          context.fillStyle = `rgba(214, 232, 255, ${alpha})`;
          context.arc(dotX, dotY, Math.max(radius, 0.3), 0, Math.PI * 2);
          context.fill();
        }
      }

      if (eased > 0.04) {
        const glow = context.createRadialGradient(centerX, centerY, 0, centerX, centerY, 220);
        glow.addColorStop(0, `rgba(165, 243, 252, ${0.1 * eased})`);
        glow.addColorStop(1, 'rgba(165, 243, 252, 0)');
        context.fillStyle = glow;
        context.fillRect(0, 0, width, height);
      }

      if (running) {
        animationFrame = window.requestAnimationFrame(draw);
      }
    };

    const start = () => {
      if (!running) {
        running = true;
        animationFrame = window.requestAnimationFrame(draw);
      }
    };

    const stop = () => {
      running = false;
      window.cancelAnimationFrame(animationFrame);
    };

    const handleScroll = () => readScrollProgress();
    const handleResize = () => {
      resize();
      readScrollProgress();
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          readScrollProgress();
          start();
        } else {
          stop();
        }
      },
      { rootMargin: '120px' },
    );

    resize();
    readScrollProgress();
    observer.observe(canvas);
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);

    return () => {
      stop();
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden="true" className={`absolute inset-0 h-full w-full ${className}`} />;
}

function TypedFeedback({ text }: { text: string }) {
  // Lazy init covers reduced motion; the component remounts per burst via `key`.
  const [count, setCount] = useState(() => (prefersReducedMotion() ? text.length : 0));

  useEffect(() => {
    const interval = window.setInterval(() => {
      setCount((current) => {
        if (current >= text.length) {
          window.clearInterval(interval);
          return current;
        }

        return current + 1;
      });
    }, 26);

    return () => window.clearInterval(interval);
  }, [text]);

  return (
    <p aria-live="polite" className="font-mono text-xs leading-6 tracking-[0.08em] text-cyan-100/75">
      <span className="text-cyan-300/80">&gt; </span>
      {text.slice(0, count)}
      {count < text.length ? <span className="ml-0.5 animate-pulse">_</span> : null}
    </p>
  );
}

type Particle = {
  dx: number;
  dy: number;
  delay: number;
  size: number;
};

export function EmailBeacon({
  email,
  subject,
  label,
  typedMessage,
}: {
  email: string;
  subject: string;
  label: string;
  typedMessage: string;
}) {
  const [burstKey, setBurstKey] = useState(0);
  const [particles, setParticles] = useState<Particle[]>([]);

  const handleClick = () => {
    // Keep default behavior so the mail app opens; only trigger feedback.
    setParticles(
      Array.from({ length: 16 }, (_, index) => {
        const angle = (index / 16) * Math.PI * 2 + Math.random() * 0.5;
        const distance = 64 + Math.random() * 56;

        return {
          dx: Math.cos(angle) * distance,
          dy: Math.sin(angle) * distance,
          delay: Math.random() * 120,
          size: 2 + Math.random() * 2.5,
        };
      }),
    );
    setBurstKey((key) => key + 1);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="relative">
        <a
          href={`mailto:${email}?subject=${encodeURIComponent(subject)}`}
          onClick={handleClick}
          className="group/beacon relative flex items-center justify-center overflow-hidden rounded-2xl border border-cyan-100/25 bg-cyan-100/[0.04] px-10 py-5 font-mono text-sm uppercase tracking-[0.3em] text-cyan-50 backdrop-blur transition duration-500 [animation:cta-breathe_3.6s_ease-in-out_infinite] hover:-translate-y-1 hover:border-cyan-100/60 hover:bg-cyan-100/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-100 sm:px-14 sm:py-6"
        >
          <span className="absolute inset-y-0 left-0 w-1/2 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition duration-700 group-hover/beacon:translate-x-[220%]" />
          <span className="relative">[ {label} ]</span>
        </a>

        {burstKey > 0 ? (
          <div key={burstKey} aria-hidden="true" className="pointer-events-none absolute inset-0">
            <span className="absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-cyan-100/50 [animation:beacon-ring_0.9s_cubic-bezier(0.16,1,0.3,1)_both]" />
            {particles.map((particle, index) => (
              <span
                key={index}
                className="absolute left-1/2 top-1/2 rounded-full bg-cyan-100 shadow-[0_0_14px_rgba(165,243,252,0.9)] [animation:particle-fly_0.85s_cubic-bezier(0.16,1,0.3,1)_both]"
                style={{
                  width: `${particle.size}px`,
                  height: `${particle.size}px`,
                  animationDelay: `${particle.delay}ms`,
                  ['--dx' as string]: `${particle.dx}px`,
                  ['--dy' as string]: `${particle.dy}px`,
                }}
              />
            ))}
          </div>
        ) : null}
      </div>

      <div className="mt-8 flex min-h-7 items-center justify-center">
        {burstKey > 0 ? <TypedFeedback key={burstKey} text={typedMessage} /> : null}
      </div>
    </div>
  );
}
