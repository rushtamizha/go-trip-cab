"use client";

import React, { useState } from "react";
import { User, Phone, MapPin, Calendar, Clock, Users, Plane, Navigation, Briefcase } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { company } from "@/lib/data";

export default function BookingForm({ carType }) {
  const [serviceType, setServiceType] = useState("outstation"); // outstation, local, airport
  const [tripType, setTripType] = useState("one-way"); // one-way, round
  const [formData, setFormData] = useState({
    name: "", mobile: "", pickup: "", drop: "", date: "", time: "", 
    returnDate: "", members: "4", localPackage: "8hrs/80km", direction: "to-airport", airport: "Bengaluru (BLR)"
  });

  const handleWhatsApp = () => {
    if (!formData.name || !formData.mobile || !formData.pickup) {
      alert("Please fill in the required details.");
      return;
    }

    const tripDetails = serviceType === "outstation" ? `Trip: ${tripType.toUpperCase()}` : `Service: ${serviceType.toUpperCase()}`;
    const locationDetails = serviceType === "local" ? `Package: ${formData.localPackage}` : `To: ${formData.drop || formData.airport}`;

    const message = `*NEW BOOKING REQUEST*%0A--------------------------%0A*Type:* ${serviceType.toUpperCase()}%0A*${tripDetails}*%0A*Name:* ${formData.name}%0A*Mobile:* ${formData.mobile}%0A*From:* ${formData.pickup}%0A*${locationDetails}*%0A%0A*Pickup:* ${formData.date} at ${formData.time}%0A*Car:* ${carType}%0A*Members:* ${formData.members}%0A--------------------------`;
    
    window.open(`https://wa.me/${company.whatsapp}?text=${message}`, "_blank");
  };

  const inputClass = "w-full h-11 px-4 rounded-xl bg-gray-50/50 border border-gray-100 transition-all outline-none text-[13px] font-semibold text-gray-900 focus:bg-white focus:border-orange-500 focus:ring-1 focus:ring-orange-500/20";
  const labelClass = "flex items-center gap-1.5 mb-1 text-[10px] text-gray-500 font-bold uppercase tracking-widest";
  const tabClass = (active) => `flex-1 py-2.5 text-[11px] font-bold rounded-lg transition-all ${active ? "bg-orange-500 text-white shadow-md" : "bg-gray-100 text-gray-500 hover:bg-gray-200"}`;

  return (
    <div className="w-full max-w-5xl mx-auto bg-white rounded-[2rem]  p-6 md:p-8 border border-slate-100">
      
      {/* Service Selection Tabs */}
      <div className="flex gap-2 p-1 mb-6 bg-gray-100 rounded-xl">
        {['outstation', 'local', 'airport'].map((type) => (
          <button key={type} onClick={() => setServiceType(type)} className={tabClass(serviceType === type)}>
            {type.toUpperCase()}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {/* Name & Phone */}
        <div className="space-y-1">
          <label className={labelClass}><User size={12} /> Name *</label>
          <input type="text" placeholder="Your Name" className={inputClass} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
        </div>
        <div className="space-y-1">
          <label className={labelClass}><Phone size={12} /> Phone *</label>
          <input type="tel" placeholder="10-digit mobile" className={inputClass} onChange={(e) => setFormData({ ...formData, mobile: e.target.value })} />
        </div>

        {/* Dynamic Trip Type for Outstation */}
        {serviceType === "outstation" && (
          <div className="flex gap-2 p-1 md:col-span-2 bg-orange-50 rounded-xl">
             <button onClick={() => setTripType("one-way")} className={`flex-1 py-2 text-[10px] font-bold rounded-lg ${tripType === "one-way" ? "bg-white text-orange-600 shadow-sm" : "text-orange-400"}`}>ONE WAY</button>
             <button onClick={() => setTripType("round")} className={`flex-1 py-2 text-[10px] font-bold rounded-lg ${tripType === "round" ? "bg-white text-orange-600 shadow-sm" : "text-orange-400"}`}>ROUND TRIP</button>
          </div>
        )}

        {/* Location Logic */}
        <div className="space-y-1">
          <label className={labelClass}><MapPin size={12} /> Pickup *</label>
          <input type="text" placeholder="Bangalore" className={inputClass} onChange={(e) => setFormData({ ...formData, pickup: e.target.value })} />
        </div>

        {serviceType === "outstation" && (
          <div className="space-y-1">
            <label className={labelClass}><Navigation size={12} /> Drop *</label>
            <input type="text" placeholder="Drop location" className={inputClass} onChange={(e) => setFormData({ ...formData, drop: e.target.value })} />
          </div>
        )}

        {serviceType === "local" && (
          <div className="space-y-1">
            <label className={labelClass}><Briefcase size={12} /> Local Package</label>
            <select className={inputClass} onChange={(e) => setFormData({...formData, localPackage: e.target.value})}>
              <option>4 Hours / 40 Km</option>
              <option>8 Hours / 80 Km</option>
              <option>12 Hours / 120 Km</option>
            </select>
          </div>
        )}

        {serviceType === "airport" && (
          <>
            <div className="space-y-1">
              <label className={labelClass}><Plane size={12} /> Direction</label>
              <select className={inputClass} onChange={(e) => setFormData({...formData, direction: e.target.value})}>
                <option value="to-airport">Drop to Airport</option>
                <option value="from-airport">Pickup from Airport</option>
              </select>
            </div>
          </>
        )}

        {/* Date & Time */}
        <div className="grid grid-cols-2 gap-3 md:col-span-1">
          <div className="space-y-1">
            <label className={labelClass}><Calendar size={12} /> Date</label>
            <input type="date" className={inputClass} onChange={(e) => setFormData({ ...formData, date: e.target.value })} />
          </div>
          <div className="space-y-1">
            <label className={labelClass}><Clock size={12} /> Time</label>
            <input type="time" className={inputClass} onChange={(e) => setFormData({ ...formData, time: e.target.value })} />
          </div>
        </div>

        <div className="space-y-1">
          <label className={labelClass}><Users size={12} /> Passengers</label>
          <input type="number" placeholder="4" className={inputClass} onChange={(e) => setFormData({ ...formData, members: e.target.value })} />
        </div>

        {/* Round Trip Return Date */}
        <AnimatePresence>
          {serviceType === "outstation" && tripType === "round" && (
            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="space-y-1 md:col-span-2">
              <label className={labelClass}><Calendar size={12} /> Return Date</label>
              <input type="date" className={inputClass} onChange={(e) => setFormData({ ...formData, returnDate: e.target.value })} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <button
        onClick={handleWhatsApp}
        className="w-full mt-8 py-4 rounded-xl bg-orange-600 hover:bg-orange-700 text-white text-[12px] font-black uppercase tracking-[0.15em] transition-all flex items-center justify-center gap-3 "
      >
        <Phone size={16} fill="white" /> Book Taxi on WhatsApp
      </button>
    </div>
  );
}