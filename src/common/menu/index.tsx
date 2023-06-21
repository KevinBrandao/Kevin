import { If } from '@common/If'
import React, { useState } from 'react'
import styles from './styles.module.css'
import Link from 'next/link'
import { aileronThin } from '@common/layout'

const Span = ({ children }: any) => (
  <span className={styles.span}>{children}</span>
)

export function MenuBurger(props: { hided: boolean }) {
  const [isClicked, setIsClicked] = useState(false)
  return (
    <div className={`${styles.container} ${aileronThin.variable}`}>
      <div className={styles.border}></div>
      <div className={styles.btn} onClick={() => setIsClicked((s) => !s)}>
        <div
          className={`${isClicked && styles.activeLeft} ${styles.btnLeft}`}
        ></div>
        <div
          className={`${isClicked && styles.activeRight} ${styles.btnRight}`}
        ></div>
      </div>
      <If condition={isClicked}>
        <div className={styles.menuFlutuante}>
          <li className={styles.item}>
            <Link
              href="/nossa-historia"
              onClick={() => setIsClicked(false)}
              prefetch
            >
              <Span>Nossa história</Span>
            </Link>
          </li>
          <li className={styles.item}>
            <Link
              href="/cerimonia"
              onClick={() => setIsClicked(false)}
              prefetch
            >
              <Span>Local da cerimônia</Span>
            </Link>
          </li>
          <li className={styles.item}>
            <Link
              href="/padrinhos"
              onClick={() => setIsClicked(false)}
              prefetch
            >
              <Span>Padrinhos</Span>
            </Link>
          </li>
          <li className={styles.item}>
            <Link
              href="/lista-presentes"
              onClick={() => setIsClicked(false)}
              prefetch
            >
              <Span>Lista de presentes</Span>
            </Link>
          </li>
          <li className={styles.item}>
            <Link
              href="/confirmar-presenca"
              onClick={() => setIsClicked(false)}
              prefetch
            >
              <Span>Confirmar presença</Span>
            </Link>
          </li>
        </div>
      </If>
    </div>
  )
}
