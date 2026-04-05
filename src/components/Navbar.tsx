"use client";

import React, { useState, useEffect } from "react";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "Blog", href: "#tools" },
  { label: "Resources", href: "#faq" },
];

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("Home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isClickScrollingRef = React.useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      // Don't auto-update active tab if we are currently mid-scroll from a manual click!
      if (isClickScrollingRef.current) return;

      const sections = NAV_LINKS.map((link) => link.href.substring(1));
      let current = "";
      let closestTop = -Infinity; // Mathematically track absolute proximity

      for (const section of sections) {
        if (!section || section.includes("/")) continue;
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          // Find the section that has crossed the threshold (<= 120) 
          // AND is physically the closest one to the threshold (largest negative)
          if (rect.top <= 120 && rect.top > closestTop) {
            closestTop = rect.top;
            current = section;
          }
        }
      }
      if (current) {
        const match = NAV_LINKS.find((l) => l.href === `#${current}`);
        if (match && match.label !== activeLink) setActiveLink(match.label);
      } else if (window.scrollY < 100) {
        setActiveLink("Home");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeLink]);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-primary/10 shadow-[0_15px_40px_-15px_rgba(250,196,210,0.63)]">
      <div className="flex items-center justify-between px-6 py-4 md:px-12 w-full max-w-7xl mx-auto">
        <div className="w-24 md:w-32 h-11 shrink-0">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
            alt="Google Logo"
            className="w-full h-full object-contain"
          />
        </div>

        <nav className="hidden lg:flex items-center gap-8 pl-10">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => {
                setActiveLink(link.label);
                isClickScrollingRef.current = true;
                setTimeout(() => {
                  isClickScrollingRef.current = false;
                }, 1000); // lock scroll-spy for 1s while smooth scrolling completes
              }}
              className={`text-base font-regular transition-colors pb-1 ${
                activeLink === link.label
                  ? "text-primary border-b-[3px] border-primary font-bold"
                  : "text-foreground/80 hover:text-primary"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button className="hidden lg:flex items-center justify-center gap-2 bg-primary text-primary-foreground px-5.5 py-4.5 rounded font-bold text-sm hover:opacity-90 transition-opacity shadow-sm">
          Schedule A Meeting &rarr;
        </button>

        {/* Mobile Menu Toggle Button */}
        <button
          className="lg:hidden p-2 text-[#101828] focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown Panel */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-primary/10 shadow-lg flex flex-col items-center py-6 px-6 gap-6 z-50">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => {
                setActiveLink(link.label);
                setIsMobileMenuOpen(false);
                isClickScrollingRef.current = true;
                setTimeout(() => {
                  isClickScrollingRef.current = false;
                }, 1000);
              }}
              className={`text-lg transition-colors pb-1 ${
                activeLink === link.label
                  ? "text-primary border-b-[3px] border-primary font-bold"
                  : "text-foreground/80 font-medium hover:text-primary"
              }`}
            >
              {link.label}
            </a>
          ))}
          <button className="w-full mt-4 flex justify-center items-center gap-2 bg-primary text-primary-foreground px-5.5 py-4.5 rounded font-bold text-base hover:opacity-90 transition-opacity shadow-sm">
            Schedule A Meeting
          </button>
        </div>
      )}
    </header>
  );
}
