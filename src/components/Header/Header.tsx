import React from "react";
import Image from "next/image";
import { assets } from "../../../assets/assets";

const Header = () => {
  return (
    <div className="w-11-/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
      <div>
        <Image
          src={assets.profile_img}
          alt="Profile Image"
          className="rounded-full w-32"
        ></Image>
      </div>
      <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo">
        Hi! I am Mary Kilduff
        <Image src={assets.hand_icon} alt="hand icon" className="w-6" />
      </h3>
      <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo">
        Software Developer based in USA
      </h1>
      <p className="max-w-2xl mx-auto font-Ovo">
        I am a Software Developer currently living in Texas, USA with 2.5 years
        of experiance, primarily for consultancies.
      </p>
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <a
          href="#contact"
          className="px-10 py-3 border-white rounded-full bg-black text-white flex items-center gap-2"
        >
          Contact Me
          <Image
            src={assets.right_arrow_white}
            alt="white arrow"
            className="w-4"
          />
        </a>
        <a
          href="/sample-resume.pdf"
          download
          className="px-10 py-3 border rounded-full border-grey-500 flex items-center gap-2"
        >
          My Resume
          <Image src={assets.download_icon} alt="white arrow" className="w-4" />
        </a>
      </div>
    </div>
  );
};

export default Header;
