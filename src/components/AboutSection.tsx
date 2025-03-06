// src/components/AboutSection.tsx
import React from "react";
import { MotionDiv, MotionImg } from "../components/ui/motion-div";

const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-b from-neutral-900 to-neutral-800"
    >
      <div className="container mx-auto px-4">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
          className="mb-16 text-center"
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-amber-300 to-red-500 bg-clip-text text-transparent inline-block">
            About Sfincione Fest
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-amber-400 to-red-600 mx-auto rounded-full"></div>
        </MotionDiv>

        <div className="grid md:grid-cols-2 gap-10 sm:gap-16 items-center">
          <MotionDiv
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <p className="text-base sm:text-lg mb-6 text-white/90">
              <span className="font-bold text-amber-400">Sfincione Fest</span>{" "}
              is an annual celebration dedicated to Sicily's beloved street food,
              the Sfincione di Bagheria. This three-day festival brings together
              bakers, chefs, food enthusiasts, and tourists from across Italy and beyond.
            </p>
            <p className="text-base sm:text-lg mb-6 text-white/90">
              <span className="font-bold text-amber-400">
                Sfincione di Bagheria
              </span>{" "}
              is a traditional Sicilian delicacy – a thick, spongy pizza topped with tomatoes, onions, anchovies, and caciocavallo cheese, all sprinkled with breadcrumbs. What makes it special is the unique dough that's left to rise for hours, creating its distinctive texture.
            </p>
            <p className="text-base sm:text-lg mb-6 text-white/90">
              Our festival was established in 2015 by the Bagheria Cultural Association to preserve and promote this culinary tradition that dates back to the 17th century. Each year, we welcome over 10,000 visitors who come to experience the authentic flavors of Sicily.
            </p>
            <p className="text-base sm:text-lg text-white/90">
              Join us for a weekend filled with cooking demonstrations, tastings, competitions, and cultural performances that celebrate not just the food, but the rich heritage and community spirit of Bagheria.
            </p>
          </MotionDiv>

          <MotionDiv
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-amber-500/20 to-red-600/20 rounded-xl blur-xl opacity-70"></div>
            <div className="relative bg-neutral-800/80 backdrop-blur-sm p-4 sm:p-6 rounded-xl shadow-2xl border border-amber-500/20">
              <MotionImg
                src="https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&q=80"
                alt="Traditional Sfincione"
                className="rounded-lg w-full h-auto shadow-xl mb-6 hover:scale-[1.02] transition-transform duration-500"
                whileHover={{ scale: 1.03 }}
              />
              <div className="bg-neutral-900/80 backdrop-blur-sm p-4 sm:p-6 rounded-lg shadow-xl border border-amber-500/10">
                <h3 className="text-xl sm:text-2xl font-bold text-amber-400 mb-3 sm:mb-4">
                  Festival Highlights
                </h3>
                <ul className="space-y-4">
                  {[
                    "Over 20 traditional bakeries showcasing their Sfincione",
                    "Live cooking demonstrations by master chefs",
                    "Annual Sfincione competition with jury and people's choice awards",
                    "Cultural exhibits on the history of Sicilian cuisine",
                  ].map((item, index) => (
                    <MotionDiv
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 * index }}
                      viewport={{ once: true }}
                      className="flex items-start"
                    >
                      <span className="text-amber-500 mr-3 text-xl">•</span>
                      <span className="text-white/80">{item}</span>
                    </MotionDiv>
                  ))}
                </ul>
              </div>
            </div>
          </MotionDiv>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;