// import React, { useState } from 'react'

// function Contact() {

//   return (
//     <div className='my-24 ' id='contact'>
//       <h3 className='text-3xl font-bold text-center my-10 text-white'>Contact <span className='bg-gradient-to-r from-orange-400 to-purple-600 bg-clip-text text-transparent'>With Me</span></h3>
//       <div className='bg-gradient-to-r text-white lg:flex from-orange-400 to-purple-600 px-10 py-5 rounded-tr-[60px] w-full rounded-bl-[60px] rounded-md'>
//       <div className='lg:w-[50%] text-xl font-semibold mt-5'>
//  <p>Email: monikakhade2013@gmail.com</p>

//       </div>
//       <div >
//        <div className='lg:flex'>
//        <input type="text" className='px-3 mb-2 mr-2 bg-white rounded-md py-1 text-xl placeholder:text-gray-600' placeholder="Your Name" />
//        <input type="text" className='px-3 mb-2 bg-white rounded-md py-1 text-xl placeholder:text-gray-600 ' placeholder="Your Phone Number"/>
//        </div>
//         <input type="text" className='px-3 mb-2 bg-white rounded-md py-1 text-xl placeholder:text-gray-600 ' placeholder="Your Email"/><br />
//         <textarea name="message" className='mb-2 border-none outline-none text-black px-5 py-2 lg:w-full bg-white rounded-md' cols={45} rows={8} placeholder='Your message'></textarea>
// <button className='mx-2 w-full py-2 rounded-md text-black bg-white font-semibold'>Send Message</button>

//       </div>
//       </div>
      
//     </div>
//   )
// }

// export default Contact
import React, { useRef } from "react";
import './Contact.css'
import Swal from 'sweetalert2'

const Contact = () => {
    const formRef = useRef(); // Create a reference for the form

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        formData.append("access_key", "7a006581-2de0-4fdf-b603-003a8f687428");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            Swal.fire({
                title: "Success!",
                text: "Your message sent successfully.",
                icon: "success"
            });
            formRef.current.reset();
        }
    };

    return (
        <section className="contact">
            <form onSubmit={onSubmit} ref={formRef}> 
                <h2>Contact Form</h2>
                <div className="input-box">
                    <label>Full Name</label>
                    <input type="text" className="field" placeholder="Enter Your Name" required name="name" />
                </div>
                <div className="input-box">
                    <label>Email Address</label>
                    <input type="email" className="field" placeholder="Enter Your email" required name="email" />
                </div>
                <div className="input-box">
                    <label>Your Message</label>
                    <textarea name="message" className="field mess" placeholder="Enter Your Message"></textarea>
                </div>
                <button type="submit">Send Message</button>
            </form>
        </section>
    );
}

export default Contact;
