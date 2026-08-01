import { motion } from "framer-motion";
import {
  Calendar,
  Users,
  Plane,
  MapPin,
  CheckCircle2,
  Star,
  MessageCircle,
  ArrowRight,
  Shield,
} from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const umrahPackages = [
  {
    id: 1,
    name: "Economy & Budget Umrah Package",
    duration: "14 Days / 13 Nights",
    badge: "Affordable Choice",
    features: [
      "Round Trip Flights",
      "Umrah Visa Processing",
      "10 Nights Makkah & 4 Nights Madinah",
      "Sharing Basis Accommodation (5-6 Persons)",
      "Hotel Shuttle Service",
      "Zamzam & Ziyarat Included",
      "24/7 Group Assistance",
    ],
    popular: false,
  },
  {
    id: 2,
    name: "Deluxe Umrah Package",
    duration: "15 Days / 14 Nights",
    badge: "Best Service",
    features: [
      "Direct Flights Available",
      "Premium Umrah Visa & Insurance",
      "Hotel Very Close to Haram",
      "Luxury Transportation Services",
      "Guided Ziyarat in Makkah & Madinah",
      "Zamzam Water Provided",
      "Dedicated Customer Support",
    ],
    popular: true,
  },
  {
    id: 3,
    name: "Super Deluxe Umrah Package",
    duration: "15 Days / 14 Nights",
    badge: "All Inclusive",
    features: [
      "Direct Premium Flights",
      "4 Umrahs in One Group",
      "Full Board Indian Buffet (3 Meals/Day)",
      "Special Taif Ziyaraat Included",
      "Kiswah Factory Visit",
      "Unlimited Laundry Service",
      "Complimentary Travel Goodies",
    ],
    popular: false,
  },
  {
    id: 4,
    name: "Ramadan Umrah Package",
    duration: "15 Days / 14 Nights",
    badge: "Special Package",
    features: [
      "Ramadan Stay in Makkah & Madinah",
      "Hotel Close to Haram",
      "Special Ramadan Meals & Sehri",
      "Iftar Arrangements Included",
      "Extended Ziyarat Tours",
      "Scholar & Group Guidance",
      "24/7 Support Throughout",
    ],
    popular: false,
  },
  {
    id: 5,
    name: "Family Umrah Package",
    duration: "15 Days / 14 Nights",
    badge: "Family Friendly",
    features: [
      "Family-Friendly Hotel Rooms",
      "Interconnected Rooms Available",
      "Child-Friendly Arrangements",
      "Private Guide & Transportation",
      "Flexible Itinerary Planning",
      "Complete Visa Assistance",
      "Dedicated Family Support",
    ],
    popular: false,
  },
  {
    id: 6,
    name: "Senior Citizens Umrah Package",
    duration: "15 Days / 14 Nights",
    badge: "Extra Care",
    features: [
      "Hotels Near Haram (Easy Access)",
      "Wheelchair Assistance Available",
      "Medical Support on Request",
      "Comfortable Transport",
      "Dedicated Caretaker",
      "Priority Boarding & Service",
      "Special Meals Arranged",
    ],
    popular: false,
  },
  {
    id: 7,
    name: "Group Umrah Package",
    duration: "14–15 Days",
    badge: "Group Discount",
    features: [
      "Special Group Pricing Available",
      "Shared Accommodation",
      "Group Transportation Arranged",
      "Community Guidance & Support",
      "Group Ziyarat in Makkah & Madinah",
      "Bulk Visa Processing",
      "Group Leader from Hyderabad",
    ],
    popular: false,
  },
  {
    id: 8,
    name: "Nikah Madina Group Package",
    duration: "15 Days / 14 Nights",
    badge: "Special Occasion",
    features: [
      "Nikah Ceremony Assistance in Madinah",
      "Round Trip Flights Included",
      "Umrah Visa Processing",
      "Hotel Accommodation Near Masjid Nabawi",
      "Transportation in Makkah & Madinah",
      "Guided Ziyarat Tours",
      "Dedicated Group Coordinator",
      "Complete Documentation Support",
    ],
    popular: false,
  },
];

const inclusions = [
  "Umrah visa fees & processing",
  "Round-trip flights from Hyderabad",
  "Hotel accommodation (Makkah & Madina)",
  "Airport transfers",
  "Local transportation",
  "Group guidance & support",
  "Document assistance",
  "WhatsApp customer support",
  "Travel insurance",
];

