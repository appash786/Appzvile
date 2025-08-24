'use client'
import Image from 'next/image'
import ReactCompareImage from 'react-compare-image'
import React, { useEffect, useRef } from 'react'
import Laptop from '@/public/assets/projects/Laptop.png'
import BeforeImg from '@/public/assets/projects/BeforeImg.jpg'
import AfterImg from '@/public/assets/projects/AfterImg.jpg'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import CompareSlider from './CompareSlider'

gsap.registerPlugin(ScrollTrigger)

const BeforeAfter = () => {
  const laptopRef = useRef(null)
  const subtitleRef = useRef([])
  const subtitleRef2 = useRef([])

  useEffect(() => {
    const element = laptopRef.current
    const subElement = subtitleRef.current
    const subElement2 = subtitleRef2.current
    gsap.set(element, { y: 150 , opacity:0 })
    gsap.set([subElement,subElement2], { y: 150 ,  })

    ScrollTrigger.refresh()

    gsap.to(element, {
      y: 0,
      opacity:1,
      duration:1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: element,
        start: 'top +=700',
        end: 'bottom top',
        
        markers: false,
      },
    })
  gsap.to([subElement,subElement2], {
    y: 0,
    opacity: 1,
    duration: 1,
    stagger:.5,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: element,
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
      markers: false,

    },
  })

  }, [])

  return (
    <section className='w-full xl:h-[100vh] xl:mb-0 mb-40  relative flex items-center justify-center'>

                    


      <div ref={laptopRef} className='relative w-full xl:w-[1000px] h-auto'>
        <div  ref={subtitleRef}  className='xl:flex hidden absolute z-[999] xl:translate-y-20 xl:translate-x-[-180px]'>
                                <p  className='xl:text-xl   xl:w-[400px] p-4 blurBg font'>
                       A silent page collecting dust, ignored by both Google and your customers.<br />
                    </p>
        </div>
        <div  ref={subtitleRef2} className='xl:flex hidden absolute z-[999] bottom-30 xl:right-[-140px]'>
                                <p  className='xl:text-xl   xl:w-[400px] p-4 blurBg font'>
                     A magnetic brand hub — visible, trusted, and built to convert every click.<br />
                    </p>
        </div>

        {/* Laptop Image */}
        <Image
          src={Laptop}
          width={1000}
          height={600}
          alt='Laptop'
          className='pointer-events-none z-10 relative'
        />

        {/* Slider container absolutely positioned to match the screen area */}
        <div
          className='absolute z-20 xl:w-[655px] xl:h-[455px] xl:top-[59px] xl:left-[170px] top-7 left-18 bg-amber-500 w-[67vw] h-auto xl:rounded-lg overflow-hidden'
     
        >
          <ReactCompareImage
            leftImage={BeforeImg.src}
            rightImage={AfterImg.src}
            sliderLineColor='white'
            sliderPositionPercentage={0.5}
          />
          
        </div>
      </div>
    </section>
  )
}

export default BeforeAfter
