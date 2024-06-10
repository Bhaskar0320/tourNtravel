import './Contact.css'

import React from 'react'

const ContactUs = () => {
  return (
   <div className="form-container">
    <center><h1>Send message to us!</h1></center>
    <form action="">
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Subject" />
        <textarea placeholder="Message" rows="4"></textarea>
        <button>Send Message</button>
    </form>
   </div>
  )
}

export default ContactUs
