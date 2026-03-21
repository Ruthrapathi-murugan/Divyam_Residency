import React from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, ArrowUpRight, Globe } from 'lucide-react';
import { motion as Motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpg';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="relative bg-slate-950 text-slate-300 pt-32 pb-12 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-500/50 to-transparent"></div>
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-24">
          {/* Logo & Vision */}
          <div className="md:col-span-12 lg:col-span-4">
            <Motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center space-x-4 mb-8"
            >
              <img src={logo} alt="Logo" className="h-16 w-16 rounded-xl grayscale hover:grayscale-0 transition-all duration-500 ring-1 ring-white/10" />
              <div>
                <h4 className="text-2xl font-black text-white tracking-tighter leading-none">DHIVYAM</h4>
                <p className="text-xs font-bold text-gold-500 tracking-[0.4em] mt-1 uppercase">Residency</p>
              </div>
            </Motion.div>
            <Motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-slate-400 leading-relaxed mb-10 max-w-sm text-lg font-light"
            >
              Where every stay becomes a divine memory. Experience the perfect harmony of soul and comfort in the heart of Palani.
            </Motion.p>
            <div className="flex space-x-6">
              {[Facebook, Instagram, Twitter].map((Icon, i) => (
                <Motion.a 
                  key={i}
                  href="#"
                  whileHover={{ y: -5, color: '#f59e0b' }}
                  className="text-slate-500 transition-colors"
                >
                  <Icon size={24} strokeWidth={1.5} />
                </Motion.a>
              ))}
            </div>
          </div>

          {/* Nav groups */}
          <div className="md:col-span-12 lg:col-span-8">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
              <Motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <h5 className="text-white font-black uppercase tracking-[0.2em] text-xs mb-8">Navigation</h5>
                <ul className="space-y-4">
                  {[
                    { name: 'Home', href: '/' },
                    { name: 'Rooms', href: '/#rooms' },
                    { name: 'Amenities', href: '/#amenities' },
                    { name: 'Gallery', href: '/#gallery' },
                    { name: 'Contact', href: '/contact' }
                  ].map((link) => (
                    <li key={link.name}>
                      <Link to={link.href} className="group flex items-center text-slate-400 hover:text-gold-400 transition-all font-medium">
                        <span className="w-0 group-hover:w-4 h-[1px] bg-gold-400 mr-0 group-hover:mr-2 transition-all"></span>
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Motion.div>

              <Motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <h5 className="text-white font-black uppercase tracking-[0.2em] text-xs mb-8">Direct Contact</h5>
                <ul className="space-y-6">
                  <li className="flex items-start group cursor-pointer">
                    <div className="p-3 bg-white/5 rounded-xl mr-4 group-hover:bg-gold-500 group-hover:text-white transition-all">
                      <MapPin size={18} strokeWidth={1.5} />
                    </div>
                    <span className="text-sm leading-relaxed group-hover:text-white transition-colors pt-1">
                      205/1, Pattali street, Adivaram,<br />South Anna Nagar, Palani, Tamil Nadu 624601
                    </span>
                  </li>
                  <li className="flex items-center group cursor-pointer">
                    <div className="p-3 bg-white/5 rounded-xl mr-4 group-hover:bg-gold-500 group-hover:text-white transition-all">
                      <Phone size={18} strokeWidth={1.5} />
                    </div>
                    <span className="text-sm group-hover:text-white transition-colors">+91 96005 60020</span>
                  </li>
                  <li className="flex items-center group cursor-pointer">
                    <div className="p-3 bg-white/5 rounded-xl mr-4 group-hover:bg-gold-500 group-hover:text-white transition-all">
                      <Mail size={18} strokeWidth={1.5} />
                    </div>
                    <span className="text-sm group-hover:text-white transition-colors">dhivyamresidency@gmail.com</span>
                  </li>
                </ul>
              </Motion.div>

              <Motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="col-span-2 md:col-span-1"
              >
                <h5 className="text-white font-black uppercase tracking-[0.2em] text-xs mb-8">Exclusive Offers</h5>
                <p className="text-slate-500 text-sm mb-6 font-light">Join our divine circle for early access and special discounts.</p>
                <div className="relative group">
                  <input 
                    type="email" 
                    placeholder="E-mail address" 
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-gold-500 transition-all"
                  />
                  <button className="absolute right-2 top-2 h-10 w-10 bg-gold-500 text-white rounded-xl flex items-center justify-center hover:bg-gold-600 transition-all shadow-lg shadow-gold-500/20">
                    <ArrowUpRight size={20} />
                  </button>
                </div>
              </Motion.div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col md:flex-row items-center md:space-x-8 text-[10px] font-black uppercase tracking-[0.3em] text-slate-600">
            <p className="mb-4 md:mb-0">© {currentYear} Dhivyam Residency. All rights reserved.</p>
            <div className="flex items-center space-x-3 group cursor-pointer">
              <span className="opacity-100 text-yellow-500">Designed by</span>
              <a 
                href="https://www.ruthradigitalsolutions.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="relative text-white hover:text-gold-400 transition-all py-2 px-4 bg-white/5 rounded-full border border-white/10 hover:border-gold-500/50 hover:shadow-[0_0_20px_rgba(212,175,55,0.2)] duration-500 flex items-center"
              >
                Ruthra Digital Solutions
                <ArrowUpRight size={10} className="ml-2 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
              </a>
            </div>
          </div>
          
          <div className="flex space-x-8 mt-8 md:mt-0 text-[10px] font-black uppercase tracking-[0.3em] text-slate-600">
            <a href="#" className="hover:text-gold-500 transition-colors">Privacy</a>
            <a href="#" className="hover:text-gold-500 transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
