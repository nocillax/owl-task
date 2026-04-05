import React from "react";

interface ToolCardProps {
  name: string;
  imageSrc: string;
}

export function ToolCard({ name, imageSrc }: ToolCardProps) {
  return (
    <div className="bg-white rounded-xl w-full h-32 lg:h-36 flex items-center justify-center p-8 cursor-pointer transition-all duration-300 hover:shadow-[0_0_35px_rgba(227,59,101,0.22)]">
      <img src={imageSrc} className="w-4/5 h-4/5 object-contain" alt={name} />
    </div>
  );
}
