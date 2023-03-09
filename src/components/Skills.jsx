import React from "react";

import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Tailwind from "../assets/tailwind.png";
import JQuery from "../assets/jquery2.png";
import MySQL from "../assets/mysql2.png";
import Java from "../assets/javaimg.jpg";

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-[white] text-[#1b3fab]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="text-center mb-4">
          <p className="text-4xl font-bold inline border-b-4 border-blue-900 ">
            Skills
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-sm shadow-gray-400 hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={HTML} alt="HTML icon" />
            <p className="my-4">HTML</p>
          </div>
          <div className="shadow-sm shadow-gray-400 hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={CSS} alt="HTML icon" />
            <p className="my-4">CSS</p>
          </div>
          <div className="shadow-sm shadow-gray-400 hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={JavaScript} alt="HTML icon" />
            <p className="my-4">JAVASCRIPT</p>
          </div>
          <div className="shadow-sm shadow-gray-400 hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={ReactImg} alt="HTML icon" />
            <p className="my-4">REACT</p>
          </div>

          <div className="shadow-sm shadow-gray-400 hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={JQuery} alt="HTML icon" />
            <p className="my-4">JQUERY</p>
          </div>
          <div className="shadow-sm shadow-gray-400 hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Tailwind} alt="HTML icon" />
            <p className="my-4">TAILWIND</p>
          </div>
          <div className="shadow-sm shadow-gray-400 hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Java} alt="HTML icon" />
            <p className="my-4">JAVA</p>
          </div>
          <div className="shadow-sm shadow-gray-400 hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={MySQL} alt="HTML icon" />
            <p className="my-4">MYSQL</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
