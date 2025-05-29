import React from 'react';
import Profileimg from "../src/assets/Profile.jpeg";

function Home() {
  return (
    <div className="w-full px-4 sm:px-8 md:px-16 lg:px-24 xl:px-36 mt-10 sm:mt-24">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between">
        
        {/* Left Section - Text Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <p className="font-extralight text-sm sm:text-xl text-gray-300 mb-2">
            WELCOME TO MY WORLD
          </p>

          <h1 className="font-extrabold text-2xl sm:text-4xl md:text-6xl text-white leading-tight">
            Hi, I'm Monika
          </h1>

          <h3 className="font-extrabold text-xl sm:text-3xl md:text-5xl text-white mt-2">
            Frontend{' '}
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Developer
            </span>{' '}
            &{' '}
            <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
              Designer
            </span>
          </h3>

          <p className="text-gray-400 font-light text-sm sm:text-base max-w-md mt-4 mb-6 mx-auto lg:mx-0">
            I'm a passionate web developer and designer, crafting seamless digital
            experiences with clean code and modern aesthetics.
          </p>

          <a
            href="/Monika_khade.pdf"
            download="Monika_CV.pdf"
            className="inline-block px-6 py-2 mb-6 rounded-md bg-[#272727] text-white font-semibold hover:bg-[#1e1e1e] transition duration-300"
          >
            Download My CV
          </a>
        </div>

        {/* Right Section - Profile Image */}
        <div className="w-full lg:w-1/2 flex justify-center mb-8 lg:mb-0">
          <img
            src={Profileimg}
            alt="Profile"
            className="w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full object-cover border-4 border-white shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
