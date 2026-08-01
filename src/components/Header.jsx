// Header.jsx

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Menu,
  X,
  Phone,
  MapPin,
  MessageCircle,
  ChevronDown,
} from "lucide-react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Packages", path: "/umrah-packages" },
  { name: "Gallery", path: "/gallery" },
  { name: "FAQ", path: "/faq" },
  { name: "Contact", path: "/contact" },
];

const servicesLinks = [
  { name: "Hajj Packages", path: "/services/hajj-packages" },
  { name: "Umrah Packages", path: "/services/umrah-packages" },
  { name: "Baghdad Ziyarat", path: "/services/baghdad-ziyarat" },
  { name: "Visa Assistance", path: "/services/visa-assistance" },
  { name: "Hotel & Transport", path: "/services/hotel-transport" },
];

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const message = encodeURIComponent("Assalamu alaikum, aur packages ke details chahiye");
  return (
    <>
      {/* TOP BAR */}
      <div className="hidden md:block bg-[#2b1147] text-white py-3 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center justify-between gap-3 text-sm">

          {/* Address */}
          <div className="hidden md:flex items-center gap-2 text-gray-200">
            <MapPin className="w-4 h-4 text-yellow-400" />

            <span>
              9-2-75/3, near Star Hotel, Hashmathpet,
              Old Bowenpally, Secunderabad,
              Hyderabad, Telangana 500009
            </span>
          </div>

          {/* Contact */}
          <div className="flex items-center gap-6">

            <a
              href="tel:9908519221"
              className="flex items-center gap-2 hover:text-yellow-400 transition-all"
            >
              <Phone className="w-4 h-4" />

              9908519221
            </a>

            <a
              href="tel:9949274274"
              className="flex items-center gap-2 hover:text-yellow-400 transition-all"
            >
              <Phone className="w-4 h-4" />

              9949274274
            </a>
          </div>
        </div>
      </div>

      {/* MAIN HEADER */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl shadow-lg border-b border-purple-100">

        <div className="max-w-7xl mx-auto px-6 lg:px-12">

          <div className="flex items-center justify-between h-[90px]">

            {/* LOGO */}
            <button
              onClick={() => (window.location.href = "/")}
              className="text-left"
            >
              <h1 className="text-3xl font-black text-[#2b1147]">
                AL-IFRAAH
              </h1>

              <p className="text-sm text-yellow-600 font-semibold tracking-[3px]">
                TOURS & TRAVELS
              </p>
            </button>

            {/* DESKTOP NAV */}
            <nav className="hidden lg:flex items-center gap-10">

              {navLinks.map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  className="text-gray-700 font-medium hover:text-purple-700 transition-all duration-300"
                >
                  {item.name}
                </Link>
              ))}

              {/* Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setServicesDropdown(true)}
                onMouseLeave={() => setServicesDropdown(false)}
              >
                <Link
                  to="/services"
                  className="text-gray-700 font-medium hover:text-purple-700 transition-all duration-300 flex items-center gap-1"
                >
                  Services
                  <ChevronDown className="w-4 h-4" />
                </Link>

                <AnimatePresence>
                  {servicesDropdown && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-purple-100 py-2 z-50"
                    >
                      {servicesLinks.map((service, index) => (
                        <Link
                          key={index}
                          to={service.path}
                          className="block px-6 py-3 text-gray-700 hover:bg-purple-50 hover:text-purple-700 transition-all"
                        >
                          {service.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </nav>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-4">

              <a
                href={`https://wa.me/919908519221?text=${message}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group px-7 py-4 rounded-2xl bg-gradient-to-r from-purple-700 to-purple-500 text-white font-semibold shadow-xl flex items-center gap-3 hover:scale-105 transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5" />

                WhatsApp
              </a>
            </div>

            {/* MOBILE BUTTON */}
            <button
              onClick={() => setMobileMenu(!mobileMenu)}
              className="lg:hidden w-12 h-12 rounded-xl bg-gradient-to-r from-purple-700 to-purple-500 text-white flex items-center justify-center"
            >
              {mobileMenu ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        {mobileMenu && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:hidden bg-white border-t border-purple-100 shadow-xl"
          >
            <div className="px-6 py-8 space-y-6">

              {navLinks.map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  onClick={() => setMobileMenu(false)}
                  className="block text-lg font-medium text-gray-700 hover:text-purple-700"
                >
                  {item.name}
                </Link>
              ))}

              <div>
                <button
                  onClick={() => setServicesDropdown(!servicesDropdown)}
                  className="flex items-center justify-between w-full text-lg font-medium text-gray-700 mb-2"
                >
                  Services
                  <ChevronDown className={`w-5 h-5 transition-transform ${servicesDropdown ? 'rotate-180' : ''}`} />
                </button>
                {servicesDropdown && (
                  <div className="pl-4 space-y-2">
                    <Link
                      to="/services"
                      onClick={() => setMobileMenu(false)}
                      className="block text-purple-700 font-medium hover:text-purple-900"
                    >
                      All Services
                    </Link>
                    {servicesLinks.map((service, index) => (
                      <Link
                        key={index}
                        to={service.path}
                        onClick={() => { setMobileMenu(false); setServicesDropdown(false); }}
                        className="block text-gray-600 hover:text-purple-700"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <a
                href={`https://wa.me/919908519221?text=${message}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full px-6 py-4 rounded-2xl bg-gradient-to-r from-purple-700 to-purple-500 text-white font-semibold shadow-xl"
              >
                <MessageCircle className="w-5 h-5" />

                Contact on WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </header>
    </>
  );
};

export default Header;
