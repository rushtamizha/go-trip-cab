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
  Globe,
} from "lucide-react";
import { company, tourPackages } from "@/lib/data";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const featuredTours = tourPackages;

  const regions = [
    {
      name: "Karnataka",
      img: "https://cdn.britannica.com/73/156473-050-E0E9F844/Vidah-Sauda-state-legislature-building-Karnataka-Bengaluru.jpg",
    },
    {
      name: "Andhra",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Tirumala_090615.jpg/330px-Tirumala_090615.jpg",
    },
    {
      name: "Kerala",
      img: "https://www.experiencetravelgroup.com/wp-content/uploads/2025/08/A.jpg",
    },
    {
      name: "Tamil Nadu",
      img: "https://hblimg.mmtcdn.com/content/hubble/img/Tamil%20Nadu/mmt/destination/m_destination-Tamil%20Nadu-landscape_l_400_640.jpg",
    },
    {
      name: "Telangana",
      img: "https://s7ap1.scene7.com/is/image/incredibleindia/2-charminar-hyderabad-telangana-state-hero?qlt=82&ts=1726653487606",
    },
  ];

  return (
    <footer className="relative w-full overflow-hidden text-white bg-slate-900">
      <div className="absolute inset-0 z-0">
        <img
          src="/footer-img.webp"
          alt=""
          className="object-cover w-full h-full "
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-slate-900" />
      </div>

      <div className="relative z-10 px-6 pt-20 pb-8 mx-auto max-w-7xl">
        {/* TOP: Regional Selector (The requested addition) */}
        <div className="mb-20">
          <div className="grid grid-cols-2 gap-3 md:grid-cols-5">
            {regions.map((region) => (
              <div
                key={region.name}
                className="relative h-20 overflow-hidden transition-all border group rounded-2xl bg-slate-800 border-white/5 hover:border-orange-500/50"
              >
                <img
                  src={region.img}
                  className="absolute inset-0 object-cover w-full h-full transition-all duration-700 group-hover:scale-110"
                  alt={region.name}
                />
                <div className="absolute inset-0 transition-colors bg-slate-900/40 group-hover:bg-transparent" />
                <div className="absolute inset-0 flex items-center justify-center p-2 text-center">
                  <span className="text-[10px] font-black uppercase tracking-widest text-white">
                    {region.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-12 mb-20 md:grid-cols-2 lg:grid-cols-12">
          {/* Brand Column */}
          <div className="space-y-6 lg:col-span-4">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative flex items-center justify-center overflow-hidden transition-transform border h-11 w-11 rounded-xl bg-slate-900 border-white/10">
                <img
                  src="/logo.jpg"
                  alt="Logo"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="flex flex-col justify-center">
                <h1 className="text-base font-black leading-none tracking-tighter text-white uppercase">
                  {company.name}
                </h1>
                <div className="mt-1 flex items-center gap-1.5">
                  <span className="text-[8px] font-black uppercase tracking-[0.2em] text-orange-500">
                    Drive
                  </span>
                  <span className="w-0.5 h-0.5 rounded-full bg-slate-500" />
                  <span className="text-[8px] font-black uppercase tracking-[0.2em] text-orange-500">
                    Discover
                  </span>
                </div>
              </div>
            </Link>
            <p className="max-w-xs text-[11px] font-medium leading-relaxed text-slate-400">
              go trip cabs provides premium, stress-free travel solutions. Our
              enterprise-grade planning ensures your safety and comfort
              throughout the journey.
            </p>
            <div className="flex items-center gap-3">
              {[Instagram, Facebook, Twitter].map((Icon, idx) => (
                <Link
                  key={idx}
                  href="#"
                  className="flex items-center justify-center w-10 h-10 transition-all border rounded-xl bg-white/5 border-white/5 hover:bg-orange-600 hover:text-white hover:border-orange-600"
                >
                  <Icon size={16} />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-white/50 mb-6 font-mono">
              / Services
            </h4>
            <ul className="space-y-3">
              {[
                { name: "About", href: "/about" },
                { name: "Contact", href: "/contact" },
                { name: "Refunds", href: "/refund" },
                { name: "Terms", href: "/terms" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-[12px] font-bold text-slate-300 hover:text-orange-500 transition-colors uppercase tracking-tight"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-white mb-6">
              Destinations
            </h4>

            <ul className="space-y-3">
              {featuredTours.map((tour) => (
                <li key={tour.slug}>
                  <Link
                    href={`/tour/${tour.slug}`}
                    className="flex items-center gap-2 text-[13px] text-white hover:text-orange-500 transition-all group"
                  >
                    <ArrowRight
                      size={10}
                      className="-ml-3 transition-all opacity-0 group-hover:opacity-100 group-hover:ml-0"
                    />

                    {tour.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-3">
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-white/50 mb-6 font-mono">
              / Head Office
            </h4>
            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <MapPin className="text-orange-500 shrink-0 mt-0.5" size={16} />
                <p className="text-[11px] text-slate-300 leading-relaxed font-medium">
                  #20, Sarjapur Main Rd, Maruthi Nagar,
                  <br /> Kaikondrahalli, Bangalore – 560035
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="text-orange-500 shrink-0" size={16} />
                <p className="text-[12px] font-black text-white">
                  {company.phoneDisplay}
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="text-orange-500 shrink-0" size={16} />
                <p className="text-[12px] font-bold text-slate-300">
                  info@wepzite.in
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Requested Branding */}
        <div className="flex flex-col items-center justify-between gap-6 pt-10 border-t border-white/5 md:flex-row">
          <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-slate-500">
            © {currentYear} {company.name}. All Rights Reserved.
          </p>
          <div className="flex items-center gap-3 px-6 py-2 border rounded-full bg-slate-800/50 border-white/5">
            <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest">
              Developed by
            </span>
            <Link
              href="https://wepzite.in"
              className="text-[10px] font-black text-white hover:text-orange-500 transition-colors tracking-tighter"
            >
              WEPZITE.IN
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
