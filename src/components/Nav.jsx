import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Globe, Menu, X } from 'lucide-react';
import { AiOutlineCloudSync } from 'react-icons/ai';

// Variants for smooth dropdown animations
const dropdownVariants = {
  hidden: { opacity: 0, y: -10, height: 0 },
  visible: { opacity: 1, y: 0, height: 'auto' },
  exit: { opacity: 0, y: -10, height: 0 },
};

// Variants for the mobile menu slide-down
const mobileMenuVariants = {
  hidden: { opacity: 0, height: 0 },
  visible: { opacity: 1, height: 'auto' },
  exit: { opacity: 0, height: 0 },
};

const Navbar = () => {
  // Dropdown states
  const [isHostingOpen, setIsHostingOpen] = useState(false);
  const [isGameOpen, setIsGameOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  // Mobile menu toggle
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="z-50 w-full text-sm py-4"
      style={{
        background:
          "linear-gradient(270deg, rgba(238,232,246,1) 50%, rgba(245,246,248,1) 50%, rgba(245,246,248,1) 84%, rgba(245,246,248,1) 100%)",
      }}
    >
      <nav className="max-w-[95rem] w-full mx-auto px-4 flex items-center justify-between">
        {/* Left side: Logo + Desktop Nav Links */}
        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-2 rounded-md transform rotate-45">
              <AiOutlineCloudSync className="h-6 w-6 -rotate-45" />
            </div>
            <span className="text-2xl font-bold">PlayGard</span>
          </a>

          {/* Desktop Navigation (show on md and above) */}
          <div className="hidden md:flex items-center gap-5">
            {/* Hosting Server Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsHostingOpen(!isHostingOpen)}
                className="flex items-center gap-2 font-medium text-gray-900 hover:text-gray-400"
              >
                Hosting Server
                <ChevronDown className="h-4 w-4" />
              </button>
              <AnimatePresence>
                {isHostingOpen && (
                  <motion.div
                    className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2 overflow-hidden z-10"
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={dropdownVariants}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                  >
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Random Link 1
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Random Link 2
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Random Link 3
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Game Server Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsGameOpen(!isGameOpen)}
                className="flex items-center gap-2 font-medium text-gray-900 hover:text-gray-400"
              >
                Game Server
                <ChevronDown className="h-4 w-4" />
              </button>
              <AnimatePresence>
                {isGameOpen && (
                  <motion.div
                    className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2 overflow-hidden z-10"
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={dropdownVariants}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                  >
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Random Link A
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Random Link B
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Random Link C
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Simple Link */}
            <a href="#" className="font-medium text-gray-900 hover:text-gray-400">
              Blog
            </a>
          </div>
        </div>

        {/* Right side: Desktop "Language", "Sign up", "Get Started" */}
        <div className="hidden md:flex items-center gap-4">
          {/* Language Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsLanguageOpen(!isLanguageOpen)}
              className="flex items-center gap-2 text-md font-semibold text-gray-900 hover:text-gray-400"
            >
              <Globe className="h-4 w-4" />
              EN
              <ChevronDown className="h-4 w-4" />
            </button>
            <AnimatePresence>
              {isLanguageOpen && (
                <motion.div
                  className="absolute top-full right-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2 overflow-hidden z-10"
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={dropdownVariants}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                >
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    English
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Spanish
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    French
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <a href="#" className="text-gray-900 text-md font-semibold hover:text-gray-400">
            Sign up
          </a>

          <a
            href="#"
            className="px-4 py-3 text-lg bg-black font-semibold text-gray-200 rounded-full hover:bg-gray-800"
          >
            Get Started
          </a>
        </div>

        {/* Mobile Menu Toggle (hamburger) - visible on md and below */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-900 focus:outline-none"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden bg-white shadow-lg"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={mobileMenuVariants}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            <div className="px-4 pt-4 pb-2 space-y-4">
              {/* Hosting Server Dropdown (Mobile) */}
              <div className="border-b pb-2">
                <button
                  onClick={() => setIsHostingOpen(!isHostingOpen)}
                  className="w-full flex items-center justify-between font-medium text-gray-900"
                >
                  Hosting Server
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-300 ${
                      isHostingOpen ? 'rotate-180' : 'rotate-0'
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {isHostingOpen && (
                    <motion.div
                      className="mt-2 pl-4 space-y-2"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <a href="#" className="block text-gray-700">
                        Random Link 1
                      </a>
                      <a href="#" className="block text-gray-700">
                        Random Link 2
                      </a>
                      <a href="#" className="block text-gray-700">
                        Random Link 3
                      </a>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Game Server Dropdown (Mobile) */}
              <div className="border-b pb-2">
                <button
                  onClick={() => setIsGameOpen(!isGameOpen)}
                  className="w-full flex items-center justify-between font-medium text-gray-900"
                >
                  Game Server
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-300 ${
                      isGameOpen ? 'rotate-180' : 'rotate-0'
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {isGameOpen && (
                    <motion.div
                      className="mt-2 pl-4 space-y-2"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <a href="#" className="block text-gray-700">
                        Random Link A
                      </a>
                      <a href="#" className="block text-gray-700">
                        Random Link B
                      </a>
                      <a href="#" className="block text-gray-700">
                        Random Link C
                      </a>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Blog (Mobile) */}
              <div className="border-b pb-2">
                <a href="#" className="block font-medium text-gray-900">
                  Blog
                </a>
              </div>

              {/* Language Selector (Mobile) */}
              <div className="border-b pb-2">
                <button
                  onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                  className="w-full flex items-center justify-between font-medium text-gray-900"
                >
                  Language
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-300 ${
                      isLanguageOpen ? 'rotate-180' : 'rotate-0'
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {isLanguageOpen && (
                    <motion.div
                      className="mt-2 pl-4 space-y-2"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <a href="#" className="block text-gray-700">
                        English
                      </a>
                      <a href="#" className="block text-gray-700">
                        Spanish
                      </a>
                      <a href="#" className="block text-gray-700">
                        French
                      </a>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Sign Up + Get Started (Mobile) */}
              <div className="flex flex-col space-y-2 border-b pb-2">
                <a href="#" className="font-medium text-gray-900">
                  Sign up
                </a>
                <a
                  href="#"
                  className="px-4 py-3 text-lg bg-black font-semibold text-gray-200 rounded-full text-center hover:bg-gray-800"
                >
                  Get Started
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
