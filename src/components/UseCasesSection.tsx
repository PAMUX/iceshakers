import check from '../assets/icons/icon-check.png'
import patientsBg from '../assets/images/use-patients-bg.jpg'
import './UseCasesSection.css'

const PATIENTS = [
  'Great for new patient welcome kits',
  'Perfect for post-treatment care packages',
  'Keeps your brand top of mind',
  'Shows you care beyond the appointment',
]

const TEAM = [
  'A meaningful gift for your providers and staff',
  'Perfect for conferences and events',
  'Builds team pride and unity',
  'A premium alternative to typical swag',
]

export default function UseCasesSection() {
  return (
    <section className="use-cases" id="use-cases">
      <div className="use-panel use-panel--patients">
        <div className="use-panel__content">
          <p className="kicker use-panel__kicker">FOR YOUR PATIENTS</p>
          <h2 className="display use-panel__title">
            A DAILY REMINDER
            <br />
            <span className="is-light">OF BETTER HEALTH</span>
          </h2>
          <ul className="use-list">
            {PATIENTS.map((item) => (
              <li key={item}>
                <img src={check} alt="" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <img
          className="use-panel__doctor"
          src={patientsBg}
          alt="Provider holding a white Hyagen Medical bottle"
        />
      </div>

      <div className="use-panel use-panel--team">
        <div className="use-panel__content">
          <p className="kicker use-panel__kicker">FOR YOUR TEAM</p>
          <h2 className="display use-panel__title">
            FUEL THE PEOPLE
            <br />
            WHO <span className="is-light">MAKE IT</span> HAPPEN
          </h2>
          <ul className="use-list">
            {TEAM.map((item) => (
              <li key={item}>
                <img src={check} alt="" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
