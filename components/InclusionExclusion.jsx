"use client";

import React, { useState } from "react";
import { Check, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
// Importing your data
import { Inclusion, Exclusion } from "@/lib/data";

const PolicyToggle = () => {
  const [activeTab, setActiveTab] = useState("inclusion");

  const displayData = activeTab === "inclusion" ? Inclusion : Exclusion;

  return (
    <div className="w-full max-w-4xl py-5 mx-auto bg-white rounded-3xl">
      {/* Toggle Selector - Exact match to image */}
      <div className="flex items-center gap-8 px-4 mb-10">
        {["inclusion", "exclusion"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className="relative group focus:outline-none"
          >
            <div className="flex items-center gap-2 px-3 py-1">
              {/* The Orange Vertical Bar (Only for active) */}
              {activeTab === tab && (
                <motion.div
                  layoutId="activeBar"
                  className="w-1.5 h-7 bg-orange-600 rounded-full"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              
              <span
                className={`text font-medium transition-all duration-300 ${
                  activeTab === tab 
                  ? "text-gray-900" 
                  : "text-gray-400 hover:text-gray-600"
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </span>
            </div>

            {/* Pill Shadow Effect (Subtle background) */}
            {activeTab === tab && (
              <motion.div
                layoutId="pillBg"
                className="absolute inset-0 shadow-sm bg-gray-100/50 rounded-xl -z-10"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Content Area */}
      <div className="px-6 ">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="space-y-5"
          >
            {displayData.map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className={`mt-0.5 flex-shrink-0 p-0.5 rounded-full ${
                  activeTab === "inclusion" ? "bg-green-500" : "bg-red-500"
                }`}>
                  {activeTab === "inclusion" ? (
                    <Check className="w-3.5 h-3.5 text-white stroke-[4]" />
                  ) : (
                    <X className="w-3.5 h-3.5 text-white stroke-[4]" />
                  )}
                </div>
                <span className="text-sm font-medium text-gray-700">
                  {item}
                </span>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default PolicyToggle;