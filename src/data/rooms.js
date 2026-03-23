import room1 from '../assets/SSD_0001.JPG';
import room2 from '../assets/SSD_9938.JPG';
import room3 from '../assets/SSD_9956.JPG';
import room4 from '../assets/IMG20250822122156.jpg';
import room6 from '../assets/SSD_9960-1.JPG';
import bed2Main from '../assets/2bed.PNG';
import bed2Alt1 from '../assets/2bed2.PNG';
import bed2Alt2 from '../assets/2bed3.PNG';
import bed2Alt3 from '../assets/2bed5.PNG';
import bed2Alt4 from '../assets/2bed6.PNG';
import bed3Main from '../assets/3bed.PNG';
import bed3Alt1 from '../assets/3bed2.PNG';
import bed3Alt2 from '../assets/3bed3.PNG';
import bed4Main from '../assets/4bed.PNG';
import bed4Alt1 from '../assets/4bed2.PNG';
import bed4Alt2 from '../assets/4bed3.PNG';
import bed4Alt3 from '../assets/4bed4.PNG';
import bed4Alt4 from '../assets/4bed5.PNG';
import bed4Alt5 from '../assets/4bed6.PNG';

export const roomsData = [
  {
    id: 1,
    name: '2 Bed - AC Room',
    price: '2000',
    category: 'AC',
    image: bed2Main,
    gallery: [bed2Main, bed2Alt1, bed2Alt2, room1],
    description: 'Perfect for couples or small families, our 2 Bed AC room offers premium comfort with modern cooling and elegant interiors.',
    amenities: ['Air Conditioning', 'High-speed Wi-Fi', 'Smart TV', 'Hot Water', 'Room Service'],
    features: ['2 Guests', '1 King/2 Single Beds', 'City/Temple View']
  },
  {
    id: 2,
    name: '2 Bed - Non AC Room',
    price: '1500',
    category: 'Non-AC',
    image: bed2Alt3,
    gallery: [bed2Alt4,bed2Main ,bed2Alt1],
    description: 'A budget-friendly yet comfortable stay for pilgrims. Well-ventilated and spacious for a peaceful night.',
    amenities: ['Ceiling Fan', 'Free Wi-Fi', 'TV', 'Clean Linens', '24/7 Support'],
    features: ['2 Guests', '1 Queen Bed', 'Quiet Location']
  },
  {
    id: 3,
    name: '3 Bed - Non AC Room',
    price: '2000',
    category: 'Non-AC',
    image: bed3Main,
    gallery: [bed3Main, bed3Alt1, bed3Alt2],
    description: 'Spacious accommodation designed for three guests. Ideal for families seeking a comfortable stay near the temple.',
    amenities: ['Spacious Layout', 'Free Wi-Fi', 'TV', 'Attached Bath', 'Purified Water'],
    features: ['3 Guests', '3 Single Beds', 'Spacious Area']
  },
  {
    id: 4,
    name: '4 Bed - AC Room',
    price: '3000',
    category: 'AC',
    image: bed4Alt5,
    gallery: [bed4Alt5, bed4Main, bed4Alt1, bed4Alt2, room6],
    description: 'Our ultra-spacious 4-Bed AC room is the pinnacle of family luxury, offering four dedicated sleeping spots and premium air conditioning for a perfect pilgrimage stay.',
    amenities: ['Premium AC', 'High-speed Wi-Fi', 'Large Smart TV', 'Extra Seating', 'Luxury Toiletries'],
    features: ['4 Guests', '4 Single/2 Double Beds', 'Premium Floor']
  },
  {
    id: 5,
    name: '4 Bed - Non AC Room',
    price: '2500',
    category: 'Non-AC',
    image: bed4Alt3,
    gallery: [bed4Alt3, bed4Alt4, bed4Main, bed4Alt1, room1],
    description: 'Designed for groups and families, this non-AC 4-bed room provides exceptional value and space, keeping everyone together in a comfortable, well-ventilated environment.',
    amenities: ['Multiple Fans', 'Free Wi-Fi', 'TV', 'Spacious Wardrobe', 'Daily Housekeeping'],
    features: ['4 Guests', '4 Single/2 Double Beds', 'Family Wing']
  }
];
