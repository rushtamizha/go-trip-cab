"use client";
import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import {
  Phone,
  MessageCircle,
  Users,
  MapPin,
  Clock,
  IndianRupee,
  ChevronLeft,
  ChevronRight,
  Plane,
  Car,
  Navigation,
  Map,
  Star,
  Shield,
  Headphones,
  CreditCard,
  Info,
  AlertCircle,
} from "lucide-react";
import {
  company,
  heroImages,
  airportTaxis,
  airportPolicy,
  localTaxis,
  localNotes,
  outstationTaxis,
  outstationTerms,
  tourPackages,
  tourCategories,
  getTourMinPrice,
} from "@/lib/data";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DestinationsGallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import WhyChooseUs from "@/components/WhyChoose";
import FAQ from "@/components/Faq";

const TABS = [
  { id: "tour", label: "Tour Packages", icon: Map },
  { id: "airport", label: "Airport", icon: Plane },
  { id: "outstation", label: "Outstation", icon: Navigation },
  { id: "local", label: "Local", icon: Car },
];

// Hero Slider
function HeroSlider() {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const timer = setInterval(
      () => setCurrent((p) => (p + 1) % heroImages.length),
      4000,
    );
    return () => clearInterval(timer);
  }, []);
  return (
    <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
      {heroImages.map((img, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${i === current ? "opacity-100" : "opacity-0"}`}
        >
          <img
            src={img.url}
            alt={img.title}
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        </div>
      ))}
      <div className="absolute bottom-0 left-0 right-0 z-10 p-6 md:p-12"></div>
      <div className="absolute z-10 flex hidden gap-2 bottom-4 right-6">
        {heroImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition-all ${i === current ? "bg-orange-500 w-8" : "bg-white/60"}`}
          />
        ))}
      </div>
    </div>
  );
}

// Airport Card
function AirportCard({ cab, onClick }) {
  return (
    <div
      onClick={() => onClick(cab.id)}
      className="overflow-hidden transition-all duration-300 bg-white border border-orange-100 shadow-sm cursor-pointer rounded-2xl hover:shadow-md group"
    >
      <div className="relative overflow-hidden h-44">
        <img
          src={cab.image}
          alt={cab.name}
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute px-3 py-1 text-sm font-bold text-white bg-orange-500 rounded-full top-3 right-3">
          {cab.seats}+1 Seater
        </div>
      </div>
      <div className="p-5">
        <h3 className="mb-1 text-lg font-bold text-gray-900 transition-colors group-hover:text-orange-600">
          {cab.name}
        </h3>
        <p className="mb-3 text-sm text-gray-400">{cab.models}</p>
        <div className="mb-4 space-y-2">
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-orange-500" />
            <span className="text-sm text-gray-600">
              {cab.seats}+1 Passengers
            </span>
          </div>
          <div className="flex items-center gap-2">
            <IndianRupee className="w-4 h-4 text-orange-500" />
            <span className="text-xl font-bold text-orange-600">
              {cab.fare.toLocaleString("en-IN")}
            </span>
            <span className="text-sm text-gray-400">one way</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-orange-500" />
            <span className="text-sm text-gray-600">
              Upto {cab.distance} km
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-orange-400" />
            <span className="text-sm text-gray-500">Toll: {cab.toll}</span>
          </div>
        </div>
        <div className="flex gap-2">
          <button className="flex-1 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2.5 rounded-xl text-sm transition-colors">
            View Details
          </button>
          <a
            href={`tel:${company.phone}`}
            onClick={(e) => e.stopPropagation()}
            className="flex items-center justify-center transition-colors bg-blue-100 w-11 h-11 hover:bg-blue-200 rounded-xl"
          >
            <Phone className="w-4 h-4 text-blue-600" />
          </a>
          <a
            href={`https://wa.me/${company.whatsapp}`}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex items-center justify-center transition-colors bg-green-100 w-11 h-11 hover:bg-green-200 rounded-xl"
          >
            <MessageCircle className="w-4 h-4 text-green-600" />
          </a>
        </div>
      </div>
    </div>
  );
}

