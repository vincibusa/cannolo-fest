import React from "react";
import { MotionDiv, MotionImg } from "../components/ui/motion-div";
import { Button } from "../components/ui/button";
import { Clock, Trophy, Users, Calendar, ArrowRight, Download } from "lucide-react";
import { motion } from "framer-motion";

const competitions = [
  {
    title: "Il Miglior Cannolo di Sicilia",
    description:
      "La competizione principale del festival dove pasticceri professionisti si sfidano per creare il cannolo più autentico e delizioso secondo la tradizione siciliana.",
    image:
      "https://images.unsplash.com/photo-1635924339056-b122fb1e418e?w=800&q=80",
    details: [
      "Aperto a pasticceri professionisti",
      "Giudicato da una giuria di esperti culinari",
      "Premio di €1.000 e il trofeo 'Cannolo d'Oro'",
      "Domenica, ore 11:00 sul Palco Principale",
    ],
  },
  {
    title: "Premio Scelta del Pubblico",
    description:
      "I visitatori del festival assaggiano e votano il loro cannolo preferito tra tutti quelli proposti dagli stand partecipanti.",
    image:
      "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=800&q=80",
    details: [
      "Tutti i visitatori possono votare",
      "Gettoni di voto inclusi nel biglietto d'ingresso",
      "Il vincitore riceve €500 e uno stand in posizione privilegiata l'anno successivo",
      "Votazioni chiuse domenica alle 16:00",
    ],
  },
];

const contests = [
  {
    title: "Sfida dei Pasticceri Amatoriali",
    description:
      "I cuochi casalinghi competono per creare la loro personale interpretazione del cannolo siciliano utilizzando ingredienti forniti dall'organizzazione.",
    time: "Sabato, ore 15:00",
    prize: "€300 + Corso di Pasticceria",
  },
  {
    title: "Concorso Junior Pasticceri",
    description:
      "Giovani chef dai 8-14 anni mostrano le loro abilità nella preparazione dei cannoli in un ambiente divertente e stimolante.",
    time: "Domenica, ore 10:00",
    prize: "Kit da Pasticceria + Medaglia",
  },
  {
    title: "Sfida Cannolo Speed",
    description:
      "I concorrenti gareggiano contro il tempo per preparare un cannolo perfetto in soli 20 minuti.",
    time: "Sabato, ore 17:00",
    prize: "€200 + Trofeo",
  },
  {
    title: "Premio Ricotta Creativa",
    description:
      "I pasticceri competono per creare la farcitura di ricotta più innovativa e deliziosa per i loro cannoli.",
    time: "Domenica, ore 14:00",
    prize: "€250 + Pubblicazione Ricetta",
  },
  {
    title: "Sfida Ricetta Tradizionale",
    description:
      "I concorrenti preparano cannoli seguendo metodi tradizionali, giudicati dagli anziani della comunità arbëreshë.",
    time: "Sabato, ore 16:00",
    prize: "€350 + Certificato",
  },
  {
    title: "Concorso Fotografia Gastronomica",
    description:
      "Cattura la bellezza dei cannoli e i momenti del festival per avere la possibilità di vincere premi.",
    time: "Tutto il Weekend",
    prize: "Attrezzatura Fotografica",
  },
];

const CompetitionsSection: React.FC = () => {
  return (
    <section id="competitions" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=1200&q=40')] bg-fixed bg-center bg-no-repeat bg-cover opacity-5"></div>
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
        <div className="absolute top-1/3 left-1/3 w-96 h-96 rounded-full bg-amber-500/10 blur-[100px]"></div>
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 rounded-full bg-red-600/10 blur-[100px]"></div>
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
            Metti alla Prova le Tue Abilità
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-amber-500 to-red-600 bg-clip-text text-transparent">
            Competizioni del Festival
          </h2>
          <motion.div 
            className="h-1 w-20 bg-gradient-to-r from-amber-500 to-red-600 mx-auto rounded-full mb-8"
            whileHover={{ width: "120px" }}
          />
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Metti alla prova le tue abilità di pasticciere nelle nostre emozionanti competizioni culinarie con fantastici premi in palio
                  </p>
            </MotionDiv>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {competitions.map((competition, index) => (
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
                className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 h-full flex flex-col transition-all duration-300 hover:border-amber-200"
              >
                <div className="relative overflow-hidden h-72">
                  <MotionImg
                    src={competition.image}
                    alt={competition.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {competition.title}
                    </h3>
                    <div className="flex items-center gap-4 text-white/80">
                      <div className="flex items-center">
                        <Trophy className="w-4 h-4 mr-2" />
                        Premio Principale
                  </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-2" />
                        Categoria Professionisti
                </div>
              </div>
                  </div>
        </div>

                <div className="p-8 flex-grow">
                  <p className="text-gray-600 mb-6">
                    {competition.description}
            </p>
                  <div className="space-y-4">
                    {competition.details.map((detail, detailIndex) => (
                      <motion.div
                        key={detailIndex}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * detailIndex }}
                        className="flex items-center"
                      >
                        <motion.div
                          whileHover={{ scale: 1.2 }}
                          className="w-2 h-2 rounded-full bg-amber-500 mr-3"
                        />
                        <span className="text-gray-600">{detail}</span>
                      </motion.div>
                    ))}
          </div>
      </div>

                <div className="px-8 pb-8">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    className="w-full bg-gradient-to-r from-amber-500 to-red-600 hover:from-amber-600 hover:to-red-700 text-white py-4 rounded-xl font-medium flex items-center justify-center group"
                  >
                    Iscriviti alla Competizione
                    <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                  </motion.button>
                </div>
              </motion.div>
            </MotionDiv>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {contests.map((contest, index) => (
            <MotionDiv
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.05 * index }}
              viewport={{ once: true }}
              className="group"
            >
              <motion.div
                whileHover={{ y: -8 }}
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:border-amber-200 transition-all duration-300 h-full"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-800 group-hover:text-amber-600 transition-colors duration-300">
                    {contest.title}
                  </h3>
                  <Trophy className="w-5 h-5 text-amber-500" />
                </div>
                <p className="text-gray-600 mb-6">
                  {contest.description}
                </p>
                <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                  <div className="flex items-center text-gray-500">
                    <Calendar className="w-4 h-4 mr-2" />
                    {contest.time}
                  </div>
                  <div className="text-amber-600 font-medium">
                    {contest.prize}
                  </div>
                </div>
              </motion.div>
            </MotionDiv>
          ))}
        </div>

        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 max-w-3xl mx-auto text-center"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Sei pronto a mostrare le tue abilità?
            </h3>
            <p className="text-gray-600 mb-8">
              Scarica il modulo d'iscrizione e partecipa a una o più competizioni del Cannolo Fest 2025. 
              Ogni categoria offre l'opportunità di vincere premi esclusivi e il riconoscimento della comunità gastronomica siciliana.
            </p>
            <Button className="bg-gradient-to-r from-amber-500 to-red-600 hover:from-amber-600 hover:to-red-700 text-white py-6 px-8 rounded-xl text-lg font-medium flex items-center justify-center mx-auto">
              <Download className="w-5 h-5 mr-3" /> Scarica il Modulo d'Iscrizione
            </Button>
          </motion.div>
        </MotionDiv>
      </div>
    </section>
  );
};

export default CompetitionsSection;
