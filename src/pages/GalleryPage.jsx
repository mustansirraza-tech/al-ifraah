import { useState } from "react";
import { motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Play } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const makkahImages = import.meta.glob('../assets/makkah/*.{webp,png,jpg,jpeg}', { eager: true, import: 'default' });
const madinaImages = import.meta.glob('../assets/madina/*.{webp,png,jpg,jpeg}', { eager: true, import: 'default' });
const ziyaratImages = import.meta.glob('../assets/ziyarat/*.{webp,png,jpg,jpeg,peg}', { eager: true, import: 'default' });
const alifraahImages = import.meta.glob('../assets/Alifraah-images/*.{webp,png,jpg,jpeg}', { eager: true, import: 'default' });
const otherImages = import.meta.glob('../assets/images/*.{webp,png,jpg,jpeg}', { eager: true, import: 'default' });

let globalId = 1;
const images = [
  ...Object.keys(makkahImages).map((path) => ({
    id: globalId++,
    src: makkahImages[path],
    category: "makka",
    title: "Makkah Memories"
  })),
  ...Object.keys(madinaImages).map((path) => ({
    id: globalId++,
    src: madinaImages[path],
    category: "madina",
    title: "Madina Memories"
  })),
  ...Object.keys(ziyaratImages).map((path) => ({
    id: globalId++,
    src: ziyaratImages[path],
    category: "ziyarats",
    title: "Ziyarat Memories"
  })),
  ...Object.keys(alifraahImages).map((path) => ({
    id: globalId++,
    src: alifraahImages[path],
    category: "general",
    title: "Al-Ifraah Memories"
  })),
  ...Object.keys(otherImages).map((path) => {
    let cat = "general";
    if (path.toLowerCase().includes('kaaba') || path.toLowerCase().includes('makkah')) cat = "makka";
    if (path.toLowerCase().includes('madina')) cat = "madina";
    if (path.toLowerCase().includes('ziyarat') || path.toLowerCase().includes('karbala') || path.toLowerCase().includes('najaf') || path.toLowerCase().includes('baghdad')) cat = "ziyarats";
    return {
      id: globalId++,
      src: otherImages[path],
      category: cat,
      title: "Memories"
    };
  })
];

const importedVideos = import.meta.glob('../assets/**/*.{mp4,webm}', { eager: true, import: 'default' });

const localVideos = Object.keys(importedVideos).map((path, index) => {
  const fileName = path.split('/').pop().replace(/\.[^/.]+$/, "");
  const formattedTitle = fileName.replace(/[-_]/g, " ").replace(/\b\w/g, l => l.toUpperCase());
  return {
    id: `local-${index + 1}`,
    src: importedVideos[path],
    title: formattedTitle,
    duration: "Video",
    isLocal: true
  };
});

const videos = localVideos;

const categories = ["all", "makka", "madina", "ziyarats"];

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredImages = activeCategory === "all"
    ? images
    : images.filter(img => img.category === activeCategory);

  const prevImage = () => {
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage?.id);
    const newIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    setSelectedImage(filteredImages[newIndex]);
  };

  const nextImage = () => {
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage?.id);
    const newIndex = (currentIndex + 1) % filteredImages.length;
    setSelectedImage(filteredImages[newIndex]);
  };

  return (
    <div>
      <Header />

      <section className="relative min-h-[50vh] flex items-center bg-gradient-to-br from-[#1f0b34] via-[#2b1147] to-[#1f0b34]">
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
            Photo & Video{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-700">
              Gallery
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mt-6 text-lg text-gray-300 max-w-3xl mx-auto"
          >
            Explore beautiful moments from Makkah, Madina, and our pilgrims' spiritual journeys with AL-IFRAAH Tours & Travels.
          </motion.p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Photo Gallery
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Browse through our collection of images from sacred destinations and pilgrim experiences.
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 capitalize ${
                  activeCategory === category
                    ? "bg-purple-600 text-white shadow-lg shadow-purple-600/30"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="columns-2 md:columns-3 lg:columns-4 gap-3 sm:gap-6">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: (index % 10) * 0.05 }}
                viewport={{ once: true }}
                onClick={() => setSelectedImage(image)}
                className="relative group cursor-pointer rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 break-inside-avoid inline-block w-full mb-3 sm:mb-6"
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#2b1147]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white font-semibold">{image.title}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Video Gallery
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Watch videos of our pilgrim journeys, destination highlights, and more.
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
            {videos.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => setSelectedVideo(video)}
                className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] max-w-md relative group cursor-pointer rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 bg-black aspect-video flex items-center justify-center"
              >
                {video.isLocal ? (
                  <video
                    src={video.src}
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500 opacity-80 group-hover:opacity-100"
                    muted
                    preload="metadata"
                  />
                ) : (
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                  />
                )}

                <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/20 transition-all">
                  <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-xl">
                    <Play className="w-8 h-8 text-purple-700 ml-1 fill-purple-700" />
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                  <p className="text-white font-semibold text-lg">{video.title}</p>
                  <p className="text-gray-300 text-sm mt-1">{video.duration}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-10 text-gray-500"
          >
            More videos coming soon...
          </motion.p>
        </div>
      </section>

      {/* Video Lightbox Modal */}
      {selectedVideo && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 md:p-10"
          onClick={() => setSelectedVideo(null)}
        >
          <button
            onClick={() => setSelectedVideo(null)}
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-white/30 transition-colors z-50"
          >
            <X className="w-6 h-6" />
          </button>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            onClick={(e) => e.stopPropagation()}
            className="max-w-5xl w-full aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black relative"
          >
            {selectedVideo.isLocal ? (
              <video
                src={selectedVideo.src}
                controls
                autoPlay
                className="w-full h-full rounded-2xl"
              />
            ) : (
              <iframe
                src={selectedVideo.youtubeUrl}
                title={selectedVideo.title}
                className="w-full h-full rounded-2xl"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}
          </motion.div>
        </div>
      )}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            onClick={(e) => e.stopPropagation()}
            className="max-w-5xl w-full"
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="w-full max-h-[80vh] object-contain rounded-2xl"
            />
            <p className="text-center text-white mt-4 text-lg font-medium">
              {selectedImage.title}
            </p>
          </motion.div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default GalleryPage;
