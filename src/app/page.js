import Head from 'next/head';
import Hero from './components/hero/Hero';
import About from './components/about/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Navbar from './components/nevbar/Navbar';
import LogosSection from './components/logos/Logos';
import Servicees from './components/servicees/Servicees';
import About1 from './components/about1/About1';


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
        <Contact/>
      </main>
      <Footer />
    </div>
  );
}
