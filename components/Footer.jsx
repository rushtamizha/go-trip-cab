"use client";

import React from "react";
import Link from "next/link";
import { 
  Phone, Mail, MapPin, Instagram, 
  Facebook, Twitter, ArrowRight 
} from "lucide-react";
import { company, tourPackages } from "@/lib/data"; // Ensure tourPackages is imported

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Sort or slice tourPackages if you only want to show featured ones
  const featuredTours = tourPackages;

  const footerLinks = {
    company: [
      { name: "About Us", href: "/about" },
      { name: "Contact Us", href: "/contact" },
      { name: "All Packages", href: "/tours" },
    ],
    support: [
      { name: "Privacy Policy", href: "/privacy-policy" },
      { name: "Terms & Conditions", href: "/terms-conditions" },
      { name: "Refund Policy", href: "/refund-policy" },
    ],
  };

  return (
    <footer className="relative w-full overflow-hidden text-white bg-slate-900">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/footer-img.webp" 
          alt="Footer Background"
          className="object-cover w-full h-full "
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/30 to-slate-900" />
      </div>

      <div className="relative z-10 px-6 pt-16 pb-8 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 mb-16 md:grid-cols-2 lg:grid-cols-10">
          
          {/* 1. Brand Column (Span 3) */}
          <div className="space-y-6 lg:col-span-3">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex items-center justify-center w-10 h-10 italic font-bold text-white bg-orange-600 shadow-lg rounded-xl shadow-orange-600/20">
                W
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-black tracking-tighter text-white uppercase">
                  {company.name}
                </span>
                <span className="text-[9px] font-bold text-orange-500 uppercase tracking-[0.3em]">
                  Premium Travel Agency
                </span>
              </div>
            </Link>
            <p className="max-w-xs text-xs leading-relaxed text-slate-300">
              Crafting premium travel experiences with transparency and reliability. Your journey, our commitment.
            </p>
            <div className="flex items-center gap-4">
              {[Instagram, Facebook, Twitter].map((Icon, idx) => (
                <Link key={idx} href="#" className="flex items-center justify-center transition-all rounded-lg w-9 h-9 bg-white/5 hover:bg-orange-600 hover:text-white">
                  <Icon size={16} />
                </Link>
              ))}
            </div>
          </div>

          {/* 2. Quick Links (Span 1.5) */}
          <div className="lg:col-span-1.5">
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-white mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-[13px] text-slate-400 hover:text-orange-500 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. NEW: Destinations Column (Span 2) */}
          <div className="lg:col-span-2">
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-white mb-6">Destinations</h4>
            <ul className="space-y-3">
              {featuredTours.map((tour) => (
                <li key={tour.slug}>
                  <Link 
                    href={`/tour/${tour.slug}`} 
                    className="flex items-center gap-2 text-[13px] text-slate-400 hover:text-orange-500 transition-all group"
                  >
                    <ArrowRight size={10} className="-ml-3 transition-all opacity-0 group-hover:opacity-100 group-hover:ml-0" />
                    {tour.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. Legal (Span 1.5) */}
          <div className="lg:col-span-1.5">
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-white mb-6">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-[13px] text-slate-400 hover:text-orange-500 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 5. Contact (Span 2) */}
          <div className="p-6 lg:col-span-2 rounded-3xl ">
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-white mb-5">Office</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 text-orange-500 shrink-0" size={14} />
                <p className="text-[11px] text-slate-300 leading-snug">Theni, Tamil Nadu, India.</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-orange-500 shrink-0" size={14} />
                <p className="text-[11px] font-bold text-slate-100">{company.phoneDisplay}</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-orange-500 shrink-0" size={14} />
                <p className="text-[11px] text-slate-100">info@wepzite.in</p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-4 pt-8 border-t border-white/5 md:flex-row">
          <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-500">
            © {currentYear} {company.name}. All Rights Reserved.
          </p>
          <div className="flex items-center gap-4">
             <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">
               Design by <span className="text-white">Wepzite</span>
             </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;