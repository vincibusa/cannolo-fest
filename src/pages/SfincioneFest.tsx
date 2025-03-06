// src/SfincioneFest.tsx
import React from "react";
import Header from "@/components/Header";
import HeroCarousel from "@/components/HeroCarousel";
import AboutSection from "@/components/AboutSection";
import EventHighlights from "@/components/EventHighlights";
import ScheduleSection from "@/components/ScheduleSection";
import VenuesSection from "@/components/VenuesSection";
import CompetitionsSection from "@/components/CompetitionsSection";
import PresentersSection from "@/components/PresentersSection";
import LocationSection from "@/components/LocationSection";
import RegistrationSection from "@/components/RegistrationSection";
import Footer from "@/components/Footer";

const SfincioneFest: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-neutral-800">
      <Header />
      <HeroCarousel />
      <AboutSection />
      <EventHighlights />
      <ScheduleSection />
      <VenuesSection />
      <CompetitionsSection />
      <PresentersSection />
      <LocationSection />
      <RegistrationSection />
      <Footer />
    </div>
  );
};

export default SfincioneFest;
