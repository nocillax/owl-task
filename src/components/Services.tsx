import React from "react";
import { ServiceCard } from "./ui/ServiceCard";

const SERVICES = [
  {
    title: "Manage Property Listings",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageSrc: "/logos/listings.png",
    imageAlt: "Listings",
  },
  {
    title: "Manage Customer Bookings",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageSrc: "/logos/bookings.png",
    imageAlt: "Bookings",
  },
  {
    title: "Schedule House Cleaning",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageSrc: "/logos/cleaning.png",
    imageAlt: "Cleaning",
  },
  {
    title: "Monitor Guest Reviews",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageSrc: "/logos/reviews.png",
    imageAlt: "Reviews",
  },
  {
    title: "Track & Report Expenses",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageSrc: "/logos/expenses.png",
    imageAlt: "Expenses",
  },
  {
    title: "Guest Inquiry & Support",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageSrc: "/logos/support.png",
    imageAlt: "Support",
  },
];

export default function Services() {
  return (
    <section id="services" className="px-6 py-14 bg-white w-full">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-main tracking-tight">
          Our <span className="text-primary">Service</span>
        </h2>
        <p className="text-main max-w-3xl text-center mb-14 text-sm font-medium">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 w-full">
          {SERVICES.map((service, idx) => (
            <ServiceCard
              key={idx}
              title={service.title}
              desc={service.desc}
              imageSrc={service.imageSrc}
              imageAlt={service.imageAlt}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
