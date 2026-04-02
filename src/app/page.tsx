import Image from "next/image";
import {
  Home,
  CalendarDays,
  Sparkles,
  MessageSquareText,
  BadgeDollarSign,
  Headset,
  CheckCircle2,
  PlusCircle,
} from "lucide-react";

import { FaTwitter, FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";

// --- DATA ARRAYS (DRY Principle) ---
const NAV_LINKS = ["Home", "About", "Services", "Pricing", "Blog", "Resources"];

const TRUSTED_LOGOS = [
  "Airbnb",
  "Booking.com",
  "Vrbo",
  "Tripadvisor",
  "Expedia",
  "Hostaway",
];

const SERVICES = [
  {
    title: "Manage Property Listings",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    icon: Home,
  },
  {
    title: "Manage Customer Bookings",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    icon: CalendarDays,
  },
  {
    title: "Schedule House Cleaning",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    icon: Sparkles,
  },
  {
    title: "Monitor Guest Reviews",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    icon: MessageSquareText,
  },
  {
    title: "Track & Report Expenses",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    icon: BadgeDollarSign,
  },
  {
    title: "Guest Inquiry & Support",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    icon: Headset,
  },
];

const PRICING_PLANS = [
  {
    name: "Freebie",
    desc: "Ideal for individuals who need quick access to basic features.",
    price: "0",
    features: [
      "20,000+ of PNG & SVG graphics",
      "Access to 100 million stock images",
      "Upload custom icons and fonts",
      "Unlimited Sharing",
      "Upload graphics & video in up to 4k",
      "Unlimited Projects",
      "Instant Access to our design system",
      "Create teams to collaborate on designs",
    ],
    highlighted: false,
  },
  {
    name: "Professional",
    desc: "Ideal for individuals who need advanced features and tools for client work.",
    price: "25",
    features: [
      "20,000+ of PNG & SVG graphics",
      "Access to 100 million stock images",
      "Upload custom icons and fonts",
      "Unlimited Sharing",
      "Upload graphics & video in up to 4k",
      "Unlimited Projects",
      "Instant Access to our design system",
      "Create teams to collaborate on designs",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    desc: "Ideal for businesses who need personalized services and security for large teams.",
    price: "100",
    features: [
      "20,000+ of PNG & SVG graphics",
      "Access to 100 million stock images",
      "Upload custom icons and fonts",
      "Unlimited Sharing",
      "Upload graphics & video in up to 4k",
      "Unlimited Projects",
      "Instant Access to our design system",
      "Create teams to collaborate on designs",
    ],
    highlighted: false,
  },
];

const TOOLS = [
  "PriceLabs",
  "Wheelhouse",
  "BeyondPricing",
  "Hostfully",
  "Breezeway",
  "LODGIFY",
  "Hostfully",
  "Breezeway",
  "LODGIFY",
];

const STEPS = [
  { num: "01", text: "Add requirements & sign up today" },
  { num: "02", text: "Connect with your CSM & onboarding team" },
  { num: "03", text: "Meet your STR Assistant next week" },
];

const REASONS = [
  "Brilliant Client Service",
  "Flexibility & Adaptability",
  "We make it Personal",
  "We have expert in our team",
];

const TESTIMONIALS = [
  {
    name: "Jenny Wilson",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "Esther Howard",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "Robert Fox",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const FAQS = [
  "Is there a free trial available?",
  "Can I change my plan later?",
  "What is your cancellation policy?",
  "Can other info be added to an invoice?",
  "How does billing work?",
  "How do I change my account email?",
];

const FOOTER_LINKS = [
  { title: "About", links: ["About Us", "Features", "Works", "Careers"] },
  {
    title: "Help Menu",
    links: ["FAQ", "Support", "Terms & Conditions", "Privacy Policy"],
  },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      {/* --- HEADER --- */}
      <header className="border-b border-border-muted bg-background">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-between">
          <div className="text-2xl font-bold tracking-tight text-primary">
            {/* Replace with actual logo image */}
            Google
          </div>

          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link, index) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className={`font-medium text-lg hover:text-primary transition-colors ${index === 0 ? "text-primary border-b-2 border-primary" : "text-foreground"}`}
              >
                {link}
              </a>
            ))}
          </nav>

          <button className="hidden md:block bg-primary text-primary-foreground px-6 py-3 rounded-md font-bold hover:bg-primary/90 transition-colors">
            Schedule A Meeting
          </button>
        </div>
      </header>

      <main>
        {/* --- HERO SECTION --- */}
        <section className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 max-w-3xl mx-auto">
            Airbnb Assistants For <br /> Property Management
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-primary text-primary-foreground px-8 py-4 rounded-md font-bold text-lg hover:bg-primary/90 transition-colors w-full sm:w-auto">
              Schedule A Meeting
            </button>
            <button className="text-foreground underline px-8 py-4 font-medium text-lg hover:text-primary transition-colors w-full sm:w-auto">
              See Pricing
            </button>
          </div>
        </section>

        {/* --- TRUSTED BY --- */}
        <section className="bg-secondary py-10 border-y border-border-muted">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-center font-semibold text-lg mb-8">
              Trusted by leaders in 50+ industries
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60">
              {TRUSTED_LOGOS.map((logo) => (
                <div
                  key={logo}
                  className="text-xl font-bold text-muted-foreground uppercase tracking-widest"
                >
                  {logo}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- SERVICES --- */}
        <section className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our service</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, idx) => (
              <article
                key={idx}
                className="bg-background border border-border p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-16 h-16 bg-primary-light text-primary flex items-center justify-center rounded-xl mb-6">
                  <service.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4 pr-4">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-8 line-clamp-3">
                  {service.desc}
                </p>
                <a
                  href="#"
                  className="inline-block text-primary font-medium border border-primary rounded-full px-6 py-2 hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  Read More
                </a>
              </article>
            ))}
          </div>
        </section>

        {/* --- PRICING --- */}
        <section className="bg-muted py-24">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">
                Airbnb Assistant pricing
              </h2>
              <p className="text-lg text-foreground mb-8">
                Choose a plan that's right for you
              </p>

              <div className="flex items-center justify-center gap-4">
                <span className="font-medium">Pay Monthly</span>
                <div className="w-12 h-6 bg-border-muted rounded-full relative flex items-center px-1 cursor-pointer">
                  <div className="w-4 h-4 bg-background rounded-full"></div>
                </div>
                <span className="font-medium flex items-center gap-2">
                  Pay Yearly
                  <span className="text-primary font-bold text-sm bg-primary-light px-2 py-1 rounded">
                    Save 25%
                  </span>
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              {PRICING_PLANS.map((plan, idx) => (
                <article
                  key={idx}
                  className={`p-8 rounded-2xl flex flex-col h-full ${
                    plan.highlighted
                      ? "bg-primary text-primary-foreground shadow-xl scale-105"
                      : "bg-background text-foreground border border-border"
                  }`}
                >
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p
                    className={`mb-8 ${plan.highlighted ? "text-primary-light" : "text-muted-foreground"}`}
                  >
                    {plan.desc}
                  </p>
                  <div className="flex items-end gap-2 mb-8">
                    <span className="text-6xl font-bold">${plan.price}</span>
                    <span
                      className={`text-lg pb-1 ${plan.highlighted ? "text-primary-light" : "text-muted-foreground"}`}
                    >
                      / Month
                    </span>
                  </div>
                  <button
                    className={`w-full py-3 rounded-md font-bold mb-8 transition-colors ${
                      plan.highlighted
                        ? "bg-background text-primary hover:bg-secondary"
                        : "bg-transparent text-primary border border-primary hover:bg-primary hover:text-primary-foreground"
                    }`}
                  >
                    {plan.highlighted ? "Get Started" : "Choose Plan"}
                  </button>
                  <ul className="space-y-4 flex-1">
                    {plan.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-3">
                        <CheckCircle2
                          className={`w-5 h-5 shrink-0 ${plan.highlighted ? "text-background" : "text-primary"}`}
                        />
                        <span
                          className={
                            plan.highlighted
                              ? "text-background"
                              : "text-foreground"
                          }
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* --- TOOLS --- */}
        <section className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-24 bg-secondary">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Tools</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
            {TOOLS.map((tool, idx) => (
              <div
                key={idx}
                className="bg-background border border-border-muted shadow-sm w-full py-8 flex items-center justify-center rounded-xl font-bold text-xl text-foreground"
              >
                {/* Swapping with text since SVGs aren't provided */}
                {tool}
              </div>
            ))}
          </div>
        </section>

        {/* --- HOW IT WORKS (STEPS) --- */}
        <section className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Getting Started is Easy</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore.
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-start gap-8 relative">
            {STEPS.map((step, idx) => (
              <div
                key={idx}
                className="flex-1 flex flex-col items-center text-center gap-6"
              >
                <div className="w-20 h-20 bg-background border-4 border-primary rounded-full flex items-center justify-center text-2xl font-bold shadow-sm z-10">
                  {step.num}
                </div>
                <h3 className="text-xl font-bold max-w-[200px]">{step.text}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* --- WHY CHOOSE US --- */}
        <section className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="bg-primary-light rounded-[40px] p-8 md:p-16 flex flex-col lg:flex-row items-center gap-12 border border-border">
            <div className="flex-1">
              <h2 className="text-4xl font-bold mb-6">
                Few Reasons Why you Choose us?
              </h2>
              <p className="text-foreground mb-10 max-w-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
              <ul className="space-y-4 mb-10">
                {REASONS.map((reason, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-3 font-bold text-lg"
                  >
                    <CheckCircle2 className="text-primary w-6 h-6" />
                    {reason}
                  </li>
                ))}
              </ul>
              <button className="bg-primary text-primary-foreground px-8 py-4 rounded-md font-bold text-lg hover:bg-primary/90 transition-colors">
                Schedule A Meeting
              </button>
            </div>
            <div className="flex-1 flex justify-center relative">
              {/* Image Placeholder representing the right side design */}
              <div className="w-full max-w-md aspect-square bg-border rounded-full flex items-center justify-center relative overflow-hidden shadow-inner">
                <span className="text-muted-foreground">Image Placeholder</span>
              </div>
            </div>
          </div>
        </section>

        {/* --- REVIEWS --- */}
        <section className="bg-secondary py-24 border-y border-border-muted">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">
                Check Our Clients Review
              </h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {TESTIMONIALS.map((review, idx) => (
                <article
                  key={idx}
                  className={`p-8 rounded-xl ${idx === 1 ? "bg-background shadow-xl scale-105 z-10" : "bg-secondary border border-border-muted"}`}
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="w-24 h-24 bg-border rounded-full mb-6"></div>
                    <h3 className="text-xl font-bold mb-2">{review.name}</h3>
                    <p className="text-sm text-foreground mb-6">
                      {review.text}
                    </p>
                    <div className="flex gap-1 text-[#FF9D00]">
                      {[...Array(4)].map((_, i) => (
                        <StarIcon key={i} />
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* --- FAQ --- */}
        <section className="max-w-screen-md mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Frequently asked questions
            </h2>
            <p className="text-lg text-foreground">
              Everything you need to know about the product and billing.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            {FAQS.map((faq, idx) => (
              <div key={idx} className="border-b border-border-muted pb-6 mb-2">
                <div className="flex justify-between items-center cursor-pointer group">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {faq}
                  </h3>
                  {idx === 0 ? (
                    <div className="border-2 border-primary rounded-full p-1 text-primary">
                      <MinusIcon />
                    </div>
                  ) : (
                    <div className="border-2 border-primary rounded-full p-1 text-primary">
                      <PlusCircle className="w-5 h-5" />
                    </div>
                  )}
                </div>
                {idx === 0 && (
                  <p className="text-muted-foreground mt-4 pr-12">
                    Yes, you can try us for free for 30 days. If you want, we'll
                    provide you with a free, personalized 30-minute onboarding
                    call to get you up and running as soon as possible.
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* --- PRE-FOOTER CTA --- */}
        <section className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
          <div className="bg-muted p-12 rounded-2xl flex flex-col items-center text-center border border-border-muted">
            <div className="flex -space-x-4 mb-6">
              <div className="w-14 h-14 rounded-full border-2 border-background bg-border z-10"></div>
              <div className="w-16 h-16 rounded-full border-2 border-background bg-primary z-20 -mt-1"></div>
              <div className="w-14 h-14 rounded-full border-2 border-background bg-border z-10"></div>
            </div>
            <h2 className="text-2xl font-bold mb-2">Still have questions?</h2>
            <p className="text-muted-foreground mb-8">
              Can't find the answer you're looking for? Please chat to our
              friendly team.
            </p>
            <button className="bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors">
              Get in touch
            </button>
          </div>
        </section>
      </main>

      {/* --- FOOTER --- */}
      <footer className="bg-background border-t border-border-muted pt-16">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          <div className="md:col-span-2">
            <div className="text-2xl font-bold text-primary mb-6">Google</div>
            <p className="text-muted-foreground max-w-sm mb-8 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              dictum aliquet accumsan porta lectus ridiculus in mattis. Netus
              sodales in volutpat ullamcorper amet adipiscing fermentum.
            </p>
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-secondary-foreground rounded-full flex items-center justify-center text-background hover:bg-primary cursor-pointer transition-colors">
                <FaTwitter className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 bg-secondary-foreground rounded-full flex items-center justify-center text-background hover:bg-primary cursor-pointer transition-colors">
                <FaFacebook className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 bg-secondary-foreground rounded-full flex items-center justify-center text-background hover:bg-primary cursor-pointer transition-colors">
                <FaInstagram className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 bg-secondary-foreground rounded-full flex items-center justify-center text-background hover:bg-primary cursor-pointer transition-colors">
                <FaGithub className="w-5 h-5" />
              </div>
            </div>
          </div>

          {FOOTER_LINKS.map((col, idx) => (
            <div key={idx}>
              <h4 className="font-bold text-lg mb-6 uppercase">{col.title}</h4>
              <ul className="space-y-4">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-primary transition-colors font-medium"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-[#230B41] py-6 text-center">
          <p className="text-background/80 text-sm">
            Copyright © {new Date().getFullYear()}. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

// Simple internal helper component for repetitive SVG patterns
function StarIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
    </svg>
  );
}

function MinusIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="5" y1="12" x2="19" y2="12"></line>
    </svg>
  );
}
