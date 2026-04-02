import React from "react";
import { Check } from "lucide-react";

const REASONS = [
  "Brilliant Client Service",
  "Flexibility & Adaptibility",
  "We make it Personal",
  "We have expart in our team",
];

export default function WhyChooseUs() {
  return (
    <section id="about" className="px-6 py-24 mb-10 w-full bg-white">
      <div className="max-w-[1150px] mx-auto bg-[#FDF4F6] rounded-[2rem] lg:rounded-[3rem] overflow-hidden relative">
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-between z-10 relative">

          {/* Mobile Title Block */}
          <div className="lg:hidden w-full px-8 pt-10 pb-0 flex flex-col items-center text-center sm:items-start sm:text-left">
            <h2 className="text-[32px] md:text-[38px] font-extrabold text-[#0f0f0f] tracking-tight leading-[1.25]">
              Few Reasons Why you
              <br />
              Choose us?
            </h2>
          </div>

          {/* Text Content Block (Left side on Desktop, Bottom on Mobile) */}
          <div className="order-3 lg:order-none flex-1 flex flex-col justify-center items-center sm:items-start p-8 md:p-12 lg:p-[4.5rem] lg:pr-8 z-10 w-full">
            <h2 className="hidden lg:block text-[32px] md:text-[40px] font-extrabold mb-8 text-[#0f0f0f] tracking-tight leading-[1.25]">
              Few Reasons Why you
              <br />
              Choose us?
            </h2>
            <p className="text-[#3a3a3a] text-[14px] font-medium mb-12 leading-[1.7] max-w-[480px] text-center sm:text-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              <br className="hidden lg:block" />
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              <br className="hidden lg:block" />
              enim ad minim veniam, quis nostrud exercitation
            </p>

            <ul className="flex flex-col gap-[1.125rem] mb-[3.25rem] w-full sm:w-auto">
              {REASONS.map((reason, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-4 text-[#1f1f1f] font-bold text-[14px]"
                >
                  <div className="flex items-center justify-center w-[22px] h-[22px] rounded-full bg-[#FFD6E0] text-primary shrink-0 transition-transform hover:scale-110">
                    <Check size={14} strokeWidth={3} />
                  </div>
                  {reason}
                </li>
              ))}
            </ul>

            <button className="flex items-center gap-2 bg-primary text-white border-none rounded-[4px] px-8 py-3.5 font-bold text-[14px] hover:opacity-90 transition-opacity shadow-sm tracking-wide">
              Schedule A Meeting &rarr;
            </button>
          </div>

          {/* Right Image Block (Center on Mobile, Right on Desktop) */}
          <div className="order-2 lg:order-none flex-1 w-full flex items-center justify-center lg:justify-end py-10 lg:py-12 lg:pr-12 pointer-events-none z-0">
            {/* 
              TO RESIZE THE IMAGE PROPORTIONALLY IN DESKTOP:
              Adjust the 'lg:w-[115%]' value below!
              - To make it bigger: Change it to 'lg:w-[125%]' or 'lg:w-[130%]'
              - To make it smaller: Change it to 'lg:w-[100%]' or 'lg:w-[90%]'
            */}
            <div className="relative w-[90%] max-w-[400px] lg:max-w-none lg:w-[125%] shrink-0">
              <img
                src="/logos/why-choose-us.png"
                alt="Why Choose Us Graphic"
                className="w-full h-auto object-contain object-center"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
