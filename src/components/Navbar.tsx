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

  useEffect(() => {
    const handleScroll = () => {
      const sections = NAV_LINKS.map((link) => link.href.substring(1));
      let current = "";
      for (const section of sections) {
        if (!section || section.includes("/")) continue;
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
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
    <header className="fixed top-0 left-0 w-full z-50 bg-white border-b border-black/5 shadow-sm">
      <div className="flex items-center justify-between px-6 py-4 md:px-12 w-full max-w-7xl mx-auto">
        <div className="w-24 md:w-32 h-8 shrink-0">
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
              onClick={() => setActiveLink(link.label)}
              className={`text-base font-bold transition-colors pb-1 ${
                activeLink === link.label
                  ? "text-primary border-b-[3px] border-primary"
                  : "text-foreground/80 hover:text-primary"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button className="flex items-center justify-center gap-2 bg-primary text-primary-foreground px-5.5 py-4.5 rounded font-bold text-sm hover:opacity-90 transition-opacity shadow-sm">
          Schedule A Meeting &rarr;
        </button>
      </div>
    </header>
  );
}
