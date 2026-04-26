"use client";

import React from "react";
import Link from "next/link";
import { 
  ShieldCheck, Wallet, Car, Users, 
  MapPin, AlertTriangle, PawPrint, 
  Clock, FileText, ChevronRight 
} from "lucide-react";

const sections = [
  { id: "booking", title: "1. Booking & Payment", icon: <Wallet size={16} /> },
  { id: "cancellation", title: "2. Cancellation Policy", icon: <ShieldCheck size={16} /> },
  { id: "refund", title: "3. Refund Policy", icon: <FileText size={16} /> },
  { id: "breakdown", title: "4. Cab Breakdown", icon: <AlertTriangle size={16} /> },
  { id: "batta", title: "5. Driver Allowance", icon: <Users size={16} /> },
  { id: "km-policy", title: "6. KM & Package Policy", icon: <MapPin size={16} /> },
  { id: "tolls", title: "7. Toll & Taxes", icon: <FileText size={16} /> },
  { id: "oneway", title: "8. One Way Trip", icon: <Car size={16} /> },
  { id: "usage", title: "9. Vehicle Usage", icon: <Car size={16} /> },
  { id: "pets", title: "10. Pets Policy", icon: <PawPrint size={16} /> },
  { id: "responsibilities", title: "11. Customer Roles", icon: <Users size={16} /> },
  { id: "peak", title: "12. Seasonal Policy", icon: <Clock size={16} /> },
  { id: "notes", title: "13. Important Notes", icon: <AlertTriangle size={16} /> },
];

