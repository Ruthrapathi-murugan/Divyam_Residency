import room1 from '../assets/SSD_0001.JPG';
import room2 from '../assets/SSD_9938.JPG';
import room3 from '../assets/SSD_9956.JPG';
import room4 from '../assets/IMG20250822122156.jpg';

// Import new WhatsApp images (sampling some for specific rooms)
import wa1 from '../assets/WhatsApp Image 2026-03-20 at 4.42.06 PM.jpeg';
import wa2 from '../assets/WhatsApp Image 2026-03-20 at 4.42.07 PM.jpeg';
import wa3 from '../assets/WhatsApp Image 2026-03-20 at 4.42.08 PM.jpeg';
import wa4 from '../assets/WhatsApp Image 2026-03-20 at 4.42.09 PM.jpeg';
import wa5 from '../assets/WhatsApp Image 2026-03-20 at 4.42.10 PM.jpeg';
import wa6 from '../assets/WhatsApp Image 2026-03-20 at 4.42.11 PM.jpeg';
import wa7 from '../assets/WhatsApp Image 2026-03-20 at 4.42.12 PM.jpeg';
import wa8 from '../assets/WhatsApp Image 2026-03-20 at 4.42.13 PM.jpeg';
import wa9 from '../assets/WhatsApp Image 2026-03-20 at 4.42.14 PM.jpeg';
import wa12 from '../assets/WhatsApp Image 2026-03-20 at 4.42.11 PM (2).jpeg';
import wa14 from '../assets/WhatsApp Image 2026-03-20 at 4.42.12 PM (1).jpeg';
import wa16 from '../assets/WhatsApp Image 2026-03-20 at 4.42.12 PM.jpeg';
import wa18 from '../assets/WhatsApp Image 2026-03-20 at 4.42.14 PM (1).jpeg';
import wa19 from '../assets/WhatsApp Image 2026-03-20 at 4.42.14 PM (2).jpeg';
import wa20 from '../assets/WhatsApp Image 2026-03-20 at 4.42.14 PM.jpeg';

export const roomsData = [
  {
    id: 1,
    name: '2 Bed - AC Room',
    price: '2000',
    category: 'AC',
    image: wa1,
    gallery: [wa1, wa2, room1],
    description: 'Perfect for couples or small families, our 2 Bed AC room offers premium comfort with modern cooling and elegant interiors.',
    amenities: ['Air Conditioning', 'High-speed Wi-Fi', 'Smart TV', 'Hot Water', 'Room Service'],
    features: ['2 Guests', '1 King/2 Single Beds', 'City/Temple View']
  },
  {
    id: 2,
    name: '2 Bed - Non AC Room',
    price: '1500',
    category: 'Non-AC',
    image: wa3,
    gallery: [wa3, wa4, room2],
    description: 'A budget-friendly yet comfortable stay for pilgrims. Well-ventilated and spacious for a peaceful night.',
    amenities: ['Ceiling Fan', 'Free Wi-Fi', 'TV', 'Clean Linens', '24/7 Support'],
    features: ['2 Guests', '1 Queen Bed', 'Quiet Location']
  },
  {
    id: 3,
    name: '3 Bed - Non AC Room',
    price: '2300',
    category: 'Non-AC',
    image: wa5,
    gallery: [wa5, wa6, room3],
    description: 'Spacious accommodation designed for three guests. Ideal for families seeking a comfortable stay near the temple.',
    amenities: ['Spacious Layout', 'Free Wi-Fi', 'TV', 'Attached Bath', 'Purified Water'],
    features: ['3 Guests', '3 Single Beds', 'Spacious Area']
  },
  {
    id: 4,
    name: '4 Bed - AC Room',
    price: '3500',
    category: 'AC',
    image: wa18, // More appropriate large room image
    gallery: [wa18, wa19, wa20, room4],
    description: 'Our ultra-spacious 4-Bed AC room is the pinnacle of family luxury, offering four dedicated sleeping spots and premium air conditioning for a perfect pilgrimage stay.',
    amenities: ['Premium AC', 'High-speed Wi-Fi', 'Large Smart TV', 'Extra Seating', 'Luxury Toiletries'],
    features: ['4 Guests', '4 Single/2 Double Beds', 'Premium Floor']
  },
  {
    id: 5,
    name: '4 Bed - Non AC Room',
    price: '2800',
    category: 'Non-AC',
    image: wa12, // Better family room perspective
    gallery: [wa12, wa14, wa16, room1],
    description: 'Designed for groups and families, this non-AC 4-bed room provides exceptional value and space, keeping everyone together in a comfortable, well-ventilated environment.',
    amenities: ['Multiple Fans', 'Free Wi-Fi', 'TV', 'Spacious Wardrobe', 'Daily Housekeeping'],
    features: ['4 Guests', '4 Single/2 Double Beds', 'Family Wing']
  }
];
