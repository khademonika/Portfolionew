import React from 'react'
// import "react-responsive-carousel/lib/styles/carousel.min.css"
// import { Carousel } from 'react-responsive-carousel'

import ProjectComponent from './component/ProjectComponent'
import "./index.css"

function Projects() {
  return (
    
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4">
  <ProjectComponent bg="Foodbg" language="React js" name="Food Website" link="https://food-websitemk.netlify.app" />
  <ProjectComponent bg="Linkdeinbg" language="Built with HTML, CSS" name="Linkedin Clone" link="https://prismatic-snickerdoodle-14a06f.netlify.app" />
   <ProjectComponent bg="Notesy" language='Nextjs' name="Note App" link="https://notesy-eta.vercel.app/" />
  <ProjectComponent bg="todo" language='React' name="Todo App" link="https://todoappmk.netlify.app/" />

</div>

  
  )
}

export default Projects