export default function TermsPage() {
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const ListItem = ({ children }) => (
    <li className="flex gap-3 mb-4 last:mb-0">
      <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-orange-500 shrink-0" />
      <span className="text-[13px] leading-relaxed text-slate-600 font-medium">{children}</span>
    </li>
  );

  const SectionWrapper = ({ id, title, children }) => (
    <section id={id} className="pt-12 mb-12 border-t border-slate-100 first:border-0 first:pt-0">
      <h2 className="flex items-center gap-3 mb-6 text-xl font-black tracking-tight uppercase text-slate-900">
        <span className="text-orange-500">#</span> {title}
      </h2>
      <ul className="p-0 list-none">{children}</ul>
    </section>
  );

  return (
    <main className="min-h-screen pb-20 bg-white pt-28">
      <div className="gap-12 px-6 mx-auto max-w-7xl lg:flex">
        
        {/* Sticky Sidebar Navigation */}
        <aside className="hidden lg:block w-72 sticky top-28 h-fit max-h-[80vh] overflow-y-auto no-scrollbar pr-4">
          <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-6">Contents</h4>
          <nav className="flex flex-col gap-1">
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => scrollTo(s.id)}
                className="flex items-center gap-3 p-3 text-left transition-all rounded-xl hover:bg-slate-50 group"
              >
                <span className="transition-colors text-slate-400 group-hover:text-orange-600">{s.icon}</span>
                <span className="text-[11px] font-black uppercase tracking-tight text-slate-600 group-hover:text-slate-900">
                  {s.title}
                </span>
              </button>
            ))}
          </nav>
        </aside>

        {/* Main Content Area */}
        <div className="flex-1 max-w-3xl">
          <div className="mb-12">
            <span className="text-[10px] font-black text-orange-600 uppercase tracking-[0.4em] block mb-4">Wepzite Digital • Legal</span>
            <h1 className="text-4xl font-black leading-none tracking-tighter uppercase md:text-5xl text-slate-900">
              Comprehensive <br /> <span className="text-orange-600">Service Terms</span>
            </h1>
          </div>

          <SectionWrapper id="booking" title="Booking & Payment Process">
            <ListItem>A minimum 20% advance payment is required at the time of booking confirmation.</ListItem>
            <ListItem>Booking will be confirmed only after receipt of the advance amount.</ListItem>
            <ListItem>The advance amount will be adjusted in the final invoice.</ListItem>
            <ListItem>50% of the total amount must be paid before the start of the trip.</ListItem>
            <ListItem>The remaining balance must be settled immediately upon trip completion.</ListItem>
            <ListItem>No credit facility is provided under any circumstances.</ListItem>
            <ListItem>Complete trip details (Date, Time, Pickup & Drop location) must be shared clearly at the time of booking.</ListItem>
            <ListItem>Booking confirmation will be provided via Call /WhatsApp/SMS.</ListItem>
            <ListItem>Vehicle allocation is subject to availability at the time of travel.</ListItem>
            <ListItem>The final invoice will be issued after completion of the trip.</ListItem>
            <ListItem>In case of any operational issues, an alternate vehicle of a similar category may be provided, subject to availability.</ListItem>
          </SectionWrapper>

          <SectionWrapper id="cancellation" title="Cancellation Policy">
            <ListItem>Same-day cancellation (on the booking date): Eligible for a 100% refund.</ListItem>
            <ListItem>Cancellations made 7 days or more prior to the trip: Eligible for a 75% refund.</ListItem>
            <ListItem>Cancellations made between 3 to 6 days before the trip: A 50% cancellation charge will apply.</ListItem>
            <ListItem>Cancellations made between 1 to 3 days before the trip: A 75% cancellation charge will apply (i.e., 25% refund).</ListItem>
            <ListItem>Cancellations made within 24 hours of the trip / 1 day before the trip: 100% of the advance (confirmation amount) is non-refundable.</ListItem>
          </SectionWrapper>

          <SectionWrapper id="refund" title="Refund Policy">
            <ListItem>Eligible refunds will be processed within 2-3 working days from the date of cancellation confirmation.</ListItem>
            <ListItem>In case any excess amount is collected by the driver, the same will be verified and refunded within 3-4 working days.</ListItem>
          </SectionWrapper>

          <SectionWrapper id="breakdown" title="Cab Breakdown Policy">
            <ListItem>In the event of a vehicle breakdown or any unforeseen incident, Go Trip Cabs will make every reasonable effort to repair the vehicle promptly or provide a replacement vehicle, subject to availability and operational feasibility.</ListItem>
            <ListItem>Replacement arrangements will be made based on time, distance, and availability.</ListItem>
            <ListItem>This service is intended to ensure customer convenience and continuity of travel.</ListItem>
            <ListItem>If the customer chooses to cancel the trip despite these arrangements, the cancellation will be processed as per the company's cancellation policy.</ListItem>
          </SectionWrapper>

          <SectionWrapper id="batta" title="Driver Allowance (Batta)">
            <ListItem>Driver charges include a daily allowance (batta) applicable from 6:00 AM to 10:00 PM, as per the selected package.</ListItem>
            <ListItem>An additional allowance will be applicable for night driving between 10:00 PM and 6:00 AM.</ListItem>
            <ListItem>For all outstation trips, driver batta is mandatory.</ListItem>
            <ListItem>Customers are not required to bear the driver's food and accommodation expenses; however, they may choose to do so at their own discretion.</ListItem>
          </SectionWrapper>

          <SectionWrapper id="km-policy" title="Package & Kilometer Policy">
            <ListItem>Packages are based on fixed kilometers (KM) and hours.</ListItem>
            <ListItem>Minimum travel requirement: 300 KM per day (as applicable).</ListItem>
            <ListItem>One calendar day is counted from 12:00 AM to 11:59 PM.</ListItem>
            <ListItem>Package KM usage: 1 Day (Min 300 KM), 2 Days (Min 600 KM cumulative).</ListItem>
            <ListItem>Kilometers will generally be calculated on a Garage-to-Garage basis.</ListItem>
            <ListItem>In some cases, billing may be Point-to-Point, as per agreement.</ListItem>
            <ListItem>Extra KM and Extra Hours will be charged according to the vehicle type.</ListItem>
          </SectionWrapper>

          <SectionWrapper id="tolls" title="Toll, Parking, Taxes & Permits">
            <ListItem>Toll, parking, and entry charges are extra, payable as per actuals (unless included).</ListItem>
            <ListItem>State permits and interstate taxes are applicable as per government rules.</ListItem>
          </SectionWrapper>

          <SectionWrapper id="oneway" title="One Way Trip">
            <ListItem>One-way trips are generally charged for both-side kilometers.</ListItem>
            <ListItem>Discounts may be offered in select cases, at the discretion of the company.</ListItem>
          </SectionWrapper>

          <SectionWrapper id="usage" title="Vehicle Usage Guidelines">
            <ListItem>The vehicle is intended for outstation travel only and is not meant for local trips.</ListItem>
            <ListItem>Pickup and drop must occur at the same location.</ListItem>
            <ListItem>Customers are requested to maintain cleanliness inside the vehicle.</ListItem>
            <ListItem>AC may be turned off in hilly areas for safety and performance.</ListItem>
            <ListItem>AC will not run when the vehicle is parked or waiting.</ListItem>
          </SectionWrapper>

          <SectionWrapper id="pets" title="Pets Policy">
            <ListItem>Pets are not allowed inside the vehicle.</ListItem>
          </SectionWrapper>

          <SectionWrapper id="responsibilities" title="Customer Responsibilities">
            <ListItem>Maintain cleanliness and proper vehicle care. Any damage will be chargeable.</ListItem>
            <ListItem>Illegal activities are strictly prohibited during the trip.</ListItem>
            <ListItem>Cooperate with the driver for a safe and smooth journey.</ListItem>
            <ListItem>Manage your own time for sightseeing; this is not a guided tour.</ListItem>
            <ListItem>Company is not responsible for loss of personal belongings.</ListItem>
            <ListItem>Delays due to natural causes or calamities are the customer's responsibility.</ListItem>
            <ListItem>The itinerary will be finalized after customer confirmation.</ListItem>
            <ListItem>All disputes are subject to Bangalore jurisdiction.</ListItem>
          </SectionWrapper>

          <SectionWrapper id="peak" title="Seasonal & Peak-Time Policy">
            <ListItem>During peak seasons / high-demand periods, confirmed bookings cannot be changed or cancelled.</ListItem>
            <ListItem>This includes weekends, festivals, and peak travel dates.</ListItem>
            <ListItem>In case of delays, our 24/7 support team will assist in arranging an alternate vehicle.</ListItem>
            <ListItem>If the booked vehicle fails to arrive, a full refund of the advance will be processed.</ListItem>
          </SectionWrapper>

          <SectionWrapper id="notes" title="Important Notes">
            <ListItem>All state taxes/permits are valid for one week and single entry only.</ListItem>
            <ListItem>The quoted price is subject to change based on seasonal demand, fuel prices, and peak days.</ListItem>
            <ListItem>Customers are requested to confirm the final rates before proceeding with the booking.</ListItem>
          </SectionWrapper>

          <div className="mt-20 p-8 rounded-[2.5rem] bg-slate-900 text-white flex flex-col md:flex-row items-center gap-6">
            <div className="flex items-center justify-center w-16 h-16 bg-orange-600 rounded-2xl shrink-0">
               <ShieldCheck size={32} />
            </div>
            <div>
              <p className="mb-1 text-sm font-black tracking-widest uppercase">Agreement Notice</p>
              <p className="text-[11px] text-slate-400 font-medium">By proceeding with a booking, you acknowledge that you have read and agreed to all the terms listed above.</p>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}