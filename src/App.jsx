import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Contact from './pages/Contact'
import GalleryPage from './pages/GalleryPage'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import ScrollToHashElement from './components/ScrollToHashElement'
import BookingModal from './components/BookingModal'

function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedRoomName, setSelectedRoomName] = useState('');

  const openBooking = (roomName = 'Deluxe Room') => {
    setSelectedRoomName(roomName);
    setIsBookingOpen(true);
  };

  return (
    <Router>
      <ScrollToHashElement />
      <div className="min-h-screen bg-slate-50 overflow-x-hidden selection:bg-gold-500 selection:text-white">
        <Navbar onBookNow={() => openBooking()} />
        <main>
          <Routes>
            <Route path="/" element={<Home onBookNow={openBooking} />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/gallery" element={<GalleryPage />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
        
        <BookingModal 
          isOpen={isBookingOpen} 
          onClose={() => setIsBookingOpen(false)} 
          roomName={selectedRoomName} 
        />
      </div>
    </Router>
  )
}

export default App
