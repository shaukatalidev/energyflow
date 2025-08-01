import type { NextPage } from "next";
import Image from "next/image";
import LogosContainer1 from "./logos-container1";

export type FrameComponent16Type = {
  className?: string;
};

const FrameComponent16: NextPage<FrameComponent16Type> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-5 box-border max-w-full text-left text-[40px] text-white font-[Poppins] ${className}`}
    >
      <div className="flex-1 bg-[#89c6e8] flex flex-row items-end justify-between pt-[23px] pb-[67px] pl-[71px] pr-[69px] box-border gap-5 max-w-full mq800:pl-[35px] mq800:pr-[34px] mq800:box-border mq1125:flex-wrap">
        <div className="h-[330px] w-[1440px] relative bg-[#89c6e8] hidden max-w-full" />
        <div className="w-[541px] flex flex-col items-start justify-start gap-[23px] max-w-full">
          <div className="flex flex-col items-start justify-start max-w-full">
            <h1 className="m-0 relative text-[length:inherit] tracking-[-0.03em] leading-[77px] font-semibold font-[inherit] z-[1] mq800:text-[32px] mq800:leading-[62px] mq450:text-2xl mq450:leading-[46px]">
              Social Media
            </h1>
            <h1 className="m-0 relative text-[32px] tracking-[-0.03em] leading-[77px] font-medium font-[inherit] z-[1] mt-[-24px] mq800:text-[26px] mq800:leading-[62px] mq450:text-[19px] mq450:leading-[46px]">
              Follow us for the latest update :
            </h1>
          </div>
          <div className="self-stretch flex flex-row items-start justify-between gap-5 text-base mq800:flex-wrap">
            <div className="w-[107.7px] flex flex-col items-start justify-start py-0 pl-0 pr-[5px] box-border gap-2">
              <Image
                className="w-[55px] h-[55px] relative object-cover z-[1]"
                loading="lazy"
                width={55}
                height={55}
                sizes="100vw"
                alt=""
                src="/facebook.png"
              />
              <div className="self-stretch relative leading-6 z-[1]">
                Facebook
              </div>
            </div>
            <div className="w-[108.7px] flex flex-col items-start justify-start gap-2">
              <div className="flex flex-row items-start justify-start py-0 px-px">
                <Image
                  className="h-[55px] w-full relative object-cover z-[1]"
                  loading="lazy"
                  width={55}
                  height={55}
                  sizes="100vw"
                  alt=""
                  src="/instagram.png"
                />
              </div>
              <div className="self-stretch relative leading-6 z-[1]">
                Instagram
              </div>
            </div>
            <LogosContainer1
              linkedinImage="/linkedin.png"
              social="Linkedin"
            />
            <LogosContainer1
              linkedinImage="/linkedin.png"
              social="YouTube"
              logosContainerPadding="unset"
              frameDivPadding="0px 0px 0px 1px"
            />
          </div>
        </div>
        <div className="h-[196px] flex flex-col items-start justify-end pt-0 px-0 pb-3.5 box-border max-w-full">
          <Image
            className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full w-full h-auto object-cover z-[1]"
            loading="lazy"
            width={343}
            height={182}
            sizes="100vw"
            alt=""
            src="/MainLogo4.jpg"
          />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent16;
