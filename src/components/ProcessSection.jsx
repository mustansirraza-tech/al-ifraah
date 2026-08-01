// ProcessSection.jsx

import { motion } from "framer-motion";
import {
  PhoneCall,
  PackageCheck,
  FileCheck2,
  PlaneTakeoff,
} from "lucide-react";

const processSteps = [
  {
    number: "01",
    icon: <PhoneCall className="w-8 h-8" />,
    title: "Contact Our Team",
    description:
      "Speak with our travel experts to understand available Hajj, Umrah, and Baghdad Ziyarat packages.",
  },

  {
    number: "02",
    icon: <PackageCheck className="w-8 h-8" />,
    title: "Choose Your Package",
    description:
      "Select economy, deluxe, luxury, Ramadan, or family packages according to your travel requirements.",
  },

  {
    number: "03",
    icon: <FileCheck2 className="w-8 h-8" />,
    title: "Visa & Documentation",
    description:
      "Our team assists with visa processing and travel documentation.",
  },

  {
    number: "04",
    icon: <PlaneTakeoff className="w-8 h-8" />,
    title: "Begin Your Sacred Journey",
    description:
      "Travel peacefully with complete guidance, support, accommodation, and transportation services.",
  },
];

const ProcessSection = () => {
  return (
    <section className="relative py-24 bg-white overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-purple-100/40 blur-3xl rounded-full"></div>

      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-yellow-100/40 blur-3xl rounded-full"></div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto mb-24"
        >
          <span className="text-purple-700 uppercase tracking-[4px] font-semibold">
            OUR PROCESS
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            How We Help You Begin Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-700">
              Sacred Journey
            </span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">

          {/* Center Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[4px] bg-gradient-to-b from-yellow-400 via-purple-500 to-yellow-400 transform -translate-x-1/2 rounded-full"></div>

          <div className="space-y-20">

            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 45 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                viewport={{ once: true }}
                className={`relative flex flex-col lg:flex-row items-center gap-10 ${
                  index % 2 !== 0 ? "lg:flex-row-reverse" : ""
                }`}
              >

                {/* Content Card */}
                <div className="w-full lg:w-1/2">
                  <motion.div
                    whileHover={{ y: -10 }}
                    className="group relative bg-white border border-purple-100 rounded-[32px] p-8 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden"
                  >

                    {/* Hover Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-100/0 to-yellow-100/0 group-hover:from-purple-100/40 group-hover:to-yellow-100/40 transition-all duration-500"></div>

                    {/* Step Number */}
                    <div className="relative z-10 flex items-center justify-between mb-7">

                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-purple-700 to-purple-500 text-white flex items-center justify-center shadow-lg">
                        {step.icon}
                      </div>

                      <span className="text-5xl font-black text-gray-100">
                        {step.number}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="relative z-10 text-3xl font-bold text-gray-900">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="relative z-10 mt-5 text-gray-600 text-lg leading-8">
                      {step.description}
                    </p>

                    {/* Bottom Accent */}
                    <div className="relative z-10 mt-8 h-[4px] w-24 bg-gradient-to-r from-yellow-500 to-purple-500 rounded-full"></div>
                  </motion.div>
                </div>

                {/* Center Circle */}
                <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-20 h-20 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500 border-[6px] border-white shadow-2xl items-center justify-center text-[#2b1147] font-black text-2xl z-20">
                  {step.number}
                </div>

                {/* Empty Space */}
                <div className="hidden lg:block w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;