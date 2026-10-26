'use client';

import { gsap } from 'gsap';
import { type ReactNode, useEffect, useRef } from 'react';

export function PortraitTilt({ children }: { children: ReactNode }) {
  const surfaceRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const surface = surfaceRef.current;
    const card = cardRef.current;
    if (!surface || !card) return;

    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const position = { x: 0, y: 0, light: 0 };
    const velocity = { x: 0, y: 0, light: 0 };
    const target = { x: 0, y: 0, light: 0 };
    let running = false;
    let pointerId: number | null = null;
    const setRotationX = gsap.quickSetter(card, 'rotationX', 'deg');
    const setRotationY = gsap.quickSetter(card, 'rotationY', 'deg');
    gsap.set(card, { transformPerspective: 900 });

    const render = () => {
      setRotationX(-position.y * 10);
      setRotationY(position.x * 10);
      card.style.setProperty('--reflection-opacity', String(Math.max(0, Math.min(1, position.light))));
    };

    const tick = (_time: number, deltaTime: number) => {
      // Small integration steps keep the spring stable after a slow frame.
      const duration = Math.min(deltaTime / 1000, 0.064);
      const steps = Math.max(1, Math.ceil(duration / (1 / 120)));
      const dt = duration / steps;
      for (let step = 0; step < steps; step += 1) {
        for (const axis of ['x', 'y', 'light'] as const) {
          velocity[axis] += ((target[axis] - position[axis]) * 180 - velocity[axis] * 18) * dt;
          position[axis] += velocity[axis] * dt;
        }
      }
      render();
      if (
        Object.keys(position).every((key) => {
          const axis = key as keyof typeof position;
          return Math.abs(target[axis] - position[axis]) < 0.0005 && Math.abs(velocity[axis]) < 0.001;
        })
      ) {
        Object.assign(position, target);
        render();
        gsap.ticker.remove(tick);
        running = false;
        card.style.willChange = '';
      }
    };

    const start = () => {
      if (running) return;
      running = true;
      card.style.willChange = 'transform';
      gsap.ticker.add(tick);
    };

    const reset = () => {
      target.x = target.y = target.light = 0;
      if (motion.matches) {
        gsap.ticker.remove(tick);
        running = false;
        Object.assign(position, target);
        velocity.x = velocity.y = velocity.light = 0;
        render();
        card.style.willChange = '';
      } else {
        start();
      }
    };

    const move = (event: PointerEvent) => {
      if (motion.matches || !event.isPrimary || (event.pointerType !== 'mouse' && pointerId !== event.pointerId))
        return;
      // Measure the stationary wrapper, so rotation never shifts the touch coordinates.
      const bounds = surface.getBoundingClientRect();
      const x = gsap.utils.clamp(0, 1, (event.clientX - bounds.left) / bounds.width);
      const y = gsap.utils.clamp(0, 1, (event.clientY - bounds.top) / bounds.height);
      target.x = x * 2 - 1;
      target.y = y * 2 - 1;
      target.light = 1;
      card.style.setProperty('--reflection-x', `${x * 100}%`);
      card.style.setProperty('--reflection-y', `${y * 100}%`);
      start();
    };

    const down = (event: PointerEvent) => {
      if (!event.isPrimary || event.button !== 0 || motion.matches) return;
      pointerId = event.pointerId;
      surface.setPointerCapture(event.pointerId);
      move(event);
    };
    const release = (event: PointerEvent) => {
      if (pointerId !== null && event.pointerId !== pointerId) return;
      pointerId = null;
      if (surface.hasPointerCapture(event.pointerId)) surface.releasePointerCapture(event.pointerId);
      reset();
    };
    const leave = () => {
      if (pointerId === null) reset();
    };

    surface.addEventListener('pointerdown', down);
    surface.addEventListener('pointermove', move);
    surface.addEventListener('pointerleave', leave);
    surface.addEventListener('pointerup', release);
    surface.addEventListener('pointercancel', release);
    surface.addEventListener('lostpointercapture', release);
    window.addEventListener('blur', reset);
    motion.addEventListener('change', reset);
    return () => {
      gsap.ticker.remove(tick);
      surface.removeEventListener('pointerdown', down);
      surface.removeEventListener('pointermove', move);
      surface.removeEventListener('pointerleave', leave);
      surface.removeEventListener('pointerup', release);
      surface.removeEventListener('pointercancel', release);
      surface.removeEventListener('lostpointercapture', release);
      window.removeEventListener('blur', reset);
      motion.removeEventListener('change', reset);
      gsap.set(card, { clearProps: 'transform,willChange' });
      card.style.removeProperty('--reflection-opacity');
      card.style.removeProperty('--reflection-x');
      card.style.removeProperty('--reflection-y');
    };
  }, []);

  return (
    <div ref={surfaceRef} className="relative touch-pan-y select-none">
      <div ref={cardRef} className="portrait-tilt relative">
        {children}
        <div aria-hidden="true" className="portrait-reflection pointer-events-none absolute inset-0 rounded-[2rem]" />
      </div>
    </div>
  );
}
