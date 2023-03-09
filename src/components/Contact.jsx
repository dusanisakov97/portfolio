import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-blue-900 flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/6edea24b-a9e3-40aa-b48a-544a155d3165"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8 text-center">
          <p className="text-4xl font-bold inline border-b-4 border-white text-white">
            Contact
          </p>
        </div>
        <input
          className="bg-white p-2"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-white"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-white p-2"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="text-white border-2 hover:bg-white hover:border-white hover:text-[#0a192f] px-4 py-3 mt-8 mx-auto flex items-center">
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
