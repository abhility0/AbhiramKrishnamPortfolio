import type { NextPage } from 'next'
import Head from 'next/head'
import styles from "../styles/Home.module.css";
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import WorkEx from '@/components/WorkEx';

const Home: NextPage = () => {
  return (
  <div className="bg-[black] text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
    <Head>
      <title>Abhi's Portfolio</title>
    </Head>

    <Header/>

    <section id="hero" className="snap-start">
      <Hero />
    </section>  

    <section id="about" className="snap-center">
      <About/>
    </section>

    {/* Experience */}
    <section id="experience" className="snap-center">
      <WorkEx />
    </section>

    {/* Skills */}

    {/* Proiects */}
    
    {/* Contact Me */}

    </div>
  )
}
  
export default Home
