import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const PopularGames = () => {
  const games = [
    {
      title: "Call Of Duty Black OPS",
      image: "/placeholder-cod.jpg", // Replace with actual image
      price: "$8.00/month",
    },
    {
      title: "Grand Theft Auto V",
      image: "/placeholder-gta.jpg",
      price: "$7.50/month",
    },
    {
      title: "Little Hope",
      image: "/placeholder-little-hope.jpg",
      price: "$6.99/month",
    },
    {
      title: "Red Dead Redemption",
      image: "/placeholder-rdr.jpg",
      price: "$8.50/month",
    },
    {
      title: "Rust",
      image: "/placeholder-rust.jpg",
      price: "$7.99/month",
    },
    {
      title: "ARK",
      image: "/placeholder-ark.jpg",
      price: "$6.50/month",
    },
    {
      title: "7 Days to Die",
      image: "/placeholder-7days.jpg",
      price: "$5.99/month",
    },
  ];

  return (
    <div className="max-w-[85rem] mx-auto py-16 overflow-hidden">
      <div className="px-4 mb-12">
        <span className="inline-flex items-center gap-2 text-sm font-medium text-pink-500 mb-4">
          <span className="w-2 h-2 inline-block bg-pink-500 rounded-full"></span>
          Features
        </span>
        <h2 className="text-4xl font-bold">
          Discover Popular And<br />Trending Games
        </h2>
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