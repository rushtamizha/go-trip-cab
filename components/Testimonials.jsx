"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";

// Swiper Styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const testimonials = [
  {
    id: 1,
    name: "Arun Kumar",
    role: "Family Traveler",
    content: "The attention to detail for our Andaman trip was exceptional. From the airport pickup to the resort bookings, everything was handled with professional precision.",
    location: "Chennai",
  },
  {
    id: 2,
    name: "Meera Jasmine",
    role: "Corporate Client",
    content: "We used their services for a 20-person corporate retreat. The vehicle coordination and the itinerary planning were enterprise-grade. Highly recommended.",
    location: "Bangalore",
  },
  {
    id: 3,
    name: "Senthil Raj",
    role: "Adventure Enthusiast",
    content: "Clear pricing, no hidden costs, and very reliable drivers. It is hard to find this level of transparency in the travel industry today.",
    location: "Theni",
  },
  {
    id: 4,
    name: "Rajesh V",
    role: "Regular Client",
    content: "I have been booking with Wepzite for 2 years now. Their consistency in maintaining vehicle quality and driver punctuality is what keeps me coming back.",
    location: "Madurai",
  }
];

const TestimonialSwiper = () => {
  return (
    <section className="overflow-hidden bg-white py-14">
      <div className="px-6 mx-auto max-w-7xl">
        
        {/* Header with Navigation */}
        <div className="flex flex-col justify-between gap-6 mb-12 md:flex-row">
          <div className="max-w-xl">
            <span className="text-[10px] font-black text-orange-600 uppercase tracking-[0.3em] mb-4 block">
              Global Trust
            </span>
            <h2 className="text-2xl font-bold md:text-2xl">
              What Our Clients <br /> Say About Us
            </h2>
          </div>
          
          {/* Custom Navigation Buttons for Desktop */}
          <div className="hidden gap-3 md:flex">
            <button className="flex items-center justify-center w-12 h-12 transition-all border testi-prev rounded-xl border-slate-200 text-slate-400 hover:bg-orange-500 hover:text-white">
              <ChevronLeft size={20} />
            </button>
            <button className="flex items-center justify-center w-12 h-12 transition-all border testi-next rounded-xl border-slate-200 text-slate-400 hover:bg-orange-500 hover:text-white">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Swiper Container */}
        <div className="relative">
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={{ clickable: true, el: '.custom-pagination' }}
            navigation={{
              nextEl: ".testi-next",
              prevEl: ".testi-prev",
            }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="!pb-16"
          >
            {testimonials.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="bg-slate-50 border border-slate-100 p-8 rounded-[2rem] h-full flex flex-col">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={12} className="text-orange-500 fill-orange-500" />
                      ))}
                    </div>
                    <Quote size={20} className="text-slate-200" />
                  </div>

                  <p className="text-[13px] font-medium leading-relaxed text-slate-600 mb-8 italic flex-1">
                    "{item.content}"
                  </p>

                  <div className="flex items-center gap-4 pt-6 border-t border-slate-200/50">
                    <div className="flex items-center justify-center w-10 h-10 text-xs font-black text-white bg-orange-500 rounded-xl">
                      {item.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="text-xs font-black tracking-tight uppercase text-slate-900">
                        {item.name}
                      </h4>
                      <p className="text-[9px] font-bold text-orange-600 uppercase tracking-widest mt-0.5">
                        {item.role} • {item.location}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Mobile Pagination Only */}
          <div className="flex justify-center gap-2 mt-8 custom-pagination"></div>
        </div>
      </div>

      <style jsx global>{`
        .custom-pagination .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background: #cbd5e1;
          opacity: 1;
          transition: all 0.3s ease;
        }
        .custom-pagination .swiper-pagination-bullet-active {
          width: 24px;
          background: #f97316;
          border-radius: 4px;
        }
      `}</style>
    </section>
  );
};

export default TestimonialSwiper;