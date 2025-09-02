"use client";
import { motion } from "framer-motion";
import { Heart, CreditCard, QrCode, Coins, Globe } from "lucide-react";
import Image from "next/image";

export default function DonatePage() {
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
            Support with Love{" "}
            <Heart
              className="inline w-8 h-8 text-rose-600"
              fill="currentColor"
            />
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
            Every contribution brings hope, care, and dignity. Choose how you'd
            like to help below.
          </motion.p>
        </motion.div>

        {/* Current Payment Methods */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-semibold text-brand-dark text-center mb-6">
            Available Payment Methods
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* PayPal */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white/70 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/60"
            >
              <div className="flex items-center mb-4">
                <Globe className="w-8 h-8 text-blue-500 mr-3" />
                <h3 className="font-semibold text-lg text-brand-dark">
                  PayPal
                </h3>
              </div>
              <p className="text-gray-700 mb-4">Send support via PayPal</p>
              <p className="bg-rose-50 rounded-lg p-3 font-mono text-sm text-rose-700">
                hesbonosoro1@gmail.com
              </p>
            </motion.div>

            {/* Bank Transfer */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white/70 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/60"
            >
              <div className="flex items-center mb-4">
                <CreditCard className="w-8 h-8 text-green-500 mr-3" />
                <h3 className="font-semibold text-lg text-brand-dark">
                  Bank Transfer (Equity)
                </h3>
              </div>
              <p className="text-gray-700 mb-4">Direct bank transfer</p>
              <p className="bg-rose-50 rounded-lg p-3 font-mono text-sm text-rose-700">
                0510177487892
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Coming Soon Payment Gateways */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-semibold text-brand-dark text-center mb-6">
            More Payment Options Coming Soon
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Stripe */}
            <motion.div
              whileHover={{ y: -3 }}
              className="bg-white/50 backdrop-blur-lg rounded-2xl p-6 text-center shadow-lg border border-white/40 border-dashed"
            >
              <CreditCard className="w-10 h-10 text-purple-500 mx-auto mb-3 opacity-70" />
              <h3 className="font-semibold text-brand-dark mb-2">Stripe</h3>
              <p className="text-sm text-gray-600">Credit Card Payments</p>
              <div className="mt-3 text-xs text-amber-600 font-medium">
                Coming Soon
              </div>
            </motion.div>

            {/* QR Payments */}
            <motion.div
              whileHover={{ y: -3 }}
              className="bg-white/50 backdrop-blur-lg rounded-2xl p-6 text-center shadow-lg border border-white/40 border-dashed"
            >
              <QrCode className="w-10 h-10 text-blue-500 mx-auto mb-3 opacity-70" />
              <h3 className="font-semibold text-brand-dark mb-2">QR Code</h3>
              <p className="text-sm text-gray-600">Scan to Pay</p>
              <div className="mt-3 text-xs text-amber-600 font-medium">
                Coming Soon
              </div>
            </motion.div>

            {/* Crypto */}
            <motion.div
              whileHover={{ y: -3 }}
              className="bg-white/50 backdrop-blur-lg rounded-2xl p-6 text-center shadow-lg border border-white/40 border-dashed"
            >
              <Coins className="w-10 h-10 text-yellow-500 mx-auto mb-3 opacity-70" />
              <h3 className="font-semibold text-brand-dark mb-2">Crypto</h3>
              <p className="text-sm text-gray-600">Bitcoin & Ethereum</p>
              <div className="mt-3 text-xs text-amber-600 font-medium">
                Coming Soon
              </div>
            </motion.div>

            {/* Global Platforms */}
            <motion.div
              whileHover={{ y: -3 }}
              className="bg-white/50 backdrop-blur-lg rounded-2xl p-6 text-center shadow-lg border border-white/40 border-dashed"
            >
              <Globe className="w-10 h-10 text-green-500 mx-auto mb-3 opacity-70" />
              <h3 className="font-semibold text-brand-dark mb-2">
                Global Platforms
              </h3>
              <p className="text-sm text-gray-600">Multiple Options</p>
              <div className="mt-3 text-xs text-amber-600 font-medium">
                Coming Soon
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="bg-white/70 backdrop-blur-lg rounded-2xl p-8 shadow-lg border border-white/60 text-center"
        >
          <h2 className="text-2xl font-semibold text-brand-dark mb-4">
            Your Support Makes a Difference
          </h2>
          <p className="text-gray-700 mb-6">
            Every donation goes directly towards providing care, education, and
            essential resources for those in need. Thank you for being part of
            our mission.
          </p>
          <p className="text-sm text-gray-500">
            Need help with your donation? Contact us at{" "}
            <a
              href="mailto:ablehearts@hotmail.com"
              className="text-blue-500 underline"
            >
              ablehearts@hotmail.com
            </a>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
