"use client";
import Image from "next/image";
import { useEffect } from "react";
import Button from "../button1/button1";

export default function About() {
  useEffect(() => {
    const bottomElements = document.querySelectorAll(".slide-in-from-bottom");
    const topElements = document.querySelectorAll(".slide-in-from-top");

    topElements.forEach((element, index) => {
      element.classList.remove("opacity-0", "-translate-y-full");
      element.style.animation = `slideInFromTop 1s ease-out ${
        0.5 + index * 0.2
      }s forwards`;
    });

    bottomElements.forEach((element, index) => {
      element.classList.remove("opacity-0", "translate-y-full");
      element.style.animation = `slideInFromBottom 1s ease-out ${
        0.5 + index * 0.2
      }s forwards`;
    });
  }, []);

  return (
    <section id="about" className="pb-10">
      <div className="px-10 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-10 slide-in-from-bottom opacity-0 -translate-y-full transition-transform duration-500">
            <h2 className="text-5xl font-bold">
              Catalyzing your success: our marketing magic
            </h2>
            <p className="text-xg">
              At ADSuper, we empower brands through innovative marketing
              strategies that drive results. Our team of experts is dedicated to
              crafting solutions that fit your unique business needs. Whether
              it's SEO, branding, or digital campaigns, we provide the tools for
              your brand to stand out and grow. Let’s work together to turn your
              vision into reality.
              <br />
              <br />
              Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
              commodo diam libero vitae erat.
            </p>
            <div className="flex gap-8 ">
              <Button href="" variant="solid">
                Call us
              </Button>
              <Button href="/contact" variant="transparent">
                Write us
              </Button>
            </div>
          </div>
          <div className="relative mt-10 mx-auto max-w-7xl">
            {/* Background Cards Positioned Directly Behind the hero1 Image */}
            <div className="absolute -z-10 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-[-4deg] w-full h-full bg-orange-300 opacity-50 rounded-2xl"></div>

            <Image
              className="relative rounded-2xl mx-auto w-full h-[calc(600px+2rem)] object-cover shadow-lg slide-in-from-top opacity-0 -translate-y-full transition-transform duration-500"
              src="/about.jpeg"
              alt="Marketing Webflow Marketing Agency Template - coworking"
              width={1280}
              height={820}
              quality={100}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
