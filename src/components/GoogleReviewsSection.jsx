// GoogleReviewsSection.jsx

import { motion } from "framer-motion";
import {
  Star,
  Quote,
  BadgeCheck,
} from "lucide-react";

const reviews = [
  {
    review:
      "Excellent Umrah arrangements from Hyderabad. Everything was professionally organized.",
  },

  {
    review:
      "Very trusted Islamic travel agency with complete guidance and support.",
  },

  {
    review:
      "Comfortable hotels, smooth transportation, and peaceful Baghdad ziyarat experience.",
  },
];

const GoogleReviewsSection = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-br from-[#2b1147] via-[#35135b] to-[#2b1147]">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[450px] h-[450px] bg-yellow-400/10 blur-3xl rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-purple-400/20 blur-3xl rounded-full"></div>

      {/* Pattern */}
      <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(circle_at_center,#ffffff_1px,transparent_1px)] bg-[size:28px_28px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <div className="flex justify-center mb-6">
            <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-white/10 backdrop-blur-lg border border-white/10">
              
              <BadgeCheck className="w-6 h-6 text-yellow-400" />

              <span className="text-yellow-300 font-semibold tracking-wide">
                GOOGLE REVIEWS
              </span>
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Trusted by Pilgrims Across{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500">
              Telangana
            </span>
          </h2>
        </motion.div>

        {/* Review Cards */}
        <div className="grid lg:grid-cols-3 gap-8">

          {reviews.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative bg-white/10 backdrop-blur-xl border border-white/10 rounded-[32px] p-8 shadow-2xl overflow-hidden"
            >
              
              {/* Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-300/0 to-purple-300/0 group-hover:from-yellow-300/10 group-hover:to-purple-300/10 transition-all duration-500"></div>

              {/* Quote Icon */}
              <div className="relative z-10 w-16 h-16 rounded-2xl bg-gradient-to-r from-yellow-400 to-yellow-500 flex items-center justify-center shadow-xl mb-7">
                <Quote className="w-8 h-8 text-[#2b1147]" />
              </div>

              {/* Stars */}
              <div className="relative z-10 flex items-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>

              {/* Review */}
              <p className="relative z-10 text-gray-200 text-lg leading-9">
                “{item.review}”
              </p>

              {/* Bottom Accent */}
              <div className="relative z-10 mt-8 h-[4px] w-24 bg-gradient-to-r from-yellow-400 to-transparent rounded-full"></div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Badge */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="flex justify-center mt-16"
        >
          <div className="px-8 py-4 rounded-full bg-white/10 backdrop-blur-lg border border-white/10 text-gray-200 text-lg">
            Trusted Islamic Travel Services for Hajj, Umrah & Baghdad Ziyarat ✨
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GoogleReviewsSection;