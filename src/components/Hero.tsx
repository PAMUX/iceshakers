import heroBottles from '../assets/images/hero-bottles.jpg'
import hyagenLogo from '../assets/logos/hyagen-logo.png'
import envelope from '../assets/icons/icon-envelope-navy.png'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__media">
        <img src={heroBottles} alt="Hyagen Medical branded Ice Shaker bottles on a clinic counter" />
      </div>

      <div className="hero__inner shell">
        <div className="hero__content">
          <img className="hero__logo" src={hyagenLogo} alt="Hyagen Medical" />

          <p className="hero__tagline">
            HEALTHIER PEOPLE.
            <br />
            BRIGHTER TOMORROWS.
          </p>

          <p className="hero__copy">
            Put the Hyagen Medical brand on the premium insulated bottle from Shark Tank. Perfect
            for your patients, providers, and team: a lasting reminder of your commitment to health
            and wellness.
          </p>

          <div className="hero__actions">
            <a className="btn btn--primary" href="#quote">
              REQUEST A QUOTE
            </a>
            <a className="btn btn--ghost" href="#bottles">
              SEE YOUR BOTTLES
            </a>
          </div>

          <p className="hero__email">
            <img src={envelope} alt="" />
            <span>
              Questions? Email <strong>sales@iceshaker.com</strong>
              <br />
              and the Ice Shaker team will get back to you fast.
            </span>
          </p>
        </div>
      </div>
    </section>
  )
}
