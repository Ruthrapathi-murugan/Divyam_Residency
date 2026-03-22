import React, { useEffect } from 'react';
import { motion as Motion, AnimatePresence } from 'framer-motion';
import { X, Phone, Star, Gift } from 'lucide-react';
import logo from '../assets/logo.jpg';

const BookingModal = ({ isOpen, onClose, roomName }) => {
  useEffect(() => {
    if (!isOpen) return undefined;

    const { overflow } = document.body.style;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = overflow;
    };
  }, [isOpen]);

  const platforms = [
    { name: 'Agoda', url: 'https://www.agoda.com/en-in/dhivyam-residency-h71069674/hotel/palani-in.html', color: 'bg-indigo-600' },
    { name: 'Booking.com', url: 'https://www.booking.com/hotel/in/dhivyam-residency.html', color: 'bg-blue-800' },
    { name: 'MakeMyTrip', url: 'https://www.makemytrip.com', color: 'bg-red-600' },
    { name: 'Goibibo', url: 'https://www.goibibo.com', color: 'bg-orange-500' },
    { name: 'EaseMyTrip', url: 'https://www.easemytrip.com/hotels/dhivyam-residency-8484560/', color: 'bg-emerald-600' },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100000] overflow-y-auto overscroll-contain">
          <Motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
          />

          <div
            className="relative flex min-h-full items-start justify-center px-3 py-3 sm:items-center sm:p-4"
            style={{
              paddingTop: 'max(0.75rem, env(safe-area-inset-top))',
              paddingBottom: 'max(0.75rem, env(safe-area-inset-bottom))',
            }}
          >
            <Motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative flex max-h-[calc(100dvh-1.5rem)] w-full max-w-lg flex-col overflow-hidden rounded-[2rem] bg-white shadow-2xl sm:max-h-[calc(100dvh-2rem)] sm:rounded-[2.5rem]"
            >
              <div className="relative bg-slate-900 p-5 pr-14 text-white sm:p-8 sm:pr-16">
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 rounded-full p-2 transition-colors hover:bg-white/10 sm:top-6 sm:right-6"
                  aria-label="Close booking modal"
                >
                  <X size={20} />
                </button>

                <div className="mb-3 flex items-start gap-3 sm:gap-4">
                  <div className="h-11 w-11 shrink-0 overflow-hidden rounded-xl shadow-md ring-1 ring-white/10 sm:h-12 sm:w-12">
                    <img src={logo} alt="Dhivyam Residency" className="h-full w-full object-cover" />
                  </div>
                  <div className="min-w-0">
                    <div className="mb-1 flex items-center space-x-2 text-gold-400">
                      <Star size={16} fill="currentColor" />
                      <span className="text-[10px] font-black uppercase tracking-[0.24em] sm:tracking-[0.3em]">
                        Instant Confirmation
                      </span>
                    </div>
                    <h2 className="text-2xl font-black leading-tight tracking-tight sm:text-3xl">Book Your Stay</h2>
                  </div>
                </div>
                <p className="text-sm text-slate-400">
                  Reserving: <span className="font-bold text-white">{roomName}</span>
                </p>
              </div>

              <div className="overflow-y-auto p-5 sm:p-8">
                <div className="mb-6 space-y-4 sm:mb-8">
                  <p className="mb-4 text-xs font-black uppercase tracking-widest text-slate-400 sm:mb-6">
                    Choose Platform
                  </p>
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
                    {platforms.map((p, index) => (
                      <a
                        key={p.name}
                        href={p.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex min-h-12 items-center justify-center rounded-2xl px-4 py-3 text-center text-sm font-bold text-white transition-all hover:scale-[1.02] sm:py-4 ${
                          platforms.length % 2 === 1 && index === platforms.length - 1 ? 'sm:col-span-2' : ''
                        } ${p.color}`}
                      >
                        {p.name}
                      </a>
                    ))}
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-slate-100"></div>
                  <div className="relative flex justify-center">
                    <span className="bg-white px-4 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                      or book direct
                    </span>
                  </div>
                </div>

                <div className="mt-6 flex flex-col items-center rounded-3xl border border-gold-100 bg-gold-50 p-5 text-center sm:mt-8 sm:p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gold-500 text-white shadow-lg shadow-gold-500/30">
                    <Gift size={24} />
                  </div>
                  <h3 className="mb-1 text-xl font-black text-slate-900">Direct Booking Offer</h3>
                  <p className="mb-5 text-sm font-bold text-gold-700 sm:mb-6">
                    Get flat 10% OFF on all direct bookings!
                  </p>

                  <a
                    href="tel:+919600560020"
                    className="group flex w-full items-center justify-center rounded-2xl bg-slate-900 px-4 py-3.5 text-sm font-black uppercase tracking-[0.18em] text-white transition-all hover:bg-black sm:py-4 sm:tracking-widest"
                  >
                    <Phone size={18} className="mr-3 shrink-0 text-gold-500" />
                    +91 96005 60020
                  </a>
                  <p className="mt-3 text-[10px] font-bold uppercase tracking-wider text-slate-400 italic">
                    Mention "DIRECT10" for offer
                  </p>
                </div>
              </div>
            </Motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default BookingModal;
