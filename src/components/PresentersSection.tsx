import React from "react";
import { MotionDiv, MotionImg } from "../components/ui/motion-div";
import { Button } from "../components/ui/button";
import { CalendarIcon, Instagram, Twitter } from "lucide-react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const presenters = [
  {
    name: "Sasà Salvaggio",
    role: "Conduttore",
    image:
      "/personaggi/sasa-salvaggio.png",
    description:
      "Comico, conduttore e attore televisivo siciliano, noto per il suo umorismo",
    social: { instagram: "#", twitter: "#" },
  },
  {
    name: "Barbara Politi",
    role: "Conduttrice",
    image:
      "/personaggi/marianna-bonanno.png",
    description:
      "Giornalista e conduttrice televisiva. Ha lavorato per Gazzetta del Mezzogiorno, Gambero Rosso tv e Rai",
    social: { instagram: "#", twitter: "#" },
  },

  {
    name: "Nadia La Malfa",
    role: "Giornalista sportiva",
    image:
      "/personaggi/nadia-la-malfa.png",
    description:
      "Giornalista sportiva e comunicatrice istituzionale palermitana",
    social: { instagram: "#", twitter: "#" },
  },
];

const artists = [
  {
    name: "I Cugini di Campagna",
  
    image:
      "/concerti/cugini-campagna.png",

  },
  {
    name: "I Quaranta che Ballano i 90",

    image:
      "/concerti/quaranta2.png",

  },
  {
    name: "Sugarfree",
 
    image:
      "/concerti/sugarfree.png",

  },

];

const PresentersSection: React.FC = () => {
  return (
    <section id="presenters" className="py-24 bg-white relative overflow-hidden">
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
            Il Nostro Team
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-amber-500 to-red-600 bg-clip-text text-transparent">
            Presentatori & Artisti
          </h2>
          <motion.div 
            className="h-1 w-20 bg-gradient-to-r from-amber-500 to-red-600 mx-auto rounded-full mb-8"
            whileHover={{ width: "120px" }}
                    />
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Scopri i talentuosi presentatori, chef e artisti che renderanno il Cannolo Fest un'esperienza indimenticabile
          </p>
              </MotionDiv>

        <div className="mb-20">
          <h3 className="text-2xl font-bold text-gray-800 mb-12 text-center">
            I Nostri Presentatori
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
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
                      className="absolute inset-0 w-full h-full object-cover aspect-[3/4]"
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
                    <p className="text-amber-600 font-medium">
                      {presenter.role}
                    </p>
                  </div>
                </motion.div>
              </MotionDiv>
            ))}
          </div>
        </div>

        {/* <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-12 text-center">
            I Nostri Artisti
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
                  className="relative overflow-hidden rounded-2xl shadow-lg"
                >
                  <div className="relative aspect-[4/3]">
                    <MotionImg
                      src={artist.image}
                      alt={artist.name}
                      className="absolute inset-0 w-full h-full object-contain bg-white"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.6 }}
                    />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h4 className="text-xl font-bold text-white text-center">
                      {artist.name}
                    </h4>
                  </div>
                  </div>
                </motion.div>
              </MotionDiv>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default PresentersSection;