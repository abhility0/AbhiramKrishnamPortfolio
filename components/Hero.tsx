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
    
    <div>
        <BGCircles/>
        <h1>
            <span>{text}</span>
            <Cursor cursorColor="™#F7AB0A" />
        </h1>
    </div>
  )
}

export default Hero