"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronDown, ShieldCheck, Wallet, FileText, 
  AlertCircle, Car, MapPin, Ban 
} from 'lucide-react';

const PolicyAccordion = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const sections = [
    {
      id: 'cancellation',
      title: 'Cancellation & Refund Policy',
      icon: <ShieldCheck className="text-amber-600" size={22} />,
      content: (
        <div className="space-y-4">
          <div className="grid gap-3">
            <h4 className="text-sm font-bold tracking-wider uppercase text-slate-800">Cancellation Charges</h4>
            <ul className="space-y-2">
              <li className="flex justify-between p-3 border border-green-100 rounded-lg bg-green-50">
                <span className="text-sm font-medium">Same Day Booking Cancellation</span>
                <span className="text-sm font-bold text-green-700">100% Refund</span>
              </li>
              <li className="flex justify-between p-3 border rounded-lg bg-slate-50 border-slate-100">
                <span className="text-sm">7+ Days Prior</span>
                <span className="text-sm font-bold text-slate-700">75% Refund</span>
              </li>
              <li className="flex justify-between p-3 border rounded-lg bg-slate-50 border-slate-100">
                <span className="text-sm">3–6 Days Before</span>
                <span className="text-sm font-bold text-slate-700">50% Charge</span>
              </li>
              <li className="flex justify-between p-3 border rounded-lg bg-amber-50 border-amber-100">
                <span className="text-sm font-medium">Within 24 Hours / No Show</span>
                <span className="text-sm font-bold text-amber-700">Non-Refundable</span>
              </li>
            </ul>
          </div>
          <div className="p-4 bg-blue-50 rounded-xl">
            <h4 className="mb-2 text-sm font-bold text-blue-900 uppercase">Refund Processing</h4>
            <p className="text-sm leading-relaxed text-blue-700">
              * Standard refunds: 2-3 working days.<br />
              * Excess driver collection: Verified and refunded within 3-4 working days.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'payments',
      title: 'Payment Terms',
      icon: <Wallet className="text-amber-600" size={22} />,
      content: (
        <div className="space-y-4 text-sm text-slate-600">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="p-4 bg-white border shadow-sm border-slate-100 rounded-xl">
              <span className="block mb-1 italic font-bold text-slate-900">Advance</span>
              20% required for confirmation. Adjusted in final invoice.
            </div>
            <div className="p-4 bg-white border shadow-sm border-slate-100 rounded-xl">
              <span className="block mb-1 italic font-bold text-slate-900">Pre-Trip</span>
              50% of total amount must be paid before journey starts.
            </div>
          </div>
          <ul className="pl-5 space-y-2 text-sm list-disc">
            <li>Remaining balance settled immediately upon completion.</li>
            <li className="font-bold text-red-600">No credit facility provided under any circumstances.</li>
            <li>Vehicle allocation subject to availability at time of travel.</li>
            <li>In case of operational issues, a similar category vehicle will be provided.</li>
          </ul>
        </div>
      )
    },
    {
      id: 'terms',
      title: 'Terms & Conditions',
      icon: <FileText className="text-amber-600" size={22} />,
      content: (
        <div className="space-y-6 text-sm">
          {/* Sub-section: Usage */}
          <div>
            <h4 className="flex items-center gap-2 mb-3 font-bold text-slate-800">
              <Car size={16} /> Vehicle Usage Guidelines
            </h4>
            <div className="grid grid-cols-1 gap-2 text-sm sm:grid-cols-2">
              <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-50">
                <Ban size={14} className="text-red-400" /> No Pets Allowed
              </div>
              <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-50">
                <AlertCircle size={14} className="text-amber-500" /> AC off in Hilly Areas
              </div>
            </div>
          </div>

          {/* Sub-section: Responsibilities */}
          <div className="p-4 rounded-2xl bg-slate-900 text-slate-300">
            <h4 className="mb-2 text-sm font-bold tracking-tighter text-white uppercase">Customer Responsibilities</h4>
            <ul className="grid grid-cols-1 gap-2 text-[11px] list-disc pl-4">
              <li>Maintain vehicle cleanliness; damages are chargeable.</li>
              <li>Illegal activities are strictly prohibited.</li>
              <li>Cooperate with driver; Not a guided tour service.</li>
              <li>Loss of belongings is not the company’s responsibility.</li>
              <li className="text-amber-400">All disputes subject to Bangalore jurisdiction.</li>
            </ul>
          </div>

          {/* Sub-section: State Taxes */}
          <div className="flex items-start gap-3 p-3 border border-orange-100 rounded-xl bg-amber-50/30">
            <MapPin className="text-orange-600 shrink-0" size={18} />
            <p className="text-[11px] leading-relaxed text-slate-600">
              <strong className="text-slate-900">State Taxes & Permits:</strong> Valid for one week/single entry. 
              The quoted price is subject to change based on seasonal demand, fuel prices, and peak festivals 
              (New Year, Deepavali, etc.).
            </p>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="w-full max-w-4xl mx-auto space-y-3">
      {sections.map((section) => (
        <div 
          key={section.id} 
          className="overflow-hidden bg-white border border-slate-100 rounded-3xl"
        >
          <button
            onClick={() => toggleSection(section.id)}
            className="flex items-center justify-between w-full p-5 text-left transition-colors hover:bg-slate-50"
          >
            <div className="flex items-center gap-4">
              <div className="p-2 bg-orange-50 rounded-xl">
                {section.icon}
              </div>
              <span className="font-black tracking-tight text-slate-900">{section.title}</span>
            </div>
            <motion.div
              animate={{ rotate: openSection === section.id ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown className="text-slate-400" size={20} />
            </motion.div>
          </button>

          <AnimatePresence>
            {openSection === section.id && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
              >
                <div className="p-6 pt-0 border-t border-slate-50">
                  <div className="mt-4">
                    {section.content}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

export default PolicyAccordion;