'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './styles.css';

export default function MouseFollowLight() {
  const cursorRef = useRef<HTMLDivElement>(null);

  const moveCursor = (e: MouseEvent) => {
    gsap.to(cursorRef.current, {
      x: e.clientX,
      y: e.clientY,
      duration: 0.3,
    });
  };

  const handleClick = (e: MouseEvent) => {
    if (!cursorRef.current) return;

    if (e.button === 0) {
      // Left click
      cursorRef.current.classList.add('bg-blue-500');
      setTimeout(() => {
        cursorRef.current?.classList.remove('bg-blue-500');
      }, 300);
    }

    if (e.button === 2) {
      // Right click
      e.preventDefault();
      cursorRef.current.classList.add('bg-white');
      setTimeout(() => {
        cursorRef.current?.classList.remove('bg-white');
      }, 300);
    }
  };

  useEffect(() => {
    gsap.set(cursorRef.current, {
      xPercent: -50,
      yPercent: -50,
    });

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mousedown', handleClick); // catches all mouse buttons
    window.addEventListener('contextmenu', (e) => e.preventDefault()); // disable default menu

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mousedown', handleClick);
    };
  }, []);

  return (
    <div className="z-[1000] cursor pointer-events-none fixed top-0 left-0">
      <div
        ref={cursorRef}
        className="border border-2 border-white w-10 h-10 rounded-full transition-colors duration-200"
      ></div>
    </div>
  );
}
