import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Plane,
  Building2,
  FileCheck,
  Bus,
  CheckCircle2,
  Globe,
  ArrowRight,
} from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const services = [
  {
    icon: <Plane className="w-8 h-8" />,
    title: "Hajj Packages",
    slug: "hajj-packages",
    description:
      "Complete Hajj packages with flights, hotels, transportation, and spiritual guidance from Hyderabad and Telangana.",
    features: [
      "Hajj visa support",
      "Flight arrangements",
      "Hotel bookings",
      "Group coordination",
      "Transportation services",
      "Pilgrimage guidance",
    ],
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Umrah Packages",
    slug: "umrah-packages",
    description:
      "Affordable, deluxe, Ramadan, and luxury Umrah packages from Hyderabad for individuals, families, and groups.",
    features: [
      "Umrah visa processing",
      "Hotel accommodation",
      "Airport pickup & drop",
      "Guided ziyarat",
      "Makkah & Madina transport",
      "Customer assistance",
    ],
  },
  {
    icon: <Building2 className="w-8 h-8" />,
    title: "Baghdad Ziyarat Packages",
    slug: "baghdad-ziyarat",
    description:
      "Spiritually meaningful Ziyarat tours to Baghdad, Najaf, and Karbala from Hyderabad with complete travel assistance.",
    features: [
      "Guided Islamic ziyarat",
      "Comfortable hotels",
      "Group travel support",
      "Airport transfers",
      "Dedicated assistance",
    ],
  },
  {
    icon: <FileCheck className="w-8 h-8" />,
    title: "Visa Assistance Services",
    slug: "visa-assistance",
    description:
      "Complete visa and travel documentation support for Hajj, Umrah, and Islamic tours from Hyderabad.",
    features: [
      "Visa processing",
      "Documentation guidance",
      "Travel consultation",
      "Application assistance",
    ],
  },
  {
    icon: <Bus className="w-8 h-8" />,
    title: "Hotel & Transportation Services",
    slug: "hotel-transport",
    description:
      "Comfortable accommodation and reliable transportation for pilgrims from Hyderabad and Telangana.",
    features: [
      "Luxury hotels",
      "Private transport",
      "Airport pickup",
      "Comfortable travel",
    ],
  },
];

const ServicesPage = () => {
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
            Our Islamic{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-700">
              Travel Services
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mt-6 text-lg text-gray-300 max-w-3xl mx-auto"
          >
            AL-IFRAAH Tours & Travels offers complete Islamic travel solutions for Hajj, Umrah, and Baghdad Ziyarat from Hyderabad and across Telangana.
          </motion.p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-10">
            {services.map((service, index) => (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 45 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group relative bg-white border border-purple-100 rounded-[35px] p-8 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-100/0 to-yellow-100/0 group-hover:from-purple-100/30 group-hover:to-yellow-100/30 transition-all duration-500"></div>

                <div className="relative z-10 w-16 h-16 rounded-2xl bg-gradient-to-r from-purple-700 to-purple-500 text-white flex items-center justify-center shadow-lg mb-7">
                  {service.icon}
                </div>

                <h3 className="relative z-10 text-3xl font-bold text-gray-900">
                  {service.title}
                </h3>

                <p className="relative z-10 mt-4 text-gray-600 leading-8 text-lg">
                  {service.description}
                </p>

                <div className="relative z-10 mt-6 space-y-3">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="text-yellow-600 w-5 h-5" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link
                  to={`/services/${service.slug}`}
                  className="relative z-10 mt-8 inline-flex items-center gap-2 text-purple-700 font-semibold hover:text-purple-900 transition-colors group/link"
                >
                  View Details
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage;
