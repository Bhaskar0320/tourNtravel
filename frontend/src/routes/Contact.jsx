import React from 'react'
import Hero from '../components/Hero'
import contactImage from '../assests/contactImage.jpg'
import Footer from '../components/Footer'
import ContactUs from '../components/ContactUs'
function Contact() {
  return (
    <div>
        <Hero 
            cName="hero"
            heroImg={contactImage} height="980vh"
            title="Your Journey Your Story"
            text="Choose Your Favourite Destination"
        />
      <ContactUs />

      <Footer />
    </div>
  )
}

export default Contact
