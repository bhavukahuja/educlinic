'use client';
import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    '/gallery/gallery-1.jpg',
    '/gallery/gallery-2.jpg',
    '/gallery/gallery-3.jpg',
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(timer);
  }, [currentIndex, images.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="relative w-full min-h-[70vh] flex flex-col items-center justify-center overflow-hidden py-24">
      {/* Background sliding images */}
      <div
        className="absolute inset-0 flex w-full h-full transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] -z-20"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((src, index) => (
          <div key={index} className="w-full h-full flex-shrink-0 relative">
            <img
              src={src}
              alt={`Gallery background ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Full-width Glass overlay */}
      <div className="absolute inset-0 bg-white/10 backdrop-blur-[3px] -z-10 pointer-events-none"></div>

      {/* Foreground Content */}
      <div className="z-10 flex flex-col items-center text-center px-6 max-w-4xl mx-auto w-full">
        <div className="inline-flex items-center justify-center space-x-2 bg-[#fee2e2] text-[#d60000] px-4 py-1.5 rounded-full text-xs font-bold tracking-wide w-fit mb-6 uppercase shadow-md">
          CAMPUS LIFE
        </div>

        <h2 className="text-4xl md:text-[3.5rem] font-bold text-[#111827] leading-[1.1] tracking-tight mb-8">
          Gallery Highlights
        </h2>
        
        <p className="text-lg md:text-xl text-gray-900 mb-10 font-bold max-w-2xl text-center">
          Experience our vibrant campus life, state-of-the-art facilities, and the unforgettable moments that make us unique.
        </p>

        <a
          href="/gallery"
          className="bg-[#d60000] hover:bg-red-700 text-white px-10 py-4 rounded-full font-bold transition-all shadow-lg hover:shadow-xl tracking-wide flex items-center text-lg"
        >
          Explore Full Gallery
        </a>
      </div>

      {/* Floating navigation and indicators */}
      <button
        onClick={handlePrev}
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/40 hover:bg-white/60 backdrop-blur-md flex items-center justify-center transition-all duration-300 shadow-md z-20 group"
        aria-label="Previous"
      >
        <ChevronLeft className="text-gray-900 group-hover:-translate-x-0.5 transition-transform" size={24} strokeWidth={2.5} />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/40 hover:bg-white/60 backdrop-blur-md flex items-center justify-center transition-all duration-300 shadow-md z-20 group"
        aria-label="Next"
      >
        <ChevronRight className="text-gray-900 group-hover:translate-x-0.5 transition-transform" size={24} strokeWidth={2.5} />
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`transition-all duration-300 rounded-full shadow-md ${
              currentIndex === index
                ? 'w-8 h-2.5 bg-[#d60000]'
                : 'w-2.5 h-2.5 bg-gray-500/50 hover:bg-gray-600/80'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Gallery;
