'use client';

import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import HALO from '@/lib/vanta.halo.min.js';
import { div } from 'motion/react-client';

gsap.registerPlugin(ScrollTrigger);

const VantaHalo = () => {
  const vantaRef = useRef<HTMLDivElement>(null);
  const [vantaEffect, setVantaEffect] = useState<any>(null);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const userAgent = typeof window.navigator === "undefined" ? "" : navigator.userAgent;
    const mobile = /iPhone|iPad|iPod|Android/i.test(userAgent);
    setIsMobile(mobile);

    if (!vantaEffect && vantaRef.current) {
      setVantaEffect(
        HALO({
          el: vantaRef.current,
          THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: !isMobile ? false : true,
          baseColor: 0x34353,
          backgroundColor: 0x060616,
          size: .7 ,
        })
      );
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  useEffect(() => {
    // if (vantaRef.current) {
    //   gsap.to(vantaRef.current, {
    //     filter: 'blur(50px) brightness(80%) ',
    //     duration: 1,
    //     y: 50,
    //     // You can tweak this
    //     scrollTrigger: {
    //       trigger: document.body,
    //       start: 'top -=10 ',
    //       end: 'bottom +=100',
    //       scrub: true,
    //       markers: false,
    //     },
    //   });
    // }
  }, []);

  return (
    <div className='w-full h-full  absolute flex items-center '>
      <div
        ref={vantaRef}
        className="w-full h-screen z-[-1] object-contain fixed xl:top-[-150px] top-[-110px]  t xl:left-0"
        style={{
          background: '0x060616',
          filter: 'blur(40px) brightness(70%) ', // Start with no blur
          transition: 'filter 0.3s ease',
        }}
      />
    </div>
  );
};

export default VantaHalo;
