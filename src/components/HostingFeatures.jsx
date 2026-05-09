import React from 'react';
import { motion } from 'framer-motion';
import { Server, Shield, Headphones, Map, Shield as ShieldIcon, Zap } from 'lucide-react';
import { PiWindowsLogoLight } from "react-icons/pi";

const HostingFeatures = () => {
  const features = [
    {
      icon: <Server className="w-8 h-8 text-pink-500" />,
      title: 'Enterprise Hardware',
      description: 'AI-powered translation tools Save per day on ad management Create generate caption, Create generate caption.'
    },
    {
      icon: <Shield className="w-8 h-8 text-purple-500" />,
      title: 'Budget Friendly',
      description: 'AI-powered translation tools Save per day on ad management Create generate caption, Create generate caption.'
    },
    {
      icon: <Headphones className="w-8 h-8 text-pink-500" />,
      title: 'Amazing Support',
      description: 'AI-powered translation tools Save per day on ad management Create generate caption, Create generate caption.'
    },
    {
      icon: <Map className="w-8 h-8 text-purple-500" />,
      title: 'Premium Locations',
      description: 'AI-powered translation tools Save per day on ad management Create generate caption, Create generate caption.'
    },
    {
      icon: <ShieldIcon className="w-8 h-8 text-pink-500" />,
      title: 'DDoS Protection',
      description: 'AI-powered translation tools Save per day on ad management Create generate caption, Create generate caption.'
    },
    {
      icon: <Zap className="w-8 h-8 text-purple-500" />,
      title: 'Instant Setup',
      description: 'AI-powered translation tools Save per day on ad management Create generate caption, Create generate caption.'
    }
  ];

  return (
    <div className="max-w-[95rem] mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12 "
      >
        <span className="inline-flex bg-white p-1 rounded-md items-center gap-2 text-md  text-[#FF6359] font-semibold mb-4">
          <PiWindowsLogoLight className='h-6 w-6'/>
          Feature
        </span>

        <h2 className="md:text-4xl text-2xl font-bold">
          Hosting tailored to<br />your needs
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group hover:bg-white hover:shadow-lg rounded-xl p-6 transition-all duration-300"
          >
            <div className="mb-4">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold mb-3">
              {feature.title}
            </h3>
            <p className="text-gray-600">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default HostingFeatures;