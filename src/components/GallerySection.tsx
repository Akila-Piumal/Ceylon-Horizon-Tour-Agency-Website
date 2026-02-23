import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

import heroBg from "@/assets/hero-bg.jpg";
import tourSigiriya from "@/assets/tour-sigiriya.jpg";
import tourElla from "@/assets/tour-ella.jpg";
import tourBeach from "@/assets/tour-beach.jpg";
import tourCultural from "@/assets/tour-cultural.jpg";
import tourSafari from "@/assets/tour-safari.jpg";
import galleryTemple from "@/assets/gallery-temple.jpg";
import galleryTrain from "@/assets/gallery-train.jpg";
import aboutLandscape from "@/assets/about-landscape.jpg";

const images = [
  { src: heroBg, alt: "Sri Lanka aerial paradise view" },
  { src: galleryTemple, alt: "Ancient Buddhist temple" },
  { src: tourElla, alt: "Nine Arches Bridge Ella" },
  { src: tourBeach, alt: "Southern coast beach" },
  { src: galleryTrain, alt: "Scenic train journey" },
  { src: tourSigiriya, alt: "Sigiriya Lion Rock" },
  { src: tourCultural, alt: "Cultural temple heritage" },
  { src: aboutLandscape, alt: "Tea plantation hills" },
  { src: tourSafari, alt: "Yala safari leopard" },
];

const GallerySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section id="gallery" className="section-padding bg-sand-gradient">
      <div className="container mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sunset font-semibold tracking-[0.2em] uppercase text-sm mb-3">Gallery</p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Moments from Paradise
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A glimpse into the breathtaking experiences that await you
          </p>
        </motion.div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="break-inside-avoid cursor-pointer group"
              onClick={() => setSelectedImage(i)}
            >
              <div className="rounded-2xl overflow-hidden relative">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-primary/90 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-6 right-6 text-primary-foreground/80 hover:text-primary-foreground"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              src={images[selectedImage].src}
              alt={images[selectedImage].alt}
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;
