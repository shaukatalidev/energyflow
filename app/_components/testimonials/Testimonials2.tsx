import type { NextPage } from "next";
import Image from "next/image";

export type FrameComponent10Type = {
    className?: string;
};

const FrameComponent10: NextPage<FrameComponent10Type> = ({
    className = "",
}) => {
    return (
        <div
            className={`[background:radial-gradient(50%_50%_at_50%_50%,_#bbdfed,_#74c6f3)] py-6 sm:py-8 md:py-12 self-stretch flex flex-col items-start justify-start gap-8 sm:gap-12 md:gap-16 lg:gap-[66px] max-w-full px-4 sm:px-6 lg:px-8 ${className}`}
        >
            {/* Header Section */}
            <div className="w-full flex flex-row items-center justify-center">
                <div className="relative shadow-[0px_4px_10px_rgba(0,_0,_0,_0.25)] [backdrop-filter:blur(200px)] rounded-[25px] sm:rounded-[35px] lg:rounded-[50px] bg-steelblue-200 border-blue-800 border-solid border-[1px] box-border px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4">
                    <h2 className="m-0 text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl tracking-[-0.03em] leading-tight font-bold text-center whitespace-nowrap">
                        <span className="text-[#01b6f4]">User </span>
                        <span className="text-[#0083cb]">Testimonials</span>
                    </h2>
                </div>
            </div>

            {/* Subtitle Section */}
            <div className="w-full flex items-center justify-center px-4">
                <div className="max-w-4xl text-center">
                    <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl tracking-[-0.03em] leading-tight font-semibold font-poppins text-darkslategray">
                        What our customers say about us
                    </h3>
                </div>
            </div>

            {/* Testimonials Container */}
            <div className="flex flex-col lg:flex-row items-center justify-center gap-6 sm:gap-8 lg:gap-[42px] max-w-full z-[2] w-full">
                {/* Left Arrow Icon */}
                <div className="h-[50px] w-[50px] sm:h-[60px] sm:w-[60px] lg:h-[65px] lg:w-[62px] relative flex-shrink-0 hidden lg:block cursor-pointer hover:scale-105 transition-transform">
                    <div className="absolute top-[0px] left-[0px] shadow-[4px_2px_7px_1px_rgba(0,_0,_0,_0.25)] rounded-[15px] lg:rounded-[20px] bg-[#fffafa] w-full h-full" />
                    <div className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-[20px] sm:w-[25px] lg:w-[28.9px] h-[15px] sm:h-[18px] lg:h-[20px] z-[1] flex items-center justify-center">
                        <Image
                            className="w-full h-full object-contain"
                            width={29}
                            height={20}
                            sizes="100vw"
                            alt="Previous testimonial"
                            src="/ArrowLeft.svg"
                        />
                    </div>
                </div>

                {/* Testimonials Grid */}
                <div className="flex flex-col xl:flex-row gap-6 sm:gap-8 lg:gap-12 w-full max-w-7xl">
                    {/* First Testimonial */}
                    <div className="w-full max-w-none xl:max-w-[571px] relative shadow-[1px_3px_5px_6px_rgba(0,_0,_0,_0.25)] rounded-[15px] sm:rounded-[20px] bg-[#fff] mx-auto">
                        <section className="min-h-[350px] sm:min-h-[400px] lg:h-[501px] w-full relative text-center text-[#000] font-['Inria_Serif'] p-4 sm:p-6 lg:p-8">
                            <div className="flex flex-col items-center justify-start gap-4 sm:gap-6 lg:gap-[23px] relative z-[1] h-full">
                                <div className="w-full">
                                    <h2 className="m-0 text-xl sm:text-2xl md:text-3xl lg:text-[32px] xl:text-[40px] font-bold font-[inherit] mb-2 sm:mb-4">
                                        Hotel Prince
                                    </h2>
                                </div>
                                <div className="flex flex-col items-start justify-start gap-3 sm:gap-4 lg:gap-[17px] w-full flex-1">
                                    <div className="w-full flex justify-start items-start">
                                        <Image
                                            className="w-[20px] h-[15px] sm:w-[24px] sm:h-[18px] lg:w-[32px] lg:h-[24px] object-contain flex-shrink-0 mt-1"
                                            width={32}
                                            height={24}
                                            sizes="100vw"
                                            alt="Quote start"
                                            src="/quote-left.png"
                                        />
                                    </div>
                                    <div className="w-full flex-1 px-1 sm:px-2 lg:px-4">
                                        <p className="m-0 text-sm sm:text-base md:text-lg lg:text-xl xl:text-[25px] font-normal font-[inherit] text-left leading-relaxed">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ecommodo consequat. Duis aute irure dolor in reprehenderit
                                        </p>
                                    </div>
                                    <div className="w-full flex justify-end items-end">
                                        <Image
                                            className="w-[20px] h-[15px] sm:w-[24px] sm:h-[18px] lg:w-[32px] lg:h-[24px] object-contain flex-shrink-0 mb-1"
                                            width={32}
                                            height={24}
                                            sizes="100vw"
                                            alt="Quote end"
                                            src="/quote-right.png"
                                        />
                                    </div>
                                </div>
                                <div className="w-full flex justify-start">
                                    <div className="flex flex-row items-center justify-start gap-1 sm:gap-2 lg:gap-[9px]">
                                        {[...Array(4)].map((_, index) => (
                                            <Image
                                                key={index}
                                                className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 object-contain"
                                                width={24}
                                                height={24}
                                                sizes="100vw"
                                                alt="Star rating"
                                                src="/star.jpg"
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* Second Testimonial */}
                    <div className="w-full max-w-none xl:max-w-[571px] relative shadow-[1px_3px_5px_6px_rgba(0,_0,_0,_0.25)] rounded-[15px] sm:rounded-[20px] bg-[#fff] mx-auto">
                        <section className="min-h-[350px] sm:min-h-[400px] lg:h-[501px] w-full relative text-center text-[#000] font-['Inria_Serif'] p-4 sm:p-6 lg:p-8">
                            <div className="flex flex-col items-center justify-start gap-4 sm:gap-6 lg:gap-[23px] relative z-[1] h-full">
                                <h2 className="m-0 text-xl sm:text-2xl md:text-3xl lg:text-[32px] xl:text-[40px] font-bold font-[inherit] w-full mb-2 sm:mb-0">
                                    Hotel Prince
                                </h2>

                                <div className="flex flex-col items-start justify-start gap-3 sm:gap-4 lg:gap-[17px] w-full flex-1">
                                    <div className="w-full flex justify-start">
                                        <Image
                                            className="w-[20px] h-[15px] sm:w-[24px] sm:h-[18px] lg:w-[32px] lg:h-[24px] xl:w-[48px] xl:h-[36px] object-contain"
                                            width={48}
                                            height={36}
                                            sizes="100vw"
                                            alt="Quote start"
                                            src="/quote-left.png"
                                        />
                                    </div>

                                    <div className="w-full flex-1 px-1 sm:px-2">
                                        <p className="m-0 text-sm sm:text-base md:text-lg lg:text-xl xl:text-[25px] font-normal font-[inherit] text-left leading-relaxed">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ecommodo consequat. Duis aute irure dolor in reprehenderit
                                        </p>
                                    </div>

                                    <div className="w-full flex justify-end">
                                        <Image
                                            className="w-[20px] h-[15px] sm:w-[24px] sm:h-[18px] lg:w-[32px] lg:h-[24px] xl:w-[48px] xl:h-[36px] object-contain"
                                            width={48}
                                            height={36}
                                            sizes="100vw"
                                            alt="Quote end"
                                            src="/quote-right.png"
                                        />
                                    </div>
                                </div>

                                <div className="w-full flex justify-start">
                                    <div className="flex flex-row items-center justify-start gap-1 sm:gap-2 lg:gap-[9px]">
                                        {[...Array(4)].map((_, index) => (
                                            <Image
                                                key={index}
                                                className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 object-contain"
                                                width={24}
                                                height={24}
                                                sizes="100vw"
                                                alt="Star rating"
                                                src="/star.jpg"
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>

                {/* Right Arrow Icon */}
                <div className="h-[50px] w-[50px] sm:h-[60px] sm:w-[60px] lg:h-[65px] lg:w-[59px] relative flex-shrink-0 hidden lg:block cursor-pointer hover:scale-105 transition-transform">
                    <div className="absolute top-[0px] left-[0px] shadow-[4px_2px_7px_1px_rgba(0,_0,_0,_0.25)] rounded-[15px] lg:rounded-[20px] bg-[#fffafa] w-full h-full" />
                    <div className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-[20px] sm:w-[25px] lg:w-[27.5px] h-[15px] sm:h-[18px] lg:h-[20px] z-[1] flex items-center justify-center">
                        <Image
                            className="w-full h-full object-contain"
                            width={28}
                            height={20}
                            sizes="100vw"
                            alt="Next testimonial"
                            src="/ArrowRight.svg"
                        />
                    </div>
                </div>
            </div>

            {/* Mobile Navigation Arrows */}
            <div className="flex lg:hidden flex-row items-center justify-center gap-4 w-full">
                <div className="h-[50px] w-[50px] relative flex-shrink-0 cursor-pointer hover:scale-105 transition-transform">
                    <div className="absolute top-[0px] left-[0px] shadow-[4px_2px_7px_1px_rgba(0,_0,_0,_0.25)] rounded-[15px] bg-[#fffafa] w-full h-full" />
                    <div className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-[20px] h-[15px] z-[1] flex items-center justify-center">
                        <Image
                            className="w-full h-full object-contain"
                            width={20}
                            height={15}
                            sizes="100vw"
                            alt="Previous testimonial"
                            src="/ArrowLeft.svg"
                        />
                    </div>
                </div>
                <div className="h-[50px] w-[50px] relative flex-shrink-0 cursor-pointer hover:scale-105 transition-transform">
                    <div className="absolute top-[0px] left-[0px] shadow-[4px_2px_7px_1px_rgba(0,_0,_0,_0.25)] rounded-[15px] bg-[#fffafa] w-full h-full" />
                    <div className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-[20px] h-[15px] z-[1] flex items-center justify-center">
                        <Image
                            className="w-full h-full object-contain"
                            width={20}
                            height={15}
                            sizes="100vw"
                            alt="Next testimonial"
                            src="/ArrowRight.svg"
                        />
                    </div>
                </div>
            </div>

            {/* Navigation Dots */}
            <div className="self-stretch flex flex-row items-center justify-center py-0 px-4">
                <Image
                    className="h-2 w-12 sm:h-3 sm:w-16 md:h-4 md:w-20 lg:h-5 lg:w-24 xl:w-32 object-contain"
                    width={100}
                    height={40}
                    alt="Navigation dots"
                    src="/dots-horizontal.svg"
                />
            </div>
        </div>
    );
};

export default FrameComponent10;