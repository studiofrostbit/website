import React, { ReactNode } from "react"

import styles from "./socials.module.scss"
import { IconProps, Icon } from "./Icon"

export function Socials() {
  return (
    <section className={styles.container}>
      <div className={styles.background} />
      <div className={styles.subContainer}>
        <h2 className={styles.title}>Our socials</h2>
        <div className={styles.socialsList}>
          <SocialLink url="#" icon="discord" label="Discord" />
          <SocialLink
            url="https://www.instagram.com/studiofrostbit/"
            icon="instagram"
            label="Instagram"
          />
          <SocialLink
            url="https://twitter.com/Studio_FrostBit"
            icon="twitter"
            label="Twitter"
          />
          <SocialLink
            url="https://www.youtube.com/channel/UCgB6FBZZ-Ky_RiZliI-9cgA"
            icon="youtube"
            label="Youtube"
          />
          <SocialLink
            url="https://www.facebook.com/studioFrostbit"
            icon="facebook"
            label="Facebook"
          />
        </div>
      </div>
    </section>
  )
}

interface SocialLinkProps {
  url: string
  label: string
  icon: IconProps["icon"]
}

function SocialLink(props: SocialLinkProps) {
  const { url, label, icon } = props

  return (
    <a className={styles.socialLink} title={label} href={url}>
      <Icon className={styles.socialIcon} icon={icon} />
    </a>
  )
}
