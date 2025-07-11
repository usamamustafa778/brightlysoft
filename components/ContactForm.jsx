import React, { useState } from 'react'
import Button from '../components/ui/Button'

export default function ContactForm() {

    const [selectedCard, setSelectedCard] = useState("brand");

    const handleCardClick = (card) => {
        setSelectedCard(card);
    }
    return (

        <div className='max-w-7xl mx-auto px-0 md:px-16'>
            <div className='flex flex-col md:flex-row gap-4 py-10'>
                <div className={`border border-white/10 flex-1 group cursor-pointer transition-all duration-300 hover:border-yellow-400 flex flex-col justify-center items-center rounded-2xl p-4 py-8 ${selectedCard === 'brand' ? 'border-yellow-400' : ''}`} onClick={() => handleCardClick('brand')}>
                    <h2 className={`text-lg font-bold group-hover:text-yellow-400 transition-all duration-300 ${selectedCard === 'brand' ? 'text-yellow-400' : ''}`}>I'm a Brand Partner</h2>
                    <p className='text-sm text-gray-400'>Advertisers, Publishers, Sponsors</p>
                </div>
                <div className={`border border-white/10 group cursor-pointer transition-all duration-300 hover:border-yellow-400  flex-1 flex flex-col justify-center items-center rounded-2xl p-4 py-8 ${selectedCard === 'inbox' ? 'border-yellow-400' : ''}`} onClick={() => handleCardClick('inbox')}>
                    <h2 className={`text-lg font-bold group-hover:text-yellow-400 transition-all duration-300 ${selectedCard === 'inbox' ? 'text-yellow-400' : ''}`}>I'm an Inbox Innovator</h2>
                    <p className='text-sm text-gray-400'>Content Creators, Digital Entrepreneurs</p>
                </div>
                <div className={`border border-white/10 flex-1 group cursor-pointer transition-all duration-300 hover:border-yellow-400 flex flex-col justify-center items-center rounded-2xl p-4 py-8 ${selectedCard === 'general' ? 'border-yellow-400' : ''}`} onClick={() => handleCardClick('general')}>
                    <h2 className={`text-lg font-bold group-hover:text-yellow-400 transition-all duration-300 ${selectedCard === 'general' ? 'text-yellow-400' : ''}`}>I have a General Inquiry</h2>
                    <p className='text-sm text-gray-400'>Welcome One and All</p>
                </div>
            </div>
            <div>
                {
                    selectedCard === 'brand' && <ContactFormCard />
                }
                {
                    selectedCard === 'inbox' && <ContactFormCard2 />
                }
                {
                    selectedCard === 'general' && <ContactFormCard3 />
                }
            </div>
        </div>
    )
}


