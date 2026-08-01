import { motion } from "framer-motion";
import {
  FileCheck,
  MessageCircle,
} from "lucide-react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const visaServices = [
  {
    title: "Hajj Visa Processing",
    desc: "Complete Hajj visa assistance from Hyderabad with transparent documentation and reliable processing.",
  },
  {
    title: "Umrah Visa Assistance",
    desc: "Fast-track Umrah visa processing for individuals, families, and groups from Telangana.",
  },
  {
    title: "Iraq Visa Support",
    desc: "Specialized Baghdad Ziyarat visa assistance with proper documentation for pilgrimage to Iraq.",
  },
  {
    title: "Travel Documentation",
    desc: "Complete guidance for passport requirements, photographs, affidavits, and all necessary paperwork.",
  },
  {
    title: "Passport Renewal Guidance",
    desc: "We guide pilgrims through passport renewal and validity requirements for travel.",
  },
  {
    title: "Medical Certificate Support",
    desc: "Assistance with required medical certificates and vaccinations for Hajj, Umrah, and Ziyarat.",
  },
];

const VisaAssistancePage = () => {
  const whatsappMessage = encodeURIComponent("Assalamu alaikum, Visa assistance ke details chahiye.");

  return (
    <div>
      <Header />

      <section className="relative min-h-[60vh] flex items-center bg-gradient-to-br from-[#1f0b34] via-[#2b1147] to-[#1f0b34]">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-400/20 blur-3xl rounded-full"></div>
          <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-yellow-200/40 blur-3xl rounded-full"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-20 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white"
          >
            Visa Assistance Services from{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-700">
              Hyderabad
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mt-6 text-lg text-gray-300 max-w-3xl mx-auto"
          >
            Complete visa processing and travel documentation support for Hajj, Umrah, and Baghdad Ziyarat from Hyderabad and across Telangana.
          </motion.p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-purple-700 uppercase tracking-[4px] font-semibold">
              VISA ASSISTANCE HYDERABAD
            </span>
            <h2 className="mt-5 text-3xl md:text-4xl font-bold text-gray-900">
              Our Visa Services
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Comprehensive visa processing services for all Islamic pilgrimage travel needs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visaServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-8 rounded-3xl bg-white shadow-xl border border-purple-100 hover:shadow-2xl transition-all"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-purple-700 to-purple-500 text-white flex items-center justify-center shadow-lg mb-6">
                  <FileCheck className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-7">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#2b1147] to-[#1f0b34] text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight max-w-4xl mx-auto">
              Need <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Visa Assistance</span>?
            </h2>
            <p className="mt-8 text-lg text-gray-200 leading-8 max-w-3xl mx-auto">
              Contact AL-IFRAAH Tours & Travels for professional visa processing for Hajj, Umrah, and Baghdad Ziyarat from Hyderabad.
            </p>
            <a
              href={`https://wa.me/919908519221?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 mt-10 px-10 py-5 rounded-2xl bg-gradient-to-r from-yellow-500 to-yellow-700 hover:from-yellow-600 hover:to-yellow-800 text-white font-bold text-lg shadow-2xl transition-all duration-300"
            >
              <MessageCircle className="w-6 h-6" />
              Contact on WhatsApp: 9908519221
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default VisaAssistancePage;
