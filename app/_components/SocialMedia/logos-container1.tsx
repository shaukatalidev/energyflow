"use client";
import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import Image from "next/image";

export type LogosContainer1Type = {
  className?: string;
  linkedinImage: string;
  social?: string;

  /** Style props */
  logosContainerPadding?: CSSProperties["padding"];
  frameDivPadding?: CSSProperties["padding"];
};

const LogosContainer1: NextPage<LogosContainer1Type> = ({
  className = "",
  linkedinImage,
  social,
  logosContainerPadding,
  frameDivPadding,
}) => {
  const logosContainerStyle: CSSProperties = useMemo(() => {
    return {
      padding: logosContainerPadding,
    };
  }, [logosContainerPadding]);

  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      padding: frameDivPadding,
    };
  }, [frameDivPadding]);

  return (
    <div
      className={`w-[93.7px] flex flex-col items-start justify-start py-0 pl-0 pr-1 box-border gap-2 text-left text-base text-white font-[Poppins] ${className}`}
      style={logosContainerStyle}
    >
      <Image
        className="w-[55px] h-[55px] relative object-cover z-[1]"
        loading="lazy"
        width={55}
        height={55}
        sizes="100vw"
        alt=""
        src={linkedinImage}
      />
      <div
        className="self-stretch flex flex-row items-start justify-start py-0 pl-[5px] pr-0"
        style={frameDivStyle}
      >
        <div className="flex-1 relative leading-6 z-[1]">{social}</div>
      </div>
    </div>
  );
};

export default LogosContainer1;
