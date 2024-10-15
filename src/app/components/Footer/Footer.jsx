import Image from "next/image";
import Link from "next/link";
import Button from "../button1/button1";

const NewsletterForm = () => (
  <div className="footer-newsletter-form">
    <p className="mb-6 text-gray-700">
      Join our newsletter to stay up to date on Incoming Offers and Updates.
    </p>
    <form
      id="Newsletter-form"
      name="wf-form-Newsletter-Form-2"
      method="get"
      className="footer-form"
      aria-label="Newsletter Form"
    >
      <input
        className="form-input px-4 py-2 w-full rounded-lg border border-gray-300"
        name="Email"
        placeholder="Enter your email"
        type="email"
        id="Email-newsletter"
        required
      />
      <Button
        href=""
        variant="solid"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5"
      >
        Submit
      </Button>
    </form>
    <p className="text-xs mt-4 text-gray-600">
      By subscribing you agree to our{" "}
      <Link
        href="https://www.gurukulskills.site/"
        target="_blank"
        className="text-blue-600 underline"
      >
        Privacy Policy
      </Link>{" "}
      and provide consent to receive updates from our Agency.
    </p>
  </div>
);

const FooterLinkList = ({ title, links }) => (
  <div className="footer-link-list mb-8">
    <h4 className="text-lg font-semibold mb-4 text-gray-800">{title}</h4>
    <ul className="space-y-2">
      {links.map((link, index) => (
        <li key={index}>
          <Link
            href={link.href}
            target={link.target || "_self"}
            className="text-gray-600 hover:text-blue-600"
          >
            {link.text}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

const FooterSocialLinks = ({ title, socialLinks }) => (
  <div className="footer-link-list mb-8">
    <h4 className="text-lg font-semibold mb-4 text-gray-800">{title}</h4>
    <ul className="space-y-2">
      {socialLinks.map((link, index) => (
        <li key={index}>
          <Link
            href={link.href}
            target="_blank"
            className="flex items-center text-gray-600 hover:text-blue-600"
          >
            <Image
              src={link.icon}
              alt={link.alt}
              width={24}
              height={24}
              className="mr-2"
            />
            {link.text}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  const pageLinks = [
    { href: "/", text: "Home" },
    { href: "#about", text: "About us" },
    { href: "#services", text: "Services" },
    {
      href: "https://www.gurukulskills.site/",
      text: "Service single (CMS)",
      target: "_blank",
    },
    { href: "#blog", text: "Blog" },
    {
      href: "https://www.gurukulskills.site/",
      text: "Blog single (CMS)",
      target: "_blank",
    },
    { href: "https://chat.whatsapp.com/KuIyij5t0Bg4rA2AHHRTZi", text: "Contact" },
  ];

  const socialLinks = [
    {
      href: "https://www.facebook.com/profile.php?id=100085817173988&mibextid=ZbWKwL",
      icon: "https://assets.website-files.com/64ed83f6f321b779519b4817/64fc58e9f3e576a13b3c565e_Facebook.svg",
      alt: "Facebook",
      text: "Facebook",
    },
    {
      href: "https://www.instagram.com/mr.nikhil01official?utm_source=qr&igsh=bnE5bnc5b3E0NGkz",
      icon: "https://assets.website-files.com/64ed83f6f321b779519b4817/64fc58ea79f83432f6703806_Instagram.svg",
      alt: "Instagram",
      text: "Instagram",
    },
    {
      href: "https://chat.whatsapp.com/KuIyij5t0Bg4rA2AHHRTZi",
      icon: "https://assets.website-files.com/64ed83f6f321b779519b4817/64fc58ea8d10cc4bf212714a_LinkedIn.svg",
      alt: "LinkedIn",
      text: "LinkedIn",
    },
    {
      href: "https://chat.whatsapp.com/KuIyij5t0Bg4rA2AHHRTZi",
      icon: "https://assets.website-files.com/64ed83f6f321b779519b4817/64fc58ea19ae7b4621cdfe88_Twitter.svg",
      alt: "Twitter",
      text: "Twitter",
    },
  ];

  return (
    <section className="footer-section py-16 pb-0 px-4 md:px-8 lg:px-16">
      <footer>
        <div className="container mx-auto">
          <div className="py-12">
            <div className="pb-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <div className="footer-left-wrapper">
                  <div className="mb-4">
                    <Link href="#">
                      <Image
                        src="/favicon.ico"
                        alt="ADSuper icon logo"
                        width={150}
                        height={50}
                        className="footer-logo"
                      />
                    </Link>
                  </div>
                  <NewsletterForm />
                </div>
                <div className="footer-menu-wrapper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 ">
                  <FooterLinkList title="Pages" links={pageLinks} />
                  <FooterSocialLinks
                    title="Follow us"
                    socialLinks={socialLinks}
                  />
                </div>
              </div>
              <div className="line-divider my-8 border-t border-gray-300"></div>
              <div className="pt-8 mb-0 text-center md:text-left">
                <p className="text-gray-700">
                  Copyright © ADSuper | Design by{" "}
                  <Link
                    href="https://www.gurukulskills.site/"
                    target="_blank"
                    className="underline text-blue-600"
                  >
                    Uday holy.
                  </Link>{" "}
                  | Powered by{" "}
                  <Link
                    href="https://www.gurukulskills.site/"
                    target="_blank"
                    className="underline text-blue-600"
                  >
                    Gurukul skills
                  </Link>
                </p>
                <div className="footer-legal-grid mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <Link
                    href="https://www.gurukulskills.site/"
                    target="_blank"
                    className="underline text-gray-600 hover:text-blue-600"
                  >
                    Privacy Policy
                  </Link>
                  <Link
                    href="https://www.gurukulskills.site/"
                    target="_blank"
                    className="underline text-gray-600 hover:text-blue-600"
                  >
                    Terms of Service
                  </Link>
                  <Link
                    href="https://www.gurukulskills.site/"
                    target="_blank"
                    className="underline text-gray-600 hover:text-blue-600"
                  >
                    Cookies Settings
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
