import { useState } from 'react'
import iceShaker from '../assets/images/bottle-26oz-ice-shaker.png'
import skinny from '../assets/images/bottle-20oz-skinny-shaker.png'
import flex from '../assets/images/bottle-26oz-flex.png'
import legend from '../assets/images/bottle-40oz-legend-tumbler.png'
import SectionHeading from './SectionHeading'
import ProductModal from './ProductModal'
import './ProductSection.css'

export type Bottle = {
  img: string
  name: string
  copy: [string, string]
  capacity: string
  detail: string
}

const BOTTLES: Bottle[] = [
  {
    img: iceShaker,
    name: '26oz Ice Shaker',
    copy: ['The original.', 'As seen on Shark Tank.'],
    capacity: '26 oz capacity',
    detail: 'Shaker lid with a fold-down carry handle.',
  },
  {
    img: skinny,
    name: '20oz Skinny Shaker',
    copy: ['Slim fit for', 'cup holders.'],
    capacity: '20 oz capacity',
    detail: 'Slim profile that drops into a standard cup holder.',
  },
  {
    img: flex,
    name: '26oz Flex Bottle',
    copy: ['Everyday carry', 'with a flex lid.'],
    capacity: '26 oz capacity',
    detail: 'Flex lid with a carry loop for everyday use.',
  },
  {
    img: legend,
    name: '40oz Legend Tumbler',
    copy: ['Big tumbler with', 'handle and straw.'],
    capacity: '40 oz capacity',
    detail: 'Large tumbler with a side handle and straw.',
  },
]

export default function ProductSection() {
  const [active, setActive] = useState<Bottle | null>(null)

  return (
    <section className="products" id="bottles">
      <div className="shell products__inner">
        <SectionHeading
          title="CHOOSE YOUR BOTTLE"
          sub="The Hyagen Medical logo looks great on every Ice Shaker. Here are some of the most popular options."
        />

        <div className="products__grid">
          {BOTTLES.map((b) => (
            <article className="product-card" key={b.name}>
              <div className="product-card__media">
                <img src={b.img} alt={`${b.name} with the Hyagen Medical logo`} />
              </div>
              <h3 className="product-card__name">{b.name}</h3>
              <p className="product-card__copy">
                {b.copy[0]}
                <br />
                {b.copy[1]}
              </p>
              <button
                type="button"
                className="product-card__hit"
                aria-label={`View ${b.name} details`}
                onClick={() => setActive(b)}
              />
            </article>
          ))}
        </div>
      </div>

      <ProductModal bottle={active} onClose={() => setActive(null)} />
    </section>
  )
}
