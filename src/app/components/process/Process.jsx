// components/Process.js
"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const Process = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const componentRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (componentRef.current) {
        const component = componentRef.current;
        const componentTop =
          component.getBoundingClientRect().top + window.scrollY;
        const componentHeight = component.offsetHeight;
        const viewportTop = window.scrollY;
        const viewportBottom = viewportTop + window.innerHeight;

        if (
          viewportBottom > componentTop &&
          viewportTop < componentTop + componentHeight
        ) {
          const visibleTop = Math.max(viewportTop, componentTop);
          const visibleBottom = Math.min(
            viewportBottom,
            componentTop + componentHeight
          );
          const visibleHeight = visibleBottom - visibleTop;
          const scrollPercent = (visibleHeight / componentHeight) * 100;
          setScrollProgress(scrollPercent);
        } else {
          setScrollProgress(0);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initialize progress on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate the width of the gray bar as the inverse of the scroll progress
  const grayBarWidth = 100 - scrollProgress;

  return (
    <section ref={componentRef} className="bg-gray-100 py-44 pb-16 z-0 relative">
      <div className="container mx-auto px-6 slide-in-from-bottom">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold">How we work with our customers</h2>
        </div>
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center z-10">
              <div className="mb-4">
                <Image
                  src="/process1.svg"
                  alt="Marketing audit"
                  width={64}
                  height={64}
                />
              </div>
              <h3 className="text-2xl font-semibold">Marketing audit</h3>
              <p className="text-xl text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique.
              </p>
            </div>
            <div className="flex flex-col z-10 items-center text-center">
              <div className="mb-4">
                <Image
                  src="/process2.svg"
                  alt="Action plan"
                  width={64}
                  height={64}
                />
              </div>
              <h3 className="text-2xl font-semibold">Action plan</h3>
              <p className="text-xl text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique.
              </p>
            </div>
            <div className="flex flex-col items-center z-10 text-center">
              <div className="mb-4">
                <Image
                  src="/process3.svg"
                  alt="Implementation"
                  width={64}
                  height={64}
                />
              </div>
              <h3 className="text-2xl font-semibold">Implementation</h3>
              <p className="text-xl text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique.
              </p>
            </div>
          </div>
          {/* Purple Progress Bar */}
          <div
            className="absolute bg-button-blue rounded-full z-0"
            style={{
              width: `${scrollProgress}%`,
              height: "3px",
              top: "0",
              left: "0",
              marginTop: "2.5rem",
            }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Process;
