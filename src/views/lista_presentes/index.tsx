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
          href="https://www.querodecasamento.com.br/lista-de-casamento/kevin-caroline"
          className={styles.link}
        >
          link
        </Link>
        .
      </p>
      <p>
        Você também pode consultá-la presencialmente em uma das lojas do
        Magazine Luiza. Basta passar nossos nomes{' '}
        <b>Caroline Noguira</b> e <b>Kevin Brandão</b>.
      </p>
      <br />
      <br />
      <div className={styles.logos}>
        <Link href="">
          <Image
            className={styles.logo}
            src="/casa.jpeg"
            width={300}
            height={300}
            alt=""
          />
        </Link>
        <Link href="https://www.querodecasamento.com.br/lista-de-casamento/kevin-caroline">
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
