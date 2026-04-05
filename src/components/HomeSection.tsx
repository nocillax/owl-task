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
const TRUSTED_LOGOS = [
  { name: "Airbnb", src: "/logos/airbnb-logo2.png" },
  { name: "Booking", src: "/logos/booking.com-logo2.png" },
  { name: "Vrbo", src: "/logos/vrbo-logo2.png" },
  { name: "Tripadvisor", src: "/logos/tripadvisor-logo2.png" },
  { name: "Agoda", src: "/logos/agoda-logo2.png" },
  { name: "Expedia", src: "/logos/expedia-logo2.png" },
  { name: "Home To Go", src: "/logos/hometogo-logo2.png" },
];

export default function HomeSection() {
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
    <div id="home" className="relative w-full bg-primary/5">
      {/* Background and Blurs */}
      <div
        className="absolute inset-0 z-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, #000 1px, transparent 1px),
            linear-gradient(to bottom, #000 1px, transparent 1px)
          `,
          backgroundSize: "95px 95px",
          backgroundPosition: "center top",
        }}
      />
      <div className="absolute top-10 left-1/2 -translate-x-1/2 z-0 pointer-events-none">
        <div className="w-screen h-96 md:w-[64rem] bg-background blur-[100px] md:blur-[120px] rounded-full" />
      </div>

      {/* --- HEADER --- */}
      <header className="fixed top-0 left-0 w-full z-50 bg-white border-b border-black/5 shadow-sm">
        <div className="flex items-center justify-between px-6 py-4 md:px-12 w-full max-w-screen-xl mx-auto">
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
                className={`text-base font-bold transition-colors pb-1 ${activeLink === link.label
                  ? "text-primary border-b-[3px] border-primary"
                  : "text-foreground/80 hover:text-primary"
                  }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <button className="flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded font-bold text-sm tracking-wide hover:opacity-90 transition-opacity shadow-sm">
            Schedule A Meeting &rarr;
          </button>
        </div>
      </header>

      {/* --- HERO --- */}
      <section className="relative w-full overflow-hidden flex flex-col items-center justify-center text-center px-6 pt-36 md:pt-48 pb-20 md:pb-32 z-10 min-h-[500px]">
        {/* Floating Elements (Responsive placement & sizing) */}
        <div className="absolute inset-0 z-0 pointer-events-none w-full max-w-screen-xl mx-auto overflow-hidden hidden sm:block">
          {/* Top Left (Airbnb) */}
          <div className="absolute top-[10%] md:top-[12%] lg:top-[18%] left-[5%] md:left-[10%] lg:left-[15%] w-16 h-16 md:w-20 md:h-20 lg:w-28 lg:h-28 rounded-2xl lg:rounded-3xl overflow-hidden ">
            <img
              src="/logos/airbnb-logo.png"
              alt="Airbnb"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Bottom Left (Vrbo) */}
          <div className="absolute top-[60%] md:top-[65%] lg:bottom-[20%] lg:top-auto left-[10%] md:left-[15%] lg:left-[22%] w-12 h-12 md:w-14 md:h-14 lg:w-20 lg:h-20 rounded-xl lg:rounded-2xl overflow-hidden ">
            <img
              src="/logos/vrbo-logo.png"
              alt="Vrbo"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Top Right (Booking) */}
          <div className="absolute top-[18%] md:top-[22%] lg:top-[26%] right-[5%] md:right-[15%] lg:right-[18%] w-14 h-14 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-2xl lg:rounded-3xl overflow-hidden ">
            <img
              src="/logos/booking.com-logo.png"
              alt="Booking.com"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Bottom Right (Tripadvisor) */}
          <div className="absolute top-[65%] md:top-[70%] lg:bottom-[28%] lg:top-auto right-[15%] md:right-[20%] lg:right-[20%] w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-xl lg:rounded-2xl overflow-hidden ">
            <img
              src="/logos/tripadvisor-logo.png"
              alt="Tripadvisor"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Small floating dots with responsive adjustments mapped natively */}
          <div className="absolute top-[28%] left-[4%] lg:left-[8%] w-2 h-2 lg:w-3 lg:h-3 rounded-full bg-[#5C45B3] shadow-md" />
          <div className="absolute top-[50%] lg:top-[58%] left-[10%] lg:left-[15%] w-3 h-3 lg:w-4 lg:h-4 rounded-full bg-[#B24A4B] shadow-md" />
          <div className="absolute top-[75%] lg:bottom-[28%] lg:top-auto left-[6%] lg:left-[10%] w-1 h-1 lg:w-1.5 lg:h-1.5 rounded-full bg-[#A8A344] shadow-md" />
          <div className="absolute top-[15%] lg:top-[20%] right-[30%] lg:right-[50%] w-2 h-2 lg:w-3 lg:h-3 rounded-full bg-[#6EB88F] shadow-md" />
          <div className="absolute top-[80%] lg:bottom-[20%] lg:top-auto right-[35%] lg:right-[48%] w-2 h-2 lg:w-3 lg:h-3 rounded-full bg-[#75B2D0] shadow-md opacity-80" />
          <div className="absolute top-[35%] lg:top-[40%] right-[10%] lg:right-[15%] w-1.5 h-1.5 lg:w-2 lg:h-2 rounded-full bg-[#B6AC58] shadow-md" />
          <div className="absolute top-[70%] lg:bottom-[35%] lg:top-auto right-[5%] lg:right-[10%] w-1 h-1 lg:w-1.5 lg:h-1.5 rounded-full bg-[#18234D] shadow-md" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 w-full max-w-4xl flex flex-col items-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl text-[#0f0f0f] font-extrabold tracking-tight leading-tight mb-4 md:mb-6">
            Airbnb Assistants For <br /> <span className="font-medium text-2xl sm:text-3xl lg:text-4xl">Property Management</span>
          </h1>
          <p className="text-[#3a3a3a] text-sm sm:text-base max-w-2xl mb-6 md:mb-8 font-medium leading-relaxed px-4 md:px-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore
            <br className="hidden md:block" />
            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut
            <br className="hidden md:block" />
            aliquip ex ea commodo consequat.
          </p>

          <div className="flex flex-col items-center gap-5 mt-2 md:mt-4">
            <button className="flex items-center justify-center gap-2 bg-primary text-primary-foreground px-7 py-3 rounded font-bold text-base hover:opacity-90 transition-opacity shadow-sm">
              Schedule A Meeting &rarr;
            </button>
            <a
              href="#pricing"
              className="text-[#0f0f0f] text-base font-bold underline underline-offset-[5px] decoration-2 hover:text-primary transition-colors"
            >
              See Pricing
            </a>
          </div>
        </div>
      </section>

      {/* --- TRUSTED BY --- */}
      <section className="flex flex-col w-full relative z-10 hidden md:block mt-auto pb-4">
        <div className="w-full py-6 md:py-8 flex items-center justify-center">
          <p className="text-base md:text-lg font-bold text-[#1f1f1f]">
            Trusted by leaders in 50+ industries
          </p>
        </div>
        <div className="w-full bg-black/5 py-6 md:py-8 px-6">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-10 lg:gap-20 w-full max-w-7xl mx-auto">
            {TRUSTED_LOGOS.map((logo) => (
              <div
                key={logo.name}
                className="h-6 md:h-8 lg:h-10 shrink-0 flex items-center justify-center"
              >
                {" "}
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="h-full object-contain mix-blend-multiply opacity-80 hover:opacity-100 transition-opacity cursor-pointer"
                />{" "}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
