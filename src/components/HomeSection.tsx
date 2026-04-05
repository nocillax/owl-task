"use client";

import React, { useState, useEffect } from "react";

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
  return (
    <div id="home" className="relative w-full">
      {/* Background and Blurs */}
      <div
        // [ADJUST GRID HEIGHT] Adjust the 'h-[85%]' below to control exactly how far down the page the grid extends!
        className="absolute top-0 left-0 w-full h-[73.5%] z-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, #000 1px, transparent 1px),
            linear-gradient(to bottom, #000 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
          backgroundPosition: "center top",
        }}
      />
      {/* [ADJUST BLUR RADIUS] 
           1. Change 'blur-[120px]' to 'blur-[150px]' or higher to spread the blur further.
           2. Change 'w-full' and 'h-[400px]' to make the actual glowing ellipse physically larger.
        */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 z-0 pointer-events-none flex justify-center w-full">
        <div className="w-[120%] md:w-6xl h-[700px] bg-white blur-[120px] md:blur-[140px] rounded-full" />
      </div>

      {/* --- HERO --- */}
      <section className="relative w-full overflow-hidden flex flex-col items-center justify-center text-center px-6 pt-36 md:pt-48 pb-20 md:pb-32 z-10 min-h-125">
        {/* Floating Elements (Responsive placement & sizing) */}
        <div className="absolute inset-0 z-0 pointer-events-none w-full max-w-7xl mx-auto overflow-hidden hidden sm:block">
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
          <div className="absolute top-[28%] left-[4%] lg:left-[8%] w-2 h-2 lg:w-3 lg:h-3 rounded-full bg-[#635BFF] shadow-md" />
          <div className="absolute top-[50%] lg:top-[58%] left-[10%] lg:left-[15%] w-3 h-3 lg:w-4 lg:h-4 rounded-full bg-[#FF5A5F] shadow-md" />
          <div className="absolute top-[75%] lg:bottom-[28%] lg:top-auto left-[6%] lg:left-[10%] w-1.5 h-1.5 lg:w-2 lg:h-2 rounded-full bg-[#cec054] shadow-md" />
          <div className="absolute top-[15%] lg:top-[20%] right-[30%] lg:right-[50%] w-2 h-2 lg:w-3 lg:h-3 rounded-full bg-[#34E0A1] shadow-md" />
          <div className="absolute top-[80%] lg:bottom-[10%] lg:top-auto right-[35%] lg:right-[48%] w-2 h-2 lg:w-3 lg:h-3 rounded-full bg-[#61d2d6] shadow-md opacity-80" />
          <div className="absolute top-[35%] lg:top-[40%] right-[10%] lg:right-[15%] w-1.5 h-1.5 lg:w-2 lg:h-2 rounded-full bg-[#cec054] shadow-md" />
          <div className="absolute top-[70%] lg:bottom-[35%] lg:top-auto right-[5%] lg:right-[10%] w-1.5 h-1.5 lg:w-2 lg:h-2 rounded-full bg-[#0C3B7C] shadow-md" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 w-full max-w-4xl flex flex-col items-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl text-main font-bold tracking-tight leading-tight mb-4 md:mb-6">
            Airbnb Assistants For <br />{" "}
            <span className="font-medium text-2xl sm:text-3xl lg:text-4xl">
              Property Management
            </span>
          </h1>
          <p className="text-main text-sm sm:text-base max-w-3xl mb-6 md:mb-8 font-medium px-4 md:px-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>

          <div className="flex flex-col items-center gap-5 mt-2 md:mt-4">
            <button className="flex items-center justify-center gap-2 bg-primary text-primary-foreground px-5.5 py-4.5 rounded font-bold text-sm hover:opacity-90 transition-opacity shadow-sm">
              Schedule A Meeting &rarr;
            </button>
            <a
              href="#pricing"
              className="text-main text-base font-medium underline hover:text-primary transition-colors"
            >
              See Pricing
            </a>
          </div>
        </div>
      </section>

      {/* --- TRUSTED BY --- */}
      <section className="flex flex-col w-full relative z-10 md:block mt-auto">
        <div className="w-full py-6 md:py-8 flex items-center justify-center">
          <p className="text-xl font-bold text-main">
            Trusted by leaders in 50+ industries
          </p>
        </div>
        <div className="w-full bg-[#F6F6F6] py-4 md:py-5 px-6">
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 lg:gap-15 w-full max-w-7xl mx-auto">
            {TRUSTED_LOGOS.map((logo) => (
              <div
                key={logo.name}
                className="h-4 md:h-6 lg:h-8 shrink-0 flex items-center justify-center"
              >
                {" "}
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="h-full object-contain"
                />{" "}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
