// components/LogosSection.js

import Image from 'next/image';

const LogosSection = () => {
  return (
    <section className="bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center mb-8 space-x-36">
          <h2 className="text-xl font-bold whitespace-nowrap">
            Used by the world's most average companies
          </h2>
          <div className="flex space-x-11">
            <div>
              <Image
                src="https://assets.website-files.com/64ed83f6f321b779519b4817/64fae4c7305262197ccc226c_Marketinx%20-%20Logo%20Webflow.svg"
                alt="Marketinx Webflow Marketing Agency Template - icon webflow"
                width={100} // Increased width
                height={100} // Increased height
                className="object-contain"
              />
            </div>
            <div>
              <Image
                src="https://assets.website-files.com/64ed83f6f321b779519b4817/64fae49cab2b40299edb08c5_Marketinx%20-%20Logo%20Instagram.svg"
                alt="Marketinx Webflow Marketing Agency Template - icon instagram"
                width={100} // Increased width
                height={100} // Increased height
                className="object-contain"
              />
            </div>
            <div>
              <Image
                src="https://assets.website-files.com/64ed83f6f321b779519b4817/64fae49cbe5fd3f5ac8ceb82_Marketinx%20-%20Logo%20Asana.svg"
                alt="Marketinx Webflow Marketing Agency Template - icon asana"
                width={100} // Increased width
                height={100} // Increased height
                className="object-contain"
              />
            </div>
            <div>
              <Image
                src="https://assets.website-files.com/64ed83f6f321b779519b4817/64fae49c438ef493f3b5c59e_Marketinx%20-%20Logo%20Facebook.svg"
                alt="Marketinx Webflow Marketing Agency Template - icon facebook"
                width={100} // Increased width
                height={100} // Increased height
                className="object-contain"
              />
            </div>
            <div>
              <Image
                src="https://assets.website-files.com/64ed83f6f321b779519b4817/64fae4c7305262197ccc226c_Marketinx%20-%20Logo%20Webflow.svg"
                alt="Marketinx Webflow Marketing Agency Template - icon webflow"
                width={100} // Increased width
                height={100} // Increased height
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogosSection;
