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
    <section className="px-6 py-20 bg-white w-full">
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-main tracking-tight">
          Getting Started is <span className="text-primary">Easy</span>
        </h2>
        <p className="text-main max-w-3xl text-center mb-14 text-sm font-medium ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-16 sm:gap-8 md:gap-14 w-full px-4">
          {STEPS.map((step) => (
            <div key={step.num} className="flex flex-col items-center">
              {/* Card with overlapping badge */}
              <div className="relative w-full aspect-4/3 bg-white border-2 border-[#FDEBF0] rounded-[1.25rem] flex items-center justify-center mb-8 hover:shadow-[0_10px_30px_rgba(227,59,101,0.08)] transition-all">
                {/* Badge layout positioned exactly over the top-left border corner */}
                <div className="absolute -top-6 -left-6 w-19 h-19 bg-white border-primary border-5 text-[#1f1f1f] rounded-full flex items-center justify-center font-bold text-3xl">
                  {step.num}
                </div>
                {/* Icon Placeholder */}
                <div className="w-20 h-20">
                  <img
                    src={step.img}
                    alt={`Step ${step.num} Icon`}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              <h3 className="text-xl font-semibold text-center text-text-main whitespace-pre-line tracking-tight">
                {step.text}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
