"use client";

import React, { useState } from "react";
import { PlusCircle, MinusCircle } from "lucide-react";

const FAQ_DATA = [
  {
    q: "Is there a free trial available?",
    a: "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  {
    q: "Can I change my plan later?",
    a: "Yes, our plans are flexible. You can upgrade or downgrade your plan at any time through your account settings.",
  },
  {
    q: "What is your cancellation policy?",
    a: "You can cancel your subscription at any time. Your cancellation will take effect at the end of the current paid term.",
  },
  {
    q: "Can other info be added to an invoice?",
    a: "Yes, you can add custom information such as your company's VAT number or specific project details to your invoices.",
  },
  {
    q: "How does billing work?",
    a: "We process payments monthly or annually depending on your chosen plan. You will be automatically billed at the start of each billing cycle.",
  },
  {
    q: "How do I change my account email?",
    a: "You can change your account email in your profile settings. A verification link will be sent to your new email address.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="px-6 py-10 bg-white w-full flex flex-col items-center"
    >
      <div className="w-full max-w-5xl bg-[#F9FAFB] rounded-4xl p-10 md:p-16 flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-main tracking-tight">
          Frequently asked <span className="text-primary">questions</span>
        </h2>
        <p className="text-[#3a3a3a] text-xl font-regular mb-12 text-center">
          Everything you need to know about the product and billing.
        </p>

        <div className="w-full flex flex-col max-w-3xl mx-auto">
          {FAQ_DATA.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`py-5 flex flex-col ${idx !== FAQ_DATA.length - 1 ? "border-b border-[#eecbd5]" : ""}`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="flex items-center justify-between w-full text-left"
                >
                  <span className="font-bold text-base text-[#1f1f1f]">
                    {item.q}
                  </span>
                  {isOpen ? (
                    <MinusCircle
                      className="text-primary shrink-0 ml-4"
                      size={20}
                      strokeWidth={1.5}
                    />
                  ) : (
                    <PlusCircle
                      className="text-primary shrink-0 ml-4"
                      size={20}
                      strokeWidth={1.5}
                    />
                  )}
                </button>
                {isOpen && (
                  <p className="text-[#888888] text-sm font-medium leading-relaxed pt-3 pr-10">
                    {item.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
