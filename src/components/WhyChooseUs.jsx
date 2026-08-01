// WhyChooseUs.jsx

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Gem,
  MapPinned,
  Handshake,
  Users,
  HeartHandshake,
} from "lucide-react";

const features = [
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: "Trusted Islamic Travel Services",
    description:
      "We focus on honesty, professionalism, customer satisfaction, and proper travel coordination while organizing Hajj, Umrah, and Baghdad Ziyarat tours.",
  },

  {
    icon: <Gem className="w-8 h-8" />,
    title: "Affordable & Luxury Packages",
    description:
      "From budget-friendly Umrah packages to premium luxury tours, we provide packages suitable for individuals, families, elders, and groups.",
  },

  {
    icon: <MapPinned className="w-8 h-8" />,
    title: "Telangana-Wide Services",
    description:
      "We proudly serve pilgrims from Hyderabad, Secunderabad, Karimnagar, Warangal, Peddapalli, Nizamabad, Khammam, Adilabad, and all over Telangana.",
  },

  {
    icon: <Handshake className="w-8 h-8" />,
    title: "Complete End-to-End Support",
    description:
      "From visa processing to accommodation, transportation, ziyarat, and guidance, we manage the entire travel experience under one roof.",
  },

  {
    icon: <Users className="w-8 h-8" />,
    title: "Experienced Guidance & Assistance",
    description:
      "Our experienced team provides complete travel coordination and customer support to help pilgrims travel peacefully and confidently.",
  },

  {
    icon: <HeartHandshake className="w-8 h-8" />,
    title: "Family-Friendly Travel Arrangements",
    description:
      "We provide comfortable and secure travel arrangements for families, women pilgrims, elders, and group travelers.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-br from-[#2b1147] via-[#35135b] to-[#2b1147]">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[450px] h-[450px] bg-yellow-400/10 blur-3xl rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-purple-400/20 blur-3xl rounded-full"></div>

      {/* Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#ffffff20_1px,transparent_1px),linear-gradient(to_bottom,#ffffff20_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <span className="text-yellow-400 uppercase tracking-[4px] font-semibold">
            WHY CHOOSE US
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl font-bold text-white leading-tight">
            Why Pilgrims Across Telangana Trust{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500">
              AL-IFRAAH Tours & Travels
            </span>
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative bg-white/10 backdrop-blur-xl border border-white/10 rounded-[32px] p-8 shadow-2xl overflow-hidden transition-all duration-500"
            >
              
              {/* Hover Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-300/0 to-purple-300/0 group-hover:from-yellow-300/10 group-hover:to-purple-300/10 transition-all duration-500"></div>

              {/* Icon */}
              <div className="relative z-10 w-16 h-16 rounded-2xl bg-gradient-to-r from-yellow-400 to-yellow-500 text-[#2b1147] flex items-center justify-center shadow-xl mb-7">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="relative z-10 text-2xl font-bold text-white leading-snug">
                {item.title}
              </h3>

              {/* Description */}
              <p className="relative z-10 mt-5 text-gray-200 leading-8 text-lg">
                {item.description}
              </p>

              {/* Bottom Glow Line */}
              <div className="relative z-10 mt-8 h-[3px] w-20 bg-gradient-to-r from-yellow-400 to-transparent rounded-full"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;