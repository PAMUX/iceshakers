import './SectionHeading.css'

type Props = {
  title: string
  sub: string
  size?: 'lg' | 'md'
}

export default function SectionHeading({ title, sub, size = 'lg' }: Props) {
  return (
    <header className={`sec-head sec-head--${size}`}>
      <div className="sec-head__title">
        <span className="sec-head__rule" />
        <h2 className="display">{title}</h2>
        <span className="sec-head__rule" />
      </div>
      <p className="sec-head__sub">{sub}</p>
    </header>
  )
}
