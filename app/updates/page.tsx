"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Calendar, Heart, Users, BookOpen } from "lucide-react";

export default function UpdatesPage() {
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
            Updates & Stories{" "}
            <BookOpen className="inline w-8 h-8 text-rose-600 ml-2" />
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
            Stay connected with the latest updates from Mary, Lydia, and our
            growing AbleHearts community. Together, we are making dignity
            possible.
          </motion.p>
        </motion.div>

        {/* Updates Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid md:grid-cols-2 gap-8 mb-12"
        >
          {/* Update Card 1 */}
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white/70 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/60"
          >
            <div className="flex items-center mb-4">
              <Calendar className="w-5 h-5 text-rose-500 mr-2" />
              <span className="text-sm text-gray-500">October 15, 2023</span>
            </div>
            <h3 className="font-semibold text-lg text-brand-dark mb-3">Medical Progress</h3>
            <p className="text-gray-700 mb-4">
              Lydia has started her new treatment regimen. Thanks to your support, 
              she's receiving the care she needs for her leg wounds.
            </p>
            <div className="bg-rose-50 rounded-lg p-3">
              <p className="text-sm text-rose-700 italic">
                "I can feel the improvement already. Thank you for giving me hope." - Lydia
              </p>
            </div>
          </motion.div>

          {/* Update Card 2 */}
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white/70 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/60"
          >
            <div className="flex items-center mb-4">
              <Calendar className="w-5 h-5 text-rose-500 mr-2" />
              <span className="text-sm text-gray-500">September 28, 2023</span>
            </div>
            <h3 className="font-semibold text-lg text-brand-dark mb-3">Education Support</h3>
            <p className="text-gray-700 mb-4">
              Mary's niece has started school with new supplies and uniform. 
              Your donations made this possible for her education journey.
            </p>
            <div className="bg-amber-50 rounded-lg p-3">
              <p className="text-sm text-amber-700 italic">
                "She's so excited to learn. This means everything to our family." - Mary
              </p>
            </div>
          </motion.div>

          {/* Update Card 3 */}
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white/70 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/60"
          >
            <div className="flex items-center mb-4">
              <Calendar className="w-5 h-5 text-rose-500 mr-2" />
              <span className="text-sm text-gray-500">September 10, 2023</span>
            </div>
            <h3 className="font-semibold text-lg text-brand-dark mb-3">Community Growth</h3>
            <p className="text-gray-700 mb-4">
              Our AbleHearts community has helped 5 additional families this month 
              with essential supplies and medical support.
            </p>
            <div className="bg-green-50 rounded-lg p-3">
              <p className="text-sm text-green-700 italic">
                "Your kindness has reached so many. We're grateful beyond words."
              </p>
            </div>
          </motion.div>

          {/* Update Card 4 - Coming Soon */}
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white/50 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/40 border-dashed text-center flex flex-col items-center justify-center"
          >
            <Users className="w-12 h-12 text-gray-400 mb-4" />
            <h3 className="font-semibold text-lg text-gray-600 mb-2">More Stories Coming</h3>
            <p className="text-gray-500 text-sm">
              We're continuously updating with new stories of hope and progress.
            </p>
            <div className="mt-4 text-xs text-amber-600 font-medium">
              Check back soon
            </div>
          </motion.div>
        </motion.div>

        {/* Social Media Connection */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-white/70 backdrop-blur-lg rounded-2xl p-8 shadow-lg border border-white/60 text-center mb-12"
        >
          <div className="flex justify-center mb-4">
            <Heart className="w-8 h-8 text-rose-500" fill="currentColor" />
          </div>
          <h2 className="text-2xl font-semibold text-brand-dark mb-4">
            Follow Our Journey
          </h2>
          <p className="text-gray-700 mb-6">
            For real-time updates and more personal stories, follow us on social media. 
            See the direct impact of your support through photos and videos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://x.com/ablehearts_org"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-50 hover:bg-blue-100 text-blue-700 px-4 py-2 rounded-lg font-medium transition-colors duration-300"
            >
              Twitter Updates
            </a>
            <a
              href="https://www.tiktok.com/@able_hearts"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-lg font-medium transition-colors duration-300"
            >
              TikTok Stories
            </a>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="text-center"
        >
          <h2 className="text-2xl font-semibold text-brand-dark mb-4">
            Be Part of Our Next Update
          </h2>
          <p className="text-gray-700 mb-6">
            Your support creates these stories of hope and transformation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="/donate"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-rose-600 hover:bg-rose-700 text-white px-6 py-3 rounded-xl font-semibold shadow-md transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
            >
              Support Our Mission
            </motion.a>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-brand-dark hover:bg-brand-dark/90 text-white px-6 py-3 rounded-xl font-semibold shadow-md transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
            >
              Share Your Story
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}