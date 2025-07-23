'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function ContainerShade() {
  const lightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const light = lightRef.current;

    if (!light) return;

    const moveLight = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInGlowZone = target.closest('.glow-zone');

      if (isInGlowZone) {
        const rect = isInGlowZone.getBoundingClientRect();
        light.style.opacity = '1';

        gsap.to(light, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.3,
          ease: 'power2.out',
        });
      } else {
        light.style.opacity = '0';
      }
    };

    window.addEventListener('mousemove', moveLight);
    return () => {
      window.removeEventListener('mousemove', moveLight);
    };
  }, []);

  return (
    <>
      <div
        ref={lightRef}
        className="pointer-events-none cursor fixed top-0 left-0 z-[9999] w-40 h-40 rounded-full opacity-0"

      />
    </>
  );
}
