import React, { useState, useEffect } from "react";
import { MotionDiv } from "./ui/motion-div";
import { Calendar, Info, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from "./ui/button";
import { motion, AnimatePresence } from "framer-motion";

const HeroCarousel = () => {
  const images = [
    "/hero1.JPG",
    "/hero2.JPG",
    "/hero3.JPG"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gray-50">
      {/* Immagini del carosello */}
      <div className="absolute inset-0">
        <AnimatePresence initial={false}>
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            alt={`Cannolo Fest ${currentIndex + 1}`}
            className="w-full h-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          />
        </AnimatePresence>

        {/* Controlli del carosello */}
        <button 
          onClick={handlePrev} 
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full backdrop-blur-sm z-10"
          aria-label="Immagine precedente"
        >
          <ChevronLeft size={24} />
        </button>
        
        <button 
          onClick={handleNext} 
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full backdrop-blur-sm z-10"
          aria-label="Immagine successiva"
        >
          <ChevronRight size={24} />
        </button>

        {/* Indicatori */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-white' : 'bg-white/50'}`}
              aria-label={`Vai all'immagine ${index + 1}`}
            />
          ))}
        </div>

        {/* Overlay gradiente */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
          <div className="absolute inset-0 flex items-center justify-center p-4">
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-5xl mx-auto text-center px-4"
            >
              {/* Badge con data e location */}
              <div className="flex items-center justify-center gap-4 mb-6">
                <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm">
                  <Calendar className="w-4 h-4 mr-2" />
                  17-18 Maggio 2025
                </span>
                <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm">
                  Piana Degli Albanesi
                </span>
              </div>
      
              {/* Logo e sottotitolo */}
              <div className="flex justify-center mb-4">
                <img 
                  src="/logo_cannolofest-08.png" 
                  alt="Cannolo Fest" 
                  className="h-32 md:h-40 object-contain"
                />
              </div>
              <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
                Il primo festival del cannolo nel mondo
              </p>
              
              {/* Pulsante "Scopri di Più" */}
              <div className="flex justify-center items-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative group w-full sm:w-[200px]"
                >
                  <div className="absolute inset-0 bg-white/30 rounded-full opacity-0 blur-lg group-hover:opacity-75 transition-opacity duration-300" />
                  <Button 
                    variant="outline"
                    className="relative w-full bg-white/10 hover:bg-white/20 text-white border-white/30 hover:border-white/50 h-[52px] rounded-full text-base font-medium backdrop-blur-sm overflow-hidden"
                  >
                    <div className="absolute inset-0 w-full h-full">
                      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
                    </div>
                    <div className="relative flex items-center justify-center space-x-2">
                      <motion.div
                        initial={{ rotate: 0 }}
                        whileHover={{ rotate: 180 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Info className="w-5 h-5" />
                      </motion.div>
                      <span>Scopri di Più</span>
                    </div>
                  </Button>
                </motion.div>
              </div>
            </MotionDiv>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroCarousel;
