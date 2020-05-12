import React, { ReactNode } from "react"

import styles from "./layout.module.scss"

interface LayoutProps {
  children: ReactNode
}

export function Layout(props: LayoutProps) {
  const { children } = props

  return <div className={styles.container}>{children}</div>
}
