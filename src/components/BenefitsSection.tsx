import quality from '../assets/icons/icon-quality.png'
import custom from '../assets/icons/icon-custom.png'
import shipping from '../assets/icons/icon-shipping.png'
import warranty from '../assets/icons/icon-warranty.png'
import './BenefitsSection.css'

const BENEFITS = [
  {
    icon: quality,
    iconHeight: '4.375rem',
    title: 'PREMIUM QUALITY',
    copy: ['Insulated, durable,', 'and built to perform.'],
  },
  {
    icon: custom,
    iconHeight: '4.58rem',
    title: 'CUSTOMIZED IN HOUSE',
    copy: ['Personalized at the Ice Shaker', 'facility in Southlake, TX.'],
  },
  {
    icon: shipping,
    iconHeight: '3.97rem',
    title: 'FAST TURNAROUND',
    copy: ['Most bulk orders ship', 'in 3–5 business days.'],
  },
  {
    icon: warranty,
    iconHeight: '4.72rem',
    title: 'LOGO THAT LASTS',
    copy: ["Won't chip, fade, or rub off.", 'Backed by a 1 year', 'limited warranty.'],
  },
]

export default function BenefitsSection() {
  return (
    <section className="benefits">
      <div className="shell benefits__inner">
        {BENEFITS.map((b) => (
          <div className="benefit" key={b.title}>
            <div className="benefit__icon">
              <img src={b.icon} alt="" style={{ height: b.iconHeight }} />
            </div>
            <h3 className="benefit__title">{b.title}</h3>
            <p className="benefit__copy">
              {b.copy.map((line, i) => (
                <span key={line}>
                  {line}
                  {i < b.copy.length - 1 ? <br /> : null}
                </span>
              ))}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
