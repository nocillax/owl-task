import React from 'react';
import { Check, X } from 'lucide-react';

interface FeatureIconProps {
  type: 'tick' | 'cross';
  cardSelected: boolean;
}

export function FeatureIcon({ type, cardSelected }: FeatureIconProps) {
  if (type === 'tick') {
    return (
      <div className={`flex items-center justify-center w-[24px] h-[24px] rounded-full shrink-0 ${
        cardSelected ? 'bg-white/30 text-white' : 'bg-primary/10 text-primary'
      }`}>
        <Check size={14} strokeWidth={3} />
      </div>
    );
  } else {
    return (
      <div className={`flex items-center justify-center w-[24px] h-[24px] rounded-full shrink-0 ${
        cardSelected ? 'bg-white text-primary' : 'bg-[#f4f4f5] text-[#a1a1aa]'
      }`}>
        <X size={14} strokeWidth={3} />
      </div>
    );
  }
}
