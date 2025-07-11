import React from 'react'

export default function SubscriberInfoSection() {

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
        <div className='py-16 md:py-32'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto'>
                <div className=' flex flex-col items-center justify-center gap-4'>
                    <h2 className='text-4xl font-bold'>
                        Our subscribers inform the brands we launch and content we create.
                    </h2>
                    <p className='text-lg'>We place great value in our audience’s behavior — what content they engage with and how they engage with it — and use those insights to build brands and craft stories we know they will love. </p>
                </div>
                <div className='min-h-[600px] relative' >
                    {subscriberInfo.map((info, index) => (
                        <div key={index} className={`absolute ${info.position} w-fit p-1 h-fit flex gap-4 border border-yellow-500/20 aspect-square rounded-full justify-between items-center`}>
                            <div className='border border-yellow-500/50 aspect-square rounded-full p-2'>
                                <div className='border-2 border-yellow-500 aspect-square rounded-full p-1 flex items-center justify-center'>
                                    <h3 className='text-sm font-bold p-4'>{info.title}</h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
