import { motion } from "framer-motion";
import { useState } from "react";

const FAQSection = () => {
  // State to track the open question
  const [openQuestion, setOpenQuestion] = useState(null);

  // FAQs data
  const faqs = [
    {
      question: "What materials are used for the laptop skins?",
      answer:
        "Our skins are crafted from premium, high-quality vinyl that offers both durability and a unique, sleek look for your laptop."
    },
    {
      question: "Are the laptop skins easy to apply and remove?",
      answer:
        "Yes! Our skins are designed for easy application and removal, leaving no residue behind when removed."
    },
    {
      question: "Can I order a custom design for my laptop skin?",
      answer:
        "Absolutely! We offer custom design options. Simply get in touch with our team, and we’ll help bring your vision to life."
    },
    {
      question: "Do you ship internationally?",
      answer:
        "No, sorry to say, but currently we don't ship internationally. Our services are limited to Pakistan."
    }
  ];

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  return (
    <div className="flex flex-col justify-center items-center w-full h-auto bg-[#E5C04B] text-[#1a1a1a] px-6 py-16 sm:py-20">
      {/* Section Heading */}
      <div className="w-full max-w-4xl text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a]">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-700 text-sm md:text-base mt-4">
          Have questions? We’ve got answers! Click on a question to expand and
          learn more.
        </p>
      </div>

      {/* FAQ Items */}
      <div className="w-full max-w-4xl space-y-6">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            className="bg-[#1a1a1a] text-[#E5C04B] rounded-lg shadow-md overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {/* Question */}
            <div
              className="p-6 flex justify-between items-center cursor-pointer"
              onClick={() => toggleQuestion(index)}
            >
              <h3 className="text-lg md:text-xl font-semibold">
                {faq.question}
              </h3>
              <span className="text-yellow-400 text-xl font-bold">
                {openQuestion === index ? "-" : "+"}
              </span>
            </div>

            {/* Answer */}
            {openQuestion === index && (
              <motion.div
                className="bg-[#292929] p-6 text-gray-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {faq.answer}
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
