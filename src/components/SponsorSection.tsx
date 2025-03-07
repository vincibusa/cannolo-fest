import React from "react";
import { MotionDiv, MotionImg } from "../components/ui/motion-div";
import { motion } from "framer-motion";

// Categorie di sponsor secondo l'immagine
const organizzato = [
  {
    name: "La Piana d'Oro",
    image: "/sponsor/1 la piana d'oro.png",
  },
];

const producer = [
  {
    name: "Catanzaro & Partners",
    image: "/sponsor/2 catanzaro&partners_Tavola disegno 1.png",
  },
];

const patrocinioContributo = [
  {
    name: "Regione Sicilia",
    image: "/sponsor/3 regione-sicilia-800x579.png",
  },
  {
    name: "Sicilia Enogastronomica",
    image: "/sponsor/4 siciliaenogastronomica-02.png",
  },
  {
    name: "FEAMPA",
    image: "/sponsor/FEAMPA.png",
  },
  {
    name: "Unione Europea",
    image: "/sponsor/UNIONE EUROPEA-02.png",
  },
  {
    name: "Ministero",
    image: "/sponsor/MINISTERO-02.png",
  },
];

const patrocinio = [
  {
    name: "Comune di Bagheria",
    image: "/sponsor/5 comune di bagheria.png",
  },
  {
    name: "Camera di Commercio",
    image: "/sponsor/6 camera di commercio-02.png",
  },
];

const partnership = [
  {
    name: "Sprint",
    image: "/sponsor/sprint-02.png",
  },
  {
    name: "Punto Impresa",
    image: "/sponsor/7 punto impresa-02.png",
  },
];

const mainSponsor = [
  {
    name: "Deco",
    image: "/sponsor/DECO-02.png",
  },
  {
    name: "Moretti Arena",
    image: "/sponsor/MORETTI FORNI.png",
  },
  {
    name: "Sagrim Electrolux",
    image: "/sponsor/SAGRIM ELECTROLUX-02.png",
  },
  {
    name: "Cuzzupe",
    image: "/sponsor/cuzzupe-02.png",
  },
];

// Categorie specifiche
const officialCategories = [
  {
    title: "OFFICIAL WATER",
    sponsors: [{ name: "Acqua Panna", image: "/sponsor/all food-02.png" }],
  },
  {
    title: "OFFICIAL WINE",
    sponsors: [{ name: "Bonsignore", image: "/sponsor/bonsignore-02.png" }],
  },
  {
    title: "OFFICIAL AWARD",
    sponsors: [{ name: "Granamaro", image: "/sponsor/granamaro-02.png" }],
  },
  {
    title: "OFFICIAL PASTA",
    sponsors: [{ name: "La Siciliana", image: "/sponsor/la siciliana-02.png" }],
  },
  {
    title: "OFFICIAL FORNI",
    sponsors: [{ name: "Moretti Forni", image: "/sponsor/MORETTI FORNI.png" }],
  },
  {
    title: "OFFICIAL ELETTRONICA",
    sponsors: [{ name: "Cascino", image: "/sponsor/cascino-02.png" }],
  },
  {
    title: "OFFICIAL OTTICA",
    sponsors: [{ name: "Gagliano", image: "/sponsor/gagliano-02.png" }],
  },
  {
    title: "OFFICIAL ASSICURAZIONE",
    sponsors: [{ name: "Assiguzzo", image: "/sponsor/assiguzzo-02.png" }],
  },
  {
    title: "OFFICIAL CAFFÈ",
    sponsors: [{ name: "G d'Oro", image: "/sponsor/g d'oro-02.png" }],
  },
  {
    title: "OFFICIAL IMBALLAGGIO",
    sponsors: [{ name: "Pitarresi", image: "/sponsor/pitarresi-02.png" }],
  },
  {
    title: "OFFICIAL SERVICE",
    sponsors: [{ name: "Mediacom", image: "/sponsor/mediacom-02.png" }],
  },
  {
    title: "OFFICIAL OLIO",
    sponsors: [{ name: "Barbera", image: "/sponsor/barbera logo.png" }],
  },
  {
    title: "OFFICIAL PIZZA",
    sponsors: [{ name: "Biga", image: "/sponsor/BIGA-02.png" }],
  },
  {
    title: "OFFICIAL PARTNER",
    sponsors: [
      { name: "Menu", image: "/sponsor/menu-02.png" },
      { name: "Mariano Durante", image: "/sponsor/mariano durante-02.png" },
      {
        name: "Alimenti e Ambiente",
        image: "/sponsor/alimenti e ambiente-02.png",
      },
    ],
  },
];

const mediaPartner = [
  { name: "Giornale di Sicilia", image: "/sponsor/giornale di sicilia-02.png" },
  { name: "All Food", image: "/sponsor/all food-02.png" },
  { name: "Fermento Pizza", image: "/sponsor/fermento-02.png" },
  { name: "Centro Studi Aurora", image: "/sponsor/centro studi aurora-02.png" },
];

