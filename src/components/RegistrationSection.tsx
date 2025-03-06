// src/components/RegistrationSection.tsx
import React from "react";
import { MotionDiv } from "../components/ui/motion-div";
import { Button } from "../components/ui/button";

const tickets = [
  {
    title: "Early Bird",
    price: "€25",
    features: ["Full festival access", "Welcome drink", "Tasting tokens (5)"],
  },
  {
    title: "Standard",
    price: "€40",
    features: [
      "Full festival access",
      "Welcome drink",
      "Tasting tokens (10)",
      "Festival cookbook",
    ],
  },
  {
    title: "VIP",
    price: "€75",
    features: [
      "Full festival access",
      "Welcome drink",
      "Unlimited tastings",
      "Festival cookbook",
      "Chef's dinner",
      "Cooking class",
    ],
  },
];

const RegistrationSection: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white via-amber-50 to-gray-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1200&q=40')] bg-fixed bg-center bg-no-repeat bg-cover opacity-10"></div>
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-amber-500/20 blur-[100px] animate-pulse"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-red-600/20 blur-[100px] animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <MotionDiv
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 text-neutral-800">
            Join Us at{" "}
            <span className="bg-gradient-to-r from-amber-500 to-red-600 bg-clip-text text-transparent">
              Sfincione Fest!
            </span>
          </h2>
          <p className="text-base sm:text-xl mb-6 sm:mb-10 max-w-3xl mx-auto text-neutral-700 px-2">
            Secure your spot at the most delicious festival of the year. Early
            bird tickets available now!
          </p>

          <MotionDiv
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <Button className="bg-gradient-to-r from-amber-500 to-red-600 hover:from-amber-600 hover:to-red-700 text-white text-base sm:text-lg px-8 sm:px-10 py-5 sm:py-7 rounded-full shadow-lg shadow-red-600/30 border-0">
              Register Now
            </Button>
          </MotionDiv>

          <div className="mt-10 sm:mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto">
            {tickets.map((ticket, index) => (
              <MotionDiv
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md border border-gray-200 group-hover:border-amber-500/30 transition-all duration-300 h-full flex flex-col">
                  <h3 className="text-xl font-bold text-neutral-800 mb-2">
                    {ticket.title}
                  </h3>
                  <div className="text-3xl font-bold text-amber-600 mb-4">
                    {ticket.price}
                  </div>
                  <ul className="space-y-2 mb-6 flex-grow">
                    {ticket.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-neutral-700"
                      >
                        <span className="text-amber-500 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant="outline"
                    className="mt-auto w-full border-amber-500/50 text-amber-400 hover:bg-amber-500/10"
                  >
                    Select
                  </Button>
                </div>
              </MotionDiv>
            ))}
          </div>
        </MotionDiv>
      </div>
    </section>
  );
};

export default RegistrationSection;
