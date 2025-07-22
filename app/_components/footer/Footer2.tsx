import type { NextPage } from "next";
import Image from "next/image";

export type FrameComponent17Type = {
  className?: string;
};

const FrameComponent17: NextPage<FrameComponent17Type> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch bg-[#89c6e8] flex flex-col items-end justify-start pt-[246px] pb-0 pl-[38px] pr-[49px] box-border gap-[225px] max-w-full text-left text-5xl text-[#f8fcff] font-[Poppins] mq800:gap-28 mq800:pt-40 mq800:pr-6 mq800:box-border mq450:gap-14 ${className}`}
    >
      <div className="w-[1440px] h-[755px] relative bg-[#89c6e8] hidden max-w-full" />
      <div className="w-[1341px] flex flex-row items-start justify-center max-w-full">
        <div className="w-[553px] flex flex-col items-start justify-start max-w-full">
          <input title="Your text"
            className="border-white border-solid border-[1px] [outline:none] w-full bg-[rgba(255,255,255,0.8)] self-stretch relative shadow-[0px_4px_10px_rgba(0,_0,_0,_0.25)] [backdrop-filter:blur(200px)] rounded-[50px] box-border min-w-[250px] z-[1]"
            type="text"
          />
          <div className="flex flex-row items-start justify-start py-0 pl-[203px] pr-[202px] mq800:pl-[101px] mq800:pr-[101px] mq800:box-border mq450:pl-5 mq450:pr-5 mq450:box-border">
            <h2 className="m-0 relative text-[length:inherit] tracking-[-0.03em] leading-[79.5px] font-semibold font-[inherit] z-[1] mq800:text-[38px] mq800:leading-[64px] mq450:text-[29px] mq450:leading-[48px]">
              Footer
            </h2>
          </div>
        </div>
      </div>
      <section className="self-stretch flex flex-row items-start justify-between gap-5 max-w-full text-left text-2xl text-white font-[Poppins] mq1350:flex-wrap mq1350:justify-center">
        <div className="w-[333px] flex flex-col items-start justify-start max-w-full">
          <Image
            className="w-full flex-1 relative max-h-full h-auto object-cover z-[1]"
            loading="lazy"
            width={241}
            height={128}
            sizes="100vw"
            alt=""
            src="/MainLogo4.jpg"
          />
        </div>
        <div className="flex flex-col items-start justify-start pt-[53px] px-0 pb-0 box-border max-w-full">
          <h3 className="m-0 relative text-[length:inherit] tracking-[-0.03em] leading-[77px] font-medium font-[inherit] z-[1] mq450:text-[19px] mq450:leading-[62px]">
            ©️ 2025 Enerzyflow. All Rights Reserved
          </h3>
        </div>
        <div className="flex flex-col items-start justify-start pt-[46px] px-0 pb-0">
          <div className="flex flex-row items-start justify-start gap-[19px]">
            <Image
              className="h-[55px] w-[55px] relative object-cover z-[1]"
              width={55}
              height={55}
              sizes="100vw"
              alt=""
              src="/facebook.png"
            />
            <Image
              className="h-[55px] w-[55px] relative object-cover z-[1]"
              width={55}
              height={55}
              sizes="100vw"
              alt=""
              src="/instagram.png"
            />
            <Image
              className="h-[55px] w-[55px] relative object-cover z-[1]"
              width={55}
              height={55}
              sizes="100vw"
              alt=""
              src="/linkedin.png"
            />
            {/* <Image
              className="h-[55px] w-[55px] relative object-cover z-[1]"
              width={55}
              height={55}
              sizes="100vw"
              alt=""
              src="/yout.png"
            /> */}
          </div>
        </div>
      </section>
    </section>
  );
};

export default FrameComponent17;
