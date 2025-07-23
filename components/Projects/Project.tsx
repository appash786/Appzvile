'use client'

import React, { useRef, useLayoutEffect, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Vs from '@/components/mockup/VsCode';
import First from '../mockup/First';
import './styles.css';
import { div } from 'motion/react-client';
gsap.registerPlugin(ScrollTrigger);

const Project = () => {
    const containerLeft = useRef<HTMLDivElement>(null);
    const subtitleRef = useRef<HTMLParagraphElement>(null);
    const titleRef = useRef<HTMLParagraphElement>(null);
    const itemsRef = useRef<HTMLDivElement>(null);
    const phrase = [
        { text: 'Build blazing-fast websites', color: 'gray-400' },
        { text: " — handcrafted with clean,", color: 'white' },
        { text: ' powerful code.', color: 'gray-400' }
    ];
    const phrase2 = [
        { text: 'Turns visitors into leads ', color: 'white' },
        { text: "and leads into ", color: 'gray-400' },
        { text: 'loyal customers', color: 'white' }
    ];

    // 🔄 Infinite shake effect on subtitle
    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            if (containerLeft.current) {
                gsap.to(containerLeft.current, {
                    y: 0,
                    ease: 'none',
                    scrollTrigger: {
                        trigger: containerLeft.current,
                        start: 'top bottom',
                        end: 'bottom top',
                        scrub: true,
                    },
                });
            }

            if (subtitleRef.current) {
                gsap.to([subtitleRef.current, titleRef.current, itemsRef.current], {
                    y: -100,
                    ease: 'none',
                    scrollTrigger: {
                        trigger: subtitleRef.current,
                        start: 'top bottom',
                        end: 'bottom top',
                        scrub: true,
                    },
                });
            }
        });

        return () => ctx.revert();
    }, []);


    return (
        <section className='w-full h-[90vh] grid grid-cols-10 mt-10'>
            {/* left section */}
            <div ref={containerLeft} className='col-span-5 relative flex-col border-r    border-white/20  flex'>
                <div ref={titleRef} className='relative inline-block w-full'>
                    {phrase.map((phrases, index) => (

                        <AnimatedText key={index} color={phrases.color}>
                            {phrases.text}
                        </AnimatedText>
                    ))}
                </div>

                <div className='min-h-[580px] border-b border-white/20 px-3 flex justify-center relative w-full'>
                    <div className="relative  w-full h-[300px] flex justify-center mt-20">
                        <Vs />
                    </div>
                </div>
            </div>

            {/* right section */}
            <div className='col-span-5 flex'>
                <div className='relative mt-30 border-t   border-white/50  p-5 w-full'>
                    <p ref={subtitleRef} className='text-2xl  w-3/4 p-5 blurBg font'>
                        Pixel-Perfect Across Devices. Optimized to Rank High.<br />
                    </p>
                    <div ref={itemsRef} className='min-h-[550px]  mt-12  relative w-full'>
                        <First />
                    </div>
                </div>
            </div>

            {/* <div className='col-span-10 justify-center flex-col items-center  mt-10 h-[50vh] flex'>
                <h3 className='text-5xl text-center font-semibold  '>Visitors deserve more than <br /> <span className='text-white/30'> slow sites</span> and <span className='text-white/30'> outdated designs</span></h3>
                <p className='mt-6 w-3/5 text-center text-white/60 '>Today’s users expect speed, clarity, and seamless interaction—yet many websites still load like it's 2010, confuse with cluttered layouts, and fail to connect.
                    It’s time to craft digital experiences that feel human—smart, fast, and made with care.</p>


            </div> */}


        </section>
    );
};

export default Project;

type AnimatedTextProps = {
    children: React.ReactNode;
    color?: string;
};

function AnimatedText({ children, color }: AnimatedTextProps) {
    const textRef = useRef<HTMLParagraphElement>(null);

    useLayoutEffect(() => {
        const el = textRef.current;
        if (!el) return;

        const anim = gsap.from(el, {
            scrollTrigger: {
                trigger: el,
                start: 'top 70%',
                end: 'bottom+=400px bottom',
                markers: false,
            },
            x: -100,
            autoAlpha: 0,
            duration: 1,
            ease: "power2.out",
        });

        return () => {
            anim.kill();
            ScrollTrigger.getById(el)?.kill();
        };
    }, []);

    return (
        <p ref={textRef} className={`text-${color} text-5xl font-bold my-4`}>
            {children}
        </p>
    );
}
