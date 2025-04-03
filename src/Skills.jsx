import React from 'react';
import { BsGithub } from 'react-icons/bs';
import { DiHtml5, DiJavascript } from 'react-icons/di';
import { FaPython, FaReact } from 'react-icons/fa';
import { RiNextjsFill } from 'react-icons/ri';

function Skills() {
  return (
    <div className="mt-10 text-center">
      <h3 className="text-4xl font-bold text-white mb-6">Skills</h3>
      
      <div className="text-white text-6xl grid grid-cols-2 sm:grid-cols-3 gap-8 place-items-center">
        {/** Skill Items */}
        <div className="group flex flex-col items-center">
          <BsGithub className="hover:text-gray-400 transition duration-300" />
          <span className="w-0 h-1 bg-gray-400 transition-all duration-300 group-hover:w-full"></span>
        </div>

        <div className="group flex flex-col items-center">
          <DiHtml5 className="hover:text-orange-500 transition duration-300" />
          <span className="w-0 h-1 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
        </div>

        <div className="group flex flex-col items-center">
          <FaReact className="hover:text-blue-400 transition duration-300" />
          <span className="w-0 h-1 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
        </div>

        <div className="group flex flex-col items-center">
          <DiJavascript className="hover:text-yellow-400 transition duration-300" />
          <span className="w-0 h-1 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
        </div>

        <div className="group flex flex-col items-center">
          <FaPython className="hover:text-blue-300 transition duration-300" />
          <span className="w-0 h-1 bg-blue-300 transition-all duration-300 group-hover:w-full"></span>
        </div>

        <div className="group flex flex-col items-center">
          <RiNextjsFill className="hover:text-gray-500 transition duration-300" />
          <span className="w-0 h-1 bg-gray-500 transition-all duration-300 group-hover:w-full"></span>
        </div>
      </div>
    </div>
  );
}

export default Skills;
