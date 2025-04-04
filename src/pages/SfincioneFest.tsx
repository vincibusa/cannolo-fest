// src/SfincioneFest.tsx
import React from "react";
import Header from "@/components/Header";

import AboutSection from "@/components/AboutSection";

import ScheduleSection from "@/components/ScheduleSection";


import PresentersSection from "@/components/PresentersSection";
import LocationSection from "@/components/LocationSection";
import SponsorSection from "@/components/SponsorSection";

import Footer from "@/components/Footer";
import HeroVideo from "@/components/HeroVideo";

const SfincioneFest: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-neutral-800">
      <Header />
    <HeroVideo />
      <AboutSection />

      <ScheduleSection />
   
      <PresentersSection />
      <LocationSection />
      <SponsorSection />
  
      <Footer />
    </div>
  );
};

export default SfincioneFest;
