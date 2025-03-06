import React from "react";
import { MotionDiv, MotionImg } from "../components/ui/motion-div";
import { Button } from "../components/ui/button";
import { CalendarIcon, Instagram, Twitter } from "lucide-react";

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
    <section
      id="presenters"
      className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=1200&q=40')] bg-fixed bg-center bg-no-repeat bg-cover opacity-5"></div>
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-1/3 right-1/3 w-96 h-96 rounded-full bg-amber-500/10 blur-[100px]"></div>
        <div className="absolute bottom-1/3 left-1/3 w-96 h-96 rounded-full bg-red-600/10 blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
          className="mb-16 text-center"
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-amber-500 to-red-600 bg-clip-text text-transparent inline-block">
            Presenters & Artists
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-amber-500 to-red-600 mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto text-base sm:text-lg">
            Meet the talented chefs, musicians, and performers who will make the Sfincione Fest an unforgettable experience
          </p>
        </MotionDiv>

        {/* Presenters */}
        <div className="mb-20">
          <MotionDiv
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-10 text-center"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-amber-600 inline-block relative">
              Featured Chefs & Presenters
              <div className="h-0.5 w-full bg-gradient-to-r from-amber-500/30 to-red-600/30 absolute bottom-0 left-0"></div>
            </h3>
          </MotionDiv>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {presenters.map((presenter, index) => (
              <MotionDiv
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 group-hover:border-amber-500/30 transition-all duration-300 h-full">
                  <div className="relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/30 to-transparent z-10 opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
                    <MotionImg
                      src={presenter.image}
                      alt={presenter.name}
                      className="w-full h-64 sm:h-72 object-cover object-center transition-transform duration-700 group-hover:scale-110"
                      whileHover={{ scale: 1.05 }}
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-4 z-20 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <div className="flex space-x-2 justify-center">
                        {presenter.social.instagram && (
                          <Button
                            variant="ghost"
                            size="icon"
                            className="rounded-full bg-white/80 backdrop-blur-sm hover:bg-amber-500/80 text-gray-800 hover:text-white h-9 w-9"
                          >
                            <Instagram size={16} />
                          </Button>
                        )}
                        {presenter.social.twitter && (
                          <Button
                            variant="ghost"
                            size="icon"
                            className="rounded-full bg-white/80 backdrop-blur-sm hover:bg-amber-500/80 text-gray-800 hover:text-white h-9 w-9"
                          >
                            <Twitter size={16} />
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="p-5 text-center">
                    <h4 className="text-lg font-bold text-gray-800 mb-1">
                      {presenter.name}
                    </h4>
                    <p className="text-amber-600 text-sm mb-3">
                      {presenter.role}
                    </p>
                    <p className="text-gray-600 text-sm">
                      {presenter.description}
                    </p>
                  </div>
                </div>
              </MotionDiv>
            ))}
          </div>
        </div>

        {/* Artists Section */}
        <div>
          <MotionDiv
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-10 text-center"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-amber-600 inline-block relative">
              Featured Artists & Performers
              <div className="h-0.5 w-full bg-gradient-to-r from-amber-500/30 to-red-600/30 absolute bottom-0 left-0"></div>
            </h3>
          </MotionDiv>

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
                <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 group-hover:border-amber-500/30 transition-all duration-300 h-full flex flex-col md:flex-row">
                  <div className="relative w-full md:w-2/5 overflow-hidden">
                    <MotionImg
                      src={artist.image}
                      alt={artist.name}
                      className="w-full h-48 md:h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                      whileHover={{ scale: 1.05 }}
                    />
                  </div>
                  <div className="p-5 md:p-6 flex flex-col justify-between md:w-3/5">
                    <div>
                      <h4 className="text-lg font-bold text-gray-800 mb-1">
                        {artist.name}
                      </h4>
                      <p className="text-amber-600 text-sm mb-3">
                        {artist.type}
                      </p>
                      <p className="text-gray-600 text-sm mb-4">
                        {artist.description}
                      </p>
                    </div>
                    <div className="mt-auto">
                      <div className="flex items-center text-gray-500 text-sm">
                        <CalendarIcon size={16} className="mr-2 text-amber-600" />
                        <span>{artist.performance}</span>
                      </div>
                      <Button
                        variant="ghost"
                        className="mt-3 w-full justify-start text-amber-600 hover:text-amber-700 hover:bg-amber-50 px-3 py-1 h-auto text-sm"
                      >
                        View Full Performance Schedule
                      </Button>
                    </div>
                  </div>
                </div>
              </MotionDiv>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PresentersSection;