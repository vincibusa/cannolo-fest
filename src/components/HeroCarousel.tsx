import React, { useState, useEffect } from 'react';
import { MotionDiv } from "./ui/motion-div";
import { ChevronLeft, ChevronRight, Calendar, ArrowRight, Info, Sparkles } from 'lucide-react';
import { Button } from "./ui/button";
import { motion } from "framer-motion";

interface CarouselImage {
  src: string;
  alt: string;
  caption: string;
  subtitle?: string;
  date?: string;
  location?: string;
}

const carouselImages: CarouselImage[] = [
  {
      src: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=1200&q=80",
      alt: "Traditional Sfincione",
      caption: "Traditional Sfincione di Bagheria",
    subtitle: "Experience the authentic taste of Sicily's beloved street food",
    date: "September 15-17, 2024",
    location: "Piazza Centrale, Bagheria"
    },
    {
      src: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1200&q=80",
      alt: "Food Festival",
    caption: "A Celebration of Sicilian Cuisine",
    subtitle: "Join master chefs and food enthusiasts from around the world",
    date: "Three days of culinary excellence",
    location: "Historic Center of Bagheria"
    },
    {
      src: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=1200&q=80",
      alt: "Sicily",
      caption: "Experience the beauty of Bagheria, Sicily",
    subtitle: "Discover the rich history and culture of Sicily",
    date: "October 10-12, 2024",
    location: "Historic Center of Bagheria"
    },
    {
      src: "https://images.unsplash.com/photo-1528137871618-79d2761e3fd5?w=1200&q=80",
      alt: "Cooking Demonstration",
      caption: "Watch master chefs prepare authentic recipes",
    subtitle: "Learn from the best chefs in Sicily",
    date: "November 15-17, 2024",
    location: "Historic Center of Bagheria"
    },
  ];
  
const HeroCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isHovered, setIsHovered] = useState({ tickets: false, learn: false });

  const buttonVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.05 },
    tap: { scale: 0.95 }
};

  const arrowVariants = {
    initial: { x: 0 },
    hover: { 
      x: 5, 
      transition: { 
        repeat: Infinity, 
        repeatType: "reverse", 
        duration: 0.7 
      } 
    }
  };

  const sparkleVariants = {
    initial: { rotate: 0, scale: 1 },
    hover: { 
      rotate: 360, 
      scale: [1, 1.2, 1],
      transition: { 
        rotate: { duration: 2, repeat: Infinity, ease: "linear" },
        scale: { duration: 1, repeat: Infinity, repeatType: "reverse" }
      }
    }
};

  const glowVariants   = {
    initial: { opacity: 0 },
    hover: { 
      opacity: [0, 0.5, 0], 
      transition: { 
        duration: 1.5, 
        repeat: Infinity, 
        repeatType: "reverse" 
      } 
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setActiveIndex((prevIndex) => 
        prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
      );
      setTimeout(() => setIsTransitioning(false), 1000);
    }, 5000);
    return () => clearInterval(interval);
  }, [carouselImages.length]);
  
  const navigate = (direction: 'prev' | 'next') => {
    setIsTransitioning(true);
    if (direction === 'prev') {
      setActiveIndex((prevIndex) =>
      prevIndex === 0 ? carouselImages.length - 1 : prevIndex - 1
    );
    } else {
    setActiveIndex((prevIndex) => 
      prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
    );
    }
    setTimeout(() => setIsTransitioning(false), 1000);
  };
  
  return (
    <div className="relative w-full h-screen overflow-hidden bg-gray-50">
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
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
            <div className="absolute inset-0 flex items-center justify-center p-4">
              <MotionDiv
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-5xl mx-auto text-center px-4"
              >
                <div className="flex items-center justify-center gap-4 mb-6">
                  <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm">
                    <Calendar className="w-4 h-4 mr-2" />
                    {image.date}
                  </span>
                  <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm">
                    {image.location}
                  </span>
                </div>
      
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-white leading-tight">
                  {image.caption}
                </h2>

                <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
                  {image.subtitle}
                </p>
              </MotionDiv>
            </div>
          </div>
        </div>
      ))}

      <div className="absolute left-1/2 -translate-x-1/2 bottom-32 z-20">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative group w-full sm:w-[200px]"
      >
            <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-red-500 rounded-full opacity-75 blur-xl group-hover:opacity-100 transition-opacity duration-300" />
            
            <Button className="relative w-full bg-gradient-to-r from-amber-500 to-red-600 hover:from-amber-600 hover:to-red-700 text-white h-[52px] rounded-full text-base font-medium overflow-hidden">
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
              
              <div className="relative flex items-center justify-center space-x-2">
                <span>Get Your Tickets</span>
        <motion.div
          initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 10,
                    repeat: Infinity,
                    repeatType: "reverse"
            }}
          >
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
              </div>
            </Button>
          </motion.div>

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
                <span>Learn More</span>
              </div>
            </Button>
          </motion.div>
        </div>
      </div>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        onClick={() => navigate('prev')}
        className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white w-12 h-12 rounded-full z-20 flex items-center justify-center border border-white/20 group"
        aria-label="Previous slide"
      >
        <motion.div
          initial={{ x: 0 }}
          whileHover={{ x: -3 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <ChevronLeft className="w-6 h-6 group-hover:text-amber-400 transition-colors duration-300" />
        </motion.div>
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        onClick={() => navigate('next')}
        className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white w-12 h-12 rounded-full z-20 flex items-center justify-center border border-white/20 group"
        aria-label="Next slide"
      >
        <motion.div
          initial={{ x: 0 }}
          whileHover={{ x: 3 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <ChevronRight className="w-6 h-6 group-hover:text-amber-400 transition-colors duration-300" />
        </motion.div>
      </motion.button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 z-20">
        {carouselImages.map((_, index) => (
          <motion.button
            key={index}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => {
              setIsTransitioning(true);
              setActiveIndex(index);
              setTimeout(() => setIsTransitioning(false), 1000);
            }}
            className={`transition-all duration-300 relative ${
              index === activeIndex
                ? "w-12 bg-white"
                : "w-3 bg-white/50 hover:bg-white/70"
            } h-3 rounded-full overflow-hidden`}
            aria-label={`Go to slide ${index + 1}`}
          >
            {index === activeIndex && (
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{ duration: 5, repeat: Infinity, repeatType: "loop" }}
                className="absolute inset-0 bg-gradient-to-r from-amber-500 to-red-600"
              />
            )}
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;