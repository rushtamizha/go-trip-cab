"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Phone, MapPin, Menu, X, Mail, Clock, Instagram, Facebook, MessageSquare } from "lucide-react";
import { company, tourPackages } from "@/lib/data";

// 1. ContactHeader Component (Internal or separate import)
const ContactHeader = () => {
  return (
    <div className="w-full text-white bg-orange-600 border-b border-white/5">
      <div className="flex items-center justify-between px-6 mx-auto h-14 max-w-7xl">
        {/* Operations Info */}
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <Phone size={14} className="text-white" />
            <span className="text-sm font-black uppercase tracking-[0.15em] text-white">
              (+91 ) 9886673753
            </span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={14} className="text-white" />
            <span className="text-sm font-black uppercase tracking-[0.15em] text-white">
              Bangalore
            </span>
          </div>
        </div>

        {/* Direct Contact & Socials */}
        <div className="flex items-center gap-6">
          <div className="h-3 w-[1px] bg-white/10" />
          <div className="flex items-center gap-4 pl-2 border-white/10">
            <a href="#" className="text-white transition-colors hover:text-white">
              <Instagram size={15} />
            </a>
            <a href="#" className="text-white transition-colors hover:text-white">
              <Facebook size={15} />
            </a>
            
          </div>
        </div>
      </div>
    </div>
  );
};

const Navbar = () => {
  const [isDestOpen, setIsDestOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    // Moved 'fixed' and 'z-index' here to wrap both components
    <header className="fixed top-0 left-0 right-0 z-[100]">
      <ContactHeader />
      
      <nav className="py-3 bg-white border-b shadow-sm border-slate-100">
        <div className="flex items-center justify-between px-4 mx-auto max-w-7xl">
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative flex items-center justify-center overflow-hidden transition-transform h-11 w-11 rounded-xl bg-slate-900 group-hover:scale-105">
              <img
                src="/logo.jpg"
                alt={`${company.name} Logo`}
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 border rounded-xl border-white/10" />
            </div>

            <div className="flex flex-col justify-center">
              <h1 className="text-base font-black leading-none tracking-tighter uppercase text-slate-900">
                {company.name}
              </h1>
              <div className="mt-1 flex items-center gap-1.5">
                {["Drive", "Discover", "Explore"].map((tag, i) => (
                  <React.Fragment key={tag}>
                    <span className="text-[8px] font-black uppercase tracking-[0.25em] text-orange-500">
                      {tag}
                    </span>
                    {i < 2 && <span className="w-1 h-1 rounded-full bg-slate-200" />}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="items-center hidden gap-8 md:flex">
            <Link href="/" className="text-xs font-black tracking-widest uppercase transition-colors text-slate-500 hover:text-orange-600">
              Home
            </Link>

            <div
              className="relative"
              onMouseEnter={() => setIsDestOpen(true)}
              onMouseLeave={() => setIsDestOpen(false)}
            >
              <button className="flex items-center gap-1 py-2 text-xs font-black tracking-widest uppercase outline-none text-slate-500 hover:text-orange-600">
                Destinations <ChevronDown size={10} className={`transition-transform duration-300 ${isDestOpen ? "rotate-180" : ""}`} />
              </button>

              <AnimatePresence>
                {isDestOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, x: "-50%" }}
                    animate={{ opacity: 1, y: 0, x: "-50%" }}
                    exit={{ opacity: 0, y: 10, x: "-50%" }}
                    className="absolute left-1/2 top-full pt-4 w-[800px]"
                  >
                    <div className="bg-white border border-slate-100 shadow-2xl rounded-[2.5rem] p-6 grid grid-cols-5 gap-4">
                      {tourPackages.map((tour) => (
                        <Link
                          key={tour.slug}
                          href={`/tour/${tour.slug}`}
                          className="relative overflow-hidden group h-28 rounded-2xl bg-slate-100"
                        >
                          <img src={tour.gallery[0]} alt={tour.title} className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-125" />
                          <div className="absolute inset-0 flex items-end p-3 transition-all bg-slate-900/40 group-hover:bg-orange-600/40">
                            <span className="text-[9px] font-black text-white uppercase tracking-tight leading-tight">
                              {tour.title}
                            </span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="/about" className="text-xs font-black tracking-widest uppercase transition-colors text-slate-500 hover:text-orange-600">
              About
            </Link>
            <Link href="/contact" className="text-xs font-black tracking-widest uppercase transition-colors text-slate-500 hover:text-orange-600">
              Contact
            </Link>
          </div>

          {/* Action Button */}
          <div className="flex items-center gap-4">
            <a
              href={`tel:${company.phone}`}
              className="hidden sm:flex items-center gap-2 px-5 py-2.5 bg-slate-900 text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-orange-600 shadow-lg shadow-slate-900/10 hover:shadow-orange-600/20 transition-all active:scale-95"
            >
              <Phone size={12} /> Call Expert
            </a>
            <button onClick={() => setIsMobileOpen(true)} className="p-2 rounded-lg md:hidden text-slate-900 bg-slate-50">
              <Menu size={22} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer (Same logic as your previous code) */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileOpen(false)}
              className="fixed inset-0 z-[110] bg-slate-900/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              className="fixed right-0 top-0 bottom-0 z-[120] w-[300px] bg-white flex flex-col shadow-2xl"
            >
              <div className="flex items-center justify-between p-6 border-b bg-slate-50">
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Menu</span>
                <button onClick={() => setIsMobileOpen(false)} className="p-2 transition-colors rounded-full hover:bg-white">
                  <X size={20} />
                </button>
              </div>
              <div className="flex-1 p-4 space-y-1 overflow-y-auto">
                <Link href="/" className="block p-4 text-sm font-black tracking-widest uppercase text-slate-900 hover:bg-orange-50 rounded-xl" onClick={() => setIsMobileOpen(false)}>Home</Link>
                <div className="pt-4 pb-2 px-4 text-[10px] font-black text-orange-600 uppercase tracking-[0.2em]">Our Packages</div>
                {tourPackages.map((tour) => (
                  <Link key={tour.slug} href={`/tour/${tour.slug}`} className="flex items-center justify-between p-4 text-xs font-bold tracking-tight uppercase text-slate-600 hover:bg-slate-50 rounded-xl" onClick={() => setIsMobileOpen(false)}>
                    {tour.title} <ChevronDown size={14} className="-rotate-90 text-slate-300" />
                  </Link>
                ))}
                <Link href="/about" className="block p-4 text-sm font-black tracking-widest uppercase text-slate-900 hover:bg-orange-50 rounded-xl" onClick={() => setIsMobileOpen(false)}>About</Link>
                <Link href="/contact" className="block p-4 text-sm font-black tracking-widest uppercase text-slate-900 hover:bg-orange-50 rounded-xl" onClick={() => setIsMobileOpen(false)}>Contact</Link>
              </div>
              <div className="p-6 border-t bg-slate-50">
                <a href={`tel:${company.phone}`} className="flex items-center justify-center w-full h-12 gap-3 text-xs font-black tracking-widest text-white uppercase shadow-xl bg-slate-900 rounded-xl shadow-slate-900/20">
                  <Phone size={14} /> Call Support
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;