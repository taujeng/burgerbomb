import React from 'react'
import './ourStory.css'
import { ArrowUpCircle } from 'react-bootstrap-icons'

const OurStory = () => {
  return (
    <main className="ourStory-container">
      <h1>The Burger Bomb origin story...</h1>
      <section>
        <img src="/images/about/grill.jpg" alt="Founder grilling in the backyard" />
        <div className="ourStory-content">
            <h2>From the backyard..</h2>

            <p>The burger bomb origin story begins in a backyard...A group of friends got together for a potluck, and someone brought burgers that were dreadfully dry.
            As everyone laughed and joked about the dry burgers, our founder, Bobby, decided to takes matters into his own hands. All it took was a quick trip to a nearby grocery store and
            the grill that nobody was using. And pretty soon, everyone was raving about how juicy and flavorful the freshly grilled burgers were. One friend compared the burgers to flavor bombs and 
            Bobby started having ideas..

            </p>
        </div>
        </section>
      <section>
        <img src="/images/about/farmer2.jpg" alt="Local farmers" />
        <div className="ourStory-content">
            <h2>to local farms..</h2>

            <p>We believe in using only the freshest ingredients in our burgers. That's why we worked closely with local
            farmers to source high-quality, organic produce and grass-fed beef. Our commitment to quality and sustainability
            sets us apart from the rest. </p>

            <p>
            We are proud to support our local community by collaborating with farmers who share our passion for ethical and environmentally responsible food production. By partnering with these local farms,
             we can ensure that our ingredients are not only delicious but also responsibly sourced.
            </p>

            <p>
            Our focus on locally sourced ingredients also means that our menu changes with the seasons, allowing us to offer you the freshest flavors all year round. We are constantly exploring new partnerships
            and working with our farmers to discover exciting, seasonal ingredients to incorporate into our burger creations.
            
            
            </p>
        </div>

      </section>
      <section>
        <img src="/images/about/present.jpg" alt="Education" />
        <div className="ourStory-content">
            <h2>to the present!</h2>
            <p>     
 Today, Burger Bomb has grown into a thriving business with a team that we consider our family.
                Our success wouldn't be possible without the hard work and dedication of our staff. 
                We take pride in providing career advancement opportunities and even sponsor
                college education for our employees.</p>
            <p>But most importantly, we are grateful for our loyal customers who have supported us on this incredible journey.
                We continue to strive for excellence and innovation to bring you the best burgers in town.</p>
        </div>


      </section>
      <a href="#top">
            <ArrowUpCircle className="arrowTop"/>
      </a>
    </main>
  )
}

export default OurStory
