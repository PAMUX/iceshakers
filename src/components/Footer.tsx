import logo from '../assets/logos/iceshaker-logo-white.png'
import instagram from '../assets/icons/social-instagram.png'
import facebook from '../assets/icons/social-facebook.png'
import tiktok from '../assets/icons/social-tiktok.png'
import youtube from '../assets/icons/social-youtube.png'
import linkedin from '../assets/icons/social-linkedin.png'
import { NAV_LINKS } from './Header'
import './Footer.css'

const SOCIALS = [
  { icon: instagram, label: 'Instagram' },
  { icon: facebook, label: 'Facebook' },
  { icon: tiktok, label: 'TikTok' },
  { icon: youtube, label: 'YouTube' },
  { icon: linkedin, label: 'LinkedIn' },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="shell footer__inner">
        <div className="footer__top">
          <div className="footer__brand">
            <a href="#top">
              <img className="footer__logo" src={logo} alt="Ice Shaker" />
            </a>
            <ul className="footer__socials">
              {SOCIALS.map((s) => (
                <li key={s.label}>
                  <a href="#" aria-label={s.label}>
                    <img src={s.icon} alt="" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <nav className="footer__nav" aria-label="Footer">
            {NAV_LINKS.map((link) => (
              <a key={link.label} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>

          <a className="footer__cta" href="#quote">
            REQUEST A QUOTE
          </a>
        </div>

        <div className="footer__rule" />

        <div className="footer__bottom">
          <p>© 2024 Ice Shaker. All rights reserved.</p>
          <p>Ice Shaker is a registered trademark of its owner.</p>
        </div>
      </div>
    </footer>
  )
}
