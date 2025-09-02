"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Menu, X, Home, Info, HeartHandshake, Mail } from "lucide-react";

// Define types for the variants
type MenuVariants = {
  closed: {
    opacity: number;
    height: number | string;
    transition: {
      duration: number;
      ease: string;
    };
  };
  open: {
    opacity: number;
    height: number | string;
    transition: {
      duration: number;
      ease: string;
    };
  };
};

type ItemVariants = {
  closed: {
    opacity: number;
    x: number;
    transition: {
      duration: number;
    };
  };
  open: {
    opacity: number;
    x: number;
    transition: {
      duration: number;
      ease: string;
    };
  };
};

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/", icon: Home },
    { name: "About", href: "/about", icon: Info },
    { name: "Donate", href: "/donate", icon: HeartHandshake },
    { name: "Contact", href: "/contact", icon: Mail },
  ];

  // Animation variants with proper typing
  const menuVariants: Variants | MenuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: [0.42, 0, 0.58, 1], // cubic-bezier easing equivalent to easeInOut
      },
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const itemVariants: Variants | ItemVariants = {
    closed: {
      opacity: 0,
      x: -20,
      transition: {
        duration: 0.2,
      },
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: [0.42, 0, 0.58, 1], // cubic-bezier easing equivalent to easeOut
      },
    },
  };

  // Icon animation variants
  const iconVariants: Variants = {
    initial: { rotate: -90, opacity: 0 },
    animate: { rotate: 0, opacity: 1 },
    exit: { rotate: 90, opacity: 0 },
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/70 border-b border-white/20">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo + Brand Name */}
        <Link href="/" className="flex items-center space-x-3 group">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Image
              src="/images/ah-mb.png"
              alt="AbleHearts Logo"
              width={48}
              height={48}
              className="rounded-full w-10 h-10 md:w-12 md:h-12 object-cover shadow-lg group-hover:shadow-xl transition-shadow duration-300"
              priority
            />
          </motion.div>
          <span className="font-bold text-lg md:text-xl text-brand-dark group-hover:text-rose-600 transition-colors duration-300">
            AbleHearts
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6 font-medium">
          {navItems.map(({ name, href, icon: Icon }) => (
            <Link
              key={name}
              href={href}
              className="flex items-center gap-2 px-4 py-2 rounded-xl hover:bg-white/50 hover:shadow-sm transition-all duration-300 group/nav"
            >
              <Icon className="w-5 h-5 text-rose-500 group-hover/nav:text-rose-600 transition-colors duration-300" />
              <span className="text-brand-dark group-hover/nav:text-rose-600 transition-colors duration-300">
                {name}
              </span>
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-white/50 transition-colors duration-300"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
          aria-expanded={isOpen}
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close-icon"
                variants={iconVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.2 }}
              >
                <X className="w-6 h-6 text-brand-dark" />
              </motion.div>
            ) : (
              <motion.div
                key="menu-icon"
                variants={iconVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.2 }}
              >
                <Menu className="w-6 h-6 text-brand-dark" />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* Mobile Nav with smooth animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            className="md:hidden backdrop-blur-lg bg-white/90 border-t border-white/20 overflow-hidden"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            aria-hidden={!isOpen}
          >
            <div className="px-6 py-4 space-y-3">
              {navItems.map(({ name, href, icon: Icon }, index) => (
                <motion.div
                  key={name}
                  variants={itemVariants}
                  initial="closed"
                  animate="open"
                  exit="closed"
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={href}
                    className="flex items-center gap-3 py-3 px-4 rounded-xl hover:bg-white/50 transition-colors duration-300 group/mobile"
                    onClick={() => setIsOpen(false)}
                  >
                    <Icon className="w-5 h-5 text-rose-500 group-hover/mobile:text-rose-600 transition-colors duration-300" />
                    <span className="font-medium text-brand-dark group-hover/mobile:text-rose-600 transition-colors duration-300">
                      {name}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
