"use client";

import React from "react";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Instagram,
  Facebook,
  Twitter,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { company, tourPackages } from "@/lib/data";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const featuredTours = tourPackages;

  const regions = [
    { name: "Karnataka", img: "https://cdn.britannica.com/73/156473-050-E0E9F844/Vidah-Sauda-state-legislature-building-Karnataka-Bengaluru.jpg" },
    { name: "Andhra", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Tirumala_090615.jpg/330px-Tirumala_090615.jpg" },
    { name: "Kerala", img: "https://www.experiencetravelgroup.com/wp-content/uploads/2025/08/A.jpg" },
    { name: "Tamil Nadu", img: "https://hblimg.mmtcdn.com/content/hubble/img/Tamil%20Nadu/mmt/destination/m_destination-Tamil%20Nadu-landscape_l_400_640.jpg" },
    { name: "Telangana", img: "https://s7ap1.scene7.com/is/image/incredibleindia/2-charminar-hyderabad-telangana-state-hero?qlt=82&ts=1726653487606" },
     { name: "Goa", img: "https://s7ap1.scene7.com/is/image/incredibleindia/1-palolem-beach-goa-goa-city-hero?qlt=82&ts=1742182084999" },
  ];

  const services = [
    "Airport Transfers",
    "Local Rentals",
    "Outstation Travel",
    "Corporate Travel",
    "Premium Chauffeur Services",
  ];

  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" },
    { name: "Terms & Conditions", href: "/terms" },
    { name: "Payment Policy", href: "/payment-policy" },
    { name: "Cancellation Policy", href: "/cancellation-policy" },
  ];

  return (
    <footer className="relative w-full overflow-hidden text-white bg-slate-900">
      <div className="absolute inset-0 z-0 opacity-30">
        <img src="/footer-img.webp" alt="" className="object-cover w-full h-full" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 to-slate-900" />
      </div>

      <div className="relative z-10 px-6 pt-20 pb-8 mx-auto max-w-7xl">
        {/* Regions Row */}
        <div className="mb-16">
          <div className="grid grid-cols-2 gap-3 md:grid-cols-5">
            {regions.map((region) => (
              <div key={region.name} className="relative h-16 overflow-hidden transition-all border group rounded-xl bg-slate-800 border-white/5 hover:border-orange-500/50">
                <img src={region.img} className="absolute inset-0 object-cover w-full h-full transition-all duration-700 group-hover:scale-110 opacity-60" alt={region.name} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-[9px] font-black uppercase tracking-[0.2em] text-white">{region.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-10 mb-16 md:grid-cols-2 lg:grid-cols-12">
          {/* Brand & Info */}
          <div className="space-y-6 lg:col-span-3">
            <Link href="/" className="flex items-center gap-3">
              <img src="/logo.jpg" alt="Logo" className="object-cover w-10 h-10 border rounded-lg border-white/10" />
              <div>
                <h2 className="text-sm font-black leading-none tracking-tighter uppercase">{company.name}</h2>
                <span className="text-[8px] text-orange-500 font-bold uppercase tracking-[0.3em]">Premium Cabs</span>
              </div>
            </Link>
            <p className="text-[11px] leading-relaxed text-slate-400 font-medium">
              Reliable, safe, and professional cab services across South India. Experience luxury and comfort on every mile.
            </p>
            <div className="flex gap-2">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <Link key={i} href="#" className="p-2.5 rounded-lg bg-white/5 hover:bg-orange-600 transition-colors">
                  <Icon size={14} />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links Column (Requested Addition) */}
          <div className="lg:col-span-2">
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-orange-500 mb-6">/ Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-[11px] font-bold text-slate-300 hover:text-white transition-colors uppercase tracking-wide">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-2">
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-orange-500 mb-6">/ Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service} className="text-[11px] font-bold text-slate-300 uppercase tracking-wide">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Destinations Column */}
          <div className="lg:col-span-3">
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-orange-500 mb-6 font-mono">/ Popular Tours</h4>
            <ul className="space-y-3">
              {featuredTours.map((tour) => (
                <li key={tour.slug}>
                  <Link href={`/tour/${tour.slug}`} className="flex items-center gap-2 text-[12px] text-slate-300 hover:text-orange-500 transition-all group font-bold uppercase">
                    <ArrowRight size={10} className="-ml-4 transition-all opacity-0 group-hover:opacity-100 group-hover:ml-0" />
                    {tour.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-5">
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-orange-500 mb-6">/ Get In Touch</h4>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="space-y-4">
                <div className="flex gap-3">
                  <MapPin size={16} className="text-orange-500 shrink-0" />
                  <p className="text-[11px] text-slate-300 font-medium leading-relaxed">
                    #20, Sarjapur Main Rd, Bangalore – 560035
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={16} className="text-orange-500 shrink-0" />
                  <p className="text-[12px] font-black">{company.phoneDisplay}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-6 pt-8 border-t border-white/5 md:flex-row">
          <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-slate-500">
            © {currentYear} {company.name}
          </p>
          <div className="flex items-center gap-4 px-5 py-2 border rounded-full bg-slate-800/50 border-white/5">
            <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest">Designed by</span>
            <Link href="https://wepzite.in" className="text-[10px] font-black text-white hover:text-orange-500 transition-colors">
              WEPZITE.IN
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;