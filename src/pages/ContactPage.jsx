import { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  Clock,
  Send,
  CheckCircle2,
  User,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Building,
  Navigation
} from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const contactCards = [
  {
    icon: Phone,
    title: "Call Us Direct",
    subtitle: "Quick phone consultation",
    details: ["+91 9908519221", "+91 9949274274"],
    actionText: "Call Now",
    actionLink: "tel:9908519221",
    color: "from-purple-600 to-indigo-600",
    badge: "24/7 Available"
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Support",
    subtitle: "Instant chat & quotes",
    details: ["+91 9908519221"],
    actionText: "Chat on WhatsApp",
    actionLink: "https://wa.me/919908519221?text=Assalamu%20Alaikum,%20I%20want%20information%20about%20Umrah/Hajj%20packages.",
    color: "from-emerald-600 to-teal-600",
    badge: "Fastest Response"
  },
  {
    icon: Mail,
    title: "Email Us",
    subtitle: "Send queries anytime",
    details: ["alifrahtravels@gmail.com"],
    actionText: "Send Email",
    actionLink: "mailto:alifrahtravels@gmail.com",
    color: "from-blue-600 to-cyan-600",
    badge: "Official Mail"
  },
  {
    icon: Clock,
    title: "Office Hours",
    subtitle: "Visit our Hyderabad office",
    details: ["Mon - Sat: 9:00 AM - 8:00 PM", "Sunday: 10:00 AM - 5:00 PM"],
    actionText: "Get Directions",
    actionLink: "https://www.google.com/maps/place/AL+IFRAAH+TOURS+%26+HAJJ+UMRAH+TRAVELS/@17.472783,78.486299,17z",
    color: "from-amber-600 to-yellow-600",
    badge: "Walk-in Welcome"
  },
];

