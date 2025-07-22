import type { NextPage } from "next";
import CardLogo from "./CardLogo";

export type FrameComponent11Type = {
  className?: string;
};

const FrameComponent11: NextPage<FrameComponent11Type> = ({
  className = "",
}) => {
  return (
    <main
      className={`self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-16 box-border max-w-full text-left text-5xl text-[#01b6f4] font-[Poppins] mq800:pb-8 mq800:box-border mq1350:pb-12 mq1350:box-border ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-start relative max-w-full">
        <div className="self-stretch flex-1 bg-[#fff7f7] flex flex-row items-start justify-start py-8 px-0 box-border relative max-w-full mq800:py-4 mq1350:py-6">
          <div className="flex-1 [background:radial-gradient(50%_50%_at_50%_50%,_#bbdfed,_#75c6f3)] flex flex-col items-start justify-start py-16 px-12 box-border gap-16 max-w-full z-[3] mq800:gap-8 mq800:py-8 mq800:px-6 mq1350:py-12 mq1350:gap-12 mq450:gap-6 mq450:px-4">
            <div className="flex flex-row justify-evenly items-center w-full gap-4 mq1350:flex-wrap mq1350:justify-center mq1350:gap-6">
              <CardLogo text="YOUR LOGO" />
              <CardLogo text="PREMIUM WATER" />
              <CardLogo text="AT DOORSTEP" />
              <CardLogo text="EARN MONEY" />
            </div>
            <div className="self-stretch shadow-[0px_4px_10px_rgba(0,_0,_0,_0.25)] [backdrop-filter:blur(200px)] rounded-[50px] bg-[rgba(0,131,203,0.2)] border-[#0083cb] border-solid border-[1px] box-border flex flex-col items-start justify-start pt-[26px] pb-[30px] px-[62px] gap-6 z-[2] mq1350:px-[31px] mq1350:box-border mq450:pt-5 mq450:pb-5 mq450:px-5 mq450:box-border">
              <div className="flex flex-row items-start justify-start">
                <div className="p-3 px-7 shadow-[0px_4px_10px_rgba(0,_0,_0,_0.25)] [backdrop-filter:blur(200px)] rounded-[50px] bg-[rgba(0,131,203,0.3)] border-[#0083cb] border-solid border-[1px] box-border">
                  <h2 className="font-bold text-left">
                    <span>{`About `}</span>
                    <span className="text-[#0083cb]">Enerzyflow</span>
                  </h2>
                </div>
              </div>
              <h1 className="m-0 text-4xl tracking-[-0.03em] leading-[79.5px] font-semibold text-[#0083cb] text-left max-w-full mq800:text-[29px] mq800:leading-[64px] mq450:text-[22px] mq450:leading-[48px]">
                Where Your Brand Finds Fluidity and Quality!
              </h1>
              <h2 className="m-0 text-[28px] leading-[45px] font-normal font-['Sans_Serif_Collection'] text-[#060606] text-left max-w-[859px] mq450:text-[22px] mq450:leading-9">
                At Enerzyflow, we specialize in elevating your brand presence
                through our premium quality mineral water bottles. We understand
                that your brand is unique, and we are here to ensure that
                uniqueness is reflected in every drop.
              </h2>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default FrameComponent11;
