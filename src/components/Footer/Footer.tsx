import React from "react";
import Image from "next/image";
import { assets } from "../../../assets/assets";

const Footer = (isDarkMode: boolean) => {
  return (
    <div className="mt-20">
      <div className="text-center">
        <Image
          src={isDarkMode ? assets.logo_dark : assets.logo}
          alt={"logo"}
          className="w-36 mx-auto mb-2"
        />

        <div className="w-max flex items-center gap-2 mx-auto">
          <Image
            src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon}
            alt={"mail"}
            className="w-6"
          />
          kilduffmfprof@gmail.com
        </div>
      </div>
    </div>
  );
};

export default Footer;
