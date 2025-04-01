import React from "react";
import { MotionDiv } from "./ui/motion-div";
import { Calendar, Info } from 'lucide-react';
import { Button } from "./ui/button";
import { motion } from "framer-motion";

const HeroVideo = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-gray-50">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
            className="w-full h-full object-cover"
        >
          <source src="/VideoBackOtt.mp4" type="video/mp4" />
        </video>
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
              {/* Solo pulsante "Scopri di Più" */}
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

export default HeroVideo;
