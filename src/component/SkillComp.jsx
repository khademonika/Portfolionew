import React from 'react'
import { RiNextjsFill } from 'react-icons/ri'

function SkillComp({icon,Name,des}) {
  return (
    <div className='bg-[#222222] rounded px-3 py-3 text-white font-semibold'>
<div className='py-10'>
    <p className='text-6xl text-white'>{icon}   </p>  
<p className='text-xl py-5'>{Name}</p>
<p className='text-sm font-light'>{des}</p>
    </div>
</div>
  )
}

export default SkillComp
