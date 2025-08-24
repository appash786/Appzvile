'use client'
import VantaHalo from '../VantoHalo/Halo'
import Image from 'next/image'
import React from 'react'
import Alogo from '@/public/assets/intro/Logo/LogoA.png'
import Blogo from '@/public/assets/intro/Logo/LogoV.png'
import { useRef, useLayoutEffect } from 'react';
const page = () => {
    const introImage = useRef(null);
    const light = useRef(null);
    const container = useRef(null);

    return (
        <>
            <div className='opacity- w-full' >
                <VantaHalo />
            </div>
            <section className='w-full h-[90vh] flex flex-col xl:gap-6 justify-end relative '>
                {/* Content */}
                <div className='w-full h-1/2 flex justify-center items-end '>

                    <div className='w-[500px] xl:scale-80 scale-40 flex justify-center items-center    relative h-[120px]'>
                        <Image src={Alogo} alt="Hero" className=" absolute" width={500} height={274} priority />
                        <Image src={Blogo} alt="Hero" className=" absolute" width={500} height={274} priority />
                    </div>

                </div>
                <div className='w-full h-1/2 xl:mt-12 text-center '>

                    <p className="xl:text-5xl text-xl drop-shadow-black font-bold text-white xl:mt-0 leading-snug">
                        We Design. We Develop. We Deliver. <br />
                        <span className="text-gray-400">
                            Bold digital results for brands
                        </span>
                        .
                    </p>
                    <div className="flex mt-1 gap-4 justify-center">
                        <button className="relative inline-flex xl:mt-6 mt-3 xl:h-15 h-10 overflow-hidden rounded-full p-[3px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                            <span className="inline-flex h-full xl:px-12 px-4 w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 py-1 xl:text-xl text-xs font-medium text-white backdrop-blur-3xl">
                                Get Started
                            </span>
                        </button>
                    </div>

                </div>

            </section>
        </>
    )
}

export default page