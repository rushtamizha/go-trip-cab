"use client";

import React from "react";
import { 
  ShieldCheck, MapPin, Car, Users, 
  AlertTriangle, Clock, FileText 
} from "lucide-react";

/**
 * Terms and Conditions Page
 * Focus: Operational rules, KM policy, and Customer Responsibilities
 */
export default function TermsAndConditions() {
  
  const SectionHeader = ({ icon: Icon, title }) => (
    <div className="flex items-center gap-3 pb-2 mb-6 border-b border-slate-100">
      <Icon className="text-orange-600" size={20} />
      <h2 className="text-lg font-black tracking-tight uppercase text-slate-900">{title}</h2>
    </div>
  );

  const TermItem = ({ children }) => (
    <li className="flex gap-3 mb-4 group">
      <div className="mt-1.5 h-1 w-3 rounded-full bg-slate-200 group-hover:bg-orange-500 transition-colors shrink-0" />
      <span className="text-[13px] leading-relaxed text-slate-600 font-medium">{children}</span>
    </li>
  );

  return (
    <main className="min-h-screen pt-32 pb-20 bg-white">
      <div className="max-w-5xl px-6 mx-auto">
        
        {/* Header Section */}
        <div className="mb-16">
          <span className="text-[10px] font-black text-orange-600 uppercase tracking-[0.4em] block mb-4">
            Legal Framework
          </span>
          <h1 className="text-4xl font-black tracking-tighter uppercase md:text-5xl text-slate-900">
            Terms of <span className="text-orange-600">Service</span>
          </h1>
          <p className="max-w-2xl mt-4 text-sm font-medium text-slate-500">
            These terms govern the operational aspects of your journey, including kilometer calculations, 
            vehicle usage, and your responsibilities as a passenger.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          
          {/* Left Column: Core Operational Policies */}
          <div className="space-y-12 lg:col-span-7">
            
            <section>
              <ul className="p-0 list-none">
                <SectionHeader icon={FileText}  title="Package" />
                <TermItem>Kilometers are generally calculated on a Garage-to-Garage basis.</TermItem>
                <TermItem>Minimum travel requirement is 300 KM per day for outstation trips.</TermItem>
                <TermItem>One calendar day is defined from 12:00 AM to 11:59 PM.</TermItem>
                <TermItem>Extra KM and Extra Hours beyond the package will be charged based on the vehicle type.</TermItem>
                
              </ul>
            </section>
          </div>
       </div>

      </div>
    </main>
  );
}