import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { PiWindowsLogoLight } from "react-icons/pi";

const PopularGames = () => {
  const games = [
    {
      title: "Call Of Duty Black OPS",
      image: "../assets/peakpx (3).jpg", // Replace with actual image
      price: "$8.00/month",
    },
    {
      title: "Grand Theft Auto V",
      image: "../assets/peakpx (2).jpg",
      price: "$7.50/month",
    },
    {
      title: "Little Hope",
      image: "../assets/peakpx (5).jpg",
      price: "$6.99/month",
    },
    {
      title: "Red Dead Redemption",
      image: "../assets/peakpx (4).jpg",
      price: "$8.50/month",
    },
    {
      title: "Rust",
      image: "../assets/peakpx (8).jpg",
      price: "$7.99/month",
    },
    {
      title: "ARK",
      image: "../assets/peakpx (7).jpg",
      price: "$6.50/month",
    },
    {
      title: "7 Days to Die",
      image: "../assets/peakpx (9).jpg",
      price: "$5.99/month",
    },
  ];

  return (
    <div className="max-w-[120rem] mx-auto py-16 overflow-hidden">
      <div className="px-4 mb-12 md:max-w-3xl flex justify-center ">
        <div>
        <span className="inline-flex bg-white p-1 rounded-full items-center gap-2 text-md  text-[#FF6359] font-semibold mb-4">
          <PiWindowsLogoLight className='h-6 w-6'/>
          PopularGames
        </span>
        <h2 className="md:text-4xl text-2xl font-bold">
          Discover Popular And<br />Trending Games
        </h2>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative"
      >
        {/* Gradient overlays for edge fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>

        <div className="flex gap-6 px-4 -mx-16 overflow-x-auto hide-scrollbar">
          {games.map((game, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative flex-none w-80 group"
            >
              <div className="relative rounded-2xl overflow-hidden">
                {/* Placeholder for game image */}
                <div className="aspect-[4/5] bg-gray-200 relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <img 
                    src={game.image} 
                    alt={game.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Game info overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">{game.title}</h3>
                  <div className="flex items-center justify-between">
                    <p className="text-sm opacity-90">
                      Servers Starting from: <span className="text-pink-500">{game.price}</span>
                    </p>
                    <button className="opacity-0 group-hover:opacity-100 transition-opacity bg-white text-black px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-100">
                      Discover
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <style jsx>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default PopularGames;