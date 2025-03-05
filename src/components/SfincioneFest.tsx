import { Button } from "./ui/button";
import {
  CalendarIcon,
  MapPinIcon,
  Clock,
  ChevronLeft,
  ChevronRight,
  Menu,
  X,
  Instagram,
  Facebook,
  Twitter,
} from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { useState, useEffect } from "react";
import {
  MotionDiv,
  MotionH2,
  MotionP,
  MotionImg,
  MotionButton,
} from "./ui/motion-div";
import { cn } from "@/lib/utils";

export default function SfincioneFest() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const carouselImages = [
    {
      src: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=1200&q=80",
      alt: "Traditional Sfincione",
      caption: "Traditional Sfincione di Bagheria",
    },
    {
      src: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1200&q=80",
      alt: "Food Festival",
      caption: "Join us for a celebration of Sicilian cuisine",
    },
    {
      src: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=1200&q=80",
      alt: "Sicily",
      caption: "Experience the beauty of Bagheria, Sicily",
    },
    {
      src: "https://images.unsplash.com/photo-1528137871618-79d2761e3fd5?w=1200&q=80",
      alt: "Cooking Demonstration",
      caption: "Watch master chefs prepare authentic recipes",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % carouselImages.length);
    }, 5000);

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      clearInterval(interval);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [carouselImages.length]);

  return (
    <div className="min-h-screen bg-neutral-900 text-white">
      {/* Header */}
      <header
        className={cn(
          "fixed w-full z-50 transition-all duration-300",
          scrolled
            ? "bg-black/80 backdrop-blur-md py-3 shadow-lg"
            : "bg-transparent py-6",
        )}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <MotionDiv
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-amber-400 to-red-600 bg-clip-text text-transparent">
              Sfincione Fest
            </h1>
          </MotionDiv>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {[
              { name: "About", href: "#about" },
              { name: "Schedule", href: "#schedule" },
              { name: "Venues", href: "#venues" },
              { name: "Competitions", href: "#competitions" },
              { name: "Presenters", href: "#presenters" },
              { name: "Location", href: "#location" },
              { name: "Contact", href: "#contact" },
            ].map((item, index) => (
              <MotionDiv
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
              >
                <a
                  href={item.href}
                  className="relative font-medium text-white hover:text-amber-300 transition-colors duration-300 group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </MotionDiv>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(true)}
              className="text-white hover:bg-white/10"
            >
              <Menu size={24} />
            </Button>
          </div>

          {/* Register Button (Desktop) */}
          <MotionDiv
            className="hidden md:block"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Button className="bg-gradient-to-r from-amber-500 to-red-600 hover:from-amber-600 hover:to-red-700 text-white shadow-lg shadow-red-600/20 border-0">
              Register Now
            </Button>
          </MotionDiv>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <MotionDiv
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-lg z-50 flex flex-col"
          >
            <div className="flex justify-between items-center p-6 bg-black">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-red-600 bg-clip-text text-transparent">
                Sfincione Fest
              </h2>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMobileMenuOpen(false)}
                className="text-white hover:bg-white/10"
              >
                <X size={24} />
              </Button>
            </div>
            <div className="flex flex-col items-center justify-center flex-1 space-y-8 text-center bg-black">
              {[
                { name: "About", href: "#about" },
                { name: "Schedule", href: "#schedule" },
                { name: "Venues", href: "#venues" },
                { name: "Competitions", href: "#competitions" },
                { name: "Presenters", href: "#presenters" },
                { name: "Location", href: "#location" },
                { name: "Contact", href: "#contact" },
              ].map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-2xl font-medium text-white hover:text-amber-300 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <Button className="mt-8 bg-gradient-to-r from-amber-500 to-red-600 hover:from-amber-600 hover:to-red-700 text-white text-lg px-8 py-6 shadow-lg shadow-red-600/20 border-0">
                Register Now
              </Button>
            </div>
          </MotionDiv>
        )}
      </header>

      {/* Hero Carousel */}
      <div className="relative overflow-hidden h-[100vh] min-h-[600px]">
        <Carousel
          className="w-full h-full"
          selectedIndex={activeIndex}
          setSelectedIndex={setActiveIndex}
        >
          <CarouselContent className="h-full">
            {carouselImages.map((image, index) => (
              <CarouselItem key={index} className="h-full">
                <div className="relative h-full w-full">
                  <MotionImg
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                    initial={{ scale: 1.1, opacity: 0.8 }}
                    animate={{
                      scale: activeIndex === index ? 1 : 1.1,
                      opacity: activeIndex === index ? 1 : 0.8,
                    }}
                    transition={{ duration: 6, ease: "easeOut" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent flex flex-col justify-center p-8 md:p-16 pt-32">
                    <MotionDiv
                      className="max-w-4xl mx-auto text-center"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                    >
                      <MotionH2
                        className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-amber-300 to-red-500 bg-clip-text text-transparent drop-shadow-lg leading-tight"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                      >
                        Celebrate the Authentic Taste of Sicily
                      </MotionH2>
                      <MotionP
                        className="text-base sm:text-xl md:text-2xl text-white/90 mb-6 sm:mb-10 max-w-3xl mx-auto px-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                      >
                        {image.caption}
                      </MotionP>
                      <MotionDiv
                        className="flex flex-col md:flex-row justify-center gap-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                      >
                        <Button className="bg-gradient-to-r from-amber-500 to-red-600 hover:from-amber-600 hover:to-red-700 text-white text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 shadow-lg shadow-red-600/20 border-0 rounded-full w-full sm:w-auto">
                          Get Tickets
                        </Button>
                        <Button
                          variant="outline"
                          className="bg-white/10 backdrop-blur-md text-white border-white/30 hover:bg-white/20 hover:border-white text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 rounded-full w-full sm:w-auto"
                        >
                          Learn More
                        </Button>
                      </MotionDiv>
                    </MotionDiv>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-black/30 backdrop-blur-md hover:bg-black/50 text-white border-white/20 h-10 w-10 sm:h-12 sm:w-12 rounded-full" />
          <CarouselNext className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-black/30 backdrop-blur-md hover:bg-black/50 text-white border-white/20 h-10 w-10 sm:h-12 sm:w-12 rounded-full" />
          <div className="absolute bottom-16 sm:bottom-8 left-1/2 -translate-x-1/2 flex space-x-2 sm:space-x-3">
            {carouselImages.map((_, index) => (
              <MotionButton
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === activeIndex ? "bg-amber-400 w-8" : "bg-white/50"}`}
                aria-label={`Go to slide ${index + 1}`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>

          {/* Scroll Down Indicator */}
          <MotionDiv
            className="absolute bottom-4 sm:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/70 cursor-pointer"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 1,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            onClick={() =>
              document
                .getElementById("about")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            <span className="text-xs sm:text-sm mb-1 sm:mb-2">Scroll Down</span>
            <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
              <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-white/70 rounded-full animate-bounce"></div>
            </div>
          </MotionDiv>
        </Carousel>
      </div>

      {/* About Section */}
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
                is an annual celebration dedicated to Sicily's beloved street
                food, the Sfincione di Bagheria. This three-day festival brings
                together bakers, chefs, food enthusiasts, and tourists from
                across Italy and beyond.
              </p>
              <p className="text-base sm:text-lg mb-6 text-white/90">
                <span className="font-bold text-amber-400">
                  Sfincione di Bagheria
                </span>{" "}
                is a traditional Sicilian delicacy - a thick, spongy pizza
                topped with tomatoes, onions, anchovies, and caciocavallo
                cheese, all sprinkled with breadcrumbs. What makes it special is
                the unique dough that's left to rise for hours, creating its
                distinctive texture.
              </p>
              <p className="text-base sm:text-lg mb-6 text-white/90">
                Our festival was established in 2015 by the Bagheria Cultural
                Association to preserve and promote this culinary tradition that
                dates back to the 17th century. Each year, we welcome over
                10,000 visitors who come to experience the authentic flavors of
                Sicily.
              </p>
              <p className="text-base sm:text-lg text-white/90">
                Join us for a weekend filled with cooking demonstrations,
                tastings, competitions, and cultural performances that celebrate
                not just the food, but the rich heritage and community spirit of
                Bagheria.
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

      {/* Event Highlights */}
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
            {[
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
            ].map((item, index) => (
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

      {/* Schedule Section */}
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

            {[
              {
                day: "Day 1",
                title: "Opening Ceremony",
                time: "10:00 AM - 8:00 PM",
                color: "red",
                events: [
                  {
                    time: "10:00 AM",
                    desc: "Opening speech and ribbon cutting",
                  },
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
                  {
                    time: "3:00 PM",
                    desc: "Cultural presentation on Sfincione history",
                  },
                  { time: "6:00 PM", desc: "Awards ceremony" },
                  { time: "8:00 PM", desc: "Celebration dinner and dancing" },
                ],
              },
            ].map((day, dayIndex) => (
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
                      <Clock size={16} className="mr-2 text-amber-400" />{" "}
                      {day.time}
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
                        <div
                          className={`min-w-[80px] sm:min-w-[120px] text-xs sm:text-sm font-mono text-${day.color}-400 mr-3 sm:mr-6`}
                        >
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

      {/* Entertainment Venues Section */}
      <section
        id="venues"
        className="py-24 bg-neutral-800 relative overflow-hidden"
      >
        {/* Background decorative elements */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1200&q=40')] bg-fixed bg-center bg-no-repeat bg-cover opacity-5"></div>

        <div className="container mx-auto px-4 relative z-10">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.2 }}
            className="mb-16 text-center"
          >
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-amber-300 to-red-500 bg-clip-text text-transparent inline-block">
              Entertainment Venues
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-amber-400 to-red-600 mx-auto rounded-full"></div>
          </MotionDiv>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
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
            ].map((venue, index) => (
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

      {/* Competitions Section */}
      <section
        id="competitions"
        className="py-24 bg-gradient-to-b from-neutral-900 to-neutral-800 relative overflow-hidden"
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
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-amber-300 to-red-500 bg-clip-text text-transparent inline-block">
              Festival Competitions
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-amber-400 to-red-600 mx-auto rounded-full"></div>
            <p className="text-white/70 mt-6 max-w-2xl mx-auto text-base sm:text-lg">
              Test your skills and taste in our exciting culinary competitions
              with amazing prizes
            </p>
          </MotionDiv>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
            {[
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
            ].map((competition, index) => (
              <MotionDiv
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-neutral-900/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl border border-white/5 group-hover:border-amber-500/30 transition-all duration-300 h-full flex flex-col">
                  <div className="relative overflow-hidden h-64">
                    <MotionImg
                      src={competition.image}
                      alt={competition.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      whileHover={{ scale: 1.05 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/50 to-transparent opacity-60"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {competition.title}
                      </h3>
                    </div>
                  </div>

                  <div className="p-6 flex-grow">
                    <p className="text-white/80 mb-6">
                      {competition.description}
                    </p>

                    <div className="space-y-3">
                      {competition.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-start">
                          <span className="text-amber-500 mr-2 text-lg">•</span>
                          <span className="text-white/70">{detail}</span>
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
            {[
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
            ].map((contest, index) => (
              <MotionDiv
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.05 * index }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <div className="bg-neutral-800/80 backdrop-blur-sm p-5 rounded-xl shadow-xl border border-white/5 group-hover:border-amber-500/20 transition-all duration-300 h-full flex flex-col">
                  <h3 className="text-xl font-bold text-amber-400 mb-2 group-hover:text-white transition-colors duration-300">
                    {contest.title}
                  </h3>
                  <p className="text-white/70 text-sm mb-4 flex-grow">
                    {contest.description}
                  </p>
                  <div className="flex justify-between items-center text-sm border-t border-white/10 pt-4 mt-2">
                    <div className="flex items-center text-white/60">
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
            <div className="bg-neutral-800/50 backdrop-blur-sm p-8 rounded-xl border border-amber-500/20 max-w-3xl mx-auto">
              <h3 className="text-xl font-bold text-white mb-4">
                How to Participate
              </h3>
              <p className="text-white/80 mb-6">
                Registration for all competitions is available at the festival
                information booth or online. Entry fees apply for professional
                categories, while amateur and children's competitions are free
                to enter with festival admission.
              </p>
              <Button className="bg-gradient-to-r from-amber-500 to-red-600 hover:from-amber-600 hover:to-red-700 text-white border-0 rounded-full px-8">
                Download Competition Rules
              </Button>
            </div>
          </MotionDiv>
        </div>
      </section>

      {/* Presenters & Artists Section */}
      <section
        id="presenters"
        className="py-24 bg-gradient-to-b from-neutral-800 to-neutral-900 relative overflow-hidden"
      >
        {/* Background decorative elements */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=1200&q=40')] bg-fixed bg-center bg-no-repeat bg-cover opacity-5"></div>
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-1/3 right-1/3 w-96 h-96 rounded-full bg-amber-500/10 blur-[100px]"></div>
          <div className="absolute bottom-1/3 left-1/3 w-96 h-96 rounded-full bg-red-600/10 blur-[100px]"></div>
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
              Presenters & Artists
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-amber-400 to-red-600 mx-auto rounded-full"></div>
            <p className="text-white/70 mt-6 max-w-2xl mx-auto text-base sm:text-lg">
              Meet the talented chefs, musicians, and performers who will make
              the Sfincione Fest an unforgettable experience
            </p>
          </MotionDiv>

          {/* Presenters Section */}
          <div className="mb-20">
            <MotionDiv
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-10 text-center"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-amber-400 inline-block relative">
                Featured Chefs & Presenters
                <div className="h-0.5 w-full bg-gradient-to-r from-amber-400/30 to-red-600/30 absolute bottom-0 left-0"></div>
              </h3>
            </MotionDiv>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {[
                {
                  name: "Marco Rossi",
                  role: "Master Chef & Host",
                  image:
                    "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&q=80",
                  description:
                    "Award-winning chef known for his innovative approach to traditional Sicilian cuisine.",
                  social: { instagram: "#", twitter: "#" },
                },
                {
                  name: "Sofia Bianchi",
                  role: "Food Historian",
                  image:
                    "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
                  description:
                    "Author and historian specializing in the culinary traditions of Sicily and Southern Italy.",
                  social: { instagram: "#", twitter: "#" },
                },
                {
                  name: "Antonio Marino",
                  role: "Sfincione Champion",
                  image:
                    "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
                  description:
                    "Three-time winner of the Sfincione competition and owner of Bagheria's most beloved bakery.",
                  social: { instagram: "#" },
                },
                {
                  name: "Giulia Esposito",
                  role: "Culinary Director",
                  image:
                    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
                  description:
                    "Responsible for curating the festival's food experiences and cooking demonstrations.",
                  social: { instagram: "#", twitter: "#" },
                },
              ].map((presenter, index) => (
                <MotionDiv
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  className="group"
                >
                  <div className="bg-neutral-900/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl border border-white/5 group-hover:border-amber-500/30 transition-all duration-300 h-full">
                    <div className="relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/50 to-transparent z-10 opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
                      <MotionImg
                        src={presenter.image}
                        alt={presenter.name}
                        className="w-full h-64 sm:h-72 object-cover object-center transition-transform duration-700 group-hover:scale-110"
                        whileHover={{ scale: 1.05 }}
                      />
                      <div className="absolute bottom-0 left-0 right-0 p-4 z-20 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <div className="flex space-x-2 justify-center">
                          {presenter.social.instagram && (
                            <Button
                              variant="ghost"
                              size="icon"
                              className="rounded-full bg-black/50 backdrop-blur-sm hover:bg-amber-500/80 text-white h-9 w-9"
                            >
                              <Instagram size={16} />
                            </Button>
                          )}
                          {presenter.social.twitter && (
                            <Button
                              variant="ghost"
                              size="icon"
                              className="rounded-full bg-black/50 backdrop-blur-sm hover:bg-amber-500/80 text-white h-9 w-9"
                            >
                              <Twitter size={16} />
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="p-5 text-center">
                      <h4 className="text-lg font-bold text-white mb-1">
                        {presenter.name}
                      </h4>
                      <p className="text-amber-400 text-sm mb-3">
                        {presenter.role}
                      </p>
                      <p className="text-white/70 text-sm">
                        {presenter.description}
                      </p>
                    </div>
                  </div>
                </MotionDiv>
              ))}
            </div>
          </div>

          {/* Artists Section */}
          <div>
            <MotionDiv
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-10 text-center"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-amber-400 inline-block relative">
                Featured Artists & Performers
                <div className="h-0.5 w-full bg-gradient-to-r from-amber-400/30 to-red-600/30 absolute bottom-0 left-0"></div>
              </h3>
            </MotionDiv>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  name: "I Cantori Siciliani",
                  type: "Folk Music Ensemble",
                  image:
                    "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=800&q=80",
                  description:
                    "Traditional Sicilian folk music group performing authentic songs that have been passed down through generations.",
                  performance: "Main Stage - Day 1, 4:00 PM",
                },
                {
                  name: "Balletto di Palermo",
                  type: "Dance Company",
                  image:
                    "https://images.unsplash.com/photo-1545128485-c400ce7b6892?w=800&q=80",
                  description:
                    "Contemporary dance company blending traditional Sicilian movements with modern choreography.",
                  performance: "Main Stage - Day 2, 2:00 PM",
                },
                {
                  name: "Maria Terranova",
                  type: "Opera Singer",
                  image:
                    "https://images.unsplash.com/photo-1549213783-8284d0336c4f?w=800&q=80",
                  description:
                    "Renowned soprano performing classic Sicilian arias and folk songs with a powerful, emotive voice.",
                  performance: "Main Stage - Day 1, 7:00 PM",
                },
                {
                  name: "Quartetto Mediterraneo",
                  type: "Jazz Quartet",
                  image:
                    "https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=800&q=80",
                  description:
                    "Fusion jazz ensemble incorporating traditional Sicilian melodies with contemporary jazz improvisation.",
                  performance: "Main Stage - Day 2, 8:00 PM",
                },
              ].map((artist, index) => (
                <MotionDiv
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="bg-neutral-900/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl border border-white/5 group-hover:border-amber-500/30 transition-all duration-300 h-full flex flex-col md:flex-row">
                    <div className="relative w-full md:w-2/5 overflow-hidden">
                      <MotionImg
                        src={artist.image}
                        alt={artist.name}
                        className="w-full h-48 md:h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                        whileHover={{ scale: 1.05 }}
                      />
                    </div>

                    <div className="p-5 md:p-6 flex flex-col justify-between md:w-3/5">
                      <div>
                        <h4 className="text-lg font-bold text-white mb-1">
                          {artist.name}
                        </h4>
                        <p className="text-amber-400 text-sm mb-3">
                          {artist.type}
                        </p>
                        <p className="text-white/70 text-sm mb-4">
                          {artist.description}
                        </p>
                      </div>

                      <div className="mt-auto">
                        <div className="flex items-center text-white/60 text-sm">
                          <CalendarIcon
                            size={16}
                            className="mr-2 text-amber-400"
                          />
                          <span>{artist.performance}</span>
                        </div>
                        <Button
                          variant="ghost"
                          className="mt-3 w-full justify-start text-amber-400 hover:text-amber-300 hover:bg-amber-500/10 px-3 py-1 h-auto text-sm"
                        >
                          View Full Performance Schedule
                        </Button>
                      </div>
                    </div>
                  </div>
                </MotionDiv>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section
        id="location"
        className="py-24 bg-neutral-900 relative overflow-hidden"
      >
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[url('https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=1200&q=30')] bg-cover bg-center opacity-10"></div>

        <div className="container mx-auto px-4 relative z-10">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.2 }}
            className="mb-16 text-center"
          >
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-amber-300 to-red-500 bg-clip-text text-transparent inline-block">
              Festival Location
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-amber-400 to-red-600 mx-auto rounded-full"></div>
          </MotionDiv>

          <div className="grid md:grid-cols-2 gap-10 sm:gap-16 items-center">
            <MotionDiv
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, amount: 0.2 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-amber-500/20 to-red-600/20 rounded-xl blur-xl opacity-70"></div>
              <div className="relative overflow-hidden rounded-xl shadow-2xl border border-amber-500/20">
                <MotionImg
                  src="https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=800&q=80"
                  alt="Bagheria, Sicily"
                  className="w-full h-auto"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 1 }}
                />
              </div>
            </MotionDiv>

            <MotionDiv
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="bg-neutral-800/80 backdrop-blur-sm p-5 sm:p-8 rounded-xl shadow-2xl border border-amber-500/10">
                <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 flex items-center text-white">
                  <MapPinIcon size={28} className="mr-3 text-amber-400" />
                  Piazza Centrale, Bagheria
                </h3>
                <p className="text-base sm:text-lg mb-4 sm:mb-6 text-white/80">
                  Located in the heart of Bagheria, our festival venue is easily
                  accessible by public transportation and has ample parking
                  nearby.
                </p>
                <p className="text-base sm:text-lg mb-4 sm:mb-8 text-white/80">
                  The historic piazza provides the perfect backdrop for
                  celebrating the culinary traditions of Sicily.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-gradient-to-r from-amber-500 to-red-600 hover:from-amber-600 hover:to-red-700 text-white shadow-lg shadow-red-600/20 border-0 rounded-full px-8">
                    Get Directions
                  </Button>
                  <Button
                    variant="outline"
                    className="border-amber-500/50 text-amber-400 hover:bg-amber-500/10 rounded-full px-8"
                  >
                    View Map
                  </Button>
                </div>

                <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-neutral-900/80 p-4 rounded-lg">
                    <h4 className="text-amber-400 font-medium mb-2">
                      Opening Hours
                    </h4>
                    <p className="text-white/70">10:00 AM - 10:00 PM</p>
                  </div>
                  <div className="bg-neutral-900/80 p-4 rounded-lg">
                    <h4 className="text-amber-400 font-medium mb-2">Contact</h4>
                    <p className="text-white/70">+39 123 456 7890</p>
                  </div>
                </div>
              </div>
            </MotionDiv>
          </div>
        </div>
      </section>

      {/* Registration Section */}
      <section className="py-24 bg-gradient-to-b from-neutral-900 via-red-900/30 to-black relative overflow-hidden">
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
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 text-white">
              Join Us at{" "}
              <span className="bg-gradient-to-r from-amber-300 to-red-500 bg-clip-text text-transparent">
                Sfincione Fest!
              </span>
            </h2>
            <p className="text-base sm:text-xl mb-6 sm:mb-10 max-w-3xl mx-auto text-white/80 px-2">
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
              {[
                {
                  title: "Early Bird",
                  price: "€25",
                  features: [
                    "Full festival access",
                    "Welcome drink",
                    "Tasting tokens (5)",
                  ],
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
              ].map((ticket, index) => (
                <MotionDiv
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  className="group"
                >
                  <div className="bg-neutral-900/80 backdrop-blur-sm p-4 sm:p-6 rounded-xl shadow-xl border border-white/10 group-hover:border-amber-500/30 transition-all duration-300 h-full flex flex-col">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {ticket.title}
                    </h3>
                    <div className="text-3xl font-bold text-amber-400 mb-4">
                      {ticket.price}
                    </div>
                    <ul className="space-y-2 mb-6 flex-grow">
                      {ticket.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-center text-white/70"
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

      {/* Footer */}
      <footer
        id="contact"
        className="bg-black text-white pt-20 pb-10 relative overflow-hidden"
      >
        <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-amber-500 blur-[100px]"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-red-600 blur-[100px]"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="sm:col-span-2"
            >
              <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-amber-400 to-red-600 bg-clip-text text-transparent inline-block">
                Sfincione Fest
              </h3>
              <p className="text-white/70 mb-6 max-w-md">
                Celebrating the authentic flavors of Sicily's favorite street
                food. Join us for a weekend of culinary delights, cultural
                performances, and community celebration.
              </p>
              <div className="flex space-x-4">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-white/5 hover:bg-white/10 text-white"
                >
                  <Facebook size={20} />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-white/5 hover:bg-white/10 text-white"
                >
                  <Instagram size={20} />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-white/5 hover:bg-white/10 text-white"
                >
                  <Twitter size={20} />
                </Button>
              </div>
            </MotionDiv>

            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-6 text-white">Quick Links</h3>
              <ul className="space-y-3">
                {[
                  { name: "About", href: "#about" },
                  { name: "Schedule", href: "#schedule" },
                  { name: "Venues", href: "#venues" },
                  { name: "Competitions", href: "#competitions" },
                  { name: "Presenters", href: "#presenters" },
                  { name: "Location", href: "#location" },
                  { name: "Register", href: "#" },
                ].map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-white/70 hover:text-amber-400 transition-colors duration-300 flex items-center group"
                    >
                      <span className="w-0 h-0.5 bg-amber-400 mr-0 group-hover:w-2 group-hover:mr-2 transition-all duration-300"></span>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </MotionDiv>

            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-6 text-white">Contact Us</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <MapPinIcon
                    size={20}
                    className="mr-3 text-amber-400 mt-1 flex-shrink-0"
                  />
                  <span className="text-white/70">
                    Piazza Centrale, Bagheria, Sicily, Italy
                  </span>
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-3 text-amber-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="text-white/70">info@sfincionefest.com</span>
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-3 text-amber-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <span className="text-white/70">+39 123 456 7890</span>
                </li>
              </ul>
            </MotionDiv>
          </div>

          <div className="mt-10 sm:mt-16 pt-6 sm:pt-8 border-t border-white/10 text-center">
            <p className="text-white/50">
              &copy; {new Date().getFullYear()} Sfincione Fest. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
