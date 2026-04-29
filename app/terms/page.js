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
              <SectionHeader icon={MapPin} title="Kilometer & Package Policy" />
              <ul className="p-0 list-none">
                <TermItem>Kilometers are generally calculated on a Garage-to-Garage basis.</TermItem>
                <TermItem>Minimum travel requirement is 300 KM per day for outstation trips.</TermItem>
                <TermItem>One calendar day is defined from 12:00 AM to 11:59 PM.</TermItem>
                <TermItem>Extra KM and Extra Hours beyond the package will be charged based on the vehicle type.</TermItem>
              </ul>
            </section>

            <section>
              <SectionHeader icon={FileText} title="Tolls, Taxes & Permits" />
              <ul className="p-0 list-none">
                <TermItem>Toll, parking, and entry charges are extra and payable as per actuals unless specified.</TermItem>
                <TermItem>State permits and interstate taxes apply as per government rules for each entry.</TermItem>
                <TermItem>One-way trips are generally charged for both-side kilometers.</TermItem>
              </ul>
            </section>

            <section>
              <SectionHeader icon={Car} title="Vehicle Usage Guidelines" />
              <ul className="p-0 list-none">
                <TermItem>Outstation vehicles are intended for inter-city travel and not local usage.</TermItem>
                <TermItem>Air Conditioning (AC) will be turned off in hilly areas for safety and performance.</TermItem>
                <TermItem>AC will not be operational when the vehicle is parked or in waiting mode.</TermItem>
                <TermItem>Pets are strictly not allowed inside the vehicles.</TermItem>
              </ul>
            </section>
          </div>

          {/* Right Column: Responsibilities & Important Notes */}
          <div className="lg:col-span-5">
            <div className="sticky space-y-6 top-32">
              
              <div className="p-8 border rounded-3xl bg-slate-50 border-slate-100">
                <div className="flex items-center gap-2 mb-6">
                  <Users className="text-orange-600" size={18} />
                  <h4 className="text-[11px] font-black uppercase tracking-widest text-slate-900">Customer Roles</h4>
                </div>
                <ul className="space-y-4">
                  <li className="text-[12px] text-slate-600 font-medium leading-relaxed">
                    <strong className="block mb-1 text-slate-900">Safety & Conduct</strong>
                    Cooperate with the driver and maintain cleanliness. Any vehicle damage is chargeable.
                  </li>
                  <li className="text-[12px] text-slate-600 font-medium leading-relaxed">
                    <strong className="block mb-1 text-slate-900">Personal Items</strong>
                    The company is not responsible for the loss of any personal belongings.
                  </li>
                  <li className="text-[12px] text-slate-600 font-medium leading-relaxed">
                    <strong className="block mb-1 text-slate-900">Itinerary</strong>
                    Manage your own time for sightseeing; drivers follow the finalized itinerary shared during booking.
                  </li>
                </ul>
              </div>

              <div className="p-8 text-white bg-orange-600 rounded-3xl">
                <div className="flex items-center gap-2 mb-4">
                  <AlertTriangle size={18} />
                  <h4 className="text-[11px] font-black uppercase tracking-widest">Important Note</h4>
                </div>
                <p className="text-[12px] font-bold leading-relaxed opacity-90">
                  Quoted prices are subject to change based on seasonal demand, fuel fluctuations, and peak dates. 
                  All disputes are subject to Bangalore jurisdiction.
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* Footer Confirmation */}
        <div className="flex flex-col items-center justify-between gap-6 pt-10 mt-20 border-t border-slate-100 md:flex-row">
          <div className="flex items-center gap-4">
            <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-emerald-50">
              <ShieldCheck className="text-emerald-600" size={24} />
            </div>
            <div>
              <p className="text-[11px] font-black uppercase text-slate-900">Binding Agreement</p>
              <p className="text-[11px] text-slate-500 font-medium">Proceeding with a booking implies full acceptance of these terms.</p>
            </div>
          </div>
          <button 
            onClick={() => window.print()}
            className="px-6 py-3 rounded-xl bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest hover:bg-slate-800 transition-all"
          >
            Download PDF
          </button>
        </div>

      </div>
    </main>
  );
}