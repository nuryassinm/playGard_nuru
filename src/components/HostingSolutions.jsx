import React from 'react';
import { motion } from 'framer-motion';
import { Server, Database, Box, HardDrive } from 'lucide-react';

const HostingSolutions = () => {
  const solutions = [
    {
      icon: <Server className="w-8 h-8" />,
      title: 'Website Hosting',
      description: 'The quality of your website is vital loading faster than the speed of where we come in!',
      pricing: 'Starting at: $1.45 / slot'
    },
    {
      icon: <Box className="w-8 h-8" />,
      title: 'Minecraft Hosting',
      description: 'The quality of your website is vital loading faster than the speed of light thats where.',
      pricing: 'From: $1/GB'
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'VPS Hosting',
      description: 'The quality of your website is vital loading faster than the speed of where we come.',
      pricing: 'Starting at: $1.45 / slot'
    },
    {
      icon: <HardDrive className="w-8 h-8" />,
      title: 'Dedicated Servers',
      description: 'The quality of your website is vital loading faster than the speed of where we come.',
      pricing: 'Starting at: $1.45 / slot'
    }
  ];

  return (
    <div className="max-w-[95rem] mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h2 className="md:text-4xl text-2xl font-bold mb-4">
          High Performance Hosting<br />Server Solutions
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="grid lg:grid-cols-4 md:grid-cols-2 gap-6"
      >
        {solutions.map((solution, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 + 0.3 }}
            className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="mb-4 text-gray-600">
              {solution.icon}
            </div>
            <h3 className="text-xl font-semibold mb-3">
              {solution.title}
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              {solution.description}
            </p>
            <div className="text-sm">
              {solution.pricing.includes('$1/GB') ? (
                <span className="inline-block px-3 py-1 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full">
                  {solution.pricing}
                </span>
              ) : (
                <span className="text-red-500 font-semibold">
                  {solution.pricing}
                </span>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default HostingSolutions;