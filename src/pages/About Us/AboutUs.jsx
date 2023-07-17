import React from 'react'
import './aboutUs.css'

const AboutUs = () => {
  return (
    <main className="aboutUs-container">
      <h1>The Burger Bomb origin story...</h1>
      <section>
        <img src="/images/about/grill.jpg" alt="Founder grilling in the backyard" />
        <div className="aboutUs-content">
            <h2>From the backyard..</h2>

            <p>The burger bomb origin story begins in a backyard...The burger bomb origin story begins in a backyard where our founder, John, had a passion for 
            grilling burgers for family and friends. Everyone raved about his flavorful creations, and that's 
            when the idea of Burger Bomb was born.</p>
        </div>
        </section>
      <section className="alternative-section">
        <img src="/images/about/farmer2.jpg" alt="Local farmers" />
        <div className="aboutUs-content">
            <h2>to local farms..</h2>

            <p>Worked with local farmers to source the freshest ingredients. We believe in using only the freshest ingredients in our burgers. That's why we worked closely with local
            farmers to source high-quality, organic produce and grass-fed beef. Our commitment to quality and sustainability
            sets us apart from the rest.</p>
        </div>

      </section>
      <section>
        <img src="/images/about/present.jpg" alt="Education" />
        <div className="aboutUs-content">
            <h2>to the present!</h2>
            <p>            Now, we have a fabulous team that we consider our family! There is space for career advancement, college sponsorships.
 Today, Burger Bomb has grown into a thriving business with a team that we consider our family.
                Our success wouldn't be possible without the hard work and dedication of our staff. 
                We take pride in providing career advancement opportunities and even sponsor
                college education for our employees.</p>
            <p>But most importantly, we are grateful for our loyal customers who have supported us on this incredible journey.
                We continue to strive for excellence and innovation to bring you the best burgers in town.</p>
        </div>

      </section>
    </main>
  )
}

export default AboutUs
