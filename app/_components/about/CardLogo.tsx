import React from 'react'

interface CardLogoProps {
  text: string;
}

const CardLogo: React.FC<CardLogoProps> = ({ text }) => {
  return (
    <div className="relative w-[200px] h-[280px] rounded-[20px] bg-[#fafafa] border-[#0083cb] border-solid border-[1px] box-border shadow-md">
      {/* Main content container */}
      <div className="absolute top-[15px] left-[15px] right-[15px] bottom-[60px] shadow-[0px_4px_10px_rgba(0,_0,_0,_0.25)] [backdrop-filter:blur(200px)] rounded-[15px] bg-[rgba(0,131,203,0.2)] border-[#0083cb] border-solid border-[1px] box-border flex items-center justify-center p-4">
        <div className="text-center">
          <span className="text-lg font-bold text-[#0083cb] uppercase">
            {text}
          </span>
        </div>
      </div>

      {/* Learn More button */}
      <div className="absolute bottom-[15px] left-[15px] right-[15px] flex items-center justify-center">
        <span className="text-base font-medium text-[#0083cb] cursor-pointer hover:underline">
          Learn More →
        </span>
      </div>
    </div>
  )
}

export default CardLogo