"use client";
import Image from "next/image";

const About1 = () => {
  return (
    <section className="bg-bg-about1 py-28 px-8 relative">
      <div className="container mx-auto max-w-screen-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="relative z-10 ">
            <div className="absolute z-0 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-[-4deg] w-full h-full bg-orange-300 opacity-50 rounded-2xl"></div>
            <div className="absolute z-0 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-[4deg] w-full h-full bg-green-300 opacity-50 rounded-2xl"></div>
            <Image
              src="/about1.jpeg"
              alt="Marketinx Webflow Marketing Agency Template - meeting"
              layout="responsive"
              width={1280}
              height={720}
              className="object-cover z-10 relative rounded-2xl slide-in-from-bottom"
            />
          </div>
          <div className="slide-in-from-top">
            <h2 className="text-4xl font-bold mb-6">Our expertise and experience</h2>
            <p className="text-gray-500 text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum
              lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              <div className="flex flex-col border-r border-black pr-6">
                <div className="text-4xl font-bold">150+</div>
                <div className="text-gray-500 text-xl">projects completed</div>
              </div>
              <div className="flex flex-col">
                <div className="text-4xl font-bold">30+</div>
                <div className="text-gray-500 text-xl">Dedicated experts</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About1;
