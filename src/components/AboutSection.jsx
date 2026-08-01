// AboutSection.jsx

import { motion } from "framer-motion";
import { CheckCircle2, MapPin } from "lucide-react";
import madinaImg from "../assets/images/madina.png";

const locations = [
  "Hyderabad",
  "Secunderabad",
  "Telangana",
  "Karimnagar",
  "Warangal",
  "Nizamabad",
  "Peddapalli",
  "Khammam",
  "Adilabad",
  "Nalgonda",
];

const AboutSection = () => {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      
      {/* Background Effects */}
      <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-purple-100/40 blur-3xl rounded-full"></div>

      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-yellow-100/40 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-20 items-center relative z-10">

        {/* LEFT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Main Image */}
          <div className="rounded-[35px] overflow-hidden shadow-2xl border border-white">
            <img
              src={madinaImg}
              alt="About AL-IFRAAH"
              className="w-full h-[700px] object-cover"
            />
          </div>

          {/* Floating Card */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-xl rounded-3xl p-6 shadow-2xl border border-purple-100"
          >
            <h3 className="text-2xl font-bold text-gray-900">
              Trusted Companion for Sacred Journeys
            </h3>

            <p className="text-gray-600 mt-3 leading-7">
              Helping pilgrims travel with peace, comfort,
              sincerity, and complete professional support.
            </p>
          </motion.div>
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
        >
          {/* Small Tag */}
          <span className="inline-block px-5 py-2 rounded-full bg-purple-100 text-purple-700 font-semibold text-sm tracking-wide">
            ABOUT AL-IFRAAH
          </span>

          {/* Heading */}
          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Your Trusted Companion for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-700">
              Sacred Journeys
            </span>
          </h2>

          {/* Paragraphs */}
          <div className="mt-8 space-y-6 text-gray-600 leading-8 text-lg">
            <p>
              AL-IFRAAH Tours & Travels is a trusted Islamic travel
              agency based in Hyderabad and Secunderabad, dedicated
              to providing professionally organized Hajj, Umrah,
              and Baghdad Ziyarat services for pilgrims across Telangana.
            </p>

            <p>
              Our mission is to make every sacred journey spiritually
              fulfilling, peaceful, comfortable, and stress-free
              through reliable travel planning and sincere customer support.
            </p>

            <p>
              We understand that Hajj and Umrah are not ordinary journeys.
              They are deeply emotional and spiritual experiences connected
              with faith, duas, and lifelong dreams.
            </p>

            <p>
              From visa processing and flight bookings to hotel accommodation,
              transportation, ziyarat arrangements, and complete travel guidance,
              AL-IFRAAH Tours & Travels provides end-to-end support for
              individuals, elders, families, and group pilgrims.
            </p>

            <p>
              Whether you are planning your first Umrah journey,
              preparing for Hajj, or visiting the blessed Islamic
              historical places of Baghdad Sharif, we are committed
              to helping you travel with peace of mind and confidence.
            </p>
          </div>

          {/* Features */}
          <div className="mt-10 grid sm:grid-cols-2 gap-5">
            {[
              "Trusted Islamic Travel Experts",
              "Affordable & Luxury Packages",
              "Professional Visa Guidance",
              "Comfortable Arrangements",
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-purple-50 rounded-2xl px-5 py-4 border border-purple-100"
              >
                <CheckCircle2 className="text-yellow-600 w-5 h-5" />

                <span className="text-gray-700 font-medium">
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* Locations */}
          <div className="mt-12">
            <h4 className="text-2xl font-bold text-gray-900 mb-6">
              Proudly Serving Pilgrims From
            </h4>

            <div className="flex flex-wrap gap-4">
              {locations.map((city, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-purple-700 to-purple-500 text-white shadow-lg"
                >
                  <MapPin className="w-4 h-4" />
                  {city}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;