// Outstation Card
function OutstationCard({ cab, onClick }) {
  return (
    <div
      onClick={() => onClick(cab.id)}
      className="overflow-hidden transition-all duration-300 bg-white border border-orange-100 shadow-sm cursor-pointer rounded-2xl hover:shadow-md group"
    >
      <div className="relative overflow-hidden h-44">
        <img
          src={cab.image}
          alt={cab.name}
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute px-3 py-1 text-sm font-bold text-white bg-orange-500 rounded-full top-3 right-3">
          {cab.seats}+1 Seater
        </div>
      </div>
      <div className="p-5">
        <h3 className="mb-1 text-lg font-bold text-gray-900 transition-colors group-hover:text-orange-600">
          {cab.name}
        </h3>
        <p className="mb-3 text-sm text-gray-400">{cab.models}</p>
        <div className="mb-4 space-y-2">
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-orange-500" />
            <span className="text-sm text-gray-600">
              {cab.seats}+1 Passengers
            </span>
          </div>
          <div className="flex items-center gap-2">
            <IndianRupee className="w-4 h-4 text-orange-500" />
            <span className="text-xl font-bold text-orange-600">
              {cab.farePerKm}.00
            </span>
            <span className="text-sm text-gray-400">/km</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-orange-500" />
            <span className="text-sm text-gray-600">
              Driver Bata: &#8377;{cab.driverBata}/day
            </span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-orange-400" />
            <span className="text-sm text-gray-500">
              {cab.minKm} Kms min rental/day
            </span>
          </div>
        </div>
        <div className="flex gap-2">
          <button className="flex-1 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2.5 rounded-xl text-sm transition-colors">
            View Details
          </button>
          <a
            href={`tel:${company.phone}`}
            onClick={(e) => e.stopPropagation()}
            className="flex items-center justify-center transition-colors bg-blue-100 w-11 h-11 hover:bg-blue-200 rounded-xl"
          >
            <Phone className="w-4 h-4 text-blue-600" />
          </a>
          <a
            href={`https://wa.me/${company.whatsapp}`}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex items-center justify-center transition-colors bg-green-100 w-11 h-11 hover:bg-green-200 rounded-xl"
          >
            <MessageCircle className="w-4 h-4 text-green-600" />
          </a>
        </div>
      </div>
    </div>
  );
}

// Local Card
function LocalCard({ cab, onClick }) {
  return (
    <div
      onClick={() => onClick(cab.id)}
      className="overflow-hidden transition-all duration-300 bg-white border border-orange-100 shadow-sm cursor-pointer rounded-2xl hover:shadow-md group"
    >
      <div className="relative overflow-hidden h-44">
        <img
          src={cab.image}
          alt={cab.name}
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute px-3 py-1 text-sm font-bold text-white bg-orange-500 rounded-full top-3 right-3">
          {cab.seats}+1 Seater
        </div>
      </div>
      <div className="p-5">
        <h3 className="mb-1 text-lg font-bold text-gray-900 transition-colors group-hover:text-orange-600">
          {cab.name}
        </h3>
        <p className="mb-3 text-sm text-gray-400">{cab.models}</p>
        <div className="mb-4 space-y-2">
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-orange-500" />
            <span className="text-sm text-gray-600">
              {cab.seats}+1 Passengers
            </span>
          </div>
          <div className="flex items-center gap-2">
            <IndianRupee className="w-4 h-4 text-orange-500" />
            <span className="text-xl font-bold text-orange-600">
              &#8377;{cab.fare.toLocaleString("en-IN")}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-orange-500" />
            <span className="text-sm text-gray-600">
              {cab.hours}Hrs {cab.kms}Kms included
            </span>
          </div>
          <div className="pl-6 text-sm text-gray-500">
            Extra: &#8377;{cab.extraKm}/km &bull; &#8377;{cab.extraHr}/hour
          </div>
        </div>
        <div className="flex gap-2">
          <button className="flex-1 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2.5 rounded-xl text-sm transition-colors">
            View Details
          </button>
          <a
            href={`tel:${company.phone}`}
            onClick={(e) => e.stopPropagation()}
            className="flex items-center justify-center transition-colors bg-blue-100 w-11 h-11 hover:bg-blue-200 rounded-xl"
          >
            <Phone className="w-4 h-4 text-blue-600" />
          </a>
          <a
            href={`https://wa.me/${company.whatsapp}`}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex items-center justify-center transition-colors bg-green-100 w-11 h-11 hover:bg-green-200 rounded-xl"
          >
            <MessageCircle className="w-4 h-4 text-green-600" />
          </a>
        </div>
      </div>
    </div>
  );
}

