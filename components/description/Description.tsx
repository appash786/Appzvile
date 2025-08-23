'use client'
import React, { useRef, useEffect, useState } from 'react'
import { TextGenerateEffect } from '../ui/text-generate-effect'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { div } from 'motion/react-client'

gsap.registerPlugin(ScrollTrigger);

const Description = () => {
  const words = 'AppzVile is a creative digital agency fusing web development and graphic design—minimal, tech-forward, and precise.'
  const [show, setShow] = useState(false);
  const descRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!descRef.current) return;
    ScrollTrigger.create({
      trigger: descRef.current,
      start: "top 80%",
      onEnter: () => setShow(true),
      once: true,
    });
  }, []);

  return (
    <div ref={descRef} id='About' className='xl:h-[50vh] border-b border-t mt-6 flex flex-col   py-5    w-full '>
      {show && (
        <div className='xl:w-2/4 px-1 text-center' >
            <TextGenerateEffect className={'xl:text-3xl text-xl'} words={words} />
        </div>
      )}
    </div>
  )
}

export default Description