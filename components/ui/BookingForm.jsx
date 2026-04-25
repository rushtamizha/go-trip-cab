"use client";

import React, { useState } from "react";
import {
  User,
  Phone,
  MapPin,
  Calendar,
  Clock,
  Users,
  Shield,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { company } from "@/lib/data";

export default function BookingForm({carType,tripType}) {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    pickup: "",
    drop: "",
    date: "",
    time: "",
    returnDate: "",
    members: "",
  });
  const handleWhatsApp = () => {
    if (
      !formData.name ||
      !formData.mobile ||
      !formData.pickup ||
      !formData.drop
    ) {
      alert("Please fill in your name, mobile, and route details.");
      return;
    }

    const message =
      `*NEW BOOKING REQUEST*%0A` +
      `--------------------------%0A` +
      `*Trip:* ${tripType.toUpperCase()}%0A` +
      `*Name:* ${formData.name}%0A` +
      `*Mobile:* ${formData.mobile}%0A` +
      `*From:* ${formData.pickup}%0A` +
      `*To:* ${formData.drop}%0A%0A` +
      `*Pickup:* ${formData.date} at ${formData.time}%0A` +
      `*Car:* ${carType} %0A` +
      `*Members:* ${formData.members}%0A` +
      `--------------------------`;

    window.open(`https://wa.me/${company.whatsapp}?text=${message}`, "_blank");
  };

  const inputClass =
    "w-full h-14 px-5 rounded-2xl bg-gray-50/50 border border-gray-100 transition-all outline-none text-gray-900 placeholder:text-gray-400 focus:bg-white focus:border-orange-500";
  const labelClass =
    "flex items-center gap-2 mb-2 text-sm text-black font-semibold tracking-tight";

  return (
    <div className="w-full max-w-4xl mx-auto bg-white rounded-[2.5rem] my-4 p-6 md:p-10">
      {/* Header */}
      <div className="mb-8">
        <h2 className="mb-2 text-2xl font-bold text-gray-900 md:text-3xl">
          Book Your Ride
        </h2>
        <p className="text-sm font-medium text-gray-500">
          Quick confirmation via WhatsApp • No advance payment
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {/* Personal Details */}
        <div className="space-y-1">
          <label className={labelClass}>
            <User className="w-4 h-4 text-orange-500" /> Full Name
          </label>
          <input
            type="text"
            placeholder="Your Name"
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
            onChange={(e) =>
              setFormData({ ...formData, mobile: e.target.value })
            }
          />
        </div>

        {/* Route Details */}
        <div className="space-y-1">
          <label className={labelClass}>
            <MapPin className="w-4 h-4 text-orange-500" /> Pickup Point
          </label>
          <input
            type="text"
            placeholder="Where from?"
            className={inputClass}
            onChange={(e) =>
              setFormData({ ...formData, pickup: e.target.value })
            }
          />
        </div>

        <div className="space-y-1">
          <label className={labelClass}>
            <MapPin className="w-4 h-4 text-orange-500" /> Drop Location
          </label>
          <input
            type="text"
            placeholder="Where to?"
            className={inputClass}
            onChange={(e) => setFormData({ ...formData, drop: e.target.value })}
          />
        </div>

        {/* Schedule */}
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className={labelClass}>
              <Calendar className="w-4 h-4 text-orange-500" /> Date
            </label>
            <input
              type="date"
              className={inputClass}
              onChange={(e) =>
                setFormData({ ...formData, date: e.target.value })
              }
            />
          </div>
          <div className="space-y-1">
            <label className={labelClass}>
              <Clock className="w-4 h-4 text-orange-500" /> Time
            </label>
            <input
              type="time"
              className={inputClass}
              onChange={(e) =>
                setFormData({ ...formData, time: e.target.value })
              }
            />
          </div>
        </div>

        <div className="space-y-1">
          <label className={labelClass}>
            <Users className="w-4 h-4 text-orange-500" /> Passengers
          </label>
          <input
            type="number"
            placeholder="No. of people"
            className={inputClass}
            onChange={(e) =>
              setFormData({ ...formData, members: e.target.value })
            }
          />
        </div>

        {/* Return Date (Animated) */}
        <AnimatePresence>
          {tripType == "round" && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="space-y-1 overflow-hidden md:col-span-2"
            >
              <label className={labelClass}>
                <Calendar className="w-4 h-4 text-orange-500" /> Return Date
              </label>
              <input
                type="date"
                className={inputClass}
                onChange={(e) =>
                  setFormData({ ...formData, returnDate: e.target.value })
                }
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Submission */}
      <button
        onClick={handleWhatsApp}
        className="w-full mt-8 py-4 rounded-2xl bg-orange-500 hover:bg-orange-600 text-white font-bold transition-all active:scale-[0.98] flex items-center justify-center gap-3"
      >
        <span>CONFIRM ON WHATSAPP</span>
      </button>
    </div>
  );
}