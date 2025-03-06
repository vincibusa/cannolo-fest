import React from "react";
import { MotionDiv, MotionImg } from "../components/ui/motion-div";
import { Button } from "../components/ui/button";
import { Clock, Trophy, Users, Calendar, ArrowRight, Download } from "lucide-react";
import { motion } from "framer-motion";

const competitions = [
  {
    title: "Master Sfincione Competition",
    description:
      "The festival's premier event where professional bakers and chefs compete to create the most authentic and delicious Sfincione di Bagheria.",
    image:
      "https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=800&q=80",
    details: [
      "Open to professional chefs and bakers",
      "Judged by a panel of culinary experts",
      "€1,000 grand prize and Golden Sfincione trophy",
      "Saturday, 2:00 PM at the Culinary Theater",
    ],
  },
  {
    title: "People's Choice Award",
    description:
      "Festival attendees taste and vote for their favorite Sfincione from participating vendors throughout the festival grounds.",
    image:
      "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=800&q=80",
    details: [
      "All festival attendees can vote",
      "Voting tokens included with admission",
      "Winner receives €500 and featured spot next year",
      "Voting closes Sunday at 3:00 PM",
    ],
  },
];

const contests = [
  {
    title: "Amateur Chef Challenge",
    description:
      "Home cooks compete to create their own interpretation of Sfincione using provided ingredients.",
    time: "Friday, 3:00 PM",
    prize: "€300 + Cooking Class",
  },
  {
    title: "Kids Baking Contest",
    description:
      "Young chefs ages 8-14 showcase their pizza-making skills in this fun, supportive environment.",
    time: "Saturday, 11:00 AM",
    prize: "Cooking Kit + Medal",
  },
  {
    title: "Speed Baking Challenge",
    description:
      "Contestants race against the clock to prepare a Sfincione in just 30 minutes.",
    time: "Sunday, 1:00 PM",
    prize: "€200 + Trophy",
  },
  {
    title: "Creative Toppings Award",
    description:
      "Chefs compete to create the most innovative and delicious Sfincione topping combination.",
    time: "Saturday, 4:00 PM",
    prize: "€250 + Featured Recipe",
  },
  {
    title: "Traditional Recipe Showdown",
    description:
      "Contestants prepare Sfincione following traditional methods judged by Bagheria elders.",
    time: "Sunday, 12:00 PM",
    prize: "€350 + Certificate",
  },
  {
    title: "Food Photography Contest",
    description:
      "Capture the beauty of Sfincione and festival moments for a chance to win prizes.",
    time: "All Weekend",
    prize: "Camera Equipment",
  },
];

const CompetitionsSection: React.FC = () => {
  return (
    <section id="competitions" className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
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
            Show Your Skills
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-amber-500 to-red-600 bg-clip-text text-transparent">
            Festival Competitions
          </h2>
          <motion.div 
            className="h-1 w-20 bg-gradient-to-r from-amber-500 to-red-600 mx-auto rounded-full mb-8"
            whileHover={{ width: "120px" }}
          />
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Test your skills and taste in our exciting culinary competitions with amazing prizes
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
                        Grand Prize
                  </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-2" />
                        Professional
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
                    Register to Compete
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
              How to Participate
            </h3>
            <p className="text-gray-600 mb-8">
              Registration for all competitions is available at the festival information booth or online. 
              Entry fees apply for professional categories, while amateur and children's competitions are free to enter with festival admission.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-amber-500 to-red-600 hover:from-amber-600 hover:to-red-700 text-white rounded-full font-medium group"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Competition Rules
              <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </motion.button>
          </motion.div>
        </MotionDiv>
      </div>
    </section>
  );
};

export default CompetitionsSection;