const servicesList = [
  { id: "umrah", name: "Umrah Packages (14-15 Days)" },
  { id: "hajj", name: "Hajj Packages" },
  { id: "baghdad", name: "Baghdad Sharif Ziyarat" },
  { id: "nikah", name: "Nikah Madina Group Package" },
  { id: "visa", name: "Saudi Visa Assistance" },
  { id: "hotel", name: "Hotel & Transport Services" },
];

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "umrah",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    // Format WhatsApp message for auto-redirect inquiry option
    const waText = encodeURIComponent(
      `*New Contact Inquiry*\n` +
      `*Name:* ${formData.name}\n` +
      `*Phone:* ${formData.phone}\n` +
      `*Email:* ${formData.email || "N/A"}\n` +
      `*Service:* ${formData.service}\n` +
      `*Message:* ${formData.message}`
    );

    // Open WhatsApp in new tab after submit
    setTimeout(() => {
      window.open(`https://wa.me/919908519221?text=${waText}`, "_blank");
    }, 800);

    setTimeout(() => setSubmitted(false), 5000);
    setFormData({ name: "", phone: "", email: "", service: "umrah", message: "" });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <Header />

      {/* HERO BANNER */}
      <section className="relative min-h-[48vh] flex items-center bg-gradient-to-br from-[#1f0b34] via-[#2b1147] to-[#1f0b34] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-[550px] h-[550px] bg-purple-500/20 blur-3xl rounded-full"></div>
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-yellow-400/20 blur-3xl rounded-full"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-yellow-400 text-sm font-semibold backdrop-blur-md mb-6 border border-white/10">
              <Sparkles className="w-4 h-4 text-yellow-400" /> Always At Your Service
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
              Get In Touch With <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-600">AL-IFRAAH</span>
            </h1>

            <p className="mt-6 text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Have questions about Umrah, Hajj, or Baghdad Ziyarat packages? Visit our Hyderabad office or drop us a message for personalized assistance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* QUICK CONTACT CARDS */}
      <section className="-mt-12 relative z-20 max-w-7xl mx-auto px-6 lg:px-12 w-full">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="bg-white rounded-3xl p-6 shadow-xl border border-gray-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${card.color} text-white flex items-center justify-center shadow-lg`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-purple-50 text-purple-700">
                      {card.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900">{card.title}</h3>
                  <p className="text-xs text-gray-500 mb-4">{card.subtitle}</p>

                  <div className="space-y-1 mb-6">
                    {card.details.map((detail, dIdx) => (
                      <p key={dIdx} className="text-sm font-semibold text-gray-700">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>

                {card.actionLink && (
                  <a
                    href={card.actionLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 rounded-xl bg-purple-50 hover:bg-purple-700 hover:text-white text-purple-700 font-semibold text-sm flex items-center justify-center gap-2 transition-all group"
                  >
                    {card.actionText}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                )}
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* FORM & OFFICE DETAILS SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            
            {/* LEFT SIDE: OFFICE DETAILS & LEADERSHIP */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5 space-y-8"
            >
              <div>
                <span className="text-yellow-600 font-bold uppercase tracking-wider text-sm">
                  Visit Our Head Office
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2 mb-4 leading-tight">
                  We Are Here To Guide Your Sacred Journey
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Our dedicated team ensures every aspect of your pilgrimage is organized with sincerity, luxury, and spiritual peace of mind.
                </p>
              </div>

              {/* ADDRESS CARD */}
              <div className="p-6 rounded-3xl bg-gradient-to-br from-purple-50 via-white to-amber-50/40 border border-purple-100 shadow-md space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-purple-700 text-yellow-400 flex items-center justify-center flex-shrink-0 shadow-md">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">Registered Office Address</h4>
                    <p className="text-gray-600 text-sm mt-1 leading-relaxed">
                      9-2-75/3, near Star Hotel, Hashmathpet, Old Bowenpally, Secunderabad, Hyderabad, Telangana 500009
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-t border-purple-100 flex items-center justify-between text-xs text-purple-800 font-semibold">
                  <span className="flex items-center gap-1.5">
                    <Building className="w-4 h-4 text-purple-600" /> Landmark: Near Star Hotel
                  </span>
                  <a
                    href="https://maps.google.com/?q=Hashmathpet+Old+Bowenpally+Secunderabad+Hyderabad"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-yellow-700 hover:underline"
                  >
                    <Navigation className="w-3.5 h-3.5" /> Navigate
                  </a>
                </div>
              </div>

              {/* LEADERSHIP TRUST BADGE */}
              <div className="p-6 rounded-3xl bg-gradient-to-r from-[#2b1147] to-[#1f0b34] text-white shadow-xl relative overflow-hidden">
                <div className="absolute right-0 bottom-0 w-36 h-36 bg-yellow-400/10 rounded-full blur-2xl pointer-events-none"></div>
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 rounded-full bg-yellow-500/20 text-yellow-400 flex items-center justify-center border border-yellow-400/30">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs text-yellow-400 font-semibold uppercase tracking-wider">Guided By</span>
                    <h5 className="font-bold text-lg text-white">Moulana Hafiz Abdul Muqeet Raza Quadri</h5>
                  </div>
                </div>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Personalized attention & scholarly guidance for every pilgrim to ensure rituals are performed strictly according to Sunnah.
                </p>
              </div>

              {/* DIRECT CALL BUTTONS */}
              <div className="grid grid-cols-2 gap-4">
                <a
                  href="tel:9908519221"
                  className="p-4 rounded-2xl bg-gray-900 hover:bg-black text-white text-center font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-yellow-400" /> Call 9908519221
                </a>
                <a
                  href="tel:9949274274"
                  className="p-4 rounded-2xl bg-purple-700 hover:bg-purple-800 text-white text-center font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-yellow-400" /> Call 9949274274
                </a>
              </div>
            </motion.div>

            {/* RIGHT SIDE: INTERACTIVE FORM */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7"
            >
              <div className="bg-white rounded-3xl shadow-2xl border border-purple-100 p-8 md:p-12 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 rounded-bl-full pointer-events-none"></div>

                <div className="mb-8">
                  <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900">Send Us an Inquiry</h3>
                  <p className="text-gray-500 text-sm mt-1">
                    Fill out the form below. Submitting will also connect you directly to our WhatsApp support team for instant response!
                  </p>
                </div>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-16 px-4"
                  >
                    <div className="w-20 h-20 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 flex items-center justify-center mx-auto mb-6 shadow-xl text-white">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-2">Inquiry Submitted Successfully!</h4>
                    <p className="text-gray-600 max-w-md mx-auto">
                      Opening WhatsApp to send your inquiry details to our booking counselor...
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <div className="relative flex items-center">
                          <User className="absolute left-4 w-5 h-5 text-gray-400 pointer-events-none" />
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="e.g. Mohammed Raza"
                            className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-gray-200 focus:border-purple-600 focus:ring-2 focus:ring-purple-100 outline-none transition-all text-gray-900"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Phone / WhatsApp Number *
                        </label>
                        <div className="relative flex items-center">
                          <Phone className="absolute left-4 w-5 h-5 text-gray-400 pointer-events-none" />
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            placeholder="+91 9908519221"
                            className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-gray-200 focus:border-purple-600 focus:ring-2 focus:ring-purple-100 outline-none transition-all text-gray-900"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Email Address (Optional)
                        </label>
                        <div className="relative flex items-center">
                          <Mail className="absolute left-4 w-5 h-5 text-gray-400 pointer-events-none" />
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="name@example.com"
                            className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-gray-200 focus:border-purple-600 focus:ring-2 focus:ring-purple-100 outline-none transition-all text-gray-900"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Service Interested In *
                        </label>
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-purple-600 focus:ring-2 focus:ring-purple-100 outline-none transition-all text-gray-900 bg-white"
                        >
                          {servicesList.map((srv) => (
                            <option key={srv.id} value={srv.name}>
                              {srv.name}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Your Message / Travel Dates *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="4"
                        placeholder="Mention number of pilgrims, expected departure month, special requirements..."
                        className="w-full p-4 rounded-xl border border-gray-200 focus:border-purple-600 focus:ring-2 focus:ring-purple-100 outline-none transition-all text-gray-900 resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="group w-full bg-gradient-to-r from-purple-700 via-purple-800 to-indigo-900 hover:from-purple-800 hover:to-indigo-950 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-xl flex items-center justify-center gap-3 transition-all duration-300 hover:scale-[1.01]"
                    >
                      <span>Submit Inquiry on WhatsApp</span>
                      <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform text-yellow-400" />
                    </button>
                  </form>
                )}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* GOOGLE MAPS EMBED SECTION */}
      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-10">
            <span className="text-purple-700 font-bold uppercase tracking-wider text-xs">Interactive Map</span>
            <h2 className="text-3xl font-extrabold text-gray-900 mt-1">Locate Our Office</h2>
            <p className="text-gray-600 text-sm mt-1">Visit us near Star Hotel, Hashmathpet, Old Bowenpally, Secunderabad</p>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-200 h-[450px] relative bg-gray-200">
            <iframe
              title="AL-IFRAAH TOURS & HAJJ UMRAH TRAVELS Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.7268517503458!2d78.48629897579995!3d17.472782983429028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9b4bec66c409%3A0x7dd79b1403977eef!2sAL%20IFRAAH%20TOURS%20%26%20HAJJ%20UMRAH%20TRAVELS!5e0!3m2!1sen!2sin!4v1785060636632!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              className="w-full h-full filter contrast-105"
            ></iframe>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;
