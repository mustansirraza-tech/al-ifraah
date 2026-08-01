// FAQSection.jsx

import  {useState} from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  HelpCircle,
} from "lucide-react";

const faqs = [
  {
    question: "Do you provide Umrah packages from Hyderabad?",
    answer:
      "Yes, we provide affordable and luxury Umrah packages from Hyderabad, Secunderabad, and across Telangana.",
  },

  {
    question: "Do you organize Baghdad Ziyarat tours?",
    answer:
      "Yes, we organize guided Baghdad Ziyarat packages with accommodation, transport, and travel assistance.",
  },

  {
    question: "Do you provide visa assistance?",
    answer:
      "Yes, complete visa processing and travel documentation support is available.",
  },

  {
    question: "Are family Umrah packages available?",
    answer:
      "Yes, we provide customized family Umrah packages with comfortable arrangements.",
  },

  {
    question: "Which Telangana cities do you serve?",
    answer:
      "We serve Hyderabad, Secunderabad, Karimnagar, Warangal, Peddapalli, Nizamabad, Khammam, Adilabad, Nalgonda, and all over Telangana.",
  },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="relative py-24 overflow-hidden bg-white">

      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-purple-100/40 blur-3xl rounded-full"></div>

      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-yellow-100/40 blur-3xl rounded-full"></div>

      {/* Pattern */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-12">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 rounded-full bg-gradient-to-r from-purple-700 to-purple-500 flex items-center justify-center shadow-2xl">
              <HelpCircle className="w-10 h-10 text-white" />
            </div>
          </div>

          <span className="text-purple-700 uppercase tracking-[4px] font-semibold">
            FAQ SECTION
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Frequently Asked{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-700">
              Questions
            </span>
          </h2>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-6">

          {faqs.map((faq, index) => {
            const isActive = activeIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                viewport={{ once: true }}
                className="group bg-white border border-purple-100 rounded-[28px] shadow-xl overflow-hidden"
              >

                {/* Question */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between text-left px-8 py-7"
                >
                  <h3 className="text-xl md:text-2xl font-semibold text-gray-900 pr-6 leading-8">
                    {faq.question}
                  </h3>

                  <motion.div
                    animate={{ rotate: isActive ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="min-w-[52px] min-h-[52px] rounded-2xl bg-gradient-to-r from-yellow-400 to-yellow-500 flex items-center justify-center shadow-lg"
                  >
                    <ChevronDown className="w-6 h-6 text-[#2b1147]" />
                  </motion.div>
                </button>

                {/* Answer */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4 }}
                    >
                      <div className="px-8 pb-8 text-lg text-gray-600 leading-8">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Bottom Accent */}
                <div className="h-[4px] w-full bg-gradient-to-r from-purple-700 via-yellow-500 to-purple-700"></div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;