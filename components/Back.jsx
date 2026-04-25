"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, MessageCircle, Phone } from "lucide-react";
const BackButton = () => {
  const router = useRouter();

  return (
    <div className="sticky top-0 z-50 bg-white border-b border-orange-100 shadow-sm">
        <div className="flex items-center justify-between px-4 py-3 mx-auto max-w-7xl">
          <button onClick={() => router.push('/')} className="flex items-center gap-2 font-medium text-gray-700 transition-colors hover:text-orange-600"><ArrowLeft className="w-5 h-5" />Back</button>
          <span className="hidden text-sm font-bold text-gray-900 md:block"></span>
          <div className="flex items-center gap-2">
            <a href={`tel:9626850192`} className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-orange-600 transition-colors bg-orange-50 hover:bg-orange-100 rounded-xl"><Phone className="w-4 h-4" /><span className="hidden md:inline">Call Now</span></a>
            <a href='' target="_blank" rel="noreferrer" className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-white transition-colors bg-green-500 hover:bg-green-600 rounded-xl"><MessageCircle className="w-4 h-4" /><span className="hidden md:inline">WhatsApp</span></a>
          </div>
        </div>
      </div>
  );
};

export default BackButton;