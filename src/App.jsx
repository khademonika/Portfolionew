import React from 'react'
import Header from './component/Header'
import Home from './Home'
import Profile from './Profile'
import AboutMe from './AboutMe'
import Academic from './Academic'
import Skills from './Skills'
import Projects from './Projects'
import Contact from './Contact'

function App() {
  return (
    <div className='mx-12 box-border my-5'>
      <Header/>
     <div>
     <Home/>
     {/* <Profile/> */}
     </div>
      <section id="about" >
      {/* <AboutMe/> */}
      </section>
      {/* <Academic/> */}

      <section id="projects" >
        <Projects />
      </section>

      <section id="skills" >
        <Skills />
      </section>
    
     <div className='flex'>
     </div>
   
  <Contact/>
    </div>
  )
}

export default App
