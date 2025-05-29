import React from 'react';

function AboutMe() {
  return (
    <div className='flex flex-col items-center w-full my-24 px-6'>
      <h1 className='text-5xl font-extrabold text-white text-center'>
        About <span className='bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent'>Me</span>
      </h1>
      <p className='text-lg font-medium text-white my-5 max-w-2xl text-center'>
        I'm a web developer and designer passionate about creating visually appealing and user-friendly digital
        experiences. With a strong foundation in frontend technologies, I craft seamless and modern web applications.
        Constantly learning, I strive to blend creativity with functionality to build impactful designs and efficient code.
      </p>
    </div>
  );
}

export default AboutMe;
