import React from 'react';
import { Check } from 'lucide-react';

const REASONS = [
  "Brilliant Client Service",
  "Flexibility & Adaptibility",
  "We make it Personal",
  "We have expart in our team"
];

export default function WhyChooseUs() {
  return (
    <section id="about" className="px-6 py-24 mb-10 w-full bg-white">
      <div className="max-w-[1100px] mx-auto bg-[#FDF4F6] rounded-[2rem] lg:rounded-[3rem] p-8 md:p-14 lg:p-20 overflow-hidden relative">
        <div className="flex flex-col md:flex-row items-stretch gap-12 z-10 relative">
          
          {/* Text Content Block */}
          <div className="flex-1 flex flex-col justify-center items-start lg:pr-4">
            <h2 className="text-[32px] md:text-[40px] font-extrabold mb-8 text-[#0f0f0f] tracking-tight leading-[1.25]">
              Few Reasons Why you<br/>Choose us?
            </h2>
            <p className="text-[#3a3a3a] text-[14px] font-medium mb-12 leading-[1.7] max-w-[480px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do<br className="hidden lg:block"/>
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut<br className="hidden lg:block"/>
              enim ad minim veniam, quis nostrud exercitation
            </p>

            <ul className="flex flex-col gap-[1.125rem] mb-[3.25rem]">
              {REASONS.map((reason, idx) => (
                <li key={idx} className="flex items-center gap-4 text-[#1f1f1f] font-bold text-[14px]">
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

          {/* Right Image / Placeholder Block */}
          <div className="flex-1 w-full min-h-[400px] md:h-auto rounded-3xl overflow-hidden relative border border-black/5 bg-white flex items-center justify-center shadow-sm">
             <img src="https://placehold.co/600x600/f8f9fa/888888?text=Placeholder+Image" alt="Why Choose Us Graphic" className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-80 hover:opacity-100 transition-opacity duration-300" />
          </div>

        </div>
      </div>
    </section>
  );
}
