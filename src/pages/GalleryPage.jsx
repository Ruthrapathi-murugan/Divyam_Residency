import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Gallery from '../components/Gallery';
import WhatsAppButton from '../components/WhatsAppButton';
import ScrollToHashElement from '../components/ScrollToHashElement';

const GalleryPage = () => {
  return (
    <div className="bg-white">
      <ScrollToHashElement />
      <div className="pt-40">
        <Gallery isFullPage={true} />
      </div>
    </div>
  );
};

export default GalleryPage;
