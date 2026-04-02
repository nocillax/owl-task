import React from "react";
import { Star } from "lucide-react";

export interface Review {
  name: string;
  imageSrc: string;
  imageAlt: string;
  text: string;
  stars: number;
}

export function ReviewCard({ review }: { review: Review }) {
  return (
    <article className="flex items-center gap-6 p-8 md:p-10 rounded-[1.25rem] w-[400px] md:w-[480px] shrink-0 cursor-pointer transition-all duration-300 bg-[#f8f9fa] hover:bg-white hover:shadow-[0_15px_40px_rgba(0,0,0,0.06)] group">
      <div className="w-[80px] h-[80px] shrink-0 rounded-full overflow-hidden opacity-90 group-hover:opacity-100 transition-opacity">
        <img
          src={review.imageSrc}
          alt={review.imageAlt}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col items-start">
        <h3 className="text-[#1f1f1f] text-[18px] font-bold mb-1.5 tracking-tight">
          {review.name}
        </h3>
        <p className="text-[#4a4a4a] text-[13px] font-medium leading-[1.6] mb-4 pr-2">
          {review.text}
        </p>
        <div className="flex items-center gap-[3px] text-[#FBBF24]">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={13}
              fill={i < review.stars ? "currentColor" : "transparent"}
              strokeWidth={i < review.stars ? 0 : 2}
              className={i < review.stars ? "" : "text-[#cbd5e1]"}
            />
          ))}
        </div>
      </div>
    </article>
  );
}
