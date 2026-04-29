"use client";

import React from "react";
import { ShieldCheck, Clock, RefreshCw, AlertCircle } from "lucide-react";

/**
 * Cancellation Policy Page
 * Based on Comprehensive Service Terms
 */
export default function CancellationPolicy() {
  
  const PolicyCard = ({ title, percent, description, highlight = false }) => (
    <div className={`p-6 rounded-2xl border transition-all ${
      highlight 
        ? "bg-orange-50 border-orange-200 shadow-sm" 
        : "bg-white border-slate-100 hover:border-slate-200"
    }`}>
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-[11px] font-black uppercase tracking-widest text-slate-500">{title}</h3>
        <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase ${
          percent === "100% Refund" ? "bg-emerald-100 text-emerald-700" : "bg-orange-100 text-orange-700"
        }`}>
          {percent}
        </span>
      </div>
      <p className="text-[13px] font-medium leading-relaxed text-slate-700">{description}</p>
    </div>
  );

  return (
    <main className="min-h-screen pt-32 pb-20 bg-white">
      <div className="max-w-4xl px-6 mx-auto">
        
        {/* Header Section */}
        <div className="mb-16 text-center">
          <span className="text-[10px] font-black text-orange-600 uppercase tracking-[0.4em] block mb-4">
            Service Protections
          </span>
          <h1 className="mb-6 text-4xl font-black tracking-tighter uppercase md:text-5xl text-slate-900">
            Cancellation & <br /> <span className="text-orange-600">Refund Policy</span>
          </h1>
          <p className="max-w-xl mx-auto text-sm font-medium text-slate-500">
            Transparent rules regarding booking modifications, cancellations, and the timeline for receiving your refunds.
          </p>
        </div>

        {/* Cancellation Rules Grid */}
        <div className="grid grid-cols-1 gap-4 mb-12 md:grid-cols-2">
          <PolicyCard 
            title="Immediate Change"
            percent="100% Refund"
            description="Cancellations made on the same day as the booking date are eligible for a full refund."
          />
          <PolicyCard 
            title="Early Cancellation"
            percent="75% Refund"
            description="Cancellations made 7 days or more prior to the scheduled trip date."
          />
          <PolicyCard 
            title="Standard Notice"
            percent="50% Refund"
            description="Cancellations made between 3 to 6 days before the trip (50% cancellation charge applies)."
          />
          <PolicyCard 
            title="Short Notice"
            percent="25% Refund"
            description="Cancellations made between 1 to 3 days before the trip (75% cancellation charge applies)."
          />
          <div className="md:col-span-2">
            <PolicyCard 
              highlight
              title="Critical Window"
              percent="0% Refund"
              description="Cancellations made within 24 hours of the trip or 1 day before the trip: 100% of the advance confirmation amount is non-refundable."
            />
          </div>
        </div>

        {/* Refund Timeline Section */}
        <div className="bg-slate-900 rounded-[2.5rem] p-8 md:p-12 text-white overflow-hidden relative">
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-8">
              <RefreshCw className="text-orange-500 animate-spin-slow" size={24} />
              <h2 className="text-xl font-black tracking-tight uppercase">Refund Processing</h2>
            </div>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/10 shrink-0">
                  <Clock className="text-orange-500" size={18} />
                </div>
                <div>
                  <h4 className="mb-1 text-sm font-black uppercase">Standard Refund Timeline</h4>
                  <p className="text-slate-400 text-[13px] leading-relaxed">
                    Eligible refunds are processed within 2-3 working days from the date of cancellation confirmation.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/10 shrink-0">
                  <ShieldCheck className="text-orange-500" size={18} />
                </div>
                <div>
                  <h4 className="mb-1 text-sm font-black uppercase">Excess Collection Guarantee</h4>
                  <p className="text-slate-400 text-[13px] leading-relaxed">
                    If any excess amount is collected by the driver, it will be verified and refunded within 3-4 working days.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Decorative Background Element */}
          <div className="absolute -right-20 -bottom-20 opacity-10">
             <ShieldCheck size={300} />
          </div>
        </div>

        {/* Peak Season Warning */}
        <div className="flex gap-4 p-6 mt-12 border rounded-2xl bg-amber-50 border-amber-100">
          <AlertCircle className="text-amber-600 shrink-0" size={20} />
          <div>
            <h4 className="text-[11px] font-black uppercase text-amber-900 tracking-widest mb-2">Seasonal Policy Notice</h4>
            <p className="text-[12px] font-medium text-amber-800 leading-relaxed">
              During peak seasons, festivals, or high-demand weekends, confirmed bookings cannot be changed or cancelled. If the booked vehicle fails to arrive during these periods, a full refund of the advance will be processed.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}