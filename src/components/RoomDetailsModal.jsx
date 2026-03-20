import React, { useState } from 'react';
import { motion as Motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, Star, Users, Wind, Tv, Wifi } from 'lucide-react';

const RoomDetailsModal = ({ isOpen, onClose, room, onBookNow }) => {
  const [activeImg, setActiveImg] = useState(0);

  if (!room) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100000] flex items-center justify-center p-4">
          <Motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-950/90 backdrop-blur-md"
          />
          
          <Motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative bg-white w-full max-w-5xl rounded-[3rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row h-[90vh] lg:h-auto max-h-[90vh]"
          >
            {/* Close Button */}
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 z-10 p-3 bg-white/20 hover:bg-white/40 backdrop-blur-xl rounded-full text-white lg:text-slate-900 lg:bg-slate-100 lg:hover:bg-slate-200 transition-all"
            >
              <X size={24} />
            </button>

            {/* Image Gallery Side */}
            <div className="lg:w-1/2 relative bg-slate-100 overflow-hidden min-h-[40%] text-white">
              <AnimatePresence mode="wait">
                <Motion.img
                  key={activeImg}
                  src={room.gallery[activeImg]}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>
              
              <div className="absolute bottom-8 left-8 right-8 flex justify-center space-x-3">
                {room.gallery.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImg(i)}
                    className={`h-1.5 transition-all duration-500 rounded-full ${activeImg === i ? 'w-10 bg-gold-400' : 'w-4 bg-white/50'}`}
                  />
                ))}
              </div>
            </div>

            {/* Content Side */}
            <div className="lg:w-1/2 p-10 lg:p-16 overflow-y-auto">
              <div className="flex items-center space-x-2 text-gold-600 mb-4">
                <Star size={16} fill="currentColor" />
                <span className="text-xs font-black uppercase tracking-[0.3em]">Premium Stay</span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-black text-slate-900 tracking-tighter mb-4">{room.name}</h2>
              <div className="flex items-baseline space-x-2 mb-8 border-b border-slate-100 pb-8">
                <span className="text-4xl font-black text-slate-900">₹{room.price}</span>
                <span className="text-slate-400 font-bold uppercase tracking-widest text-xs">/ per night</span>
              </div>

              <div className="mb-10">
                <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-6">Room Highlights</h3>
                <div className="grid grid-cols-2 gap-6">
                  {room.features.map((f, i) => (
                    <div key={i} className="flex items-center text-slate-700 font-bold text-sm">
                      <CheckCircle2 size={16} className="mr-3 text-gold-500" />
                      {f}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-12">
                <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-6">Amenities</h3>
                <div className="flex flex-wrap gap-3">
                  {room.amenities.map((a, i) => (
                    <span key={i} className="px-4 py-2 bg-slate-50 text-slate-600 rounded-xl text-xs font-bold uppercase tracking-wider border border-slate-100">
                      {a}
                    </span>
                  ))}
                </div>
              </div>

              <button 
                onClick={() => onBookNow(room)}
                className="w-full gold-gradient text-white py-5 rounded-2xl font-black text-sm uppercase tracking-[0.3em] shadow-xl hover:shadow-gold-500/30 transform hover:-translate-y-1 transition-all"
              >
                Book Your Experience
              </button>
            </div>
          </Motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default RoomDetailsModal;
