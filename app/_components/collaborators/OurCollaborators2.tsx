'use client'
import type { NextPage } from "next";
import Image from "next/image";
import { useState, useEffect } from "react";
import Basundhara from "@/public/logos/basundhara_logo.jpg"
import Cherry from "@/public/logos/cherry_logo.jpg"
import Mohor from "@/public/logos/mohor_logo.jpg"
import Paradise from "@/public/logos/paradise_logo.jpg"
import Smartpind from "@/public/logos/smart_pind.jpg"
import Taaz from "@/public/logos/taaz_logo.jpg"
import Vinayak from "@/public/logos/vinayak_logo.jpg"

export type FrameComponent14Type = {
  className?: string;
};

const FrameComponent14: NextPage<FrameComponent14Type> = ({
  className = "",
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    { src: Basundhara, alt: "Basundhara Logo" },
    { src: Cherry, alt: "Cherry Logo" },
    { src: Mohor, alt: "Mohor Logo" },
    { src: Paradise, alt: "Paradise Logo" },
    { src: Smartpind, alt: "Smart Pind Logo" },
    { src: Taaz, alt: "Taaz Logo" },
    { src: Vinayak, alt: "Vinayak Logo" }
  ];

  // Auto-advance carousel every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % Math.ceil(images.length / 4));
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  const totalSlides = Math.ceil(images.length / 4);

  const getVisibleImages = () => {
    const startIndex = currentSlide * 4;
    return images.slice(startIndex, startIndex + 4);
  };

  const getImagesPerSlide = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 640) return 1; // sm
      if (window.innerWidth < 768) return 2; // md
      if (window.innerWidth < 1024) return 3; // lg
    }
    return 4; // xl and above
  };

  return (
    <section
      className={`self-stretch min-h-[600px] h-auto flex flex-row items-start justify-center pt-0 pb-8 px-4 box-border max-w-full text-left text-5xl text-[#01b6f4] font-[Poppins] lg:pb-[99px] md:pb-16 sm:pb-12 ${className}`}
    >
      <div className="w-full max-w-[1200px] shadow-[0px_4px_10px_rgba(0,_0,_0,_0.25)] [backdrop-filter:blur(200px)] rounded-[30px] lg:rounded-[50px] [background:radial-gradient(50%_50%_at_50%_50%,_rgba(1,_182,_244,_0.4),_rgba(0,_122,_190,_0.4))] border-[#0083cb] border-solid border-[1px] box-border flex flex-col items-center justify-start py-6 lg:py-[37px] px-4 lg:px-[13px] gap-8 lg:gap-[88px]">
        
        {/* Title Section - Centered */}
        <div className="w-full flex flex-row items-center justify-center">
          <div className="relative shadow-[0px_4px_10px_rgba(0,_0,_0,_0.25)] [backdrop-filter:blur(200px)] rounded-[30px] lg:rounded-[50px] bg-[rgba(0, 131, 203, 0.2)] border-[#0083CB] border-solid border-[1px] box-border px-6 lg:px-8 py-3 lg:py-4">
            <h2 className="m-0 text-2xl lg:text-5xl md:text-4xl sm:text-3xl tracking-[-0.03em] leading-tight font-bold text-center whitespace-nowrap">
              <span className="text-[#01b6f4]">Our </span>
              <span className="text-[#0083cb]">Collaborators</span>
            </h2>
          </div>
        </div>

        {/* Carousel Container - Responsive */}
        <section className="w-full max-w-[1100px] flex-1 relative overflow-hidden">
          <div className="flex transition-transform duration-500 ease-in-out h-full">
            <div className="flex gap-3 lg:gap-[18px] min-w-full h-full items-center justify-center px-2">
              {getVisibleImages().map((image, index) => (
                <div
                  key={`${currentSlide}-${index}`}
                  className="rounded-[20px] lg:rounded-[40px] w-full max-w-[200px] lg:max-w-[250px] h-[180px] lg:h-[240px] md:h-[200px] sm:h-[160px] overflow-hidden flex items-center justify-center bg-white shadow-lg flex-shrink-0"
                >
                  <Image
                    className="h-full w-full object-cover"
                    loading="lazy"
                    width={250}
                    height={240}
                    sizes="(max-width: 640px) 200px, (max-width: 768px) 200px, (max-width: 1024px) 220px, 250px"
                    alt={image.alt}
                    src={image.src}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Dots Navigation - Responsive */}
        <div className="flex gap-2 lg:gap-3 items-center justify-center">
          {Array.from({ length: 2 }, (_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 lg:w-3 lg:h-3 rounded-full transition-all duration-300 ${currentSlide === index
                ? 'bg-[#01b6f4] scale-125'
                : 'bg-[#0083cb] opacity-50 hover:opacity-80'
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FrameComponent14;