import React from 'react'
import Profileimg from "../src/assets/Profile.jpeg"
import ProjectComponent from './component/ProjectComponent'
import Foodbg from "../src/assets/Food-web.jpeg"
function Projects() {
  return (
    <div className='my-14'>
        <h3 className='text-3xl font-bold  mb-10 text-center text-white'>Projects</h3>
        {/* Project one */}
      <div className='bg-blue-950 text-white font-semibold grid grid-cols-3 text-xl px-4 py-5 rounded-md'>
        {/* <img src={Profileimg} alt="" className='rounded-xl py-1'/>
        <p >Web Design for Digital Marketing</p> */}
<ProjectComponent bg="Foodbg" language='React js' name="Food Website" link="https://food-websitemk.netlify.app"/>
<ProjectComponent bg="Linkdeinbg" language='Built with HTML, CSS' name="Linkedin Clone" link=" https://prismatic-snickerdoodle-14a06f.netlify.app/"/>
<ProjectComponent bg="Youtube Clone" language='Built with HTML, CSS' name="Youtube Clone" link="https://youtubmk.netlify.app/" />
<ProjectComponent bg="ATMbg" language='Built with HTML, CSS & JS' name="ATM" link="https://funny-madeleine-112377.netlify.app/" />
<ProjectComponent />

      </div>
    </div>
  )
}

export default Projects
