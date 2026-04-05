import React from "react";

interface ServiceCardProps {
  title: string;
  desc: string;
  imageSrc: string;
  imageAlt: string;
}

export function ServiceCard({
  title,
  desc,
  imageSrc,
  imageAlt,
}: ServiceCardProps) {
  return (
    <article className="bg-white border border-primary/20 rounded-2xl p-8 lg:p-10 flex flex-col items-start transition-all duration-300 hover:border-transparent hover:shadow-[0_0_50px_rgba(0,0,0,0.06)]">
      <div className="w-16 h-16 xl:w-20 xl:h-20 mb-6 shrink-0">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-full object-contain"
        />
      </div>
      <h3 className="text-xl md:text-2xl font-bold text-[#1f1f1f] mb-4 leading-snug pr-4 tracking-tight">
        {title}
      </h3>
      <p className="text-[#333333] leading-relaxed mb-8 flex-1 text-sm md:text-base font-medium">
        {desc}
      </p>
      <button className="text-primary text-sm font-bold border border-primary/30 rounded-full px-6 py-2.5 hover:bg-primary/5 transition-colors">
        Read More
      </button>
    </article>
  );
}
