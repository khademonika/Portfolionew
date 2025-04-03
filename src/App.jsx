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
    <div className='mx-12 box-border'>
      App
      <Header/>
     <div className='flex'>
     <Home/>
     <Profile/>
     </div>
     <AboutMe/>
     <Academic/>
     <Skills/>
     <Projects/>
     <Contact/>
    </div>
  )
}

export default App
