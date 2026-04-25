"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "How do I book a tour package with go trip cabs?",
    answer: "Booking is simple. You can browse our Destinations gallery, select your preferred package, and click 'Book Now'. Alternatively, you can call our 24/7 support line for instant assistance with customized itineraries."
  },
  {
    question: "What is your refund and cancellation policy?",
    answer: "Cancellations made 15 days prior to the trip are eligible for a full refund. For cancellations within 7-14 days, a 50% refund is applicable. Please refer to our Refund Policy page for specific details regarding peak season bookings."
  },
  {
    question: "Do you provide customized travel packages?",
    answer: "Yes, we specialize in 'Enterprise-Grade' customization. Whether it's a corporate retreat, a family trip, or a solo adventure, we can tailor the hotels and activities to fit your specific budget and preferences."
  },
  {
    question: "Is it safe to travel with go trip cabs during off-seasons?",
    answer: "Your safety is our priority. We monitor real-time weather and travel alerts 24/7. If a destination is deemed unsafe due to weather or other factors, we provide immediate alternatives or rescheduling options."
  }
];

const FAQItem = ({ faq, isOpen, toggle }) => {
  return (
    <div className={`border-b border-slate-100 transition-all ${isOpen ? "bg-slate-50/50" : "bg-transparent"}`}>
      <button
        onClick={toggle}
        className="flex items-center justify-between w-full px-4 py-6 text-left group"
      >
        <span className={`text-sm font-bold uppercase tracking-tight transition-colors ${isOpen ? "text-orange-600" : "text-slate-700 group-hover:text-slate-900"}`}>
          {faq.question}
        </span>
        <div className={`shrink-0 ml-4 transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`}>
          {isOpen ? (
            <Minus size={18} className="text-orange-600" />
          ) : (
            <Plus size={18} className="text-slate-300" />
          )}
        </div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-6">
              <p className="text-[13px] leading-relaxed text-slate-500 font-medium max-w-3xl">
                {faq.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0); // First one open by default

  return (
    <section className="bg-white py-14">
      <div className="max-w-4xl px-6 mx-auto">
        
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-slate-50">
            <HelpCircle size={12} className="text-orange-600" />
            <span className="text-[9px] font-black text-slate-500 uppercase tracking-[0.2em]">Questions & Answers</span>
          </div>
          <h2 className="mb-4 text-3xl font-black tracking-tighter uppercase text-slate-900">
            Frequently Asked <span className="text-orange-600">Questions</span>
          </h2>
          <p className="text-xs font-bold tracking-widest uppercase text-slate-400">
            Everything you need to know before your next journey
          </p>
        </div>

        {/* Accordion Container */}
        <div className="border-t border-slate-100">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              isOpen={openIndex === index}
              toggle={() => setOpenIndex(openIndex === index ? -1 : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;