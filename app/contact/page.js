"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Phone, Mail, MapPin, Send, 
  MessageSquare, Clock, Globe 
} from "lucide-react";
import { company } from "@/lib/data";
import BackButton from "@/components/Back";

const ContactPage = () => {
  return (
    <main className="min-h-screen pt-4 bg-slate-50/50">
        <BackButton/>
      <div className="px-6 py-16 mx-auto max-w-7xl">
        
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <span className="text-[10px] font-black text-orange-600 uppercase tracking-[0.4em] block mb-4">
            Connect With Us
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter uppercase leading-[0.95] mb-6">
            Let’s Plan Your <br />
            <span className="text-orange-600">Next Adventure</span>
          </h1>
          <p className="text-sm font-medium leading-relaxed text-slate-500">
            Have a specific destination in mind or need a custom corporate itinerary? 
            Our travel experts are available 24/7 to assist you.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          
          {/* 1. Contact Form (Span 7) */}
          <div className="lg:col-span-7 bg-white p-8 md:p-12 rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/50">
            <form className="space-y-6">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="E.g. Arun Kumar"
                    className="w-full px-6 py-4 text-sm transition-all border bg-slate-50 border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="arun@example.com"
                    className="w-full px-6 py-4 text-sm transition-all border bg-slate-50 border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Subject / Destination</label>
                <input 
                  type="text" 
                  placeholder="Andaman Tour Package Inquiry"
                  className="w-full px-6 py-4 text-sm transition-all border bg-slate-50 border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Your Message</label>
                <textarea 
                  rows="5"
                  placeholder="Tell us about your travel plans..."
                  className="w-full px-6 py-4 text-sm transition-all border resize-none bg-slate-50 border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                ></textarea>
              </div>

              <button className="w-full md:w-auto px-10 py-4 bg-slate-900 text-white rounded-2xl text-[11px] font-black uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-orange-600 transition-all active:scale-95 shadow-lg shadow-slate-900/10">
                Send Message <Send size={14} />
              </button>
            </form>
          </div>

          {/* 2. Info Sidebar (Span 5) */}
          <div className="space-y-6 lg:col-span-5">
            
            {/* Quick Contact Cards */}
            <div className="grid grid-cols-1 gap-4">
              <a href={`tel:${company.phone}`} className="group p-6 bg-white border border-slate-100 rounded-[2rem] flex items-center gap-6 hover:border-orange-200 transition-all">
                <div className="flex items-center justify-center w-12 h-12 text-orange-600 transition-all bg-orange-50 rounded-2xl group-hover:bg-orange-600 group-hover:text-white">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Call Expert</p>
                  <p className="text-sm font-black text-slate-900">{company.phoneDisplay}</p>
                </div>
              </a>

              <div className="group p-6 bg-white border border-slate-100 rounded-[2rem] flex items-center gap-6">
                <div className="flex items-center justify-center w-12 h-12 bg-slate-50 rounded-2xl text-slate-400">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Email Us</p>
                  <p className="text-sm font-black text-slate-900">support@wepzite.in</p>
                </div>
              </div>

              <div className="group p-6 bg-white border border-slate-100 rounded-[2rem] flex items-center gap-6">
                <div className="flex items-center justify-center w-12 h-12 bg-slate-50 rounded-2xl text-slate-400">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Head Office</p>
                  <p className="text-sm font-black leading-relaxed text-slate-900">
                  #20, Sarjapur Main Rd, Maruthi Nagar,
                  <br /> Kaikondrahalli, Bangalore – 560035
                </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactPage;