import { useState, useRef } from 'react';

const BrandsGridSection = ({ isLoaded }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const scrollRef = useRef(null);

  const brands = [
    {
      name: "Inspiring Quotes",
      tagline: "Uplifting quotes to help start your day",
      icon: "💬"
    },
    { name: "Better Report", tagline: "Elevate your everyday", icon: "📊" },
    { name: "Nice News", tagline: "News to inform, not enrage", icon: "📰" },
    { name: "Interesting Facts", tagline: "Make every day more interesting", icon: "🧠" },
    { name: "The Discoverer", tagline: "Discover the world from your inbox", icon: "🌍" },
    {
      name: "Crossword Club",
      tagline: "A new crossword in your inbox every morning",
      icon: "🧩"
    },
    { name: "Recommended Reads", tagline: "What's worth reading", icon: "📚" },
    {
      name: "Daily Passport",
      tagline: "The world's most interesting places in your inbox",
      icon: "✈️"
    },
    { name: "Word Daily", tagline: "Learn a new word every day", icon: "📝" },
  ];

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  return (
    <section
      className={`py-32 px-6 lg:px-8 transition-all duration-1200 ease-out delay-1500 ${
        isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <h3 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
            Something
            <br />
            for everyone
          </h3>
          <p className="text-base text-white/70 leading-relaxed">
            How would you like to start your day? Want to travel to a
            far-off destination? Build your vocabulary? Have your mind blown
            by an unbelievable fact or opened by a perspective-shifting
            story? Our brands offer something for everyone.
          </p>
        </div>

        {/* Slider Container */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={scrollLeft}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm"
          >
            <svg
              className="w-6 h-6 text-white"
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
            onClick={scrollRight}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm"
          >
            <svg
              className="w-6 h-6 text-white"
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

          {/* Scrollable Cards Container */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {brands.map((brand, index) => (
              <div
                key={index}
                className="flex-none w-80 h-64 bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 hover:bg-gray-800/70 hover:transform hover:scale-[1.02] transition-all duration-300 cursor-pointer border border-white/5"
              >
                <div className="flex flex-col h-full justify-between">
                  <div>
                    <div className="w-12 h-12 bg-white/10 rounded-xl mb-6 flex items-center justify-center text-2xl">
                      {brand.icon}
                    </div>
                    <h4 className="text-xl font-bold text-white mb-3 leading-tight">
                      {brand.name}
                    </h4>
                  </div>
                  <p className="text-white/70 text-sm leading-relaxed">
                    {brand.tagline}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View All Brands Button */}
        <div className="flex justify-end mt-12">
          <button className="group flex items-center gap-3 text-white/80 hover:text-white transition-colors duration-300">
            <span className="text-sm font-medium tracking-wide">VIEW ALL BRANDS</span>
            <svg
              className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
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
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default BrandsGridSection; 