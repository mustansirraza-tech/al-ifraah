// ServicesSection.jsx

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Plane,
  Building2,
  FileCheck,
  Bus,
  CheckCircle2,
  Globe,
  ArrowRight,
  Ticket,
} from "lucide-react";

const services = [
  {
    icon: <Plane className="w-8 h-8" />,
    title: "Hajj Packages",
    slug: "hajj-packages",
    description:
      "Our Hajj packages from Hyderabad and Telangana are carefully organized to provide pilgrims with comfortable accommodation, guided support, transportation, and complete travel assistance throughout the sacred pilgrimage journey.",
    features: [
      "Hajj visa support",
      "Flight arrangements",
      "Hotel bookings",
      "Group coordination",
      "Transportation services",
      "Pilgrimage guidance",
    ],
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Umrah Packages",
    slug: "umrah-packages",
    description:
      "AL-IFRAAH Tours & Travels offers affordable, deluxe, Ramadan, and luxury Umrah packages from Hyderabad and Telangana for individuals, families, elders, and groups.",
    features: [
      "Umrah visa processing",
      "Hotel accommodation",
      "Airport pickup & drop",
      "Guided ziyarat",
      "Makkah & Madina transport",
      "Customer assistance",
    ],
  },
  {
    icon: <Building2 className="w-8 h-8" />,
    title: "Baghdad Ziyarat Packages",
    slug: "baghdad-ziyarat",
    description:
      "Visit spiritually significant Islamic places with our organized Baghdad Ziyarat packages from Hyderabad and Telangana.",
    features: [
      "Guided Islamic ziyarat",
      "Comfortable hotels",
      "Group travel support",
      "Airport transfers",
      "Dedicated assistance",
    ],
  },
  {
    icon: <FileCheck className="w-8 h-8" />,
    title: "Visa Assistance Services",
    slug: "visa-assistance",
    description:
      "We provide complete visa and travel documentation support for Hajj, Umrah, and Islamic tours to help pilgrims complete their journey process smoothly and efficiently.",
    features: [
      "Visa processing",
      "Documentation guidance",
      "Travel consultation",
      "Application assistance",
    ],
  },
  {
    icon: <Bus className="w-8 h-8" />,
    title: "Hotel & Transportation Services",
    slug: "hotel-transport",
    description:
      "Comfortable accommodation and reliable transportation arrangements for pilgrims traveling from Hyderabad and Telangana.",
    features: [
      "Luxury hotels",
      "Private transport",
      "Airport pickup",
      "Comfortable travel",
    ],
  },
  {
    icon: <Ticket className="w-8 h-8" />,
    title: "Flight Tickets Booking",
    slug: "flight-tickets",
    description:
      "Hassle-free domestic and international flight ticket bookings with competitive prices and complete itinerary support for your sacred journeys.",
    features: [
      "International flights",
      "Domestic connections",
      "Group bookings",
      "Best fare guarantee",
    ],
  },
];

const ServicesSection = () => {
  return (
    <section className="relative py-24 bg-white overflow-hidden">

      {/* Background Effects */}
      <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-purple-100/40 blur-3xl rounded-full"></div>

      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-yellow-100/40 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <span className="text-purple-700 uppercase tracking-[4px] font-semibold">
            <Link to="/services" className="hover:text-purple-900 transition-colors">OUR SERVICES</Link>
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Our Islamic{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-700">
              Travel Services
            </span>
          </h2>

          <p className="mt-8 text-lg leading-8 text-gray-600">
            We provide complete Islamic travel solutions designed to
            make your sacred journey organized, comfortable,
            spiritually peaceful, and memorable.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-10">

          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative bg-white border border-purple-100 rounded-[35px] p-8 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col text-left"
            >
              
              {/* Hover Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-100/0 to-yellow-100/0 group-hover:from-purple-100/30 group-hover:to-yellow-100/30 transition-all duration-500"></div>

              {/* Icon */}
              <div className="relative z-10 w-16 h-16 rounded-2xl bg-gradient-to-r from-purple-700 to-purple-500 text-white flex items-center justify-center shadow-lg mb-7">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="relative z-10 text-3xl font-bold text-gray-900">
                {service.title}
              </h3>

              {/* Description */}
              <p className="relative z-10 mt-6 text-gray-600 leading-8 text-lg">
                {service.description}
              </p>

              {/* Features */}
              <div className="relative z-10 mt-8 space-y-4 flex flex-col w-full">
                {service.features.map((feature, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 className="text-yellow-600 w-5 h-5 flex-shrink-0" />
                    <span className="text-gray-700 text-left">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA Link */}
              <Link
                to={`/services/${service.slug}`}
                className="relative z-10 mt-auto pt-8 inline-flex items-center gap-2 text-purple-700 font-semibold hover:text-purple-900 transition-colors group/link"
              >
                View Details
                <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
