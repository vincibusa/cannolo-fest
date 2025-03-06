// src/components/EventHighlights.tsx
import React from "react";
import { MotionDiv } from "../components/ui/motion-div";

const highlights = [
  {
    title: "Cooking Demonstrations",
    description:
      "Watch master chefs prepare authentic Sfincione using traditional techniques and learn their secrets.",
    color: "from-red-600 to-red-700",
    textColor: "text-red-400",
    icon: "🍕",
  },
  {
    title: "Tasting Competition",
    description:
      "Sample varieties of Sfincione from different bakers and vote for your favorite in our people's choice award.",
    color: "from-amber-500 to-amber-600",
    textColor: "text-amber-400",
    icon: "🏆",
  },
  {
    title: "Cultural Performances",
    description:
      "Enjoy traditional Sicilian music and dance performances throughout the festival.",
    color: "from-red-600 to-red-700",
    textColor: "text-red-400",
    icon: "🎭",
  },
];

const EventHighlights: React.FC = () => {
  return (
    <section className="py-24 bg-neutral-800 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-amber-500 blur-[100px]"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 rounded-full bg-red-600 blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
          className="mb-16 text-center"
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-amber-300 to-red-500 bg-clip-text text-transparent inline-block">
            Event Highlights
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-amber-400 to-red-600 mx-auto rounded-full"></div>
        </MotionDiv>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {highlights.map((item, index) => (
            <MotionDiv
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="bg-neutral-900/80 backdrop-blur-sm p-5 sm:p-8 rounded-xl shadow-2xl border border-white/5 h-full transition-all duration-300 group-hover:border-amber-500/30 relative overflow-hidden">
                <div className="absolute -right-4 -top-4 text-5xl opacity-20 group-hover:opacity-30 transition-opacity duration-300">
                  {item.icon}
                </div>
                <div
                  className={`w-12 h-12 rounded-lg mb-6 flex items-center justify-center text-white bg-gradient-to-br ${item.color} shadow-lg`}
                >
                  <span className="text-2xl">{item.icon}</span>
                </div>
                <h3
                  className={`text-xl font-bold mb-4 ${item.textColor} group-hover:text-white transition-colors duration-300`}
                >
                  {item.title}
                </h3>
                <p className="text-white/70 group-hover:text-white/90 transition-colors duration-300">
                  {item.description}
                </p>
                <div className="h-1 w-0 bg-gradient-to-r from-amber-400 to-red-600 mt-6 rounded-full transition-all duration-500 group-hover:w-full"></div>
              </div>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventHighlights;