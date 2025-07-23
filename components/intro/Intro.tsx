'use client'
import { ArrowRight } from 'lucide-react'
import React from 'react'
import mac from "@/public/assets/intro/mACtRANS.png";
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './style.css';
import { useRef, useLayoutEffect } from 'react';
const Intro = () => {
  const introImage = useRef(null);
  const light = useRef(null);
  const container = useRef(null);

  useLayoutEffect(() => {
    gsap.set([introImage.current, light.current, container.current], { autoAlpha: 0 });

    gsap.set([introImage.current, container.current], { y: 100 }); // Start 100px below

    // Fade in both, then slide image up
    gsap.timeline()
      .to([introImage.current, light.current], { delay: 1 })
      .to(introImage.current, {
        autoAlpha: 1,
        y: 0,
        delay: 0, // No delay for introImage
        duration: 1.4,
        ease: "power2.out",
      })
      .to([container.current], {
        stagger: .4,
        autoAlpha: 1,
        delay: 3, // 0.4 sec delay for paragraph
        y: 0,

        duration: 1.4,
        ease: "power2.out",
      }, 0)
      .to(light.current, {
        autoAlpha: 1,
        delay: 2.4, // 2 sec delay for light
        duration: 1,
        ease: "power2.out",
      }, 0); // Start at the same time as timeline, but delay is inside tween

    gsap.registerPlugin(ScrollTrigger);
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: document.documentElement,
        start: 'top',
        end: '+=500px',
        scrub: true,
        markers: true,
      }
    });
    timeline
      .to([introImage.current], {
        y: -100,
        stagger: 0.1,
        duration: 1,
        ease: "power2.out",
      },0)
      // .to([paragraph.current,button.current], {
      //   y: -150,
  
      //   duration: 1.5,
      //   ease: "power2.out",
      // },0)
      .to(light.current, {
        autoAlpha: 0,
        duration: 1,
        ease: "power2.out",
      }, "<"); // "<" means start at the same time as the previous tween


  }, [])
  return (
    <section className=' flex justify-center  relative mt-10 w-full h-[90vh]'>
      <div ref={container} className='flex flex-col relative z-[100] justify-end items-center pb-30 gap-5 h-full'>
        {/* <h1 className='text-5xl font-bold text-white'>Welcome to AppzVile</h1> */}
        <p className='text-5xl drop-shadow-black text-center font-bold text-white mt-4  leading-snug '>We Design. We Develop. We Deliver. <br />
          <span className='text-gray-400'>Bold digital results for brands</span>.</p>
        <div className='flex gap-4'>
          <button className='bg-blue-400  flex items-center px-6 text-white  text-2xl font-bold py-2 rounded'>Get Started <ArrowRight size={34} /> </button>

        </div>
      </div>
      <div className='gradient1 absolute z-[2] bottom-0 w-screen h-screen' />
      <div ref={introImage} className='absolute introBg bottom-30 flex items-center justify-center z-[3]   w-full h-full bg-[url("/images/intro-bg.png")] bg-cover bg-no-repeat'>
        <Image src={mac} width={1100} objectFit='cover' alt="Mac Transformation" />
      </div>
      <div ref={light} className='gradient2 absolute z-[1] bottom-0 w-screen h-screen' />

    </section>
  )
}

export default Intro