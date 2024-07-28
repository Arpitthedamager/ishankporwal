import Head from 'next/head';
import Hero from './components/hero/Hero';
import AboutSection from './components/about/About';
import Footer from './components/footer/Footer';
import Navbar from './components/nevbar/Navbar';
import LogosSection from './components/logos/Logos';
import ServicesSection from './components/servicees/Servicees';
import AdditionalAboutSection from './components/about1/About1';
import ValuesSection from './components/values/Values';
import ProcessSection from './components/process/Process';
import CallToAction from './components/cta/Cta';
import BlogSection from './components/blog/Blog';

export default function Home() {
  return (
    <div>
      <Head>
        <title>ADSuper - Marketing Agency</title>
        <meta name="description" content="ADSuper offers cutting-edge marketing solutions to elevate your brand's visibility and engagement." />
        <meta name="keywords" content="marketing, digital marketing, SEO, branding, social media, advertising" />
        <meta name="author" content="ADSuper Team" />
        <meta property="og:title" content="ADSuper - Marketing Agency" />
        <meta property="og:description" content="ADSuper offers cutting-edge marketing solutions to elevate your brand's visibility and engagement." />
        <meta property="og:url" content="https://adsuper.netlify.app/" />
        <meta property="og:site_name" content="ADSuper" />
        <meta property="og:image" content="/favicon.ico" /> {/* Used favicon.ico for Open Graph */}
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="ADSuper - Marketing Agency" />
        <meta name="twitter:description" content="ADSuper offers cutting-edge marketing solutions to elevate your brand's visibility and engagement." />
        <meta name="twitter:image" content="/favicon.ico" /> {/* Used favicon.ico for Twitter */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://adsuper.netlify.app/" />
      </Head>

      <main>
        <Navbar />
        <Hero />
        <LogosSection />
        <AboutSection />
        <ServicesSection />
        <AdditionalAboutSection />
        <ValuesSection />
        <ProcessSection />
        <BlogSection />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}
