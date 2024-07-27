import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <section className="footer-section py-16 bg-gray-100">
      <footer>
        <div className="container mx-auto px-4">
          <div className="py-12">
            <div className="pb-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <div className="footer-left-wrapper">
                  <div className="mb-4">
                    <Link href="#">
                      <Image
                        src=""
                        alt="ADSuper icon logo"
                        width={150}
                        height={50}
                        className="footer-logo"
                      />
                    </Link>
                  </div>
                  <div className="mb-4">
                    <p>Join our newsletter to stay up to date on features and releases.</p>
                  </div>
                  <div className="footer-newsletter-form">
                    <form
                      id="Newsletter-form"
                      name="wf-form-Newsletter-Form-2"
                      method="get"
                      className="footer-form"
                      aria-label="Newsletter Form"
                    >
                      <input
                        className="form-input mb-4 px-4 py-2 w-full rounded-lg"
                        name="Email"
                        placeholder="Enter your email"
                        type="email"
                        id="Email-newsletter"
                        required
                      />
                      <input
                        type="submit"
                        className="button button-small px-6 py-2 bg-blue-600 text-white rounded-lg cursor-pointer"
                        value="Submit"
                      />
                    </form>
                    <p className="text-xs mt-2">
                      By subscribing you agree to our{' '}
                      <Link href="https://www.webflow.com" target="_blank">
                        Privacy Policy
                      </Link>{' '}
                      and provide consent to receive updates from our company.
                    </p>
                    <div className="success-message mt-4">Thank you! Your submission has been received!</div>
                    <div className="error-message mt-4">Oops! Something went wrong while submitting the form.</div>
                  </div>
                </div>
                <div className="footer-menu-wrapper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                  <div className="footer-link-list">
                    <h4 className="text-lg font-semibold mb-2">Pages</h4>
                    <Link href="/" className="footer-link">Home</Link>
                    <Link href="/about-us" className="footer-link">About us</Link>
                    <Link href="/services" className="footer-link">Services</Link>
                    <Link href="https://template-agency-marketing.webflow.io/services/sea-strategy" target="_blank" className="footer-link">
                      Service single (CMS)
                    </Link>
                    <Link href="/blog" className="footer-link">Blog</Link>
                    <Link href="https://template-agency-marketing.webflow.io/blog/maximizing-roi-with-ppc-advertising" target="_blank" className="footer-link">
                      Blog single (CMS)
                    </Link>
                    <Link href="/contact" className="footer-link">Contact</Link>
                  </div>
                  <div className="footer-link-list">
                    <h4 className="text-lg font-semibold mb-2">Utility pages</h4>
                    <Link href="/confirmation-page" className="footer-link">Confirmation page</Link>
                    <Link href="/template-info/style-guide" className="footer-link">Style guide</Link>
                    <Link href="/template-info/licenses" className="footer-link">Licenses</Link>
                    <Link href="/template-info/changelog" className="footer-link">Changelog</Link>
                    <Link href="/coming-soon" className="footer-link">Coming soon</Link>
                    <Link href="/401" target="_blank" className="footer-link">Protected page (401)</Link>
                    <Link href="/404" target="_blank" className="footer-link">Error page (404)</Link>
                  </div>
                  <div className="footer-link-list flex flex-col items-start md:items-end md:ml-auto">
                    <h4 className="text-xl font-semibold mb-2">Follow us</h4>
                    <Link href="https://www.facebook.com" target="_blank" className="footer-social-link flex items-center mb-2">
                      <Image
                        src="https://assets.website-files.com/64ed83f6f321b779519b4817/64fc58e9f3e576a13b3c565e_Facebook.svg"
                        alt="Facebook"
                        width={24}
                        height={24}
                        className="mr-2"
                      />
                      Facebook
                    </Link>
                    <Link href="https://www.instagram.com" target="_blank" className="footer-social-link flex items-center mb-2">
                      <Image
                        src="https://assets.website-files.com/64ed83f6f321b779519b4817/64fc58ea79f83432f6703806_Instagram.svg"
                        alt="Instagram"
                        width={24}
                        height={24}
                        className="mr-2"
                      />
                      Instagram
                    </Link>
                    <Link href="https://www.linkedin.com" target="_blank" className="footer-social-link flex items-center mb-2">
                      <Image
                        src="https://assets.website-files.com/64ed83f6f321b779519b4817/64fc58ea8d10cc4bf212714a_LinkedIn.svg"
                        alt="LinkedIn"
                        width={24}
                        height={24}
                        className="mr-2"
                      />
                      LinkedIn
                    </Link>
                    <Link href="https://www.twitter.com" target="_blank" className="footer-social-link flex items-center">
                      <Image
                        src="https://assets.website-files.com/64ed83f6f321b779519b4817/64fc58ea19ae7b4621cdfe88_Twitter.svg"
                        alt="Twitter"
                        width={24}
                        height={24}
                        className="mr-2"
                      />
                      Twitter
                    </Link>
                  </div>
                </div>
              </div>
              <div className="line-divider my-8 border-t border-gray-300"></div>
              <div className="pt-8">
                <div className="footer-bottom-wrapper">
                  <p>
                    Copyright © ADSuper | Design by{' '}
                    <Link href="https://www.gurukulskills.site/" target="_blank" className="underline">
                      Uday holy.
                    </Link>{' '}
                    | Powered by{' '}
                    <Link href="https://www.gurukulskills.site/" target="_blank" className="underline">
                      Gurukul skills
                    </Link>
                  </p>
                  <div className="footer-legal-grid mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <Link href="https://www.webflow.com" target="_blank" className="underline">Privacy Policy</Link>
                    <Link href="https://www.webflow.com" target="_blank" className="underline">Terms of Service</Link>
                    <Link href="https://www.webflow.com" target="_blank" className="underline">Cookies Settings</Link>
                  </div>
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
