'use client'
import React, { useState, useRef, useEffect } from 'react'
import "./style.css";
import { Menu } from 'lucide-react';
import gsap from 'gsap';

const NavBar = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const navRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (navRef.current) {
            gsap.set(navRef.current, { y: -80, autoAlpha: 0 });
            gsap.to(navRef.current, {
                y: 0,
                autoAlpha: 1,
                delay: 3, // 3 second delay before showing navbar
                duration: 1,
                ease: "power2.out"
            });
        }
    }, []);

    return (
        <section className='relative'>
            <nav
                ref={navRef}
                className='w-full navbar z-[1000] fixed text-white xl:px-60 xl:p-6 p-3 flex justify-between items-center'
            >
                <div className='xl:text-3xl text-amber-50 font-bold'>AppzVile</div>
                <div className='hidden xl:flex gap-6' >
                    <a href="#" className='px-4 opacity-70 xl:text-xl'>Home</a>
                    <a href="#" className='px-4 opacity-70 xl:text-xl'>About</a>
                    <a href="#" className='px-4 opacity-70 xl:text-xl'>Contact</a>
                </div>
                <div className='text-lg font-bold hidden xl:flex'>MyApp</div>
                <div className='flex xl:hidden'>
                    <button onClick={() => setSidebarOpen(!sidebarOpen)}>
                        <Menu className='text-white' />
                    </button>
                </div>
                <div className='bg-white opacity-45 bottom-0 left-0  justify-end absolute w-screen h-[1px]' />
            </nav>

            {/* Sidebar with slide animation */}
            <div
                className={`
                    fixed top-0 right-0 rounded-bl-2xl px-5 pb-5 w-[200px] navbar z-50
                    transform transition-transform duration-300 
                    ${sidebarOpen ? 'translate-x-0' : 'translate-x-full'}
                    xl:hidden
                `}
            >
                <nav>
                    <button
                        className="absolute top-4 right-4 text-white"
                        onClick={() => setSidebarOpen(false)}
                    >
                        ✕
                    </button>
                    <ul className='text-white mt-12'>
                        <li className='p-4 hover:bg-gray-700'>Home</li>
                        <li className='p-4 hover:bg-gray-700'>About</li>
                        <li className='p-4 hover:bg-gray-700'>Services</li>
                    </ul>
                </nav>
            </div>
        </section>
    )
}

export default NavBar