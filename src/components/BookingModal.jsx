import React from 'react';
import { motion as Motion, AnimatePresence } from 'framer-motion';
import { X, Phone, CheckCircle2, Star, Calculator, Gift } from 'lucide-react';
import logo from '../assets/logo.jpg';

const BookingModal = ({ isOpen, onClose, roomName }) => {
  const platforms = [
    { name: 'Agoda', url: 'https://www.agoda.com', color: 'bg-indigo-600' },
    { name: 'Booking.com', url: 'https://www.booking.com', color: 'bg-blue-800' },
    { name: 'MakeMyTrip', url: 'https://www.makemytrip.com', color: 'bg-red-600' },
    { name: 'Goibibo', url: 'https://www.goibibo.com', color: 'bg-orange-500' },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100000] flex items-center justify-center p-4">
          <Motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
          />
          
          <Motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative bg-white w-full max-w-lg rounded-[2.5rem] overflow-hidden shadow-2xl"
          >
            <div className="bg-slate-900 p-8 text-white relative">
              <button 
                onClick={onClose}
                className="absolute top-6 right-6 p-2 hover:bg-white/10 rounded-full transition-colors"
              >
                <X size={20} />
              </button>
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 rounded-xl overflow-hidden shadow-md ring-1 ring-white/10 shrink-0">
                  <img src={logo} alt="Dhivyam Residency" className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="flex items-center space-x-2 text-gold-400 mb-1">
                    <Star size={16} fill="currentColor" />
                    <span className="text-[10px] font-black uppercase tracking-[0.3em]">Instant Confirmation</span>
                  </div>
                  <h2 className="text-3xl font-black tracking-tight leading-tight">Book Your Stay</h2>
                </div>
              </div>
              <p className="text-slate-400 text-sm">Reserving: <span className="text-white font-bold">{roomName}</span></p>
            </div>

            <div className="p-8">
              <div className="space-y-4 mb-8">
                <p className="text-xs font-black uppercase tracking-widest text-slate-400 mb-6">Choose Platform</p>
                <div className="grid grid-cols-2 gap-4">
                  {platforms.map((p) => (
                    <a
                      key={p.name}
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center justify-center py-4 rounded-2xl text-white font-bold text-sm transition-all hover:scale-105 ${p.color}`}
                    >
                      {p.name}
                    </a>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-slate-100"></div>
                <div className="relative flex justify-center">
                  <span className="bg-white px-4 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">or book direct</span>
                </div>
              </div>

              <div className="mt-8 p-6 rounded-3xl bg-gold-50 border border-gold-100 flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-gold-500 text-white rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-gold-500/30">
                  <Gift size={24} />
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-1">Direct Booking Offer</h3>
                <p className="text-gold-700 text-sm font-bold mb-6">Get flat 10% OFF on all direct bookings!</p>
                
                <a 
                  href="tel:+919600560020"
                  className="w-full bg-slate-900 text-white py-4 rounded-2xl flex items-center justify-center font-black text-sm uppercase tracking-widest hover:bg-black transition-all group"
                >
                  <Phone size={18} className="mr-3 text-gold-500" />
                  +91 96005 60020
                </a>
                <p className="mt-3 text-[10px] text-slate-400 font-bold uppercase tracking-wider italic">Mention "DIRECT10" for offer</p>
              </div>
            </div>
          </Motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default BookingModal;
