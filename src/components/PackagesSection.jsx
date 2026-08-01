import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Building, Plane } from 'lucide-react';
import { Link } from 'react-router-dom';

const packages = [
  {
    id: 'economy',
    name: 'Economy & Budget',
    badge: 'Affordable Choice',
    price: '₹87,999',
    duration: '15 Days',
    gradient: 'from-blue-500 to-blue-700',
    hotels: {
      makkah: 'Distance: Approx 1200m (With Shuttle)',
      madinah: 'Distance: Approx 900m (With Shuttle)'
    },
    features: [
      'Round Trip Flights',
      'Umrah Visa Processing',
      '7 Nights Makkah & 8 Nights Madinah',
      'Sharing Basis Accommodation (5-6 Persons)',
      'Complete Transportation',
      'Zamzam & Ziyarat Included',
      '24/7 Group Assistance'
    ]
  },
  {
    id: 'premium',
    name: 'Deluxe & Premium',
    badge: 'Recommended',
    price: '₹1,03,000',
    duration: '15 Days',
    gradient: 'from-purple-600 to-purple-800',
    hotels: {
      makkah: 'Ayman Al Hijrah (300m from Haram)',
      madinah: 'Kyan Al Masi (100m from Nabawi)'
    },
    features: [
      'Direct Flights Available',
      'Premium Umrah Visa & Insurance',
      'Hotels Very Close to Haram',
      'Luxury Transportation Services',
      'Guided Ziyarat in Makkah & Madinah',
      'Zamzam Water Provided',
      'Dedicated Customer Support'
    ],
    popular: true
  },
  {
    id: 'super-deluxe',
    name: 'Super Deluxe',
    badge: 'All Inclusive',
    price: '₹1,15,000',
    duration: '15 Days',
    gradient: 'from-yellow-500 to-yellow-700',
    hotels: {
      makkah: 'Premium Hotel (300m)',
      madinah: 'Premium Hotel (100m)'
    },
    features: [
      'Direct Premium Flights',
      '4 Umrahs in One Group',
      'Full Board Indian Buffet (Breakfast, Lunch, Dinner)',
      'Special Taif Ziyaraat Included',
      'Kiswah Factory Visit',
      'Unlimited Laundry Service',
      'Complimentary Travel Goodies'
    ]
  }
];

const PackagesSection = () => {
  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden" id="packages">
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200/40 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-200/40 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-100 text-yellow-700 font-semibold text-sm mb-4"
          >
            <Star className="w-4 h-4 fill-yellow-600" />
            Exclusive Offers
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Our Umrah Packages
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600"
          >
            Choose from our carefully designed packages. We offer transparent pricing, excellent hotels, and dedicated service for every budget and need.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-center">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`relative bg-white rounded-[2.5rem] p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border ${pkg.popular ? 'border-purple-500 transform lg:-translate-y-4 shadow-purple-900/10' : 'border-gray-100'}`}
            >
              {pkg.popular && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-max z-20">
                  <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg flex items-center gap-2">
                    <Star className="w-4 h-4 fill-white" />
                    Most Recommended
                  </div>
                </div>
              )}

              <div className="text-center mb-8 mt-4">
                <div className={`inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4 bg-gradient-to-r ${pkg.gradient} text-white shadow-md`}>
                  {pkg.badge}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                <p className="text-gray-500 font-medium">Duration: {pkg.duration}</p>
              </div>

              {/* Features List */}
              <div className="space-y-4 mb-8">
                {pkg.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="mt-1 bg-purple-100 rounded-full p-1 shrink-0">
                      <Check className="w-3 h-3 text-purple-700 font-bold" />
                    </div>
                    <span className="text-gray-600 text-sm leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <a
                href={`https://wa.me/919908519221?text=${encodeURIComponent(`Assalamu alaikum, I want details about the ${pkg.name} Umrah Package.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`block w-full py-4 rounded-xl text-center font-bold text-lg transition-all ${pkg.popular ? 'bg-gradient-to-r from-purple-600 to-purple-800 text-white hover:shadow-lg' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
              >
                Inquire Now
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;
