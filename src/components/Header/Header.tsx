import React from "react";
import Image from "next/image";
import { assets } from "../../../assets/assets";
import { motion } from "motion/react";

const Header = () => {
  return (
    <div className="w-11-/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      >
        <Image
          src={assets.profile_img}
          alt="Profile Image"
          className="rounded-full w-32"
        ></Image>
      </motion.div>
      <motion.h3
        className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo"
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        Hi! I am Mary Kilduff
        <Image src={assets.hand_icon} alt="hand icon" className="w-6" />
      </motion.h3>
      <motion.h1
        className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo"
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        Software Developer based in USA
      </motion.h1>
      <motion.p
        className="max-w-2xl mx-auto font-Ovo"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
      >
        I am a Software Developer currently living in Texas, USA with 2.5 years
        of experiance, primarily for consultancies.
      </motion.p>
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <motion.a
          href="#contact"
          className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 dark:bg-transparent"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          Contact Me
          <Image
            src={assets.right_arrow_white}
            alt="white arrow"
            className="w-4"
          />
        </motion.a>
        <motion.a
          href="/sample-resume.pdf"
          download
          className="px-10 py-3 border rounded-full border-grey-500 flex items-center gap-2 dark:text-black bg-white"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          My Resume
          <Image src={assets.download_icon} alt="white arrow" className="w-4" />
        </motion.a>
      </div>
    </div>
  );
};

export default Header;
