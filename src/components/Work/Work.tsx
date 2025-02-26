import React from "react";
import { assets, workData } from "../../../assets/assets";
import Image from "next/image";

const Work = (isDarkMode: boolean) => {
  return (
    <div id="projects" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 test-lg font-Ovo"> My Portfolio </h4>
      <h2 className="text-center text-5xl font-Ovo"> My Latest Work </h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        Welcome! Explore a collection of Projects showcasing my expertise and
        areas of interest.
      </p>
      <div className="grid grid-cols-auto my-10 gap-5 dark:text-black">
        {workData.map((project, index) => (
          <div
            className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group"
            key={index}
            style={{ backgroundImage: `url(${project.bgImage})` }}
          >
            <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3  px-5 flex items-center justify-between duration-500 group-hover:bottom-7 dark:bg-">
              <div className="">
                <h2 className="font-semibold">{project.title}</h2>
                <p className="text-sm text-gray-700">{project.description}</p>
              </div>

              <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
                <Image
                  src={assets.send_icon}
                  alt={"send icon"}
                  className="w-5"
                ></Image>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
