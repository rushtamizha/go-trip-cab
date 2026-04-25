"use client";

import React from "react";
import { motion } from "framer-motion";
import { Car, MapPin, CheckCircle, PartyPopper, ChevronRight } from "lucide-react";

const steps = [
  {
    title: "Choose Your Taxi",
    desc: "Select from our premium fleet of Sedans, SUVs, or Luxury cars.",
    icon: <Car size={24} />,
  },
  {
    title: "Select Location",
    desc: "Enter your pickup and destination details for an instant quote.",
    icon: <MapPin size={24} />,
  },
  {
    title: "Confirm Booking",
    desc: "Secure your ride with a quick advance payment and instant confirmation.",
    icon: <CheckCircle size={24} />,
  },
  {
    title: "Enjoy Your Trip",
    desc: "Sit back and relax while our professional drivers take the wheel.",
    icon: <PartyPopper size={24} />,
  },
];

const BookingProcess = () => {
  return (
    <section className="px-6 py-24 bg-slate-50/50">
      <div className="mx-auto max-w-7xl">
        
        {/* Header */}
        <div className="mb-16 text-center">
          <span className="text-[10px] font-black text-orange-600 uppercase tracking-[0.4em] block mb-4">
            Simple & Seamless
          </span>
          <h2 className="text-3xl font-black tracking-tighter uppercase md:text-4xl text-slate-900">
            How to <span className="text-orange-600">Book Your Ride</span>
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              <motion.div 
                whileHover={{ y: -5 }}
                className="h-full p-8 bg-white border border-slate-100 rounded-[2.5rem] shadow-sm  hover:shadow-slate-200/50 transition-all flex flex-col items-center text-center"
              >
                {/* Icon Wrapper */}
                <div className="w-16 h-16 rounded-[1.5rem] bg-orange-500 text-white flex items-center justify-center mb-6 group-hover:bg-orange-600 transition-colors shadow-lg shadow-slate-900/10">
                  {step.icon}
                </div>

                {/* Step Number */}
                <span className="text-[9px] font-black text-orange-600 uppercase tracking-[0.2em] mb-2">
                  Step 0{index + 1}
                </span>

                <h3 className="mb-3 text-sm font-black tracking-tight uppercase text-slate-900">
                  {step.title}
                </h3>

                <p className="text-[12px] font-medium leading-relaxed text-slate-500">
                  {step.desc}
                </p>
              </motion.div>
            </div>
          ))}
        </div>

        {/* Mobile Swipe Hint */}
        <p className="mt-8 text-center md:hidden text-[9px] font-bold text-slate-400 uppercase tracking-widest">
          Follow the steps for a hassle-free journey
        </p>

      </div>
    </section>
  );
};

export default BookingProcess;