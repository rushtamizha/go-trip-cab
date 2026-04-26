"use client";

import React, { useState } from "react";
import { User, Phone, MapPin, Calendar, Clock, Users } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { company } from "@/lib/data";

export default function BookingForm({ carType, tripType }) {
  const [formData, setFormData] = useState({
    name: "", mobile: "", pickup: "", drop: "", date: "", time: "", returnDate: "", members: "",
  });

  const handleWhatsApp = () => {
    if (!formData.name || !formData.mobile || !formData.pickup || !formData.drop) {
      alert("Please fill in your name, mobile, and route details.");
      return;
    }
    const message = `*NEW BOOKING REQUEST*%0A--------------------------%0A*Trip:* ${tripType.toUpperCase()}%0A*Name:* ${formData.name}%0A*Mobile:* ${formData.mobile}%0A*From:* ${formData.pickup}%0A*To:* ${formData.drop}%0A%0A*Pickup:* ${formData.date} at ${formData.time}%0A*Car:* ${carType}%0A*Members:* ${formData.members}%0A--------------------------`;
    window.open(`https://wa.me/${company.whatsapp}?text=${message}`, "_blank");
  };

  // REDUCED: Height from 14 to 11, Padding from 5 to 4, Text from base to xs
  const inputClass = "w-full h-11 px-4 rounded-xl bg-gray-50/50 border border-gray-100 transition-all outline-none text-[13px] font-semibold text-gray-900 placeholder:text-gray-400 placeholder:font-medium focus:bg-white focus:border-orange-500";
  
  // REDUCED: Text to [10px], Margin to 1
  const labelClass = "flex items-center gap-1.5 mb-1 text-[10px] text-gray-900 font-semibold  tracking-widest";

  return (
    // REDUCED: Padding from 10 to 6, Rounded from 2.5rem to 2rem
    <div className="w-full max-w-5xl mx-auto bg-white rounded-[2rem] shadow-sm p-5 md:p-8 border border-slate-50">
      
      {/* Header - Compact */}
      <div className="mb-5">
        <h2 className="text-xl font-bold tracking-wider text-gray-900 ">
          Book Your Ride
        </h2>
        <div className="flex items-center gap-2 mt-1">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <p className="text-[10px] font-medium  text-gray-500  tracking-widest">
            Instant WhatsApp Confirmation
          </p>
        </div>
      </div>

      {/* Grid: Gap reduced from 5 to 3 */}
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
        
        {/* Row 1 */}
        <div className="space-y-0.5">
          <label className={labelClass}><User size={12} className="text-orange-500" /> Name</label>
          <input type="text" placeholder="Your Name" className={inputClass} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
        </div>

        <div className="space-y-0.5">
          <label className={labelClass}><Phone size={12} className="text-orange-500" /> Mobile</label>
          <input type="tel" placeholder="+91" className={inputClass} onChange={(e) => setFormData({ ...formData, mobile: e.target.value })} />
        </div>

        {/* Row 2 */}
        <div className="space-y-0.5">
          <label className={labelClass}><MapPin size={12} className="text-orange-500" /> From</label>
          <input type="text" placeholder="Pickup point" className={inputClass} onChange={(e) => setFormData({ ...formData, pickup: e.target.value })} />
        </div>

        <div className="space-y-0.5">
          <label className={labelClass}><MapPin size={12} className="text-orange-500" /> To</label>
          <input type="text" placeholder="Drop location" className={inputClass} onChange={(e) => setFormData({ ...formData, drop: e.target.value })} />
        </div>

        {/* Row 3: Schedule */}
        <div className="grid grid-cols-2 gap-3 md:col-span-1">
          <div className="space-y-0.5">
            <label className={labelClass}><Calendar size={12} className="text-orange-500" /> Date</label>
            <input type="date" className={inputClass} onChange={(e) => setFormData({ ...formData, date: e.target.value })} />
          </div>
          <div className="space-y-0.5">
            <label className={labelClass}><Clock size={12} className="text-orange-500" /> Time</label>
            <input type="time" className={inputClass} onChange={(e) => setFormData({ ...formData, time: e.target.value })} />
          </div>
        </div>

        <div className="space-y-0.5">
          <label className={labelClass}><Users size={12} className="text-orange-500" /> Persons</label>
          <input type="number" placeholder="Count" className={inputClass} onChange={(e) => setFormData({ ...formData, members: e.target.value })} />
        </div>

        {/* Return Date - Only shows if Round Trip */}
        <AnimatePresence>
          {tripType === "round" && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="space-y-0.5 md:col-span-2">
              <label className={labelClass}><Calendar size={12} className="text-orange-500" /> Return Date</label>
              <input type="date" className={inputClass} onChange={(e) => setFormData({ ...formData, returnDate: e.target.value })} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Submission: Reduced Padding and Font */}
      <button
        onClick={handleWhatsApp}
        className="w-full mt-6 py-3.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white text-[11px] font-black uppercase tracking-[0.2em] transition-all active:scale-[0.98] "
      >
        Confirm on WhatsApp
      </button>
    </div>
  );
}