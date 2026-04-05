import React from "react";
import { ToolCard } from "./ui/ToolCard";

const TOOLS = [
  { name: "PriceLabs", imageSrc: "/logos/pricelabs.png" },
  { name: "Wheelhouse", imageSrc: "/logos/wheelhouse.png" },
  { name: "Beyond Pricing", imageSrc: "/logos/beyondpricing.png" },
  { name: "Hostfully", imageSrc: "/logos/hostfully.png" },
  { name: "Guesty", imageSrc: "/logos/guesty.png" },
  { name: "LODGIFY", imageSrc: "/logos/lodgify.png" },
  { name: "Hostfully", imageSrc: "/logos/hostfully.png" },
  { name: "Guesty", imageSrc: "/logos/guesty.png" },
  { name: "LODGIFY", imageSrc: "/logos/lodgify.png" },
];

export default function Tools() {
  return (
    <section id="tools" className="w-full flex flex-col">
      {/* Top Section - Pure White with Typography */}
      <div className="w-full bg-white px-6 pt-12 pb-16">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-main tracking-tight">
            Our <span className="text-primary">Tools</span>
          </h2>
          <p className="text-main max-w-3xl text-center mb-14 text-sm font-medium ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>

      {/* Grid Canvas - Distinct Off-White/Grey */}
      <div className="w-full bg-[#F8F9FA] px-6 py-10 pb-22">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {TOOLS.map((tool, idx) => (
            <ToolCard
              key={`${tool.name}-${idx}`}
              name={tool.name}
              imageSrc={tool.imageSrc}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
