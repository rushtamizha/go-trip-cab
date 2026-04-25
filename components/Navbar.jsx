"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Phone, MapPin, Menu, X } from "lucide-react";
import { company, tourPackages } from "@/lib/data";

const Navbar = () => {
  const [isDestOpen, setIsDestOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] bg-white border-b border-slate-100 py-3">
      <div className="flex items-center justify-between px-4 mx-auto max-w-7xl">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex items-center justify-center w-8 h-8 italic font-bold text-white rounded-lg bg-slate-900">
            W
          </div>
          <span className="text-sm font-black tracking-tight uppercase text-slate-900">
            {company.name}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="items-center hidden gap-8 md:flex">
          <Link
            href="/"
            className="text-sm font-bold uppercase text-slate-500 hover:text-orange-600"
          >
            Home
          </Link>

          {/* Destinations Mega Menu Trigger */}
          <div
            className="relative"
            onMouseEnter={() => setIsDestOpen(true)}
            onMouseLeave={() => setIsDestOpen(false)}
          >
            <button className="flex items-center gap-1 py-2 text-sm font-bold uppercase outline-none text-slate-500 hover:text-orange-600">
              Destinations{" "}
              <ChevronDown
                size={12}
                className={`transition-transform ${isDestOpen ? "rotate-180" : ""}`}
              />
            </button>

            {/* Mega Menu Dropdown */}
            <AnimatePresence>
              {isDestOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, x: "-50%" }} // Centering logic: x: "-50%"
                  animate={{ opacity: 1, y: 0, x: "-50%" }}
                  exit={{ opacity: 0, y: 10, x: "-50%" }}
                  className="absolute left-1/2 top-full pt-4 w-[800px]" // left-1/2 combined with x-50% centers the menu
                >
                  <div className="bg-white border border-slate-100 shadow-2xl rounded-[2rem] p-6 grid grid-cols-5 gap-4">
                    {tourPackages.map((tour) => (
                      <Link
                        key={tour.slug}
                        href={`/tour/${tour.slug}`}
                        className="relative overflow-hidden group h-28 rounded-2xl bg-slate-100"
                      >
                        <img
                          src={tour.gallery[0]}
                          alt={tour.title}
                          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-slate-900/40 group-hover:backdrop-blur-[2px] transition-all flex items-end p-3">
                          <span className="text-[10px] font-black text-white uppercase tracking-tighter leading-tight">
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

          <Link
            href="/about"
            className="text-sm font-bold uppercase text-slate-500 hover:text-orange-600"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-sm font-bold uppercase text-slate-500 hover:text-orange-600"
          >
            Contact
          </Link>
        </div>

        {/* Action Button */}
        <div className="flex items-center gap-4">
          <a
            href={`tel:${company.phone}`}
            className="hidden sm:flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-orange-600 transition-all"
          >
            <Phone size={12} /> Call Expert
          </a>
          <button
            onClick={() => setIsMobileOpen(true)}
            className="p-2 md:hidden text-slate-600"
          >
            <Menu size={22} />
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileOpen(false)}
              className="fixed inset-0 z-[110] bg-slate-900/40 backdrop-blur-sm"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              className="fixed right-0 top-0 bottom-0 z-[120] w-[300px] bg-white flex flex-col shadow-2xl"
            >
              <div className="flex items-center justify-between p-6 border-b bg-slate-50">
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                  Navigation
                </span>
                <button onClick={() => setIsMobileOpen(false)}>
                  <X size={20} />
                </button>
              </div>

              <div className="flex-1 p-4 overflow-y-auto">
                <div className="space-y-1">
                  <Link
                    href="/"
                    className="block p-4 text-sm font-bold text-slate-700 hover:bg-slate-50 rounded-xl"
                  >
                    Home
                  </Link>

                  {/* Mobile Tour List */}
                  <div className="pt-4 pb-2 px-4 text-[10px] font-black text-orange-600 uppercase tracking-[0.2em]">
                    Our Packages
                  </div>
                  {tourPackages.map((tour) => (
                    <Link
                      key={tour.slug}
                      href={`/tours/${tour.slug}`}
                      className="flex items-center justify-between p-4 transition-colors hover:bg-orange-50 rounded-xl"
                      onClick={() => setIsMobileOpen(false)}
                    >
                      <span className="text-xs font-bold tracking-tight uppercase text-slate-600">
                        {tour.title}
                      </span>
                      <ChevronDown
                        size={14}
                        className="-rotate-90 text-slate-300"
                      />
                    </Link>
                  ))}

                  <Link
                    href="/about"
                    className="block p-4 mt-4 text-sm font-bold text-slate-700 hover:bg-slate-50 rounded-xl"
                  >
                    About Us
                  </Link>
                  <Link
                    href="/contact"
                    className="block p-4 text-sm font-bold text-slate-700 hover:bg-slate-50 rounded-xl"
                  >
                    Contact
                  </Link>
                </div>
              </div>

              <div className="p-6 border-t">
                <a
                  href={`tel:${company.phone}`}
                  className="flex items-center justify-center w-full h-12 gap-2 text-xs font-black tracking-widest text-white uppercase bg-slate-900 rounded-xl"
                >
                  <Phone size={14} /> Call Support
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
