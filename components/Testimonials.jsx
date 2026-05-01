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
    name: "Varshitha R Varshitha",
    role: "Local Traveler",
    text: "That experience was really good, the vehicle was very clean and comfortable. One of the best travel experiences—safe, calm driving that makes you feel at ease in busy environments.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/1.jpg"
  },
  {
    id: 2,
    name: "Khema Devi",
    role: "Regular Client",
    text: "I have used Go Trip a couple of times for airport drops and pickups. They are extremely reliable, prompt, and upfront with reservations and pricing. Highly professional service.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/2.jpg"
  },
  {
    id: 3,
    name: "Susil Nembang Limbu",
    role: "Business Traveler",
    text: "Thank you for providing a good vehicle and driver. The car was clean and well-maintained, and the pickup was on time. Really appreciate the excellent service.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/3.jpg"
  },
  {
    id: 4,
    name: "Kusuma Kusuma",
    role: "Mysore Day Trip",
    text: "Great experience and safe driving. The cab arrived on time for our Mysore trip and covered all the important places in a single day. Safe drop at night. Highly recommended.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/4.jpg"
  },
  {
    id: 5,
    name: "Shivam Kashyap",
    role: "Temple Tour",
    text: "Professional driver and the owner is quick to help. We booked a Tirupati Temple trip and had a great experience. One of the most reliable services in Bangalore.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/5.jpg"
  },
  {
    id: 6,
    name: "Vinay Sharma",
    role: "Pondicherry Trip",
    text: "We traveled to Pondicherry and had a very good experience. Our driver, Vittal, was very nice and courteous. The vehicle provided was clean and well-maintained.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/6.jpg"
  },
  {
    id: 7,
    name: "Suneetha Reddy",
    role: "Emergency Booking",
    text: "Needed a Tempo Traveller urgently after another service cancelled last minute. Go Trip Cabs arranged it immediately. The entire journey was smooth and hassle-free.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/7.jpg"
  },
  {
    id: 8,
    name: "Chethan BM",
    role: "Goa Trip",
    text: "Amazing experience on my Goa trip! The driver was super friendly and went above and beyond to ensure a smooth ride. Rates were very reasonable for top-notch service.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/8.jpg"
  },
  {
    id: 9,
    name: "Savitha HL",
    role: "Yelagiri Outstation",
    text: "We booked an Urbania for Yelagiri and the vehicle was awesome. Our driver was very cooperative and took us to all the spots. Awesome vehicle at an economic price!",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/9.jpg"
  },
  {
    id: 10,
    name: "Bhavana Reddy",
    role: "South India Tour",
    text: "Booked a Ciaz for a trip to Mysore, Coorg, and Ooty. The driver was highly professional, well-informed, and focused on our comfort throughout the journey.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/10.jpg"
  },
  {
    id: 11,
    name: "Sagarika Mandal",
    role: "Group Traveler",
    text: "The drivers were very polite and helpful. We were three girls traveling and we felt very safe and comfortable. Highly recommend for female travelers.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/11.jpg"
  },
  {
    id: 12,
    name: "Akash Maharana",
    role: "Frequent User",
    text: "Booked twice within a week. Both times the drivers were professional and on time. The cars were clean and the driving was excellent. Highly recommended.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/12.jpg"
  },
  {
    id: 13,
    name: "A Samanta",
    role: "Outstation Trip",
    text: "Excellent service from start to finish. The driver was polite and professional, and the cab was clean and comfortable. The whole experience was stress-free.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/13.jpg"
  }
];

const TestimonialSwiper = () => {
  return (
    <section className="py-1 overflow-hidden bg-white">
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

                  <p className="text-[13px] font-medium leading-relaxed text-slate-600 mb-8  flex-1">
                    "{item.text}"
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
                        {item.role} 
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