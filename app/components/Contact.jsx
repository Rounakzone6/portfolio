import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "motion/react";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "783e7c46-dc48-4762-81a7-a8b8bd7107f2");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="contact"
      className="w-full px-[12%] py-10 scroll-mt-20 bg-[url('/footer-bg-color.png')] bg-no-repeat bg-center bg-[length:90%_auto] dark:bg-none"
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        Connect with me
      </motion.h4>
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="text-center text-5xl font-Ovo"
      >
        Get In Touch
      </motion.h2>
      <div className="flex items-center justify-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center my-5 max-w-2xl font-Ovo"
        >
          I'd love to hear from you! If you have any questions, comments, or
          feedback, please use the form below. I would love to answer you
          questions.
        </motion.p>
      </div>
      <motion.form
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        onSubmit={onSubmit}
        className="max-w-2xl mx-auto"
      >
        <div className="grid grid-cols-auto gap-6 mt-10 mb-8">
          <motion.input
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="dark:bg-darkHover/30 dark:border-white/90 flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white"
            name="name"
            type="text"
            placeholder="Enter Your Name"
            required
          />
          <motion.input
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="dark:bg-darkHover/30 dark:border-white/90 flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white"
            name="email"
            type="email"
            placeholder="Enter Your Email"
            required
          />
        </div>
        <motion.textarea
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.3 }}
          className="dark:bg-darkHover/30 dark:border-white/90 w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6"
          name="message"
          rows="6"
          placeholder="Enter Your Message"
          required
        ></motion.textarea>
        <motion.button
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          type="submit"
          className="dark:bg-transparent dark:border-[0.5px] dark:hover:bg-darkHover py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500"
        >
          Submit Now
          <Image src={assets.right_arrow_white} alt="" className="w-4" />
        </motion.button>
        <p className="mt-4">{result}</p>
      </motion.form>
    </motion.div>
  );
};

export default Contact;
