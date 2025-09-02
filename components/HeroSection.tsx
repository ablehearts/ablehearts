import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronDown, Heart } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="px-6 py-20 text-center max-w-4xl mx-auto relative">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="flex justify-center mb-6"
      >
        <Image
          src="/images/ablehearts3.png"
          alt="AbleHearts Logo"
          width={220}
          height={220}
          className="rounded-full shadow-lg"
          priority
        />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="text-4xl md:text-5xl font-extrabold text-brand-dark mb-4"
      >
        Borderless giving.{" "}
        <span className="text-rose-600">Dignity in action.</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.6 }}
        className="text-lg text-gray-700 mb-10"
      >
        At Able Hearts, we believe in the power of compassion to transform
        lives. Join us in building a world where kindness knows no boundaries.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.9 }}
        className="flex flex-col sm:flex-row gap-3 justify-center mb-16"
      >
        <Link
          href="/donate"
          className="bg-rose-600 hover:bg-rose-700 text-white px-6 py-3 rounded-xl font-semibold shadow-md transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
        >
          Donate Now
        </Link>
        <Link
          href="/about"
          className="bg-brand-dark hover:bg-brand-dark/90 text-white px-6 py-3 rounded-xl font-semibold shadow-md transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
        >
          Learn More
        </Link>
      </motion.div>

      {/* Luxury triple cascading scroll indicator with gradient colors */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-0"
      >
        {/* Heart - brightest color */}
        <motion.div
          animate={{
            opacity: [0.3, 1, 0.3],
            scale: [0.9, 1.1, 0.9],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
          className="luxury-wave-item"
        >
          <Heart
            className="w-4 h-4 text-rose-500 luxury-glow"
            fill="currentColor"
          />
        </motion.div>

        {/* Three tightly spaced chevrons with gradient colors */}
        <div className="flex flex-col items-center -my-1">
          {/* First chevron - lightest rose */}
          <motion.div
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [0.9, 1.1, 0.9],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
              delay: 0.4,
            }}
            className="luxury-wave-item"
          >
            <ChevronDown className="w-3 h-3 text-rose-400 luxury-glow" />
          </motion.div>

          {/* Second chevron - medium rose */}
          <motion.div
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [0.9, 1.1, 0.9],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
              delay: 0.8,
            }}
            className="luxury-wave-item"
          >
            <ChevronDown className="w-3 h-3 text-rose-500 luxury-glow" />
          </motion.div>

          {/* Third chevron - darkest rose */}
          <motion.div
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [0.9, 1.1, 0.9],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
              delay: 1.2,
            }}
            className="luxury-wave-item"
          >
            <ChevronDown className="w-3 h-3 text-rose-600 luxury-glow" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
