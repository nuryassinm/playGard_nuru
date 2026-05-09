import React from 'react';
import { motion } from 'framer-motion';
import { Cloud, Globe } from 'lucide-react';
import { LineChart, Line, ResponsiveContainer } from 'recharts';
import { PiWindowsLogoLight } from "react-icons/pi";
import { IoMdCloud } from "react-icons/io";

const StatsPanel = () => {
  const data = [
    { value: 40 }, { value: 60 }, { value: 45 }, { value: 70 }, 
    { value: 55 }, { value: 65 }, { value: 50 }, { value: 75 }
  ];

  return (
    <div className="max-w-[95rem] mx-auto px-4 py-10 lg:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20">
        {/* Left Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          className="relative w-full"
        >
          <div className="absolute inset-0 bg-gradient-to-br h-[400px] sm:h-[500px] from-pink-200 to-purple-200 rounded-3xl"></div>
          <div className="bg-white absolute mt-40 sm:mt-44 shadow-md right-1/2 flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full">
              <IoMdCloud className="h-10 w-10 sm:h-12 sm:w-12 text-purple-200" />
            </div>
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="relative md:max-w-xs max-w-[13rem] -right-36  md:-right-1/2 z-10 p-6 sm:p-8"
          >
            {/* Customer Panel 1 */}
            <div className="bg-white w-full max-w-xs sm:max-w-md absolute -right-6 sm:-right-12 rounded-xl shadow-lg p-4 sm:p-6 mb-6">
              <h3 className="text-sm font-medium text-gray-600 mb-2">Customer Panel</h3>
              <div className="h-24 sm:h-32">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={data}>
                    <Line type="monotone" dataKey="value" stroke="#8884d8" strokeWidth={2} dot={false} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <div className="space-y-2 mt-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Total Revenue</span>
                  <span className="font-medium">$16,248.50</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-purple-500 h-2 rounded-full" style={{ width: '75%' }}></div>
                </div>
              </div>
            </div>

            {/* Floating Cloud Icon */}
            

            {/* Customer Panel 2 */}
            <div className="bg-white w-full max-w-xs sm:max-w-sm absolute top-80 sm:top-96 -left-1/2 sm:-left-1/2 rounded-xl shadow-lg p-4 sm:p-6 mb-6">
              <h3 className="text-sm font-medium text-gray-600 mb-2">Customer Panel</h3>
              <p className="text-sm">Lorem ipsum dolor</p>
              <div className="space-y-2 mt-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Total Revenue</span>
                  <span className="font-medium">$16,248.50</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-purple-500 h-2 rounded-full" style={{ width: '5%' }}></div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-purple-500 h-2 rounded-full" style={{ width: '75%' }}></div>
                </div>
              </div>
            </div>
           
          </motion.div>
        </motion.div>

        {/* Right Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-6 pt-[410px] lg:pt-0 text-center sm:text-left"
        >
          <span className="inline-flex items-center gap-2 text-md text-[#FF6359] font-semibold mb-4">
            <PiWindowsLogoLight className="h-6 w-6" />
            About Company
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Why We are the Best <br className="hidden sm:block" /> Server?
          </h2>

          <p className="text-gray-600 max-w-full sm:max-w-xl">
            Our main focus is on quality and making sure you have everything you need to succeed. It's like buying a car and seeing all the tick boxes for additional features, except all of these boxes are ticked and included for free! That's just how we roll.
          </p>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 ">
            <div className="bg-white rounded-xl p-6 shadow-lg flex items-center space-x-4">
              <Cloud className="w-10 sm:w-12 h-10 sm:h-12 bg-[#FAF3FB] p-2 rounded-md text-purple-500" />
              <div>
                <h4 className="text-2xl sm:text-3xl font-bold">5600+</h4>
                <p className="text-sm text-gray-600">Servers Currently Hosted</p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg flex items-center space-x-4">
              <Globe className="w-10 sm:w-12 h-10 sm:h-12 bg-[#FAF3FB] p-2 rounded-md text-purple-500" />
              <div>
                <h4 className="text-2xl sm:text-3xl font-bold">2600+</h4>
                <p className="text-sm text-gray-600">Clients Around the Globe</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default StatsPanel;
