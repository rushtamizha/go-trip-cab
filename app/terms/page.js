"use client";

import React from "react";
import {
  ShieldCheck,
  MapPin,
  Car,
  Users,
  AlertTriangle,
  Clock,
  FileText,
} from "lucide-react";
import { policies } from "@/lib/data";

export default function TermsAndConditions() {

  const iconMap = {
    "Seasonal & Peak-Time Policy": Clock,
    "Vehicle Quality & Standards": Car,
    "Cab Breakdown Policy": AlertTriangle,
    "Driver Allowance (Batta)": Users,
    "Package & Kilometer Policy": FileText,
    "Toll, Parking, Taxes & Permits": MapPin,
    "One Way Trip": Car,
    "Vehicle Usage Guidelines": ShieldCheck,
    "Pets Policy": AlertTriangle,
    "Customer Responsibilities": ShieldCheck,
  };

  const SectionHeader = ({ icon: Icon, title }) => (
    <div className="flex items-center gap-3 pb-3 mb-5 border-b border-slate-100">
      {Icon && <Icon className="text-orange-600" size={18} />}
      <h2 className="text-lg font-black tracking-tight uppercase text-slate-900">
        {title}
      </h2>
    </div>
  );

  const TermItem = ({ children }) => (
    <li className="flex gap-3 mb-4 group">
      <div className="mt-1.5 h-1 w-3 rounded-full bg-slate-200 group-hover:bg-orange-500 transition-colors shrink-0" />
      <span className="text-[13px] leading-relaxed text-slate-600 font-medium">
        {children}
      </span>
    </li>
  );

  return (
    <main className="min-h-screen pt-32 pb-20 bg-white">
      <div className="max-w-5xl px-6 mx-auto">

        {/* Header */}
        <div className="mb-16">
          <span className="text-[10px] font-black text-orange-600 uppercase tracking-[0.4em] block mb-4">
            Legal Framework
          </span>

          <h1 className="text-4xl font-black tracking-tighter uppercase md:text-5xl text-slate-900">
            Terms of <span className="text-orange-600">Service</span>
          </h1>

          <p className="max-w-2xl mt-4 text-sm font-medium text-slate-500">
            These terms govern your travel experience, including booking,
            vehicle usage, policies, and responsibilities.
          </p>
        </div>

        {/* Sections */}
        <div className="grid grid-cols-1 gap-10">
          {policies.map((section, index) => {
            const Icon = iconMap[section.title];

            return (
              <section
                key={index}
                className="p-6 transition-all duration-300 rounded-xl bg-slate-50 hover:bg-white "
              >
                <ul className="p-0 list-none">
                  <SectionHeader icon={Icon} title={section.title} />

                  {section.points.map((point, i) => (
                    <TermItem key={i}>{point}</TermItem>
                  ))}
                </ul>
              </section>
            );
          })}
        </div>

      </div>
    </main>
  );
}