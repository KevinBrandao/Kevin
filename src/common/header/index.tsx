import React from 'react'
import styles from './styles.module.css'
import Link from 'next/link'
import localFont from '@next/font/local'
import Image from 'next/image'
import { MenuBurger } from '@common/menu'

const theSeasonsLight = localFont({
  src: '../assets/TheSeasonsLight.ttf',
  display: 'swap',
  weight: '700',
  preload: true,
  fallback: ['Arial, sans-serif'],
})

export function Header() {
  return (
    <header className={styles.header}>
      {/* <Image
        src="/background.jpg"
        alt="funco com flores na diagonal invertida"
        width={1000}
        height={1000}
        className={styles.background}
      /> */}
      <div className={styles.wrapper}>
        <div className={styles.logoWrapper}>
          <Link href="/">
            <span className={`${theSeasonsLight.className} ${styles.ourLogo}`}>
              H{' '}
              <span className={styles.heart}>
                <Image
                  src="/heart.svg"
                  alt="Coração logo"
                  className={styles.vercelLogo}
                  width={24}
                  height={18}
                  priority
                />
              </span>{' '}
              S
            </span>
          </Link>
        </div>

        <nav className={styles.navBar}>
          <MenuBurger hided={false} />
          <div className="sc-gWnQNU gMVXOQ menu__icon--mobile">
            <span color="#FFFFFF" className="sc-fgOGuH dBbIJg"></span>
          </div>
          {/* <Link href="/" */}
          <ul className="sc-gdlBQy heMea menu__wrapper"></ul>
        </nav>
      </div>
    </header>
  )
}
