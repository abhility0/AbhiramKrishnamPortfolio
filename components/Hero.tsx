import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BGCircles from './BGCircles'
import Link from 'next/link'

type Props = {}

function Hero({}: Props) {
    const [text,count] = useTypewriter({
        words: ["Hi, I'm Abhiram","I like making websites, LLMs, websites with LLMs","You can tell by scrolling down"],
        loop: true,
        delaySpeed: 1600

    })
  return (
    
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
        <BGCircles/>
        <img className='relative rounded-full h-50 w-50 mx-auto object-cover'
        src="/pp.jpeg" alt="Abhiram" />
        <div className="z-30">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
            Software Engineer
        </h2>
        <h1 className=" text-4xl lg:text-3xl font-semibold scroll-px-10">
            <span className="mr-3">{text}</span>
            <Cursor cursorColor="™#F7AB0A" />
        </h1>

        <div className='pt-5'>
            <Link href="#about">
                <button className='heroButton'>About</button>
            </Link >
            <Link href="#experience">
                <button className='heroButton'>Experience</button>
            </Link>
            <Link href="#skills">
                <button className='heroButton'>Skills</button>
            </Link>
            <Link href="#projects">
                <button className='heroButton'>Projects</button>
            </Link>
        </div>
        </div>
    </div>
  )
}

export default Hero