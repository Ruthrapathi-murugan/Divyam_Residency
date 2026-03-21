import React from 'react';
import { motion as Motion } from 'framer-motion';
import { Wifi, Car, Coffee, Wind, Tv, ShieldCheck } from 'lucide-react';

const Features = () => {
  const amenities = [
    { icon: <Wifi className="w-8 h-8" />, name: 'Free Wi-Fi', desc: 'High-speed internet in all rooms and public areas.' },
    { icon: <Wind className="w-8 h-8" />, name: 'AC Rooms', desc: 'Premium air conditioning for a comfortable stay.' },
    { icon: <Car className="w-8 h-8" />, name: 'Car Parking', desc: 'Spacious and secure parking for all guests.' },
    { icon: <Coffee className="w-8 h-8" />, name: 'Room Service', desc: 'Delicious food and beverages delivered to your door.' },
    { icon: <Tv className="w-8 h-8" />, name: 'LED TV', desc: 'Modern televisions with multiple channel options.' },
    { icon: <ShieldCheck className="w-8 h-8" />, name: '24/7 Security', desc: 'CCTV surveillance and professional security staff.' },
  ];

  return (
    <section id="amenities" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gold-600 font-bold uppercase tracking-widest text-sm mb-4"
          >
            Our Amenities
          </Motion.h2>
          <Motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl font-bold text-slate-900"
          >
            Everything You Need for a <br /> Perfect Stay
          </Motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {amenities.map((item, index) => (
            <Motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-16 h-16 rounded-xl bg-gold-100 flex items-center justify-center text-gold-600 mb-6 group-hover:gold-gradient group-hover:text-white transition-all">
                {item.icon}
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">{item.name}</h4>
              <p className="text-slate-600 leading-relaxed">{item.desc}</p>
            </Motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
