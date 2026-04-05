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
    <article className="flex items-center gap-6 p-8 md:p-10 rounded-[1.25rem] w-96 md:w-130 shrink-0 cursor-pointer transition-all duration-300 bg-[#F6F6F6] hover:bg-white hover: group">
      <div className="w-25 h-25 shrink-0 rounded-full overflow-hidden ">
        <img
          src={review.imageSrc}
          alt={review.imageAlt}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col items-start">
        <h3 className="text-text-main text-xl font-bold mb-1.25 tracking-tight">
          {review.name}
        </h3>
        <p className="text-text-main text-sm font-medium mb-3 pr-2 tracking-tight leading-tight">
          {review.text}
        </p>
        <div className="flex items-center gap-0.75 text-[#FF9D00]">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={13}
              fill={i < review.stars ? "currentColor" : "transparent"}
              strokeWidth={i < review.stars ? 0 : 2}
              className={i < review.stars ? "" : "text-[#FF9D00]"}
            />
          ))}
        </div>
      </div>
    </article>
  );
}
