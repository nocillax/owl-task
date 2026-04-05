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
    <article className="bg-primary-foreground border border-[#FAC4D2] rounded-xl pt-13 pl-8 pr-10 pb-7 flex flex-col items-start transition-all duration-300 hover:border-transparent hover:shadow-[0_0_50px_rgba(0,0,0,0.06)]">
      <div className="w-16 h-16 xl:w-21 xl:h-21 mb-8 shrink-0">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-full object-contain"
        />
      </div>
      <h3 className="text-xl md:text-2xl font-bold text-[#1e1e1e] mb-4 leading-snug pr-4 tracking-tight">
        {title}
      </h3>
      <p className="text-main mb-8 flex-1 text-xs md:text-sm font-medium">
        {desc}
      </p>
      <button className="text-primary text-sm font-bold border border-primary/30 rounded-full px-6 py-2.5 hover:bg-primary/5 transition-colors">
        Read More
      </button>
    </article>
  );
}
