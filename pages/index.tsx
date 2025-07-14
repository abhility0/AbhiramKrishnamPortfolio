import type { NextPage } from 'next'
import Head from 'next/head'
import styles from "../styles/Home.module.css";
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';

const Home: NextPage = () => {
  return (
  <div className="bg-[black] text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
    <Head>
      <title>Abhi's Portfolio</title>
    </Head>

    <Header/>

    {/* Hero */}
    <section id="hero" className="snap-start">
      <Hero />
    </section>  

    {/* About */}
    <section id="about" className="snap-center">
      <About/>
    </section>

    {/* Experience */}

    {/* Skills */}

    {/* Proiects */}
    
    {/* Contact Me */}

    </div>
  )
}
  
export default Home
