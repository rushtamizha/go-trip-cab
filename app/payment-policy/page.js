"use client";

import React from "react";
import { 
  Wallet, 
  ShieldCheck, 
  CheckCircle2, 
  Clock, 
  Car, 
  FileText,
  AlertCircle,
  MessageSquare
} from "lucide-react";

export default function PaymentPolicy() {
  
  const Milestone = ({ icon: Icon, title, amount, description, isLast = false }) => (
    <div className="relative flex gap-6 pb-12 last:pb-0">
      {!isLast && (
        <div className="absolute left-[23px] top-[48px] bottom-0 w-0.5 bg-slate-100" />
      )}
      <div className="relative z-10 flex items-center justify-center w-12 h-12 bg-white border-2 shadow-sm rounded-2xl border-slate-100 shrink-0">
        <Icon className="text-orange-500" size={20} />
      </div>
      <div>
        <div className="flex items-center gap-3 mb-1">
          <h3 className="text-sm font-black tracking-tight uppercase text-slate-900">{title}</h3>
          <span className="px-2 py-0.5 rounded-md bg-orange-100 text-orange-700 text-[10px] font-black uppercase">
            {amount}
          </span>
        </div>
        <p className="text-[13px] font-medium leading-relaxed text-slate-500">
          {description}
        </p>
      </div>
    </div>
  );

  return (
    <main className="min-h-screen pt-32 pb-20 bg-white">
      <div className="max-w-5xl px-6 mx-auto">
        
        {/* Header Section */}
        <div className="mb-16">
          <span className="text-[10px] font-black text-orange-600 uppercase tracking-[0.4em] block mb-4">
            Financial Terms
          </span>
          <h1 className="text-4xl font-black tracking-tighter uppercase md:text-5xl text-slate-900">
            Payment & <span className="text-orange-600">Booking</span>
          </h1>
          <p className="max-w-2xl mt-4 text-sm font-medium text-slate-500">
            Our structured payment process ensures vehicle priority and a transparent billing experience for every journey.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          
          {/* Left Column: Milestones */}
          <div className="lg:col-span-7">
            <div className="bg-slate-50/50 rounded-[2.5rem] p-8 md:p-12 border border-slate-100">
              <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-10">
                / Payment Journey
              </h2>
              
              <div className="space-y-2">
                <Milestone 
                  icon={ShieldCheck}
                  title="Booking Deposit"
                  amount="20% Advance"
                  description="A minimum 20% advance is required. Booking is confirmed only after receipt of this amount."
                />
                <Milestone 
                  icon={Clock}
                  title="Trip Start"
                  amount="50% Total"
                  description="50% of the total amount must be paid before the start of the trip."
                />
                <Milestone 
                  icon={CheckCircle2}
                  title="Final Settlement"
                  amount="Balance Due"
                  description="Remaining balance must be settled immediately upon trip completion. The advance is adjusted in this final invoice."
                  isLast
                />
              </div>
            </div>
          </div>

          {/* Right Column: Operational Terms */}
          <div className="space-y-6 lg:col-span-5">
            
            {/* Booking Details Box */}
            <div className="p-8 text-white rounded-3xl bg-slate-900">
              <div className="flex items-center gap-3 mb-6">
                <MessageSquare className="text-orange-500" size={20} />
                <h3 className="text-sm font-black tracking-widest uppercase">Confirmation</h3>
              </div>
              <ul className="space-y-4">
                <li className="text-[12px] font-medium text-slate-400 leading-relaxed">
                  Complete trip details (Date, Time, Pickup & Drop) must be shared clearly at booking.
                </li>
                <li className="text-[12px] font-medium text-slate-400 leading-relaxed">
                  Confirmation will be provided via Call, WhatsApp, or SMS.
                </li>
                <li className="text-[12px] font-medium text-slate-400 leading-relaxed">
                  Vehicle allocation is subject to availability at the time of travel.
                </li>
              </ul>
            </div>

            {/* Operational Issues Box */}
            <div className="p-8 border rounded-3xl bg-slate-50 border-slate-100">
              <div className="flex items-center gap-3 mb-4">
                <Car className="text-orange-600" size={18} />
                <h4 className="text-[11px] font-black uppercase tracking-widest text-slate-900">Alternate Vehicles</h4>
              </div>
              <p className="text-[12px] text-slate-500 font-medium leading-relaxed">
                In case of operational issues, an alternate vehicle of a similar category may be provided, subject to availability.
              </p>
            </div>

            {/* Alert Box */}
            <div className="p-8 border border-orange-100 rounded-3xl bg-orange-50">
              <div className="flex items-center gap-3 mb-4">
                <AlertCircle className="text-orange-600" size={18} />
                <h4 className="text-[11px] font-black uppercase tracking-widest text-orange-900">Important</h4>
              </div>
              <p className="text-[12px] text-orange-800 font-bold leading-relaxed">
                No credit facility is provided under any circumstances. Final invoices are issued only after trip completion.
              </p>
            </div>

          </div>
        </div>

        {/* Footer Support */}
        <div className="flex items-center gap-4 pt-10 mt-20 border-t border-slate-100">
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-100">
            <FileText className="text-slate-500" size={18} />
          </div>
          <p className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">
            All disputes are subject to local jurisdiction.
          </p>
        </div>

      </div>
    </main>
  );
}