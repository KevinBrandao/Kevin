import React from 'react'
import Image from 'next/image'
import styles from "./styles.module.css"
import { CountDown } from './components/CountDown'

export function Home() {
  return (
    <main>
      {/* <CountDown /> */}
      <figure className={styles.imageWrapper}>
        <Image
          className={styles.image}
          src="/capa.jpg"
          width={300}
          height={300}
          alt="Nós"
        />
         <Image
          className={styles.image__mobile}
          src="/capa_mobile.jpeg"
          width={300}
          height={300}
          alt="Nós"
          
        />
      </figure>
      {/* <span className={styles.quote}>Bem vindos</span> */}
        <p className={styles.text}>
          Olá, sejam bem vindos ao nosso site.
        </p>
        
    </main>
  )
}
