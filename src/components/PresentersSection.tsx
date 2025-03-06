import React from "react";
import { MotionDiv, MotionImg } from "../components/ui/motion-div";
import { Button } from "../components/ui/button";
import { CalendarIcon, Instagram, Twitter } from "lucide-react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const presenters = [
  {
    name: "Marco Rossi",
    role: "Master Chef & Host",
    image:
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&q=80",
    description:
      "Award-winning chef known for his innovative approach to traditional Sicilian cuisine.",
    social: { instagram: "#", twitter: "#" },
  },
  {
    name: "Sofia Bianchi",
    role: "Food Historian",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
    description:
      "Author and historian specializing in the culinary traditions of Sicily and Southern Italy.",
    social: { instagram: "#", twitter: "#" },
  },
  {
    name: "Antonio Marino",
    role: "Sfincione Champion",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
    description:
      "Three-time winner of the Sfincione competition and owner of Bagheria's most beloved bakery.",
    social: { instagram: "#" },
  },
  {
    name: "Giulia Esposito",
    role: "Culinary Director",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
    description:
      "Responsible for curating the festival's food experiences and cooking demonstrations.",
    social: { instagram: "#", twitter: "#" },
  },
];

const artists = [
  {
    name: "I Cantori Siciliani",
    type: "Folk Music Ensemble",
    image:
      "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=800&q=80",
    description:
      "Traditional Sicilian folk music group performing authentic songs that have been passed down through generations.",
    performance: "Main Stage - Day 1, 4:00 PM",
  },
  {
    name: "Balletto di Palermo",
    type: "Dance Company",
    image:
      "https://images.unsplash.com/photo-1545128485-c400ce7b6892?w=800&q=80",
    description:
      "Contemporary dance company blending traditional Sicilian movements with modern choreography.",
    performance: "Main Stage - Day 2, 2:00 PM",
  },
  {
    name: "Maria Terranova",
    type: "Opera Singer",
    image:
      "https://images.unsplash.com/photo-1549213783-8284d0336c4f?w=800&q=80",
    description:
      "Renowned soprano performing classic Sicilian arias and folk songs with a powerful, emotive voice.",
    performance: "Main Stage - Day 1, 7:00 PM",
  },
  {
    name: "Quartetto Mediterraneo",
    type: "Jazz Quartet",
    image:
      "https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=800&q=80",
    description:
      "Fusion jazz ensemble incorporating traditional Sicilian melodies with contemporary jazz improvisation.",
    performance: "Main Stage - Day 2, 8:00 PM",
  },
];

const PresentersSection: React.FC = () => {
  return (
    <section id="presenters" className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <motion.div 
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        className="absolute inset-0"
      >
        <div className="absolute top-1/3 right-1/3 w-96 h-96 rounded-full bg-amber-500/10 blur-[100px]"></div>
        <div className="absolute bottom-1/3 left-1/3 w-96 h-96 rounded-full bg-red-600/10 blur-[100px]"></div>
      </motion.div>

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
            Meet Our Team
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-amber-500 to-red-600 bg-clip-text text-transparent">
            Presenters & Artists
          </h2>
          <motion.div 
            className="h-1 w-20 bg-gradient-to-r from-amber-500 to-red-600 mx-auto rounded-full mb-8"
            whileHover={{ width: "120px" }}
                    />
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Meet the talented chefs, musicians, and performers who will make the Sfincione Fest an unforgettable experience
          </p>
              </MotionDiv>

        <div className="mb-20">
          <h3 className="text-2xl font-bold text-gray-800 mb-12 text-center">
            Featured Chefs & Presenters
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {presenters.map((presenter, index) => (
              <MotionDiv
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="group"
              >
                <motion.div
                  whileHover={{ y: -8 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 group-hover:border-amber-200 transition-all duration-300 h-full"
                >
                  <div className="relative overflow-hidden aspect-[3/4]">
                    <MotionImg
                      src={presenter.image}
                      alt={presenter.name}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.6 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
                    
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-10">
                      <div className="flex gap-3">
                        {presenter.social.instagram && (
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-white/90 p-3 rounded-full text-gray-800 hover:text-amber-600 transition-colors"
                          >
                            <Instagram size={20} />
                          </motion.button>
                        )}
                        {presenter.social.twitter && (
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-white/90 p-3 rounded-full text-gray-800 hover:text-amber-600 transition-colors"
                          >
                            <Twitter size={20} />
                          </motion.button>
                        )}
      </div>
                    </div>
                  </div>

                  <div className="p-6 text-center">
                    <h4 className="text-xl font-bold text-gray-800 mb-2">
                      {presenter.name}
                    </h4>
                    <p className="text-amber-600 font-medium mb-3">
                      {presenter.role}
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {presenter.description}
                    </p>
                  </div>
                </motion.div>
              </MotionDiv>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-12 text-center">
            Featured Artists & Performers
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {artists.map((artist, index) => (
              <MotionDiv
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="group"
              >
                <motion.div
                  whileHover={{ y: -8 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 group-hover:border-amber-200 transition-all duration-300 h-full flex flex-col md:flex-row"
                >
                  <div className="relative w-full md:w-2/5 overflow-hidden">
                    <MotionImg
                      src={artist.image}
                      alt={artist.name}
                      className="w-full h-64 md:h-full object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.6 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/30 to-transparent" />
                  </div>

                  <div className="p-6 md:p-8 flex flex-col justify-between flex-grow">
                    <div>
                      <h4 className="text-xl font-bold text-gray-800 mb-2">
                        {artist.name}
                      </h4>
                      <p className="text-amber-600 font-medium mb-4">
                        {artist.type}
                      </p>
                      <p className="text-gray-600 leading-relaxed mb-6">
                        {artist.description}
                      </p>
                    </div>

                    <div>
                      <div className="flex items-center text-gray-500 mb-4">
                        <CalendarIcon size={18} className="mr-2 text-amber-600" />
                        {artist.performance}
                      </div>
                      <motion.button
                        whileHover={{ x: 5 }}
                        className="text-amber-600 font-medium flex items-center group/button"
                      >
                        View Schedule
                        <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/button:translate-x-1" />
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              </MotionDiv>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PresentersSection;