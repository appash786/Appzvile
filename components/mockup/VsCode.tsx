import React, { useRef, useEffect, useState } from 'react'
import gsap from 'gsap'
import './styles.css'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {MousePointerClick} from 'lucide-react'
import MouseFollowLight from '../MouseFollow/MouseFollowLight'
import ContainerShade from '../containerShade/ContainerShade'
gsap.registerPlugin(ScrollTrigger)

const codeSnippets = [
  `// life motto
if (sad() === true) {
  sad().stop();
  beAwesome();
}`,
  `// stay positive
if (fail) {
  learn();
  tryAgain();
}`,
  `// keep coding
while (alive) {
  code();
  haveFun();
}`
];

const colors = [
  'bg-[#2d3a4a]',
  'bg-[#22304a]',
  'bg-[#1a2233]'
];

const VsCode = () => {
  const cardsRef = useRef<Array<HTMLDivElement | null>>([]);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(0);
  const [showHint, setShowHint] = useState(false);
  const hintTimeout = useRef<NodeJS.Timeout | null>(null);

  // Animate cards on active change (carousel effect)
  useEffect(() => {
    cardsRef.current.forEach((card, i) => {
      if (!card) return;
      const isActive = i === active;
      gsap.to(card, {
        zIndex: isActive ? 30 : i === (active + 1) % 3 ? 20 : 10,
        rotate: isActive ? 0 : i === (active + 1) % 3 ? -3 : 2,
        x: isActive ? 0 : i === (active + 1) % 3 ? -32 : 32,
        y: isActive ? 0 : i === (active + 1) % 3 ? -24 : 24,
        scale: isActive ? 1 : i === (active + 1) % 3 ? 0.97 : 0.93,
        opacity: isActive ? 1 : i === (active + 1) % 3 ? 0.8 : 0.6,
        pointerEvents: isActive ? "auto" : "none",
        duration: 0.6,
        ease: "power3.inOut"
      });
    });
  }, [active]);

  // Initial stacking and ScrollTrigger animation
  useEffect(() => {
    if (!containerRef.current) return;
    // Set initial stacking and hidden state
    cardsRef.current.forEach((card, i) => {
      if (!card) return;
      gsap.set(card, {
        zIndex: i === 0 ? 30 : i === 1 ? 20 : 10,
        rotate: i === 0 ? 0 : i === 1 ? -3 : 2,
        x: i === 0 ? 0 : i === 1 ? -32 : 32,
        y: 100, // Start further down for more visible bottom-to-up
        scale: i === 0 ? 1 : i === 1 ? 0.97 : 0.93,
        opacity: 0, // Start hidden
        pointerEvents: "none"
      });
    });
    // Animate in when scrolled into view
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top 80%",
      onEnter: () => {
        gsap.to(cardsRef.current, {
          opacity: (i: number) => (i === 0 ? 1 : 0.8 - i * 0.2),
          y: (i: number) => (i === 0 ? 0 : i === 1 ? -24 : 24),
       
          stagger: 0.1,
          duration: 0.8,
          ease: "power3.out", markers: false,
        });
      }
    });
    // Cleanup
    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, []);

  // Show hint if user doesn't interact
  useEffect(() => {
    if (hintTimeout.current) clearTimeout(hintTimeout.current);
    setShowHint(false);
    hintTimeout.current = setTimeout(() => setShowHint(true), 3500);
    return () => {
      if (hintTimeout.current) clearTimeout(hintTimeout.current);
    };
  }, [active]);

  // Handle click to cycle cards and hide hint
  const handleNext = () => {
    setActive((prev) => (prev + 1) % codeSnippets.length);
    setShowHint(false);
    if (hintTimeout.current) clearTimeout(hintTimeout.current);
    hintTimeout.current = setTimeout(() => setShowHint(true), 3500);
  };

  return (
    <div ref={containerRef} className="relative w-full h-[500px] flex items-center justify-center">
      {/* Carousel-like stacked windows */}
      {codeSnippets.map((snippet, i) => (
        <div
          key={i}
          ref={el => (cardsRef.current[i] = el)}
          className={`
            absolute
            rounded-xl
            shadow-2xl
            border border-white/10
            xl:w-[500px] max-w-full
            w-[250px]
            h-[200px]
            xl:h-[340px]
            overflow-hidden
            transition-all
            duration-500
            flex flex-col
            CodeCard 
            
            
            select-none
          `}
          style={{
            top: `${i * 32}px`,
            backgroundImage: ''
          }}
          onClick={handleNext}
          tabIndex={0}
          aria-label="Show next code window"
        >
          {/* Window header */}
           
          <div className="flex windowBar items-center px-4 py-2  rounded-t-xl border-b border-white/10">
            <span className="w-4 h-4 bg-red-400 rounded-full mr-2"></span>
            <span className="w-4 h-4 bg-yellow-400 rounded-full mr-2"></span>
            <span className="w-4 h-4 bg-green-400 rounded-full"></span>
            <span className="ml-auto text-sm text-gray-400 font-mono">Appzvile</span>
          </div>
          <ContainerShade/>
         
          {/* Code area */}
          <pre className="flex-1 font-mono text-white xl:text-lg text-xs px-6 py-6 whitespace-pre leading-relaxed select-none">
            {snippet}
          </pre>
        </div>
      ))}
      {/* Click hint */}
      {showHint && (
        <div className="absolute top-50 z-[888] left-1/2 -translate-x-1/2 text-base text-blue-400 bg-black/70 px-4 py-2 rounded-full shadow pointer-events-none animate-bounce">
          <MousePointerClick />
        </div>
      )}
    </div>
  )
}

export default VsCode