const ContactFormCard = () => {
    return (
        <div className="bg-[#191919] rounded-3xl p-5 md:p-9 max-w-7xl mx-auto mt-8 md:px-52 py-16 md:py-32 text-white">
            <h2 className="text-[28px] font-bold mb-3">Advertise With Us</h2>
            <p className=" text-gray-300">Introduce your product or service to Optimism’s audience of millions of subscribers. We offer customized solutions to meet your needs, from sponsored emails to link inclusions across our network to custom content and branded campaigns.</p>
            <Button
                className='mb-4 lg:mb-16'
                href="#"
                text="DOWNLOAD OUR MEDIA KIT"
            />
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-16">
                <div>
                    <label className="block mb-1 md:mb-3 text-sm">First Name *</label>
                    <input type="text" className="w-full bg-transparent border border-white/10 rounded-md px-4 py-2 focus:outline-none focus:border-yellow-400" required />
                </div>
                <div>
                    <label className="block mb-1 md:mb-3 text-sm">Last Name *</label>
                    <input type="text" className="w-full bg-transparent border border-white/10 rounded-md px-4 py-2 focus:outline-none focus:border-yellow-400" required />
                </div>
                <div>
                    <label className="block mb-1 md:mb-3 text-sm">Company Name *</label>
                    <input type="text" className="w-full bg-transparent border border-white/10 rounded-md px-4 py-2 focus:outline-none focus:border-yellow-400" required />
                </div>
                <div>
                    <label className="block mb-1 md:mb-3 text-sm">Job Title *</label>
                    <input type="text" className="w-full bg-transparent border border-white/10 rounded-md px-4 py-2 focus:outline-none focus:border-yellow-400" required />
                </div>
                <div>
                    <label className="block mb-1 md:mb-3 text-sm">Email *</label>
                    <input type="email" className="w-full bg-transparent border border-white/10 rounded-md px-4 py-2 focus:outline-none focus:border-yellow-400" required />
                </div>
                <div>
                    <label className="block mb-1 md:mb-3 text-sm">Phone</label>
                    <input type="tel" className="w-full bg-transparent border border-white/10 rounded-md px-4 py-2 focus:outline-none focus:border-yellow-400" />
                </div>
                <div className="md:col-span-2 ">
                    <label className="block mb-1 md:mb-3 text-sm text-gray-300">What are your primary goals for a campaign and when are you looking to advertise? Please provide the landing page you are looking to drive traffic to. *</label>
                    <textarea className="w-full bg-transparent border border-white/10 rounded-md px-4 py-2 min-h-[100px] focus:outline-none focus:border-yellow-400" required></textarea>
                </div>
                <div className="md:col-span-2 flex justify-center mt-4 w-full">
                    <button type="submit" className="w-full px-12 py-3 rounded-full bg-transparent border border-yellow-400/25 text-yellow-400 font-bold hover:bg-yellow-400 hover:text-black transition-all duration-300">SUBMIT</button>
                </div>
            </form>
        </div>
    )
}
const ContactFormCard2 = () => {
    return (
        <div className="bg-[#191919] rounded-3xl p-5 md:p-9 max-w-7xl mx-auto mt-8 md:px-52 py-16 md:py-32 text-white">
            <h2 className="text-[28px] font-bold mb-3">Get your publication concept powered by Optimism</h2>
            <p className=" text-gray-300 pb-2">Optimism has an extensive audience network and a collection of world-class tools developed specifically for email-first publishing. We’ve built and improved these pieces for years, and now you can leverage their power as well.</p>
            <p className=" text-gray-300">If you have a digital publication you’re interested in evolving via email-first offerings, or if you have a newsletter you’re looking to grow and monetize, we’d love to hear from you. Even if your digital publication is currently just a concept, reach out — we may be able to help you get it off the ground.</p>

            <Button
                className='mb-4 lg:mb-16'
                href="#"
                text="DOWNLOAD OUR MEDIA KIT"
            />
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-16">
                <div>
                    <label className="block mb-1 md:mb-3 text-sm">First Name *</label>
                    <input type="text" className="w-full bg-transparent border border-white/10 rounded-md px-4 py-2 focus:outline-none focus:border-yellow-400" required />
                </div>
                <div>
                    <label className="block mb-1 md:mb-3 text-sm">Last Name *</label>
                    <input type="text" className="w-full bg-transparent border border-white/10 rounded-md px-4 py-2 focus:outline-none focus:border-yellow-400" required />
                </div>
                <div>
                    <label className="block mb-1 md:mb-3 text-sm">Company Name *</label>
                    <input type="text" className="w-full bg-transparent border border-white/10 rounded-md px-4 py-2 focus:outline-none focus:border-yellow-400" required />
                </div>
                <div>
                    <label className="block mb-1 md:mb-3 text-sm">Job Title *</label>
                    <input type="text" className="w-full bg-transparent border border-white/10 rounded-md px-4 py-2 focus:outline-none focus:border-yellow-400" required />
                </div>
                <div>
                    <label className="block mb-1 md:mb-3 text-sm">Email *</label>
                    <input type="email" className="w-full bg-transparent border border-white/10 rounded-md px-4 py-2 focus:outline-none focus:border-yellow-400" required />
                </div>
                <div>
                    <label className="block mb-1 md:mb-3 text-sm">Phone</label>
                    <input type="tel" className="w-full bg-transparent border border-white/10 rounded-md px-4 py-2 focus:outline-none focus:border-yellow-400" />
                </div>
                <div className="md:col-span-2 ">
                    <label className="block mb-1 md:mb-3 text-sm text-gray-300">What are your primary goals for a campaign and when are you looking to advertise? Please provide the landing page you are looking to drive traffic to. *</label>
                    <textarea className="w-full bg-transparent border border-white/10 rounded-md px-4 py-2 min-h-[100px] focus:outline-none focus:border-yellow-400" required></textarea>
                </div>
                <div className="md:col-span-2 flex justify-center mt-4 w-full">
                    <button type="submit" className="w-full px-12 py-3 rounded-full bg-transparent border border-yellow-400/25 text-yellow-400 font-bold hover:bg-yellow-400 hover:text-black transition-all duration-300">SUBMIT</button>
                </div>
            </form>
        </div>
    )
}
const ContactFormCard3 = () => {
    return (
        <div className="bg-[#191919] rounded-3xl p-5 md:p-9 max-w-7xl mx-auto mt-8 md:px-52 py-16 md:py-32 text-white">
            <h2 className="text-[28px] font-bold mb-3">We'd love to hear from you</h2>
            <p className="text-gray-300 mb-6">We're always looking for new opportunities and ways to improve our offerings. If you have ideas or feedback, we want to hear it!</p>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-16">
                <div>
                    <label className="block mb-1 md:mb-3 text-sm">First Name *</label>
                    <input type="text" className="w-full bg-transparent border border-white/10 rounded-md px-4 py-2 focus:outline-none focus:border-yellow-400" required />
                </div>
                <div>
                    <label className="block mb-1 md:mb-3 text-sm">Last Name *</label>
                    <input type="text" className="w-full bg-transparent border border-white/10 rounded-md px-4 py-2 focus:outline-none focus:border-yellow-400" required />
                </div>
                <div>
                    <label className="block mb-1 md:mb-3 text-sm">Phone</label>
                    <input type="tel" className="w-full bg-transparent border border-white/10 rounded-md px-4 py-2 focus:outline-none focus:border-yellow-400" />
                </div>
                <div>
                    <label className="block mb-1 md:mb-3 text-sm">Email *</label>
                    <input type="email" className="w-full bg-transparent border border-white/10 rounded-md px-4 py-2 focus:outline-none focus:border-yellow-400" required />
                </div>
                <div className="md:col-span-2 ">
                    <label className="block mb-1 md:mb-3 text-sm text-gray-300">Message *</label>
                    <textarea className="w-full bg-transparent border border-white/10 rounded-md px-4 py-2 min-h-[100px] focus:outline-none focus:border-yellow-400" required></textarea>
                </div>
                <div className="md:col-span-2 flex justify-center mt-4 w-full">
                    <button type="submit" className="w-full px-12 py-3 rounded-full bg-transparent border border-yellow-400/25 text-yellow-400 font-bold hover:bg-yellow-400 hover:text-black transition-all duration-300">SUBMIT</button>
                </div>
            </form>
        </div>
    )
}