import Image from 'next/image'
import React from 'react'
import styles from './styles.module.css'

let map: google.maps.Map
const center: google.maps.LatLngLiteral = { lat: 30, lng: -110 }

function initMap(): void {
  map = new google.maps.Map(document.getElementById('map') as HTMLElement, {
    center,
    zoom: 8,
  })
}

export function Cerimonia() {
  return (
    <>
      <section className={styles.section}>
        <div>
          <h1>Paróquia São Sebastião</h1>
        </div>
        <div className={styles.row}>
          <Image
            className={styles.image}
            src="/igreja_fora.jpg"
            width={300}
            height={300}
            alt="Imagem do lado de fora da Igreja, apresenta praça com cruz em destaque do lado direito e ao fundo fachada da Igreja"
          />
          <Image
            className={styles.image}
            src="/igreja.jpg"
            width={300}
            height={300}
            alt="Imagem do lado de dentro da Igreja, apresenta bancos vazios com presbitério ao fundo, é possível observar pinturas bíblicas no teto"
          />
        </div>
      </section>

      <section className={styles.section}>
        <h3>Quem foi São Sebastião?</h3>
        <p>
          São Sebastião foi um soldado romano cristão no século III que sofreu
          martírio por sua fé. Ele foi atirado com flechas, mas sobreviveu e foi
          morto novamente diante do imperador romano. Ele é venerado como
          padroeiro dos atiradores, dos soldados e dos mártires, e sua festa é
          celebrada em 20 de janeiro. São Sebastião é retratado como um soldado
          jovem com as mãos amarradas e cercado por flechas, e é considerado um
          símbolo de coragem e fidelidade à fé. Em suas representações
          artísticas, São Sebastião é um exemplo de perseverança e fé em meio à
          adversidade.
        </p>
      </section>
      <section className={styles.section}>
        <h3>Localização</h3>
        <div id="map"></div>
        <dl>
          <dd>R. José de Alencar, 1907 - Estacao, Franca - SP, 14405-208</dd>
        </dl>
      </section>
    </>
  )
}
