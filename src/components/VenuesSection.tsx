import React from "react";
import { MotionDiv, MotionImg } from "../components/ui/motion-div";
import { MapPin, Clock, Users, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const venues = [
  {
    title: "Main Stage",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80",
    description: "Our central performance area hosts live music, dance shows, and the opening and closing ceremonies.",
    features: [
      "Traditional Sicilian folk music",
      "Modern interpretations of classic songs",
      "Dance performances throughout the day",
    ],
    capacity: "500 people",
    schedule: "10:00 AM - 10:00 PM",
    location: "Central Plaza"
  },
  {
    title: "Culinary Theater",
    image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&q=80",
    description: "Watch live cooking demonstrations and competitions in our specially designed demonstration kitchen.",
    features: [
      "Chef demonstrations every hour",
      "Interactive cooking classes",
      "Annual Sfincione competition",
    ],
    capacity: "200 people",
    schedule: "11:00 AM - 3:00 PM",
    location: "Kitchen"
  },
  {
    title: "Children's Area",
    image: "https://images.unsplash.com/photo-1543007630-9710e4a00a20?w=800&q=80",
    description: "A family-friendly zone with activities, games, and special cooking classes designed for young chefs.",
    features: [
      "Pizza-making workshops for kids",
      "Face painting and crafts",
      "Puppet shows telling Sicilian stories",
    ],
    capacity: "100 people",
    schedule: "10:00 AM - 3:00 PM",
    location: "Children's Zone"
  },
];

const VenuesSection: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1200&q=40')] bg-fixed bg-center bg-no-repeat bg-cover opacity-5"></div>
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-amber-50/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-red-50/50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <motion.span 
            className="text-amber-600 font-medium mb-4 block"
                    whileHover={{ scale: 1.05 }}
          >
            Where the Magic Happens
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-amber-500 to-red-600 bg-clip-text text-transparent">
            Entertainment Venues
          </h2>
          <motion.div 
            className="h-1 w-20 bg-gradient-to-r from-amber-500 to-red-600 mx-auto rounded-full mb-8"
            whileHover={{ width: "120px" }}
          />
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Discover our carefully curated spaces designed to bring the festival to life
                  </p>
                      </MotionDiv>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {venues.map((venue, index) => (
            <MotionDiv
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              viewport={{ once: true }}
              className="group"
            >
              <motion.div
                whileHover={{ y: -8 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 h-full transition-all duration-300 hover:border-amber-200 hover:shadow-xl"
              >
                <div className="relative overflow-hidden aspect-[4/3]">
                  <MotionImg
                    src={venue.image}
                    alt={venue.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  
                  {/* Venue details overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="flex items-center text-sm">
                        <Users className="w-4 h-4 mr-1" />
                        {venue.capacity}
        </div>
                      <div className="flex items-center text-sm">
                        <Clock className="w-4 h-4 mr-1" />
                        {venue.schedule}
      </div>
                    </div>
                    <div className="flex items-center text-sm">
                      <MapPin className="w-4 h-4 mr-1" />
                      {venue.location}
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-amber-600 transition-colors">
                    {venue.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {venue.description}
                  </p>

                  <div className="space-y-3 mb-6">
                    {venue.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * featureIndex }}
                        className="flex items-center"
                      >
                        <motion.div
                          whileHover={{ scale: 1.2 }}
                          className="w-2 h-2 rounded-full bg-amber-500 mr-3"
                        />
                        <span className="text-gray-600">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  <motion.button
                    whileHover={{ x: 5 }}
                    className="flex items-center text-amber-600 font-medium group/button"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/button:translate-x-1" />
                  </motion.button>
                </div>
              </motion.div>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VenuesSection;
