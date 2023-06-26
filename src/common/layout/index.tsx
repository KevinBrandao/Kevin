import { Header } from '@common/header'
import React from 'react'
import styles from './styles.module.css'
import localFont from '@next/font/local'

export const aileronThin = localFont({
  src: '../assets/aileron-thin.otf',
  display: 'swap',
  variable: '--text-body-font',
  preload: true,
  fallback: ['Arial, sans-serif'],
})
export const aileronBold = localFont({
  src: '../assets/aileron.bold.otf',
  display: 'swap',
  variable: '--text-body-font-bold',
  preload: true,
  fallback: ['Arial, sans-serif'],
})
type LayoutProps = {
  children: React.ReactElement
}
export function Layout(props: LayoutProps) {
  return (
    <>
      <Header />
      <main className={`${aileronThin.variable} ${aileronBold.variable} ${styles.main}`}>
        {props.children}
      </main>
      <footer className={`${aileronThin.variable}  ${aileronBold.variable} ${styles.footer}`}>
        Desenvolvido por Kevin Brandão
      </footer>
    </>
  )
}
