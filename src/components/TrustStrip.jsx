// TrustStrip.jsx

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Wallet,
  FileCheck,
  Hotel,
  Users,
  Headphones,
} from "lucide-react";

const trustItems = [
  {
    icon: <ShieldCheck className="w-7 h-7" />,
    title: "Trusted Islamic Travel Agency in Hyderabad",
  },
  {
    icon: <Wallet className="w-7 h-7" />,
    title: "Affordable & Luxury Umrah Packages",
  },
  {
    icon: <FileCheck className="w-7 h-7" />,
    title: "Complete Visa & Documentation Assistance",
  },
  {
    icon: <Hotel className="w-7 h-7" />,
    title: "Comfortable Hotel & Transport Services",
  },
  {
    icon: <Users className="w-7 h-7" />,
    title: "Family & Group Tour Arrangements",
  },
  {
    icon: <Headphones className="w-7 h-7" />,
    title: "Dedicated Customer Support Across Telangana",
  },
];

const TrustStrip = () => {
  return (
    <section className="relative py-20 bg-gradient-to-b from-white to-purple-50 overflow-hidden">
      
      {/* Glow Background */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-200/30 blur-3xl rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200/30 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          {/* <span className="text-purple-700 font-semibold tracking-wider uppercase">
            Why Choose AL-IFRAAH
          </span> */}

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900">
            Trusted Services for a{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-700">
              Peaceful Sacred Journey
            </span>
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {trustItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group relative bg-white/80 backdrop-blur-lg border border-purple-100 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-100/0 via-purple-100/0 to-yellow-100/0 group-hover:from-purple-100/40 group-hover:to-yellow-100/40 transition-all duration-500"></div>

              {/* Icon */}
              <div className="relative z-10 w-16 h-16 rounded-2xl bg-gradient-to-r from-purple-700 to-purple-500 text-white flex items-center justify-center shadow-lg mb-6">
                {item.icon}
              </div>

              {/* Text */}
              <h3 className="relative z-10 text-xl font-semibold text-gray-800 leading-8">
                {item.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustStrip;