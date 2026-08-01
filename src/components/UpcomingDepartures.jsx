// UpcomingDepartures.jsx

import { motion } from "framer-motion";
import {
  PlaneTakeoff,
  CalendarDays,
  Users,
  Gem,
  Landmark,
  Sparkles,
} from "lucide-react";

const departures = [
  {
    icon: <PlaneTakeoff className="w-7 h-7" />,
    title: "Monthly Umrah Packages from Hyderabad",
  },
  {
    icon: <CalendarDays className="w-7 h-7" />,
    title: "Ramadan Umrah Packages",
  },
  {
    icon: <Users className="w-7 h-7" />,
    title: "Family Umrah Group Tours",
  },
  {
    icon: <Gem className="w-7 h-7" />,
    title: "Deluxe Umrah Packages",
  },
  {
    icon: <Landmark className="w-7 h-7" />,
    title: "Baghdad Ziyarat Group Tours",
  },
  {
    icon: <Sparkles className="w-7 h-7" />,
    title: "Special Seasonal Islamic Tours",
  },
];

const UpcomingDepartures = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-br from-[#2b1147] via-[#35135b] to-[#2b1147]">

      {/* Glow */}
      <div className="absolute top-0 left-0 w-[450px] h-[450px] bg-yellow-400/10 blur-3xl rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-purple-400/20 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <span className="text-yellow-400 uppercase tracking-[4px] font-semibold">
            UPCOMING DEPARTURES
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl font-bold text-white leading-tight">
            Upcoming Umrah & Baghdad{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500">
              Group Departures
            </span>
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {departures.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative bg-white/10 backdrop-blur-xl border border-white/10 rounded-[30px] p-8 overflow-hidden shadow-2xl"
            >
              
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-300/0 to-purple-300/0 group-hover:from-yellow-300/10 group-hover:to-purple-300/10 transition-all duration-500"></div>

              <div className="relative z-10 w-16 h-16 rounded-2xl bg-gradient-to-r from-yellow-400 to-yellow-500 text-[#2b1147] flex items-center justify-center shadow-xl mb-7">
                {item.icon}
              </div>

              <h3 className="relative z-10 text-2xl font-bold text-white leading-snug">
                {item.title}
              </h3>
            </motion.div>
          ))}
        </div>

        {/* Bottom Text */}
        <motion.p
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center text-lg text-gray-200 leading-8 max-w-4xl mx-auto"
        >
          Contact AL-IFRAAH Tours & Travels for upcoming departure
          dates, package details, hotel arrangements, and booking information.
        </motion.p>
      </div>
    </section>
  );
};

export default UpcomingDepartures;
