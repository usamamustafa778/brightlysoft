const BrandsGridSection = ({ isLoaded }) => {
  const brands = [
    {
      name: "Inspiring Quotes",
      tagline: "Uplifting quotes to help start your day",
    },
    { name: "Better Report", tagline: "Elevate your everyday" },
    { name: "Nice News", tagline: "News to inform, not enrage" },
    { name: "Interesting Facts", tagline: "Make every day more interesting" },
    { name: "The Discoverer", tagline: "Discover the world from your inbox" },
    {
      name: "Crossword Club",
      tagline: "A new crossword in your inbox every morning",
    },
    { name: "Recommended Reads", tagline: "What's worth reading" },
    {
      name: "Daily Passport",
      tagline: "The world's most interesting places in your inbox",
    },
    { name: "Word Daily", tagline: "Learn a new word every day" },
  ];

  return (
    <section
      className={`py-32 px-6 lg:px-8 transition-all duration-1200 ease-out delay-1500 ${
        isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="max-w-6xl mx-auto">
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="p-6 hover:transform hover:scale-105 transition-transform duration-300"
            >
              <div className="w-8 h-8 bg-white/20 rounded-lg mb-6"></div>
              <h4 className="text-lg font-bold text-white mb-3 leading-tight">
                {brand.name}
              </h4>
              <p className="text-white/70 text-sm leading-relaxed">
                {brand.tagline}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsGridSection; 