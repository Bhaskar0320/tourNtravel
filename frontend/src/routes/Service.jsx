import React from 'react'
import Hero from '../components/Hero'
import serviceImage from '../assests/serviceImage.jpg'
import Footer from '../components/Footer'
import Trip from '../components/Trip'

function Service() {
  return (
    <div>
        <Hero 
            cName="hero"
            heroImg={serviceImage}
            title="We provide"
            text="What you want..."            
        />
      
      <Trip />

      <Footer />
    </div>
  )
}

export default Service
