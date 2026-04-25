"use client";

import React from "react";
import { motion } from "framer-motion";
import { Users, Globe2, ShieldCheck, Map, ArrowRight } from "lucide-react";
import { company } from "@/lib/data";
import BackButton from "@/components/Back";

const stats = [
  { label: "Happy Travelers", value: "10K+", icon: <Users size={16} /> },
  { label: "Destinations", value: "50+", icon: <Map size={16} /> },
  { label: "Years Experience", value: "6+", icon: <Globe2 size={16} /> },
  { label: "Safety Rating", value: "100%", icon: <ShieldCheck size={16} /> },
];

const AboutPage = () => {
  return (
    <main className="bg-white ">
      {/* 1. Brand Story Section (Split Layout) */}
      <BackButton/>
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center grid-cols-1 gap-16 lg:grid-cols-2">
            <div className="space-y-8">
              <div>
                <span className="text-[10px] font-black text-orange-600 uppercase tracking-[0.4em] block mb-4">
                  Our Heritage
                </span>
                <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter uppercase leading-[0.9] mb-6">
                  Redefining the <br /> 
                  <span className="text-orange-600">Travel Experience</span>
                </h1>
                <p className="max-w-lg text-sm leading-relaxed text-slate-500">
                  Founded with a vision to bridge the gap between luxury and affordability, go trip cabs has evolved into a premier travel agency. We don't just book trips; we craft narratives that stay with you forever.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 pt-4">
                {stats.map((stat, i) => (
                  <div key={i} className="p-4 transition-colors border-l-2 border-slate-100 hover:border-orange-500">
                    <div className="mb-2 text-orange-600">{stat.icon}</div>
                    <div className="text-xl font-black tracking-tighter uppercase text-slate-900">{stat.value}</div>
                    <div className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&q=80" 
                  className="object-cover w-full h-full"
                  alt="About go trip cabs"
                />
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-8 -left-8 bg-slate-900 p-8 rounded-[2rem] hidden md:block border-[8px] border-white shadow-xl">
                 <p className="text-xs font-black leading-tight tracking-widest text-white uppercase">
                   Certified <br /> <span className="text-lg text-orange-500">Agency</span>
                 </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Mission & Vision (Modern Cards) */}
      <section className="py-24 bg-slate-50">
        <div className="px-6 mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="bg-white p-12 rounded-[2.5rem] border border-slate-100 space-y-4">
              <h3 className="text-xl font-black tracking-tight uppercase text-slate-900">Our Mission</h3>
              <p className="text-[13px] text-slate-500 leading-relaxed font-medium">
                To provide seamless, high-security, and affordable travel solutions that empower every individual to explore the world without the stress of logistics or hidden costs.
              </p>
            </div>
            <div className="bg-slate-900 p-12 rounded-[2.5rem] space-y-4">
              <h3 className="text-xl font-black tracking-tight text-white uppercase">Our Vision</h3>
              <p className="text-[13px] text-slate-300 leading-relaxed font-medium">
                To become India's most trusted travel partner, recognized for our commitment to customer safety, real-time support, and enterprise-grade travel planning.
              </p>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
};

export default AboutPage;