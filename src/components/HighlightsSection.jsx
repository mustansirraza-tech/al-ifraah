// HighlightsSection.jsx

import { motion } from "framer-motion";
import {
  CheckCircle2,
  Hotel,
  Bus,
  MapPinned,
  ShieldCheck,
  Headphones,
} from "lucide-react";
import baghdadImg from "../assets/images/baghdad1.png";

const umrahFeatures = [
  "Comfortable hotel stays near Haram",
  "Reliable transportation",
  "Guided ziyarat tours",
  "Organized travel arrangements",
  "Dedicated customer support",
];

const cities = [
  "Hyderabad",
  "Secunderabad",
  "Karimnagar",
  "Warangal",
  "Nizamabad",
  "Khammam",
  "Adilabad",
  "Peddapalli",
  "Nalgonda",
  "Sangareddy",
  "Telangana",
];

const HighlightsSection = () => {
  return (
    <section className="relative py-24 bg-white overflow-hidden">

      {/* Glow */}
      <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-purple-100/40 blur-3xl rounded-full"></div>

      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-yellow-100/40 blur-3xl rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 space-y-32">

        {/* UMRAH SECTION */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-[35px] overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1564769625905-50e93615e769?q=80&w=1200&auto=format&fit=crop"
                alt="Umrah Packages"
                className="w-full h-[650px] object-cover"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
          >
            <span className="text-purple-700 uppercase tracking-[4px] font-semibold">
              UMRAH PACKAGES
            </span>

            <h2 className="mt-5 text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Affordable & Luxury Umrah Packages from{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-700">
                Hyderabad
              </span>
            </h2>

            <p className="mt-8 text-lg text-gray-600 leading-8">
              Looking for the best Umrah packages from Hyderabad and Telangana?
              AL-IFRAAH Tours & Travels provides economy, deluxe, Ramadan,
              and luxury Umrah packages with complete visa assistance,
              accommodation, transport services, ziyarat arrangements,
              and guided support.
            </p>

            <div className="mt-10 space-y-5">
              {umrahFeatures.map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <CheckCircle2 className="text-yellow-600 w-5 h-5" />

                  <span className="text-gray-700 text-lg">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* HAJJ SECTION */}
        <div className="relative rounded-[40px] overflow-hidden bg-gradient-to-r from-[#2b1147] to-[#4b1f73] p-12 lg:p-16 shadow-2xl">

          <div className="absolute top-0 right-0 w-[350px] h-[350px] bg-yellow-400/10 blur-3xl rounded-full"></div>

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <span className="text-yellow-400 uppercase tracking-[4px] font-semibold">
              HAJJ SERVICES
            </span>

            <h2 className="mt-5 text-4xl md:text-5xl font-bold text-white leading-tight">
              Reliable Hajj Packages from Hyderabad & Telangana
            </h2>

            <p className="mt-8 text-lg text-gray-200 leading-8 max-w-4xl">
              We provide professionally organized Hajj services with
              accommodation support, travel coordination, transport
              arrangements, guidance, and customer assistance for pilgrims
              across Telangana.
              <br /><br />
              Our mission is to help pilgrims perform Hajj peacefully and
              comfortably through proper planning and reliable travel management.
            </p>
          </motion.div>
        </div>

        {/* BAGHDAD SECTION */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="text-purple-700 uppercase tracking-[4px] font-semibold">
              BAGHDAD ZIYARAT
            </span>

            <h2 className="mt-5 text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Spiritual Baghdad Ziyarat Tours from{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-700">
                Hyderabad
              </span>
            </h2>

            <p className="mt-8 text-lg text-gray-600 leading-8">
              AL-IFRAAH Tours & Travels organizes spiritually meaningful
              Baghdad Ziyarat packages from Hyderabad and Telangana for pilgrims
              seeking to visit important Islamic historical places and blessed
              religious landmarks.
            </p>

            <div className="mt-10 grid sm:grid-cols-2 gap-5">

              {[
                {
                  icon: <MapPinned className="w-5 h-5" />,
                  text: "Guided ziyarat arrangements",
                },
                {
                  icon: <Hotel className="w-5 h-5" />,
                  text: "Comfortable accommodation",
                },
                {
                  icon: <ShieldCheck className="w-5 h-5" />,
                  text: "Group coordination",
                },
                {
                  icon: <Bus className="w-5 h-5" />,
                  text: "Transport services",
                },
                {
                  icon: <Headphones className="w-5 h-5" />,
                  text: "Dedicated assistance",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-purple-50 border border-purple-100 rounded-2xl px-5 py-4"
                >
                  <div className="text-yellow-600">
                    {item.icon}
                  </div>

                  <span className="text-gray-700">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>

            <p className="mt-8 text-lg text-gray-600 leading-8">
              We aim to provide a peaceful and memorable ziyarat experience
              with sincerity, professionalism, and care.
            </p>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
          >
            <div className="rounded-[35px] overflow-hidden shadow-2xl">
              <img
                src={baghdadImg}
                alt="Baghdad Ziyarat"
                className="w-full h-[650px] object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* CITY SEO SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="text-purple-700 uppercase tracking-[4px] font-semibold">
            TELANGANA SERVICES
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl font-bold text-gray-900">
            Serving Pilgrims Across Hyderabad & Telangana
          </h2>

          <p className="mt-8 text-lg text-gray-600 leading-8 max-w-5xl mx-auto">
            AL-IFRAAH Tours & Travels proudly provides Hajj, Umrah,
            and Baghdad Ziyarat services across Telangana.
          </p>

          {/* City Tags */}
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            {cities.map((city, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-700 to-purple-500 text-white shadow-lg"
              >
                {city}
              </motion.div>
            ))}
          </div>

          <p className="mt-10 text-lg text-gray-600 leading-8 max-w-5xl mx-auto">
            Whether you are looking for affordable Umrah packages,
            Hajj services, or Baghdad Ziyarat tours, our team is
            committed to serving pilgrims across Telangana with trusted
            Islamic travel solutions.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HighlightsSection;
