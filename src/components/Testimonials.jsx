import React from 'react';
import { Twitter, Instagram, Facebook } from 'lucide-react';
import { motion } from 'framer-motion';
import { PiWindowsLogoLight } from "react-icons/pi";

const testimonials = [
  {
    id: 1,
    title: "Incredibly useful product",
    content: "Stellar's user-friendly dashboards have simplified our digital strategy management.",
    author: "Fig Nelson",
    username: "@fignel_sooon",
    socialIcon: <Twitter className="w-5 h-5 text-blue-400" />,
  },
  {
    id: 2,
    title: "Incredibly useful product",
    content: "Stellar has truly transformed our online presence. With its powerful analytics and seamless integration, we've gained invaluable insights.",
    author: "Sadie Berlin",
    username: "@sadieberlin00",
    socialIcon: <Instagram className="w-5 h-5 text-pink-500" />,
  },
  {
    id: 3,
    title: "Incredibly useful product",
    content: "We've gained invaluable insights and improved our SEO ranking, resulting in significant business growth",
    author: "Amaya Locosta",
    username: "@amaylocosta",
    socialIcon: <Facebook className="w-5 h-5 text-blue-600" />,
  },
  {
    id: 4,
    title: "Incredibly useful product",
    content: "We've gained invaluable insights and improved our SEO ranking, resulting in significant business growth",
    author: "Sadie Berlin",
    username: "@sadieberlin00",
    socialIcon: <Instagram className="w-5 h-5 text-pink-500" />,
  },
  {
    id: 5,
    title: "Incredibly useful product",
    content: "Stellar's user-friendly dashboards have simplified our digital strategy management.",
    author: "Sadie Berlin",
    username: "@sadieberlin00",
    socialIcon: <Instagram className="w-5 h-5 text-pink-500" />,
  },
  {
    id: 6,
    title: "Incredibly useful product",
    content: "Stellar's user-friendly dashboards have simplified our digital strategy management.",
    author: "Sadie Berlin",
    username: "@sadieberlin00",
    socialIcon: <Instagram className="w-5 h-5 text-pink-500" />,
  },
];

const TestimonialCard = ({ testimonial }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white p-6 rounded-2xl shadow-sm"
    >
      <h3 className="font-bold text-lg mb-3">{testimonial.title}</h3>
      <p className="text-gray-600 mb-6 text-sm leading-relaxed">
        {testimonial.content}
      </p>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gray-200 rounded-full overflow-hidden">
            {/* Avatar placeholder */}
            <div className="w-full h-full bg-gray-300"></div>
          </div>
          <div>
            <p className="font-medium text-sm">{testimonial.author}</p>
            <p className="text-sm text-gray-500">{testimonial.username}</p>
          </div>
        </div>
        {testimonial.socialIcon}
      </div>
    </motion.div>
  );
};

const Testimonials = () => {
  return (
    <div className=" py-16 px-4">
      <div className="max-w-[95rem] mx-auto">
        <div className="text-center mb-12">
        <span className="inline-flex bg-white p-1 rounded-md items-center gap-2 text-md  text-[#FF6359] font-semibold mb-4">
          <PiWindowsLogoLight className='h-6 w-6'/>
          Testimonial 
        </span>          <h2 className="md:text-4xl text-2xl font-bold mt-2 mb-4">
            Our Clients' Experiences
          </h2>
          <h3 className="md:text-4xl text-2xl font-bold">Speak Volumes</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.slice(0, 3).map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {testimonials.slice(3, 5).map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>

        <motion.div 
          className="flex justify-center  relative bottom-16"
          whileHover={{ scale: 1.05 }}
        >
          <button className="bg-gradient-to-r from-purple-500  to-pink-500 text-white px-6 py-3 rounded-full flex items-center gap-2">
            More Testimonial
            {/* <Twitter className="w-4 h-4" /> */}
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;