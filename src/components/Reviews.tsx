"use client";

import React, { useRef, useEffect } from "react";
import { ReviewCard, Review } from "./ui/ReviewCard";

const REVIEWS: Review[] = [
  {
    name: "Jenny Wilson",
    imageSrc: "/logos/jenny.png",
    imageAlt: "User",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    stars: 4,
  },
  {
    name: "Esther Howard",
    imageSrc: "/logos/esther.png",
    imageAlt: "User",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    stars: 5,
  },
  {
    name: "Robert Fox",
    imageSrc: "/logos/robert.png",
    imageAlt: "User",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    stars: 4,
  },
  {
    name: "Bessie Cooper",
    imageSrc: "/logos/jenny.png",
    imageAlt: "User",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    stars: 5,
  },
];

export default function Reviews() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    // Center the carousel natively on the second card on Mount (matches Figma perfectly)
    const cardWidth = window.innerWidth >= 768 ? 480 : 400;
    const gap = 24;
    el.scrollLeft = cardWidth + gap - (el.clientWidth - cardWidth) / 2;

    const handleWheel = (e: WheelEvent) => {
      // Ignore if user is using horizontal scrolling already (trackpad/shift key)
      if (Math.abs(e.deltaX) > 0) return;

      const isAtStart = el.scrollLeft <= 5;
      const isAtEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 5;

      // Allow natural page exit scrolling safely at bounds
      if (e.deltaY < 0 && isAtStart) return;
      if (e.deltaY > 0 && isAtEnd) return;

      // Trap the event and rotate the wheel to X plane smoothly
      e.preventDefault();

      const scrollAmount = e.deltaY > 0 ? cardWidth + gap : -(cardWidth + gap);

      el.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    };

    el.addEventListener("wheel", handleWheel, { passive: false });
    return () => el.removeEventListener("wheel", handleWheel);
  }, []);

  return (
    <section className="py-24 bg-white w-full overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-center text-[#1f1f1f] tracking-tight">
          Check Our Clients <span className="text-primary">Review</span>
        </h2>
        <p className="text-[#3a3a3a] max-w-4xl text-center mb-16 text-sm font-medium leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et
          <br className="hidden lg:block" />
          dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea
          <br className="hidden lg:block" />
          commodo consequat.
        </p>
      </div>

      <div className="w-full max-w-7xl mx-auto relative pb-10">
        {/* Horizontal Scrolling Carousel specific CSS hidden scrollbars */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
          .hide-scroll::-webkit-scrollbar { display: none; }
          .hide-scroll { -ms-overflow-style: none; scrollbar-width: none; }
        `,
          }}
        />

        <div
          ref={scrollRef}
          className="flex overflow-x-auto gap-6 px-6 snap-x snap-mandatory hide-scroll py-10 items-center"
        >
          {REVIEWS.map((review, idx) => (
            <div key={idx} className="snap-center">
              <ReviewCard review={review} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
