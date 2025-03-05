import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  MotionDiv,
  MotionH2,
  MotionP,
  MotionImg,
  MotionButton,
} from "@/components/ui/motion-div";
import { Button } from "@/components/ui/button";

interface CarouselImage {
  src: string;
  alt: string;
  caption: string;
}

export default function HeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const carouselImages: CarouselImage[] = [
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

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % carouselImages.length);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [carouselImages.length]);

  return (
    <div className="relative overflow-hidden h-[100vh] min-h-[600px]">
      <Carousel
        className="w-full h-full"
        selectedIndex={activeIndex}
        setSelectedIndex={setActiveIndex}
      >
        <CarouselContent className="h-full">
          {carouselImages.map((image, index) => (
            <CarouselItem key={index} className="h-full">
              <div className="relative h-full w-full">
                <MotionImg
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                  initial={{ scale: 1.1, opacity: 0.8 }}
                  animate={{
                    scale: activeIndex === index ? 1 : 1.1,
                    opacity: activeIndex === index ? 1 : 0.8,
                  }}
                  transition={{ duration: 6, ease: "easeOut" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent flex flex-col justify-center p-8 md:p-16 pt-32">
                  <MotionDiv
                    className="max-w-4xl mx-auto text-center"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    <MotionH2
                      className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-amber-300 to-red-500 bg-clip-text text-transparent drop-shadow-lg leading-tight"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8 }}
                    >
                      Celebrate the Authentic Taste of Sicily
                    </MotionH2>
                    <MotionP
                      className="text-base sm:text-xl md:text-2xl text-white/90 mb-6 sm:mb-10 max-w-3xl mx-auto px-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.8, delay: 0.4 }}
                    >
                      {image.caption}
                    </MotionP>
                    <MotionDiv
                      className="flex flex-col md:flex-row justify-center gap-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.6 }}
                    >
                      <Button className="bg-gradient-to-r from-amber-500 to-red-600 hover:from-amber-600 hover:to-red-700 text-white text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 shadow-lg shadow-red-600/20 border-0 rounded-full w-full sm:w-auto">
                        Get Tickets
                      </Button>
                      <Button
                        variant="outline"
                        className="bg-white/10 backdrop-blur-md text-white border-white/30 hover:bg-white/20 hover:border-white text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 rounded-full w-full sm:w-auto"
                      >
                        Learn More
                      </Button>
                    </MotionDiv>
                  </MotionDiv>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-black/30 backdrop-blur-md hover:bg-black/50 text-white border-white/20 h-10 w-10 sm:h-12 sm:w-12 rounded-full" />
        <CarouselNext className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-black/30 backdrop-blur-md hover:bg-black/50 text-white border-white/20 h-10 w-10 sm:h-12 sm:w-12 rounded-full" />
        <div className="absolute bottom-16 sm:bottom-8 left-1/2 -translate-x-1/2 flex space-x-2 sm:space-x-3">
          {carouselImages.map((_, index) => (
            <MotionButton
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${index === activeIndex ? "bg-amber-400 w-8" : "bg-white/50"}`}
              aria-label={`Go to slide ${index + 1}`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </div>

        {/* Scroll Down Indicator */}
        <MotionDiv
          className="absolute bottom-4 sm:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/70 cursor-pointer"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 1,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          onClick={() =>
            document
              .getElementById("about")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          <span className="text-xs sm:text-sm mb-1 sm:mb-2">Scroll Down</span>
          <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-white/70 rounded-full animate-bounce"></div>
          </div>
        </MotionDiv>
      </Carousel>
    </div>
  );
}
