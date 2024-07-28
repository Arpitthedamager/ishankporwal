import Link from "next/link";
import Button from "../button1/button1";
import Image from "next/image";

const Values = () => {
    const values = [
        {
            title: "Results-Driven Excellence",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
            icon: "/path-to-icons/icon-quality.svg",
        },
    ];

    return (
        <section className="py-20 flex">
            <div className="w-1/2 pr-8 slide-in-from-bottom">
                <div className=" px-16">
                    <h2 className="text-4xl font-bold mb-4">Why work with us?</h2>
                    <p className="text-xl">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        varius enim in eros elementum tristique.Suspendisse varius enim in
                        eros elementum tristique. Duis cursus, mi quis viverra ornare, eros
                        dolor interdum nulla, ut commodo diam libero vitae erat
                    </p>
                </div>
                <div className="flex px-16 space-x-4 mb-8">
                    <Button href="/services" variant="solid">
                        Services
                    </Button>
                    <Button href="/contact" variant="transparent">
                        Contact
                    </Button>
                </div>
            </div>
            <div className="w-1/2">
                <div className="grid grid-cols-1 gap-8">
                    {values.map((value, index) => (
                        <div
                            key={index}
                            className="bg-white p-10 pb-20 mr-24 rounded-2xl shadow-2xl transform transition-transform duration-300 hover:scale-105"
                        >
                            <Image
                                src={value.icon}
                                alt={value.title}
                                className="w-12 h-12 ml-0 mb-6 mx-auto"
                                width="100"
                                height="100"
                            />
                            <h3 className="text-2xl font-semibold mb-6">{value.title}</h3>
                            <p className="text-gray-500 text-xl ">{value.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Values;
