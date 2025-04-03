import React from 'react';

function Home() {
  return (
    <div className="mt-10">
      <p className="font-extralight text-xl text-gray-300">
        WELCOME TO MY WORLD
      </p>

      <h1 className="font-extrabold text-5xl text-white">Hi, I'm Monika</h1>

      <h3 className="font-extrabold py-3 text-3xl text-white">
        Web{' '}
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
        className="inline-block px-5 py-2 rounded-md bg-gradient-to-r from-yellow-200 to-green-300 text-white font-semibold hover:opacity-80 transition duration-300"
      >
        Download My CV
      </a>
    </div>
  );
}

export default Home;
