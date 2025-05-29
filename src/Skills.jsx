import React from 'react';
import { BsGithub } from 'react-icons/bs';
import { DiHtml5, DiJavascript } from 'react-icons/di';
import { FaPython, FaReact } from 'react-icons/fa';
import { RiNextjsFill } from 'react-icons/ri';
import SkillComp from './component/SkillComp';

function Skills() {
  return (
    // <div id='skills' className="mt-24 text-center">
    //   <h3 className="text-4xl font-bold text-white mb-6">Skills</h3>
      
    //   <div className="text-white text-6xl grid grid-cols-2 sm:grid-cols-3 gap-8 place-items-center">
    //     {/** Skill Items */}
    //     <div className="group flex flex-col items-center">
    //       <BsGithub className="hover:text-gray-400 transition duration-300" />
    //       <span className="w-0 h-1 bg-gray-400 transition-all duration-300 group-hover:w-full"></span>
    //     </div>

    //     <div className="group flex flex-col items-center">
    //       <DiHtml5 className="hover:text-orange-500 transition duration-300" />
    //       <span className="w-0 h-1 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
    //     </div>

    //     <div className="group flex flex-col items-center">
    //       <FaReact className="hover:text-blue-400 transition duration-300" />
    //       <span className="w-0 h-1 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
    //     </div>

    //     <div className="group flex flex-col items-center">
    //       <DiJavascript className="hover:text-yellow-400 transition duration-300" />
    //       <span className="w-0 h-1 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
    //     </div>

    //     <div className="group flex flex-col items-center">
    //       <FaPython className="hover:text-blue-300 transition duration-300" />
    //       <span className="w-0 h-1 bg-blue-300 transition-all duration-300 group-hover:w-full"></span>
    //     </div>

    //     <div className="group flex flex-col items-center">
    //       <RiNextjsFill className="hover:text-gray-500 transition duration-300" />
    //       <span className="w-0 h-1 bg-gray-500 transition-all duration-300 group-hover:w-full"></span>
    //     </div>
    //   </div>
    // </div>
  <div className="px-4 sm:px-6 md:px-12 lg:px-24">
  <h1 className="text-2xl sm:text-3xl md:text-5xl my-20 font-bold  text-white text-center">
    Skills Set
  </h1>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
    <SkillComp
      Name="GitHub"
      des="I use GitHub for version control, collaboration, and project management. I'm comfortable with branching, pull requests, and maintaining a clean commit history."
      icon={<BsGithub />}
    />
    <SkillComp
      Name="HTML"
      des="I have a strong command of HTML for building clean, well-structured, and accessible web pages. I follow semantic markup practices to ensure better SEO and maintainability."
      icon={<DiHtml5 />}
    />
    <SkillComp
      Name="React"
      des="I create dynamic and interactive user interfaces using React. I understand component-based architecture, props, state management, and React hooks for building responsive single-page applications."
      icon={<FaReact />}
    />
    <SkillComp
      Name="Python"
      des="I use Python for scripting, data analysis, and backend logic development. I’m familiar with libraries like Pandas and have built small projects to automate tasks and process data."
      icon={<FaPython />}
    />
    <SkillComp
      Name="Next.js"
      des="I build modern, full-stack web applications using Next.js with features like routing, server-side rendering, and API integration. I'm comfortable using Next.js with Tailwind CSS and Prisma for scalable apps."
      icon={<RiNextjsFill />}
    />
  </div>
</div>

  );
}

export default Skills;
