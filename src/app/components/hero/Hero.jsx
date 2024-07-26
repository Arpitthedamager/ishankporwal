"use client";
import Image from "next/image";
import { useEffect } from "react";
import Button from "../button/button";

export default function Hero() {
  useEffect(() => {
    const leftElement = document.querySelector(".slide-in-from-left");
    const rightElement = document.querySelector(".slide-in-from-right");
    const bottomElements = document.querySelectorAll(".slide-in-from-bottom");

    leftElement.style.animation = "slideInFromLeft 1s ease-out forwards";
    rightElement.style.animation = "slideInFromRight 1s ease-out forwards";
    bottomElements.forEach((element, index) => {
      element.style.animation = `slideInFromBottom 1s ease-out ${0.5 + index * 0.2}s forwards`;
    });
  }, []);

  return (
    <section className="hero-section relative pb-8 pt-32 bg-gray-100 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20 relative">
          <div
            className="absolute right-0 transform -translate-y-1/2 slide-in-from-right"
            style={{ top: "40%" }}
          >
            <Image
              src="/hero2.svg"
              alt="Marketing Webflow Marketing Agency Template - graphic assets hero"
              width={200}
              height={200}
              priority
            />
          </div>
          <div className="mx-auto max-w-5xl slide-in-from-bottom">
            <h1 className="text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
              We create innovative marketing strategies for unique brands
            </h1>
            <p className="text-xl text-gray-700 mb-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat.
            </p>
            <Button href="#About-Section" variant="solid">
              Discover
            </Button>
          </div>
        </div>
        <div className="relative mt-32 mx-auto max-w-7xl">
          {/* Background Cards Positioned Directly Behind the hero1 Image */}
          <div className="absolute -z-10 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-[-2deg] w-full h-full bg-orange-400 opacity-50 rounded-2xl"></div>
          <div className="absolute -z-10 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-[2deg] w-full h-full bg-green-400 opacity-50 rounded-2xl"></div>

          <Image
            className="relative rounded-2xl mx-auto w-[calc(100%+6rem)] h-[calc(760px+6rem)] object-cover shadow-lg slide-in-from-bottom"
            src="/hero1.jpeg"
            alt="Marketing Webflow Marketing Agency Template - coworking"
            width={1590}
            height={760}
            quality={100}
          />
        </div>
      </div>
      <div className="absolute inset-0 flex justify-center items-center z-0">
        <div className="absolute top-0 left-0 w-1/6 h-1/6 slide-in-from-left">
          <Image
            src="/hero3.svg"
            alt="Marketing Webflow Marketing Agency Template - graphic assets hero"
            layout="fill"
            objectFit="contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}
