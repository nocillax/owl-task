import React from "react";
import Navbar from "@/components/Navbar";
import HomeSection from "@/components/HomeSection";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import Tools from "@/components/Tools";
import Steps from "@/components/Steps";
import WhyChooseUs from "@/components/WhyChooseUs";
import Reviews from "@/components/Reviews";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-primary-foreground overflow-x-hidden">

      {/* TOP SECTION */}
      <Navbar />
      <HomeSection />
      <Services />
      <Pricing />
      <Tools />
      <Steps />
      <WhyChooseUs />
      <Reviews />
      <FAQ />
      <Footer />
    </div>
  );
}
