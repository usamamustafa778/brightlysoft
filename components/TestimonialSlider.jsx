'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const slides = [
    {
        text: 'I love the daily quote emails! Ive resonated with quite a few and I just want to say thank you for spreading positivity and light.',
        author: 'Lydia S.',
        role: 'Inspiring Quotes subscriber'
    },
    {
        text: 'The best thing to read first thing in the morning! Thank you for helping me focus on the good and positive in the world!',
        author: '- Juanita S.',
        role: 'Word Daily subscriber'
    },
    {
        text: 'TI am thoroughly hooked on Word Daily. As an English major, I find this informative and delightful. Thank you for sharing!',
        author: '- Pamela A..',
        role: 'Inspiring Quotes subscriber'
    },
    {
        text:'Dear Inspiring Quotes, thank you for yesterdays quote. It was much needed. They may not all make a difference, but one makes all the difference. Please keep inspiring the world.',
        author: 'Juanita S.',
        role: 'Word Daily subscriber'
    }
    
    
    

]

const TestimonialSlider = () => {
  const [current, setCurrent] = useState(0)

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }




  return (
    <div className="relative w-full max-w-7xl mx-auto overflow-hidden py-8 sm:py-12 lg:py-64 px-4 sm:px-6 lg:px-8">
      {/* Arrows */}
      <div className="absolute top-1/2 -translate-y-1/2 left-2 sm:left-4 z-10">
        <button
          onClick={prevSlide}
          className="p-1.5 sm:p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-colors duration-200"
        >
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      </div>

      <div className="absolute top-1/2 -translate-y-1/2 right-2 sm:right-4 z-10">
        <button
          onClick={nextSlide}
          className="p-1.5 sm:p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-colors duration-200"
        >
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      </div>

      {/* Slider */}
      <div className="relative w-full">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${current * 100}%)`,
          }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0 px-2 sm:px-4 transition-all duration-500"
              style={{
                opacity: index === current ? 1 : 0.6,
                scale: index === current ? 1 : 0.95,
              }}
            >
              <div className="bg-white/10 border border-white/20 rounded-xl h-[200px] sm:h-[250px] lg:h-[300px] flex flex-col items-center justify-center text-white p-6 sm:p-8 shadow-lg backdrop-blur-sm">
                <div className="text-center">
                  <p className="text-base sm:text-lg lg:text-3xl font-medium leading-relaxed mb-4">
                    "{slide.text}"
                  </p>
                  <div className="mt-auto">
                    <p className="text-sm sm:text-base font-semibold text-white/90">
                      {slide.author}
                    </p>
                    <p className="text-xs sm:text-sm text-white/70 mt-1">
                      {slide.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots indicator */}
      <div className="flex justify-center mt-6 space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
              index === current
                ? 'bg-white scale-125'
                : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export default TestimonialSlider
