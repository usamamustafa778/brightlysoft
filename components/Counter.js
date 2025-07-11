import { useEffect, useState } from "react";
import Link from "next/link";

export default function Counter({ isLoaded }) {
  const [emailCount, setEmailCount] = useState(53564277257);

  // Animated counter
  useEffect(() => {
    const interval = setInterval(() => {
      setEmailCount((prev) => prev + 1);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center md:mt-16 px-6 lg:mt-20">
      <section
        className={`relative py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-20 overflow-hidden transition-all duration-120 bg-[#141414] rounded-2xl sm:rounded-3xl lg:rounded-4xl max-w-6xl mx-auto ease-out delay-900 ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Orbit Container - Background Animation */}
        <div className="absolute inset-0 w-full h-full">
          <div
            className="orbit-container relative w-full h-full"
            style={{ animation: "spin 20s linear infinite" }}
          >
            {[...Array(16)].map((_, i) => (
              <div
                key={i}
                className={`arc arc-${i} absolute inset-0`}
                style={{
                  transform: `rotate(${i * 22.5}deg)`,
                }}
              >
                <div
                  className="absolute left-1/2 top-1/2 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 border border-gray-600/20 rounded-full"
                  style={{
                    transform: "translate(-50%, -50%)",
                    clipPath: `polygon(50% 50%, 50% 0%, ${
                      50 + 30 * Math.cos((i * 22.5 * Math.PI) / 180)
                    }% ${50 - 30 * Math.sin((i * 22.5 * Math.PI) / 180)}%)`,
                  }}
                />
                <div
                  className="absolute left-1/2 top-1/2 w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 border border-gray-600/15 rounded-full"
                  style={{
                    transform: "translate(-50%, -50%)",
                    clipPath: `polygon(50% 50%, 50% 0%, ${
                      50 + 25 * Math.cos((i * 22.5 * Math.PI) / 180)
                    }% ${50 - 25 * Math.sin((i * 22.5 * Math.PI) / 180)}%)`,
                  }}
                />
                <div
                  className="absolute left-1/2 top-1/2 w-32 h-32 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 border border-gray-600/25 rounded-full"
                  style={{
                    transform: "translate(-50%, -50%)",
                    clipPath: `polygon(50% 50%, 50% 0%, ${
                      50 + 20 * Math.cos((i * 22.5 * Math.PI) / 180)
                    }% ${50 - 20 * Math.sin((i * 22.5 * Math.PI) / 180)}%)`,
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Email Counter */}
          <div className="email-counter text-center mb-12 sm:mb-16 md:mb-20 lg:mb-24">
            <div className="rem-calibrator">
              <h3 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-4 sm:mb-6 leading-none tracking-tight">
                {Math.round(emailCount).toLocaleString()}
              </h3>
            </div>
            <div className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 font-light px-4">
              Emails opened and counting*
            </div>
          </div>

          {/* Header Side by Side Container */}
          <div className="header-side-by-side-container grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 items-start">
            {/* Left Column - Title */}
            <h4 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Trusted by millions of Americans.
            </h4>

            {/* Right Column - Content */}
            <div className="flex flex-col justify-between h-full">
              <p className="text-sm sm:text-base md:text-lg lg:text-lg text-gray-300 leading-relaxed mb-6 sm:mb-8">
                Millions of subscribers start their day with Optimism. That
                matters to us, which is why we&apos;re committed to keeping our
                content free and accessible, and because of this a growing
                community relies on our brands to stay more informed,
                entertained, and inspired.
              </p>

              <div className="flex justify-start lg:justify-end">
                <Link
                  href="/audience"
                  className="group inline-flex items-center border border-gray-600 rounded-full px-4 sm:px-6 py-2 sm:py-3 text-white hover:border-white transition-all duration-300 hover:bg-white/5"
                >
                  <div className="text-xs font-medium tracking-[0.2em] uppercase mr-2 sm:mr-3">
                    Learn More
                  </div>
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border border-gray-600 group-hover:border-white flex items-center justify-center transition-all duration-300 group-hover:translate-x-1">
                    <svg
                      className="w-2.5 h-2.5 sm:w-3 sm:h-3"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {/* Source Text */}
          <div className="mt-12 sm:mt-16 md:mt-20 text-left">
            <div className="text-xs sm:text-sm text-gray-500 font-light">
              *Source: SparkPost 2025
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes spin {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
        `}</style>
      </section>
    </div>
  );
}
