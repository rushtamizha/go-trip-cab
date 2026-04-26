
"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronDown, ShieldCheck, Wallet, FileText, 
  CheckCircle2, AlertCircle, Info
} from 'lucide-react';

// Importing your data arrays
import { CanellationRefundPolicy, PaymenTerms, TermsConditions } from "@/lib/data";

const PolicyAccordion = ({ showTerms = false }) => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (sectionId) => {
    setOpenSection(openSection === sectionId ? null : sectionId);
  };

  // Define all possible sections
  const allSections = [

     {
      id: 'payments',
      title: 'Booking & Payment Process',
      icon: <Wallet className="text-orange-600" size={22} />,
      data: PaymenTerms,
      accent: "border-green-100 bg-green-50/30",
      itemIcon: <CheckCircle2 className="w-4 h-4 mt-1 text-green-600 shrink-0" />
    },
    {
      id: 'cancellation',
      title: 'Cancellation & Refund',
      icon: <ShieldCheck className="text-orange-600" size={22} />,
      data: CanellationRefundPolicy,
      accent: "border-red-100 bg-red-50/30",
      itemIcon: <AlertCircle className="w-4 h-4 mt-1 text-red-500 shrink-0" />
    },
   
    {
      id: 'terms',
      title: 'Terms & Conditions',
      icon: <FileText className="text-orange-600" size={22} />,
      data: TermsConditions,
      accent: "border-blue-100 bg-blue-50/30",
      itemIcon: <Info className="w-4 h-4 mt-1 text-blue-500 shrink-0" />
    }
  ];

  // Logic: Show 3 if true, show 2 if false
  const activeSections = showTerms ? allSections : allSections.slice(0, 2);

  return (
    <div className="w-full max-w-5xl py-8 mx-auto space-y-4">
      {activeSections.map((section) => {
        const isOpen = openSection === section.id;
        
        return (
          <div 
            key={section.id} 
            className={`transition-all duration-500 rounded-[2rem]  overflow-hidden ${
              isOpen 
                ? "bg-white  " 
                : "bg-white  "
            }`}
          >
            {/* Header */}
            <button
              onClick={() => toggleSection(section.id)}
              className="flex items-center justify-between w-full p-6 text-left"
            >
              <div className="flex items-center gap-4">
                <div className={`p-2 rounded-2xl transition-all ${isOpen ? 'bg-slate-900 text-white' : 'bg-white border border-slate-100 text-slate-600'}`}>
                  {section.icon}
                </div>
                <div>
                  <span className={`text-sm font-black uppercase tracking-tight ${isOpen ? 'text-slate-900' : 'text-slate-800'}`}>
                    {section.title}
                  </span>
                  <p className="text-[9px] font-black text-slate-400 uppercase tracking-[0.2em] mt-1">
                    {isOpen ? "Collapse Details" : "View Policy details"}
                  </p>
                </div>
              </div>
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className={`p-2 rounded-full ${isOpen ? 'bg-orange-50 text-orange-500' : 'text-slate-300'}`}
              >
                <ChevronDown size={20} />
              </motion.div>
            </button>

            {/* Content Body */}
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                >
                  <div className="px-6 pb-8">
                    <div className={`rounded-[2rem] p-6 border-2 border-dashed ${section.accent}`}>
                      <div className="grid grid-cols-1 gap-5">
                        {section.data.map((item, i) => (
                          <motion.div 
                            key={i}
                            initial={{ x: -10, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: i * 0.05 }}
                            className="flex items-start gap-3 group"
                          >
                            <div className="mt-1">{section.itemIcon}</div>
                            <span className="text-[13px] font-bold leading-relaxed text-slate-600">
                              {item}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};

export default PolicyAccordion;