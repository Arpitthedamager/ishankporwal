import Head from 'next/head';
import Hero from './components/hero/Hero';
import About from './components/about/About';
import Footer from './components/Footer/Footer';
import Navbar from './components/nevbar/Navbar';
import LogosSection from './components/logos/Logos';
import Servicees from './components/servicees/Servicees';
import About1 from './components/about1/About1';
import Values from './components/values/Values';
import Process from './components/process/Process';
import Cta from './components/cta/Cta';


export default function Home() {
  return (
    <div>
      <Head>
        <title>ADSuper</title>
        <meta name="description" content="Marketing Agency " />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <Navbar/>
        <Hero />
        <LogosSection/>
        <About />
        <Servicees/>
        <About1/>
        <Values/>
        <Process/>
        <Cta/>
      </main>
      <Footer />
    </div>
  );
}
