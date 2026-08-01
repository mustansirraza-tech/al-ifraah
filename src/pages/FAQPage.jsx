import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  HelpCircle,
  Search,
  MessageCircle,
  PhoneCall,
  CheckCircle2,
  Compass,
  FileText,
  Building2,
  Plane
} from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const faqCategories = [
  { id: "all", name: "All Questions", icon: HelpCircle },
  { id: "umrah", name: "Umrah & Hajj", icon: Compass },
  { id: "visa", name: "Visa & Documents", icon: FileText },
  { id: "hotel", name: "Hotels & Transport", icon: Building2 },
  { id: "booking", name: "Booking & Payments", icon: Plane },
];

const faqs = [
  {
    id: 1,
    category: "umrah",
    question: "What items and services are included in the Umrah Package?",
    answer: "Our all-inclusive Umrah packages include return air tickets, Saudi Umrah Visa with insurance, star accommodation close to Haram in Makkah & Madina, 3 times Indian buffet meals daily, complete internal transportation in luxury AC buses, Ziyarat tours in Makkah and Madina with an experienced guide, Zamzam water, and Umrah kit."
  },
  {
    id: 2,
    category: "umrah",
    question: "How long is the standard Umrah package duration?",
    answer: "Our standard group Umrah package duration is 14 to 15 days (typically 8-9 nights in Makkah and 5-6 nights in Madina). We also offer customized packages for shorter or longer stays according to your preference."
  },
  {
    id: 3,
    category: "visa",
    question: "What documents are required to apply for an Umrah Visa?",
    answer: "To process your Umrah visa, we require: (1) Original Passport with at least 6 months validity from the departure date, (2) 2 recent passport-size photographs with white background, (3) PAN Card / Aadhaar Card copy, and (4) Vaccine certificates if applicable."
  },
  {
    id: 4,
    category: "visa",
    question: "How many days does it take to process the Umrah Visa?",
    answer: "Visa processing usually takes between 3 to 5 working days after submitting all required valid documents to our office."
  },
  {
    id: 5,
    category: "hotel",
    question: "How far are the hotels from Masjid al-Haram and Masjid an-Nabawi?",
    answer: "We offer hotels ranging from 3-star to 5-star properties. Most of our selected hotels are within short walking distance (200m to 500m) from the Haram boundaries in both Makkah and Madina, or feature continuous free shuttle service."
  },
  {
    id: 6,
    category: "hotel",
    question: "What kind of food is provided during the trip?",
    answer: "We serve 3 daily hygienic meals prepared by experienced Indian chefs. The menu includes authentic Hyderabadi and North Indian dishes catered to the taste and comfort of our pilgrims."
  },
  {
    id: 7,
    category: "booking",
    question: "How can I book an Umrah or Hajj package with AL-IFRAAH?",
    answer: "You can book by visiting our office in Hyderabad (Hashmathpet, Old Bowenpally) or directly by contacting us via phone (+91 9908519221 / +91 9949274274) or WhatsApp. A initial deposit is required to confirm your seat booking."
  },
  {
    id: 8,
    category: "booking",
    question: "Is there any guide provided during Ziyarat tours?",
    answer: "Yes! Every group is accompanied by experienced scholars and group leaders (under the guidance of Prop. Moulana Hafiz Abdul Muqeet Raza Quadri) who guide pilgrims step-by-step through rituals, du'as, and historical Ziyarat locations in Makkah, Madina, and Baghdad."
  },
  {
    id: 9,
    category: "hotel",
    question: "Are child discounts available?",
    answer: "Yes, special discounted rates are available for infants (below 2 years) and children (2 to 11 years) sharing beds with parents."
  },
  {
    id: 10,
    category: "umrah",
    question: "Do you also arrange Baghdad & Karbala Ziyarat packages?",
    answer: "Yes! We specialize in Baghdad Sharif Ziyarat packages as well as combined Umrah + Baghdad Ziyarat tours with complete visa, flight, hotel, and local guidance."
  }
];

