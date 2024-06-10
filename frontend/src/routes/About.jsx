import React from 'react'
import Hero from '../components/Hero'
import aboutImage from '../assests/aboutImage.webp'
import '../components/Hero.css'
import Footer from '../components/Footer'
import AboutUs from '../components/AboutUs'
function About() {
  return (
    <div>
        <Hero 
            cName="hero-About"
            heroImg={aboutImage}
            title="About me"
            url="/about"
        />
      <AboutUs />

      <Footer />
    </div>
  )
}

export default About
