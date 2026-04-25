"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, ChevronRight, ChevronLeft } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { tourPackages } from "@/lib/data";

// Swiper Styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const TourCard = ({ tour }) => {
  const [currentImg, setCurrentImg] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % tour.gallery.length);
    }, 3000 + Math.random() * 2000);
    return () => clearInterval(timer);
  }, [tour.gallery.length]);

  return (
    <Link href={`/tour/${tour.slug}`} className="group relative block w-full aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-slate-200 border border-slate-100  transition-all  ">
      <div className="absolute inset-0">
        {tour.gallery.map((img, i) => (
          <motion.img
            key={i}
            src={img}
            alt={tour.title}
            initial={{ opacity: 0 }}
            animate={{ opacity: i === currentImg ? 1 : 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 h-full w-full object-cover group-hover:scale-110 transition-transform duration-[2s]"
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent" />
      </div>

      <div className="absolute inset-0 flex flex-col justify-end p-8">
        <div className="flex items-center gap-2 mb-3">
          <div className="px-2 py-0.5 bg-orange-500 rounded-md">
            <span className="text-[8px] font-black text-white uppercase tracking-widest">Featured</span>
          </div>
          <span className="text-[10px] font-bold text-slate-300 flex items-center gap-1">
            <MapPin size={10} className="text-orange-500" /> {tour.duration}
          </span>
        </div>
        
        <h3 className="text-xl font-black leading-tight tracking-tighter text-white uppercase transition-colors group-hover:text-orange-400">
          {tour.title}
        </h3>
        
        <div className="flex items-center justify-between mt-5 transition-all translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
          <span className="text-[10px] font-black text-white uppercase tracking-widest flex items-center gap-2">
            View Details <ArrowRight size={12} />
          </span>
          <div className="flex items-center justify-center text-white border rounded-full w-9 h-9 bg-white/20 backdrop-blur-md border-white/10">
            <ChevronRight size={18} />
          </div>
        </div>
      </div>
    </Link>
  );
};

const DestinationsGallery = () => {
  return (
    <section className="px-6 overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl">
        
        {/* Header with Navigation Controls */}
        <div className="flex flex-col justify-between gap-8 mb-16 md:flex-row md:items-end">
          <div className="max-w-xl">
            <h4 className="text-[10px] font-black text-orange-600 uppercase tracking-[0.4em] mb-4">Our Destinations</h4>
            <h2 className="text-2xl md:text-2xl font-black leading-[0.95] tracking-tighter text-slate-900 uppercase">
              Explore Premium <br /> Tour Packages
            </h2>
          </div>
        </div>

        {/* Swiper Implementation */}
        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              nextEl: ".dest-next",
              prevEl: ".dest-prev",
            }}
            pagination={{ 
              clickable: true, 
              el: ".dest-pagination",
              dynamicBullets: true 
            }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="!overflow-visible" // Keeps shadows and scale effects visible
          >
            {tourPackages.map((tour) => (
              <SwiperSlide key={tour.slug}>
                <TourCard tour={tour} />
              </SwiperSlide>
            ))}
          </Swiper>
          
          {/* Custom Dynamic Pagination */}
          <div className="flex justify-center mt-12 dest-pagination"></div>
        </div>
      </div>

      <style jsx global>{`
        .dest-pagination .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background: #cbd5e1;
          opacity: 1;
          transition: all 0.3s ease;
        }
        .dest-pagination .swiper-pagination-bullet-active {
          width: 32px;
          background: #f97316;
          border-radius: 4px;
        }
      `}</style>
    </section>
  );
};

export default DestinationsGallery;