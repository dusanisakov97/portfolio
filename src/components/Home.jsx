import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#fff] text-[#1b3fab]">
      {/* Container */}
      <div className="max-w-[1000px] mb-1 mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-[#1b3fab]">Hi, my name is</p>
        <h1 className="text-4xl my-2 sm:text-7xl font-bold text-[#1b3fab]">
          DUŠAN ISAKOV
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#1b3fab]">
          I'm a Software Developer.
        </h2>
        <p className="text-[1b3fab] py-4 max-w-[700px]">
          I am specialized in developing (and occasionally designing) front-end
          applications. I constantly try to adopt new development concepts and
          cutting-edge technologies.
        </p>
        <div className="flex gap-4">
          <div>
            <Link to="work" smooth={true} duration={500}>
              <button className="text-[white] bg-[#1b3fab] group border-2 px-6 py-3 my-2 flex items-center hover:bg-blue-900 hover:border-blue-900">
                View Work
                <span>
                  <HiArrowNarrowRight className="ml-3 " />
                </span>
              </button>
            </Link>
          </div>
          <div>
            <Link to="skills" smooth={true} duration={500}>
              <button className="w-[9.9rem] text-[white] bg-[#1b3fab] group border-2 px-6 py-3 my-2 flex items-center hover:bg-blue-900 hover:border-blue-900">
                View Skills
                <span>
                  <HiArrowNarrowRight className="ml-3 " />
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
