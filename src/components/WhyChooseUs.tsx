import React from "react";
import { Check } from "lucide-react";
import { FeatureIcon } from "./ui/FeatureIcon";

const REASONS = [
  "Brilliant Client Service",
  "Flexibility & Adaptibility",
  "We make it Personal",
  "We have expart in our team",
];

export default function WhyChooseUs() {
  return (
    <section id="about" className="px-6 py-2 mb-10 w-full bg-white">
      <div className="max-w-6xl mx-auto bg-[#FDF4F6] rounded-4xl lg:rounded-[3rem] overflow-hidden relative">
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-between z-10 relative">
          {/* Mobile Title Block */}
          <div className="lg:hidden w-full px-8 pt-10 pb-0 flex flex-col items-center text-center sm:items-start sm:text-left">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0f0f0f] tracking-tight leading-tight">
              Few Reasons Why you
              <br />
              Choose us?
            </h2>
          </div>

          {/* Text Content Block (Left side on Desktop, Bottom on Mobile) */}
          <div className="order-3 lg:order-0 flex-1 flex flex-col justify-center items-center sm:items-start p-8 md:p-12 lg:p-18 lg:pr-8 z-10 w-full">
            <h2 className="hidden lg:block text-3xl md:text-4xl font-bold mb-6 text-text-main tracking-tight leading-tight">
              Few Reasons Why you Choose us?
            </h2>
            <p className="text-text-main text-sm font-semibold mb-7 max-w-sm text-center sm:text-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation
            </p>

            <ul className="flex flex-col gap-3.5 mb-11 w-full sm:w-auto">
              {REASONS.map((reason, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-2 text-[#1f1f1f] font-bold text-sm"
                >
                  <FeatureIcon type="tick" cardSelected={false} />
                  {reason}
                </li>
              ))}
            </ul>

            <button className="flex items-center justify-center gap-2 bg-primary text-primary-foreground px-5.5 py-4.5 rounded font-bold text-sm hover:opacity-90 transition-opacity shadow-sm">
              Schedule A Meeting &rarr;
            </button>
          </div>

          {/* Right Image Block (Center on Mobile, Right on Desktop) */}
          <div className="order-2 lg:order-0 flex-1 w-full flex items-center justify-center lg:justify-end pt-10 lg:py-12 lg:pr-12 pointer-events-none z-0">
            <div className="relative w-[90%] max-w-100 lg:max-w-none lg:w-[125%] shrink-0">
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
