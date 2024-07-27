"use client";
import React from 'react';
import { useEffect } from 'react';
const services = [
  {
    href: "/services/sea-strategy",
    imgSrc: "https://assets.website-files.com/64f0650d45e1c6882b035eae/64fc23f78f4d3af0f3521391_Marketinx%20Webflow%20Agency%20Template%20-%20icon%20ads.svg",
    imgAlt: "SEA strategy icon",
    title: "SEA strategy",
    description: "Strategic SEA campaigns for instant visibility.",
  },
  {
    href: "/services/seo-strategy",
    imgSrc: "https://assets.website-files.com/64f0650d45e1c6882b035eae/64fc2404ad4bc0f51d3ef7b2_Marketinx%20Webflow%20Agency%20Template%20-%20icon%20seo.svg",
    imgAlt: "SEO strategy icon",
    title: "SEO strategy",
    description: "Strategic SEO solutions for top search rankings.",
  },
  {
    href: "/services/website-development",
    imgSrc: "https://assets.website-files.com/64f0650d45e1c6882b035eae/64fc236a0a3ae149536d1c88_Marketinx%20Webflow%20Agency%20Template%20-%20icon%20website.svg",
    imgAlt: "Website development icon",
    title: "Website development",
    description: "Crafting stunning websites for your online success.",
  },
  {
    href: "/services/branding",
    imgSrc: "https://assets.website-files.com/64f0650d45e1c6882b035eae/64fc24188f4d3af0f3522d74_Marketinx%20Webflow%20Agency%20Template%20-%20icon%20branding.svg",
    imgAlt: "Branding icon",
    title: "Branding",
    description: "Crafting memorable identities for remarkable impact.",
  },
];

const Servicees = () => {
    useEffect(() => {
        const bottomElements = document.querySelectorAll(".slide-in-from-bottom");
    
        bottomElements.forEach((element, index) => {
          element.classList.remove('opacity-0', 'translate-y-full');
          element.style.animation = `slideInFromBottom 1s ease-out ${0.5 + index * 0.2}s forwards`;
        });
      }, []);
  return (
    <section className="services-section bg-gray-100 py-28">
      <div className="container mx-auto px-14">
        <div className="text-center mb-10">
          <h2 className="text-5xl px-44 font-bold">
            Discover our marketing services to boost your business
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 slide-in-from-bottom">
          {services.map((service, index) => (
            <div className="relative group" key={index}>
              {/* Orange background card */}
              <div className="absolute inset-0 bg-green-200 rounded-2xl transform transition-transform duration-300 group-hover:scale-100 group-hover:rotate-[-3deg]"></div>
              
              <a href={service.href} className="no-underline relative z-10 block">
                <div className="service-card p-6 border rounded-2xl bg-white shadow-lg">
                  <img
                    src={service.imgSrc}
                    alt={service.imgAlt}
                    className="w-20 h-20 mb-4"
                  />
                  <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
                  <p className='text-lg text-gray-500'>{service.description}</p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Servicees;
