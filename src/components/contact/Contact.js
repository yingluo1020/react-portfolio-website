import React, { useRef } from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'
import emailjs from '@emailjs/browser';


function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_s6sapzl', 'template_utnko3u', form.current, 'user_Ak4JS85QR5w9GZLqKm3hY')

        alert(`I'll will reply you ASAP :)`)
        e.target.reset()
    };

    return (
        <section id="contact">
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact_container">
                <div className="contact_options">
                    <article className='contact_option'>
                        <MdOutlineEmail className='contact_option-icon' />
                        <h4>Email</h4>
                        <h5>yingluo1020@gmail.com</h5>
                        <a href="mailto:yingluo1020@gmail.com" target='_blank'>Send a message</a>
                    </article>

                    <article className='contact_option'>
                        <RiMessengerLine className='contact_option-icon' />
                        <h4>Messenger</h4>
                        <h5>Ying Luo</h5>
                        <a href="https://m.me/yng.luo" target='_blank'>Send a message</a>
                    </article>

                    <article className='contact_option'>
                        <BsWhatsapp className='contact_option-icon' />
                        <h4>WhatsApp</h4>
                        <h5>+44 7407171383</h5>
                        <a href="https://api.whatsapp.com/send?phone+447407171383" target='_blank'>Send a message</a>
                    </article>
                </div>
                {/* End of contact options */}
                <form action="" ref={form} onSubmit={sendEmail}>
                    <input type="text" name='name' placeholder='Your Name' required />
                    <input type="email" name='email' placeholder='Your Email' required />
                    <textarea type="text" name='name' placeholder='Your Message' required ></textarea>
                    <button type="submit" className="btn btn-primary">Send a message</button>
                </form>

            </div>
        </section>

    )
}

export default Contact