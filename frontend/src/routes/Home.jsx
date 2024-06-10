import React from 'react'
import Hero from '../components/Hero'
import heroImage from '../assests/heroImage.jpg'
import Destination from '../components/Destination'
import Trip from '../components/Trip'
import Footer from '../components/Footer'
function Home() {
  return (
    <div>
        <Hero 
            cName="hero"
            heroImg={heroImage} 
            title="Your Journey Your Story"
            text="Choose Your Favourite Destination"
            buttonText="Travel Plan"
            url="/"
            btnClass="show"
        />
      <Destination />
      <Trip />
    <Footer />
    </div>
  )
}

export default Home
