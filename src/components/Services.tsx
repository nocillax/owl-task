import React from "react";
import { ServiceCard } from "./ui/ServiceCard";

const SERVICES = [
  {
    title: "Manage Property Listings",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageAlt: "Listings",
  },
  {
    title: "Manage Customer Bookings",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageAlt: "Bookings",
  },
  {
    title: "Schedule House Cleaning",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageAlt: "Cleaning",
  },
  {
    title: "Monitor Guest Reviews",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageAlt: "Reviews",
  },
  {
    title: "Track & Report Expenses",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageAlt: "Expenses",
  },
  {
    title: "Guest Inquiry & Support",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageAlt: "Support",
  },
];

export default function Services() {
  return (
    <section id="services" className="px-6 py-24 bg-white w-full">
      <div className="max-w-[1150px] mx-auto flex flex-col items-center">
        <h2 className="text-[36px] md:text-[40px] font-extrabold mb-6 text-center text-[#0f0f0f] tracking-tight">
          Our <span className="text-primary">Service</span>
        </h2>
        <p className="text-[#3a3a3a] max-w-[820px] text-center mb-16 text-[15px] font-medium leading-[1.6]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore<br className="hidden md:block"/> magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo<br className="hidden md:block"/> consequat.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 w-full">
          {SERVICES.map((service, idx) => (
            <ServiceCard 
              key={idx} 
              title={service.title} 
              desc={service.desc} 
              imageAlt={service.imageAlt} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}
