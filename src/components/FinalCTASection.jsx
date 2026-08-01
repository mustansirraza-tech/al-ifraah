// FinalCTASection.jsx

import { motion } from "framer-motion";
import {
  ArrowRight,
  MessageCircle,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

const services = [
  "Upcoming Umrah departures",
  "Hajj packages",
  "Baghdad Ziyarat tours",
  "Family Umrah packages",
  "Visa assistance",
  "Hotel & transportation services",
];

const FinalCTASection = () => {
  const message = encodeURIComponent("Assalamu alaikum, aur packages ke details chahiye");
  return (
    <section className="relative py-28 overflow-hidden bg-gradient-to-br from-[#2b1147] via-[#3d1764] to-[#2b1147]">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-yellow-400/10 blur-3xl rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-400/20 blur-3xl rounded-full"></div>

      {/* Islamic Pattern */}
      <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(circle_at_center,#ffffff_1px,transparent_1px)] bg-[size:28px_28px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/10 backdrop-blur-2xl shadow-2xl"
        >

          {/* Inner Glow */}
          <div className="absolute top-0 right-0 w-[350px] h-[350px] bg-yellow-400/10 blur-3xl rounded-full"></div>

          <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-purple-400/20 blur-3xl rounded-full"></div>

          <div className="relative z-10 px-8 md:px-14 py-16 lg:py-20 text-center">

            {/* Badge */}
            <div className="flex justify-center mb-8">
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/10 border border-white/10 backdrop-blur-lg">
                
                <Sparkles className="w-5 h-5 text-yellow-400" />

                <span className="text-yellow-300 font-semibold tracking-wide">
                  START YOUR SACRED JOURNEY
                </span>
              </div>
            </div>

            {/* Heading */}
            <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight max-w-5xl mx-auto">
              Begin Your Sacred Journey with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500">
                AL-IFRAAH Tours & Travels
              </span>
            </h2>

            {/* Content */}
            <p className="mt-10 text-lg md:text-xl text-gray-200 leading-9 max-w-5xl mx-auto">
              Whether you are planning Hajj, Umrah, or Baghdad Ziyarat,
              AL-IFRAAH Tours & Travels is committed to providing trusted
              Islamic travel services with comfort, sincerity,
              professionalism, and complete support.
            </p>

            {/* Services */}
            <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">

              {services.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.03 }}
                  className="flex items-center gap-4 bg-white/10 border border-white/10 backdrop-blur-lg rounded-2xl px-5 py-5 text-left"
                >
                  <div className="min-w-[42px] h-[42px] rounded-xl bg-gradient-to-r from-yellow-400 to-yellow-500 flex items-center justify-center shadow-lg">
                    <CheckCircle2 className="w-5 h-5 text-[#2b1147]" />
                  </div>

                  <span className="text-gray-100 leading-7">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Bottom Text */}
            <p className="mt-12 text-lg text-gray-300 leading-8 max-w-4xl mx-auto">
              We proudly serve pilgrims from Hyderabad, Secunderabad,
              and across Telangana with affordable and professionally
              managed Islamic travel services.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center gap-6 mt-14">

              {/* Button 1 */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                className="group px-9 py-5 rounded-2xl bg-gradient-to-r from-yellow-400 to-yellow-500 text-[#2b1147] font-bold text-lg shadow-2xl flex items-center gap-3"
              >
                Get Package Details

                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-all duration-300" />
              </motion.button>

              {/* Button 2 */}
              <a
                href={`https://wa.me/919908519221?text=${message}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center group px-9 py-5 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-lg text-white font-bold text-lg shadow-2xl gap-3"
              >
                <MessageCircle className="w-5 h-5 text-yellow-400" />
                Contact on WhatsApp
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTASection;
