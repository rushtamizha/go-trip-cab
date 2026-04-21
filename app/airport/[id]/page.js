'use client';
import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { company, airportTaxis, airportPolicy } from '@/lib/data';
import { ArrowLeft, Phone, MessageCircle, MapPin, Clock, IndianRupee, Users, Shield, Car, AlertCircle, Check, X, CreditCard, Route, Gauge } from 'lucide-react';

export default function AirportDetail() {
  const { id } = useParams();
  const router = useRouter();
  const [vehicle, setVehicle] = useState(null);

  useEffect(() => {
    const found = airportTaxis.find((v) => v.id === id);
    if (found) setVehicle(found);
  }, [id]);

  if (!vehicle) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-white">
        <div className="text-center">
          <Car className="w-16 h-16 mx-auto mb-4 text-orange-300" />
          <h2 className="mb-2 text-xl font-bold text-gray-900">Vehicle Not Found</h2>
          <button onClick={() => router.push('/')} className="px-8 py-3 font-semibold text-white transition-colors bg-orange-500 hover:bg-orange-600 rounded-xl">Go Back Home</button>
        </div>
      </div>
    );
  }

  // Find similar vehicles (same seat count, different id)
  const similar = airportTaxis.filter(v => v.id !== vehicle.id).slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Bar */}
      <div className="sticky top-0 z-50 bg-white border-b border-orange-100 shadow-sm">
        <div className="flex items-center justify-between px-4 py-3 mx-auto max-w-7xl">
          <button onClick={() => router.push('/')} className="flex items-center gap-2 font-medium text-gray-700 transition-colors hover:text-orange-600"><ArrowLeft className="w-5 h-5" />Back</button>
          <span className="hidden text-sm font-bold text-gray-900 md:block">{company.name}</span>
          <div className="flex items-center gap-2">
            <a href={`tel:${company.phone}`} className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-orange-600 transition-colors bg-orange-50 hover:bg-orange-100 rounded-xl"><Phone className="w-4 h-4" /><span className="hidden md:inline">Call Now</span></a>
            <a href={`https://wa.me/${company.whatsapp}`} target="_blank" rel="noreferrer" className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-white transition-colors bg-green-500 hover:bg-green-600 rounded-xl"><MessageCircle className="w-4 h-4" /><span className="hidden md:inline">WhatsApp</span></a>
          </div>
        </div>
      </div>

      {/* Hero Image */}
      <div className="relative w-full h-[280px] md:h-[380px] overflow-hidden">
        <img src={vehicle.image} alt={vehicle.name} className="object-cover w-full h-full" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-6 left-6">
          <span className="bg-orange-500 text-white text-sm font-bold px-4 py-1.5 rounded-full">Airport Taxi</span>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl px-4 mx-auto ">
        {/* Title Card */}
        <div className="p-6 mb-6 bg-white rounded-2xl">
          <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
            <div>
              <h1 className="mb-2 text-2xl font-bold text-gray-900 md:text-3xl">{vehicle.name}</h1>
              <p className="mb-3 text-gray-500">{vehicle.models}</p>
              <div className="flex flex-wrap items-center gap-3 text-sm">
                <span className="flex items-center gap-1 bg-orange-50 text-orange-700 px-3 py-1.5 rounded-full font-medium"><Users className="w-4 h-4" />{vehicle.seats}+1 Seater</span>
                <span className="flex items-center gap-1 bg-blue-50 text-blue-700 px-3 py-1.5 rounded-full font-medium"><Route className="w-4 h-4" />Upto {vehicle.distance} km</span>
                <span className="flex items-center gap-1 bg-green-50 text-green-700 px-3 py-1.5 rounded-full font-medium"><Shield className="w-4 h-4" />Toll: {vehicle.toll}</span>
              </div>
            </div>
            <div className="bg-orange-50 rounded-2xl p-5 text-center flex-shrink-0 min-w-[160px]">
              <p className="mb-1 text-sm text-gray-500">One Way Fare</p>
              <p className="text-3xl font-bold text-orange-600">&#8377;{vehicle.fare.toLocaleString('en-IN')}</p>
              <p className="mt-1 text-xs text-gray-400">fixed price</p>
            </div>
          </div>
        </div>

        {/* Fare Breakdown */}
        <div className="p-6 mb-6 bg-white rounded-2xl">
          <h2 className="flex items-center gap-2 mb-4 text-xl font-bold text-gray-900"><IndianRupee className="w-5 h-5 text-orange-500" />Fare Details</h2>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-4 bg-orange-50 rounded-xl">
              <div className="flex items-center gap-3"><div className="flex items-center justify-center w-10 h-10 bg-orange-500 rounded-xl"><IndianRupee className="w-5 h-5 text-white" /></div><div><h4 className="text-sm font-bold text-gray-800">Base Fare</h4><p className="text-xs text-gray-500">Fixed price for the trip</p></div></div>
              <p className="text-lg font-bold text-orange-600">&#8377;{vehicle.fare.toLocaleString('en-IN')}</p>
            </div>
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
              <div className="flex items-center gap-3"><div className="flex items-center justify-center w-10 h-10 bg-gray-200 rounded-xl"><Route className="w-5 h-5 text-gray-600" /></div><div><h4 className="text-sm font-bold text-gray-800">Distance Included</h4><p className="text-xs text-gray-500">Maximum distance covered</p></div></div>
              <p className="text-lg font-bold text-gray-700">{vehicle.distance} km</p>
            </div>
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
              <div className="flex items-center gap-3"><div className="flex items-center justify-center w-10 h-10 bg-gray-200 rounded-xl"><Shield className="w-5 h-5 text-gray-600" /></div><div><h4 className="text-sm font-bold text-gray-800">Toll Charges</h4><p className="text-xs text-gray-500">Highway toll fees</p></div></div>
              <p className="text-sm font-semibold text-gray-600">{vehicle.toll}</p>
            </div>
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
              <div className="flex items-center gap-3"><div className="flex items-center justify-center w-10 h-10 bg-gray-200 rounded-xl"><Users className="w-5 h-5 text-gray-600" /></div><div><h4 className="text-sm font-bold text-gray-800">Seating Capacity</h4><p className="text-xs text-gray-500">{vehicle.seats} passengers + 1 driver</p></div></div>
              <p className="text-lg font-bold text-gray-700">{vehicle.seats}+1</p>
            </div>
          </div>
        </div>

        {/* Service Info */}
        <div className="p-6 mb-6 bg-white rounded-2xl">
          <h2 className="flex items-center gap-2 mb-4 text-xl font-bold text-gray-900"><Car className="w-5 h-5 text-orange-500" />Service Type</h2>
          <div className="p-4 mb-4 bg-orange-50 rounded-xl">
            <p className="text-sm text-gray-700">This is a <strong>point-to-point airport transfer</strong> service. The cab will pick you up from your location and drop you at Kempegowda International Airport (or vice versa) within Bangalore city limits ({vehicle.distance} km).</p>
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            <div className="p-4 text-center bg-green-50 rounded-xl"><Check className="w-6 h-6 mx-auto mb-2 text-green-600" /><p className="text-sm font-medium text-gray-700">Airport Pickup</p></div>
            <div className="p-4 text-center bg-green-50 rounded-xl"><Check className="w-6 h-6 mx-auto mb-2 text-green-600" /><p className="text-sm font-medium text-gray-700">Airport Drop</p></div>
            <div className="p-4 text-center bg-green-50 rounded-xl"><Check className="w-6 h-6 mx-auto mb-2 text-green-600" /><p className="text-sm font-medium text-gray-700">24/7 Available</p></div>
          </div>
        </div>

        {/* Policy */}
        <div className="p-6 mb-6 bg-white rounded-2xl">
          <h2 className="flex items-center gap-2 mb-4 text-xl font-bold text-gray-900"><AlertCircle className="w-5 h-5 text-orange-500" />Airport Taxi Policy</h2>
          <ul className="space-y-3">
            {airportPolicy.map((item, i) => (
              <li key={i} className="flex items-start gap-3 p-3 bg-orange-50 rounded-xl">
                <div className="flex items-center justify-center flex-shrink-0 w-6 h-6 text-xs font-bold text-white bg-orange-500 rounded-lg">{i + 1}</div>
                <span className="text-sm text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Payment Methods */}
        <div className="p-6 mb-6 bg-white rounded-2xl">
          <h2 className="flex items-center gap-2 mb-3 text-lg font-bold text-gray-900"><CreditCard className="w-5 h-5 text-orange-500" />Payment Methods</h2>
          <div className="flex flex-wrap gap-2">
            {company.paymentMethods.map((m, i) => (
              <span key={i} className="px-4 py-2 text-sm font-medium text-orange-700 rounded-full bg-orange-50">{m}</span>
            ))}
          </div>
        </div>

        {/* Similar Vehicles */}
        {similar.length > 0 && (
          <div className="mb-6">
            <h2 className="mb-4 text-xl font-bold text-gray-900">Other Airport Vehicles</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {similar.map((v) => (
                <div key={v.id} onClick={() => { router.push(`/airport/${v.id}`); window.scrollTo(0,0); }} className="p-4 transition-all bg-white border border-orange-100 cursor-pointer md rounded-xl ">
                  <div className="mb-3 overflow-hidden rounded-lg h-28"><img src={v.image} alt={v.name} className="object-cover w-full h-full" /></div>
                  <h3 className="text-sm font-bold text-gray-900">{v.name}</h3>
                  <p className="text-xs text-gray-500">{v.models} &bull; {v.seats}+1 Seater</p>
                  <p className="mt-1 text-lg font-bold text-orange-600">&#8377;{v.fare.toLocaleString('en-IN')}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="p-6 mb-8 text-center text-white bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl md:p-8">
          <h3 className="mb-2 text-2xl font-bold">Book {vehicle.name}</h3>
          <p className="mb-6 text-orange-100">Get instant confirmation for your airport transfer</p>
          <div className="flex flex-col justify-center gap-3 sm:flex-row">
            <a href={`tel:${company.phone}`} className="inline-flex items-center justify-center gap-2 px-8 py-3 font-bold text-orange-600 transition-colors bg-white rounded-xl hover:bg-orange-50"><Phone className="w-5 h-5" />Call {company.phoneDisplay}</a>
            <a href={`https://wa.me/${company.whatsapp}?text=Hi, I want to book ${vehicle.name} for airport transfer`} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-3 font-bold text-white transition-colors bg-green-500 rounded-xl hover:bg-green-600"><MessageCircle className="w-5 h-5" />WhatsApp</a>
          </div>
        </div>
      </div>

      <div className="py-6 text-center bg-gray-900"><p className="text-sm text-gray-500">&copy; 2025 {company.name}. All rights reserved.</p></div>
      <a href={`https://wa.me/${company.whatsapp}?text=Hi, I want to book ${vehicle.name}`} target="_blank" rel="noreferrer" className="fixed z-50 p-4 text-white transition-all bg-green-500 rounded-full shadow-2xl bottom-6 right-6 hover:bg-green-600 hover:scale-110"><MessageCircle className="w-7 h-7" /></a>
    </div>
  );
}
