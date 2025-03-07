import React from "react";
import { MotionDiv, MotionImg } from "../components/ui/motion-div";
import { Calendar, Users, Award, History } from "lucide-react";
import { motion } from "framer-motion";

const AboutSection: React.FC = () => {
  const features = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "20+ Bakeries",
      description: "Traditional bakeries showcasing their best Sfincione"
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Live Events",
      description: "Daily cooking demonstrations by master chefs"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Competitions",
      description: "Annual awards and people's choice recognition"
    },
    {
      icon: <History className="w-6 h-6" />,
      title: "Rich History",
      description: "Celebrating centuries of Sicilian tradition"
    }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Decorative backgrounds */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-amber-50/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-red-50/50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4 relative">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
          >
   
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-amber-500 to-red-600 bg-clip-text text-transparent">
            COS'E' LO SFINCIONE FEST
          </h2>
          <motion.div 
            className="h-1 w-20 bg-gradient-to-r from-amber-500 to-red-600 mx-auto rounded-full mb-8"
            whileHover={{ width: "120px" }}
          />
        
                    </MotionDiv>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <MotionDiv
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.div
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="space-y-6"
            >
            
              <p className="text-gray-600 leading-relaxed">
               E' un evento unico nel suo genere che celebra lo <b>sfincione</b> come ambasciatore del territorio, forte attrattore enogastronomico e turistico
               , la cui produzione mobilita una filiera agroalimentare variegata e sostenibile.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-gray-800">
                The <span className="text-red-600">Authentic</span> Experience
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Experience the unique taste of Sfincione di Bagheria – a thick, spongy pizza topped 
                with tomatoes, onions, anchovies, and caciocavallo cheese, all sprinkled with 
                breadcrumbs, created through a time-honored process.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-gray-800">
                Our <span className="text-amber-600">Story</span>
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Since 2015, we've been preserving and promoting this culinary tradition that dates 
                back to the 17th century. Each year, we welcome over 10,000 visitors who come to 
                experience the authentic flavors of Sicily.
              </p>
            </motion.div>
          </MotionDiv>

          <MotionDiv
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <motion.div 
              className="relative rounded-2xl overflow-hidden mb-8 group"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-red-600/20 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
              <MotionImg
                src="https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&q=80"
                alt="Traditional Sfincione"
                className="w-full h-[400px] object-cover rounded-2xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
              />
            </motion.div>

            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="text-center"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-12 h-12 mx-auto mb-3 bg-gradient-to-r from-amber-500/10 to-red-600/10 rounded-full flex items-center justify-center text-amber-600"
                  >
                    {feature.icon}
                  </motion.div>
                  <h4 className="font-semibold text-gray-800 mb-1">{feature.title}</h4>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </MotionDiv>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;