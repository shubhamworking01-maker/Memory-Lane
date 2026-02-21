import { motion } from "motion/react";
import { MEMORY_IMAGES, PONDY_IMAGES } from "../constants";

export default function LandingPage() {
  const bannerImages = MEMORY_IMAGES.slice(0, 12);

  return (
    <div className="pt-20">
      {/* Horizontal Scrolling Banner */}
      <section className="relative h-[50vh] md:h-[60vh] overflow-hidden bg-stone-900">
        <div className="absolute inset-0 flex items-center">
          <motion.div
            className="flex gap-4 px-4"
            animate={{
              x: [0, -2400],
            }}
            transition={{
              duration: 45,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {[...bannerImages, ...bannerImages].map((img, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 w-[300px] md:w-[400px] h-[40vh] md:h-[50vh] rounded-2xl overflow-hidden shadow-2xl"
              >
                <img
                  src={img.url}
                  alt={img.caption}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            ))}
          </motion.div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent pointer-events-none flex items-end justify-center pb-12 px-4">
          <h1 className="font-serif text-4xl md:text-7xl text-white text-center drop-shadow-lg">
            Our Beautiful Journey
          </h1>
        </div>
      </section>

      {/* Friendship & Hostel Life Section */}
      <section className="max-w-4xl mx-auto px-6 py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif text-4xl md:text-5xl mb-8 text-rose-800 italic">
            A Bond Beyond Words
          </h2>
          <p className="text-xl md:text-2xl leading-relaxed text-stone-700 font-light">
            Hostel life wasn't just about sharing a room; it was about sharing a life. 
            From the 2 AM deep conversations to the chaotic group study sessions that always ended in laughter, 
            every corner of those walls holds a secret we whispered. Friends became the family we chose, 
            turning mundane mess food into feasts and ordinary days into legendary stories. 
            It was where we grew up, messed up, and stood up for each other, creating a tapestry of memories 
            that will never fade.
          </p>
        </motion.div>
      </section>

      {/* Pondicherry Section */}
      <section className="bg-stone-100 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="font-serif text-4xl md:text-5xl text-stone-800">
                Pondicherry: Our Coastal Escape
              </h2>
              <p className="text-lg leading-relaxed text-stone-600">
                Pondicherry was more than just a destination; it was a feeling. 
                The French Quarter with its mustard-yellow walls and bougainvillea-draped balconies 
                felt like a dream we walked through. We spent hours wandering the cobblestone streets, 
                the salty breeze from the Promenade Beach messy-ing our hair but clearing our minds. 
                The cafes, the cycles, and the spiritual silence of Auroville—it was a place where time 
                seemed to slow down just for us, allowing us to soak in every sunset and every shared smile.
              </p>
            </motion.div>
            <div className="grid grid-cols-2 gap-4">
              {PONDY_IMAGES.map((url, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2 }}
                  className={`rounded-3xl overflow-hidden shadow-lg ${idx === 0 ? 'col-span-2 h-64' : 'h-48'}`}
                >
                  <img
                    src={url}
                    alt="Pondicherry"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
