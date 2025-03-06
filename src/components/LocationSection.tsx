import React from "react";
import { MotionDiv, MotionImg } from "../components/ui/motion-div";
import { Button } from "../components/ui/button";
import { MapPinIcon, Clock, Phone } from "lucide-react";

const LocationSection: React.FC = () => {
  return (
    <section
      id="location"
      className="py-24 bg-gray-50 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[url('https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=1200&q=30')] bg-cover bg-center opacity-5"></div>

      <div className="container mx-auto px-4 relative z-10">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
          className="mb-16 text-center"
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-amber-500 to-red-600 bg-clip-text text-transparent inline-block">
            Festival Location
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
                src="https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=800&q=80"
                alt="Bagheria, Sicily"
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
                  Piazza Centrale, Bagheria
                </h3>
              </div>
              <p className="text-gray-600 pl-10">Sicily, Italy</p>
            </div>

            <div className="space-y-4">
              <p className="text-base sm:text-lg text-gray-600">
                Located in the heart of Bagheria, our festival venue is easily accessible by public transportation and has ample parking nearby.
              </p>
              <p className="text-base sm:text-lg text-gray-600">
                The historic piazza provides the perfect backdrop for celebrating the culinary traditions of Sicily.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-gradient-to-r from-amber-500 to-red-600 hover:from-amber-600 hover:to-red-700 text-white shadow-lg shadow-red-600/20 border-0 rounded-full px-8">
                Get Directions
              </Button>
              <Button
                variant="outline"
                className="border-amber-500 text-amber-600 hover:bg-amber-50 rounded-full px-8"
              >
                View Map
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-amber-600" />
                <div>
                  <h4 className="font-medium text-gray-800">Opening Hours</h4>
                  <p className="text-gray-600">10:00 AM - 10:00 PM</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-amber-600" />
                <div>
                  <h4 className="font-medium text-gray-800">Contact</h4>
                  <p className="text-gray-600">+39 123 456 7890</p>
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