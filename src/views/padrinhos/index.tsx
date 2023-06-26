import React from 'react'
import { Card, CardProps } from './components/card'
import styles from './styles.module.css'

const padrinhos: CardProps[] = [
  {
    caption: '',
    imgSrc: '/padrinhos/daniGabriel.jpg',
    name: 'Gabriel e Daniele',
  },
  {
    caption: '',
    imgSrc: '/padrinhos/gabrielDesire.jpg',
    name: 'Gabriel e Desire',
  },
  {
    caption: '',
    imgSrc: '/padrinhos/GuilhermeTuany.jpg',
    name: '',
  },
  {
    caption: '',
    imgSrc: '/padrinhos/JamiroConceição.jpg',
    name: '',
  },
]

export function Padrinhos() {
  return (
    <div>
      <h3>Nossos padrinhos</h3>
      {padrinhos.map((p) => (
        <section key={p.imgSrc} className={styles.wrapper}>
          <Card caption={p.caption} name={p.name} imgSrc={p.imgSrc} />
        </section>
      ))}
    </div>
  )
}
