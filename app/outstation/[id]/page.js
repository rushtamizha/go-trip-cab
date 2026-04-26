"use client";
import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import { company, outstationTaxis, outstationTerms } from "@/lib/data";
import {
  ArrowLeft,
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  IndianRupee,
  Users,
  Shield,
  Car,
  AlertCircle,
  Check,
  Moon,
  CreditCard,
  Route,
  Gauge,
  ChevronRight,
} from "lucide-react";
import PolicyAccordion from "@/components/ui/TermsConditions";
import BookingForm from "@/components/ui/BookingForm";

export default function OutstationDetail() {
  const { id } = useParams();
  const router = useRouter();
  const [vehicle, setVehicle] = useState(null);

  useEffect(() => {
    const found = outstationTaxis.find((v) => v.id === id);
    if (found) setVehicle(found);
  }, [id]);

  if (!vehicle) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-white">
        <div className="text-center">
          <Car className="w-16 h-16 mx-auto mb-4 text-orange-300" />
          <h2 className="mb-2 text-xl font-bold text-gray-900">
            Vehicle Not Found
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

  const similar = outstationTaxis
    .filter((v) => v.id !== vehicle.id)
    .slice(0, 3);
  // Estimate for 300km day trip
  const estimatedDayCost =
    vehicle.farePerKm * vehicle.minKm + vehicle.driverBata;

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

      {/* Hero */}
      <div className="relative w-full h-[280px] md:h-[380px] overflow-hidden">
        <img
          src={vehicle.image}
          alt={vehicle.name}
          className="object-contain w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-6 left-6">
          <span className="bg-orange-500 text-white text-sm font-bold px-4 py-1.5 rounded-full">
            Outstation Cab
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl px-4 mx-auto ">
        {/* Title Card */}
        <div className="p-6 mb-6 bg-white rounded-2xl">
          <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
            <div>
              <h1 className="mb-2 text-2xl font-bold text-gray-900 md:text-3xl">
                {vehicle.name}
              </h1>
              <p className="mb-3 text-gray-500">{vehicle.models}</p>
              <div className="flex flex-wrap items-center gap-3 text-sm">
                <span className="flex items-center gap-1 bg-orange-50 text-orange-700 px-3 py-1.5 rounded-full font-medium">
                  <Users className="w-4 h-4" />
                  {vehicle.seats}+1 Seater
                </span>
                <span className="flex items-center gap-1 bg-blue-50 text-blue-700 px-3 py-1.5 rounded-full font-medium">
                  <Route className="w-4 h-4" />
                  Min {vehicle.minKm} km/day
                </span>
              </div>
            </div>
            <div className="bg-orange-50 rounded-2xl p-5 text-center flex-shrink-0 min-w-[160px]">
              <p className="mb-1 text-sm text-gray-500">Per Kilometer</p>
              <p className="text-3xl font-bold text-orange-600">
                &#8377;{vehicle.farePerKm}.00
              </p>
              <p className="mt-1 text-sm text-gray-400">/km</p>
            </div>
          </div>
        </div>

        {/* Fare Breakdown */}
        <div className="p-6 mb-6 bg-white rounded-2xl">
          <h2 className="flex items-center gap-2 mb-4 text-xl font-bold text-gray-900">
            <IndianRupee className="w-5 h-5 text-orange-500" />
            Fare Details
          </h2>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-4 bg-orange-50 rounded-xl">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 bg-orange-500 rounded-xl">
                  <Gauge className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-800">
                    Per Kilometer Rate
                  </h4>
                  <p className="text-sm text-gray-500">
                    Charged per km travelled
                  </p>
                </div>
              </div>
              <p className="text-lg font-bold text-orange-600">
                &#8377;{vehicle.farePerKm}/km
              </p>
            </div>
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 bg-gray-200 rounded-xl">
                  <Users className="w-5 h-5 text-gray-600" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-800">
                    Driver Bata (Day)
                  </h4>
                  <p className="text-sm text-gray-500">6:00 AM to 10:00 PM</p>
                </div>
              </div>
              <p className="text-lg font-bold text-gray-700">
                &#8377;{vehicle.driverBata}/day
              </p>
            </div>
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 bg-gray-200 rounded-xl">
                  <Moon className="w-5 h-5 text-gray-600" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-800">
                    Night Allowance
                  </h4>
                  <p className="text-sm text-gray-500">
                    After 10:00 PM / Before 6:00 AM
                  </p>
                </div>
              </div>
              <p className="text-lg font-bold text-gray-700">
                &#8377;{vehicle.nightBata}
              </p>
            </div>
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 bg-gray-200 rounded-xl">
                  <Route className="w-5 h-5 text-gray-600" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-800">
                    Minimum Km/Day
                  </h4>
                  <p className="text-sm text-gray-500">
                    Minimum billing per calendar day
                  </p>
                </div>
              </div>
              <p className="text-lg font-bold text-gray-700">
                {vehicle.minKm} km
              </p>
            </div>
          </div>
        </div>
         <BookingForm carType={vehicle.name} tripType={"Outstation Cab Package"}/>
        <PolicyAccordion showTerms = {true} />

        {/* Payment */}
        <div className="p-6 mb-6 bg-white rounded-2xl">
          <h2 className="flex items-center gap-2 mb-3 text-lg font-bold text-gray-900">
            <CreditCard className="w-5 h-5 text-orange-500" />
            Payment Methods
          </h2>
          <div className="flex flex-wrap gap-2">
            {company.paymentMethods.map((m, i) => (
              <span
                key={i}
                className="px-4 py-2 text-sm font-medium text-orange-700 rounded-full bg-orange-50"
              >
                {m}
              </span>
            ))}
          </div>
        </div>

        {/* Similar */}
        {similar.length > 0 && (
          <div className="mb-6">
            <h2 className="mb-4 text-xl font-bold text-gray-900">
              Other Outstation Vehicles
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {similar.map((v) => (
                <div
                  key={v.id}
                  onClick={() => {
                    router.push(`/outstation/${v.id}`);
                    window.scrollTo(0, 0);
                  }}
                  className="p-4 transition-all bg-white border border-orange-100 shadow-md cursor-pointer rounded-xl hover:shadow-lg"
                >
                  <div className="mb-3 overflow-hidden rounded-lg h-28">
                    <img
                      src={v.image}
                      alt={v.name}
                      className="object-contain w-full h-full"
                    />
                  </div>
                  <h3 className="text-sm font-bold text-gray-900">{v.name}</h3>
                  <p className="text-sm text-gray-500">
                    {v.models} &bull; {v.seats}+1 Seater
                  </p>
                  <p className="mt-1 text-lg font-bold text-orange-600">
                    &#8377;{v.farePerKm}/km
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

