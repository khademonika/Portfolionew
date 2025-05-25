import React, { useState } from 'react'

function Contact() {

  return (
    <div className='my-24 ' id='contact'>
      <h3 className='text-3xl font-bold text-center my-10 text-white'>Contact <span className='bg-gradient-to-r from-orange-400 to-purple-600 bg-clip-text text-transparent'>With Me</span></h3>
      <div className='bg-gradient-to-r text-white lg:flex from-orange-400 to-purple-600 px-10 py-5 rounded-tr-[60px] w-full rounded-bl-[60px] rounded-md'>
      <div className='lg:w-[50%] text-xl font-semibold mt-5'>
 <p>Email: monikakhade2013@gmail.com</p>

      </div>
      <div >
       <div className='lg:flex'>
       <input type="text" className='px-3 mb-2 mr-2 bg-white rounded-md py-1 text-xl placeholder:text-gray-600' placeholder="Your Name" />
       <input type="text" className='px-3 mb-2 bg-white rounded-md py-1 text-xl placeholder:text-gray-600 ' placeholder="Your Phone Number"/>
       </div>
        <input type="text" className='px-3 mb-2 bg-white rounded-md py-1 text-xl placeholder:text-gray-600 ' placeholder="Your Email"/><br />
        <textarea name="message" className='mb-2 border-none outline-none text-black px-5 py-2 lg:w-full bg-white rounded-md' cols={45} rows={8} placeholder='Your message'></textarea>
<button className='mx-2 w-full py-2 rounded-md text-black bg-white font-semibold'>Send Message</button>

      </div>
      </div>
      
    </div>
  )
}

export default Contact
