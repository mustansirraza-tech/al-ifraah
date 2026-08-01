// GalleryPreview.jsx

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const images = import.meta.glob('../assets/Alifraah-images/*.{webp,png,jpg,jpeg}', { eager: true, import: 'default' });

const galleryImages = Object.keys(images).slice(0, 10).map((path) => ({
  title: "Ziyarat Moment",
  image: images[path],
}));

const GalleryPreview = () => {
  const message = encodeURIComponent("Assalamu alaikum, aur packages ke details chahiye");
  return (
    <section className="relative py-24 bg-white overflow-hidden">

      {/* Glow */}
      <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-purple-100/40 blur-3xl rounded-full"></div>

      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-yellow-100/40 blur-3xl rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <span className="text-purple-700 uppercase tracking-[4px] font-semibold">
            GALLERY PREVIEW
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Moments from{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-700">
              Sacred Journeys
            </span>
          </h2>

          <p className="mt-8 text-lg text-gray-600 leading-8">
            Explore glimpses from Hajj, Umrah, Baghdad, Karbala and Najaf Ziyarat
            journeys organized for pilgrims from Hyderabad and Telangana.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">

          {galleryImages.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative rounded-[32px] overflow-hidden shadow-2xl"
            >

              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[400px] object-cover group-hover:scale-110 transition-all duration-700"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#2b1147]/90 via-[#2b1147]/20 to-transparent"></div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8">

                <div className="h-[3px] w-20 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full mb-5"></div>

                <h3 className="text-2xl font-bold text-white">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* WhatsApp CTA */}
        <div className="mt-16 text-center">
          <a
            href={`https://wa.me/919908519221?text=${message}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-700 to-purple-500 text-white font-semibold shadow-xl hover:scale-105 transition-all duration-300"
          >
            <MessageCircle className="w-6 h-6" />
            Book Your Ziyarat
          </a>
        </div>
      </div>
    </section>
  );
};

export default GalleryPreview;