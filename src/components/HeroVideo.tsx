import React from "react";
import { MotionDiv } from "./ui/motion-div";
import { Calendar, ArrowRight, Info } from 'lucide-react';
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
                  6-7-8-9 Novembre 2025
                  </span>
                  <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm">
                   Bagheria
                  </span>
                </div>
      
              {/* Titolo e sottotitolo */}
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-white leading-tight">
                Sfincione Fest
                </h2>
                <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
                La più grande festa dello street food siciliano
                </p>
              {/* Bottoni CTA */}
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
                      <span>Acquista i Biglietti</span>
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
