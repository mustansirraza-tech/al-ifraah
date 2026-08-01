// SpiritualQuoteSection.jsx

import { motion } from "framer-motion";
import { Quote, MoonStar } from "lucide-react";

const SpiritualQuoteSection = () => {
  return (
    <section className="relative py-28 overflow-hidden bg-gradient-to-br from-[#2b1147] via-[#3d1764] to-[#2b1147]">

      {/* Glow Effects */}
      <div className="absolute top-0 left-0 w-[450px] h-[450px] bg-yellow-400/10 blur-3xl rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-purple-400/20 blur-3xl rounded-full"></div>

      {/* Islamic Pattern */}
      <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(circle_at_center,#ffffff_1px,transparent_1px)] bg-[size:28px_28px]"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">

        {/* Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="w-24 h-24 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500 flex items-center justify-center shadow-2xl">
            <Quote className="w-10 h-10 text-[#2b1147]" />
          </div>
        </motion.div>

        {/* Quote */}
        <motion.h2
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-12 text-4xl md:text-6xl font-bold text-white leading-tight"
        >
          “And proclaim to the people the{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500">
            Hajj pilgrimage...
          </span>
          ”
        </motion.h2>

        {/* Quran Ref */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-8 inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/10 backdrop-blur-lg border border-white/10"
        >
          <MoonStar className="w-5 h-5 text-yellow-400" />

          <span className="text-yellow-300 text-lg font-semibold">
            Quran 22:27
          </span>
        </motion.div>

        {/* Small Text */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-10 text-xl text-gray-200 leading-9 max-w-4xl mx-auto"
        >
          Every sacred journey begins with sincerity, faith,
          and the intention to seek closeness to Allah.
        </motion.p>
      </div>
    </section>
  );
};

export default SpiritualQuoteSection;