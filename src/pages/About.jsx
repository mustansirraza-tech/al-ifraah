import React, { useEffect } from "react";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  MapPin,
  Heart,
  Shield,
  Star,
  MessageCircle,
  Target,
  Users,
  Compass,
  Eye,
  Award,
} from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import kaabaImg from "../assets/images/kaaba1.png";
import madinaImg from "../assets/images/madina.png";

const AboutPage = () => {
  const message = encodeURIComponent("Assalamu alaikum, aur packages ke details chahiye");

  // Setting SEO Meta Title and Description
  useEffect(() => {
    document.title = "About AL-IFRAAH | Trusted Hajj, Umrah & Baghdad Ziyarat Services Hyderabad";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Learn about AL-IFRAAH, a trusted Hajj, Umrah, and Baghdad Ziyarat travel company based in Secunderabad, Hyderabad, serving pilgrims across Telangana with professional travel support."
      );
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content =
        "Learn about AL-IFRAAH, a trusted Hajj, Umrah, and Baghdad Ziyarat travel company based in Secunderabad, Hyderabad, serving pilgrims across Telangana with professional travel support.";
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <>
      <Header />

      <main className="bg-white text-gray-800">
        {/* Awesome Hero Section */}
        <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#1f0b34] via-[#2b1147] to-[#1f0b34] text-white overflow-hidden min-h-[90vh] flex items-center">
          {/* Animated Background Elements */}
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-[600px] h-[600px] bg-purple-500/20 blur-[120px] rounded-full pointer-events-none"
          />
          <motion.div
            animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-yellow-400/20 blur-[100px] rounded-full pointer-events-none"
          />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 items-center">
            {/* TEXT CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-purple-400/30 bg-purple-500/10 backdrop-blur-md text-yellow-300 font-medium text-sm shadow-sm mb-6"
              >
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                Serving Pilgrims with Trust, Integrity & Excellence
              </motion.div>

              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight text-white mb-6">
                About AL-IFRAAH
              </h1>

              <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
                Every sacred journey begins with a sincere intention. At AL-IFRAAH, we are honored to be a part of that journey by helping pilgrims travel with confidence, comfort, and complete peace of mind.
              </p>

              <p className="text-base text-gray-400 leading-relaxed mb-8">
                Based in Secunderabad, Hyderabad, AL-IFRAAH is committed to providing professional Hajj, Umrah, and Baghdad Ziyarat travel services for pilgrims across Telangana. Our purpose is simple: to make every journey organized, transparent, and spiritually rewarding through dedicated service and careful planning.
              </p>

              <a
                href={`https://wa.me/919908519221?text=${message}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-yellow-500 to-yellow-600 text-[#1f0b34] font-bold text-lg shadow-[0_0_30px_rgba(234,179,8,0.3)] hover:shadow-[0_0_40px_rgba(234,179,8,0.5)] hover:scale-105 transition-all"
              >
                <MessageCircle className="w-6 h-6" />
                Contact on WhatsApp
              </a>
            </motion.div>

            {/* IMAGE COMPOSITION */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="relative h-[600px] hidden lg:block"
            >
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 right-0 w-[80%] h-[450px] rounded-[2rem] overflow-hidden border-2 border-white/20 shadow-2xl z-10"
              >
                <img
                  src={kaabaImg}
                  alt="Kaaba"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1f0b34]/80 to-transparent"></div>
              </motion.div>

              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-0 left-0 w-[60%] h-[350px] rounded-[2rem] overflow-hidden border-4 border-[#2b1147] shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-20"
              >
                <img
                  src={madinaImg}
                  alt="Madina"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
                className="absolute top-1/2 left-[10%] transform -translate-y-1/2 z-30 bg-white/10 backdrop-blur-xl border border-white/20 p-4 rounded-2xl shadow-xl flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 flex items-center justify-center">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg">Trusted</h4>
                  <p className="text-sm text-yellow-300">By Pilgrims</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* WHO WE ARE & OUR PURPOSE (Split Section) */}
        <section className="py-24 bg-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-96 h-96 bg-purple-100/40 blur-3xl rounded-full"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-100/40 blur-3xl rounded-full"></div>

          <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 text-purple-700 font-semibold uppercase tracking-wider mb-4">
                <Users className="w-5 h-5" />
                Who We Are
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">More Than a Travel Company</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
                <p>
                  AL-IFRAAH was founded with the belief that arranging a pilgrimage is not simply about booking flights or hotels. It is about helping people fulfill one of the most meaningful journeys of their lives.
                </p>
                <p>
                  Every pilgrim has different expectations, different responsibilities, and different dreams. Some travel for the very first time, while others wish to perform Umrah with their parents, spouse, or children. Understanding these different needs is what defines our approach.
                </p>
                <p>
                  We focus on careful planning, honest communication, and responsible travel management so every pilgrim can devote their attention to worship rather than worrying about travel arrangements.
                </p>
                <div className="p-4 bg-purple-50 rounded-xl border-l-4 border-purple-600 font-medium text-purple-900">
                  Our role is to simplify the journey while preserving its spiritual significance.
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#1f0b34] to-purple-900 rounded-[2.5rem] p-10 text-white shadow-2xl relative overflow-hidden flex flex-col justify-center"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400/10 blur-3xl rounded-full"></div>

              <div className="relative z-10">
                <div className="flex items-center gap-3 text-yellow-400 font-semibold uppercase tracking-wider mb-4">
                  <Target className="w-5 h-5" />
                  Our Purpose
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Why AL-IFRAAH Exists</h2>
                <div className="space-y-5 text-purple-100 leading-relaxed text-lg">
                  <p className="font-semibold text-yellow-400">
                    Pilgrims deserve a travel partner who values honesty as much as professionalism.
                  </p>
                  <p>
                    Our purpose is to remove unnecessary stress from the pilgrimage experience by providing reliable guidance, organized travel planning, and dedicated assistance throughout the journey.
                  </p>
                  <p>
                    We believe that every traveller should receive clear information, respectful service, and dependable support from the moment they inquire until they safely return home.
                  </p>
                  <p>
                    For us, success is measured by the confidence our pilgrims place in us and the relationships we build through sincere service.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section 
          className="py-24 relative overflow-hidden flex items-center justify-center min-h-[60vh] bg-fixed bg-center bg-cover" 
          style={{ backgroundImage: `url(${kaabaImg})` }}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-[#1f0b34]/85 backdrop-blur-sm"></div>

          <div className="max-w-5xl mx-auto px-6 lg:px-12 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-xl border border-white/20 p-10 md:p-16 rounded-[3rem] shadow-2xl"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-yellow-500/20 text-yellow-400 mb-6 border border-yellow-500/30">
                <Heart className="w-8 h-8 fill-yellow-400" />
              </div>
              <h2 className="text-sm font-bold text-yellow-400 uppercase tracking-widest mb-4">
                Our Philosophy
              </h2>
              <h3 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
                Service Built on Responsibility
              </h3>

              <div className="grid md:grid-cols-2 gap-6 text-lg md:text-xl text-purple-100 font-medium italic mb-10 text-left">
                <div className="flex gap-4 items-start bg-white/5 p-6 rounded-2xl border border-white/10">
                  <Star className="w-6 h-6 text-yellow-400 shrink-0 mt-1" />
                  <p>Every booking represents someone's dream.</p>
                </div>
                <div className="flex gap-4 items-start bg-white/5 p-6 rounded-2xl border border-white/10">
                  <Star className="w-6 h-6 text-yellow-400 shrink-0 mt-1" />
                  <p>Someone may have waited years to perform Umrah.</p>
                </div>
                <div className="flex gap-4 items-start bg-white/5 p-6 rounded-2xl border border-white/10">
                  <Star className="w-6 h-6 text-yellow-400 shrink-0 mt-1" />
                  <p>Someone may be travelling with elderly parents.</p>
                </div>
                <div className="flex gap-4 items-start bg-white/5 p-6 rounded-2xl border border-white/10">
                  <Star className="w-6 h-6 text-yellow-400 shrink-0 mt-1" />
                  <p>Someone may be preparing for Hajj after saving for many years.</p>
                </div>
              </div>

              <p className="text-lg text-gray-300 mb-10 max-w-3xl mx-auto">
                These journeys deserve careful planning and genuine attention. That is why we approach every enquiry with responsibility rather than treating it as just another booking.
              </p>

              <div className="inline-block px-10 py-5 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-2xl shadow-[0_0_30px_rgba(234,179,8,0.3)]">
                <p className="text-xl font-bold text-[#1f0b34]">
                  "Serve every pilgrim with honesty, professionalism, and respect."
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* WHAT MAKES US DIFFERENT */}
        <section className="py-24 bg-white relative">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">What Makes Us Different</h2>
              <p className="text-lg text-gray-600">
                Many travel companies provide travel packages. We aim to provide something beyond that.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Personalized Planning",
                  icon: <Compass className="w-8 h-8" />,
                  text: "Instead of offering the same solution to everyone, we understand each pilgrim's travel preferences and recommend packages that best suit their needs.",
                },
                {
                  title: "Clear Communication",
                  icon: <MessageCircle className="w-8 h-8" />,
                  text: "Every traveller deserves complete information before making a decision. We explain package details, travel procedures, documentation requirements, and available options in a clear and transparent manner.",
                },
                {
                  title: "Attention to Detail",
                  icon: <Eye className="w-8 h-8" />,
                  text: "Small details often create the best travel experience. From documentation to accommodation planning, every stage receives proper attention.",
                },
                {
                  title: "Long-Term Relationships",
                  icon: <Heart className="w-8 h-8" />,
                  text: "Our objective is not simply to complete one booking. We want families to feel confident recommending AL-IFRAAH to their relatives, friends, and future generations. Trust grows through consistency, and consistency defines our work.",
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-purple-50/50 border border-purple-100 p-8 rounded-3xl hover:shadow-lg transition-all group"
                >
                  <div className="w-14 h-14 bg-purple-100 text-purple-700 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-purple-700 group-hover:text-white transition-colors">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* OUR APPROACH & COMMITMENT */}
        <section className="py-24 bg-gray-50 relative border-y border-gray-200">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Approach</h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  Rather than focusing only on travel arrangements, we focus on the complete pilgrimage experience.
                </p>
                <div className="border-l-4 border-yellow-500 pl-6 py-2">
                  <p className="font-semibold text-gray-800">
                    Our process begins by understanding the pilgrim's requirements.
                  </p>
                </div>
                <p>
                  After understanding their expectations, we help them choose the most suitable travel option and provide continuous assistance throughout the planning process.
                </p>
                <p>
                  This personalized approach allows us to provide better guidance and a smoother overall experience.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Commitment</h2>
              <p className="text-lg text-gray-600 mb-6">
                Every pilgrim deserves reliability. At AL-IFRAAH, we remain committed to:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                {[
                  "Honest guidance",
                  "Professional travel planning",
                  "Transparent communication",
                  "Organized documentation support",
                  "Comfortable travel arrangements",
                  "Responsive customer assistance",
                  "Respectful service",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-purple-600 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-gray-600 italic">
                These commitments guide every interaction with our pilgrims.
              </p>
            </motion.div>
          </div>
        </section>

        {/* BUILDING TRUST & SERVING TELANGANA */}
        <section className="py-24 bg-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="order-2 lg:order-1"
              >
                <div className="bg-yellow-50 border border-yellow-200 p-8 rounded-[2.5rem]">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Building Trust Through Service</h2>
                  <div className="space-y-4 text-gray-600 text-lg">
                    <p className="font-bold text-xl text-yellow-700">
                      Trust cannot be advertised. It must be earned.
                    </p>
                    <p>For that reason, we believe every satisfied pilgrim becomes our strongest recommendation.</p>
                    <p>
                      Our objective is to create an experience that people remember with appreciation and confidently recommend to others.
                    </p>
                    <p>
                      Whether someone contacts us for information or chooses us for their sacred journey, we strive to provide the same level of professionalism and respect.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="order-1 lg:order-2"
              >
                <div className="flex items-center gap-3 text-purple-700 font-semibold uppercase tracking-wider mb-4">
                  <MapPin className="w-5 h-5" />
                  Our Reach
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Serving Pilgrims Across Telangana</h2>
                <div className="space-y-4 text-gray-600 text-lg">
                  <p>Although our office is located in Secunderabad, our services are available for pilgrims across Telangana.</p>
                  <p>
                    We welcome enquiries from <span className="font-semibold text-purple-800">Hyderabad, Karimnagar, Warangal, Nizamabad, Peddapalli, Khammam, Sangareddy, Siddipet, Adilabad, Mahabubnagar, Jagitial, Nalgonda</span>, and surrounding regions.
                  </p>
                  <p>With digital communication and dedicated customer support, we make it easy for pilgrims from any part of Telangana to plan their journey with confidence.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* LOOKING TOWARDS THE FUTURE & INVITATION (Footer CTA) */}
        <section className="py-24 bg-gradient-to-br from-[#1f0b34] to-[#2b1147] text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>
          <div className="max-w-4xl mx-auto px-6 lg:px-12 relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-sm font-bold text-yellow-400 uppercase tracking-widest mb-4">
                Looking Towards The Future
              </h2>
              <h3 className="text-3xl md:text-4xl font-bold mb-6">To Serve Pilgrims Better Than Yesterday</h3>

              <div className="space-y-4 text-purple-200 text-lg mb-12">
                <p>As AL-IFRAAH continues to grow, our focus remains unchanged.</p>
                <p>
                  We aim to strengthen our services, improve every stage of the pilgrim experience, embrace modern technology, and continue building long-term trust with families across Telangana.
                </p>
                <p>
                  Our vision is to become a respected name known for reliability, professionalism, and sincere service in Islamic travel.
                </p>
              </div>

              <div className="w-24 h-1 bg-yellow-500 mx-auto mb-12 rounded-full"></div>

              <h3 className="text-3xl font-bold mb-6 text-white">Our Invitation</h3>
              <p className="text-lg text-purple-100 mb-8">
                If you are planning your first Umrah, preparing for Hajj, or looking for a trusted travel partner for Baghdad Ziyarat, we invite you to experience the AL-IFRAAH difference. Allow us to take care of the planning while you prepare for a journey filled with faith, devotion, and unforgettable memories.
              </p>
              <p className="text-xl font-medium text-yellow-400 mb-10">
                We look forward to serving you with honesty, professionalism, and dedication.
              </p>

              <a
                href={`https://wa.me/919908519221?text=${message}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-yellow-500 to-yellow-600 text-[#1f0b34] font-bold text-lg shadow-[0_0_30px_rgba(234,179,8,0.3)] hover:scale-105 transition-all"
              >
                <MessageCircle className="w-6 h-6" />
                Contact Us Today
              </a>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default AboutPage;