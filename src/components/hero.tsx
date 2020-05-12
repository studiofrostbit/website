import React from "react"

import styles from "./hero.module.scss"
import { HeroImage } from "./icons/HeroImage"

interface HeroProps {
  siteTitle: string
}

export function Hero(props: HeroProps) {
  return (
    <header className={styles.container}>
      <HeroImage className={styles.backgroundImage} />
      <div className={styles.subContainer}>
        <h1 className={styles.title}>{props.siteTitle}</h1>
      </div>
    </header>
  )
}
