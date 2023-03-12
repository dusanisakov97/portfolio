import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-[60vh] bg-gradient-to-br from-blue-700 to-blue-900 text-white"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid gap-8">
          <div className="text-center pb-8 pl-4">
            <p className="text-4xl text-left font-bold inline border-b-4 border-white m-4">
              About
            </p>
          </div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi. I'm Dušan, nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p>
              Graduate year student at Faculty of Technical Sciences in Novi
              Sad, highly interested in web development. I consider myself
              collaborative and positive team member, striving to learn and gain
              experience in order to deliver optimal engineering results.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
