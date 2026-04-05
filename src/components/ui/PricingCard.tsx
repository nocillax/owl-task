import React from "react";
import { FeatureIcon } from "./FeatureIcon";

export interface PricingPlan {
  id: string;
  name: string;
  category: string;
  priceMonthly: number;
  priceYearly: number;
  features: { name: string; included: boolean }[];
}

interface PricingCardProps {
  plan: PricingPlan;
  isYearly: boolean;
  isSelected: boolean;
  onSelect: () => void;
}

export function PricingCard({
  plan,
  isYearly,
  isSelected,
  onSelect,
}: PricingCardProps) {
  const price = isYearly ? plan.priceYearly : plan.priceMonthly;

  return (
    <article
      onClick={onSelect}
      className={`font-manrope relative h-full flex flex-col rounded-xl p-8 cursor-pointer transition-all duration-300 border ${
        isSelected
          ? "bg-primary text-white border-transparent shadow-[0_20px_40px_-15px_rgba(var(--primary),0.5)] z-10"
          : "bg-white text-[#1f1f1f] border-primary/20 hover:border-primary/40 shadow-sm z-0"
      }`}
    >
      <h3 className="text-xl font-bold mb-3">{plan.name}</h3>
      <p
        className={`text-sm leading-relaxed mb-8 pr-4 font-regular ${isSelected ? "text-[#F7F8F9]" : "text-[#64748B]"}`}
      >
        {plan.category}
      </p>

      <div className="flex items-center gap-1.5 mb-6 mt-auto">
        <span className="text-6xl leading-none font-semibold tracking-tight">
          ${price}
        </span>
        <span
          className={`text-sm font-medium pt-1 ${isSelected ? "text-white/80" : "text-[#888888]"}`}
        >
          / Month
        </span>
      </div>

      <button
        className={`w-full py-3 rounded font-bold text-sm mb-10 transition-colors border ${
          isSelected
            ? "bg-white text-primary border-transparent hover:bg-white/90 shadow-sm"
            : "bg-transparent text-primary border-primary hover:bg-primary/5"
        }`}
      >
        Get Started Now
      </button>

      <ul className="flex flex-col gap-4">
        {plan.features.map((feature, i) => (
          <li key={i} className="flex items-center gap-4">
            <FeatureIcon
              type={feature.included ? "tick" : "cross"}
              cardSelected={isSelected}
            />
            <span
              className={`text-base font-medium ${
                isSelected
                  ? "text-white"
                  : feature.included
                    ? "text-main"
                    : "text-[#A0ABBB]"
              }`}
            >
              {feature.name}
            </span>
          </li>
        ))}
      </ul>
    </article>
  );
}
