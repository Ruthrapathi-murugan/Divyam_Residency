import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion as Motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.jpg';

const Navbar = ({ onBookNow }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  // ✅ Scroll shadow effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ✅ FIX: Prevent background scroll when menu open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Rooms', href: '/#rooms' },
    { name: 'Amenities', href: '/#amenities' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
  ];

  const canUseDOM = typeof window !== 'undefined' && typeof document !== 'undefined';

  const mobileMenu = (
    <AnimatePresence>
      {isOpen && (
        <Motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[99999] bg-black/90 backdrop-blur-lg flex flex-col p-6"
        >
          {/* Header */}
          <div className="flex justify-between items-center mb-10">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-lg overflow-hidden">
                <img src={logo} alt="logo" />
              </div>
              <span className="text-white font-bold">Dhivyam</span>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="text-white"
              aria-label="Close menu"
            >
              <X size={28} />
            </button>
          </div>

          {/* Links */}
          <div className="flex flex-col space-y-6">
            {navLinks.map((link, i) => (
              <Motion.div
                key={link.name}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-3xl font-bold text-white hover:text-yellow-400"
                >
                  {link.name}
                </Link>
              </Motion.div>
            ))}
          </div>

          {/* Bottom Section */}
          <div className="mt-auto space-y-6">
            <button
              onClick={() => {
                setIsOpen(false);
                onBookNow();
              }}
              className="w-full py-4 bg-yellow-500 text-black font-bold rounded-xl"
            >
              Book Your Stay
            </button>

            <div className="text-center text-white">+91 96005 60020</div>
          </div>
        </Motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <>
      <Motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
        className={`fixed top-0 left-0 w-full z-[9999] transition-all duration-500 ${
          scrolled || !isHomePage
            ? 'py-3 bg-white/90 backdrop-blur-xl shadow-md border-b border-slate-100'
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
          {/* ✅ Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-xl overflow-hidden shadow-md">
              <img src={logo} alt="Dhivyam Residency" className="w-full h-full object-cover" />
            </div>
            <div>
              <span
                className={`block text-lg font-bold ${
                  scrolled || !isHomePage ? 'text-black' : 'text-white'
                }`}
              >
                DHIVYAM
              </span>
              <span className="text-xs text-yellow-500 tracking-widest">Residency</span>
            </div>
          </Link>

          {/* ✅ Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`text-sm font-semibold ${
                  scrolled || !isHomePage ? 'text-gray-700' : 'text-white'
                } hover:text-yellow-500`}
              >
                {link.name}
              </Link>
            ))}

            <button
              onClick={onBookNow}
              className="ml-4 px-6 py-2 bg-black text-white rounded-lg hover:bg-yellow-500 transition"
            >
              Book Now
            </button>
          </div>

          {/* ✅ Mobile Toggle */}
          <button
            className={`lg:hidden p-3 rounded-lg z-[9999] ${
              scrolled || !isHomePage ? 'bg-gray-200 text-black' : 'bg-white/20 text-white'
            }`}
            onClick={() => setIsOpen((open) => !open)}
            aria-expanded={isOpen}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </Motion.nav>

      {canUseDOM ? createPortal(mobileMenu, document.body) : null}
    </>
  );
};

export default Navbar;
