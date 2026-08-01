import { motion } from "framer-motion";
import {
  Award,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
} from "lucide-react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const hajjPackages = [
  {
    id: 1,
    name: "Standard Hajj Package",
    duration: "21 Days / 20 Nights",
    price: "₹1,10,000",
    features: [
      "Economy flights from Hyderabad",
      "3-star hotel near Haram",
      "Shared transportation",
      "Group Ziyarat tours",
      "Visa processing included",
      "24/7 customer support",
    ],
    popular: false,
  },
  {
    id: 2,
    name: "Premium Hajj Package",
    duration: "21 Days / 20 Nights",
    price: "₹1,65,000",
    features: [
      "Premium flights from Hyderabad",
      "4-star hotel near Haram",
      "Private AC transportation",
      "Guided Ziyarat with scholar",
      "VIP visa assistance",
      "Personal group leader",
    ],
    popular: true,
  },
  {
    id: 3,
    name: "Luxury Hajj Package",
    duration: "21 Days / 20 Nights",
    price: "₹2,40,000",
    features: [
      "Business class flights",
      "5-star hotel premium location",
      "Private luxury vehicle",
      "Personal guide & caretaker",
      "Priority visa processing",
      "Exclusive amenities",
    ],
    popular: false,
  },
  {
    id: 4,
    name: "Family Hajj Package",
    duration: "21 Days / 20 Nights",
    price: "₹1,35,000/person",
    features: [
      "Family-friendly accommodation",
      "Connecting rooms available",
      "Child-friendly arrangements",
      "Dedicated family guide",
      "Flexible meal options",
      "Special elder care",
    ],
    popular: false,
  },
];

const inclusions = [
  "Hajj visa fees & processing",
  "Round-trip flights from Hyderabad",
  "Hotel accommodation in Makkah & Madina",
  "Airport transfers in Saudi Arabia",
  "Local transportation during Hajj",
  "Group guidance & spiritual support",
  "Document assistance",
  "WhatsApp customer support",
  "Travel insurance",
  "Ziyarat arrangements",
];

const HajjPackagesPage = () => {
  const whatsappMessage = encodeURIComponent("Assalamu alaikum, Hajj package ke details chahiye.");

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
            Hajj Packages from{" "}
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
            Complete Hajj packages with flights, hotels, transportation, visa assistance, and dedicated spiritual guidance from Hyderabad and across Telangana.
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
              HAJJ PACKAGES HYDERABAD
            </span>
            <h2 className="mt-5 text-3xl md:text-4xl font-bold text-gray-900">
              Hajj Packages Coming Soon
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Our Hajj packages are currently being finalized. Please wait for the best services and arrangements, or contact us directly for more information.
            </p>
          </motion.div>

          <div className="flex justify-center">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-purple-50 border border-purple-100 rounded-3xl p-10 text-center max-w-2xl w-full shadow-lg"
            >
              <h3 className="text-2xl font-bold text-purple-900 mb-4">Hajj 2024-25 Bookings</h3>
              <p className="text-gray-700 mb-8 text-lg">
                Packages will be announced very soon. Send us a message on WhatsApp for updates, and we will notify you as soon as they are available.
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

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                What's Included in Every Hajj Package
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {inclusions.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-700 to-purple-500 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1564769625905-50e93615e769?q=80&w=800&auto=format&fit=crop"
                alt="Hajj pilgrimage Makkah"
                className="w-full h-96 object-cover rounded-3xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 to-transparent rounded-3xl"></div>
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
              Book Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Hajj Package</span> Today
            </h2>
            <p className="mt-8 text-lg text-gray-200 leading-8 max-w-3xl mx-auto">
              Contact AL-IFRAAH Tours & Travels for the best Hajj packages from Hyderabad and Telangana.
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

export default HajjPackagesPage;
