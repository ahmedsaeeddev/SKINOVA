import { motion } from "framer-motion";

const AboutUs = () => {
  const sections = [
    {
      title: "Ahmed Saeed",
      content:
        "Founder and CEO of SKINOVA, Ahmed Saeed is a Full Stack Developer specializing in Typescript, React, HTML, CSS, and JavaScript. He brings his frontend expertise to SKINOVA, a laptop skin startup he co-founded with his cousin Zaki, a graphic designer. Beyond his work in web development, Ahmed also leads a multi-service online agency with Zaki, offering graphic design, web development, and UI design. Passionate about merging creativity with tech, he is dedicated to building engaging digital experiences and scaling his ventures."
    },
    {
      title: "Zaki",
      content:
        "Co-Founder and COO of SKINOVA, Zaki is a skilled graphic designer with expertise in software like Adobe Illustrator and Photoshop. Bringing creativity to the heart of SKINOVA’s brand, he handles the visual aspects of the laptop skin business. Alongside Ahmed, Zaki also co-leads a multi-service online agency that provides graphic design, web development, and UI design. His passion for innovative and appealing designs drives him to create standout digital and print visuals that elevate each project."
    },
    {
      title: "How we Help You?",
      content:
        "At SKINOVA, we create premium laptop skins that combine style, protection, and quality. With designs ranging from minimalistic to bold and vibrant, we aim to offer products that let customers express their personality while safeguarding their devices. Each skin is crafted with attention to detail, ensuring durability and a perfect fit. Each design is crafted with an eye for detail and a commitment to quality, allowing our customers to express their personality and protect their devices simultaneously."
    }
  ];

  return (
    <div className="about">
      <div className="flex justify-center items-center w-full h-auto text-[#E5C04B] px-6 py-16 sm:py-20 md:py-24">
        <div className="grid w-full max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              className="bg-[#1a1a1a] rounded-lg shadow-lg p-6 md:p-8 text-center transition-transform duration-300 hover:scale-105 hover:bg-[#292929] hover:shadow-xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <h2 className="text-lg md:text-xl font-semibold mb-4 text-[#E5C04B] transition-colors duration-300 hover:text-yellow-400">
                {section.title}
              </h2>
              <p className="text-sm text-gray-300 transition-colors duration-300 md:text-base hover:text-gray-100">
                {section.content}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
