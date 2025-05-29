
import React, { useRef } from "react";
import './Contact.css'
import Swal from 'sweetalert2'

const Contact = () => {
    const formRef = useRef(); 

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
