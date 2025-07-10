export default function Control({ isLoaded }) {
  const features = [
    {
      title: "Magazine-Quality\nEditorial",
      description:
        "Our brands bring magazine-quality editorial content to the inbox — emails composed with accuracy and value in mind.",
      animation: "pulse",
    },
    {
      title: "Something\nfor Everyone",
      description:
        "Our brands cover a wide range of topics — allowing you to explore your interests and expand your horizons.",
      animation: "rotate",
    },
    {
      title: "Made\nto Inspire",
      description:
        "Our brands uplift and inspire — a positive force amidst increasing divisiveness.",
      animation: "pulse",
    },
  ];

  return (
    <section
      className={`py-32 px-4 sm:px-6 lg:px-8 transition-all duration-1200 ease-out delay-1100 ${
        isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <h3 className="text-3xl sm:text-4xl font-bold text-white mb-8 leading-tight max-w-4xl mx-auto">
            You deserve to be in control of the content you consume.
          </h3>
          <p className="text-base text-white/70 max-w-3xl mx-auto leading-relaxed">
            That's becoming more challenging, however. The growing demand
            for your attention has pushed many platforms away from serving
            your best interests. It's time to take back control. That's why
            we chose to start from a place where you can still decide what
            you want and don't want to engage with: the inbox. From there,
            our brands usher readers into rich web experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {features.map((item, index) => (
            <div key={index} className="text-center">
              <div className="relative w-20 h-20 mx-auto mb-8">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                {/* Ring Animation */}
                <div className="absolute inset-0 flex items-center justify-center">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className={`absolute border border-white/20 rounded-full ${
                        item.animation === "pulse"
                          ? "animate-pulse"
                          : "animate-spin"
                      }`}
                      style={{
                        width: `${30 + i * 15}%`,
                        height: `${30 + i * 15}%`,
                        animationDelay: `${i * 0.2}s`,
                        animationDuration: "4s",
                      }}
                    />
                  ))}
                </div>
              </div>
              <h4 className="text-xl font-bold text-white mb-4 whitespace-pre-line leading-tight">
                {item.title}
              </h4>
              <p className="text-white/70 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 