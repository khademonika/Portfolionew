import React from 'react';
import { CiShare1 } from 'react-icons/ci';

export default function ProjectComponent({ link, language, name, bg }) {
  return (

  <div className=' mx-4 rounded-2xl '>
    <a href={link} target="_blank" rel="noopener noreferrer ">
      <div 
      className={`relative ${bg} h-[100px] m-4 rounded-2xl  duration-500 `}
    >
      
        <div className="relative  top-[440px]  w-full px-7 bg-white p-3 rounded-2xl">
          <h1 className="text-black font-semibold text-lg">{name}</h1>
          <p className="text-sm text-gray-700 flex ">{language}   <span className='  ml-2 text-2xl text-black  top-2'><CiShare1 /></span></p>
        
        </div>
   
    </div>
    </a>
  </div>
  );
}