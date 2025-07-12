import type { NextPage } from 'next'
import Head from 'next/head'
import styles from "../styles/Home.module.css";
import Header from '@/components/Header';
import Hero from '@/components/Hero';

const Home: NextPage = () => {
  return (
  <div className="bg-[black] text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
    <Head>
      <title>Abhi's Portfolio</title>
    </Head>

    <Header/>

    {/* Hero */}
    <section id="hero" className="snap-center">
      <Hero />
    </section>  

    {/* About */}

    {/* Experience */}

    {/* Skills */}

    {/* Proiects */}
    
    {/* Contact Me */}

    </div>
  )
}
  
export default Home
