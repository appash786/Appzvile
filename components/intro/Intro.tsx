'use client';
import React, { useRef, useLayoutEffect } from 'react';
import Alogo from '@/public/assets/intro/Logo/LogoA.png'
import Blogo from '@/public/assets/intro/Logo/LogoV.png'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './style.css';
import VantaHalo from '../VantoHalo/Halo';
import Image from 'next/image';


const Intro = () => {
  const container = useRef(null);
  const loader = useRef(null);
  const contentRef = useRef(null);
  const logoARef = useRef(null);
  const logoVRef = useRef(null);
  const videoBg = useRef(null)
  const BgRef = useRef(null)

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const loopTl = gsap.timeline({ repeat: -1, yoyo: true });

      // 🌀 Loop animation for LogoA and LogoV
      loopTl.to(logoARef.current, {
        opacity: 0.55,
        duration: 0.5,
        ease: 'power1.inOut',
        onStart: () => {
          document.body.classList.add("overflow-hidden");
        }
      }, 0)
        .to(logoVRef.current, {
          opacity: 1,
          duration: 0.5,
          ease: 'power1.inOut',
        }, 0)
        .to(logoARef.current, {
          opacity: 1,
          duration: 0.5,
          ease: 'power1.inOut',
        }, 1)
        .to(logoVRef.current, {
          opacity: 0.55,
          duration: 0.5,
          ease: 'power1.inOut',
        }, 1);

      // ✨ After 3 seconds, stop loop and animate loader → content
      setTimeout(() => {
        loopTl.kill();

        const exitLoader = gsap.timeline();

        exitLoader
          .to(loader.current, {
            opacity: 1,
            scale: .6,
            duration: 0.6,
            ease: 'power1.out',
            onComplete: () => {
              document.body.classList.remove("overflow-hidden");
            }
          })

          .fromTo([contentRef.current],
            { y: 0, opacity: 0 },
            {
              y: -50, // Move content up to close the gap
              opacity: 1,
              duration: 2,
              stagger: .2,
              ease: 'power2.out',
            }, 1
          );

      }, 3000);

      // 🚀 Scroll-based movement for loader and content
      if (loader.current) {
        gsap.to([loader.current, videoBg.current], {
          y: -100,
          ease: 'none',
          scrollTrigger: {
            trigger: loader.current,
            start: 'top +=500',
            end: 'bottom top',
            scrub: true,
            markers: false,
          },
        });
      }

      if (contentRef.current) {
        gsap.to(contentRef.current, {
          y: -100,
          ease: 'none',
          scrollTrigger: {
            trigger: contentRef.current,
            start: 'top +=500',
            end: 'bottom top',
            scrub: true,
            markers: false,
          },
        });
      }

    });

    return () => ctx.revert();
  }, []);


  return (
    <>
      <div className='opacity-0 w-full' ref={BgRef}>
        <VantaHalo />
      </div>
      <section id="Home" className="flex justify-center overflow-x-hidden xl:items-center relative xl:mt-0 mt-40 w-full xl:h-screen h-[40vh]">
        <div
          ref={container}
          className="flex flex-col relative z-[100] justify-center items-center xl:gap-0 xl:h-full"
        >
          {/* Loader */}
          <div
            ref={loader}
            className="xl:w-[600px] flex items-center justify-center"
          >
            <div className="xl:w-[500px] w-[500px] object-contain xl:scale-100 scale-60 h-[274px] relative">
              <Image ref={logoARef} src={Alogo} alt="Hero" className="w-full h-full absolute" width={500} height={274} priority />
              <Image ref={logoVRef} src={Blogo} alt="Hero" className="w-full h-full absolute" width={500} height={274} priority />
            </div>
          </div>

          {/* Hero Content */}
          <div ref={contentRef} className="text-center opacity-0">
            <p className="xl:text-5xl text-xl drop-shadow-black font-bold text-white xl:mt-0 leading-snug">
              We Design. We Develop. We Deliver. <br />
              <span className="text-gray-400">
                Bold digital results for brands
              </span>
              .
            </p>
            <div className="flex mt-3 gap-4 justify-center">
              <button className="relative inline-flex xl:mt-6 mt-3 xl:h-15 h-10 overflow-hidden rounded-full p-[3px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex h-full xl:px-12 px-4 w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 py-1 xl:text-xl text-xs font-medium text-white backdrop-blur-3xl">
                  Get Started
                </span>
              </button>
            </div>
          </div>

        </div>

      </section>
      <section>

      </section>
    </>
  );
};

export default Intro;