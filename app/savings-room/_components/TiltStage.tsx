"use client";

import { useEffect, useRef, type ReactNode } from "react";

/**
 * The web stand-in for the app's DeviceTilt: sets --tilt-x and --tilt-y
 * (-1 to 1) on this element from the pointer's position, easing toward it
 * the way the app follows the device. Positive x dips the right edge;
 * positive y dips the top. Pointer-only and off with Reduce Motion; touch
 * screens get a gentle CSS sway instead (see HeroVisual.module.css).
 */
export function TiltStage({
  className,
  label,
  children,
}: {
  className?: string;
  label: string;
  children: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stage = ref.current;
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!stage || !finePointer.matches || reduceMotion.matches) return;

    const target = { x: 0, y: 0 };
    const current = { x: 0, y: 0 };
    let frame = 0;

    const step = () => {
      current.x += (target.x - current.x) * 0.12;
      current.y += (target.y - current.y) * 0.12;
      stage.style.setProperty("--tilt-x", current.x.toFixed(3));
      stage.style.setProperty("--tilt-y", current.y.toFixed(3));
      const settled =
        Math.abs(target.x - current.x) < 0.002 &&
        Math.abs(target.y - current.y) < 0.002;
      frame = settled ? 0 : requestAnimationFrame(step);
    };
    const follow = () => {
      if (!frame) frame = requestAnimationFrame(step);
    };
    const clamp = (value: number) => Math.min(Math.max(value, -1), 1);

    const onMove = (event: PointerEvent) => {
      const box = stage.getBoundingClientRect();
      target.x = clamp(
        (event.clientX - (box.left + box.width / 2)) / (window.innerWidth / 2),
      );
      target.y = clamp(
        (box.top + box.height / 2 - event.clientY) / (window.innerHeight / 2),
      );
      follow();
    };
    const onLeave = () => {
      target.x = 0;
      target.y = 0;
      follow();
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeave);
    return () => {
      window.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("pointerleave", onLeave);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div ref={ref} className={className} role="img" aria-label={label}>
      {children}
    </div>
  );
}
