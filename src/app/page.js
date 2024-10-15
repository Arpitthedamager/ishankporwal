import Hero from './components/hero/Hero';
import AboutSection from './components/about/About';
import Footer from './components/Footer/Footer';
import Navbar from './components/navbar/Navbar';
import LogosSection from './components/logos/Logos';
import ServicesSection from './components/servicees/Servicees'; 
import AdditionalAboutSection from './components/about1/About1';
import ValuesSection from './components/values/Values';
import ProcessSection from './components/process/Process';
import CallToAction from './components/cta/Cta';
import BlogSection from './components/blog/Blog';

export const metadata = {
  title: 'ADSuper - Marketing Agency',
  description: 'ADSuper offers cutting-edge marketing solutions to elevate your brand\'s visibility and engagement.',
  keywords: 'marketing, digital marketing, SEO, branding, social media, advertising, ADSuper',
  authors: [{ name: 'ADSuper Team' }],
  openGraph: {
    title: 'ADSuper - Marketing Agency',
    description: 'ADSuper offers cutting-edge marketing solutions to elevate your brand\'s visibility and engagement.',
    url: 'https://adsuper.netlify.app/',
    siteName: 'ADSuper',
    images: ['/path/to/your/image.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ADSuper - Marketing Agency',
    description: 'ADSuper offers cutting-edge marketing solutions to elevate your brand\'s visibility and engagement.',
    images: ['/path/to/your/image.png'],
  },
  icons: {
    icon: '/favicon.ico',
  },
  alternates: {
    canonical: 'https://adsuper.netlify.app/',
  },
};

export default function Home() {
  return (
    <div>
      

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