const FAQPage = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [openId, setOpenId] = useState(1);

  const whatsappMessage = encodeURIComponent("Assalamu Alaikum, I have a question regarding your packages.");

  const filteredFaqs = faqs.filter((faq) => {
    const matchesCategory = activeCategory === "all" || faq.category === activeCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <Header />

      {/* HERO SECTION */}
      <section className="relative min-h-[45vh] flex items-center bg-gradient-to-br from-[#1f0b34] via-[#2b1147] to-[#1f0b34] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-500/20 blur-3xl rounded-full"></div>
          <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-yellow-400/20 blur-3xl rounded-full"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-12 py-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-yellow-400 text-sm font-medium backdrop-blur-md mb-6">
              <HelpCircle className="w-4 h-4" /> Got Questions? We Have Answers
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
              Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Questions</span>
            </h1>

            <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
              Find clarity on our Umrah packages, visa assistance, hotel stays, food, and booking procedures.
            </p>
          </motion.div>

          {/* SEARCH BAR */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-8 max-w-2xl mx-auto relative"
          >
            <div className="relative flex items-center">
              <Search className="absolute left-5 w-5 h-5 text-gray-400 pointer-events-none" />
              <input
                type="text"
                placeholder="Search questions (e.g. visa, hotel, food, booking)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-13 pr-6 py-4 rounded-2xl bg-white/95 text-gray-900 placeholder-gray-500 shadow-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all text-base"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 text-xs font-semibold bg-gray-200 text-gray-700 px-3 py-1 rounded-lg hover:bg-gray-300"
                >
                  Clear
                </button>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ MAIN CONTENT */}
      <section className="py-16 flex-grow">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">

          {/* CATEGORY FILTERS */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {faqCategories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-2xl font-medium text-sm transition-all duration-300 shadow-sm ${
                    isActive
                      ? "bg-purple-700 text-white shadow-lg shadow-purple-700/30 scale-105"
                      : "bg-white text-gray-700 hover:bg-purple-50 border border-gray-200"
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? "text-yellow-400" : "text-purple-600"}`} />
                  {cat.name}
                </button>
              );
            })}
          </div>

          {/* ACCORDION LIST */}
          <div className="space-y-4">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq) => {
                const isOpen = openId === faq.id;
                return (
                  <motion.div
                    key={faq.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
                  >
                    <button
                      onClick={() => setOpenId(isOpen ? null : faq.id)}
                      className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 focus:outline-none"
                    >
                      <span className="font-semibold text-gray-900 text-base md:text-lg flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                        {faq.question}
                      </span>
                      <div className={`w-9 h-9 rounded-full bg-purple-50 flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 bg-purple-700 text-white" : "text-purple-700"}`}>
                        <ChevronDown className="w-5 h-5" />
                      </div>
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden border-t border-gray-50 bg-purple-50/30"
                        >
                          <div className="px-6 py-5 text-gray-600 leading-relaxed text-base">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })
            ) : (
              <div className="text-center py-12 bg-white rounded-2xl border border-gray-100">
                <HelpCircle className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-gray-800">No questions found</h3>
                <p className="text-gray-500 mt-1">Try searching with a different term or select another category.</p>
              </div>
            )}
          </div>

          {/* STILL HAVE QUESTIONS CTA */}
          <div className="mt-16 bg-gradient-to-r from-purple-900 via-[#2b1147] to-purple-950 rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-yellow-400/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="relative z-10 text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-white">Still have questions?</h3>
              <p className="mt-2 text-gray-300 max-w-md">
                Our friendly team is here to assist you with any inquiries regarding packages, bookings, or customized tours.
              </p>
            </div>

            <div className="relative z-10 flex flex-wrap justify-center gap-4">
              <a
                href={`https://wa.me/919908519221?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold flex items-center gap-2.5 shadow-lg transition-all"
              >
                <MessageCircle className="w-5 h-5" /> WhatsApp Us
              </a>
              <a
                href="tel:9908519221"
                className="px-6 py-3.5 rounded-2xl bg-yellow-500 hover:bg-yellow-400 text-purple-950 font-semibold flex items-center gap-2.5 shadow-lg transition-all"
              >
                <PhoneCall className="w-5 h-5" /> Call Now
              </a>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQPage;
