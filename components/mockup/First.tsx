import React from 'react'
import Intro from '../intro/Intro'
import Image from 'next/image'
import './styles.css'
import bg from '@/public/assets/projects/wallpaper.png'
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MenuIcon } from 'lucide-react'
import { div } from 'motion/react-client'

gsap.registerPlugin(ScrollTrigger);

const First = () => {
  
  return (
    <div className=' relative h-[55vh]  flex justify-between  w-full   rounded-lg '>
      <Mobile />
      <Laptop/>
      {/* Placeholder for the mobile component */}
      {/* You can replace this with your actual mobile component */}
    </div>
  )
}

export default First
function Laptop(){

  return(
    <div className='xl:w-[480px] w-[330px] group mb-20 mb- xl:h-[30vh] h-[27vh] self-end flex justify-end flex-col items-center  relative border backdrop-blur-2xl border-white/50 rounded-xl overflow-hidden'>
      <div className='w-full px-1 pt-1 h-full relative'>
        <div className='w-full border backdrop-blur-2xl flex items-center justify-center border-white/50 h-full relative overflow-hidden rounded-lg'>
                {/* Background Image */}
        <Image
          src={bg}
          alt='waterfall'
          fill
          
          className='absolute group-hover:scale-110 transition-transform duration-700 z-[10] object-cover'
        />
        <div className='gradientW z-[11] w-full h-full absolute' />

        {/* Foreground Content */}
        <div className='absolute z-[12] w-[90%] self-center mt-2 h-6 px-5  navbar  top-0 flex items-center justify-between '>
          <h4 className='text-[10px] '>Travel</h4>
          <ul className='flex gap-2 text-[8px] opacity-60'>
            <li>Home</li>
            <li>service</li>
            <li>about</li>
          </ul>

        </div>
        <div className="absolute z-20 p-4 mb-4 gap-2 inset-0 flex flex-col items-center justify-end  text-center  text-white">
          <h4 className="text-lg font-bold leading-tight">
            Explore the World with Us
          </h4>
          <p className="xl:text-[12px] text-[8px] opacity-65 xl:w-1/2 w-3/4">
            Discover breathtaking places, unforgettable adventures, and custom-made tours designed just for you.
          </p>
          <button className="xl:mt-2 px-3 py-1 bg-yellow-500 text-[6px] hover:bg-yellow-600 text-black rounded-xl font-semibold shadow-lg transition">
            Plan Your Trip
          </button>
        </div>

        </div>

      </div>
      <div className='w-full h-5 border justify-end bg-white opacity-75 ' />
    </div>
  )
}

function Mobile() {
  const bgImage = useRef(null);
  const boxRef = useRef(null);

  useEffect(() => {
    const el = boxRef.current;

    gsap.fromTo(
      el,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: el,
          start: 'top 80%',
        },
        onComplete: () => {
          gsap.to(el, {
            x: 4,
            y: -.01,
            rotate: .01,
            duration: 1,
            repeat: -1,
            yoyo: true,
            ease: 'power1.inOut',
          });


        },
      }
    );
    gsap.fromTo(
      bgImage.current,
      { scale:1, opacity: 0 },
      {
        scale: 1.2,
        opacity: 1,
        duration: 2,
        scrollTrigger: {
          trigger: el,
          start: 'top 80%',
        },

      }
    );



  }, []);
  return (
    <div ref={boxRef} className='xl:w-[300px] w-[200px] group right-0 absolute xl:h-[50vh] h-[30vh] border border-gray-500 p-1 rounded-2xl shadow-lg'>
      <div className='w-full relative overflow-hidden h-full border-gray-500 flex items-center rounded-xl justify-center bg-cover border'>

        {/* Background Image */}
        <Image
          src={bg}
          alt='waterfall'
          fill
          ref={bgImage}
          className='absolute group-hover:scale-110 transition-transform duration-700 z-[10] object-cover'
        />
        <div className='gradientW z-[11] w-full h-full absolute' />

        {/* Foreground Content */}
        <div className='absolute z-[12] w-full h-10 px-3  navbar  top-0 flex items-center justify-between '>
          <h4 className='text-[12px]'>Travel</h4>
          <MenuIcon size={15}  />

        </div>
        <div className="absolute z-20 p-4  gap-2 inset-0 flex flex-col items-center justify-end mb-12 text-center  text-white">
          <h4 className="xl:text-lg  font-bold leading-tight">
            Explore the World with Us
          </h4>
          <p className="xl:text-[12px] text-[8px]">
            Discover breathtaking places, unforgettable adventures, and custom-made tours designed just for you.
          </p>
          <button className="mt-2 px-2 xl:py-2 py-1 bg-yellow-500 xl:text-[12px] text-[5px] hover:bg-yellow-600 text-black xl:rounded-xl rounded-xs font-semibold shadow-lg transition">
            Plan Your Trip
          </button>
        </div>
      </div>
    </div>

  )
}