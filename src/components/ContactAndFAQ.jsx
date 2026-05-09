import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, Plus, Minus } from 'lucide-react';

const ContactAndFAQ = () => {
  const [openQuestion, setOpenQuestion] = useState('where-order');

  const faqCategories = [
    { id: 'account', label: 'Account' },
    { id: 'orders', label: 'Order & Purchases' },
    { id: 'returns', label: 'Returns & Refunds' },
    { id: 'shipping', label: 'Shipping & Tracking' },
    { id: 'billing', label: 'Fees & Billing' },
    { id: 'other', label: 'Other' },
  ];

  const faqQuestions = [
    {
      id: 'where-order',
      question: 'Where is my order?',
      answer: 'Depending on the delivery option you selected at checkout well email you a tracking link after your order has been shipped. Follow this link to check the status of your order. We can also send you notifications about any important updates regarding your order – just make sure youve opted into notifications.'
    },
    {
      id: 'return-order',
      question: 'How do I return my order?',
      answer: 'Details about returns process...'
    },
    {
      id: 'store-locations',
      question: 'Where can I view store locations and hours?',
      answer: 'Store location information...'
    },
    {
      id: 'delivery-address',
      question: 'How do I change my delivery address?',
      answer: 'Address change process...'
    },
    {
      id: 'seller-feedback',
      question: 'What is the Seller Feedback Rating?',
      answer: 'Seller rating explanation...'
    },
    {
      id: 'order-arrived',
      question: "My order hasn't arrived yet. Where is it?",
      answer: 'Order tracking information...'
    },
  ];

  return (
    <div className="max-w-[85rem] mx-auto px-4 py-16">
      {/* Contact Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <span className="inline-flex items-center gap-2 text-sm font-medium text-pink-500 mb-4">
          <span className="w-2 h-2 inline-block bg-pink-500 rounded-full"></span>
          Get in touch
        </span>
        <h2 className="md:text-4xl text-xl lg:text-6xl font-bold mb-8">
          Have Questions? Contact us<br />for Expert Advice
        </h2>

        <div className="flex flex-col md:flex-row justify-center gap-4">
          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href="#"
            className="flex items-center gap-3 px-6 py-4 bg-purple-50 text-purple-600 rounded-xl hover:bg-purple-100 transition-colors"
          >
            <Mail className="w-5 h-5" />
            <div className="text-left">
              <div className="font-semibold">Open a Ticket</div>
              <div className="text-sm opacity-75">Billing System</div>
            </div>
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href="#"
            className="flex items-center gap-3 px-6 py-4 bg-pink-50 text-pink-600 rounded-xl hover:bg-pink-100 transition-colors"
          >
            <MessageSquare className="w-5 h-5" />
            <div className="text-left">
              <div className="font-semibold">Connect On Discord</div>
              <div className="text-sm opacity-75">Discord</div>
            </div>
          </motion.a>
        </div>
      </motion.div>

      {/* FAQ Section */}
      <div className="grid lg:grid-cols-12 gap-8">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="md:col-span-3"
        >
          <h3 className="md:text-2xl text-xl font-bold mb-6">
            Have Questions?<br />
            We Have a Answers!
          </h3>
          <ul className="space-y-2">
            {faqCategories.map((category) => (
              <li key={category.id}>
                <a
                  href={`#${category.id}`}
                  className={`block px-4 py-2 rounded-lg ${
                    category.id === 'orders' 
                      ? 'text-pink-600 bg-pink-50' 
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  {category.label}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="md:col-span-9"
        >
          <div className="space-y-4">
            {faqQuestions.map((faq) => (
              <div 
                key={faq.id}
                className="border-b border-gray-200 pb-4"
              >
                <button
                  onClick={() => setOpenQuestion(openQuestion === faq.id ? '' : faq.id)}
                  className="w-full flex justify-between items-center py-2"
                >
                  <span className="md:text-xl text-sm  font-medium text-gray-900">{faq.question}</span>
                  {openQuestion === faq.id ? (
                    <Minus className="w-5 h-5 text-gray-500" />
                  ) : (
                    <Plus className="w-5 h-5 text-gray-500" />
                  )}
                </button>
                {openQuestion === faq.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-2 md:text-lg text-xs text-gray-600"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactAndFAQ;