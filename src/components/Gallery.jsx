import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

// Import photos
import img1 from '../assets/SSD_0001.JPG';
import img2 from '../assets/SSD_0005.JPG';
import img3 from '../assets/SSD_9938.JPG';
import wa1 from '../assets/WhatsApp Image 2026-03-20 at 4.42.06 PM (1).jpeg';
import wa2 from '../assets/WhatsApp Image 2026-03-20 at 4.42.06 PM.jpeg';
import wa3 from '../assets/WhatsApp Image 2026-03-20 at 4.42.07 PM (1).jpeg';
import wa4 from '../assets/WhatsApp Image 2026-03-20 at 4.42.07 PM.jpeg';
import wa5 from '../assets/WhatsApp Image 2026-03-20 at 4.42.08 PM.jpeg';
import wa6 from '../assets/WhatsApp Image 2026-03-20 at 4.42.09 PM (1).jpeg';
import wa7 from '../assets/WhatsApp Image 2026-03-20 at 4.42.09 PM.jpeg';
import wa8 from '../assets/WhatsApp Image 2026-03-20 at 4.42.10 PM (1).jpeg';
import wa9 from '../assets/WhatsApp Image 2026-03-20 at 4.42.10 PM (2).jpeg';
import wa10 from '../assets/WhatsApp Image 2026-03-20 at 4.42.10 PM.jpeg';

const Gallery = ({ isFullPage = false }) => {
  const allImages = [
    { src: img1, title: 'Deluxe Suite' },
    { src: wa1, title: 'Premium Interior' },
    { src: img3, title: 'Comfort Living' },
    { src: wa3, title: 'Divine View' },
    { src: wa5, title: 'Elegant Space' },
    { src: wa7, title: 'Modern Amenities' },
    { src: wa9, title: 'Temple Proximity' },
    { src: wa2, title: 'Spacious Suite' },
    { src: wa4, title: 'Morning Light' },
    { src: wa6, title: 'Executive View' },
    { src: wa8, title: 'Polished Interiors' },
    { src: wa10, title: 'Peaceful Stay' },
  ];

  const displayedImages = isFullPage ? allImages : allImages.slice(0, 3);

  return (
    <section id="gallery" className={`py-24 overflow-hidden ${isFullPage ? 'bg-white' : 'bg-slate-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="max-w-xl">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-gold-600 font-bold uppercase tracking-[0.3em] text-xs mb-4"
            >
              Visual Journey
            </motion.h2>
            <motion.h3 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-5xl font-black text-slate-900 tracking-tight"
            >
              A Glimpse of Divine <span className="italic font-light">Luxury</span>
            </motion.h3>
          </div>
          {!isFullPage && (
            <Link to="/gallery" className="mt-8 md:mt-0 group flex items-center space-x-3 text-slate-900 font-black text-xs uppercase tracking-widest hover:text-gold-600 transition-colors">
              <span>See Full Gallery</span>
              <div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center group-hover:border-gold-600 group-hover:bg-gold-600 group-hover:text-white transition-all">
                <ArrowRight size={16} />
              </div>
            </Link>
          )}
        </div>

        <div className={`grid gap-6 ${isFullPage ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1 md:grid-cols-3'}`}>
          {displayedImages.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group overflow-hidden rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all duration-700 aspect-[4/5] md:aspect-[3/4]"
            >
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-white font-black text-sm tracking-widest uppercase">{img.title}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
