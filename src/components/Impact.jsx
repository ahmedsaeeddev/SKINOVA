import { motion } from "framer-motion";

const OurImpact = () => {
  return (
    <>
      {/* <div className="flex items-center justify-center w-full h-auto px-6 py-16 impacts sm:py-24"> */}
      <div className="text-[#1a1a1a]">
        <div className="w-full max-w-6xl impact text-center">
          {/* Section Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-8">
            Our Impact
          </h2>
          <p className="mb-12 text-base text-gray-800 md:text-lg">
            At SKINOVA, we are committed to more than just beautiful designs.
            We strive to create a positive impact through sustainable practices,
            artistic expression, and an unparalleled customer experience.
          </p>

          {/* Impact Cards */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <motion.div
              className="flex flex-col items-center text-center p-8 bg-[#1a1a1a] rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-semibold text-[#E6C14B] mb-4">
                Sustainability
              </h3>
              <p className="text-gray-300">
                We are dedicated to reducing waste by using eco-friendly materials in all our laptop skins, ensuring our products are as sustainable as they are stylish.
              </p>
            </motion.div>
            <motion.div
              className="flex flex-col items-center text-center p-8 bg-[#1a1a1a] rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-xl font-semibold text-[#E6C14B] mb-4">
                Creative Expression
              </h3>
              <p className="text-gray-300">
                Every design at SKINOVA is crafted to empower users to express their individuality, from vibrant graphics to subtle minimalist designs.
              </p>
            </motion.div>
            <motion.div
              className="flex flex-col items-center text-center p-8 bg-[#1a1a1a] rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3 className="text-xl font-semibold text-[#E6C14B] mb-4">
                Customer Experience
              </h3>
              <p className="text-gray-300">
                Our customers are at the heart of everything we do. We focus on delivering excellent service, fast shipping, and designs that make a lasting impression.
              </p>
            </motion.div>
          </div>
        </div>
        {/* </div> */}
      </div>
    </>
  );
};

export default OurImpact;
