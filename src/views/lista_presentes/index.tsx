import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import styles from './styles.module.css'
import Magalu from '../../../public/magalu.svg'

export function ListaPresentes() {
  return (
    <section>
      <h3>Lista de presentes</h3>
      <figure className={styles.imageWrapper}>
        <Image
          className={styles.image}
          src="/presentes.jpg"
          width={300}
          height={300}
          alt="Presentes"
        />
      </figure>
      <p>Não deixe de conferir nossa lista de presentes.</p>
      <p>
        Você pode consultá-la online neste {" "}
        <Link
          href="https://www.querodecasamento.com.br/lista-de-casamento/heloisa-franca-samuel-fernandes"
          className={styles.link}
        >
          link
        </Link>
        .
      </p>
      <p>
        Você também pode consultá-la presencialmente em uma das lojas do
        Magazine Luiza e na loja Casa Única. Basta passar nossos nomes{' '}
        <b>Heloísa França</b> e <b>Samuel Cardoso</b>.
      </p>
      <br />
      <br />
      <div className={styles.logos}>
        <Link href="https://www.google.com/maps/place/Casa+%C3%B9nica+Franca/@-20.5438706,-47.3994811,17z/data=!4m6!3m5!1s0x94b0a627025eacdb:0xd7942b2ff1c6bd33!8m2!3d-20.5438706!4d-47.3969062!16s%2Fg%2F1pv3gt4bz">
          <Image
            className={styles.logo}
            src="/casa_unica.jpeg"
            width={300}
            height={300}
            alt="Logo Casa Unica"
          />
        </Link>
        <Link href="https://m.querodecasamento.com.br/lista-de-casamento/heloisa-franca-samuel-fernandes">
          <Image
            className={styles.logo}
            src={Magalu}
            alt="Logo Magazine Luiza"
          />
        </Link>
      </div>
      <br />
      {/* <p className={styles.center}>Não confirmou sou presença?</p>
    <p className={styles.center}><Link href="/confirmar-presenca" className={styles.link} prefetch>Confirme aqui!</Link></p> */}
    </section>
  )
}
