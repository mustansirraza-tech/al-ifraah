import { Link } from "react-router-dom";
import {
  MapPin,
  Phone,
  MessageCircle,
  Clock3,
} from "lucide-react";

const Footer = () => {
  const message = encodeURIComponent("Assalamu alaikum, aur packages ke details chahiye");
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-[#1f0b34] via-[#2b1147] to-[#1f0b34] text-white">

      {/* Glow */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-yellow-400/10 blur-3xl rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-400/20 blur-3xl rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-24 pb-10">

        {/* GRID */}
        <div className="grid lg:grid-cols-4 gap-12">

          {/* ABOUT */}
          <div>
            <h2 className="text-4xl font-black text-white">
              AL-IFRAAH
            </h2>

            <p className="text-yellow-400 font-semibold tracking-[4px] mt-2">
              TOURS & TRAVELS
            </p>

            <p className="mt-8 text-gray-300 leading-8">
              Trusted Islamic travel services for Hajj,
              Umrah, and Baghdad Ziyarat with comfort,
              sincerity, professionalism, and complete support.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-2xl font-bold mb-8">
              Quick Links
            </h3>

            <div className="space-y-4">
              
              {[
                { name: "Home", path: "/" },
                { name: "About", path: "/about" },
                { name: "Services", path: "/services" },
                { name: "Packages", path: "/umrah-packages" },
                { name: "Gallery", path: "/gallery" },
                { name: "FAQ", path: "/faq" },
                { name: "Contact", path: "/contact" },
              ].map((item, index) => (
                item.isHash ? (
                  <a
                    key={index}
                    href={item.path}
                    className="block text-gray-300 hover:text-yellow-400 transition-all duration-300"
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    key={index}
                    to={item.path}
                    className="block text-gray-300 hover:text-yellow-400 transition-all duration-300"
                  >
                    {item.name}
                  </Link>
                )
              ))}
            </div>
          </div>

          {/* SERVICES */}
          <div>
            <h3 className="text-2xl font-bold mb-8">
              Our Services
            </h3>

            <div className="space-y-4">
              <Link to="/services/hajj-packages" className="block text-gray-300 hover:text-yellow-400 transition-all duration-300">Hajj Packages</Link>

              <Link to="/services/umrah-packages" className="block text-gray-300 hover:text-yellow-400 transition-all duration-300">Umrah Packages</Link>

              <Link to="/services/baghdad-ziyarat" className="block text-gray-300 hover:text-yellow-400 transition-all duration-300">Baghdad Ziyarat</Link>

              <Link to="/services/visa-assistance" className="block text-gray-300 hover:text-yellow-400 transition-all duration-300">Visa Assistance</Link>

              <Link to="/services/hotel-transport" className="block text-gray-300 hover:text-yellow-400 transition-all duration-300">Hotel & Transportation</Link>
            </div>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-2xl font-bold mb-8">
              Contact Details
            </h3>

            <div className="space-y-6">

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-yellow-400" />
                </div>

                <p className="text-gray-300 leading-7">
                  9-2-75/3, near Star Hotel,
                  Hashmathpet, Old Bowenpally,
                  Secunderabad, Hyderabad,
                  Telangana 500009
                </p>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-yellow-400" />
                </div>

                <div className="text-gray-300">
                  <p>9908519221</p>
                  <p>9949274274</p>
                </div>
              </div>

              {/* WhatsApp */}
              <a
                href={`https://wa.me/919908519221?text=${message}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 hover:opacity-80 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-yellow-400" />
                </div>

                <p className="text-gray-300">
                  WhatsApp Support Available
                </p>
              </a>

              {/* Timing */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                  <Clock3 className="w-5 h-5 text-yellow-400" />
                </div>

                <p className="text-gray-300">
                  Dedicated Customer Support
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* OWNER */}
        <div className="mt-20 pt-8 border-t border-white/10 text-center">

          <p className="text-lg text-gray-300">
            Prop.{" "}
            <span className="text-yellow-400 font-semibold">
              Moulana Hafiz Abdul Muqeet Raza Quadri
            </span>
          </p>

          <p className="mt-4 text-gray-500">
            © {new Date().getFullYear()} AL-IFRAAH Tours & Travels.
            All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
