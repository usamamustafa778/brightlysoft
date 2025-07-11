"use client";
import { useEffect, useState } from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Brands from "../components/Brands";
import Counter from "../components/Counter";
import Control from "../components/Control";
import BrandsGridSection from "../components/BrandsGridSection";
import Link from "next/link";

import { useRouter } from "next/router";
import Button from "@/components/ui/Button";
export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentBrandSlide, setCurrentBrandSlide] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Trigger fade-in animation after component mounts
    setIsLoaded(true);

    const handleScroll = () => {
      setScrollY(window.pageYOffset);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const newsletters = [
    {
      name: "Recommended Reads",
      tagline: "What's worth reading",
      description:
        "Receive the most interesting trending stories and hand-picked articles from around the web right in your inbox.",
      hasSignup: true,
    },
    {
      name: "Better Report",
      tagline: "Elevate your everyday",
      description:
        "Launched in August 2023, Better Report provides the practical tips and expert advice you need to pare down the complexities of everyday living. Subscribe and save time, effort, and money.",
      hasSignup: false,
    },
    {
      name: "Daily Passport",
      tagline: "The world is waiting",
      description:
        "Daily Passport introduces subscribers to the most unique locations around the world via our daily newsletters.",
      hasSignup: true,
    },
    {
      name: "Nice News",
      tagline: "News to inform, not enrage",
      description:
        "Wake up to nice news. Our flagship news publication brings readers positive stories other outlets didn't shine enough of a light on, giving subscribers the opportunity to re-write their relationship with news.",
      hasSignup: false,
    },
    {
      name: "Word Daily",
      tagline: "The wonder of words",
      description:
        "Want to grow your vocabulary a bit each day? Word Daily sends subscribers a new word to learn every morning.",
      hasSignup: true,
    },
    {
      name: "The Discoverer",
      tagline: "Discover the world from your inbox",
      description:
        "The Discoverer is a modern travel guide that allows you to travel the world right from your inbox.",
      hasSignup: false,
    },
  ];

  const brandMockups = [
    "https://cdn.prod.website-files.com/6426f39707cfcc0b1a306213/656534fc9ae783f225b5493c_FC_phone.svg",
    "https://cdn.prod.website-files.com/6426f39707cfcc0b1a306213/65456f83173f41210f974dec_BR_phone.svg",
    "https://cdn.prod.website-files.com/6426f39707cfcc0b1a306213/645d4f765c5d64849a49df91_daily-passport-phone-mockup.webp",
    "https://cdn.prod.website-files.com/6426f39707cfcc0b1a306213/645d4f763cd2cf2c6763e839_word-daily-phone-mockup.webp",
    "https://cdn.prod.website-files.com/6426f39707cfcc0b1a306213/645d4f7623a60d37b3a84ca5_inspiring-quotes-mockup-2.webp",
    "https://cdn.prod.website-files.com/6426f39707cfcc0b1a306213/645d4f76a6f84b18062079dc_interesting-facts-mockup.webp",
    "https://cdn.prod.website-files.com/6426f39707cfcc0b1a306213/64794a1a587bc99e83c1bcc6_645d5e02a291f5f1467ea453_discove.webp",
    "https://cdn.prod.website-files.com/6426f39707cfcc0b1a306213/645d4f76e7c01290e1fe9a0f_recommended-reads-phone-mockup.webp",
    "https://cdn.prod.website-files.com/6426f39707cfcc0b1a306213/656533116f71d0476bf99884_LS_phone.svg",
    "https://cdn.prod.website-files.com/6426f39707cfcc0b1a306213/647949456c535950140258e9_64760432213bce23619f1e92_Group%202.webp",
    "https://cdn.prod.website-files.com/6426f39707cfcc0b1a306213/645d4f7604cbb22b95c8ac37_crossword-mockup.webp",
    "https://cdn.prod.website-files.com/6426f39707cfcc0b1a306213/645d4f7623b2e666846ac505_interesting-facts-mockup-2.webp",
    "https://cdn.prod.website-files.com/6426f39707cfcc0b1a306213/656534fc9ae783f225b5493c_FC_phone.svg",
    "https://cdn.prod.website-files.com/6426f39707cfcc0b1a306213/65456f83173f41210f974dec_BR_phone.svg",
    "https://cdn.prod.website-files.com/6426f39707cfcc0b1a306213/645d4f765c5d64849a49df91_daily-passport-phone-mockup.webp",
    "https://cdn.prod.website-files.com/6426f39707cfcc0b1a306213/645d4f763cd2cf2c6763e839_word-daily-phone-mockup.webp",
    "https://cdn.prod.website-files.com/6426f39707cfcc0b1a306213/645d4f7623a60d37b3a84ca5_inspiring-quotes-mockup-2.webp",
    "https://cdn.prod.website-files.com/6426f39707cfcc0b1a306213/645d4f76a6f84b18062079dc_interesting-facts-mockup.webp",
    "https://cdn.prod.website-files.com/6426f39707cfcc0b1a306213/64794a1a587bc99e83c1bcc6_645d5e02a291f5f1467ea453_discove.webp",
    "https://cdn.prod.website-files.com/6426f39707cfcc0b1a306213/645d4f76e7c01290e1fe9a0f_recommended-reads-phone-mockup.webp",
    "https://cdn.prod.website-files.com/6426f39707cfcc0b1a306213/656533116f71d0476bf99884_LS_phone.svg",
    "https://cdn.prod.website-files.com/6426f39707cfcc0b1a306213/647949456c535950140258e9_64760432213bce23619f1e92_Group%202.webp",
    "https://cdn.prod.website-files.com/6426f39707cfcc0b1a306213/645d4f7604cbb22b95c8ac37_crossword-mockup.webp",
    "https://cdn.prod.website-files.com/6426f39707cfcc0b1a306213/645d4f7623b2e666846ac505_interesting-facts-mockup-2.webp",
  ];



  return (
    <>
      <Head>
        <title>Brightly Soft - Building a brighter web.</title>
        <meta
          name="description"
          content="Brightly Soft is a digital media company with a portfolio of inspiring brands designed for the inbox."
        />
      </Head>

      {/* Star field background layers */}
      <div
        className={`space-backgrounds fixed top-0 left-0 w-full h-full pointer-events-none z-0 transition-opacity duration-2000 ease-out ${isLoaded ? "opacity-100" : "opacity-0"
          }`}
      >
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(180deg, #0a0a0a 0%, #1a1a2e 100%)",
          }}
        />
        <img
          src="https://cdn.prod.website-files.com/6426f39707cfcc0b1a306213/645d4f68595f996980f00302_Texture_high_res_final_stars-0.webp"
          alt=""
          width={1920}
          height={1080}
          className="space-bg space-bg-0 absolute object-cover"
          style={{
            transform: `translate3d(0px, ${-scrollY * 0.25
              }px, 0px) scale3d(1.01, 1.01, 1)`,
            transformStyle: "preserve-3d",
          }}
        />
        <img
          src="https://cdn.prod.website-files.com/6426f39707cfcc0b1a306213/645d4f681ab20a0fc4d8d929_Texture_high_res_final_stars-1.webp"
          alt=""
          width={1920}
          height={1080}
          className="space-bg space-bg-1 absolute object-cover"
          style={{
            transform: `translate3d(0px, ${-scrollY * 0.15
              }px, 0px) scale3d(1.01, 1.01, 1)`,
            transformStyle: "preserve-3d",
          }}
        />
        <img
          src="https://cdn.prod.website-files.com/6426f39707cfcc0b1a306213/645d4f681ab20a0fc4d8d929_Texture_high_res_final_stars-1.webp"
          alt=""
          width={1920}
          height={1080}
          className="space-bg space-bg-2 absolute object-cover"
          style={{
            transform: `translate3d(0px, ${-scrollY * 0.1
              }px, 0px) scale3d(1.01, 1.01, 1)`,
            transformStyle: "preserve-3d",
          }}
        />
      </div>

      <div
        className={`transition-all max-w-7xl mx-auto py-4 md:px-16 duration-1200 ease-out delay-200 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
          }`}
      >

        <div
          className={`transition-all duration-1200 ease-out delay-200 px-2 md:px-0 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
            }`}
        >
          <Navbar />
        </div>


        <Hero isLoaded={isLoaded} />
        <Brands isLoaded={isLoaded} brandMockups={brandMockups} />
        <Counter isLoaded={isLoaded} />
        <Control isLoaded={isLoaded} />

        {/* Newsletter Slider Section */}
        <section
          className={`py-32 px-6 lg:px-8 transition-all duration-1200 ease-out delay-1300 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          <div className="max-w-6xl mx-auto ">
            <h3 className="text-3xl sm:text-4xl font-bold text-white text-center mb-20">
              Opt-In to Brightly Soft
            </h3>

            <div className="relative border py-5 rounded-3xl bg-gray-900">
              <div className="overflow-hidden">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {newsletters.map((newsletter, index) => (
                    <div key={index} className="w-full flex-shrink-0 px-8">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                          <h4 className="text-2xl sm:text-3xl font-bold text-white mb-6 leading-tight">
                            {newsletter.tagline}
                          </h4>
                          <p className="text-white/70 text-base leading-relaxed mb-8">
                            {newsletter.description}
                          </p>
                          {newsletter.hasSignup ? (
                            <div className="space-y-6">
                              <div className="text-lg font-medium text-white">
                                Subscribe to {newsletter.name}
                              </div>
                              <div className="flex border-b border-white/20 pb-2">
                                <input
                                  type="email"
                                  placeholder="Your email"
                                  className="flex-1 bg-transparent text-white placeholder-white/50 focus:outline-none text-base"
                                />
                                <button className="text-white hover:text-white/70 transition-colors ml-4">
                                  <svg
                                    className="w-5 h-5"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                      clipRule="evenodd"
                                    />
                                  </svg>
                                </button>
                              </div>
                              <a
                                href="#"
                                className="text-white/70 hover:text-white text-sm transition-colors"
                              >
                                Visit {newsletter.name}
                              </a>
                            </div>
                          ) : (
                            <button className="inline-flex items-center text-white hover:text-white/70 transition-colors group">
                              <span className="mr-3">
                                Visit {newsletter.name}
                              </span>
                              <svg
                                className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </button>
                          )}
                        </div>
                        <div className="flex items-center justify-center">
                          <div className="w-56 h-80 rounded-3xl border border-white/10 flex items-center justify-center shadow-2xl">
                            <div className="text-center p-6">
                              <div className="w-12 h-12 bg-gradient-to-br from-white/20 to-white/5 rounded-xl mx-auto mb-4 flex items-center justify-center">
                                <div className="w-6 h-6 bg-white/60 rounded-lg"></div>
                              </div>
                              <div className="text-white/90 font-medium">
                                {newsletter.name}
                              </div>
                              <div className="text-white/50 text-sm mt-2">
                                Daily newsletter
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-center mt-12 space-x-4">
                <button
                  onClick={() => setCurrentSlide(Math.max(0, currentSlide - 1))}
                  className="p-3 text-white/50 hover:text-white transition-colors"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <button
                  onClick={() =>
                    setCurrentSlide(
                      Math.min(newsletters.length - 1, currentSlide + 1)
                    )
                  }
                  className="p-3 text-white/50 hover:text-white transition-colors"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>

              <div className="flex justify-center mt-6 space-x-2">
                {newsletters.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-px transition-all duration-300 ${index === currentSlide
                      ? "bg-white w-12"
                      : "bg-white/30 w-8"
                      }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Brands Grid Section */}
        <BrandsGridSection isLoaded={isLoaded} />

        {/* Powered By Section */}
        <section
          className={`py-32 px-6 lg:px-8 transition-all duration-1200 ease-out delay-1700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Powered by Brightly Soft
              </h3>
              <h4 className="text-lg text-white/70">
                An inbox-first media company.
              </h4>
            </div>

            <div className="space-y-16">
              {[
                {
                  title: "Brand Partners",
                  description:
                    "We deliver targeted and quality traffic to our brand partners, both through the articles we curate and the ads we display across our network. If you're a publisher or advertiser interested in partnering with us, let's discuss how we can work together.",
                  buttonText: "Reach Our Audience",
                },
                {
                  title: "Our Team",
                  description:
                    "We have a team of 50+ editors, writers, designers, and developers, distributed throughout the world, with bases in Denver, New York, and Southern California. Interested in joining the Brightly Soft team? We're hiring!",
                  buttonText: "Join Our Team",
                },
                {
                  title: "Inbox Innovators",
                  description:
                    "Have an email series you think would be a good fit for Brightly Soft? We'd love to hear about it. Our in-house brand & innovation studio designs, builds, and launches concepts rapidly, so we're always looking for new ideas to enhance the inbox experience.",
                  buttonText: "Collaborate With Us",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="py-8 bg-gray-900 px-6 rounded-3xl border-white/10 last:border-b-0"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    <h5 className="text-2xl font-bold text-white leading-tight">
                      {item.title}
                    </h5>
                    <div>
                      <p className="text-white/70 text-base leading-relaxed mb-8">
                        {item.description}
                      </p>
                      <Button text={item.buttonText} href={item.title.toLowerCase()} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer
          className={`pt-16 px-6  lg:px-8 border-t border-white/10 transition-all duration-1000 ease-out delay-1900 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
          <div className="max-w-7xl py-8 lg:py-16 mx-auto">
            {/* Large screen layout - single column */}
            <div className="hidden lg:flex flex-col items-start">
              <div className="flex items-center gap-16 mt-8">
                <Link href="/audience" className="flex flex-col items-center group ">
                  <span className={`  block w-8 h-1 bg-white rounded-full mb-2 group-hover:bg-yellow-400 transition ${router.pathname === '/audience' ? 'bg-yellow-400' : 'hidden'}`}></span>
                  <span className="text-xl font-medium text-white group-hover:text-yellow-400 transition">Audience</span>
                </Link>
                <Link href="/brands" className="flex flex-col items-center group">
                  <span className={`  block w-8 h-1 bg-white rounded-full mb-2 group-hover:bg-yellow-400 transition ${router.pathname === '/brands' ? 'bg-yellow-400' : 'hidden'}`}></span>
                  <span className="text-xl font-medium text-white group-hover:text-yellow-400 transition">Brands</span>
                </Link>
                <Link href="/connect" className="flex flex-col items-center group">
                  <span className={`  block w-8 h-1 bg-white rounded-full mb-2 group-hover:bg-yellow-400 transition ${router.pathname === '/connect' ? 'bg-yellow-400' : 'hidden'}`}></span>
                  <span className="text-xl font-medium text-white group-hover:text-yellow-400 transition">Connect</span>
                </Link>
              </div>
            </div>

            {/* Small screen layout - two columns */}
            <div className="lg:hidden grid grid-cols-2 gap-8 ">
              {/* Left column - Links */}
              <div className="flex flex-col items-start space-y-4">
                <Link href="/audience" className="flex flex-col items-center group">
                  <span className={`  block w-8 h-1 bg-white rounded-full mb-2 group-hover:bg-yellow-400 transition ${router.pathname === '/audience' ? 'bg-yellow-400' : 'hidden'}`}></span>
                  <span className="text-xl font-medium text-white group-hover:text-yellow-400 transition">Audience</span>
                </Link>
                <Link href="/brands" className="flex flex-col items-center group">
                  <span className={`  block w-8 h-1 bg-white rounded-full mb-2 group-hover:bg-yellow-400 transition ${router.pathname === '/brands' ? 'bg-yellow-400' : 'hidden'}`}></span>
                  <span className="text-xl font-medium text-white group-hover:text-yellow-400 transition">Brands</span>
                </Link>
                <Link href="/connect" className="flex flex-col items-center group">
                  <span className={`  block w-8 h-1 bg-white rounded-full mb-2 group-hover:bg-yellow-400 transition ${router.pathname === '/connect' ? 'bg-yellow-400' : 'hidden'}`}></span>
                  <span className="text-xl font-medium text-white group-hover:text-yellow-400 transition">Connect</span>
                </Link>
              </div>

              {/* Right column - Other elements */}
              <div className="flex flex-col items-start space-y-4">
                <Link href="/" className="text-xl font-medium text-white">
                  Brightly Soft
                </Link>
                <div className="text-white/50 text-sm">
                  © 2025 Brightly Soft
                </div>
                <div className="flex flex-col items-end space-y-2">
                  <a
                    href="#"
                    className="text-white/50 hover:text-white text-sm transition-colors"
                  >
                    User Agreement
                  </a>
                  <a
                    href="#"
                    className="text-white/50 hover:text-white text-sm transition-colors"
                  >
                    Privacy Policy
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Large screen bottom section */}
          <div className="hidden lg:block max-w-7xl mx-auto py-8 lg:py-32">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
              <div>
                <Link href="/" className="text-xl font-medium text-white mb-4">
                  Brightly Soft
                </Link>
              </div>

              <div className="md:col-span-2 ">
                <div className="flex flex-col md:flex-row md:justify-end items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
                  <div className="text-white/50 text-sm">
                    © 2025 Brightly Soft
                  </div>
                  <a
                    href="#"
                    className="text-white/50 hover:text-white text-sm transition-colors"
                  >
                    User Agreement
                  </a>
                  <a
                    href="#"
                    className="text-white/50 hover:text-white text-sm transition-colors"
                  >
                    Privacy Policy
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        .animate-marquee {
          animation: marquee 60s linear infinite;
        }

        @keyframes spin-slow {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        .animate-spin-slow {
          animation: spin-slow 30s linear infinite;
        }
      `}</style>
    </>
  );
}
