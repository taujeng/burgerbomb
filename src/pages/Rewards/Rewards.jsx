import React from 'react'
import './rewards.css'
import { ArrowUpCircle } from 'react-bootstrap-icons'

const Rewards = () => {
  return (
    <main className="rewards-container">
      <section>
        <div className="rewards-text">
            <h1 >The Reward System</h1>
            <h2>Get rewarded everytime you eat at burger bomb!</h2>
            <p>Every order made on the Burger Bomb mobile app earns you points!
                Points can be used to purchase items on the Burger Bomb menu, as well as Burger Bomb merchandise. </p>
            <a className="rewards-joinNow" href="#rewards-download">Join now</a>    
        </div>
        <img src="/images/rewards/rewards.jpg" className="rewards-img" alt="Mobile rewards" />
      </section>
      <h2><strong>How does it work?</strong></h2>
      <section>
        <img src="/images/rewards/rewards2.jpg" alt="" /> 
        <div className="rewards-text">
            <p>Each burger purchased through our app will earn you 1 point. </p>
            <p>Get free small fries just for downloading the app!</p>
            <p>Members get to vote which ingredients Burger Bomb will add to the menu. Let's create some original burgers together!</p>
        </div>

      </section>
      <section className="rewards-section3">
        <div className="rewards-text">
            <p>Convert points into rewards!</p>
            <p>Points can be exchanged for anything on the menu.</p>
            <p>As you accumulate points, you'll unlock exclusive rewards and discounts.</p>
        </div>
        <img src="/images/rewards/rewards3.jpg" alt="" />
      </section>
        <h2>Rewards just are one click away..</h2>
        <div className="mobile-app" id="rewards-download">
                <a target="_blank" href='https://play.google.com/store/'><img className="android-link" alt='Get it on Google Play' src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png'/></a>
                <a target="_blank" href="https://www.apple.com/app-store/"><img className="apple-link" alt="Get it on the App Store" src="./images/apple_app_store.svg"/></a>
        </div>
        <a href="#top">
            <ArrowUpCircle className="rewards-arrowTop"/>
      </a>
    </main>
  )
}

export default Rewards
