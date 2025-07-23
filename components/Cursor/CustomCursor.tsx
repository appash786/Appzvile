
import React, { useEffect, useRef } from 'react'

const CustomCursor = () => {
    const cursorRef = useRef<HTMLDivElement>(null);
    const follower = useRef<HTMLDivElement>(null);
    const moveCursor = (e: MouseEvent) => {
        gsap.to(cursorRef.current, {
            x: e.clientX,
            y: e.clientY,
            duration: 0.1,
        })
        gsap.to(follower.current, {
            x: e.clientX,
            y: e.clientY,
            duration: 0.1,
        })
    };
    useEffect(() => {
        gsap.set(cursorRef.current,{
            xPercent:100,
            yPercent:100,
        }) // Center the cursor       
        gsap.set(cursorRef.current,{
            xPercent: -20,
            yPercent: -20,
        }) // Center the cursor       
        window.addEventListener('mousemove', moveCursor);
    },[])
  return (
    <div>
        <div ref={cursorRef} className='cursor'></div>
        <div ref={follower} className='follower-cursor'></div>
    </div>
  )
}

export default CustomCursor