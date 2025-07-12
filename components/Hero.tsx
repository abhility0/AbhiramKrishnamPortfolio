import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BGCircles from './BGCircles'

type Props = {}

function Hero({}: Props) {
    const [text,count] = useTypewriter({
        words: ["Hi, I'm Abhiram","A GenAI Engineer","But I can do other stuff too"],
        loop: true,
        delaySpeed: 1700

    })
  return (
    
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
        <BGCircles/>
        <img className='relative rounded-full h-50 w-50 mx-auto object-cover'
        src="/pp.jpeg" alt="Abhiram" />
        <div className="z-30">
        <h1 className="text-xl lg:text-3xl font-sans px-5">
            <span>{text}</span>
            <Cursor cursorColor="™#F7AB0A" />
        </h1>
        </div>
    </div>
  )
}

export default Hero