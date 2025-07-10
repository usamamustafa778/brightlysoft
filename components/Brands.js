import { useEffect, useRef, useState } from "react";

export default function Brands({ isLoaded, brandMockups }) {
  const containerRef = useRef(null);
  const [translateX, setTranslateX] = useState(0);
  const lastScrollY = useRef(0);
  const scrollVelocity = useRef(0);
  const animationFrame = useRef(null);

  useEffect(() => {
    let isScrolling = false;
    let scrollTimeout;

    const handleScroll = () => {
      if (!containerRef.current) return;

      const brandsSection = document.getElementById("brands");
      if (!brandsSection) return;

      const rect = brandsSection.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Only apply horizontal scroll when brands section is in viewport
      if (rect.bottom < 0 || rect.top > windowHeight) {
        return;
      }

      const currentScrollY = window.scrollY;
      const scrollDelta = currentScrollY - lastScrollY.current;

      // Calculate scroll velocity with smoothing
      scrollVelocity.current = scrollVelocity.current * 0.8 + scrollDelta * 0.2;

      // Update translateX based on scroll velocity
      // Negative scrollDelta (scrolling up) moves brands right
      // Positive scrollDelta (scrolling down) moves brands left
      const scrollSensitivity = 0.5; // Adjust this to control responsiveness

      setTranslateX((prevTranslateX) => {
        const container = containerRef.current;
        const maxScroll = container.scrollWidth - container.clientWidth;

        // Calculate new position
        const newTranslateX =
          prevTranslateX - scrollVelocity.current * scrollSensitivity;

        // Clamp the value to prevent scrolling too far
        return Math.max(
          -maxScroll * 0.3,
          Math.min(maxScroll * 0.3, newTranslateX)
        );
      });

      lastScrollY.current = currentScrollY;
      isScrolling = true;

      // Clear existing timeout
      clearTimeout(scrollTimeout);

      // Set timeout to detect when scrolling stops
      scrollTimeout = setTimeout(() => {
        isScrolling = false;
        // Gradually reduce velocity when scrolling stops
        const reduceVelocity = () => {
          scrollVelocity.current *= 0.95;

          if (Math.abs(scrollVelocity.current) > 0.01) {
            animationFrame.current = requestAnimationFrame(reduceVelocity);
          } else {
            scrollVelocity.current = 0;
          }
        };
        reduceVelocity();
      }, 150);
    };

    // Initialize scroll position
    lastScrollY.current = window.scrollY;

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
      }
    };
  }, []);

  return (
    <>
      {/* Brands */}
      <div
        id="brands"
        className={`relative py-20 transition-all duration-1000 ease-out delay-700 mb-40 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <div ref={containerRef} className="px-4 sm:px-6 lg:px-8 h-screen">
          <div
            className="brands-masonry"
            style={{
              transform: `translateX(${translateX}px)`,
              transition: "transform 0.1s cubic-bezier(0.23, 1, 0.32, 1)",
              willChange: "transform",
            }}
          >
            {brandMockups.map((mockupUrl, index) => {
              // Define different heights for masonry effect
              const heightClasses = [
                "phone-tall",
                "phone-medium",
                "phone-short",
                "phone-tall",
                "phone-short",
                "phone-medium",
                "phone-tall",
                "phone-short",
                "phone-medium",
                "phone-tall",
                "phone-short",
                "phone-medium",
                "phone-tall",
                "phone-medium",
                "phone-short",
                "phone-tall",
              ];

              return (
                <div
                  key={index}
                  className={`brand-item group ${
                    heightClasses[index % heightClasses.length]
                  }`}
                >
                  <div className="phone-frame">
                    <img
                      src={mockupUrl}
                      alt={`Brand mockup ${index + 1}`}
                      className="phone-content"
                      loading="lazy"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style jsx>{`
        .brands-masonry {
          display: grid;
          grid-template-rows: repeat(2, 1fr);
          grid-auto-flow: column;
          grid-auto-columns: max-content;
          gap: 24px;
          padding: 20px;
          height: 600px;
          width: max-content;
        }

        .brand-item {
          transition: transform 0.3s ease;
          display: flex;
          align-items: flex-end;
        }

        .brand-item:hover {
          transform: translateY(-8px);
        }

        .phone-frame {
          width: 240px;
          background: linear-gradient(145deg, #f8f9fa, #e9ecef);
          border-radius: 32px;
          padding: 8px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15),
            0 8px 16px rgba(0, 0, 0, 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 0.5);
          position: relative;
          overflow: hidden;
        }

        .phone-frame::before {
          content: "";
          position: absolute;
          top: 16px;
          left: 50%;
          transform: translateX(-50%);
          width: 60px;
          height: 6px;
          background: #666;
          border-radius: 3px;
          z-index: 2;
        }

        .phone-frame::after {
          content: "";
          position: absolute;
          bottom: 12px;
          left: 50%;
          transform: translateX(-50%);
          width: 120px;
          height: 4px;
          background: #666;
          border-radius: 2px;
          z-index: 2;
        }

        .phone-content {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 24px;
          padding-top: 24px;
          padding-bottom: 20px;
        }

        .phone-tall .phone-frame {
          height: 520px;
        }

        .phone-medium .phone-frame {
          height: 450px;
        }

        .phone-short .phone-frame {
          height: 380px;
        }

        @media (max-width: 768px) {
          .brands-masonry {
            gap: 16px;
            padding: 16px;
            height: 500px;
          }

          .phone-frame {
            width: 180px;
            border-radius: 24px;
            padding: 6px;
          }

          .phone-tall .phone-frame {
            height: 400px;
          }

          .phone-medium .phone-frame {
            height: 340px;
          }

          .phone-short .phone-frame {
            height: 280px;
          }

          .phone-frame::before {
            top: 12px;
            width: 45px;
            height: 4px;
          }

          .phone-frame::after {
            bottom: 8px;
            width: 80px;
            height: 3px;
          }

          .phone-content {
            border-radius: 18px;
            padding-top: 18px;
            padding-bottom: 16px;
          }
        }

        @media (max-width: 480px) {
          .brands-masonry {
            gap: 12px;
            height: 420px;
          }

          .phone-frame {
            width: 150px;
            border-radius: 20px;
            padding: 5px;
          }

          .phone-tall .phone-frame {
            height: 320px;
          }

          .phone-medium .phone-frame {
            height: 280px;
          }

          .phone-short .phone-frame {
            height: 240px;
          }

          .phone-frame::before {
            top: 10px;
            width: 35px;
            height: 3px;
          }

          .phone-frame::after {
            bottom: 6px;
            width: 60px;
            height: 2px;
          }

          .phone-content {
            border-radius: 15px;
            padding-top: 15px;
            padding-bottom: 12px;
          }
        }
      `}</style>
    </>
  );
}
