import React, { useRef, useState } from 'react'
import axios from 'axios'

function Contact() {

    const name = useRef()
    const child_name = useRef()
    const email = useRef()
    const telephone = useRef()
    const message = useRef()
    const [message_, setMessage] = useState('')

    function handle_submit(e) {
        e.preventDefault()
        const data = {
            name: name.current.value,
            child_name: child_name.current.value,
            email: email.current.value,
            telephone: telephone.current.value,
            message: message.current.value
        }

        axios.post('https://amseabackend.onrender.com/send-message', data)
            .then(response => {
                console.log("Message sent successfully")
                name.current.value = ''
                child_name.current.value = ''
                email.current.value = ''
                telephone.current.value = ''
                message.current.value = ''


                setMessage('Message sent successfully')
                setTimeout(() => {
                    setMessage('')

                }, 2000)
            })
            .catch(err => {
                console.log("Error in sending Message ", err.message)
            })
    }
    return (
        <div id="contact">
            <h1 className="contactt">Contact Us</h1>
            <div className="contactbox">
                <div className="contacttext">
                    If you have any questions or want to enroll in any one of our programs, then please feel free to fill out the form below or contact the people mentioned at the bottom of the page.
                </div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2285.249311476626!2d-79.35419464689095!3d43.80951472698192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sca!4v1705413910627!5m2!1sen!2sca" width="328" height="302" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                <form className="contactinfo" action="" onSubmit={handle_submit}>
                    <input placeholder="Your Name" type="text" ref={name} />
                    <input placeholder="Child's Name" type="text" ref={child_name} />
                    <input placeholder="E-mail" type="email" ref={email} />
                    <input placeholder="Phone Number" type="number" ref={telephone} />
                    <textarea placeholder='Message' cols="30" rows="5" ref={message} />
                    <button className="submit" type='submit'>Submit</button>
                    {
                        message_ && <h1 className="messagesent"> {message_}</h1>
                    }
                </form>
            </div>
        </div>
    )
}

export default Contact
// 