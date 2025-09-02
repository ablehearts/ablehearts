"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Heart, Home, ArrowLeft, Search } from "lucide-react";

export default function Custom404() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cream-50 to-rose-50 py-16 px-6 relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-rose-600 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse"></div>
        <div className="absolute top-1/3 right-[-5rem] w-96 h-96 bg-brand-light rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse"></div>
        <div className="absolute bottom-[-6rem] left-1/4 w-80 h-80 bg-rose-400 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center justify-center min-h-[70vh]">
        {/* Animated 404 Number */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <div className="relative">
            <motion.span
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-9xl font-bold text-rose-600 drop-shadow-sm"
            >
              4
            </motion.span>
            <motion.span
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="inline-block mx-4"
            >
              <Heart className="w-20 h-20 text-rose-500" fill="currentColor" />
            </motion.span>
            <motion.span
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-9xl font-bold text-rose-600 drop-shadow-sm"
            >
              4
            </motion.span>
          </div>
        </motion.div>

        {/* AbleHearts Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex justify-center mb-8"
        >
          <Image
            src="/images/ablehearts3.png"
            alt="AbleHearts Logo"
            width={140}
            height={140}
            className="rounded-full shadow-lg"
            priority
          />
        </motion.div>

        {/* Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-brand-dark mb-6">
            Page Not Found
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto mb-8">
            It seems this page has wandered off the path of compassion. But
            don't worry - every journey leads back to hope and kindness.
          </p>

          <div className="bg-white/70 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/60 max-w-md mx-auto">
            <div className="flex items-center justify-center mb-4">
              <Search className="w-8 h-8 text-rose-500 mr-3" />
              <span className="text-sm text-gray-600">What you can do:</span>
            </div>
            <ul className="text-left text-gray-700 space-y-2 text-sm">
              <li className="flex items-start">
                <span className="text-rose-500 mr-2">•</span>
                Check the URL for typos
              </li>
              <li className="flex items-start">
                <span className="text-rose-500 mr-2">•</span>
                Return to our homepage
              </li>
              <li className="flex items-start">
                <span className="text-rose-500 mr-2">•</span>
                Explore our mission and stories
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Navigation Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link href="/" passHref>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-rose-600 hover:bg-rose-700 text-white px-6 py-3 rounded-xl font-semibold shadow-md transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl flex items-center justify-center"
            >
              <Home className="w-5 h-5 mr-2" />
              Return Home
            </motion.div>
          </Link>

          <Link href="/about" passHref>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-brand-dark hover:bg-brand-dark/90 text-white px-6 py-3 rounded-xl font-semibold shadow-md transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl flex items-center justify-center"
            >
              <Heart className="w-5 h-5 mr-2" fill="currentColor" />
              Learn About Us
            </motion.div>
          </Link>
        </motion.div>

        {/* Floating Hearts Animation */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ y: 100, opacity: 0 }}
              animate={{
                y: -100,
                opacity: [0, 0.7, 0],
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                delay: i * 0.7,
                ease: "easeInOut",
              }}
              className="absolute text-rose-400"
              style={{
                left: `${20 + i * 15}%`,
                fontSize: "24px",
              }}
            >
              <Heart size={24} fill="currentColor" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Footer Message */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.5 }}
        className="text-center mt-12"
      >
        <p className="text-sm text-gray-600">
          Every missing page is an opportunity to rediscover compassion. Thank
          you for being part of the AbleHearts journey.
        </p>
      </motion.div>
    </div>
  );
}
