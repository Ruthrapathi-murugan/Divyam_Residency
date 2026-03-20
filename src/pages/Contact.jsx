import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <div className="pt-40 pb-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter mb-4"
          >
            GET IN <span className="text-gold-500 underline decoration-slate-200">TOUCH</span>
          </motion.h1>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Have questions about your stay or want to book a special event? 
            Our divine team is ready to assist you 24/7.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white p-10 md:p-16 rounded-[3rem] shadow-2xl shadow-slate-200/50 border border-slate-100"
          >
            <h2 className="text-3xl font-black text-slate-900 mb-10 tracking-tight">Send a Message</h2>
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Full Name</label>
                  <input type="text" placeholder="John Doe" className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-gold-500 transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Email Address</label>
                  <input type="email" placeholder="john@example.com" className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-gold-500 transition-all" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Subject</label>
                <input type="text" placeholder="Booking Inquiry" className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-gold-500 transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Message</label>
                <textarea rows="5" placeholder="Tell us more..." className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-gold-500 transition-all resize-none"></textarea>
              </div>
              <button className="gold-gradient text-white w-full py-5 rounded-2xl font-black text-sm uppercase tracking-[0.3em] shadow-xl hover:shadow-gold-500/20 transform hover:-translate-y-1 transition-all flex items-center justify-center">
                Send Message <Send size={18} className="ml-3" />
              </button>
            </form>
          </motion.div>

          {/* Contact Details & Map */}
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
                <div className="w-12 h-12 bg-gold-100 text-gold-600 rounded-xl flex items-center justify-center mb-6 group-hover:gold-gradient group-hover:text-white transition-all">
                  <Phone size={24} />
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-2">Call Us</h3>
                <p className="text-slate-500 font-medium">+91 96005 60020</p>
              </div>
              <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
                <div className="w-12 h-12 bg-gold-100 text-gold-600 rounded-xl flex items-center justify-center mb-6 group-hover:gold-gradient group-hover:text-white transition-all">
                  <Mail size={24} />
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-2">Email Us</h3>
                <p className="text-slate-500 font-medium">dhivyamresidency@gmail.com</p>
              </div>
            </motion.div>

            {/* Map Container */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="h-[450px] rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white"
            >
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3923.7156528930577!2d77.52188627479997!3d10.4441235896852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba9df71cde4ddd3%3A0xe3bcd2d00b84f65c!2sDhivyam%20Resisdency!5e0!3m2!1sen!2sin!4v1774004687794!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
