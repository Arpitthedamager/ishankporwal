import Link from "next/link";
import Button from "../button1/button1";
import Image from "next/image";

const Values = () => {
  const values = [
    {
      title: "Innovative Solutions",
      description:
        "At ADSuper, we believe in staying ahead of the curve. We leverage the latest trends and technologies to provide cutting-edge marketing solutions that set your brand apart from the competition.",
      icon: "/path-to-icons/icon-innovation.svg",
    },
  ];

  return (
    <section className="py-20 flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 pr-0 md:pr-8 slide-in-from-bottom">
        <div className="px-4 md:px-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why work with us?
          </h2>
          <p className="text-lg md:text-xl">
            At ADSuper, we combine innovative strategies with a customer-first
            approach to help brands achieve sustainable growth. With years of
            experience, our team of experts is dedicated to elevating your
            business to new heights.
          </p>
        </div>
        <div className="flex px-16 space-x-4 mb-8">
          {" "}
          <Button href="#services" variant="solid">
            Services
          </Button>
          <Button href="https://chat.whatsapp.com/KuIyij5t0Bg4rA2AHHRTZi" variant="transparent">
            Contact
          </Button>
        </div>
      </div>
      <div className="w-full md:w-1/2">
        <div className="grid grid-cols-1 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-white p-6 md:p-10 pb-20 rounded-2xl shadow-2xl transform transition-transform duration-300 hover:scale-105"
            >
              <Image
                src={value.icon}
                alt={value.title}
                className="w-12 h-12 mb-6 mx-auto"
                width={100}
                height={100}
              />
              <h3 className="text-lg md:text-2xl font-semibold mb-4">
                {value.title}
              </h3>
              <p className="text-gray-500 text-base md:text-xl">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
