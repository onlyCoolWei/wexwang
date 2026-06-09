'use client';

import { useEffect, useRef } from 'react';

type Pointer = {
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  force: number;
  targetForce: number;
};

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export function MagneticDotGrid({ className = '' }: { className?: string }) {
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

    const pointer: Pointer = {
      x: 0,
      y: 0,
      targetX: 0,
      targetY: 0,
      force: 0,
      targetForce: 0,
    };
    const reducedMotion = prefersReducedMotion();
    const spacing = 26;
    const radius = 132;
    let animationFrame = 0;
    let width = 0;
    let height = 0;
    let devicePixelRatio = 1;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      devicePixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.floor(width * devicePixelRatio);
      canvas.height = Math.floor(height * devicePixelRatio);
      context.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
    };

    const draw = () => {
      context.clearRect(0, 0, width, height);

      if (!reducedMotion) {
        pointer.x += (pointer.targetX - pointer.x) * 0.14;
        pointer.y += (pointer.targetY - pointer.y) * 0.14;
        pointer.force += (pointer.targetForce - pointer.force) * 0.08;
      }

      for (let y = spacing / 2; y < height; y += spacing) {
        for (let x = spacing / 2; x < width; x += spacing) {
          const dx = pointer.x - x;
          const dy = pointer.y - y;
          const distance = Math.hypot(dx, dy);
          const influence = reducedMotion ? 0 : Math.max(0, 1 - distance / radius) * pointer.force;
          const pull = influence * influence * 13;
          const angle = Math.atan2(dy, dx);
          const dotX = x + Math.cos(angle) * pull;
          const dotY = y + Math.sin(angle) * pull;
          const dotRadius = 1.05 + influence * 1.65;
          const alpha = 0.18 + influence * 0.55;

          context.beginPath();
          context.fillStyle = `rgba(214, 232, 255, ${alpha})`;
          context.arc(dotX, dotY, dotRadius, 0, Math.PI * 2);
          context.fill();
        }
      }

      if (!reducedMotion) {
        animationFrame = window.requestAnimationFrame(draw);
      }
    };

    const handlePointerMove = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointer.targetX = event.clientX - rect.left;
      pointer.targetY = event.clientY - rect.top;
      pointer.targetForce = 1;
    };

    const handlePointerLeave = () => {
      pointer.targetForce = 0;
    };

    resize();
    draw();

    window.addEventListener('resize', resize);
    canvas.addEventListener('pointermove', handlePointerMove);
    canvas.addEventListener('pointerleave', handlePointerLeave);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('pointermove', handlePointerMove);
      canvas.removeEventListener('pointerleave', handlePointerLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`pointer-events-auto absolute inset-0 h-full w-full [mask-image:radial-gradient(circle_at_48%_44%,black_0%,black_45%,transparent_86%)] ${className}`}
    />
  );
}
