"use client";

import Link from "next/link";
import Image from "next/image";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-brand-dark via-brand-dark to-rose-700 text-gray-300 overflow-hidden">
      {/* Animated Waves */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        {/* Back wave (rose accent) */}
        <svg
          className="relative block w-full h-24 text-rose-600 animate-wave-slow opacity-70"
          fill="currentColor"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path d="M0,0V46.29c47.76,22,103.77,29,159.7,17.39C230,50,284,20,339,10s120,10,178,22.61C574,50,629,70,685,69c59-.95,113-27,172-34s121,3,180,12,118,15,164,5V0Z" />
        </svg>

        {/* Front wave (dark overlay) */}
        <svg
          className="relative block w-full h-24 text-brand-dark animate-wave-fast opacity-80"
          fill="currentColor"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path d="M0,0V15c77.76,32,153.77,45,231,39s154-33,231-41,154,2,230,20,153,40,230,43,154-15,231-31V0Z" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 py-12 text-center">
        {/* Logo + Brand (split colored) */}
        <div className="flex justify-center items-center space-x-3 mb-6">
          <Image
            src="/images/ah-mb.png"
            alt="AbleHearts Logo"
            width={48}
            height={48}
            className="rounded-full w-10 h-10 object-cover"
            priority
          />

          <h2 className="font-bold text-2xl">
            <span className="text-rose-500">Able</span>
            <span className="text-white">Hearts</span>
          </h2>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center space-x-6 mb-6 text-xl">
          <Link
            href="https://facebook.com"
            target="_blank"
            className="hover:text-rose-400 transition-colors duration-300"
          >
            <FaFacebookF />
          </Link>
          <Link
            href="https://twitter.com"
            target="_blank"
            className="hover:text-rose-400 transition-colors duration-300"
          >
            <FaTwitter />
          </Link>
          <Link
            href="https://tiktok.com"
            target="_blank"
            className="hover:text-rose-400 transition-colors duration-300"
          >
            <FaTiktok />
          </Link>

          <Link
            href="https://instagram.com"
            target="_blank"
            className="hover:text-rose-400 transition-colors duration-300"
          >
            <FaInstagram />
          </Link>
          <Link
            href="https://linkedin.com"
            target="_blank"
            className="hover:text-rose-400 transition-colors duration-300"
          >
            <FaLinkedinIn />
          </Link>
          <Link
            href="https://youtube.com"
            target="_blank"
            className="hover:text-rose-400 transition-colors duration-300"
          >
            <FaYoutube />
          </Link>
        </div>

        {/* Tagline with creative alternating colors on the words */}
        <p className="font-medium text-base mb-2">
          Together, we are{" "}
          <span className="inline-flex gap-1">
            <span className="alt-able font-semibold">Able</span>
            <span className="alt-hearts font-semibold">Hearts</span>
          </span>{" "}
          <span aria-hidden>💖</span>
        </p>

        {/* Copyright */}
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} AbleHearts. All rights reserved.
        </p>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes wave {
          0% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(-25px);
          }
          100% {
            transform: translateX(0);
          }
        }
        .animate-wave-slow {
          animation: wave 12s ease-in-out infinite;
        }
        .animate-wave-fast {
          animation: wave 8s ease-in-out infinite;
        }

        /* Alternating tagline colors (Able <-> Hearts) */
        @keyframes tagSwapA {
          0%,
          50% {
            color: #dce4ea;
          }
          51%,
          100% {
            color: #f43f5e; /* rose-600/700 */
          }
        }
        @keyframes tagSwapB {
          0%,
          50% {
            color: #f43f5e; /* rose-600/700 */
          }
          51%,
          100% {
            color: #dce4ea;
          }
        }
        .alt-able {
          animation: tagSwapA 3s ease-in-out infinite;
        }
        .alt-hearts {
          animation: tagSwapB 3s ease-in-out infinite;
        }
      `}</style>
    </footer>
  );
}
