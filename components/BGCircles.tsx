import React from 'react'
import {motion} from "framer-motion";


type Props = {}

function BGCircles({}: Props) {
  return (
    <motion.div
    initial={{
        opacity:0,
    }}
    animate={{
        scale: [1,2,2,3,1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ["20%", "20%","50%","80%","20%"],
    }}
    transition={{
        duration: 2.5
    }}
    className='relative flex justify-center items-center'>
        <div className="absolute border border-[#333333] rounded-full h-[400px] w-[400px] mt-52 animate-ping" />
        <div className=" rounded-full border border-[#333333] h-[800px] w-[800px] absolute mt-52" />
        <div className=" rounded-full border border-[#F7AB0A] opacity-20 h-[950px] w-[950px] absolute mt-52" />
        <div className="rounded-full border border-[#F7AB0A] opacity-20 h-[1200px] w-[1200px] absolute mt-52 animate-pulse"/>
    </motion.div>    
  )
}

export default BGCircles