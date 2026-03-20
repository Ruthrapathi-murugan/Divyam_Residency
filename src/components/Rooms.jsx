import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, BedDouble, Star, ChevronRight } from 'lucide-react';
import { roomsData } from '../data/rooms';
import RoomDetailsModal from './RoomDetailsModal';
import BookingModal from './BookingModal';

const Rooms = ({ onGlobalBookNow }) => {
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  const openDetails = (room) => {
    setSelectedRoom(room);
    setIsDetailsOpen(true);
  };

  const openBooking = (room) => {
    setSelectedRoom(room);
    onGlobalBookNow(room.name);
  };

  return (
    <section id="rooms" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="max-w-xl">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-gold-600 font-bold uppercase tracking-[0.3em] text-xs mb-4"
            >
              Accommodation
            </motion.h2>
            <motion.h3 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-5xl font-black text-slate-900 tracking-tight"
            >
              Discover Your <span className="italic font-light">Sanctuary</span>
            </motion.h3>
          </div>
          <motion.p className="mt-6 md:mt-0 text-slate-500 max-w-sm text-sm">
            Experience Palani's most comfortable stay with our re-categorized rooms designed for your every need.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {roomsData.map((room, index) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-700 border border-slate-100 flex flex-col h-full"
            >
              <div className="relative h-72 overflow-hidden cursor-pointer" onClick={() => openDetails(room)}>
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute top-6 left-6 bg-slate-900/90 backdrop-blur-md px-4 py-2 rounded-2xl font-black text-white text-sm shadow-xl">
                  ₹{room.price}<span className="text-[10px] text-slate-400 font-normal ml-1">/night</span>
                </div>
                {room.category === 'AC' && (
                  <div className="absolute top-6 right-6 bg-gold-500 px-3 py-1 rounded-full text-[10px] font-black text-white uppercase tracking-wider">
                    Premium AC
                  </div>
                )}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="bg-white/90 backdrop-blur-md p-4 rounded-full text-slate-900 shadow-2xl scale-75 group-hover:scale-100 transition-transform">
                    <ChevronRight size={24} />
                  </span>
                </div>
              </div>

              <div className="p-10 flex flex-col flex-grow">
                <div className="flex items-center space-x-1 text-gold-500 mb-3">
                  {[1, 2, 3, 4, 5].map(s => <Star key={s} size={12} fill="currentColor" />)}
                </div>
                <h4 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">{room.name}</h4>
                
                <div className="grid grid-cols-2 gap-y-4 gap-x-2 mb-8 border-b border-slate-50 pb-8">
                  <div className="flex items-center text-slate-500 text-[10px] font-black uppercase tracking-widest leading-none">
                    <Users size={14} className="mr-2 text-gold-500" />
                    {room.features[0]}
                  </div>
                  <div className="flex items-center text-slate-500 text-[10px] font-black uppercase tracking-widest leading-none">
                    <BedDouble size={14} className="mr-2 text-gold-500" />
                    {room.features[1]}
                  </div>
                </div>

                <div className="mt-auto space-y-4">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {room.amenities.slice(0, 3).map(amenity => (
                      <span key={amenity} className="px-3 py-1 bg-slate-50 text-slate-500 rounded-lg text-[9px] font-black uppercase tracking-wider">
                        {amenity}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    <button 
                      onClick={() => openDetails(room)}
                      className="flex-1 py-4 rounded-2xl bg-slate-50 text-slate-900 font-black text-xs uppercase tracking-[0.2em] transform active:scale-95 transition-all hover:bg-slate-100"
                    >
                      Details
                    </button>
                    <button 
                      onClick={() => openBooking(room)}
                      className="flex-[2] py-4 rounded-2xl bg-slate-900 text-white font-black text-xs uppercase tracking-[0.2em] transform active:scale-95 transition-all shadow-xl hover:shadow-slate-900/30 hover:-translate-y-1"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <RoomDetailsModal 
        isOpen={isDetailsOpen} 
        onClose={() => setIsDetailsOpen(false)} 
        room={selectedRoom} 
        onBookNow={(room) => {
          setIsDetailsOpen(false);
          openBooking(room);
        }}
      />
    </section>
  );
};

export default Rooms;
