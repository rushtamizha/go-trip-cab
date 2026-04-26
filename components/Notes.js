"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Info, ChevronDown, AlertCircle } from "lucide-react";
import { Notes } from "@/lib/data";

export const NotesPolicy = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="w-full max-w-6xl py-4">
      <div 
        className={`transition-all duration-500 rounded-[2.5rem] border ${
          isOpen 
          ? "bg-[#FDF6ED] border-orange-100  " 
          : "bg-slate-50 border-slate-100"
        }`}
      >
        {/* Header Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-between w-full p-8 outline-none"
        >
          <div className="flex items-center gap-4">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
              isOpen ? "bg-orange-500 text-white" : "bg-slate-200 text-slate-500"
            }`}>
              <Info size={20} />
            </div>
            <div className="text-left">
              <h3 className="text-sm font-black tracking-tight uppercase text-slate-900">
                Notes
              </h3>
              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-0.5">
                Essential Travel Guidelines
              </p>
            </div>
          </div>
          
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            className={`w-8 h-8 flex items-center justify-center rounded-full ${
              isOpen ? "bg-orange-100 text-orange-600" : "text-slate-300"
            }`}
          >
            <ChevronDown size={18} />
          </motion.div>
        </button>

        {/* Policy Content */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <div className="px-8 pb-10 space-y-4">
                {Notes.map((note, index) => (
                  <motion.div 
                    key={index}
                    initial={{ x: -10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-start gap-4 group"
                  >
                    <div className="flex-shrink-0 mt-1">
                      <AlertCircle size={16} className="text-orange-400 transition-colors group-hover:text-orange-600" />
                    </div>
                    <span className="text-[13px] font-bold leading-relaxed text-slate-700 tracking-tight">
                      {note}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

