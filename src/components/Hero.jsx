import React, { useState, useEffect } from 'react';
import { motion as Motion, AnimatePresence } from 'framer-motion';
import { Star, ArrowRight, Play, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import hero1 from '../assets/2bed2.PNG';
import hero2 from '../assets/4bed4.PNG';
import hero3 from '../assets/2bed6.PNG';
import hero4 from '../assets/2bed5.PNG';

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const images = [hero1, hero2, hero3, hero4];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  const nextSlide = () => setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  return (
    <div id="home" className="relative h-screen min-h-[750px] flex items-center overflow-hidden bg-slate-950">
      {/* Background Slider */}
      <AnimatePresence mode="wait">
        <Motion.div 
          key={current}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <img
            src={images[current]}
            alt={`Slide ${current}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
        </Motion.div>
      </AnimatePresence>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-20">
        <div className="max-w-3xl">
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center space-x-3 bg-white/10 backdrop-blur-md border border-white/20 w-fit px-5 py-2 rounded-full mb-8 shadow-2xl"
          >
            <div className="flex">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} className="text-gold-400 fill-gold-400" size={12} />
              ))}
            </div>
            <span className="text-white text-[10px] font-black uppercase tracking-[0.3em]">Spiritual Luxury Reimagined</span>
          </Motion.div>

          <Motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-6xl md:text-9xl font-black text-white mb-8 leading-[0.85] tracking-tighter"
          >
            DIVINE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 via-white to-gold-200">SANCTUARY.</span>
          </Motion.h1>

          <Motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-slate-200 mb-12 max-w-xl leading-relaxed font-medium drop-shadow-lg"
          >
            Elevate your pilgrimage with Dhivyam Residency—the closest 
            premium staying experience to the Lord Murugan Temple.
          </Motion.p>

          <Motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-6"
          >
            <Link
              to="/#rooms"
              className="gold-gradient text-white px-10 py-5 rounded-3xl font-black text-lg shadow-2xl flex items-center group transition-all hover:scale-105 active:scale-95"
            >
              Book Your Peace
              <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" />
            </Link>
            <Link
              to="/gallery"
              className="flex items-center space-x-4 text-white font-black text-lg hover:text-gold-400 transition-colors group"
            >
              <div className="w-14 h-14 rounded-full border-2 border-white/20 flex items-center justify-center group-hover:border-gold-500 transition-all bg-white/5 backdrop-blur-sm">
                <Play className="fill-white group-hover:fill-gold-500 ml-1" size={18} />
              </div>
              <span className="tracking-tight">View Interior</span>
            </Link>
          </Motion.div>
        </div>
      </div>

      {/* Slider Controls and Progress Dots */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex items-center space-x-6 bg-slate-900/40 backdrop-blur-xl px-8 py-4 rounded-full border border-white/10">
        <button 
          onClick={prevSlide}
          className="p-2 text-white/50 hover:text-white transition-colors"
        >
          <ChevronLeft size={20} />
        </button>
        
        <div className="flex space-x-3">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-1.5 transition-all duration-500 rounded-full ${
                current === i ? 'w-10 bg-gold-400' : 'w-4 bg-white/20 hover:bg-white/40'
              }`}
            />
          ))}
        </div>

        <button 
          onClick={nextSlide}
          className="p-2 text-white/50 hover:text-white transition-colors"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Decorative vertical line */}
      <div className="absolute left-10 bottom-0 h-32 w-[1px] bg-gradient-to-t from-gold-500 to-transparent"></div>
    </div>
  );
};

export default Hero;
