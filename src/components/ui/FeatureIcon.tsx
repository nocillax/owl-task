import React from "react";
import { Check, X } from "lucide-react";

interface FeatureIconProps {
  type: "tick" | "cross";
  cardSelected: boolean;
}

export function FeatureIcon({ type, cardSelected }: FeatureIconProps) {
  if (type === "tick") {
    return (
      <div
        className={`flex items-center justify-center w-7 h-7 rounded-full shrink-0 ${
          cardSelected
            ? "bg-[#FAC4D2] text-[#F16388]"
            : "bg-[#FAC4D2] text-primary"
        }`}
      >
        <Check size={14} strokeWidth={2} />
      </div>
    );
  } else {
    return (
      <div
        className={`flex items-center justify-center w-7 h-7 rounded-full shrink-0 ${
          cardSelected
            ? "bg-white text-text-main"
            : "bg-[#f4f4f5] text-text-main"
        }`}
      >
        <X size={14} strokeWidth={2} />
      </div>
    );
  }
}
