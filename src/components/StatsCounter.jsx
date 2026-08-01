// StatsCounter.jsx

import CountUp from "react-countup";
import { motion } from "framer-motion";
import {
  Users,
  Plane,
  MapPinned,
  Headphones,
  Gem,
  ShieldCheck,
} from "lucide-react";

const stats = [
  {
    icon: <Users className="w-8 h-8" />,
    number: 5000,
    suffix: "+",
    title: "Happy Pilgrims",
  },
  {
    icon: <Plane className="w-8 h-8" />,
    number: 100,
    suffix: "+",
    title: "Group Departures",
  },
  {
    icon: <MapPinned className="w-8 h-8" />,
    number: 100,
    suffix: "%",
    title: "Telangana Wide Services",
  },
  {
    icon: <Headphones className="w-8 h-8" />,
    number: 24,
    suffix: "/7",
    title: "Dedicated Customer Support",
  },
  {
    icon: <Gem className="w-8 h-8" />,
    number: 50,
    suffix: "+",
    title: "Affordable & Luxury Packages",
  },
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    number: 100,
    suffix: "%",
    title: "Trusted Islamic Travel Guidance",
  },
];

const StatsCounter = () => {
  return (
    <section className="relative py-24 bg-gradient-to-br from-[#2b1147] via-[#3d1764] to-[#2b1147] overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-yellow-400/20 blur-3xl rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-300/20 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-yellow-400 uppercase tracking-[4px] font-semibold">
            AL-IFRAAH JOURNEY
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl font-bold text-white leading-tight">
            Serving Pilgrims with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500">
              Trust & Dedication
            </span>
          </h2>
        </motion.div>

        {/* Counter Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group relative bg-white/10 backdrop-blur-xl border border-white/10 rounded-[30px] p-8 shadow-2xl overflow-hidden"
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-300/0 to-purple-400/0 group-hover:from-yellow-300/10 group-hover:to-purple-400/10 transition-all duration-500"></div>

              {/* Icon */}
              <div className="relative z-10 w-16 h-16 rounded-2xl bg-gradient-to-r from-yellow-400 to-yellow-500 text-[#2b1147] flex items-center justify-center shadow-xl mb-6">
                {item.icon}
              </div>

              {/* Counter */}
              <h3 className="relative z-10 text-5xl font-bold text-white">
                <CountUp
                  end={item.number}
                  duration={3}
                  enableScrollSpy
                  scrollSpyOnce
                />
                {item.suffix}
              </h3>

              {/* Title */}
              <p className="relative z-10 mt-4 text-gray-200 text-lg leading-7">
                {item.title}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;