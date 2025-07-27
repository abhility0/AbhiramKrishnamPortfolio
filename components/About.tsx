import React from 'react'
import { motion } from "framer-motion"

type Props = {}

function About({}: Props) {
  return (
    <motion.div
    initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1.5 }}
     className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">About</h3>
        <motion.img
        initial={{
            x: -200,
            opacity:0,
            }}
        transition={{
            duration: 1.2,
        }}
        whileInView={{ opacity:1, x:0 }}
        viewport= {{ once: true }}
        src="/pfp.jpeg" className='w-100 h-100 rounded-full object-cover' />

        <div className="space-y-8 px-6 md:px-10"> 
            <h4 className="text-3xl font-semibold">
                A <span className="">little</span> about myself:
            </h4>
            <p>
            I'm Abhiram Krishnam — a versatile AI Engineer and Software Developer with a strong background in full-stack development, cloud infrastructure, and applied machine learning. I specialize in building scalable, intelligent systems that blend clean code with cutting-edge AI.

            Having completed my Master’s in Computer Science at NJIT, I’ve developed a deep understanding of modern development practices, from designing responsive frontends in TypeScript and React to deploying production-grade AI solutions using LangChain, Hugging Face, and AWS. My work bridges the gap between robust software engineering and innovative AI applications.

            Whether I’m working on web platforms, backend services, or generative AI pipelines, I focus on delivering solutions that are efficient, reliable, and impactful.
            </p>
        </div>
    </motion.div>
  )
}

export default About