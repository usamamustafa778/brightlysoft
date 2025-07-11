import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import SubscriberInfoSection from '../components/SubscriberInfoSection';
import Image from 'next/image';
import AudienceChart from '../components/AudienceChart';
import TestimonialSlider from '../components/TestimonialSlider';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { ChevronRightIcon, } from 'lucide-react';
import Button from '@/components/ui/Button';

export default function Audience() {
    const [scrollY, setScrollY] = useState(0);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
        const handleScroll = () => {
            setScrollY(window.pageYOffset);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const router = useRouter();

    const subscriberInfo = [
        {
            title: "news",
            position: "top-0 left-0"
        },
        {
            title: "learning",
            position: "top-0 right-0"
        },

        {
            title: "language",
            position: "left-1/4 top-1/4"
        },
        {
            title: "history",
            position: "right-1/4 bottom-1/4"
        },
        {
            title: "travel",
            position: "bottom-0 left-0"

        },
    ]

    const audienceCards = [
        {
            value: "2.1",
            unit: "Brands",
            description: "number of subscriptions",
            source: "Source: Internal Tracking October 2023"
        },
        {
            value: "50",
            unit: "Emails",
            description: "opened per month",
            source: "Source: SparkPost October 2023"
        },
        {
            value: "7",
            unit: "%",
            description: "click rate",
            source: "Source: SparkPost October 2023"
        },
        {
            value: "2.5",
            unit: "Min",
            description: "time on site",
            source: "Source: Google Analytics October 2023"
        }
    ]

    return (
        <>
            {/* Star field background layers */}
            <div
                className={`space-backgrounds fixed top-0 left-0 w-full h-full pointer-events-none z-0 transition-opacity duration-2000 ease-out ${isLoaded ? 'opacity-100' : 'opacity-0'
                    }`}
            >
                <div
                    className="absolute inset-0"
                    style={{
                        background: 'linear-gradient(180deg, #0a0a0a 0%, #1a1a2e 100%)',
                    }}
                />
                <img
                    src="https://cdn.prod.website-files.com/6426f39707cfcc0b1a306213/645d4f68595f996980f00302_Texture_high_res_final_stars-0.webp"
                    alt=""
                    className="space-bg space-bg-0 absolute object-cover"
                    style={{
                        transform: `translate3d(0px, ${-scrollY * 0.25}px, 0px) scale3d(1.01, 1.01, 1)`,
                        transformSyle: 'preserve-3d',
                    }}
                />
                <img
                    src="https://cdn.prod.website-files.com/6426f39707cfcc0b1a306213/645d4f681ab20a0fc4d8d929_Texture_high_res_final_stars-1.webp"
                    alt=""
                    className="space-bg space-bg-1 absolute object-cover"
                    style={{
                        transform: `translate3d(0px, ${-scrollY * 0.15}px, 0px) scale3d(1.01, 1.01, 1)`,
                        transformStyle: 'preserve-3d',
                    }}
                />
                <img
                    src="https://cdn.prod.website-files.com/6426f39707cfcc0b1a306213/645d4f681ab20a0fc4d8d929_Texture_high_res_final_stars-1.webp"
                    alt=""
                    className="space-bg space-bg-2 absolute object-cover"
                    style={{
                        transform: `translate3d(0px, ${-scrollY * 0.1}px, 0px) scale3d(1.01, 1.01, 1)`,
                        transformStyle: 'preserve-3d',
                    }}
                />
            </div>

            {/* Main content */}
            <div
                className={`transition-all max-w-7xl mx-auto py-4 md:px-16 duration-1200 ease-out delay-200 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
                    }`}
            >
                {/* Navigation */}
                <div
                    className={`transition-all duration-1200 ease-out delay-200 px-2 md:px-0 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
                        }`}
                >
                    <Navbar />
                </div>

                {/* Hero section */}
                <section className="px-6 lg:px-8 flex flex-col items-center justify-center min-h-[60vh] pt-24 pb-12">
                    <div className="text-center mb-8">
                        <div className="text-white/60 text-sm mb-2">Audience</div>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">A loyal community of millions.</h1>
                        <div className="text-white/80 text-lg mb-12">The profile of an Optimism subscriber</div>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 justify-center items-center w-full max-w-4xl">
                        {audienceCards.map((card, index) => (
                            <div key={index} className="bg-black/60 rounded-2xl px-8 py-8 flex flex-col items-center min-w-[170px] shadow-lg">
                                <div className="text-5xl font-bold text-white mb-1 flex items-start md:items-end justify-center">
                                    <span className=''>{card.value}</span>
                                    <span className="text-base font-medium h-full text-white ml-2">
                                        {card.unit}
                                    </span>
                                </div>
                                <div className="text-white/70 text-sm mb-2 text-center">{card.description}</div>
                                <div className="text-white/30 text-xs text-center">{card.source}</div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Subscriber info section */}
                <section className="py-32 px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="flex flex-col items-center justify-center gap-4">
                                <h2 className="text-4xl font-bold">
                                    Our subscribers inform the brands we launch and content we create.
                                </h2>
                                <p className="text-lg">We place great value in our audience&apos;s behavior — what content they engage with and how they engage with it — and use those insights to build brands and craft stories we know they will love. </p>
                            </div>
                            <div className="min-h-[600px] relative">
                                {subscriberInfo.map((info, index) => (
                                    <div key={index} className={`absolute ${info.position} w-fit p-1 h-fit flex gap-4 border border-yellow-500/20 aspect-square rounded-full justify-between items-center`}>
                                        <div className="border border-yellow-500/50 aspect-square rounded-full p-2">
                                            <div className="border-2 border-yellow-500 aspect-square rounded-full p-1 flex items-center justify-center">
                                                <h3 className="text-sm font-bold p-4">{info.title}</h3>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Audience characteristics section */}
                <section className="py-32 px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="flex flex-col items-center justify-center gap-4">
                            <h2 className="text-4xl md:text-5xl font-bold">
                                The Makeup of Our Audience
                            </h2>
                            <p className="text-lg text-center max-w-2xl">
                                In addition to learning from our subscribers&apos; engagement, we survey and interview our audience regularly to better understand who they are and what motivates them.
                            </p>
                        </div>
                    </div>
                </section>
                <div className='px-6 lg:px-8'>
                    <AudienceChart />
                </div>


                {/* Testimonials section */}
                <div className='px-6 lg:px-8'>
                    <TestimonialSlider />
                </div>

                {/* Footer */}
                <footer
                    className={`pt-16 px-6 lg:px-8 border-t border-white/10 transition-all duration-1000 ease-out delay-1900 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`}

                >

                    <div className='flex flex-col md:flex-row gap-4 mb-12 max-w-7xl mx-auto'>
                      <div className='flex flex-col items-center justify-center gap-4 bg-[#181818] rounded-2xl p-4 lg:p-8'>
                        <h2 className='text-2xl md:text-4xl font-bold'>Want to learn more about the brands in our portfolio?</h2>
                        <Button className='w-full' text="over brands" href="/brands" />
                      </div>
                      <div className='flex flex-col items-center justify-center gap-4 bg-[#181818] rounded-2xl p-4 lg:p-8'>
                        <h2 className='text-2xl md:text-4xl font-bold'>Interested in reaching a particular slice of our audience?</h2>
                        <Button className='w-full' text="connect with us" href="/connect" />
                      </div>
                    </div>
                    <div className="max-w-7xl py-8 lg:py-16 mx-auto">
                        {/* Large screen layout - single column */}
                        <div className="hidden lg:flex flex-col items-start">
                            <div className="flex items-center gap-16 mt-8">
                                <Link href="/audience" className="flex flex-col items-center group ">
                                    <span className={`  w-8 h-1 bg-white rounded-full hidden md:block mb-2 group-hover:bg-yellow-400 transition ${router.pathname === '/audience' ? 'bg-yellow-400' : 'hidden'}`}></span>
                                    <span className="text-xl font-medium text-white group-hover:text-yellow-400 transition">Audience</span>
                                </Link>
                                <Link href="/brands" className="flex flex-col items-center group">
                                    <span className={`  w-8 h-1 bg-white rounded-full hidden md:block mb-2 group-hover:bg-yellow-400 transition ${router.pathname === '/brands' ? 'bg-yellow-400' : 'hidden'}`}></span>
                                    <span className="text-xl font-medium text-white group-hover:text-yellow-400 transition">Brands</span>
                                </Link>
                                <Link href="/connect" className="flex flex-col items-center group">
                                    <span className={`  w-8 h-1 bg-white rounded-full hidden md:block mb-2 group-hover:bg-yellow-400 transition ${router.pathname === '/connect' ? 'bg-yellow-400' : 'hidden'}`}></span>
                                    <span className="text-xl font-medium text-white group-hover:text-yellow-400 transition">Connect</span>
                                </Link>
                            </div>
                        </div>

                        {/* Small screen layout - two columns */}
                        <div className="lg:hidden grid grid-cols-2 gap-8">
                            {/* Left column - Links */}
                            <div className="flex flex-col items-start space-y-4">
                                <Link href="/audience" className="flex flex-col items-center group">
                                    <span className={`  w-8 h-1 bg-white rounded-full hidden md:block mb-2 group-hover:bg-yellow-400 transition ${router.pathname === '/audience' ? 'bg-yellow-400' : 'hidden'}`}></span>
                                    <span className="text-xl font-medium text-white group-hover:text-yellow-400 transition">Audience</span>
                                </Link>
                                <Link href="/brands" className="flex flex-col items-center group">
                                    <span className={`  w-8 h-1 bg-white rounded-full hidden md:block mb-2 group-hover:bg-yellow-400 transition ${router.pathname === '/brands' ? 'bg-yellow-400' : 'hidden'}`}></span>
                                    <span className="text-xl font-medium text-white group-hover:text-yellow-400 transition">Brands</span>
                                </Link>
                                <Link href="/connect" className="flex flex-col items-center group">
                                    <span className={`  w-8 h-1 bg-white rounded-full hidden md:block mb-2 group-hover:bg-yellow-400 transition ${router.pathname === '/connect' ? 'bg-yellow-400' : 'hidden'}`}></span>
                                    <span className="text-xl font-medium text-white group-hover:text-yellow-400 transition">Connect</span>
                                </Link>
                            </div>

                            {/* Right column - Other elements */}
                            <div className="flex flex-col items-start space-y-4">
                                <div className="text-xl font-medium text-white">
                                    Brightly Soft
                                </div>
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
                                <div className="text-xl font-medium text-white mb-4">
                                    Brightly Soft
                                </div>
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
        </>
    );
} 
