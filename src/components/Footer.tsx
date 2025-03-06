// src/components/Footer.tsx
import React from "react";
import { MotionDiv } from "../components/ui/motion-div";
import { Button } from "../components/ui/button";
import { Facebook, Instagram, Twitter, MapPinIcon } from "lucide-react";

const quickLinks = [
  { name: "About", href: "#about" },
  { name: "Schedule", href: "#schedule" },
  { name: "Venues", href: "#venues" },
  { name: "Competitions", href: "#competitions" },
  { name: "Presenters", href: "#presenters" },
  { name: "Location", href: "#location" },
  { name: "Register", href: "#" },
];

const Footer: React.FC = () => {
  return (
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
              Celebrating the authentic flavors of Sicily's favorite street food. Join us for a weekend of culinary delights, cultural performances, and community celebration.
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
              {quickLinks.map((link) => (
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
            &copy; {new Date().getFullYear()} Sfincione Fest. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;