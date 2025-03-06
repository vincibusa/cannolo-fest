import React, { useState, useEffect } from 'react';

const HeroCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const carouselImages = [
    {
      src: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=1200&q=80",
      alt: "Traditional Sfincione",
      caption: "Traditional Sfincione di Bagheria",
    },
    {
      src: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1200&q=80",
      alt: "Food Festival",
      caption: "Join us for a celebration of Sicilian cuisine",
    },
    {
      src: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=1200&q=80",
      alt: "Sicily",
      caption: "Experience the beauty of Bagheria, Sicily",
    },
    {
      src: "https://images.unsplash.com/photo-1528137871618-79d2761e3fd5?w=1200&q=80",
      alt: "Cooking Demonstration",
      caption: "Watch master chefs prepare authentic recipes",
    },
  ];
  
  // Auto rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => 
        prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    
    return () => clearInterval(interval);
  }, [carouselImages.length]);
  
  // Manual navigation
  const scrollToIndex = (index) => {
    setActiveIndex(index);
  };
  
  const goToPrevious = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? carouselImages.length - 1 : prevIndex - 1
    );
  };
  
  const goToNext = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Images */}
      {carouselImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === activeIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={image.src}
            alt={image.alt}
            className="w-full h-full object-cover"
          />
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent flex flex-col justify-center p-4 sm:p-8 md:p-16 pt-16 sm:pt-24 md:pt-32 z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-4 md:mb-6 bg-gradient-to-r from-amber-300 to-red-500 bg-clip-text text-transparent drop-shadow-lg leading-tight">
                Celebrate the Authentic Taste of Sicily
              </h2>
              <p className="text-sm sm:text-base md:text-xl text-white/90 mb-4 sm:mb-6 md:mb-10 max-w-3xl mx-auto px-2">
                {image.caption}
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-4">
                <button className="bg-gradient-to-r from-amber-500 to-red-600 hover:from-amber-600 hover:to-red-700 text-white text-sm sm:text-base px-4 sm:px-6 py-3 sm:py-4 rounded-full w-full sm:w-auto">
                  Get Tickets
                </button>
                <button className="bg-white/10 backdrop-blur-md text-white border border-white/30 hover:bg-white/20 hover:border-white text-sm sm:text-base px-4 sm:px-6 py-3 sm:py-4 rounded-full w-full sm:w-auto">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
      
      {/* Navigation buttons */}
      <button 
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 backdrop-blur-md hover:bg-black/50 text-white border border-white/20 h-10 w-10 rounded-full z-20 flex items-center justify-center"
        aria-label="Previous slide"
      >
        ←
      </button>
      <button 
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 backdrop-blur-md hover:bg-black/50 text-white border border-white/20 h-10 w-10 rounded-full z-20 flex items-center justify-center"
        aria-label="Next slide"
      >
        →
      </button>
      
      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
        {carouselImages.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToIndex(index)}
            className={`transition-all duration-300 ${
              index === activeIndex ? "bg-amber-400 w-8 h-3" : "bg-white/50 w-3 h-3"
            } rounded-full`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      
      {/* Scroll Down Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/70 cursor-pointer z-20">
        <span className="text-sm mb-2">Scroll Down</span>
        <div className="w-5 h-8 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-1.5 bg-white/70 rounded-full animate-bounce"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroCarousel;