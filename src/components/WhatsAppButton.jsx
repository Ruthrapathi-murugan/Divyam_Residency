import React from 'react';
import { motion as Motion } from 'framer-motion';

const WhatsAppIcon = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.149-.67.149-.198.297-.767.967-.94 1.164-.173.198-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.148-.67-1.611-.916-2.206-.242-.579-.487-.5-.67-.51-.173-.008-.372-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 6.216a7.95 7.95 0 01-4.042-1.106l-.29-.173-3 .785.8-2.925-.188-.3a7.93 7.93 0 01-1.214-4.229c.002-4.416 3.59-8.002 8.006-8.002a7.95 7.95 0 015.65 2.34 7.94 7.94 0 012.33 5.652c-.002 4.416-3.59 8.002-8.006 8.002m6.804-14.28A9.96 9.96 0 0012.05 2C6.486 2 1.96 6.525 1.96 12.09c0 1.78.464 3.52 1.34 5.056L1.96 22l5.09-1.336a10.04 10.04 0 004.999 1.276h.004c5.563 0 10.09-4.525 10.09-10.09a10.03 10.03 0 00-3.288-7.332" />
  </svg>
);

const WhatsAppButton = () => {
  const phoneNumber = '919600560020'; // Updated phone number
  const message = 'Hello Dhivyam Residency, I would like to inquire about room availability.';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <Motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-[100] bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center group"
      aria-label="Chat with us on WhatsApp"
    >
      <div className="absolute right-full mr-4 bg-white text-slate-900 px-4 py-2 rounded-lg text-sm font-bold shadow-xl opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all pointer-events-none whitespace-nowrap">
        Chat with us on WhatsApp
      </div>
      <WhatsAppIcon className="w-8 h-8" />
    </Motion.a>
  );
};

export default WhatsAppButton;
