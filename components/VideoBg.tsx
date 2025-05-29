import React from 'react'

import Link from 'next/link';
import { Button } from './ui/button';

const VideoBg = () => {
  return (
    <div className='main relative w-full '>
      {/* <div className="overlay"></div> */}
      <Link href={'/auth'} className='absolute  bottom-[5px] left-[50%] -translate-x-[50%] bg-mainColor/50 hover:bg-mainColor transition-all text-white px-4 py-2 rounded-xl font-semibold lg:text-lg sm:text-sm  z-[5] -translate-y-[50%] '>
        Advertise with us
      </Link>
      <Link href={'/getInTouch'}>
        <Button className='absolute top-[2%] right-[5%] bg-gradient-to-r from-blue-500 to-violet-600 hover:from-blue-600 hover:to-blue-950 text-white text-base md:text-lg font-bold py-10 px-8 rounded-full shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 border-white/30 backdrop-blur-sm z-10'>
          Get in Touch
        </Button>
      </Link>
      <video src="/E-1.mp4" className='' autoPlay loop muted />
      {/* <div className="content">
            <h1>Welcome</h1>
            <p>To my site.</p>
        </div> */}
    </div>
  )
}

export default VideoBg;