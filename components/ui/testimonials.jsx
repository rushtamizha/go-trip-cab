import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react'; // Optional: Install lucide-react for icons

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