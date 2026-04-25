"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Zap, Clock, Banknote, CheckCircle2 } from "lucide-react";

const features = [
  {
    title: "Affordable Pricing",
    description: "Enjoy top-tier travel experiences at unbeatable prices without compromising on quality.",
    icon: <Banknote className="text-orange-600" size={24} />,
  },
  {
    title: "High Security",
    description: "Travel with confidence knowing that your safety and privacy are our top priorities.",
    icon: <ShieldCheck className="text-orange-600" size={24} />,
  },
  {
    title: "Fast Booking",
    description: "Book your next adventure quickly and effortlessly with our seamless platform.",
    icon: <Zap className="text-orange-600" size={24} />,
  },
  {
    title: "24 Hours Support",
    description: "Stay informed and secure with round-the-clock assistance and real-time updates.",
    icon: <Clock className="text-orange-600" size={24} />,
  },
];

const WhyChooseUs = () => {
  return (
    <section className="px-6 bg-white py-14">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center grid-cols-1 gap-16 lg:grid-cols-12">
          
          {/* Left Side: Content */}
          <div className="space-y-6 lg:col-span-5">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-orange-600" />
              <span className="text-[10px] font-black text-orange-600 uppercase tracking-[0.3em]">
                The Go Trip Cab
              </span>
            </div>
            
            <h2 className="text-2xl font-bold md:text-2xl text-slate-900 ">
              Committed to <br /> Stress-Free Travel
            </h2>
            
            <p className="max-w-md text-sm leading-relaxed text-slate-500">
              We focus on comfort, safety, and convenience to ensure your journey is as memorable as the destination.
            </p>

            {/* Desktop Only: Trust Indicators */}
            <div className="flex-col hidden gap-3 pt-4 md:flex">
              {["Government Approved", "Secure Payments", "Verified Drivers"].map((item) => (
                <div key={item} className="flex items-center gap-2 text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                  <CheckCircle2 size={14} className="text-emerald-500" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Feature Grid (Responsive) */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="p-8 bg-slate-50 border border-slate-100 rounded-[2rem] hover:bg-white   transition-all group"
                >
                  <div className="flex items-center justify-center w-12 h-12 mb-6 transition-colors bg-white shadow-sm rounded-2xl group-hover:bg-orange-600 group-hover:text-white">
                    {React.cloneElement(feature.icon, { 
                      className: "group-hover:text-white transition-colors" 
                    })}
                  </div>
                  
                  <h3 className="mb-3 text-sm font-black tracking-tight uppercase text-slate-900">
                    {feature.title}
                  </h3>
                  
                  <p className="text-[13px] font-medium leading-relaxed text-slate-500 group-hover:text-slate-600 transition-colors">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;