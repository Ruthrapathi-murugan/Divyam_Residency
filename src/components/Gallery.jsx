import React, { useMemo, useState } from 'react';
import { motion as Motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

import { roomsData } from '../data/rooms';

const assetModules = import.meta.glob(
  [
    '../assets/*.{png,jpg,jpeg,PNG,JPG,JPEG}',
    '!../assets/WhatsApp Image *.{png,jpg,jpeg,PNG,JPG,JPEG}',
  ],
  {
    eager: true,
    import: 'default',
  }
);

const Gallery = ({ isFullPage = false }) => {
  const [activeCategory, setActiveCategory] = useState('All');

  const allImages = useMemo(() => {
    const imageMap = new Map();

    const titleFromPath = (path) => {
      const normalizedPath = String(path).replace(/\\/g, '/');
      const filename = normalizedPath.split('/').pop() ?? normalizedPath;
      return filename
        .replace(/\.[^/.]+$/, '')
        .replace(/[-_]+/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();
    };

    const isWhatsAppAsset = (path) => {
      const normalizedPath = String(path).replace(/\\/g, '/');
      const filename = normalizedPath.split('/').pop() ?? normalizedPath;
      return filename.startsWith('WhatsApp Image ');
    };

    roomsData.forEach((room) => {
      const roomImages = [room.image, ...(room.gallery ?? [])].filter(Boolean);

      roomImages.forEach((src) => {
        if (imageMap.has(src)) return;

        imageMap.set(src, {
          src,
          title: room.name,
          category: room.category,
        });
      });
    });

    Object.entries(assetModules).forEach(([path, src]) => {
      if (!src || imageMap.has(src) || isWhatsAppAsset(path)) return;

      imageMap.set(src, {
        src,
        title: titleFromPath(path),
      });
    });

    return Array.from(imageMap.values());
  }, []);

  const categories = useMemo(() => {
    const set = new Set(allImages.map((img) => img.category).filter(Boolean));
    return ['All', ...Array.from(set)];
  }, [allImages]);

  const filteredImages =
    activeCategory === 'All'
      ? allImages
      : allImages.filter((img) => img.category === activeCategory);

  const displayedImages = isFullPage ? filteredImages : allImages.slice(0, 3);

  return (
    <section id="gallery" className={`py-24 overflow-hidden ${isFullPage ? 'bg-white' : 'bg-slate-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="max-w-xl">
            <Motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-gold-600 font-bold uppercase tracking-[0.3em] text-xs mb-4"
            >
              Visual Journey
            </Motion.h2>
            <Motion.h3 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-5xl font-black text-slate-900 tracking-tight"
            >
              A Glimpse of Divine <span className="italic font-light">Luxury</span>
            </Motion.h3>
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

        {isFullPage && (
          <div className="flex flex-wrap gap-3 mb-12">
            {categories.map((category) => {
              const isActive = activeCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.25em] border transition-all ${
                    isActive
                      ? 'bg-slate-900 text-white border-slate-900 shadow-lg shadow-slate-900/10'
                      : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        )}

        <div className={`grid gap-6 ${isFullPage ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1 md:grid-cols-3'}`}>
          {displayedImages.map((img, index) => (
            <Motion.div
              key={img.src}
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
              {isFullPage && img.category && (
                <div className="absolute top-6 left-6 bg-slate-950/80 backdrop-blur-md px-4 py-2 rounded-full text-[10px] font-black text-white uppercase tracking-[0.25em]">
                  {img.category}
                </div>
              )}
              <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
               
                </div>
              </div>
            </Motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
