import React from 'react';
import { CiShare1 } from 'react-icons/ci';

export default function ProjectComponent({ link, language, name, bg }) {
  return (
    <div className="mx-auto w-full max-w-sm p-2">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <div className={`relative ${bg} h-60 sm:h-72 md:h-80 lg:h-96 rounded-2xl transition duration-300 hover:scale-105`}>
          <div className="absolute bottom-0 w-full px-4 py-1 sm:py-3 bg-white bg-opacity-90 backdrop-blur-sm rounded-b-2xl">
            <h1 className="text-black font-semibold text-sm sm:text-lg">{name}</h1>
            <p className="text-sm text-gray-700 flex items-center justify-between">
              {language}
              <span className="text-xl text-black"><CiShare1 /></span>
            </p>
          </div>
        </div>
      </a>
    </div>
  );
}
