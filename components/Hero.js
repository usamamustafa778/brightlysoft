export default function Hero({ isLoaded }) {
  return (
    <section className="relative  min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-0 md:pt-20  overflow-hidden">
      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none ">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-pink-500/20 to-orange-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <div
        className={`relative z-10 -mt-32 max-w-screen-xl mx-auto text-center transition-all duration-1500 ease-out delay-500 ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >
        {/* Badge */}
        <div
          className={`inline-flex items-center px-4 py-2  mb-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-sm text-white/80 transition-all duration-1000 delay-700 ${
            isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
          Trusted by millions of readers
        </div>

        {/* Main Heading with Gradient */}
        <h1 className="relative">
          <span
            className={`block text-[45px] sm:text-7xl md:text-[90px] py-5 font-bold mb-4 leading-tight transition-all duration-1200 delay-800 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="bg-gradient-to-r from-white via-white to-white/70 bg-clip-text text-transparent">
              Building a{" "}
            </span>
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                brighter
              </span>
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 blur-lg opacity-30 -z-10"></div>
            </span>
            <span className="bg-gradient-to-r from-white/70 via-white to-white bg-clip-text text-transparent">
              {" "}
              web.
            </span>
          </span>
        </h1>

        {/* Subtitle */}
        <h2
          className={`text-xl sm:text-2xl lg:text-3xl text-white/70 max-w-screen-lg mx-auto font-light leading-relaxed mb-12 transition-all duration-1000 delay-1000 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          We're Brightly Soft, an inbox-first media company that serves
          inspiring content to{" "}
          <span className="text-white font-medium">millions of readers</span>{" "}
          every day.
        </h2>
      </div>

      {/* Scroll Indicator */}
      <div
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1600 ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <div className="flex flex-col items-center">
          <div className="text-white/50 text-sm mb-2">Scroll to explore</div>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
            opacity: 0.7;
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
            opacity: 1;
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
