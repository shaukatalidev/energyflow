import type { NextPage } from "next";
import Image from "next/image";
import React from "react";

const Footer2: React.FC = () => {
  return (
    <section
      className={`self-stretch bg-[#89c6e8] flex flex-col items-center justify-start pt-16 sm:pt-24 md:pt-32 lg:pt-40 xl:pt-[246px] pb-6 sm:pb-8 md:pb-12 px-4 sm:px-6 lg:px-8 xl:px-[38px] box-border gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-[225px] max-w-full text-left text-5xl text-[#f8fcff] font-[Poppins]`}
    >
      {/* Header Section with Input */}
      <div className="w-full max-w-4xl flex flex-col items-center justify-center">
        <div className="w-full max-w-md sm:max-w-lg md:max-w-xl flex flex-col items-center gap-4 sm:gap-6 md:gap-8">
          <input 
            title="Your text"
            placeholder="Enter your email..."
            className="border-white border-solid border-[1px] [outline:none] w-full bg-[rgba(255,255,255,0.8)] shadow-[0px_4px_10px_rgba(0,_0,_0,_0.25)] [backdrop-filter:blur(200px)] rounded-[25px] sm:rounded-[35px] md:rounded-[50px] box-border min-w-[250px] z-[1] px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-5 text-sm sm:text-base md:text-lg text-gray-700 placeholder:text-gray-500"
            type="email"
          />
          <h2 className="m-0 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl tracking-[-0.03em] leading-tight font-semibold font-[inherit] z-[1] text-center">
            Footer
          </h2>
        </div>
      </div>

      {/* Main Footer Content */}
      <section className="self-stretch flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8 sm:gap-12 lg:gap-5 max-w-full text-left text-xl sm:text-2xl text-white font-[Poppins]">
        
        {/* Logo Section */}
        <div className="w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[333px] flex flex-col items-center lg:items-start justify-start order-2 lg:order-1">
          <Image
            className="w-full h-auto object-contain z-[1] max-w-[200px] sm:max-w-[240px] lg:max-w-full"
            loading="lazy"
            width={241}
            height={128}
            sizes="(max-width: 640px) 200px, (max-width: 1024px) 240px, 241px"
            alt="Enerzyflow Logo"
            src="/MainLogo4.jpg"
          />
        </div>

        {/* Copyright Section */}
        <div className="flex flex-col items-center lg:items-start justify-start text-center lg:text-left order-3 lg:order-2 max-w-full lg:pt-4 xl:pt-[53px]">
          <h3 className="m-0 text-base sm:text-lg md:text-xl lg:text-2xl tracking-[-0.03em] leading-relaxed sm:leading-loose lg:leading-[77px] font-medium font-[inherit] z-[1] px-2">
            ©️ 2025 Enerzyflow. All Rights Reserved
          </h3>
        </div>

        {/* Social Media Icons */}
        <div className="flex flex-col items-center lg:items-start justify-start order-1 lg:order-3 lg:pt-4 xl:pt-[46px]">
          <div className="flex flex-row items-center justify-center gap-3 sm:gap-4 lg:gap-[19px]">
            <div className="cursor-pointer hover:scale-110 transition-transform duration-200">
              <Image
                className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 lg:h-[55px] lg:w-[55px] relative object-cover z-[1] rounded-lg hover:shadow-lg transition-shadow duration-200"
                width={55}
                height={55}
                sizes="(max-width: 640px) 40px, (max-width: 768px) 48px, (max-width: 1024px) 56px, 55px"
                alt="Facebook"
                src="/facebook.png"
              />
            </div>
            <div className="cursor-pointer hover:scale-110 transition-transform duration-200">
              <Image
                className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 lg:h-[55px] lg:w-[55px] relative object-cover z-[1] rounded-lg hover:shadow-lg transition-shadow duration-200"
                width={55}
                height={55}
                sizes="(max-width: 640px) 40px, (max-width: 768px) 48px, (max-width: 1024px) 56px, 55px"
                alt="Instagram"
                src="/instagram.png"
              />
            </div>
            <div className="cursor-pointer hover:scale-110 transition-transform duration-200">
              <Image
                className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 lg:h-[55px] lg:w-[55px] relative object-cover z-[1] rounded-lg hover:shadow-lg transition-shadow duration-200"
                width={55}
                height={55}
                sizes="(max-width: 640px) 40px, (max-width: 768px) 48px, (max-width: 1024px) 56px, 55px"
                alt="LinkedIn"
                src="/linkedin.png"
              />
            </div>
            {/* Uncomment if you want to add YouTube */}
            {/* <div className="cursor-pointer hover:scale-110 transition-transform duration-200">
              <Image
                className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 lg:h-[55px] lg:w-[55px] relative object-cover z-[1] rounded-lg hover:shadow-lg transition-shadow duration-200"
                width={55}
                height={55}
                sizes="(max-width: 640px) 40px, (max-width: 768px) 48px, (max-width: 1024px) 56px, 55px"
                alt="YouTube"
                src="/yout.png"
              />
            </div> */}
          </div>
        </div>
      </section>
    </section>
  );
};

export default Footer2;