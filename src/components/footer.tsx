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
        <a href="mailto:contact@studiofrostbit.com" className={styles.contact}>
          contact@studiofrostbit.com
        </a>
      </div>
    </section>
  )
}
