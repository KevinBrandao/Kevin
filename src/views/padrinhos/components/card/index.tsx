import React, { useState } from 'react'
import styles from './styles.module.css'
import Image from 'next/image'

export type CardProps = {
  name: string
  imgSrc: string
  caption: string
}

export function Card(props: CardProps) {
  const [isShowed, setIsShowed] = useState(false)

  return (
    <div className={styles.card} onClick={() => setIsShowed((s) => !s)}>
      <section
        className={`${styles.titleWrapper} ${
          isShowed && styles.showTitleWrapper
        }`}
      >
        <span className={styles.title}> {props.name}</span>
      </section>
      <div className={`${!isShowed && styles.hideTitleWrapper}`}></div>
      <figure className={`${styles.imageWrapper} ${!isShowed && styles.hide}`}>
        <Image
          className={styles.image}
          src={props.imgSrc}
          width={300}
          height={300}
          alt={props.name}
        />
        <figcaption>{props.caption}</figcaption>
      </figure>
    </div>
  )
}
