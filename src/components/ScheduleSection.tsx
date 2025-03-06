// src/components/ScheduleSection.tsx
import React from "react";
import { MotionDiv } from "../components/ui/motion-div";
import { CalendarIcon, Clock } from "lucide-react";

const scheduleDays = [
  {
    day: "Day 1",
    title: "Opening Ceremony",
    time: "10:00 AM - 8:00 PM",
    color: "red",
    events: [
      { time: "10:00 AM", desc: "Opening speech and ribbon cutting" },
      { time: "11:30 AM", desc: "First cooking demonstration" },
      { time: "1:00 PM", desc: "Tasting begins" },
      { time: "4:00 PM", desc: "Live music performance" },
      { time: "7:00 PM", desc: "Evening reception" },
    ],
  },
  {
    day: "Day 2",
    title: "Main Festival Day",
    time: "9:00 AM - 10:00 PM",
    color: "amber",
    events: [
      { time: "9:00 AM", desc: "Vendor booths open" },
      { time: "11:00 AM", desc: "Chef competition begins" },
      { time: "1:00 PM", desc: "Children's baking workshop" },
      { time: "3:00 PM", desc: "Cultural presentation on Sfincione history" },
      { time: "6:00 PM", desc: "Awards ceremony" },
      { time: "8:00 PM", desc: "Celebration dinner and dancing" },
    ],
  },
];

const ScheduleSection: React.FC = () => {
  return (
    <section id="schedule" className="py-24 bg-neutral-900 relative">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-amber-500/5 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-r from-red-600/5 to-transparent"></div>

      <div className="container mx-auto px-4 relative z-10">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
          className="mb-16 text-center"
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-amber-300 to-red-500 bg-clip-text text-transparent inline-block">
            Festival Schedule
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-amber-400 to-red-600 mx-auto rounded-full"></div>
        </MotionDiv>

        <div className="max-w-4xl mx-auto space-y-12 relative">
          {/* Timeline line */}
          <div className="absolute left-[27px] top-[60px] bottom-0 w-1 bg-gradient-to-b from-red-600 to-amber-500 rounded-full lg:left-1/2 lg:-ml-0.5"></div>

          {scheduleDays.map((day, dayIndex) => (
            <MotionDiv
              key={dayIndex}
              className={`relative ${dayIndex % 2 === 1 ? "lg:ml-auto" : ""} lg:w-[calc(50%-20px)]`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              {/* Timeline dot */}
              <div
                className={`absolute left-0 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-${day.color}-600 flex items-center justify-center z-10 -ml-6 sm:-ml-7 border-4 border-neutral-900 shadow-xl lg:left-[calc(100%+20px)] ${dayIndex % 2 === 1 ? "lg:left-auto lg:right-[calc(100%+20px)]" : ""}`}
              >
                <CalendarIcon size={24} className="text-white" />
              </div>

              <div
                className={`ml-8 sm:ml-10 lg:ml-0 pl-4 sm:pl-6 lg:pl-0 bg-neutral-800/80 backdrop-blur-sm p-6 sm:p-10 rounded-xl shadow-2xl border border-${day.color}-500/20 hover:border-${day.color}-500/40 transition-all duration-300`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                  <div>
                    <span
                      className={`text-sm font-semibold px-3 py-1 rounded-full bg-${day.color}-500/20 text-${day.color}-400 mb-2 inline-block`}
                    >
                      {day.day}
                    </span>
                    <h3 className="text-2xl font-bold text-white">
                      {day.title}
                    </h3>
                  </div>
                  <p className="text-white/70 flex items-center mt-2 sm:mt-0 text-sm sm:text-base">
                    <Clock size={16} className="mr-2 text-amber-400" /> {day.time}
                  </p>
                </div>

                <ul className="space-y-4 sm:space-y-5">
                  {day.events.map((event, eventIndex) => (
                    <MotionDiv
                      key={eventIndex}
                      initial={{
                        opacity: 0,
                        x: dayIndex % 2 === 0 ? 20 : -20,
                      }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 * eventIndex }}
                      viewport={{ once: true }}
                      className="flex items-start group"
                    >
                      <div className={`min-w-[80px] sm:min-w-[120px] text-xs sm:text-sm font-mono text-${day.color}-400 mr-3 sm:mr-6`}>
                        {event.time}
                      </div>
                      <div className="flex-1 text-white/80 group-hover:text-white transition-colors duration-200">
                        {event.desc}
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