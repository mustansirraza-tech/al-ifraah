import { motion } from "framer-motion";
import {
  ArrowRight,
  MessageCircle,
  MapPin,
  Star,
} from "lucide-react";
import kaabaImg from "../assets/images/kaaba1.png";
import madinaImg from "../assets/images/madina.png";
import baghdadImg from "../assets/images/baghdad1.png";

const HeroSection = () => {
  const message = encodeURIComponent("Assalamu alaikum, aur packages ke details chahiye");
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#1f0b34] via-[#2b1147] to-[#1f0b34] min-h-screen flex items-center">
      
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-400/20 blur-3xl rounded-full"></div>

        <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-yellow-200/40 blur-3xl rounded-full"></div>

        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:40px_40px] opacity-30"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-20 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Small Badge */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-purple-200 bg-purple-50 text-purple-800 font-medium text-sm shadow-sm mb-6"
          >
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            Trusted Spiritual Travel Services Across Telangana
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white"
          >
            Trusted{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-700">
              Hajj, Umrah
            </span>{" "}
            &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-900 to-purple-500">
              Baghdad Ziyarat
            </span>{" "}
            Services from Hyderabad & Telangana
          </motion.h1>

          {/* Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-8 text-lg leading-8 text-gray-600 max-w-2xl"
          >
            AL-IFRAAH Tours & Travels provides affordable and luxury
            Hajj, Umrah, and Baghdad Ziyarat packages from Hyderabad,
            Secunderabad, and across Telangana with complete visa assistance,
            hotel bookings, transportation services, guided support,
            and personalized customer care.
            <br />
            <br />
            We help pilgrims experience a spiritually peaceful,
            comfortable, and professionally organized sacred journey
            with sincerity, dedication, and trusted travel management.
          </motion.p>

          {/* Highlight Locations */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mt-8 flex items-start gap-3 bg-gradient-to-r from-yellow-50 to-purple-50 border border-yellow-100 rounded-2xl p-5 shadow-sm"
          >
            <MapPin className="text-purple-700 mt-1 w-5 h-5" />

            <p className="text-gray-700 leading-7">
              Serving pilgrims from Hyderabad, Secunderabad,
              Karimnagar, Warangal, Nizamabad, Peddapalli,
              Khammam, Adilabad, Nalgonda, and all over Telangana.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="flex flex-wrap gap-5 mt-10"
          >
            <button className="group bg-gradient-to-r from-purple-700 to-purple-600 hover:from-purple-800 hover:to-purple-700 text-white px-8 py-4 rounded-2xl font-semibold flex items-center gap-3 shadow-xl transition-all duration-300 hover:scale-105">
              Explore Packages
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
            </button>

            <a
              href={`https://wa.me/919908519221?text=${message}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group border-2 border-yellow-500 text-yellow-700 hover:bg-yellow-500 hover:text-white px-8 py-4 rounded-2xl font-semibold flex items-center gap-3 transition-all duration-300 hover:scale-105"
            >
              <MessageCircle className="w-5 h-5" />
              Contact on WhatsApp
            </a>
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE IMAGE AREA */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="relative h-[700px] hidden lg:block"
        >
          {/* Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-yellow-400/20 blur-[100px] rounded-full pointer-events-none"></div>

          {/* Image 1: Main (Center/Back) */}
          <motion.div 
            animate={{ y: [-15, 15, -15] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[0%] right-[0%] w-[85%] h-[480px] rounded-[2.5rem] overflow-hidden border-2 border-white/20 shadow-2xl z-10"
          >
            <img src={kaabaImg} alt="Makkah" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1f0b34]/60 to-transparent"></div>
          </motion.div>

          {/* Image 2: Bottom Left (Medium) */}
          <motion.div 
            animate={{ y: [10, -10, 10] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-[10%] left-[-5%] w-[65%] h-[380px] rounded-[2.5rem] overflow-hidden border-4 border-[#2b1147] shadow-[0_20px_50px_rgba(0,0,0,0.6)] z-20"
          >
            <img src={madinaImg} alt="Madina" className="w-full h-full object-cover" />
          </motion.div>

          {/* Image 3: Bottom Right (Small) */}
          <motion.div 
            animate={{ y: [-12, 12, -12] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute bottom-[5%] right-[-5%] w-[50%] h-[300px] rounded-[2.5rem] overflow-hidden border-4 border-[#2b1147] shadow-[0_20px_50px_rgba(0,0,0,0.6)] z-30"
          >
            <img src={baghdadImg} alt="Baghdad" className="w-full h-full object-cover" />
          </motion.div>

          {/* Floating Card */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            className="absolute bottom-0 left-[10%] right-[10%] z-40 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-5 shadow-2xl"
          >
            <div className="flex items-center gap-4">
               <div className="w-12 h-12 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 flex items-center justify-center flex-shrink-0">
                  <Star className="w-6 h-6 text-white fill-white" />
               </div>
               <div>
                 <h3 className="text-white text-lg font-bold">
                   Spiritual Journeys with Comfort & Care
                 </h3>
                 <p className="text-white/80 text-sm mt-1">
                   Premium arrangements for Hajj, Umrah & Ziyarat.
                 </p>
               </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
