import React from "react";
import { MotionDiv } from "../components/ui/motion-div";
import { motion } from "framer-motion";
import { ChefHat, Trophy, Music, ArrowRight } from "lucide-react";

const highlights = [
  {
    title: "Cooking Demonstrations",
    description: "Watch master chefs prepare authentic Sfincione using traditional techniques and learn their secrets.",
    icon: <ChefHat className="w-6 h-6" />,
    time: "Daily, 11:00 AM - 4:00 PM",
    location: "Main Stage",
    features: ["Live Cooking", "Expert Tips", "Tasting Sessions"]
  },
  {
    title: "Tasting Competition",
    description: "Sample varieties of Sfincione from different bakers and vote for your favorite in our people's choice award.",
    icon: <Trophy className="w-6 h-6" />,
    time: "Saturday, 2:00 PM",
    location: "Festival Square",
    features: ["20+ Varieties", "People's Choice", "Expert Jury"]
  },
  {
    title: "Cultural Performances",
    description: "Enjoy traditional Sicilian music and dance performances throughout the festival.",
    icon: <Music className="w-6 h-6" />,
    time: "Every Evening, 6:00 PM",
    location: "Garden Stage",
    features: ["Live Music", "Folk Dance", "Street Artists"]
  }
];

const EventHighlights: React.FC = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
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
          className="absolute top-0 left-0 w-full h-full"
        >
          <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-amber-500/20 blur-[100px]" />
          <div className="absolute bottom-10 right-10 w-64 h-64 rounded-full bg-red-600/20 blur-[100px]" />
        </motion.div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.span 
            className="text-amber-600 font-medium mb-4 block"
            whileHover={{ scale: 1.05 }}
          >
            What's Happening
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-amber-500 to-red-600 bg-clip-text text-transparent">
            Event Highlights
          </h2>
          <motion.div 
            className="h-1 w-20 bg-gradient-to-r from-amber-500 to-red-600 mx-auto rounded-full mb-8"
            whileHover={{ width: "120px" }}
          />
          <p className="text-gray-600 text-lg">
            Experience the best of Sicilian culture and cuisine
          </p>
            </MotionDiv>

        <div className="grid lg:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <MotionDiv
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <motion.div
                whileHover={{ y: -8 }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 relative z-10 h-full"
              >
                {/* Icon container */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-14 h-14 rounded-xl bg-gradient-to-r from-amber-500/10 to-red-600/10 flex items-center justify-center mb-6 text-amber-600"
                >
                  {item.icon}
                </motion.div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-amber-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {item.description}
                </p>

                {/* Event details */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-center text-gray-500 text-sm">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {item.time}
      </div>
                  <div className="flex items-center text-gray-500 text-sm">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {item.location}
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-2">
                  {item.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-gray-600">
                      <motion.div
                        initial={{ scale: 1 }}
                        whileHover={{ scale: 1.2 }}
                        className="w-1.5 h-1.5 rounded-full bg-amber-500 mr-2"
                      />
                      {feature}
                    </div>
                  ))}
                </div>

                {/* Hover effect line */}
                <motion.div
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-amber-500 to-red-600 rounded-full"
                />
              </motion.div>

              {/* Background glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 to-red-600/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventHighlights;
