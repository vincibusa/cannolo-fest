// src/SfincioneFest.tsx
import React from "react";
import Header from "@/components/Header";

import AboutSection from "@/components/AboutSection";
import EventHighlights from "@/components/EventHighlights";
import ScheduleSection from "@/components/ScheduleSection";
import VenuesSection from "@/components/VenuesSection";
import CompetitionsSection from "@/components/CompetitionsSection";
import PresentersSection from "@/components/PresentersSection";
import LocationSection from "@/components/LocationSection";
import SponsorSection from "@/components/SponsorSection";
import RegistrationSection from "@/components/RegistrationSection";
import Footer from "@/components/Footer";
import HeroVideo from "@/components/HeroVideo";

const SfincioneFest: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-neutral-800">
      <Header />
    <HeroVideo />
      <AboutSection />
      <EventHighlights />
      <ScheduleSection />
      <VenuesSection />
      <CompetitionsSection />
      <PresentersSection />
      <LocationSection />
      <SponsorSection />
      <RegistrationSection />
      <Footer />
    </div>
  );
};

export default SfincioneFest;
