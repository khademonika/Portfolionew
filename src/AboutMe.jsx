import React from 'react'
import Profileimg from "../src/assets/Profile.jpeg"

function AboutMe() {
  return (
    <div className='h-[50%] flex w-full mt-10'>
        <div className='w-[100%]'>
            <img src={Profileimg} className='h-full rounded-tr-[100px] border-2 border-white rounded-b-2xl rounded-t-2xl' alt="" />
        </div>
    <div className='ml-10'>
    <h1 className='text-5xl font-extrabold text-white'>About <span className='bg-gradient-to-r from-blue-400 to-purple-500  bg-clip-text text-transparent'>Me</span></h1>
      <p className='text-sm font-light text-white'>I'm a web developer and designer passionate about 
        creating visually appealing and user-friendly digital
         experiences. With a strong foundation in frontend technologies,
          I craft seamless and modern web applications. Constantly learning,
           I strive to blend creativity with
         functionality to build impactful designs and efficient code.</p>
    </div>
    </div>
  )
}

export default AboutMe
