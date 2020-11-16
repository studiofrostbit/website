import React from "react"

import styles from "./about.module.scss"
import { FloatingThing } from "./floating-thing"
import aboutUsTitleUnderlineImage from "../images/About-Us-Title-Underline.svg"

export function About() {
  return (
    <section className={styles.container}>
      <div className={styles.subContainer}>
        <h2 className={styles.title}>
          About us
          <img
            className={styles.underlineImage}
            src={aboutUsTitleUnderlineImage}
            alt=""
          />
        </h2>
        <p className={styles.bodyText}>
        We are a student company from Norway. Our Team consists of 5 people, 1 artist and 4 programmers. This year we have a goal to release our game on steam before school ends for us in May 2021.</p>
        <div className={styles.floatingThingContainer}>
          <FloatingThing />
        </div>
      </div>
    </section>
  )
}
