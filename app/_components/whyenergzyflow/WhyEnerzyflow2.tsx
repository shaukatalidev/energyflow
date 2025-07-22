import React from 'react'
import WhyEnerzyflow1 from "@/public/whyenerzyflow/WhyEnerzyflow (1).jpeg";
import WhyEnerzyflow5 from "@/public/whyenerzyflow/WhyEnerzyflow (2).jpeg";
import WhyEnerzyflow3 from "@/public/whyenerzyflow/WhyEnerzyflow (3).jpeg";
import WhyEnerzyflow4 from "@/public/whyenerzyflow/WhyEnerzyflow (4).jpeg";
import WhyEnerzyflow2 from "@/public/whyenerzyflow/WhyEnerzyflow (5).jpeg";
import WhyEnerzyflowCard from "./WhyEnerzyflowCard";
import bgWhy from "@/public/HomeBg.jpeg"
import Image from 'next/image';


const WhyEnerzyflowDetails = [
    {
        img: WhyEnerzyflow1,
        title: "Connect with us",
        description:
            "We are the only company in India to provide 100% customizable bottles. We understand that your brand is unique, and we are here to ensure that uniqueness is reflected in every drop.",
        left: true,
    },
    {
        img: WhyEnerzyflow2,
        title: "Capture your potential market",
        description:
            " We help you capture your potential market by providing you with the best quality bottles that are sure to make your brand stand out from the rest.",
        left: false,
    },
    {
        img: WhyEnerzyflow3,
        title: "Let us shine with us",
        description:
            "Shine with us as we help you create a brand that is sure to make a mark in the industry. We are here to help you create a brand that is sure to make a mark in the industry.",
        left: true,
    },
    {
        img: WhyEnerzyflow4,
        title: "Be the market leader",
        description:
            "Be the market leader with our premium quality bottles that are sure to make your brand stand out from the rest.",
        left: false,
    },
    {
        img: WhyEnerzyflow5,
        title: "See your exponential growth",
        description:
            "Growth is the only thing that matters. We are here to help you grow your business and see exponential growth in your business.",
        left: true,
    },
];
const WhyEnerzyflowTwo = () => {
    return (
        <div 
            className="relative flex flex-col items-center gap-8 py-10 min-h-screen bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: `url(${bgWhy.src})`
            }}
        >
            {/* <div className="absolute inset-0 bg-black/20 z-0"></div> */}

            <div className="relative z-10 flex flex-col items-center gap-8 w-full">


                <div className="p-3  w-auto relative shadow-[0px_4px_10px_rgba(0,_0,_0,_0.25)] [backdrop-filter:blur(200px)] rounded-[50px] bg-[#e9ebed] border-[#0083cb] border-solid border-[1px] box-border h-[74px] flex items-center justify-center">
                    <b className="text-center px-7 text-5xl tracking-[-0.03em] leading-[79.5px] font-[poppins] text-[#01b6f4]">
                        <span>{`Why `}</span>
                        <span className="text-[#0083cb]">Enerzyflow</span>
                    </b>
                </div>

                <div className="relative w-full max-w-7xl h-[1200px] flex items-center justify-center">
                    {/* Central bottle image */}
                    {/* <div className="absolute z-10 w-[200px] h-[400px] flex items-center justify-center">
                        <div className="w-full h-full bg-gradient-to-b from-blue-400 to-blue-600 rounded-lg shadow-lg flex items-center justify-center">
                            <span className="text-white font-bold text-lg transform -rotate-90">Enerzyflow</span>
                        </div>
                    </div> */}

                    {/* Cards positioned around the bottle */}
                    {WhyEnerzyflowDetails.map((detail, index) => {
                        const positions = [
                            { top: '5%', right: '10%' }, // Connect with us - top right
                            { top: '35%', right: '2%' }, // Capture market - middle right
                            { bottom: '5%', right: '10%' }, // Let us shine - bottom right
                            { bottom: '5%', left: '10%' }, // Be market leader - bottom left
                            { top: '35%', left: '2%' }, // Exponential growth - middle left
                        ];

                        return (
                            <div
                                key={index}
                                className="absolute w-[280px]"
                                style={positions[index]}
                            >
                                <div className="w-full relative shadow-[0px_4px_10px_rgba(0,_0,_0,_0.25)] [backdrop-filter:blur(200px)] rounded-[50px] p-6 bg-steelblue-200 border-steelblue-100 border-solid border-[1px] box-border h-auto">
                                    {/* <div className="flex justify-normal gap-3 mb-3"> */}
                                    {/* <div className="w-16 h-16 relative rounded-lg overflow-hidden flex-shrink-0"> */}
                                    {/* </div> */}
                                    {/* </div> */}
                                    <h3 className="font-semibold text-white text-[20px] text-left leading-tight">
                                        {detail.title}
                                    </h3>
                                    <p className="text-[16px] text-[#414141] leading-relaxed">
                                        {detail.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}

export default WhyEnerzyflowTwo


// bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg border-2 border-blue-200