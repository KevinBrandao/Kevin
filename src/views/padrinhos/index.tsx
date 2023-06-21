import React from 'react'
import { Card, CardProps } from './components/card'
import styles from './styles.module.css'

const padrinhos: CardProps[] = [
  {
    caption: '',
    imgSrc: '/padrinhos/DenisJessica.jpg',
    name: 'Denis e Jessica',
  },
  {
    caption: '',
    imgSrc: '/padrinhos/GetulioBia.jpg',
    name: 'Getulio e Bia',
  },
  {
    caption: '',
    imgSrc: '/padrinhos/GuilhermeTuany.jpg',
    name: 'Guilherme e Tuany',
  },
  {
    caption: '',
    imgSrc: '/padrinhos/JamiroConceição.jpg',
    name: 'Jamiro e Maria Conceição',
  },
  {
    caption: '',
    imgSrc: '/padrinhos/JoaoAna.jpg',
    name: 'João Pedro e Anelise',
  },
  {
    caption: '',
    imgSrc: '/padrinhos/Pedro.jpg',
    name: 'Pedro',
  },
  {
    caption: '',
    imgSrc: '/padrinhos/Rosa.jpg',
    name: 'Rosa',
  },
  {
    caption: '',
    imgSrc: '/padrinhos/Salueder.jpg',
    name: 'Salueder',
  },
  {
    caption: '',
    imgSrc: '/padrinhos/SauloMariana.jpg',
    name: 'Saulo e Mariana',
  },
  {
    caption: '',
    imgSrc: '',
    name: 'Silvana',
  },
  {
    caption: '',
    imgSrc: '/padrinhos/WelterAnaPaula.jpg',
    name: 'Welter e Ana Paula',
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
