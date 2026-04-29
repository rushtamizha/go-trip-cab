"use client";
import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import {
  company,
  tourPackages,
  tourGlobalIncludes,
  tourGlobalExcludes,
  tourGlobalNotes,
  bookingPolicy,
  cancellationPolicy,
  Inclusion,
  Exclusion,
} from "@/lib/data";
import {
  ChevronLeft,
  ChevronRight,
  ArrowLeft,
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  IndianRupee,
  Star,
  Check,
  X,
  Car,
  Users,
  Calendar,
  Route,
  Info,
  AlertCircle,
  CreditCard,
  Shield,
} from "lucide-react";
import PolicyAccordion from "@/components/ui/TermsConditions";
import TourBookingForm from "@/components/ui/TourBooking";
import InclusionExclusion from "@/components/InclusionExclusion";
import { NotesPolicy } from "@/components/Notes";

export default function TourPreview() {
  const { slug } = useParams();
  const router = useRouter();
  const [currentImage, setCurrentImage] = useState(0);
  const [tour, setTour] = useState(null);
  const [showPolicy, setShowPolicy] = useState(false);

  useEffect(() => {
    const found = tourPackages.find((t) => t.slug === slug);
    if (found) setTour(found);
  }, [slug]);

  useEffect(() => {
    if (!tour) return;
    const timer = setInterval(
      () => setCurrentImage((p) => (p + 1) % tour.gallery.length),
      3500,
    );
    return () => clearInterval(timer);
  }, [tour]);

  const handleWhatsApp = (vehicleType, price) => {
  // Basic validation (optional)
  const tourName = tour.title || "Selected Tour Package";
  
  const message = 
    `*TOUR BOOKING INQUIRY*%0A` +
    `--------------------------%0A` +
    `*Tour:* ${tourName}%0A` +
    `*Vehicle:* ${vehicleType.toUpperCase()}%0A` +
    (price ? `*Estimate:* ₹${price.toLocaleString('en-IN')}%0A` : "") +
    `--------------------------%0A` +
    `I'm interested in booking this tour. Please share more details regarding availability.`;

  window.open(`https://wa.me/${company.whatsapp}?text=${message}`, "_blank");
};

  if (!tour) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-white">
        <div className="text-center">
          <MapPin className="w-16 h-16 mx-auto mb-4 text-orange-300" />
          <h2 className="mb-2 text-xl font-bold text-gray-900">
            Tour Not Found
          </h2>
          <button
            onClick={() => router.push("/")}
            className="px-8 py-3 font-semibold text-white transition-colors bg-orange-500 hover:bg-orange-600 rounded-xl"
          >
            Go Back Home
          </button>
        </div>
      </div>
    );
  }

  const includes = tour.includes || tourGlobalIncludes;
  const excludes = tour.excludes || tourGlobalExcludes;
  const minPrice = tour.vehicles.map((v) => v.price).filter((p) => p !== null);
  const startingPrice = minPrice.length > 0 ? Math.min(...minPrice) : null;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Bar */}
      <div className="sticky top-0 z-50 bg-white border-b border-orange-100 shadow-sm">
        <div className="flex items-center justify-between px-4 py-3 mx-auto max-w-7xl">
          <button
            onClick={() => router.push("/")}
            className="flex items-center gap-2 font-medium text-gray-700 transition-colors hover:text-orange-600"
          >
            <ArrowLeft className="w-5 h-5" />
            Back
          </button>
          <span className="hidden text-sm font-bold text-gray-900 md:block">
            {company.name}
          </span>
          <div className="flex items-center gap-2">
            <a
              href={`tel:${company.phone}`}
              className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-orange-600 transition-colors bg-orange-50 hover:bg-orange-100 rounded-xl"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden md:inline">Call Now</span>
            </a>
            <a
              href={`https://wa.me/${company.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-white transition-colors bg-green-500 hover:bg-green-600 rounded-xl"
            >
              <MessageCircle className="w-4 h-4" />
              <span className="hidden md:inline">WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Image Slider */}
      <div className="relative w-full h-[280px] md:h-[420px] overflow-hidden">
        {tour.gallery.map((img, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-all duration-700 ${i === currentImage ? "opacity-100 scale-100" : "opacity-0 scale-105"}`}
          >
            <img
              src={img}
              alt={`${tour.title} - ${i + 1}`}
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </div>
        ))}
        <div className="absolute z-10 flex gap-2 -translate-x-1/2 bottom-4 left-1/2">
          {tour.gallery.map((img, i) => (
            <button
              key={i}
              onClick={() => setCurrentImage(i)}
              className={`w-14 h-9 rounded-lg overflow-hidden border-2 transition-all ${i === currentImage ? "border-orange-500 scale-110 shadow-lg" : "border-white/50 opacity-70"}`}
            >
              <img src={img} alt="" className="object-cover w-full h-full" />
            </button>
          ))}
        </div>
        <button
          onClick={() =>
            setCurrentImage(
              (p) => (p - 1 + tour.gallery.length) % tour.gallery.length,
            )
          }
          className="absolute z-10 p-2 text-white transition-all -translate-y-1/2 rounded-full left-3 top-1/2 bg-white/20 hover:bg-orange-500 backdrop-blur-sm"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={() => setCurrentImage((p) => (p + 1) % tour.gallery.length)}
          className="absolute z-10 p-2 text-white transition-all -translate-y-1/2 rounded-full right-3 top-1/2 bg-white/20 hover:bg-orange-500 backdrop-blur-sm"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl px-4 mx-auto ">
        {/* Title Card */}
        <div className="p-6 mb-6 bg-white rounded-2xl">
          <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
            <div>
              <h1 className="mb-3 text-2xl font-bold text-gray-900 md:text-3xl">
                {tour.title}
              </h1>
              <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500">
                <span className="flex items-center gap-1 px-3 py-1 font-medium text-orange-700 rounded-full bg-orange-50">
                  <Calendar className="w-4 h-4" />
                  {tour.duration}
                </span>
                {tour.timing && (
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4 text-orange-500" />
                    {tour.timing}
                  </span>
                )}
                {tour.distanceKm && (
                  <span className="flex items-center gap-1">
                    <Route className="w-4 h-4 text-orange-500" />
                    {tour.distanceKm}
                  </span>
                )}
              </div>
            </div>
            <div className="flex-shrink-0 p-5 text-center bg-orange-50 rounded-2xl">
              {startingPrice ? (
                <>
                  <p className="mb-1 text-sm text-gray-500">Starts from</p>
                  <p className="text-3xl font-bold text-orange-600">
                    &#8377;{startingPrice.toLocaleString("en-IN")}/-
                  </p>
                  <p className="mt-1 text-sm text-gray-400">per package</p>
                </>
              ) : (
                <>
                  <p className="mb-1 text-sm text-gray-500">Pricing</p>
                  <p className="text-xl font-bold text-orange-600">
                    Contact Us
                  </p>
                  <p className="mt-1 text-sm text-gray-400">for best rates</p>
                </>
              )}
            </div>
          </div>

          {/* Highlights */}
          <div className="flex flex-wrap gap-2 mt-4">
            {tour.highlights.map((h, i) => (
              <span
                key={i}
                className="flex items-center gap-1 text-sm bg-orange-50 text-orange-700 px-3 py-1.5 rounded-full"
              >
                <MapPin className="w-3 h-3" />
                {h}
              </span>
            ))}
          </div>
        </div>

        {/* Places to Visit */}
        <div className="p-6 mb-6 bg-white rounded-2xl">
          <h2 className="flex items-center gap-2 mb-4 text-xl font-bold text-gray-900">
            <MapPin className="w-5 h-5 text-orange-500" />
            Places to Visit
          </h2>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {tour.places.map((p, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-3 bg-orange-50 rounded-xl"
              >
                <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 text-sm font-bold text-white bg-orange-500 rounded-lg">
                  {i + 1}
                </div>
                <div>
                  <span className="font-medium text-gray-800">{p.name}</span>
                  {p.description && (
                    <p className="text-sm text-gray-500 mt-0.5">
                      {p.description}
                    </p>
                  )}
                  {p.note && (
                    <span className="text-sm font-medium text-orange-600">
                      ({p.note})
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Itinerary */}
        {tour.itinerary && tour.itinerary.length > 0 && (
          <div className="p-6 mb-6 bg-white rounded-2xl">
            <h2 className="flex items-center gap-2 mb-4 text-xl font-bold text-gray-900">
              <Calendar className="w-5 h-5 text-orange-500" />
              Itinerary
            </h2>
            <div className="space-y-4">
              {tour.itinerary.map((day, i) => (
                <div key={i} className="pl-4 border-l-4 border-orange-500">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-3 py-1 text-sm font-bold text-white bg-orange-500 rounded-full">
                       {day.day}
                    </span>
                    <h3 className="font-bold text-gray-800">{day.title}</h3>
                  </div>
                  <ul className="space-y-1.5">
                    {day.activities.map((act, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-2 text-sm text-gray-600"
                      >
                        <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2 flex-shrink-0" />
                        <span>{act}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}
        <div className="p-6 mb-6 bg-white rounded-[2rem]   ">
          <h2 className="flex items-center gap-2 mb-6 text-xl font-bold text-gray-900 ">
            <Car className="w-5 h-5 text-orange-500" /> Choose Your Vehicle
          </h2>

          <div className="space-y-4">
            {tour.vehicles.map((v, i) => (
              <div
                key={i}
                className="relative flex flex-col justify-between p-5 transition-all border bg-orange-50 group sm:flex-row sm:items-center border-slate-100 rounded-2xl "
              >
                <div className="flex items-center gap-4">   
                  <div>
                    <h4 className=" text-medium gray-900 font-">
                      {v.type}
                    </h4>
                    <p className="text-xs font-medium text-slate-400">
                      {v.models}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between sm:mt-0 sm:gap-8">
                  {/* Price Section */}
                  <div className="text-left sm:text-right">
                    {v.price ? (
                      <>
                        <p className="font-medium leading-none text-orange-600">
                          ₹{v.price.toLocaleString("en-IN")}
                          {v.priceMax ? (
                            <span className="text-sm font-medium text-slate-400">
                              {" "}
                              - ₹{v.priceMax.toLocaleString("en-IN")}
                            </span>
                          ) : (
                            ""
                          )}
                        </p>
                        {v.priceNote && (
                          <p className="text-[10px] font-medium text-slate-400 uppercase tracking-widest mt-1">
                            {v.priceNote}
                          </p>
                        )}
                      </>
                    ) : (
                      <p className="text-xs font-medium tracking-widest text-orange-600 uppercase">
                        {v.priceNote || "Price on Request"}
                      </p>
                    )}
                  </div>

                  {/* New Booking Button */}
                  <button
                    onClick={() => handleWhatsApp(v.type,v.price)} // Pass vehicle type to your existing WhatsApp function
                    className="flex items-center gap-2 px-4 py-2 bg-orange-600 text-white rounded-xl text-[11px] font-semibold  tracking-[0.15em] transition-all hover:bg-orange-600 active:scale-95  "
                  >
                    Book Now
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <InclusionExclusion Inclusion={tour.includes} Exclusion={tour.excludes}/>
        <NotesPolicy/>
        <TourBookingForm packageName={tour.title} />
        <PolicyAccordion />
        
        <div className="p-6 my-8 bg-white rounded-2xl">
          <h2 className="flex items-center gap-2 mb-3 text-lg font-bold text-gray-900"><CreditCard className="w-5 h-5 text-orange-500" />Payment Methods</h2>
          <div className="flex flex-wrap gap-2">
            {company.paymentMethods.map((m, i) => (
              <span key={i} className="px-4 py-2 text-sm font-medium text-orange-700 rounded-full bg-orange-50">{m}</span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="hidden p-6 my-8 text-center text-white bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl md:p-8">
          <h3 className="mb-2 text-2xl font-bold">Ready to Book?</h3>
          <p className="mb-6 text-orange-100">
            Get in touch with us to book this package or customize it according
            to your needs.
          </p>
          <div className="flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={`tel:${company.phone}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-3 font-bold text-orange-600 transition-colors bg-white rounded-xl hover:bg-orange-50"
            >
              <Phone className="w-5 h-5" />
              Call {company.phoneDisplay}
            </a>
            <a
              href={`https://wa.me/${company.whatsapp}?text=Hi, I am interested in ${tour.title} package`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 font-bold text-white transition-colors bg-green-500 rounded-xl hover:bg-green-600"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
      
    </div>
  );
}
