"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Mail, Twitter, Music, Heart, MessageCircle } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cream-50 to-rose-50 py-16 px-6 relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-rose-600 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse"></div>
        <div className="absolute top-1/3 right-[-5rem] w-96 h-96 bg-brand-light rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse"></div>
        <div className="absolute bottom-[-6rem] left-1/4 w-80 h-80 bg-rose-400 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl font-heading font-bold text-brand-dark mb-6"
          >
            Get in Touch{" "}
            <MessageCircle className="inline w-8 h-8 text-rose-600 ml-2" />
          </motion.h1>
          
          {/* AbleHearts Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex justify-center mb-8"
          >
            <Image
              src="/images/ablehearts3.png"
              alt="AbleHearts Logo"
              width={160}
              height={160}
              className="rounded-full shadow-lg"
              priority
            />
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-gray-700 leading-relaxed mb-8 max-w-2xl mx-auto"
          >
            We'd love to hear from you. Reach us directly via email or connect with us on social media.
          </motion.p>
        </motion.div>

        {/* Contact Methods */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {/* Email */}
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white/70 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/60 text-center"
          >
            <div className="flex justify-center mb-4">
              <Mail className="w-10 h-10 text-rose-500" />
            </div>
            <h3 className="font-semibold text-lg text-brand-dark mb-3">Email</h3>
            <p className="text-gray-700 mb-4">Send us a message directly</p>
            <a
              href="mailto:ablehearts@hotmail.com"
              className="bg-rose-50 hover:bg-rose-100 text-rose-700 px-4 py-2 rounded-lg font-medium transition-colors duration-300 inline-block"
            >
              ablehearts@hotmail.com
            </a>
          </motion.div>

          {/* Twitter */}
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white/70 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/60 text-center"
          >
            <div className="flex justify-center mb-4">
              <Twitter className="w-10 h-10 text-blue-400" />
            </div>
            <h3 className="font-semibold text-lg text-brand-dark mb-3">Twitter</h3>
            <p className="text-gray-700 mb-4">Follow and message us</p>
            <a
              href="https://x.com/ablehearts_org"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-50 hover:bg-blue-100 text-blue-700 px-4 py-2 rounded-lg font-medium transition-colors duration-300 inline-block"
            >
              @ablehearts_org
            </a>
          </motion.div>

          {/* TikTok */}
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white/70 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/60 text-center"
          >
            <div className="flex justify-center mb-4">
              <Music className="w-10 h-10 text-black" />
            </div>
            <h3 className="font-semibold text-lg text-brand-dark mb-3">TikTok</h3>
            <p className="text-gray-700 mb-4">Watch and engage with our content</p>
            <a
              href="https://www.tiktok.com/@able_hearts"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-lg font-medium transition-colors duration-300 inline-block"
            >
              @able_hearts
            </a>
          </motion.div>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-white/70 backdrop-blur-lg rounded-2xl p-8 shadow-lg border border-white/60 text-center"
        >
          <div className="flex justify-center mb-4">
            <Heart className="w-8 h-8 text-rose-500" fill="currentColor" />
          </div>
          <h2 className="text-2xl font-semibold text-brand-dark mb-4">
            We're Here to Connect
          </h2>
          <p className="text-gray-700 mb-6">
            Whether you have questions, want to get involved, or need support, 
            we're here to help. Your message matters to us, and we'll respond 
            as quickly as possible.
          </p>
          <p className="text-sm text-gray-500">
            Typically respond within 24-48 hours
          </p>
        </motion.div>

        {/* Quick Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mt-12"
        >
          <motion.a
            href="mailto:ablehearts@hotmail.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-rose-600 hover:bg-rose-700 text-white px-6 py-3 rounded-xl font-semibold shadow-md transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
          >
            Send Email
          </motion.a>
          <motion.a
            href="/donate"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-brand-dark hover:bg-brand-dark/90 text-white px-6 py-3 rounded-xl font-semibold shadow-md transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
          >
            Make a Donation
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
}