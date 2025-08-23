'use client'
import React, { useRef, useLayoutEffect, useState, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { AnimatedText } from '../Projects/Project'
import SeoPhone from '@/components/mockup/SeoPhone'
import First from '../mockup/First'

gsap.registerPlugin(ScrollTrigger)

const Seo = () => {
    const [isMobile, setIsMobile] = useState(false);
    const containerLeft = useRef<HTMLDivElement>(null)
    const subtitleRef = useRef<HTMLParagraphElement>(null)
    const titleRef = useRef<HTMLParagraphElement>(null)
    const itemsRef = useRef<HTMLDivElement>(null)
    const phoneRef = useRef(null)

    const phrase3 = [
        { text: 'Turn search traffic ', color: 'white' },
        { text: 'into customers ', color: 'gray-400' }
    ]
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 786);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
    })

    useLayoutEffect(() => {
        
        const ctx = gsap.context(() => {
            // 📌 Pin left section for ~4s of scroll distance
            if (containerLeft.current) {

                ScrollTrigger.create({
                    trigger: containerLeft.current,
                    pin: true,
                    start: !isMobile? 'top +=100' : 'center +=650',
                    end: !isMobile? 'center +=100' : 'bottom -=1000', // ← Controls scroll distance (can tweak this)
                    scrub: true,
                    

                    markers: true,
                })
            }

            // 🌀 Scroll-based upward animation
            if (subtitleRef.current) {
                gsap.to([subtitleRef.current, titleRef.current, itemsRef.current, phoneRef.current], {
                    y: -100,
                    ease: 'none',
                    scrollTrigger: {
                        trigger: subtitleRef.current,
                        start: 'top +=500',
                        end: 'bottom top',
                        scrub: true,
                    },
                })
            }
        })

        return () => ctx.revert()
    }, [])

    return (
        <div className="w-full ">
            <section
                ref={containerLeft}
                id="service"
                className="w-full xl:min-h-[] grid xl:grid-cols-10 grid-cols-1 xl:mt-10 mt-15"
            >
                {/* 🔹 Left Section (Pinned) */}
                <div

                    className="xl:col-span-5  px-6 col-span-1 relative flex-col xl:border-r border-white/20 flex"
                >
                    <div ref={titleRef} className="relative flex flex-col w-full">
                        {phrase3.map((phrases, index) => (
                            <AnimatedText key={index} color={phrases.color}>
                                {phrases.text}
                            </AnimatedText>
                        ))}
                    </div>

                    <div ref={phoneRef} className="xl:min-h-[580px] max-h-[360px]   xl:mt-19 mt-26 xl:border-b border-white/20 xl:px-3 px-1 flex justify-center relative w-full">
                        <SeoPhone />
                    </div>
                </div>

                {/* 🔹 Right Section (Scrolls freely) */}
                <div className="col-span-5 xl:mt-3 mt-12 flex">
                    <div className="relative mt-30 border-t border-white/50 p-5 w-full">
                        <p
                            ref={subtitleRef}
                            className="xl:text-2xl w-3/4 p-5 blurBg font"
                        >
                            Pixel-Perfect Across Devices. Optimized to Rank High.
                        </p>

                        <div
                            ref={itemsRef}
                            className="min-h-[550px] mt-12 relative w-full"
                        >
                            <First />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Seo
