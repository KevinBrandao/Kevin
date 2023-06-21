import React from 'react'
import styles from './styles.module.css'

export default function LoadingOverlay() {
  return (
    <div className={styles.overlay}>
      <div className={styles.overlay__inner}>
        <div className={styles.overlay__content}>
          <span className={styles.spinner}></span>
        </div>
      </div>
    </div>
  )
}
