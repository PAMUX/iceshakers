import black from '../assets/images/color-black.png'
import navy from '../assets/images/color-navy.png'
import white from '../assets/images/color-white.png'
import red from '../assets/images/color-red.png'
import caribbean from '../assets/images/color-caribbean-blue.png'
import SectionHeading from './SectionHeading'
import './ColorSection.css'

const COLORS = [
  { img: black, name: 'Black' },
  { img: navy, name: 'Navy' },
  { img: white, name: 'White' },
  { img: red, name: 'Red' },
  { img: caribbean, name: 'Caribbean Blue' },
]

export default function ColorSection() {
  return (
    <section className="colors" id="colors">
      <div className="shell colors__inner">
        <SectionHeading
          size="md"
          title="PICK YOUR COLOR"
          sub="Shown on the 26oz Ice Shaker. The Hyagen Medical logo is applied with a high-quality, durable wrap so it looks great and lasts."
        />

        <ul className="colors__row">
          {COLORS.map((c) => (
            <li className="color-swatch" key={c.name}>
              <div className="color-swatch__media">
                <img src={c.img} alt={`26oz Ice Shaker in ${c.name}`} />
              </div>
              <p className="color-swatch__name">{c.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
