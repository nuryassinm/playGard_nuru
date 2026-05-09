// App.jsx
import { motion } from "framer-motion";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import { useState, useEffect } from "react";
import Testimonials from "../components/Testimonials";
import WhyChooseUs from "../components/WhyChooseUs";
import Footer from "../components/Footer"
import StatsPanel from "../components/StatsPanel";
import HostingSolutions from "../components/HostingSolutions";
import HostingFeatures from "../components/HostingFeatures";
import ContactAndFAQ from "../components/ContactAndFAQ";
import PopularGames from "../components/PopularGames"
function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="min-h-screen font-mono overflow-hidden bg-[#F5F6F8]">
      <Nav />
      {isLoading ? (
        <SkeletonLoader />
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Hero />
          <WhyChooseUs />
          <HostingSolutions />
          <StatsPanel />
          <HostingFeatures />
          <Testimonials />
          <PopularGames/>
          <ContactAndFAQ />
          <Footer />

        </motion.div>
      )}
    </div>
  );
}



// SkeletonLoader.jsx
const SkeletonLoader = () => {
  return (
    <div className="container mx-auto px-4 py-20 animate-pulse">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <div className="h-16 bg-gray-200 mb-4 w-3/4"></div>
          <div className="h-4 bg-gray-200 mb-2 w-full"></div>
          <div className="h-4 bg-gray-200 mb-6 w-3/4"></div>
          <div className="h-12 bg-gray-200 w-40">.</div>
        </div>
        <div className="h-96 bg-gray-200 rounded-xl"></div>
      </div>
    </div>
  );
};

export default Home;