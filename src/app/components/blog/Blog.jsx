import Image from 'next/image';
import Link from 'next/link';
import Button from '../button1/button1';

const Blog = () => {
  return (
    <section id='blog' className="blog-section bg-gray-100 py-10">
      <div className="pb-10 px-8">
        <div className="pt-10 lg:pt-20">
          <div className="max-w-screen-xl mx-auto">
            <div className="max-w-screen-lg mx-auto mb-10 lg:mb-20 text-center">
              <h2 className="text-6xl font-bold">The latest news and tips for optimal marketing</h2>
            </div>
            <div className="lg:mb-20">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 slide-in-from-bottom">
                <BlogCard 
                  href="https://chat.whatsapp.com/KuIyij5t0Bg4rA2AHHRTZi" 
                  imgSrc="/hero1.jpeg" 
                  imgAlt="Maximizing ROI with PPC advertising"
                  category="SEA"
                  title="Maximizing ROI with PPC advertising"
                  description="Get ready to dive deep into pay-per-click (PPC) advertising and explore tactics to maximize your return on investment (ROI)."
                  author="Lucas Braham"
                  date="August 31, 2023"
                />
                <BlogCard 
                  href="https://chat.whatsapp.com/KuIyij5t0Bg4rA2AHHRTZi" 
                  imgSrc="/about.jpeg" 
                  imgAlt="Revolutionize your marketing with email"
                  category="SEO"
                  title="Revolutionize your marketing with email"
                  description="Dive into the world of email marketing and understand its pivotal role in nurturing leads and boosting conversions."
                  author="Yasmina Tats"
                  date="June 21, 2023"
                />
                <BlogCard 
                  href="https://chat.whatsapp.com/KuIyij5t0Bg4rA2AHHRTZi" 
                  imgSrc="/about1.jpeg" 
                  imgAlt="Crafting content that converts"
                  category="SEO"
                  title="Crafting content that converts"
                  description="Explore the world of content marketing and unlock the secrets to creating content that drives conversions unlock the secrets to creating content that drives conversions."
                  author="Luc Tomas"
                  date="May 05, 2023"
                />
              </div>
            </div>
            <div className="flex justify-center">
              <Button href="https://chat.whatsapp.com/KuIyij5t0Bg4rA2AHHRTZi" variant="solid" className="mt-0">
                See all
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const BlogCard = ({ href, imgSrc, imgAlt, category, title, description, author, date }) => (
  <div className="shadow-md rounded-2xl bg-gray-100 overflow-hidden transform transition duration-300 hover:scale-105 ">
    <Link href={href} className="block no-underline">
      <div className="relative pb-2/3">
        <Image 
          src={imgSrc} 
          alt={imgAlt} 
          className="w-full h-full object-cover"
          width={1000}
          height={100}
          quality={100}
        />
      </div>
      <div className="p-4 flex flex-col justify-between h-full">
        <div>
          <div className="mb-8 p-3 mr-80 shadow-lg bg-white text-gray-600 text-sm font-semibold">{category}</div>
          <h3 className="text-2xl font-bold mb-2">{title}</h3>
          <p className="text-gray-500 text-xl mb-4">{description}</p>
        </div>
        <div className="flex justify-between text-black text-lg mt-auto">
          <div className=' float-end'>{author}</div>
          <div>{date}</div>
        </div>
      </div>
    </Link>
  </div>
);

export default Blog;
