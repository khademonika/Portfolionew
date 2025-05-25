import React from 'react';
import Profileimg from "../src/assets/Profile.jpeg"

function Home() {
  return (
   <div className='w-full mt-24'>
     <div className="">
      <p className="font-extralight text-xl text-gray-300">
        WELCOME TO MY WORLD
      </p>

      <h1 className="font-extrabold text-7xl text-white">Hi, I'm Monika</h1>

      <h3 className="font-extrabold py-3 text-7xl text-white">
        Frontend{' '}
        <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
          Developer
        </span>{' '}
        &{' '}
        <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
          Designer
        </span>
      </h3>

      {/* Updated Paragraph with better visibility */}
      <p className="text-gray-400 font-light text-base max-w-md pb-5">
        I'm a passionate web developer and designer, crafting seamless digital
        experiences with clean code and modern aesthetics.
      </p>

      {/* Download CV Button */}
      <a
        href="/Monika_khade.pdf"
        download="Monika_CV.pdf"
        className="inline-block px-5 py-2 rounded-md bg-[#272727] text-white font-semibold hover:opacity-80 transition duration-300"
      >
        Download My CV
      </a>
       
    </div>
  
   </div>
  );
}

export default Home;
