import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import SubscriberInfoSection from '../components/SubscriberInfoSection';
import Image from 'next/image';
import AudienceChart from '../components/AudienceChart';
import TestimonialSlider from '../components/TestimonialSlider';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { ChevronRightIcon, } from 'lucide-react';
import { BrandCard1, BrandCard2, BrandCard3 } from '@/components/ui/BrandCard';
import Button from '@/components/ui/Button';

export default function Brand() {
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
                        transformStyle: 'preserve-3d',
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
                className={`transition-all max-w-7xl mx-auto py-4 md:px-16 duration-1200 ease-out delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
            >
                {/* Navigation */}
                <div
                    className={`ttransition-all duration-1200 ease-out delay-200 px-2 md:px-0  ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
                        }`}
                >
                    <Navbar />
                </div>

                <div className=' md:pt-16 flex flex-col items-center justify-center'>
                    <div className='max-w-7xl py-16 md:py-32 mx-auto'>
                        <h1 className='text-base font-bold text-white mb-6 text-center'>Brands</h1>
                        <p className='text-white font-bold text-2xl md:text-5xl mb-12 text-center max-w-3xl mx-auto '>We design brands to inform, inspire, and uplift diverse audiences.</p>
                    </div>
                </div>

                <div className='py-16 md:py-32 px-6 md:px-0'>
                    <BrandCard1 />
                    <BrandCard2 />
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 md:py-32 px-6 md:px-0'>
                    <BrandCard3 />
                    <BrandCard3 />
                </div>

                {/* Stats Section */}
                <section className="py-16 md:py-32 flex flex-col items-center px-6 md:px-0">
                    <h2 className="text-4xl md:text-fxl font-bold text-white text-start w-full mb-12">What does this all add up to<span className="text-yellow-400">?</span></h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 w-full max-w-6xl mb-12">
                        {/* Card 1 */}
                        <div className="bg-[#181818] rounded-[40px] px-8 py-12  lg:py-20 flex flex-col items-center text-center shadow-lg">
                            <span className="text-5xl font-bold text-white mb-2">867<span className="text-3xl align-bottom">M</span></span>
                            <span className="text-sm text-white mb-2">Emails sent per month</span>
                            <span className="text-[10px] text-white/50">Source: SparkPost October 2023</span>
                        </div>
                        {/* Card 2 */}
                        <div className="bg-[#181818] rounded-[40px] px-8 py-12 lg:py-20 flex flex-col items-center text-center shadow-lg">
                            <span className="text-5xl font-bold text-white mb-2">35<span className="text-3xl align-bottom">M</span></span>
                            <span className="text-sm text-white mb-2">Emails clicked per month</span>
                            <span className="text-[10px] text-white/50">Source: SparkPost October 2023</span>
                        </div>
                        {/* Card 3 */}
                        <div className="bg-[#181818] rounded-[40px] px-8 py-12 lg:py-20 flex flex-col items-center text-center shadow-lg">
                            <span className="text-5xl font-bold text-white mb-2">42<span className="text-3xl align-bottom">M</span></span>
                            <span className="text-sm text-white mb-2">Web sessions per month</span>
                            <span className="text-[10px] text-white/50">Source: Google Analytics October 2023</span>
                        </div>
                        {/* Card 4 */}
                        <div className="bg-[#181818] rounded-[40px] px-8 py-12 lg:py-20 flex flex-col items-center text-center shadow-lg">
                            <span className="text-5xl font-bold text-white mb-2">1.9<span className="text-3xl align-bottom">M</span></span>
                            <span className="text-sm text-white mb-2">Hours reading per month</span>
                            <span className="text-[10px] text-white/50">Source: Google Analytics October 2023</span>
                        </div>
                    </div>
                    <div className="flex justify-end w-full max-w-6xl">
                       <Button
                        href="/audience"
                        text="LEARN MORE ABOUT OUR AUDIENCE"
                       />
                    </div>
                </section>
                {/* End Stats Section */}

                {/* make section here */}

                {/* Footer */}
                <footer
                    className={`pt-16 px-6 lg:px-8 border-t border-white/10 transition-all duration-1000 ease-out delay-1900 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`}
                >
                    <div className="flex flex-col items-start">
                        <div className="flex flex-col md:flex-row gap-8 mb-12 w-full py-8 lg:py-16">
                            <div className="bg-[#181818] rounded-3xl px-6 md:px-16 py-12 md:py-24 grid grid-cols-1 md:grid-cols-2 w-full items-start gap-6 md:gap-0">
                                <div>
                                    <h3 className="text-3xl md:text-5xl font-semibold mb-4">Interested in reaching our audience?</h3>
                                </div>
                                <div>
                                    <h3 className="text-xl md:text-2xl font-semibold mb-4">Whether you&apos;re looking to advertise or you have a publication that could fit our portfolio, we&apos;d love to hear from you.</h3>
                               <Button
                                href="/connect"
                                text="Connect with us"
                               />
                                </div>
                            </div>
                        </div>
                       
                    </div>
                    <div className="max-w-7xl py-8 lg:py-16 mx-auto">
                        {/* Large screen layout - single column */}
                        <div className="hidden lg:flex flex-col items-start">
                            <div className="flex items-center gap-16 mt-8">
                                <Link href="/audience" className="flex flex-col items-center group ">
                                    <span className={` w-8 h-1 bg-white rounded-full hidden md:block mb-2 group-hover:bg-yellow-400 transition ${router.pathname === '/audience' ? 'bg-yellow-400' : 'hidden'}`}></span>
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
