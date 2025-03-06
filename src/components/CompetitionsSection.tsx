// src/components/CompetitionsSection.tsx
import React from "react";
import { MotionDiv, MotionImg } from "../components/ui/motion-div";
import { Button } from "../components/ui/button";
import { Clock } from "lucide-react";

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
    <section
      id="competitions"
      className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=1200&q=40')] bg-fixed bg-center bg-no-repeat bg-cover opacity-5"></div>
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 rounded-full bg-amber-500/10 blur-[100px]"></div>
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 rounded-full bg-red-600/10 blur-[100px]"></div>
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
            Festival Competitions
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-amber-400 to-red-600 mx-auto rounded-full"></div>
          <p className="text-neutral-600 mt-6 max-w-2xl mx-auto text-base sm:text-lg">
            Test your skills and taste in our exciting culinary competitions
            with amazing prizes
          </p>
        </MotionDiv>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
          {competitions.map((competition, index) => (
            <MotionDiv
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-200 group-hover:border-amber-500/30 transition-all duration-300 h-full flex flex-col">
                <div className="relative overflow-hidden h-64">
                  <MotionImg
                    src={competition.image}
                    alt={competition.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    whileHover={{ scale: 1.05 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/50 to-transparent opacity-60"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-bold text-neutral-800 mb-2">
                      {competition.title}
                    </h3>
                  </div>
                </div>

                <div className="p-6 flex-grow">
                  <p className="text-neutral-700 mb-6">
                    {competition.description}
                  </p>

                  <div className="space-y-3">
                    {competition.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-start">
                        <span className="text-amber-500 mr-2 text-lg">•</span>
                        <span className="text-neutral-700">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <Button className="w-full bg-gradient-to-r from-amber-500 to-red-600 hover:from-amber-600 hover:to-red-700 text-white border-0">
                    Register to Compete
                  </Button>
                </div>
              </div>
            </MotionDiv>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {contests.map((contest, index) => (
            <MotionDiv
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.05 * index }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="bg-white p-5 rounded-xl shadow-md border border-gray-200 group-hover:border-amber-500/20 transition-all duration-300 h-full flex flex-col">
                <h3 className="text-xl font-bold text-amber-600 mb-2 group-hover:text-neutral-800 transition-colors duration-300">
                  {contest.title}
                </h3>
                <p className="text-neutral-600 text-sm mb-4 flex-grow">
                  {contest.description}
                </p>
                <div className="flex justify-between items-center text-sm border-t border-gray-200 pt-4 mt-2">
                  <div className="flex items-center text-neutral-600">
                    <Clock size={14} className="mr-2 text-amber-500" />
                    <span>{contest.time}</span>
                  </div>
                  <div className="text-amber-400 font-medium">
                    Prize: {contest.prize}
                  </div>
                </div>
              </div>
            </MotionDiv>
          ))}
        </div>

        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-white p-8 rounded-xl shadow-md border border-amber-500/20 max-w-3xl mx-auto">
            <h3 className="text-xl font-bold text-neutral-800 mb-4">
              How to Participate
            </h3>
            <p className="text-neutral-700 mb-6">
              Registration for all competitions is available at the festival
              information booth or online. Entry fees apply for professional
              categories, while amateur and children's competitions are free to
              enter with festival admission.
            </p>
            <Button className="bg-gradient-to-r from-amber-500 to-red-600 hover:from-amber-600 hover:to-red-700 text-white border-0 rounded-full px-8">
              Download Competition Rules
            </Button>
          </div>
        </MotionDiv>
      </div>
    </section>
  );
};

export default CompetitionsSection;
