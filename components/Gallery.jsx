"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, MapPin, ChevronRight } from "lucide-react";
import { tourPackages } from "@/lib/data";

const TourCard = ({ tour }) => {
  const [currentImg, setCurrentImg] = useState(0);

  // Automatic slide effect for each individual card
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % tour.gallery.length);
    }, 3000 + Math.random() * 2000); // Randomized start to prevent all cards flipping at once
    return () => clearInterval(timer);
  }, [tour.gallery.length]);

  return (
    <Link href={`/tour/${tour.slug}`} className="group relative block w-full aspect-[4/5] overflow-hidden rounded-[2rem] bg-slate-200 border border-slate-100 shadow-sm transition-all hover:shadow-xl hover:shadow-orange-500/10">
      {/* Background Image Slider */}
      <div className="absolute inset-0">
        {tour.gallery.map((img, i) => (
          <motion.img
            key={i}
            src={img}
            alt={tour.title}
            initial={{ opacity: 0 }}
            animate={{ opacity: i === currentImg ? 1 : 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="absolute inset-0 h-full w-full object-cover scale-100 group-hover:scale-110 transition-transform duration-[2s]"
          />
        ))}
        {/* Professional Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-6">
        <div className="flex items-center gap-2 mb-2">
          <div className="px-2 py-0.5 bg-orange-500 rounded-md">
            <span className="text-[8px] font-black text-white uppercase tracking-widest">Featured</span>
          </div>
          <span className="text-[10px] font-bold text-slate-300 flex items-center gap-1">
            <MapPin size={10} className="text-orange-500" /> {tour.duration}
          </span>
        </div>
        
        <h3 className="text-lg font-black leading-tight tracking-tighter text-white uppercase transition-colors group-hover:text-orange-400">
          {tour.title}
        </h3>
        
        <div className="flex items-center justify-between mt-4 transition-all translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
          <span className="text-[10px] font-black text-white uppercase tracking-widest flex items-center gap-2">
            View Details <ArrowRight size={12} />
          </span>
          <div className="flex items-center justify-center w-8 h-8 text-white rounded-full bg-white/20 backdrop-blur-md">
            <ChevronRight size={16} />
          </div>
        </div>
      </div>
    </Link>
  );
};

const DestinationsGallery = () => {
  const [showAll, setShowAll] = useState(false);
  
  // Logic to show 6 or all
  const displayedTours = showAll ? tourPackages : tourPackages.slice(0, 6);

  return (
    <section className="px-6 py-20 bg-white">
      <div className="mx-auto max-w-7xl">
        
        {/* Section Header */}
        <div className="flex flex-col justify-between gap-6 mb-12 md:flex-row md:items-end">
          <div>
            <h4 className="text-[10px] font-black text-orange-600 uppercase tracking-[0.3em] mb-3">Our Destinations</h4>
            <h2 className="text-2xl font-bold leading-none tracking-tighter md:text-2xl text-slate-900">
              Explore Premium <br /> Tour Packages
            </h2>
          </div>
          <p className="max-w-sm text-xs font-medium leading-relaxed text-slate-500">
            Carefully curated journeys designed for comfort and discovery. Choose your next adventure from our top-rated destinations.
          </p>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence>
            {displayedTours.map((tour) => (
              <motion.div
                key={tour.slug}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
              >
                <TourCard tour={tour} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Show All Toggle */}
        <div className="mt-16 text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="group inline-flex items-center gap-3 px-10 py-4 bg-orange-500 text-white rounded-2xl text-[11px] font-black uppercase tracking-[0.2em] hover:bg-orange-600 transition-all active:scale-95 shadow-xl shadow-slate-200"
          >
            {showAll ? "Show Less" : "View All Destinations"}
            <motion.div
              animate={{ rotate: showAll ? 180 : 0 }}
              className="transition-transform"
            >
              <ChevronRight size={14} />
            </motion.div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default DestinationsGallery;