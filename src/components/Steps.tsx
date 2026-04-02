import React from "react";

const STEPS = [
  {
    num: "01",
    text: "Add requirements\n& sign up today",
    img: "/logos/step1.png",
  },
  {
    num: "02",
    text: "Connect with your CSM &\nonboarding team",
    img: "/logos/step2.png",
  },
  {
    num: "03",
    text: "Meet your STR\nAssistant next week",
    img: "/logos/step3.png",
  },
];

export default function Steps() {
  return (
    <section className="px-6 py-24 bg-white w-full">
      <div className="max-w-[950px] mx-auto flex flex-col items-center">
        <h2 className="text-[32px] md:text-[36px] font-extrabold mb-6 text-[#1f1f1f] tracking-tight">
          Getting Started is <span className="text-primary">Easy</span>
        </h2>
        <p className="text-[#3a3a3a] text-center max-w-[720px] mb-24 text-[13px] md:text-[14px] font-medium leading-[1.6]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore
          <br className="hidden md:block" /> magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
          ea commodo
          <br className="hidden md:block" /> consequat.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-16 sm:gap-8 md:gap-14 w-full px-4">
          {STEPS.map((step) => (
            <div key={step.num} className="flex flex-col items-center">
              {/* Card with overlapping badge */}
              <div className="relative w-full aspect-[4/3] bg-white border border-primary/20 rounded-[1.25rem] flex items-center justify-center mb-8 hover:shadow-[0_10px_30px_rgba(227,59,101,0.08)] transition-all">
                {/* Badge layout positioned exactly over the top-left border corner */}
                <div className="absolute -top-[24px] -left-[24px] w-[50px] h-[50px] bg-white border-[2.5px] border-primary text-[#1f1f1f] rounded-full flex items-center justify-center font-bold text-[19px]">
                  {step.num}
                </div>
                {/* Icon Placeholder */}
                <div className="w-[80px] h-[80px]">
                  <img
                    src={step.img}
                    alt={`Step ${step.num} Icon`}
                    className="w-full h-full object-contain opacity-80"
                  />
                </div>
              </div>

              <h3 className="text-[15px] font-bold text-center text-[#1f1f1f] leading-[1.4] whitespace-pre-line tracking-tight">
                {step.text}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
