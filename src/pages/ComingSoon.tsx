import { motion } from "motion/react";
import { Clock } from "lucide-react";

interface ComingSoonProps {
  title: string;
}

export default function ComingSoon({ title }: ComingSoonProps) {
  return (
    <div className="min-h-screen flex items-center justify-center pt-20 px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center space-y-6"
      >
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-rose-50 text-rose-500 mb-4">
          <Clock className="w-10 h-10" />
        </div>
        <h1 className="font-serif text-5xl md:text-6xl text-stone-800">{title}</h1>
        <p className="text-xl text-stone-500 font-light max-w-md mx-auto">
          We're busy curating these special moments. Check back soon for more memories!
        </p>
        <div className="flex justify-center gap-2">
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2,
              }}
              className="w-2 h-2 rounded-full bg-rose-400"
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}
