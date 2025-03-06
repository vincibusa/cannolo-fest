import React, { useState, useEffect } from "react";
import { Button } from "../components/ui/button";
import { Menu, X } from "lucide-react";
import { MotionDiv } from "../components/ui/motion-div";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Schedule", href: "#schedule" },
  { name: "Venues", href: "#venues" },
  { name: "Competitions", href: "#competitions" },
  { name: "Presenters", href: "#presenters" },
  { name: "Location", href: "#location" },
  { name: "Contact", href: "#contact" },
];

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const currentPosition = window.scrollY + window.innerHeight / 3;
      let currentSection = "";
      navLinks.forEach(({ href }) => {
        const sectionId = href.replace("#", "");
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (currentPosition >= offsetTop && currentPosition <= offsetTop + offsetHeight) {
            currentSection = sectionId;
          }
        }
      });
      if (currentSection !== activeSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    setTimeout(handleScroll, 100);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]);

  return (
    <header
      className={cn(
        "fixed w-full z-50 transition-all duration-300",
        scrolled
          ? "bg-white/80 backdrop-blur-md py-3 shadow-lg"
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <MotionDiv
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-amber-500 to-red-600 bg-clip-text text-transparent">
            Sfincione Fest
          </h1>
        </MotionDiv>

        <nav className="hidden md:flex space-x-8">
          {navLinks.map((item, index) => {
            const isActive = activeSection === item.href.replace("#", "");
            return (
              <MotionDiv
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
              >
                <a
                  href={item.href}
                  className={cn(
                    "relative font-medium transition-colors duration-300 group",
                    scrolled
                      ? isActive
                        ? "text-amber-600"
                        : "text-gray-700 hover:text-amber-600"
                      : isActive
                      ? "text-amber-600"
                      : "text-white hover:text-amber-600"
                  )}
                >
                  {item.name}
                  <span
                  className={cn(
                      "absolute -bottom-1 left-0 h-0.5 bg-amber-500 transition-all duration-300",
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                  )}
                  ></span>
                </a>
              </MotionDiv>
            );
          })}
        </nav>

        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(true)}
            className={cn(
              scrolled
                ? "text-gray-700 hover:bg-gray-100"
                : "text-black hover:bg-black/10"
      )}
          >
            <Menu size={24} />
          </Button>
        </div>

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

      {mobileMenuOpen && (
        <MotionDiv
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "100%" }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 w-screen h-screen bg-white z-[100] flex flex-col overflow-hidden"
        >
          <div className="flex justify-between items-center p-6">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-amber-500 to-red-600 bg-clip-text text-transparent">
              Sfincione Fest
            </h2>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(false)}
              className="text-gray-700 hover:bg-gray-100"
            >
              <X size={24} />
            </Button>
          </div>
          <div className="flex flex-col items-center justify-center flex-1 space-y-8 text-center p-4">
            {navLinks.map((item) => {
              const isActive = activeSection === item.href.replace("#", "");
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "text-2xl font-medium transition-colors",
                    isActive ? "text-amber-600" : "text-gray-700 hover:text-amber-600"
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
  );
            })}
            <Button className="mt-8 bg-gradient-to-r from-amber-500 to-red-600 hover:from-amber-600 hover:to-red-700 text-white text-lg px-8 py-6 shadow-lg shadow-red-600/20 border-0">
              Register Now
            </Button>
          </div>
        </MotionDiv>
      )}
    </header>
  );
};

export default Header;