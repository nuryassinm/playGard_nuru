import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Cloud, Rocket } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: <Shield className="w-6 h-6 text-orange-500" />,
      title: 'Advanced Security',
      description: 'Whether its for a competitive match, or just a casual game server with friends. Servers has the perfect!'
    },
    {
      icon: <Zap className="w-6 h-6 text-purple-500" />,
      title: 'Top Class Performace',
      description: 'Whether its for a competitive match, or just a casual game server with friends. Servers has the perfect!'
    },
    {
      icon: <Cloud className="w-6 h-6 text-purple-500" />,
      title: 'Unlimited Scaling',
      description: 'Whether its for a competitive match, or just a casual game server with friends. Servers has the perfect!'
    },
    {
      icon: <Rocket className="w-6 h-6 text-orange-500" />,
      title: 'World Class Servers',
      description: 'Whether its for a competitive match, or just a casual game server with friends. Servers has the perfect!'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <div className="max-w-[95rem] mx-auto px-4 py-16">
       <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.8 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
      className="w-full flex flex-col items-center justify-center text-center space-y-8 py-10"
    >
      <h2 className="text-lg  text-gray-900 font-medium">
        See how over{' '}
        <span className="font-semibold">7,000+ Customers</span>{' '}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500 font-bold">
          Help the world work
        </span>
      </h2>

      {/* Replace these with your actual brand logos/paths */}
      <div className="flex flex-wrap items-center justify-between w-full gap-8">
        <img src="../assets/BBB Accredited Business.svg" alt="Persudo" className="h-16 opacity-25" />
        <img src="../assets/OpenAI New (1).svg" alt="Dribbble" className="h-16 opacity-25" />
        <img src="../assets/Productsup.svg" alt="Spotify" className="h-16 opacity-25" />
        <img src="../assets/Raycast Shortcut (1).svg" alt="DigitalOcean" className="h-16 opacity-25" />
        <img src="../assets/Trustpilot.svg" alt="Monday.com" className="h-16 opacity-25" />
        <img src="../assets/Productsup.svg" alt="Rakuten" className="h-16 opacity-25" />
      </div>
    </motion.div>

      <div className="grid lg:grid-cols-2 gap-16">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <h2 className="text-4xl font-bold text-gray-900">
            Why We are the<br />Best Server?
          </h2>
          <p className="text-gray-600">
            Our Palworld Server Hosting plans begin at <span className="text-red-500 font-semibold">$11.99</span>,<br />
            and are the perfect servers for you and your friends <br />
            to fully experience Palworld.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-gray-900 text-gray-200 rounded-full hover:bg-gray-800 transition-colors"
          >
            Discover Plans
          </motion.button>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default WhyChooseUs;