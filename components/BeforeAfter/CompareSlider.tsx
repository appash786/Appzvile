'use client';
import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import BeforeImg from '@/public/assets/projects/BeforeImg.jpg';
import AfterImg from '@/public/assets/projects/AfterImg.jpg';

const CompareSlider = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const startDrag = () => setIsDragging(true);
  const stopDrag = () => setIsDragging(false);

  const handleMove = (e: MouseEvent | TouchEvent) => {
    if (!isDragging || !containerRef.current) return;

    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const { left, width } = containerRef.current.getBoundingClientRect();
    let percent = ((clientX - left) / width) * 100;

    percent = Math.max(0, Math.min(100, percent));
    setSliderPos(percent);
  };

  useEffect(() => {
    const move = (e: MouseEvent | TouchEvent) => handleMove(e);
    const up = () => stopDrag();

    if (isDragging) {
      window.addEventListener('mousemove', move);
      window.addEventListener('touchmove', move);
      window.addEventListener('mouseup', up);
      window.addEventListener('touchend', up);
    }

    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('touchmove', move);
      window.removeEventListener('mouseup', up);
      window.removeEventListener('touchend', up);
    };
  }, [isDragging]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[400px] overflow-hidden rounded-lg select-none cursor-col-resize"
      onMouseDown={startDrag}
      onTouchStart={startDrag}
    >
      {/* After Image (full background) */}
      <Image
        src={AfterImg}
        alt="After"
        fill
        className="object-cover"
      />

      {/* Before Image (clipped by width) */}
      <div
        className="absolute top-0 left-0 h-full overflow-hidden"
        style={{ width: `${sliderPos}%` }}
      >
        <Image
          src={BeforeImg}
          alt="Before"
          fill
          className="object-cover"
        />
      </div>

      {/* Slider Handle */}
      <div
        className="absolute top-0 h-full w-[2px] bg-white z-10"
        style={{ left: `${sliderPos}%`, transform: 'translateX(-50%)' }}
      >
        <div className="absolute top-1/2 -left-[10px] transform -translate-y-1/2 bg-white rounded-full w-5 h-5 border-2 border-black"></div>
      </div>
    </div>
  );
};

export default CompareSlider;
