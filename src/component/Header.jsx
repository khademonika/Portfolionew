import React from 'react'
function Header() {
  return (
    <div className='flex text-white   justify-between'>
       <a href="#about" className="hover:text-yellow-400 transition duration-300">
        About
      </a>
      <a href="#projects" className="hover:text-yellow-400 transition duration-300">
        Projects
      </a>
      <a href="#skills" className="hover:text-yellow-400 transition duration-300">
        Skills
      </a>
<button className='px-5 py-2 font-medium rounded-md text-white bg-black'>Contact Me</button>

</div>

 
  )
}

export default Header
