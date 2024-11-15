import { motion } from "framer-motion";

const VisionAndValues = () => {
  // Content for each value
  const values = [
    {
      title: "Innovation",
      content:
        "Pushing the boundaries of creativity to deliver unique, inspiring designs for everyone."
    },
    {
      title: "Quality",
      content:
        "Crafting each product with precision and attention to detail to ensure durability and style."
    },
    {
      title: "Customer Focus",
      content:
        "Our customers’ satisfaction drives everything we do, from design to service."
    }
  ];

  return (
    <div className="w-full bg-[#090909]">

      <div className="flex flex-col justify-center items-center w-[100%] h-auto bg-[#090909] text-[#E5C04B] px-4 py-12 sm:py-16">
        <div className="w-full max-w-5xl text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#E5C04B]">
            Vision & Values
          </h2>
          <p className="text-gray-300 text-sm md:text-base mt-2">
            We’re committed to building a brand that inspires, delivering high-quality products and creating meaningful connections with our customers.
          </p>
        </div>
        <div className="flex flex-col space-y-6 w-full max-w-5xl">
          {values.map((value, index) => (
            <motion.div
              key={index}
              className="bg-[#1a1a1a] rounded-md p-6 md:p-8 text-center transition-transform duration-300 hover:scale-105 hover:bg-[#292929]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-lg font-semibold mb-2 text-[#E5C04B] transition-colors duration-300 hover:text-yellow-400">
                {value.title}
              </h3>
              <p className="text-gray-300 text-sm md:text-base">
                {value.content}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VisionAndValues;
