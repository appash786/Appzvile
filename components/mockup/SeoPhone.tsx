import { SearchIcon } from 'lucide-react'
import React, { useEffect, useRef ,useState } from 'react'
import { TypewriterEffectSmooth } from '../ui/typewriter-effect'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { isMotionValue } from 'motion'

gsap.registerPlugin(ScrollTrigger)

const SeoPhone = () => {
    const [isMobile, setIsMobile] = useState(false);

    const firstRef = useRef(null)
    const containerRef = useRef(null)
    const phoneRef = useRef(null)

    const searchResults = [
        { title: "Your website" }, { title: "Oakridge Builders" },
        { title: "Laveta Fashion" }, { title: "BrightNest Consulting" },
        { title: "Greenspade Organics" }, { title: "Coastline Escapes" }
    ]

    const words = [{ text: searchResults[0].title , className: 'text-2xl items-center font-medium' }]

useEffect(() => {
  const checkMobile = () => {
    setIsMobile(window.innerWidth <= 786);
  };
  checkMobile();
  window.addEventListener("resize", checkMobile);

  const items = containerRef.current.querySelectorAll(".search-item");

  gsap.fromTo(
    items,
    { x: 90, scale: 1.5, opacity: 0 },
    {
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: -5,
      rotateX: -15,
      stagger: 0.3,
      ease: "power2.out",
      scrollTrigger: {
        trigger: phoneRef.current,
        start: "top +=500",
        end: "bottom 10%",
        scrub: true,
        markers: false,
        onEnter: () => {
          gsap.to(firstRef.current, {
            backgroundColor: "#22c55e",
            delay: 2,
            duration: 1,
            ease: "power2.out",
          });
        },
      },
    }
  );

  // Watch isMobile dynamically
  const phoneAnim = gsap.to(phoneRef.current, {
    scrollTrigger: {
      trigger: phoneRef.current,
      start: "top +=900",
      end: "bottom",
      scrub: true,
      markers: false,
    },
    y: -40,
    rotateY: -20,
    rotateX: -10,
    scale: isMobile  ? 0.9 : 0.8, // directly check
    ease: "power2.out",
    transformOrigin: "center center",
  });

  return () => {
    window.removeEventListener("resize", checkMobile);
    phoneAnim.scrollTrigger.kill(); // cleanup GSAP
  };
}, [isMobile]); // add isMobile as dependency


    return (
        <div className='w-full  flex  justify-center '>
            <div ref={phoneRef} className='w-[400px] xl:scale-100 scale-50 SeoMobile h-[600px] overflow-hidden rounded-2xl flex p-1 relative z-10'>
                <div className='innerSeoMobile overflow-hidden rounded-2xl w-full h-full'>
                    <div className='gradientLayer' />
                    <div className='search w-full mt-2 flex gap-2 items-center justify-center flex-col h-[150px]'>
                        <h3 className='text-5xl mt-4 font-bold'>
                            <span className='text-blue-600'>S</span>
                            <span className='text-red-500'>E</span>
                            <span className='text-yellow-400'>O</span>
                        </h3>
                        <div className='w-[90%] mt-4 SeoMobile h-14 p-[3px] rounded-2xl'>
                            <div className='flex gap-3 innerSeoMobile rounded-2xl px-3 w-full h-full items-center'>
                                <SearchIcon color='white' />
                                <TypewriterEffectSmooth words={words} />
                            </div>
                        </div>
                    </div>

                    {/* Search Results */}
                    <div ref={containerRef} className='w-full mt-3 h-full overflow-hidden flex-col flex'>
                        {searchResults.map((item, i) => (
                            <div key={i} className="search-item SeoMobile w-full flex py-[1px] h-[90px]">
                                <div ref={i === 0 ? firstRef : null} className='flex px-4 text-white innerSeoMobile w-full h-full'>
                                    <div className="h-full flex items-center px-2 w-[60px]">
                                        <p className="text-2xl"># {i + 1}</p>
                                    </div>
                                    <div className="w-full h-full flex items-center px-2">
                                        <p className="text-lg font-semibold">{item.title}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SeoPhone
