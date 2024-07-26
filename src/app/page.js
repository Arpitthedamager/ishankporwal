import Head from 'next/head';
import Hero from './components/hero/Hero';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Navbar from './components/nevbar/Navbar';
import LogosSection from './components/logos/Logos';


export default function Home() {
  return (
    <div>
      <Head>
        <title>Marketing Agency</title>
        <meta name="description" content="Marketing Agency Template" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <Navbar/>
        <Hero />
        <LogosSection/>
        <About />
        
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
