import { motion } from "framer-motion";
import {
  Landmark,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
} from "lucide-react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const ziyaratPackages = [
  {
    id: 1,
    name: "Baghdad Ziyarat Standard Package",
    duration: "6 Days / 5 Nights",
    price: "₹42,000",
    features: [
      "Economy flights from Hyderabad",
      "3-star hotel in Baghdad",
      "Group transportation",
      "Guided Ziyarat tours",
      "Visa processing included",
      "Airport transfers",
    ],
    popular: false,
  },
  {
    id: 2,
    name: "Baghdad Ziyarat Premium Package",
    duration: "7 Days / 6 Nights",
    price: "₹58,000",
    features: [
      "Premium flights from Hyderabad",
      "4-star hotel in Baghdad & Najaf",
      "Private AC transportation",
      "Expert Ziyarat guide",
      "Priority visa assistance",
      "All meals included",
    ],
    popular: true,
  },
  {
    id: 3,
    name: "Baghdad Ziyarat Luxury Package",
    duration: "8 Days / 7 Nights",
    price: "₹85,000",
    features: [
      "Business class flights",
      "5-star premium hotels",
      "Private luxury vehicle",
      "Personal Ziyarat guide",
      "VIP visa processing",
      "Exclusive historical tours",
    ],
    popular: false,
  },
  {
    id: 4,
    name: "Karbala & Najaf Combined Package",
    duration: "10 Days / 9 Nights",
    price: "₹95,000",
    features: [
      "Premium flights Hyderabad to Najaf",
      "Hotels in Najaf, Karbala, Baghdad",
      "Private transportation",
      "Expert religious guide",
      "Full visa assistance",
      "Comprehensive Ziyarat coverage",
    ],
    popular: false,
  },
];

const BaghdadZiyaratPage = () => {
  const whatsappMessage = encodeURIComponent("Assalamu alaikum, Baghdad Ziyarat package ke details chahiye.");

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
            Baghdad Ziyarat Packages from{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-700">
              Hyderabad & Telangana
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mt-6 text-lg text-gray-300 max-w-3xl mx-auto"
          >
            Spiritually meaningful Baghdad Ziyarat packages to Najaf, Karbala, Baghdad, and Kufa with complete travel assistance from Hyderabad.
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
              BAGHDAD ZIYARAT PACKAGES
            </span>
            <h2 className="mt-5 text-3xl md:text-4xl font-bold text-gray-900">
              Ziyarat Packages Coming Soon
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Our Ziyarat packages for Baghdad and other holy sites are currently being prepared. For more information, please contact us directly.
            </p>
          </motion.div>

          <div className="flex justify-center">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-purple-50 border border-purple-100 rounded-3xl p-10 text-center max-w-2xl w-full shadow-lg"
            >
              <h3 className="text-2xl font-bold text-purple-900 mb-4">Upcoming Ziyarat Tours</h3>
              <p className="text-gray-700 mb-8 text-lg">
                Ziyarat packages will be announced very soon. Drop a message on our WhatsApp for updates, and we will notify you first.
              </p>
              <a
                href={`https://wa.me/919908519221?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-700 to-purple-600 hover:from-purple-800 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5" />
                Contact on WhatsApp
              </a>
            </motion.div>
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
              Book Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Baghdad Ziyarat</span> Package
            </h2>
            <p className="mt-8 text-lg text-gray-200 leading-8 max-w-3xl mx-auto">
              Contact AL-IFRAAH Tours & Travels for the best Baghdad Ziyarat packages from Hyderabad and Telangana.
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

export default BaghdadZiyaratPage;
