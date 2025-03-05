import { Button } from "@/components/ui/button";
import { MotionDiv, MotionImg } from "@/components/ui/motion-div";
import SectionTitle from "./common/SectionTitle";

export default function Venues() {
  const venues = [
    {
      title: "Main Stage",
      image:
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80",
      description:
        "Our central performance area hosts live music, dance shows, and the opening and closing ceremonies.",
      features: [
        "Traditional Sicilian folk music",
        "Modern interpretations of classic songs",
        "Dance performances throughout the day",
      ],
    },
    {
      title: "Culinary Theater",
      image:
        "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&q=80",
      description:
        "Watch live cooking demonstrations and competitions in our specially designed demonstration kitchen.",
      features: [
        "Chef demonstrations every hour",
        "Interactive cooking classes",
        "Annual Sfincione competition",
      ],
    },
    {
      title: "Children's Area",
      image:
        "https://images.unsplash.com/photo-1543007630-9710e4a00a20?w=800&q=80",
      description:
        "A family-friendly zone with activities, games, and special cooking classes designed for young chefs.",
      features: [
        "Pizza-making workshops for kids",
        "Face painting and crafts",
        "Puppet shows telling Sicilian stories",
      ],
    },
  ];

  return (
    <section
      id="venues"
      className="py-24 bg-neutral-800 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1200&q=40')] bg-fixed bg-center bg-no-repeat bg-cover opacity-5"></div>

      <div className="container mx-auto px-4 relative z-10">
        <SectionTitle title="Entertainment Venues" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {venues.map((venue, index) => (
            <MotionDiv
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              viewport={{ once: true, amount: 0.2 }}
              className="group"
            >
              <div className="bg-neutral-900 rounded-xl overflow-hidden shadow-2xl h-full border border-white/5 group-hover:border-amber-500/20 transition-all duration-500">
                <div className="relative overflow-hidden">
                  <MotionImg
                    src={venue.image}
                    alt={venue.title}
                    className="w-full h-48 sm:h-56 object-cover transition-transform duration-700 group-hover:scale-110"
                    whileHover={{ scale: 1.05 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <Button className="bg-gradient-to-r from-amber-500 to-red-600 hover:from-amber-600 hover:to-red-700 text-white border-0 w-full">
                      View Details
                    </Button>
                  </div>
                </div>

                <div className="p-4 sm:p-6">
                  <h3 className="text-xl font-bold text-amber-400 mb-3 group-hover:text-white transition-colors duration-300">
                    {venue.title}
                  </h3>
                  <p className="mb-4 text-white/70 group-hover:text-white/90 transition-colors duration-300">
                    {venue.description}
                  </p>
                  <ul className="space-y-2">
                    {venue.features.map((feature, featureIndex) => (
                      <MotionDiv
                        key={featureIndex}
                        initial={{ opacity: 0, x: 10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.3,
                          delay: 0.1 * featureIndex,
                        }}
                        viewport={{ once: true }}
                        className="flex items-start"
                      >
                        <span className="text-amber-500 mr-2 text-lg">•</span>
                        <span className="text-white/60 group-hover:text-white/80 transition-colors duration-300">
                          {feature}
                        </span>
                      </MotionDiv>
                    ))}
                  </ul>
                </div>
              </div>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
}
