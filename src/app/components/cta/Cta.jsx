// components/CtaSection.tsx
import Button from "../button1/button1";

const Cta = () => {
  return (
    <section className="relative py-16">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
        <div className="relative bg-green-100 p-32 pl-10 rounded-xl shadow-lg">
          <div className="absolute -z-10 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-[-4deg] w-full h-full bg-button-hover-blue opacity-50 rounded-2xl"></div>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="flex flex-col justify-center">
                <h2 className="text-5xl flex font-semibold mb-4">
                  Ready to shake up your company&apos;s marketing?
                </h2>
                <p className="text-xl flex md:mb-6 mb-0">
                  Take your business to the next level with our innovative
                  marketing strategies. We offer tailor-made solutions to meet
                  your unique goals, ensuring measurable growth and success.
                </p>
              </div>
              <div className="flex flex-col md:pt-10 pt-0">
                <div className="flex gap-4">
                  <Button
                    href="https://www.webflow.com"
                    variant="solid"
                    target="_blank"
                  >
                    Call us
                  </Button>
                  <Button
                    href="/contact"
                    variant="transparent"
                    className="border border-black hover:bg-transparent hover:text-black"
                  >
                    Write us
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
