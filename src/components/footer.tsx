import React from "react"

import styles from "./footer.module.scss"

export function Footer() {
  return (
    <section className={styles.container}>
      <div className={styles.subContainer}>
        <p className={styles.copyright}>
          © 2020 Studio Frostbit. <br />
          All rights reserved.
        </p>
        <a href="mailto:studiofrostbit@gmail.com" className={styles.contact}>
          studiofrostbit@gmail.com
        </a>
      </div>
    </section>
  )
}
