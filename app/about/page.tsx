"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { HeartHandshake, Users, Globe } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cream-50 to-rose-50 py-16 px-6 relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-rose-600 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse"></div>
        <div className="absolute top-1/3 right-[-5rem] w-96 h-96 bg-brand-light rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse"></div>
        <div className="absolute bottom-[-6rem] left-1/4 w-80 h-80 bg-rose-400 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
            <div className="flex items-center justify-center gap-4 mb-6">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-brand-dark">
              About AbleHearts
            </h1>
            <HeartHandshake className="w-10 h-10 text-rose-500" />
            </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center mb-8"
          >
            <Image
              src="/images/ablehearts3.png"
              alt="AbleHearts Logo"
              width={180}
              height={180}
              className="rounded-full shadow-lg"
              priority
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto"
          >
            AbleHearts is built on the belief that compassion knows no borders.
            We connect generous hearts with people in need, ensuring dignity,
            education, and care for those who need it most.
          </motion.p>
        </motion.div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid md:grid-cols-3 gap-8 mb-12"
        >
          <div className="bg-white/70 backdrop-blur-lg rounded-2xl p-6 text-center shadow-lg border border-white/60">
            <HeartHandshake className="w-12 h-12 mx-auto text-rose-500 mb-4" />
            <h3 className="font-semibold text-lg text-brand-dark mb-2">
              Compassion
            </h3>
            <p className="text-gray-700">
              Putting heart into every action we take
            </p>
          </div>

          <div className="bg-white/70 backdrop-blur-lg rounded-2xl p-6 text-center shadow-lg border border-white/60">
            <Users className="w-12 h-12 mx-auto text-rose-500 mb-4" />
            <h3 className="font-semibold text-lg text-brand-dark mb-2">
              Community
            </h3>
            <p className="text-gray-700">
              Building bridges between those who can help and those in need
            </p>
          </div>

          <div className="bg-white/70 backdrop-blur-lg rounded-2xl p-6 text-center shadow-lg border border-white/60">
            <Globe className="w-12 h-12 mx-auto text-rose-500 mb-4" />
            <h3 className="font-semibold text-lg text-brand-dark mb-2">
              Global Reach
            </h3>
            <p className="text-gray-700">
              Making impact across borders and boundaries
            </p>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <div className="bg-white/70 backdrop-blur-lg rounded-2xl p-8 shadow-lg border border-white/60 mb-8">
            <h2 className="text-2xl font-semibold text-brand-dark mb-4">
              Join Our Mission
            </h2>
            <p className="text-gray-700 mb-6">
              Every contribution helps us continue our work and expand our reach
              to those who need it most.
            </p>
          </div>
          <div className="bg-white/70 backdrop-blur-lg rounded-2xl p-8 shadow-lg border border-white/60 mb-8">
            <h2 className="text-2xl font-semibold text-brand-dark mb-4">
              Join Our Vision
            </h2>
            <p className="text-gray-700">
              A global community where compassion drives action and every
              contribution, no matter how small, makes a meaningful difference
              in someone's life.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="/donate"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-rose-600 hover:bg-rose-700 text-white px-6 py-3 rounded-xl font-semibold shadow-md transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
            >
              Make a Donation
            </motion.a>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-brand-dark hover:bg-brand-dark/90 text-white px-6 py-3 rounded-xl font-semibold shadow-md transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
            >
              Volunteer
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