const SponsorSection: React.FC = () => {
  return (
    <section id="sponsors" className="py-24 bg-white relative overflow-hidden">
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
            I Nostri Partner
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-amber-500 to-red-600 bg-clip-text text-transparent">
            Sponsor del Festival
          </h2>
          <motion.div
            className="h-1 w-20 bg-gradient-to-r from-amber-500 to-red-600 mx-auto rounded-full mb-8"
            whileHover={{ width: "120px" }}
          />
        </MotionDiv>

        {/* Prima riga: ORGANIZZATO - PRODUCER - PATROCINIO E CONTRIBUTO */}
        <div className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* ORGANIZZATO */}
            <div>
              <div className="text-center mb-4">
                <h3 className="text-sm font-bold text-[#e30613] tracking-wider border-b border-gray-200 pb-2 mb-4">
                  ORGANIZZATO
                </h3>
              </div>
              <div className="flex justify-center">
                {organizzato.map((sponsor, index) => (
                  <MotionDiv
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <motion.div
                      whileHover={{ y: -3 }}
                      className="flex items-center justify-center h-24"
                    >
                      <MotionImg
                        src={sponsor.image}
                        alt={sponsor.name}
                        className="max-h-20 max-w-full object-contain"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      />
                    </motion.div>
                  </MotionDiv>
                ))}
              </div>
            </div>

            {/* PRODUCER */}
            <div>
              <div className="text-center mb-4">
                <h3 className="text-sm font-bold text-[#e30613] tracking-wider border-b border-gray-200 pb-2 mb-4">
                  PRODUCER
                </h3>
              </div>
              <div className="flex justify-center">
                {producer.map((sponsor, index) => (
                  <MotionDiv
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <motion.div
                      whileHover={{ y: -3 }}
                      className="flex items-center justify-center h-24"
                    >
                      <MotionImg
                        src={sponsor.image}
                        alt={sponsor.name}
                        className="max-h-20 max-w-full object-contain"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      />
                    </motion.div>
                  </MotionDiv>
                ))}
              </div>
            </div>

            {/* PATROCINIO E CONTRIBUTO */}
            <div>
              <div className="text-center mb-4">
                <h3 className="text-sm font-bold text-[#e30613] tracking-wider border-b border-gray-200 pb-2 mb-4">
                  PATROCINIO E CONTRIBUTO
                </h3>
              </div>
              <div className="flex flex-wrap justify-center gap-3">
                {patrocinioContributo.map((sponsor, index) => (
                  <MotionDiv
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <motion.div
                      whileHover={{ y: -3 }}
                      className="flex items-center justify-center h-16 w-24"
                    >
                      <MotionImg
                        src={sponsor.image}
                        alt={sponsor.name}
                        className="max-h-12 max-w-full object-contain"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      />
                    </motion.div>
                  </MotionDiv>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Seconda riga: PATROCINIO - PARTNERSHIP */}
        <div className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* PATROCINIO */}
            <div>
              <div className="text-center mb-4">
                <h3 className="text-sm font-bold text-[#e30613] tracking-wider border-b border-gray-200 pb-2 mb-4">
                  PATROCINIO
                </h3>
              </div>
              <div className="flex flex-wrap justify-center gap-4">
                {patrocinio.map((sponsor, index) => (
                  <MotionDiv
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <motion.div
                      whileHover={{ y: -3 }}
                      className="flex items-center justify-center h-20 w-28"
                    >
                      <MotionImg
                        src={sponsor.image}
                        alt={sponsor.name}
                        className="max-h-16 max-w-full object-contain"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      />
                    </motion.div>
                  </MotionDiv>
                ))}
              </div>
            </div>

            {/* PARTNERSHIP */}
            <div>
              <div className="text-center mb-4">
                <h3 className="text-sm font-bold text-[#e30613] tracking-wider border-b border-gray-200 pb-2 mb-4">
                  PARTNERSHIP
                </h3>
              </div>
              <div className="flex flex-wrap justify-center gap-4">
                {partnership.map((sponsor, index) => (
                  <MotionDiv
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <motion.div
                      whileHover={{ y: -3 }}
                      className="flex items-center justify-center h-20 w-28"
                    >
                      <MotionImg
                        src={sponsor.image}
                        alt={sponsor.name}
                        className="max-h-16 max-w-full object-contain"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      />
                    </motion.div>
                  </MotionDiv>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* MAIN SPONSOR */}
        <div className="mb-12">
          <div className="text-center mb-4">
            <h3 className="text-sm font-bold text-[#e30613] tracking-wider border-b border-gray-200 pb-2 mb-4">
              MAIN SPONSOR
            </h3>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            {mainSponsor.map((sponsor, index) => (
              <MotionDiv
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <motion.div
                  whileHover={{ y: -3 }}
                  className="flex items-center justify-center h-24 w-36"
                >
                  <MotionImg
                    src={sponsor.image}
                    alt={sponsor.name}
                    className="max-h-20 max-w-full object-contain"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.div>
              </MotionDiv>
            ))}
          </div>
        </div>

        {/* Categorie OFFICIAL */}
        <div className="mb-12">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {officialCategories.map((category, catIndex) => (
              <div key={catIndex} className="mb-6">
                <div className="text-center mb-4">
                  <h3 className="text-sm font-bold text-[#e30613] tracking-wider border-b border-gray-200 pb-2 mb-4">
                    {category.title}
                  </h3>
                </div>
                <div className="flex justify-center">
                  {category.sponsors.map((sponsor, index) => (
                    <MotionDiv
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      viewport={{ once: true }}
                      className="group"
                    >
                      <motion.div
                        whileHover={{ y: -3 }}
                        className="flex items-center justify-center h-16 w-24"
                      >
                        <MotionImg
                          src={sponsor.image}
                          alt={sponsor.name}
                          className="max-h-12 max-w-full object-contain"
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.2 }}
                        />
                      </motion.div>
                    </MotionDiv>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* MEDIA PARTNER */}
        <div>
          <div className="text-center mb-4">
            <h3 className="text-sm font-bold text-[#e30613] tracking-wider border-b border-gray-200 pb-2 mb-4">
              MEDIA PARTNER
            </h3>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            {mediaPartner.map((sponsor, index) => (
              <MotionDiv
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <motion.div
                  whileHover={{ y: -3 }}
                  className="flex items-center justify-center h-20 w-32"
                >
                  <MotionImg
                    src={sponsor.image}
                    alt={sponsor.name}
                    className="max-h-16 max-w-full object-contain"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.div>
              </MotionDiv>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SponsorSection;
