import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactHeader = () => {
  return (
    <header className="px-6 py-16 bg-white border-b border-gray-100 lg:px-8">
      <div className="mx-auto text-center max-w-7xl">
        {/* Title & Subtitle */}
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Get in touch
        </h1>
        <p className="max-w-2xl mx-auto mt-4 text-lg leading-8 text-gray-600">
          Have a question or just want to say hi? We'd love to hear from you. 
          Our team typically responds within 24 hours.
        </p>

        {/* Contact Quick Links */}
        <div className="grid grid-cols-1 gap-8 mt-12 sm:grid-cols-3">
          <div className="flex flex-col items-center p-6 bg-gray-50 rounded-2xl transition-hover hover:bg-blue-50">
            <div className="flex items-center justify-center w-12 h-12 text-white bg-blue-600 rounded-full">
              <Phone size={20} />
            </div>
            <h3 className="mt-4 text-base font-semibold text-gray-900">Phone</h3>
            <p className="mt-2 text-sm text-gray-600">+1 (555) 000-0000</p>
          </div>

          <div className="flex flex-col items-center p-6 bg-gray-50 rounded-2xl transition-hover hover:bg-blue-50">
            <div className="flex items-center justify-center w-12 h-12 text-white bg-blue-600 rounded-full">
              <Mail size={20} />
            </div>
            <h3 className="mt-4 text-base font-semibold text-gray-900">Email</h3>
            <p className="mt-2 text-sm text-gray-600">hello@example.com</p>
          </div>

          <div className="flex flex-col items-center p-6 bg-gray-50 rounded-2xl transition-hover hover:bg-blue-50">
            <div className="flex items-center justify-center w-12 h-12 text-white bg-blue-600 rounded-full">
              <MapPin size={20} />
            </div>
            <h3 className="mt-4 text-base font-semibold text-gray-900">Office</h3>
            <p className="mt-2 text-sm text-center text-gray-600">
              123 Tech Lane<br />San Francisco, CA 94103
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default ContactHeader;