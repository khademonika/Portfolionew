import React from 'react'
// import "react-responsive-carousel/lib/styles/carousel.min.css"
// import { Carousel } from 'react-responsive-carousel'

import ProjectComponent from './component/ProjectComponent'
import "./index.css"

function Projects() {
  return (
    // <div id='projects' className='mt-24'>
    //   <h3 className='text-3xl font-bold mb-10 text-center text-white'>Projects</h3>

    //   <Carousel
    //     showArrows={true}
    //     showThumbs={false}
    //     showStatus={false}
    //     infiniteLoop={true}
    //     autoPlay={true}
    //     interval={3000}
    //     className="text-white px-4"
    //   >
    //     <div>
    //       <ProjectComponent bg="Foodbg" language='React js' name="Food Website" link="https://food-websitemk.netlify.app"/>
    //     </div>
    //     <div>
    //       <ProjectComponent bg="Linkdeinbg" language='Built with HTML, CSS' name="Linkedin Clone" link="https://prismatic-snickerdoodle-14a06f.netlify.app/"/>
    //     </div>
    //     <div>
    //       <ProjectComponent bg="Youtube Clone" language='Built with HTML, CSS' name="Youtube Clone" link="https://youtubmk.netlify.app/" />
    //     </div>
    //     <div>
    //       <ProjectComponent bg="Notesy" language='Nextjs' name="Note App" link="https://notesy-eta.vercel.app/" />
    //     </div>
    //     {/* <div>
    //       <ProjectComponent bg="Ecommercebg" language='React + Redux' name="E-commerce App" link="https://ecommk.netlify.app/" />
    //     </div> */}
    //     {/* <div>
    //       <ProjectComponent bg="PortfolioBG" language='HTML + CSS' name="Personal Portfolio" link="https://monikakhadeportfolio.netlify.app/" />
    //     </div>
    //     <div>
    //       <ProjectComponent bg="TodoBG" language='React' name="Todo App" link="https://todoappmk.netlify.app/" />
    //     </div> */}
    //   </Carousel></div>
    <div className='grid grid-cols-3 gap-24'>

        <ProjectComponent bg="Foodbg" language='React js' name="Food Website" link="https://food-websitemk.netlify.app"/>
         <ProjectComponent bg="Foodbg" language='React js' name="Food Website" link="https://food-websitemk.netlify.app"/>
           <ProjectComponent bg="Foodbg" language='React js' name="Food Website" link="https://food-websitemk.netlify.app"/>
           <ProjectComponent bg="Foodbg" language='React js' name="Food Website" link="https://food-websitemk.netlify.app"/>
           <ProjectComponent bg="Foodbg" language='React js' name="Food Website" link="https://food-websitemk.netlify.app"/>
           <ProjectComponent bg="Foodbg" language='React js' name="Food Website" link="https://food-websitemk.netlify.app"/>


    </div>

  
  )
}

export default Projects
