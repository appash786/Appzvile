"use client";

import { Box, Lock, Search, Settings, Sparkles } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { div, section } from "motion/react-client";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image, { StaticImageData } from "next/image";
import './style.css'
import graphics from '@/public/assets/projects/cards/graphics.jpg'
import video from '@/public/assets/projects/cards/edit.jpg'
import web from '@/public/assets/projects/cards/web.jpg'
import seo from '@/public/assets/projects/cards/seo.jpg'
export function WhatIdo() {
  const containerLeft = useRef(null)

  const [show, setShow] = useState(false);
  const descRef = useRef<HTMLDivElement>(null);

  useEffect(() => {

    if (descRef.current) {
      ScrollTrigger.create({
        trigger: descRef.current,
        start: "top 80%",
        onEnter: () => setShow(true),
        once: true,
      });
    }
  }, []);
  const words = 'A full-stack blend of design, development, and digital storytelling';
  return (
    <div className="">
          <section ref={descRef} className="xl:mt-30   flex flex-col items-center">

      <div className='xl:w-3/4 px-3 h-30  text-center' >
        {show && (
          <TextGenerateEffect className={'text-3xl'} words={words} />


        )}
      </div>

      <p className=" xl:text-xl xl:w-[700px] xl:mt-15 mt-8 text-center text-white/70">Our creative-driven solutions help you stand out online, boost engagement, and turn ideas into impactful digital experiences.</p>
      <ul className="grid grid-cols-1 xl:mt-13 mt-10 px-6 gap-6 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:grid-rows-[repeat(3,_7rem)]   xl:max-h-[54rem] xl:grid-rows-3">

        <GridItem
          area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/4/4]"
          icon={<Box className="h-4 w-4 text-black dark:text-neutral-400" />}
          title="Graphic design"
          image={graphics}
          description="Running out of copy so I'll write anything."
        />

        <GridItem
          area="md:[grid-area:1/7/2/13] xl:[grid-area:1/4/4/7]"
          icon={<Settings className="h-4 w-4 text-black dark:text-neutral-400" />}
          title="Video editing"
          image={video}
          description="Yes, it's true. I'm not even kidding. Ask my mom if you don't believe me."
        />

        <GridItem
          area="md:[grid-area:2/1/3/7] xl:[grid-area:1/7/4/10]"
          icon={<Lock className="h-4 w-4 text-black dark:text-neutral-400" />}
          title="Web development"
          image={web}
          description="It's the best money you'll ever spend"
        />

        <GridItem
          area="md:[grid-area:2/7/3/13] xl:[grid-area:1/10/4/13]"
          icon={<Sparkles className="h-4 w-4 text-black dark:text-neutral-400" />}
          title="SEO"
          image={seo}
          description="I'm not even kidding. Ask my mom if you don't believe me."
        />

      </ul>

    </section>
    </div>


  );
}

interface GridItemProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
  image: StaticImageData
}

const GridItem = ({ area, icon, title, description , image }: GridItemProps) => {
  return (
    <li className={`min-h-[14rem] list-none ${area}`}>
      <div className="relative h-full rounded-2xl border-[2px] group border-white/50 p-2 md:rounded-3xl md:p-3">
        <GlowingEffect
          blur={0}
          borderWidth={3}
          spread={80}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className="border-0.75  relative flex h-full flex-col  justify-center gap-6 overflow-hidden rounded-xl p-6 md:p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D]">
          <div className="gradientGrid top-0 left-0 z-[333] w-full h-full absolute" />
          <Image src={image} className="absolute group-hover:scale-110 duration-400 z-[332] top-0 left-0 object-cover w-full h-full" alt="hi" width={700} height={400}/>
          <div className="relative z-[334]   flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border border-gray-600 p-2">
              {icon}
            </div>
            <div className="space-y-3">
              <h3 className="-tracking-4 pt-0.5 font-sans text-xl/[1.375rem] font-semibold text-balance text-black md:text-2xl/[1.875rem] dark:text-white">
                {title}
              </h3>
              <h2 className="font-sans text-sm/[1.125rem] text-black md:text-base/[1.375rem] dark:text-neutral-400 [&_b]:md:font-semibold [&_strong]:md:font-semibold">
                {description}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
