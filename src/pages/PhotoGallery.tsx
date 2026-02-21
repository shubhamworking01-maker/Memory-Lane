import { motion } from "motion/react";
import { MEMORY_IMAGES } from "../constants";

export default function PhotoGallery() {
  return (
    <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
      <header className="text-center mb-20">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-serif text-5xl md:text-6xl mb-4"
        >
          Captured Moments
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-stone-500 italic text-lg"
        >
          A collection of our favorite memories, frozen in time.
        </motion.p>
      </header>

      <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8">
        {MEMORY_IMAGES.map((img, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.05 }}
            className="break-inside-avoid group relative"
          >
            <div className="overflow-hidden rounded-2xl bg-stone-200 shadow-md transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2">
              <img
                src={img.url}
                alt={img.caption}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
