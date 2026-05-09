import React from 'react';
import { motion } from 'framer-motion';
import { PiWindowsLogoLight } from "react-icons/pi";
import { MdArrowRightAlt } from "react-icons/md";
const Hero = () => {
  return (
    <div className="relative "
    style={{
      background: "linear-gradient(270deg, rgba(238,232,246,1) 50%, rgba(245,246,248,1) 50%, rgba(245,246,248,1) 84%, rgba(245,246,248,1) 100%)",
    }}
    >
      <div className="max-w-[95rem] mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-xl">
            <span className="inline-flex items-center gap-2 text-md  text-[#FF6359] font-semibold mb-4">
              <PiWindowsLogoLight className='h-6 w-6'/>
              Reliable & Affordable Servers
            </span>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-3xl md:text-4xl font-bold text-gray-800  lg:text-7xl">
              Best Premium Gaming Server Hosting
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-4 lg:text-lg text-gray-600">
              We were able to run some of the most popular game servers in the world. Now you get a chance to run your servers with the same systems in an easy-to-use way.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-8">
              <a href="#" className="inline-flex items-center justify-center px-8 py-3 text-white rounded-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600">
                Start Your Server
              </a>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="mt-8 flex flex-col  gap-4">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-12 h-12 rounded-full border-2 border-white bg-gray-200 animate-pulse" />
                ))}
              </div>
              <span className="text-md text-gray-600 font-semibold">Trusted by Over 2500+ Users</span>
              <span className="italic text-gray-400">Many More</span>
            </motion.div>
          </motion.div>
          <img src="../assets/peakpx (1).jpg" className='absolute right-0 h-[550px] rounded-3xl opacity-25 p-4 ' alt="" />

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative">
            <div className="bg-white p-8 max-w-xl rounded-3xl shadow-xl overflow-hidden">
              {/* Skeleton loading for image */}
              <div className="aspect-video rounded-3xl bg-gray-200 animate-pulse">
                <img src="../assets/peakpx.jpg" className='rounded-3xl' alt="" />
              </div>
              <div className="p-6 bg-gradient-to-r text-center from-pink-500 to-purple-500 my-7 rounded-3xl text-white">
                <h3 className="md:text-3xl text-2xl font-bold mb-2">Assassins Creed Valhalla</h3>
                <p className="text-gray-50 mb-4">
                  Our Assassins Creed Server Hosting plans begin at $11.99 & are the perfect servers for you.
                </p>
                <button className="rounded-full p-2 bg-white shadow-lg hover:shadow-xl transition-shadow">
                  <MdArrowRightAlt className="h-6 w-6 -rotate-12 text-black" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;