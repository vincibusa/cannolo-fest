import React from "react";
import { MotionDiv } from "../components/ui/motion-div";
import { CalendarIcon, MapPin } from "lucide-react";

const scheduleDays = [
  {
    day: "17 Maggio",
    title: "Apertura Ufficiale",
    time: "10:00 - 23:00",
    color: "red",
    events: [
      { 
        time: "10:00", 
        desc: "Cerimonia di apertura con taglio del nastro e discorso delle autorità",
        location: "Piazza Centrale",
        type: "Cerimonia"
      },
      { 
        time: "11:30", 
        desc: "Inaugurazione degli stand delle pasticcerie tradizionali",
        location: "Via Principale",
        type: "Esposizione"
      },
      { 
        time: "13:00", 
        desc: "Dimostrazione di preparazione del cannolo tradizionale",
        location: "Palco Principale",
        type: "Workshop"
      },
      { 
        time: "16:00", 
        desc: "Presentazione della storia del cannolo e tradizione arbëreshë",
        location: "Piazza della Cultura",
        type: "Culturale"
      },
      { 
        time: "18:00", 
        desc: "Esibizione di musica e danze tradizionali albanesi",
        location: "Palco Centrale",
        type: "Spettacolo"
      },
      { 
        time: "20:30", 
        desc: "Cena con degustazione di piatti della tradizione albanese-siciliana",
        location: "Area Ristoro",
        type: "Gastronomia"
      },
    ],
  },
  {
    day: "18 Maggio",
    title: "Giornata Principale del Festival",
    time: "9:00 - 22:00",
    color: "amber",
    events: [
      { 
        time: "9:00", 
        desc: "Apertura degli stand e colazione tradizionale",
        location: "Via Principale",
        type: "Gastronomia"
      },
      { 
        time: "11:00", 
        desc: "Inizio della competizione 'Il Miglior Cannolo di Sicilia'",
        location: "Palco Principale",
        type: "Competizione"
      },
      { 
        time: "13:30", 
        desc: "Workshop per bambini: impariamo a decorare i cannoli",
        location: "Area Didattica",
        type: "Workshop"
      },
      { 
        time: "15:00", 
        desc: "Tavola rotonda: Il cannolo come attrazione turistica e culturale",
        location: "Sala Conferenze",
        type: "Culturale"
      },
      { 
        time: "17:00", 
        desc: "Premiazione del concorso e riconoscimenti",
        location: "Palco Centrale",
        type: "Cerimonia"
      },
      { 
        time: "19:00", 
        desc: "Concerto di musica moderna e tradizionale",
        location: "Piazza Centrale",
        type: "Spettacolo"
      },
      { 
        time: "21:00", 
        desc: "Spettacolo pirotecnico e chiusura del festival",
        location: "Vista Panoramica",
        type: "Spettacolo"
      },
    ],
  },
];

const eventTypeColors = {
  Cerimonia: "bg-purple-100 text-purple-700",
  Workshop: "bg-blue-100 text-blue-700",
  Gastronomia: "bg-emerald-100 text-emerald-700",
  Spettacolo: "bg-pink-100 text-pink-700",
  Culturale: "bg-amber-100 text-amber-700",
  Competizione: "bg-red-100 text-red-700",
  Esposizione: "bg-indigo-100 text-indigo-700",
};

const ScheduleSection: React.FC = () => {
  return (
    <section id="schedule" className="py-16 sm:py-24 bg-white relative">
      <div className="absolute inset-0 bg-[url('/path/to/pattern.svg')] opacity-[0.02] pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-amber-500/5 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-r from-red-600/5 to-transparent"></div>

      <div className="container mx-auto px-4 relative z-10">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
          className="mb-12 sm:mb-16 text-center"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-amber-500 to-red-600 bg-clip-text text-transparent inline-block">
            Programma del Festival
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-amber-500 to-red-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-sm sm:text-base px-2">
            Unisciti a noi per due giorni di eccellenza culinaria, intrattenimento e celebrazione culturale. Tutti gli eventi sono programmati con cura per garantirti di non perdere nessuna delle emozioni del Cannolo Fest.
          </p>
        </MotionDiv>

        <div className="max-w-5xl mx-auto space-y-8 sm:space-y-12 relative">
          <div className="absolute left-8 sm:left-[27px] lg:left-1/2 top-[60px] bottom-0 w-1 bg-gradient-to-b from-red-600 to-amber-500 rounded-full opacity-30 lg:-ml-0.5"></div>

          {scheduleDays.map((day, dayIndex) => (
            <MotionDiv
              key={dayIndex}
              className={`relative ${
                dayIndex % 2 === 1 ? "lg:ml-auto" : ""
              } lg:w-[calc(50%-20px)]`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.2 }}
                    >
                <div
                className={`absolute left-0 w-12 sm:w-14 h-12 sm:h-14 rounded-full bg-white flex items-center justify-center z-10 ml-2 -mt-1 sm:-ml-7 border-2 border-amber-500 shadow-lg 
                lg:left-[calc(100%+20px)] ${
                  dayIndex % 2 === 1 ? "lg:left-auto lg:right-[calc(100%+20px)]" : ""
                  }`}
                >
               <CalendarIcon className="w-5 h-5 sm:w-6 sm:h-6 text-amber-500" />
                        </div>

              <div className="ml-16 sm:ml-10 lg:ml-0 pl-4 sm:pl-6 bg-white p-4 sm:p-8 rounded-2xl shadow-lg border border-gray-100 hover:border-amber-200 transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 sm:mb-6">
                    <div>
                    <span className="text-xs sm:text-sm font-semibold px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-amber-100 text-amber-700 mb-2 sm:mb-3 inline-block">
                        {day.day}
                            </span>
                    <h3 className="text-lg sm:text-2xl font-bold text-gray-800">
                        {day.title}
                      </h3>
                          </div>
                </div>
                <ul className="space-y-4 sm:space-y-6">
                    {day.events.map((event, eventIndex) => (
                      <MotionDiv
                        key={eventIndex}
                        initial={{ opacity: 0, x: dayIndex % 2 === 0 ? 20 : -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 * eventIndex }}
                        viewport={{ once: true }}
                        className="group"
                      >
                      <div className="flex flex-col sm:flex-row gap-1 sm:gap-3">
                          <div className="flex-1">
                          <div className="flex flex-wrap items-center gap-2 mb-1 sm:mb-2">
                              {event.type && (
                              <span className={`text-xs font-semibold px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full ${eventTypeColors[event.type as keyof typeof eventTypeColors]}`}>
                                  {event.type}
                                </span>
                              )}
                              {event.location && (
                              <span className="text-xs sm:text-sm text-gray-500 flex items-center">
                              <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5 mr-1" />
                                  {event.location}
                                </span>
                              )}
              </div>
                          <p className="text-sm sm:text-base text-gray-700 group-hover:text-gray-900 transition-colors duration-200">
                              {event.desc}
                            </p>
        </div>
      </div>
                      </MotionDiv>
                    ))}
                  </ul>
                </div>
              </MotionDiv>
            ))}
          </div>
        </div>
    </section>
  );
};

export default ScheduleSection;
