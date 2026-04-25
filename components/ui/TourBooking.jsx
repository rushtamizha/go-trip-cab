"use client";

import React, { useState } from "react";
import {
  User,
  Phone,
  Calendar,
  Clock,
  Users,
  Shield,
  Map,
  ArrowRight
} from "lucide-react";
import { company } from "@/lib/data";

export default function TourBookingForm({ packageName = "General Inquiry" }) {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    members: "",
    date: "",
    time: "",
  });

  const handleWhatsApp = () => {
    if (!formData.name || !formData.mobile || !formData.date) {
      alert("Please fill in your name, mobile, and preferred date.");
      return;
    }

    const message =
      `*TOUR PACKAGE INQUIRY*%0A` +
      `--------------------------%0A` +
      `*Package:* ${packageName}%0A` +
      `*Name:* ${formData.name}%0A` +
      `*Mobile:* ${formData.mobile}%0A` +
      `*Total Members:* ${formData.members}%0A` +
      `*Travel Date:* ${formData.date}%0A` +
      `*Preferred Time:* ${formData.time}%0A` +
      `--------------------------`;

    window.open(`https://wa.me/${company.whatsapp}?text=${message}`, "_blank");
  };

  const inputClass =
    "w-full h-14 px-5 rounded-2xl bg-orange-50/50 border border-orange-100 transition-all outline-none text-gray-900 placeholder:text-gray-400 focus:bg-white focus:border-orange-500 focus:ring-4 focus:ring-orange-500/5";
  const labelClass =
    "flex items-center gap-2 mb-2 text-sm text-gray-700 font-bold tracking-tight";

  return (
    <div className="w-full max-w-5xl mx-auto bg-white rounded-[2.5rem]   p-6 md:p-10 my-6">
      {/* Header */}
      <div className="flex items-start justify-between mb-8">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 ">
            Book Tour
          </h2>
          <p className="flex items-center gap-1 mt-1 text-sm font-medium text-orange-500">
            <Map className="w-3 h-3" /> {packageName}
          </p>
        </div>
        <div className="p-3 bg-orange-100 rounded-2xl">
          <Calendar className="w-6 h-6 text-orange-600" />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Row 1: Name & Mobile */}
        <div className="space-y-1">
          <label className={labelClass}>
            <User className="w-4 h-4 text-orange-500" /> Full Name
          </label>
          <input
            type="text"
            placeholder="E.g. Eswaran"
            className={inputClass}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>

        <div className="space-y-1">
          <label className={labelClass}>
            <Phone className="w-4 h-4 text-orange-500" /> Mobile Number
          </label>
          <input
            type="tel"
            placeholder="+91"
            className={inputClass}
            onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
          />
        </div>

        {/* Row 2: Date & Time */}
        <div className="space-y-1">
          <label className={labelClass}>
            <Calendar className="w-4 h-4 text-orange-500" /> Pickup Date
          </label>
          <input
            type="date"
            className={inputClass}
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
          />
        </div>

        <div className="space-y-1">
          <label className={labelClass}>
            <Clock className="w-4 h-4 text-orange-500" /> Pickup Time
          </label>
          <input
            type="time"
            className={inputClass}
            onChange={(e) => setFormData({ ...formData, time: e.target.value })}
          />
        </div>

        {/* Row 3: Passengers (Full Width on Mobile) */}
        <div className="space-y-1 md:col-span-2">
          <label className={labelClass}>
            <Users className="w-4 h-4 text-orange-500" /> Number of People
          </label>
          <input
            type="number"
            placeholder="Total travelers"
            className={inputClass}
            onChange={(e) => setFormData({ ...formData, members: e.target.value })}
          />
        </div>
      </div>

      {/* Action Button */}
      <button
        onClick={handleWhatsApp}
        className="w-full mt-10 h-16 rounded-xl bg-orange-500  text-white font-bold   transition-all active:scale-[0.98] flex items-center justify-center gap-3 group"
      >
        <span>Check Availability</span>
      </button>
    </div>
  );
}