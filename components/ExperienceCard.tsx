import React from 'react'
import {motion} from 'framer-motion'

type Props = {}

function ExperienceCard({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100
    opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
        <motion.img 
        initial={{y: -100, opacity: 0,}}
        transition={{ duration: 1.2 }} 
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative rounded-full h-27 w-27 mx-auto object-cover" 
        src="/c1.jpg"
        alt="" />

        <div className="px-0 md:px-10">
            <h4 className="text-3xl font-light">AI Engineer Intern</h4>
            <p className="font-bold text-xl mt-1">DXC Technology</p>
            <div className="flex space-x-2 my-2">
                <img className="h-10 w-10 rounded-full" src="/c1.jpg" alt=""/>
                <img className="h-10 w-10 rounded-full" src="/c1.jpg" alt=""/>
                <img className="h-10 w-10 rounded-full" src="/c1.jpg" alt=""/>
            </div>

            <p className="uppercase py-5 text-gray-300">Started... - Ended... </p>

            <ul className="list-disc space-y-4 ml-5 text-lg">
                <li>Summary points</li> 
                <li>Summary points</li> 
                <li>Summary points</li>
                <li>Summary points</li>
                <li>Summary points</li>
            </ul>
        </div>
    </article>
  )
}

export default ExperienceCard