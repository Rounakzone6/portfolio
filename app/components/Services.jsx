import { assets, serviceData } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const Services = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="services"
      className="w-full px-[12%] py-10 scroll-mt-20"
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        What I Offer
      </motion.h4>
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="text-center text-5xl font-Ovo"
      >
        My Services
      </motion.h2>
      <div className="flex flex-col items-center ">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center my-5 max-w-2xl font-Ovo"
        >
          I am a passionate software engineering student, I have developed
          strong problem-solving skills. I have also gained hands-on experience
          through various projects.
        </motion.p>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.9 }}
        className="grid grid-cols-auto gap-2 my-5"
      >
        {serviceData.map(({ icon, title, description, link }, index) => (
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="dark:hover:bg-darkHover dark:hover:shadow-white border border-gray-400 rounded-lg p-8 hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black cursor-pointer"
            key={index}
          >
            <Image src={icon} alt="Icon" className="w-10" />
            <h3 className="text-lg my-4 text-gray-700 dark:text-white">
              {title}
            </h3>
            <p className="text-sm text-gray-600 leading-5 dark:text-white/80">
              {description}
            </p>
            <a className="flex items-center gap-5 text-sm mt-5" href={link}>
              Read more{" "}
              <Image src={assets.right_arrow} alt="" className="w-4" />
            </a>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Services;
