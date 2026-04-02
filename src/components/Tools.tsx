import React from "react";
import { ToolCard } from "./ui/ToolCard";

export default function Tools() {
  return (
    <section id="tools" className="w-full flex flex-col">
      {/* Top Section - Pure White with Typography */}
      <div className="w-full bg-white px-6 pt-24 pb-16">
        <div className="max-w-[850px] mx-auto flex flex-col items-center text-center">
          <h2 className="text-[32px] md:text-[38px] font-extrabold mb-6 text-[#1f1f1f] tracking-tight">
            Our <span className="text-primary">Tools</span>
          </h2>
          <p className="text-[#3a3a3a] text-[15px] font-medium leading-[1.6]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore<br className="hidden md:block"/> magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo<br className="hidden md:block"/> consequat.
          </p>
        </div>
      </div>

      {/* Grid Canvas - Distinct Off-White/Grey */}
      <div className="w-full bg-[#F8F9FA] px-6 py-20 pb-32">
        <div className="max-w-[1050px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          <ToolCard name="PriceLabs" />
          <ToolCard name="Wheelhouse" />
          <ToolCard name="Beyond Pricing" />
          {/* Row 2 */}
          <ToolCard name="Hostfully" />
          <ToolCard name="Guesty" />
          <ToolCard name="LODGIFY" />
          {/* Row 3 (matches crop explicitly) */}
          <ToolCard name="Hostfully" />
          <ToolCard name="Guesty" />
          <ToolCard name="LODGIFY" />
        </div>
      </div>
    </section>
  );
}