// Tour Card
function TourCard({ tour, onClick }) {
  const minPrice = getTourMinPrice(tour);
  return (
    <div
      onClick={() => onClick(tour.slug)}
      className="overflow-hidden transition-all duration-300 bg-white border border-orange-100 shadow-sm cursor-pointer rounded-2xl hover:shadow-md group"
    >
      <div className="relative overflow-hidden h-52">
        <img
          src={tour.image}
          alt={tour.title}
          className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute flex items-center gap-2 bottom-3 left-4 right-4">
          <span className="px-3 py-1 text-sm font-bold text-white bg-orange-500 rounded-full">
            {tour.duration}
          </span>
          {tour.distanceKm && (
            <span className="px-2 py-1 text-sm text-white rounded-full bg-black/40 backdrop-blur-sm">
              {tour.distanceKm}
            </span>
          )}
        </div>
      </div>
      <div className="p-5">
        <h3 className="mb-2 text-lg font-bold text-gray-900 transition-colors group-hover:text-orange-600 line-clamp-2">
          {tour.title}
        </h3>
        <div className="flex flex-wrap gap-1 mb-3">
          {tour.highlights.slice(0, 3).map((h, i) => (
            <span
              key={i}
              className="text-sm bg-orange-50 text-orange-700 px-2 py-0.5 rounded-full"
            >
              {h}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-1 mb-4">
          {minPrice ? (
            <>
              <span className="text-sm text-gray-500">Starts from</span>
              <span className="text-2xl font-bold text-orange-600">
                &#8377;{minPrice.toLocaleString("en-IN")}
              </span>
              <span className="text-sm text-gray-400">/-</span>
            </>
          ) : (
            <span className="text-lg font-semibold text-orange-600">
              Contact for Price
            </span>
          )}
        </div>
        <div className="flex gap-2">
          <button className="flex-1 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2.5 rounded-xl text-sm transition-colors">
            View Details
          </button>
          <a
            href={`tel:${company.phone}`}
            onClick={(e) => e.stopPropagation()}
            className="flex items-center justify-center transition-colors bg-blue-100 w-11 h-11 hover:bg-blue-200 rounded-xl"
          >
            <Phone className="w-4 h-4 text-blue-600" />
          </a>
          <a
            href={`https://wa.me/${company.whatsapp}`}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex items-center justify-center transition-colors bg-green-100 w-11 h-11 hover:bg-green-200 rounded-xl"
          >
            <MessageCircle className="w-4 h-4 text-green-600" />
          </a>
        </div>
      </div>
    </div>
  );
}

// Features
function Features() {
  const features = [
    {
      icon: Shield,
      title: "Safe & Reliable",
      desc: "Verified drivers & well-maintained vehicles",
    },
    {
      icon: IndianRupee,
      title: "Best Prices",
      desc: "Transparent pricing with no hidden charges",
    },
    {
      icon: Clock,
      title: "24/7 Available",
      desc: "Round the clock service, every day",
    },
    {
      icon: CreditCard,
      title: "Easy Payment",
      desc: "Cash, UPI, GPay, PhonePe, Paytm",
    },
  ];
  return (
    <div className="hidden py-10 bg-orange-50">
      <div className="px-4 mx-auto max-w-7xl">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {features.map((f, i) => (
            <div key={i} className="text-center">
              <div className="inline-flex items-center justify-center mb-3 bg-orange-500 w-14 h-14 rounded-2xl">
                <f.icon className="text-white w-7 h-7" />
              </div>
              <h4 className="mb-1 font-bold text-gray-900">{f.title}</h4>
              <p className="text-sm text-gray-500">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}




// Policy Section
function PolicySection({ title, items }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="p-5 mt-6 bg-orange-50 rounded-2xl">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full text-left"
      >
        <div className="flex items-center gap-2">
          <Info className="w-5 h-5 text-orange-500" />
          <h3 className="font-bold text-gray-800">{title}</h3>
        </div>
        <ChevronRight
          className={`w-5 h-5 text-gray-400 transition-transform ${open ? "rotate-90" : ""}`}
        />
      </button>
      {open && (
        <ul className="mt-3 space-y-2">
          {items.map((item, i) => (
            <li
              key={i}
              className="flex items-start gap-2 text-sm text-gray-600"
            >
              <AlertCircle className="w-4 h-4 text-orange-400 flex-shrink-0 mt-0.5" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}


export default function App() {
  const [activeTab, setActiveTab] = useState("tour");
  const [tourFilter, setTourFilter] = useState("all");
  const router = useRouter();

  const handleTourClick = useCallback(
    (slug) => {
      router.push(`/tour/${slug}`);
    },
    [router],
  );

  const handleAirportClick = useCallback(
    (id) => {
      router.push(`/airport/${id}`);
    },
    [router],
  );

  const handleOutstationClick = useCallback(
    (id) => {
      router.push(`/outstation/${id}`);
    },
    [router],
  );

  const handleLocalClick = useCallback(
    (id) => {
      router.push(`/local/${id}`);
    },
    [router],
  );

  const filteredTours =
    tourFilter === "all"
      ? tourPackages
      : tourPackages.filter(
          (t) => t.type === tourFilter || t.category === tourFilter,
        );

  const sectionTitles = {
    airport: {
      title: "Book Airport Taxi in Bangalore",
      subtitle:
        "Choose from the wide range of Cab/Taxi with our airport taxi booking in Bangalore",
    },
    outstation: {
      title: "Book Outstation Taxi Hire from Bangalore",
      subtitle:
        "Choose from the wide range of outstation taxi booking in Bangalore",
    },
    local: {
      title: "Best Bangalore Local Taxi Hire Service",
      subtitle:
        "Choose from the wide range of Cab/Taxi with our local taxi booking in Bangalore",
    },
    tour: {
      title: "Tour Packages from Bangalore",
      subtitle:
        "Explore handpicked destinations with our all-inclusive cab packages",
    },
  };

  return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <HeroSlider />
        <Features />
        <div className="px-4 py-8 mx-auto max-w-7xl">
        <div className="flex justify-center my-6">
          <div className="inline-flex bg-orange-50 rounded-2xl p-1.5 gap-1 flex-wrap justify-center border border-orange-100/50">
            {TABS.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;

              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id);
                    if (setTourFilter) setTourFilter("all");
                  }}
                  className={`
            flex items-center justify-center gap-2 px-4 py-3 rounded-xl 
            transition-all duration-500 ease-in-out
            ${
              isActive
                ? "bg-orange-500 text-white shadow-lg shadow-orange-500/30 ring-1 ring-orange-400"
                : "text-gray-500 hover:text-orange-600 hover:bg-orange-100"
            }
          `}
                >
                  <Icon
                    className={`w-4 h-4 shrink-0 transition-transform duration-300 ${isActive ? "scale-110" : "scale-100"}`}
                  />

                  <div
                    className={`
              overflow-hidden transition-all duration-500 ease-in-out font-black uppercase tracking-tighter
              ${isActive ? "max-w-[150px] opacity-100 ml-1" : "max-w-0 opacity-0 ml-0"}
            `}
                  >
                    <span className="text-[11px] whitespace-nowrap">
                      {tab.label}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>


        <div className="mb-6 text-center">
          <h2 className="mb-2 text-2xl font-bold text-gray-900 md:text-3xl">
            {sectionTitles[activeTab].title}
          </h2>
          <p className="max-w-2xl mx-auto text-sm text-gray-500">
            {sectionTitles[activeTab].subtitle}
          </p>
        </div>

        {activeTab === "tour" && (
          <div className="flex justify-center mb-6">
            <div className="flex max-w-full gap-2 pb-3 overflow-x-auto scrollbar-thin ">
              {tourCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setTourFilter(cat.id)}
                  className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-semibold transition-all ${tourFilter === cat.id ? "bg-orange-500 text-white shadow-md" : "bg-orange-50 text-gray-600 hover:bg-orange-100"}`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Cards Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {activeTab === "airport" &&
            airportTaxis.map((cab) => (
              <AirportCard
                key={cab.id}
                cab={cab}
                onClick={handleAirportClick}
              />
            ))}
          {activeTab === "outstation" &&
            outstationTaxis.map((cab) => (
              <OutstationCard
                key={cab.id}
                cab={cab}
                onClick={handleOutstationClick}
              />
            ))}
          {activeTab === "local" &&
            localTaxis.map((cab) => (
              <LocalCard key={cab.id} cab={cab} onClick={handleLocalClick} />
            ))}
          {activeTab === "tour" &&
            filteredTours.map((tour) => (
              <TourCard key={tour.id} tour={tour} onClick={handleTourClick} />
            ))}
        </div>

        {/* Tour empty state */}
        {activeTab === "tour" && filteredTours.length === 0 && (
          <div className="py-12 text-center">
            <Map className="w-12 h-12 mx-auto mb-3 text-orange-300" />
            <p className="text-gray-500">No packages found for this filter.</p>
          </div>
        )}

        {/* Policy notes for airport */}
        {activeTab === "airport" && (
          <PolicySection title="Airport Taxi Policy" items={airportPolicy} />
        )}

        {/* Policy notes for local */}
        {activeTab === "local" && (
          <PolicySection title="Local Rental Notes" items={localNotes} />
        )}

        {/* Policy notes for outstation */}
        {activeTab === "outstation" && (
          <PolicySection
            title="Outstation Terms & Conditions"
            items={[
              `Minimum ${outstationTerms.minimumKmPerDay} km per day`,
              `Calendar day: ${outstationTerms.calendarDay}`,
              outstationTerms.kmBilling,
              outstationTerms.driverCharges,
              outstationTerms.parkingToll,
              outstationTerms.interstateTaxes,
              outstationTerms.oneWayDrop,
            ]}
          />
        )}
      </div>


      <style jsx>{`
      .scrollbar-thin {
        scrollbar-width: thin;
        scrollbar-color: #f97316 #fff7ed;
      }
      .scrollbar-thin::-webkit-scrollbar {
        height: 4px; /* Thin horizontal scrollbar */
      }
      .scrollbar-thin::-webkit-scrollbar-track {
        background: #fff7ed;
        border-radius: 10px;
      }
      .scrollbar-thin::-webkit-scrollbar-thumb {
        background-color: #f97316; /* Tailwind orange-500 */
        border-radius: 10px;
      }
      .scrollbar-thin::-webkit-scrollbar-thumb:hover {
        background-color: #ea580c; /* Tailwind orange-600 */
      }
    `}</style>
    
    <DestinationsGallery/>
    <WhyChooseUs/>
    <Testimonials/>
    <FAQ/>
    </div>
  );
}
