import { useState } from 'react'
import envelope from '../assets/icons/icon-envelope-outline.png'
import clock from '../assets/icons/icon-clock.png'
import './QuoteSection.css'

export default function QuoteSection() {
  const [fileName, setFileName] = useState('No file chosen')

  return (
    <section className="quote" id="quote">
      <div className="shell quote__inner">
        <div className="quote__copy">
          <p className="kicker quote__kicker">READY TO GET STARTED?</p>
          <h2 className="display quote__title">
            LET’S PUT YOUR LOGO
            <br />
            ON THE ULTIMATE BOTTLE.
          </h2>
          <p className="quote__lede">
            Send your logo and the Ice Shaker sales team will reply with wholesale pricing and a
            production mockup, usually within 1 business day.
          </p>

          <p className="quote__row">
            <img src={envelope} alt="" />
            <a href="mailto:sales@iceshaker.com">sales@iceshaker.com</a>
          </p>
          <p className="quote__row">
            <img src={clock} alt="" />
            <span>
              Customer service available
              <br />
              Monday – Friday, 8:00am to 4:00pm CST.
            </span>
          </p>
        </div>

        <form className="quote-form" onSubmit={(e) => e.preventDefault()}>
          <h3 className="quote-form__title">Request Your Bulk Quote</h3>

          <input type="text" placeholder="Name" aria-label="Name" />
          <input type="text" placeholder="Company Name" aria-label="Company Name" />
          <input type="email" placeholder="Email" aria-label="Email" />
          <input type="text" placeholder="Bottle Type(s) &amp; Quantity" aria-label="Bottle Types and Quantity" />

          <p className="quote-form__label">Attach Your Logo (PNG preferred)</p>
          <div className="quote-form__file">
            <label className="quote-form__file-btn">
              Choose File
              <input
                type="file"
                onChange={(e) => setFileName(e.target.files?.[0]?.name ?? 'No file chosen')}
              />
            </label>
            <span className="quote-form__file-name">{fileName}</span>
          </div>

          <button type="submit" className="quote-form__submit">
            SUBMIT REQUEST
            <svg viewBox="0 0 38 16" aria-hidden="true">
              <path
                d="M0 8h34M27 1l7 7-7 7"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </form>
      </div>
    </section>
  )
}
