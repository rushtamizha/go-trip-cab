import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react'; // Optional: Install lucide-react for icons

const testimonials = [
  {
    id: 1,
    name: "Rahul Sharma",
    role: "Business Traveler",
    text: "Excellent service! The driver was on time, and the car was spotless. Booking an airport taxi in Bangalore has never been this seamless.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: 2,
    name: "Priya Lakshmi",
    role: "Tourist",
    text: "We booked a tour package for Ooty. The driver was very knowledgeable and polite. Highly recommend Go Trip Cabs for outstation trips.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  }
];

const Testimonial = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container px-4 mx-auto">
        {/* Header - Matching your Screenshot style */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
            What Our Customers Say
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Real stories from travelers who trust our cab services for their daily commutes and holiday trips.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col justify-between p-8 bg-white border border-gray-100 shadow-sm rounded-3xl"
            >
              <div>
                {/* Stars - Using the Orange from your UI */}
                <div className="flex mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} size={18} className="fill-[#FF7A1A] text-[#FF7A1A]" />
                  ))}
                </div>
                
                <p className="mb-6 italic leading-relaxed text-gray-700">
                  "{item.text}"
                </p>
              </div>

              <div className="flex items-center gap-4">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-12 h-12 rounded-full object-cover border-2 border-[#FF7A1A]/20"
                />
                <div>
                  <h4 className="font-bold text-gray-900">{item.name}</h4>
                  <p className="text-sm text-gray-500">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;