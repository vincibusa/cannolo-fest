import React from "react";
import { MotionDiv } from "./ui/motion-div";
import { Calendar, Info } from 'lucide-react';
import { motion } from "framer-motion";

const HeroVideo: React.FC = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-white">
      {/* Video di sfondo */}
      <div className="absolute inset-0">
        <video
          src="/cannoloVideo.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        />
        
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
                  src="/logohero.png" 
                  alt="Cannolo Fest" 
                  className="h-32 md:h-40 object-contain"
                />
              </div>
              <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
                Il primo festival del cannolo nel mondo
              </p>
              
            </MotionDiv>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroVideo;
