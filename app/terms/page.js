"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  FileText, Fuel, ShieldAlert, Scale, 
  Clock, Luggage, Ban, Info, CheckCircle2 
} from "lucide-react";
import BackButton from "@/components/Back";

const TermSection = ({ icon, title, children }) => (
  <div className="p-8 border border-slate-100 rounded-[2.5rem] bg-white group hover:border-orange-200 transition-all">
    <div className="flex items-center gap-4 mb-6">
      <div className="flex items-center justify-center w-10 h-10 transition-all rounded-xl bg-slate-50 text-slate-400 group-hover:bg-orange-600 group-hover:text-white">
        {icon}
      </div>
      <h3 className="text-[11px] font-black uppercase tracking-widest text-slate-900">{title}</h3>
    </div>
    <div className="space-y-3">
      {children}
    </div>
  </div>
);

const PolicyPoint = ({ text }) => (
  <div className="flex items-start gap-3">
    <div className="mt-1.5 w-1 h-1 rounded-full bg-orange-500 shrink-0" />
    <p className="text-[12px] font-medium leading-relaxed text-slate-500">{text}</p>
  </div>
);

const TermsAndConditions = () => {
  return (
    <main className="min-h-screen pb-20 bg-slate-50/50">
        <BackButton/>
      <div className="max-w-6xl px-6 mx-auto">
        
        {/* Header Area */}
        <div className="flex flex-col items-end justify-between gap-8 mb-12 md:flex-row">
          <div className="max-w-xl">
            <div className="mt-8">
              <span className="text-[10px] font-black text-orange-600 uppercase tracking-[0.4em] block mb-4">
                Legal Framework
              </span>
              <h1 className="text-4xl font-black leading-tight tracking-tighter uppercase text-slate-900">
                Terms of <br /> <span className="text-orange-600">Engagement</span>
              </h1>
            </div>
          </div>
          <div className="hidden pb-2 lg:block">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest border-l-2 border-orange-500 pl-4">
              Last Updated: April 2026 <br /> Jurisdiction: Bangalore
            </p>
          </div>
        </div>

        {/* Policy Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          
          {/* 1. Permits & Taxation */}
          <TermSection title="Taxes & Permits" icon={<FileText size={18} />}>
            <PolicyPoint text="All state taxes/permits are valid for one week and single entry only." />
            <PolicyPoint text="Charges can be paid online or at respective check posts." />
          </TermSection>

          {/* 2. Pricing Dynamics */}
          <TermSection title="Pricing & Booking" icon={<Fuel size={18} />}>
            <PolicyPoint text="Prices subject to change based on fuel, seasonality, and peak weekends." />
            <PolicyPoint text="Confirm final rates before proceeding with the booking." />
          </TermSection>

          {/* 3. Vehicle Care */}
          <TermSection title="Vehicle Protocol" icon={<ShieldAlert size={18} />}>
            <PolicyPoint text="Maintain cleanliness; any damage to the vehicle is chargeable." />
            <PolicyPoint text="Pets and illegal activities are strictly prohibited." />
          </TermSection>

          {/* 4. Journey Management */}
          <TermSection title="Journey Conduct" icon={<Clock size={18} />}>
            <PolicyPoint text="Manage your own sightseeing time; cooperate with the driver." />
            <PolicyPoint text="This is a transportation service, not a guided tour." />
          </TermSection>

          {/* 5. Liabilities */}
          <TermSection title="Liability Limits" icon={<Luggage size={18} />}>
            <PolicyPoint text="Company is not responsible for loss of belongings." />
            <PolicyPoint text="Natural causes and delays are the customer's responsibility." />
          </TermSection>

          {/* 6. Legal & Disputes */}
          <TermSection title="Legal & Safety" icon={<Scale size={18} />}>
            <PolicyPoint text="All disputes are subject to Bangalore jurisdiction." />
            <PolicyPoint text="Itineraries are customizable only until final confirmation." />
          </TermSection>

        </div>

        {/* High-Impact Alert: Peak Season Policy */}
        <div className="mt-12 p-8 bg-slate-900 rounded-[3rem] text-white">
          <div className="flex flex-col items-center gap-8 md:flex-row">
            <div className="w-16 h-16 bg-orange-600 rounded-[1.5rem] flex items-center justify-center shrink-0">
              <Ban size={28} />
            </div>
            <div className="flex-1">
              <h4 className="mb-2 text-sm font-black tracking-widest text-orange-500 uppercase">Peak Season Restrictions</h4>
              <p className="text-[12px] text-slate-400 font-medium leading-relaxed">
                Confirmed bookings <span className="font-bold text-white underline">cannot be changed or cancelled</span> during weekends, festivals, or high-demand periods. Please confirm specific terms during booking.
              </p>
            </div>
          </div>
        </div>

        {/* Assurance Box */}
        <div className="mt-6 p-8 border border-emerald-100 bg-emerald-50/30 rounded-[3rem] flex flex-col md:flex-row gap-6 items-center">
          <div className="flex items-center justify-center w-12 h-12 bg-white border shadow-sm rounded-2xl text-emerald-500 border-emerald-50">
            <CheckCircle2 size={24} />
          </div>
          <div>
            <h4 className="text-[11px] font-black text-emerald-700 uppercase tracking-widest mb-1">Our Commitment</h4>
            <p className="text-[12px] text-slate-500 font-medium">
              In case of vehicle failure, our 24/7 support will assist in arranging an alternate vehicle. If none is available, a <span className="font-bold text-slate-900">full refund</span> of the advance will be processed.
            </p>
          </div>
        </div>

      </div>
    </main>
  );
};

export default TermsAndConditions;