import React from 'react'
import Profileimg from "../src/assets/Profile.jpeg"
function Profile() {
  return (
    <div className='w-full'>
      <img src={Profileimg} className='rounded-full ' alt="" />
    </div>
  )
}

export default Profile
