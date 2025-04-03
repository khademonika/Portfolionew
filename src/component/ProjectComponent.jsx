import React from 'react';
import { CiShare1 } from 'react-icons/ci';

export default function ProjectComponent({ link, language, name, bg }) {
  return (
    <div 
      className={`relative  mx-10 my-5 ${bg} rounded-2xl sm:hover:translate-x-2 sm:hover:translate-y-1 duration-500 mt-10`}
    >
      <a href={link} target="_blank" rel="noopener noreferrer ">
        <div className="relative  top-60  w-full px-7 bg-white p-3 rounded-2xl">
          <h1 className="text-black font-semibold text-lg">{name}</h1>
          <p className="text-sm text-gray-700 flex ">{language}   <span className='  ml-2 text-2xl text-black  top-2'><CiShare1 /></span></p>
        
        </div>
      </a>
    </div>
  );
}