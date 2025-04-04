import React from "react";
import { MotionDiv } from "../components/ui/motion-div";
import { Button } from "../components/ui/button";
import { Facebook, Instagram, Twitter, MapPinIcon, UserIcon, PhoneIcon } from "lucide-react";

const quickLinks = [
  { name: "Chi Siamo", href: "#about" },
  { name: "Programma", href: "#schedule" },
  { name: "Presentatori", href: "#presenters" },
  { name: "Dove Siamo", href: "#location" },
];

const Footer: React.FC = () => {
  return (
    <footer
      id="contact"
      className="bg-white text-gray-800 pt-20 pb-10 relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
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
                  <a href="/" className="block">
         <img 
                src="/logo.png" // Usa la versione scura del logo
                alt="Cannolo Fest Logo"
                className="h-16 w-auto mb-4"
              />
              </a>
            <p className="text-gray-600 mb-6 max-w-md">
              Celebra i sapori autentici dello street food preferito della Sicilia. Unisciti a noi per un weekend di delizie culinarie, spettacoli culturali e festeggiamenti comunitari.
            </p>
            <div className="flex space-x-4">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-amber-600"
              >
                <Facebook size={20} />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-amber-600"
              >
                <Instagram size={20} />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-amber-600"
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
            <h3 className="text-xl font-bold mb-6 text-gray-800">Link Rapidi</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-600 hover:text-amber-600 transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-0 h-0.5 bg-amber-500 mr-0 group-hover:w-2 group-hover:mr-2 transition-all duration-300"></span>
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
            <h3 className="text-xl font-bold mb-6 text-gray-800">Contattaci</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPinIcon
                  size={20}
                  className="mr-3 text-amber-600 mt-1 flex-shrink-0"
                />
                <span className="text-gray-600">
                  Piazza Centrale, Piana degli Albanesi, Sicilia, Italia
                </span>
              </li>
              <li className="flex items-start">
                <UserIcon
                  size={20}
                  className="mr-3 text-amber-600 mt-1 flex-shrink-0"
                />
                <div className="text-gray-600">
                  <strong>ADALBERTO CATANZARO</strong><br />
                  Ceo & Marketing Manager<br />
                  <div className="flex items-center mt-1">
                    <PhoneIcon size={16} className="mr-1 text-amber-600" />
                    <span>+39 327 167 7871</span>
                  </div>
                </div>
              </li>
              <li className="flex items-start">
                <UserIcon
                  size={20}
                  className="mr-3 text-amber-600 mt-1 flex-shrink-0"
                />
                <div className="text-gray-600">
                  <strong>SALVO SCADUTO</strong><br />
                  Strategic Relationship<br />
                  <div className="flex items-center mt-1">
                    <PhoneIcon size={16} className="mr-1 text-amber-600" />
                    <span>+39 333 867 2394</span>
                  </div>
                </div>
              </li>
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-3 text-amber-600"
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
                <span className="text-gray-600">info@cannolofest.com</span>
              </li>
            </ul>
          </MotionDiv>
        </div>

        <div className="mt-10 sm:mt-16 pt-6 sm:pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-500">
            &copy; {new Date().getFullYear()} Cannolo Fest. Tutti i diritti riservati.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;