"use client";

import React from "react";
import { motion } from "framer-motion";
import { Undo2, Clock, AlertCircle, CheckCircle2, Wallet } from "lucide-react";
import BackButton from "@/components/Back";


const refundRules = [
  {
    title: "Same-Day Cancellation",
    condition: "On the exact booking date",
    refund: "100%",
    type: "Full Refund",
    desc: "Cancellations made within the same day of booking are eligible for a complete reversal.",
    color: "bg-emerald-50 text-emerald-600 border-emerald-100"
  },
  {
    title: "Early Cancellation",
    condition: "7 days or more prior",
    refund: "75%",
    type: "Refund",
    desc: "Cancellations made at least a week before the trip start date.",
    color: "bg-blue-50 text-blue-600 border-blue-100"
  },
  {
    title: "Standard Cancellation",
    condition: "3 to 6 days prior",
    refund: "50%",
    type: "Deduction",
    desc: "A 50% cancellation charge will apply for mid-week notifications.",
    color: "bg-orange-50 text-orange-600 border-orange-100"
  },
  {
    title: "Late Cancellation",
    condition: "1 to 3 days prior",
    refund: "25%",
    type: "Refund",
    desc: "A 75% cancellation charge applies (Only 25% of the amount is returned).",
    color: "bg-rose-50 text-rose-600 border-rose-100"
  }
];

const RefundPolicy = () => {
  return (
    <main className="min-h-screen pb-20 bg-white ">
         <BackButton />
      <div className="max-w-5xl px-6 mx-auto">
        
        {/* Header Section */}
        <div className="mb-12">
         
          <div className="mt-8">
            <span className="text-[10px] font-black text-orange-600 uppercase tracking-[0.4em] block mb-4">
              Transparency First
            </span>
            <h1 className="text-4xl font-black leading-none tracking-tighter uppercase text-slate-900">
              Cancellation & <br /> <span className="text-orange-600">Refund Policy</span>
            </h1>
          </div>
        </div>

        {/* Refund Schedule Grid */}
        <div className="grid grid-cols-1 gap-4 mb-12 md:grid-cols-2">
          {refundRules.map((rule, idx) => (
            <div key={idx} className="p-8 border border-slate-100 rounded-[2.5rem] bg-slate-50/50 flex flex-col justify-between group hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all">
              <div>
                <div className="flex items-start justify-between mb-6">
                  <h3 className="text-sm font-black tracking-tight uppercase text-slate-900">{rule.title}</h3>
                  <div className={`px-4 py-1 rounded-full border text-[10px] font-black uppercase tracking-widest ${rule.color}`}>
                    {rule.refund} {rule.type}
                  </div>
                </div>
                <p className="text-[13px] text-slate-500 font-medium leading-relaxed mb-4">
                  {rule.desc}
                </p>
              </div>
              <div className="flex items-center gap-2 pt-4 border-t border-slate-100">
                <Clock size={14} className="text-slate-400" />
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{rule.condition}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Critical Clauses */}
        <div className="space-y-4">
          {/* Non-Refundable Warning */}
          <div className="p-8 bg-slate-900 rounded-[2.5rem] text-white flex flex-col md:flex-row gap-6 items-center">
            <div className="flex items-center justify-center shadow-lg w-14 h-14 bg-rose-500 rounded-2xl shrink-0 shadow-rose-500/20">
              <AlertCircle size={28} />
            </div>
            <div>
              <h4 className="mb-1 text-sm font-black tracking-widest uppercase">Last Minute Cancellation</h4>
              <p className="text-[12px] text-slate-400 leading-relaxed font-medium">
                Cancellations made within 24 hours of the trip (or 1 day before) are <span className="font-bold text-rose-400">100% non-refundable</span>. This applies to the total advance confirmation amount.
              </p>
            </div>
          </div>

          {/* Timeline Information */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="p-8 border border-slate-100 rounded-[2.5rem] bg-white">
              <div className="flex items-center gap-4 mb-4">
                <CheckCircle2 className="text-emerald-500" size={20} />
                <h4 className="text-[11px] font-black text-slate-900 uppercase tracking-widest">Processing Time</h4>
              </div>
              <p className="text-[12px] text-slate-500 leading-relaxed">
                Eligible refunds will be processed within <span className="font-bold text-slate-900">2-3 working days</span> from the date of cancellation confirmation.
              </p>
            </div>

            <div className="p-8 border border-slate-100 rounded-[2.5rem] bg-white">
              <div className="flex items-center gap-4 mb-4">
                <Wallet className="text-orange-500" size={20} />
                <h4 className="text-[11px] font-black text-slate-900 uppercase tracking-widest">Excess Collections</h4>
              </div>
              <p className="text-[12px] text-slate-500 leading-relaxed">
                Any excess amount collected by the driver will be verified and refunded within <span className="font-bold text-slate-900">3-4 working days</span>.
              </p>
            </div>
          </div>
        </div>


      </div>
    </main>
  );
};

export default RefundPolicy;