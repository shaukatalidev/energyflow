import type { NextPage } from "next";
import Image from "next/image";

export type FrameComponent14Type = {
  className?: string;
};

const FrameComponent14: NextPage<FrameComponent14Type> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch h-[820px] flex flex-row items-start justify-end pt-0 pb-[153px] pl-[21px] pr-5 box-border max-w-full text-left text-5xl text-[#01b6f4] font-[Poppins] mq1125:pb-[99px] mq1125:box-border mq450:pb-16 mq450:box-border ${className}`}
    >
      <div className="self-stretch flex-1 shadow-[0px_4px_10px_rgba(0,_0,_0,_0.25)] [backdrop-filter:blur(200px)] rounded-[50px] [background:radial-gradient(50%_50%_at_50%_50%,_rgba(1,_182,_244,_0.4),_rgba(0,_122,_190,_0.4))] border-[#0083cb] border-solid border-[1px] box-border flex flex-col items-center justify-start py-[37px] px-[13px] gap-[88px] max-w-full mq800:gap-11 mq800:pt-6 mq800:pb-6 mq800:box-border mq450:gap-[22px]">
        <div className="w-[553px] flex flex-row items-start justify-start py-0 pl-[59px] pr-[58px] box-border mq800:pl-[29px] mq800:pr-[29px] mq800:box-border">
          <div className="w-[553px] relative shadow-[0px_4px_10px_rgba(0,_0,_0,_0.25)] [backdrop-filter:blur(200px)] rounded-[50px] bg-[rgba(0,131,203,0.2)] border-[#0083cb] border-solid border-[1px] box-border h-[74px] hidden" />
          <h2 className="m-0 h-[76px] w-[436px] relative text-[length:inherit] tracking-[-0.03em] leading-[79.5px] font-bold font-[inherit] inline-block z-[1] mq800:text-[38px] mq800:leading-[64px] mq450:text-[29px] mq450:leading-[48px]">
            <span className="whitespace-pre-wrap">{`Our  `}</span>
            <span className="text-[#0083cb]">Collaborators</span>
          </h2>
        </div>
        <section className="w-[1371px] flex-1 relative">
          <div className="absolute top-[0px] left-[0px] w-full h-full">
            <div className="absolute h-full top-[0px] bottom-[0px] left-[0px] rounded-[50px] max-h-full w-[325px] overflow-hidden flex items-center justify-center">
              <Image
                className="h-full w-full object-cover absolute left-[0px] top-[4px] [transform:scale(1.063)]"
                loading="lazy"
                width={325}
                height={317}
                sizes="100vw"
                alt=""
                src="/logos/basundhara_logo.jpg"
              />
            </div>
            <div className="absolute h-full top-[0px] bottom-[0px] left-[349px] rounded-[50px] max-h-full w-[325px] overflow-hidden flex items-center justify-center">
              <Image
                className="h-full w-full object-cover absolute left-[0px] top-[4px] [transform:scale(1.063)]"
                width={325}
                height={317}
                sizes="100vw"
                alt=""
                src="/logos/cherry_logo.jpg"
              />
            </div>
            <div className="absolute h-full top-[0px] bottom-[0px] left-[697px] rounded-[50px] max-h-full w-[325px] overflow-hidden flex items-center justify-center">
              <Image
                className="h-full w-full object-cover absolute left-[0px] top-[4px] [transform:scale(1.063)]"
                width={325}
                height={317}
                sizes="100vw"
                alt=""
                src="/logos/mohor_logo.jpg"
              />
            </div>
            <div className="absolute h-full top-[0px] bottom-[0px] left-[1046px] rounded-[50px] max-h-full w-[325px] overflow-hidden flex items-center justify-center">
              <Image
                className="h-full w-full object-cover absolute left-[0px] top-[4px] [transform:scale(1.063)]"
                width={325}
                height={317}
                sizes="100vw"
                alt=""
                src="/logos/smart_pind.jpg"
              />
            </div>
          </div>
        </section>
        <Image
          className="w-[74px] h-5 relative"
          width={74}
          height={20}
          sizes="100vw"
          alt=""
          src="/logos/taaz_logo.jpg"
        />
      </div>
    </section>
  );
};

export default FrameComponent14;
