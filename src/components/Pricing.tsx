"use client";

import React, { useState } from "react";
import { PricingCard, PricingPlan } from "./ui/PricingCard";

const PRICING_PLANS: PricingPlan[] = [
  {
    id: "Freebie",
    name: "Freebie",
    category: "Ideal for individuals who need quick access to basic features.",
    priceMonthly: 0,
    priceYearly: 0,
    features: [
      { name: "20,000+ of PNG & SVG graphics", included: true },
      { name: "Access to 100 million stock images", included: true },
      { name: "Upload custom icons and fonts", included: false },
      { name: "Unlimited Sharing", included: false },
      { name: "Upload graphics & video in up to 4k", included: false },
      { name: "Unlimited Projects", included: false },
      { name: "Instant Access to our design system", included: false },
      { name: "Create teams to collaborate on designs", included: false }
    ]
  },
  {
    id: "Professional",
    name: "Professional",
    category: "Ideal for individuals who who need advanced features and tools for client work.",
    priceMonthly: 25,
    priceYearly: 19,
    features: [
      { name: "20,000+ of PNG & SVG graphics", included: true },
      { name: "Access to 100 million stock images", included: true },
      { name: "Upload custom icons and fonts", included: true },
      { name: "Unlimited Sharing", included: true },
      { name: "Upload graphics & video in up to 4k", included: true },
      { name: "Unlimited Projects", included: true },
      { name: "Instant Access to our design system", included: false },
      { name: "Create teams to collaborate on designs", included: false }
    ]
  },
  {
    id: "Enterprise",
    name: "Enterprise",
    category: "Ideal for businesses who need personalized services and security for large teams.",
    priceMonthly: 100,
    priceYearly: 75,
    features: [
      { name: "20,000+ of PNG & SVG graphics", included: true },
      { name: "Access to 100 million stock images", included: true },
      { name: "Upload custom icons and fonts", included: true },
      { name: "Unlimited Sharing", included: true },
      { name: "Upload graphics & video in up to 4k", included: true },
      { name: "Unlimited Projects", included: true },
      { name: "Instant Access to our design system", included: true },
      { name: "Create teams to collaborate on designs", included: true }
    ]
  }
];

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);
  const [selectedPlanId, setSelectedPlanId] = useState("Professional");

  return (
    <section id="pricing" className="px-6 py-24 bg-white w-full">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Headings */}
        <div className="flex flex-col items-center mb-8 text-center text-[#1f1f1f]">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 tracking-tight">
            Airnbn Assistent <span className="text-primary">pricing</span>
          </h2>
          <p className="text-[#333333] text-base font-medium">
            Choose a plan that's right for you
          </p>
        </div>

        {/* Toggle Controls */}
        <div className="flex justify-center items-center gap-4 mb-20 relative">
          <span className={`text-sm font-semibold transition-colors ${!isYearly ? 'text-[#1f1f1f]' : 'text-[#888888]'}`}>
            Pay Monthly
          </span>
          <button 
            onClick={() => setIsYearly(!isYearly)}
            className={`w-11 h-6 rounded-full relative flex items-center px-1 transition-colors ${isYearly ? 'bg-primary' : 'bg-[#cbd5e1]'}`}
          >
            <div className={`w-4 h-4 bg-white rounded-full transition-transform shadow-sm ${isYearly ? 'translate-x-5' : 'translate-x-0'}`} />
          </button>
          <span className={`text-sm font-semibold transition-colors ${isYearly ? 'text-[#1f1f1f]' : 'text-[#888888]'}`}>
            Pay Yearly
          </span>

          {/* Hand-drawn arrow and save text */}
          <div className="absolute left-1/2 ml-20 md:ml-28 top-1/2 -translate-y-1/2 flex items-center z-0">
             <img src="https://placehold.co/60x30/transparent/e33b65?text=~>" className="w-12 object-contain opacity-90 -rotate-12" alt="Arrow pointing to pay yearly" />
             <span className="text-primary font-extrabold text-sm ml-1 absolute left-[85%] whitespace-nowrap">Save 25%</span>
          </div>
        </div>

        {/* Dynamic Cards Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full items-center">
          {PRICING_PLANS.map((plan) => (
            <PricingCard 
              key={plan.id}
              plan={plan}
              isYearly={isYearly}
              isSelected={selectedPlanId === plan.id}
              onSelect={() => setSelectedPlanId(plan.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