const processSteps = [
  {
    icon: <Calendar className="w-8 h-8" />,
    title: "Choose Package",
    description: "Select from our specially designed Umrah packages based on your needs and budget.",
  },
  {
    icon: <MessageCircle className="w-8 h-8" />,
    title: "Contact Us",
    description: "Reach out via WhatsApp or phone to discuss package details and availability.",
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Documentation",
    description: "We handle visa applications, travel documents, and all necessary paperwork.",
  },
  {
    icon: <Plane className="w-8 h-8" />,
    title: "Travel Arrangements",
    description: "Flight bookings, hotel confirmations, and transportation are arranged by us.",
  },
  {
    icon: <MapPin className="w-8 h-8" />,
    title: "Your Spiritual Journey",
    description: "Experience a blessed Umrah with our complete guidance and support.",
  },
];

const UmrahPackages = () => {
  const whatsappMessage = encodeURIComponent("Assalamu alaikum, Umrah package ke details chahiye. 5-7 days package available hai?");
  
  return (
    <div>
      <Header />
      
      <section className="relative min-h-[60vh] flex items-center bg-gradient-to-br from-[#1f0b34] via-[#2b1147] to-[#1f0b34]">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-400/20 blur-3xl rounded-full"></div>
          <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-yellow-200/40 blur-3xl rounded-full"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-20 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white"
          >
            Umrah Packages from{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-700">
              Hyderabad & Telangana
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mt-6 text-lg text-gray-300 max-w-3xl mx-auto"
          >
            Affordable, luxury, and group Umrah packages with complete visa assistance, 
            Makkah & Madina hotel bookings, transportation, and spiritual guidance.
          </motion.p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Our Umrah Packages
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Choose from budget-friendly to premium packages as per your requirements
            </p>
          </motion.div>

          {/* First 6 cards in 3-col grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {umrahPackages.slice(0, 6).map((pkg, index) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group bg-white border border-purple-100 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-yellow-500 to-yellow-700 text-white px-6 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                
                <div className="flex items-center gap-3 mb-4">
                  <Users className="w-6 h-6 text-purple-700" />
                  <span className="text-purple-700 font-semibold">{pkg.duration}</span>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                <div className="mb-6">
                  <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-semibold ${
                    pkg.popular
                      ? 'bg-gradient-to-r from-purple-600 to-purple-800 text-white'
                      : 'bg-purple-100 text-purple-800'
                  }`}>
                    {pkg.badge}
                  </span>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <a
                  href={`https://wa.me/919908519221?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-700 to-purple-600 hover:from-purple-800 hover:to-purple-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300"
                >
                  Book Now
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
                </a>
              </motion.div>
            ))}
          </div>

          {/* Last 2 cards — centered */}
          <div className="flex flex-col md:flex-row justify-center gap-8 mt-8">
            {umrahPackages.slice(6).map((pkg, index) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group bg-white border border-purple-100 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 w-full md:w-[calc(33.333%-1rem)] lg:w-[calc(33.333%-1.5rem)]"
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-yellow-500 to-yellow-700 text-white px-6 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}

                <div className="flex items-center gap-3 mb-4">
                  <Users className="w-6 h-6 text-purple-700" />
                  <span className="text-purple-700 font-semibold">{pkg.duration}</span>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                <div className="mb-6">
                  <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-semibold ${
                    pkg.popular
                      ? 'bg-gradient-to-r from-purple-600 to-purple-800 text-white'
                      : 'bg-purple-100 text-purple-800'
                  }`}>
                    {pkg.badge}
                  </span>
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={`https://wa.me/919908519221?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-700 to-purple-600 hover:from-purple-800 hover:to-purple-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300"
                >
                  Book Now
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                What's Included in Every Umrah Package
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {inclusions.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-700 to-purple-500 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1564769625905-50e93615e769?q=80&w=800&auto=format&fit=crop"
                alt="Umrah pilgrimage"
                className="w-full h-96 object-cover rounded-3xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 to-transparent rounded-3xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              How to Book Your Umrah Package
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-700 to-purple-500 flex items-center justify-center text-white">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-[#1f0b34] via-[#2b1147] to-[#1f0b34] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Star className="w-12 h-12 text-yellow-400 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Book Your Umrah Package Today
            </h2>
            <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
              Contact AL-IFRAAH Tours & Travels for the best Umrah packages from Hyderabad.
              Experience affordable and luxury Umrah tours with complete guidance.
            </p>
            <a
              href={`https://wa.me/919908519221?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-500 to-yellow-700 hover:from-yellow-600 hover:to-yellow-800 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 shadow-xl"
            >
              <MessageCircle className="w-6 h-6" />
              Contact on WhatsApp: 9908519221
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default UmrahPackages;