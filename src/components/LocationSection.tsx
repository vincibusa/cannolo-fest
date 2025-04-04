import React from "react";
import { MotionDiv, MotionImg } from "../components/ui/motion-div";
import { Button } from "../components/ui/button";
import { MapPinIcon, Clock, Phone, Info, ExternalLink } from "lucide-react";

const LocationSection: React.FC = () => {
  // Coordinate di Piana degli Albanesi
  const coordinates = "37.9947,13.2814";
  const locationName = "Piana+degli+Albanesi,+Sicilia";
  
  // URL per mappa e navigazione
  const mapsUrl = `https://maps.google.com/maps?q=${coordinates}&z=15&t=m&output=embed`;
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${coordinates}&destination_place_id=${locationName}`;
  
  // Gestori eventi per aprire le mappe
  const handleOpenDirections = (e: React.MouseEvent) => {
    e.preventDefault();
    window.open(directionsUrl, '_blank');
  };
  
  const handleOpenMap = (e: React.MouseEvent) => {
    e.preventDefault();
    window.open(mapsUrl, '_blank');
  };

  return (
    <section
      id="location"
      className="py-24 bg-white relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[url('https://images.unsplash.com/photo-1523906630133-f6934a1ab2b9?w=1200&q=30')] bg-cover bg-center opacity-5"></div>

      <div className="container mx-auto px-4 relative z-10">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
          className="mb-16 text-center"
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-amber-500 to-red-600 bg-clip-text text-transparent inline-block">
            Dove Si Svolge
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-amber-500 to-red-600 mx-auto rounded-full"></div>
        </MotionDiv>

        <div className="grid md:grid-cols-2 gap-10 sm:gap-16 items-center">
          <MotionDiv
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-amber-500/10 to-red-600/10 rounded-xl blur-xl opacity-70"></div>
            <div className="relative overflow-hidden rounded-xl shadow-lg border border-gray-200">
              <MotionImg
                src="https://images.unsplash.com/photo-1523906630133-f6934a1ab2b9?w=800&q=80"
                alt="Piana degli Albanesi, Sicilia"
                className="w-full h-auto"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 1 }}
              />
            </div>
          </MotionDiv>

          <MotionDiv
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <MapPinIcon size={28} className="text-amber-600" />
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-800">
                  Piana degli Albanesi
                </h3>
              </div>
              <p className="text-gray-600 pl-10">Palermo, Sicilia</p>
            </div>

            <div className="space-y-4">
              <p className="text-base sm:text-lg text-gray-600">
                Piana degli Albanesi è una pittoresca cittadina a circa 25 km da Palermo, famosa per la sua storia unica come comunità arbëreshë (italo-albanese) fondata nel XV secolo.
              </p>
              <p className="text-base sm:text-lg text-gray-600">
                È conosciuta per le sue tradizioni culinarie, tra cui il famoso cannolo siciliano, e per la sua vibrante cultura che fonde elementi albanesi e siciliani.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-gradient-to-r from-amber-500 to-red-600 hover:from-amber-600 hover:to-red-700 text-white shadow-lg shadow-red-600/20 border-0 rounded-full px-8"
                onClick={handleOpenDirections}
              >
                Come Arrivare <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                className="border-amber-500 text-amber-600 hover:bg-amber-50 rounded-full px-8"
                onClick={handleOpenMap}
              >
                Visualizza Mappa <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <div className="space-y-4 pt-4 border-t border-gray-200">
              <div className="flex items-start gap-3">
                <Info className="w-5 h-5 text-amber-600 mt-1" />
                <div>
                  <h4 className="font-medium text-gray-800">La Tradizione Arbëreshë</h4>
                  <p className="text-gray-600">Piana degli Albanesi mantiene ancora oggi la lingua, i costumi e le tradizioni portate dagli albanesi che si insediarono qui più di 500 anni fa, fuggendo dall'invasione ottomana dell'Albania.</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-amber-600" />
                <div>
                  <h4 className="font-medium text-gray-800">Orari del Festival</h4>
                  <p className="text-gray-600">17-18 Maggio 2025, dalle 10:00 alle 23:00</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-amber-600" />
                <div>
                  <h4 className="font-medium text-gray-800">Contatto</h4>
                  <p className="text-gray-600">+39 327 167 7871</p>
                </div>
              </div>
            </div>
          </MotionDiv>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;