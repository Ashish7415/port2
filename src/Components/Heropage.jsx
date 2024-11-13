import React from "react";
import heroimage from "../assets/hero-image.png";
import AshishResume from "../assets/AshishResume.pdf";

const Heropage = () => {
  return (
    <div className="bg-black text-white text-center py-16 ">
      <img
        src={heroimage}
        alt=""
        className="mx-auto mb-8 h-48 rounded-full object-cover transform transition-transform duration-300 hover:scale-105"
      />
      <h1 className="text-4xl font-bold">
        I'm{""}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
          {" "}
          Ashish patel
        </span>
        ,Full-stack Developer
      </h1>
      <p className="mt-4 text-lg text-gray-300 ">
        {" "}
        I specialize in building mordern and responsive web appications.
      </p>
      <div className="mt-8 space-x-4">
        <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full">
          Contact with me
        </button>
        <a
          href={AshishResume}
          className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
          download
        >
          {" "}
          Resume
        </a>
      </div>
    </div>
  );
};

export default Heropage;