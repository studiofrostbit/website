import React, { ReactNode } from "react"

import styles from "./socials.module.scss"
import { discordIcon } from "./icons/discord"
import { instagramIcon } from "./icons/instagram"
import { twitterIcon } from "./icons/twitter"
import { youtubeIcon } from "./icons/youtube"
import { facebookIcon } from "./icons/facebook"
import { IconProps, Icon } from "./Icon"

export function Socials() {
  return (
    <section className={styles.container}>
      <div className={styles.background} />
      <div className={styles.subContainer}>
        <h2 className={styles.title}>Our socials</h2>
        <div className={styles.socialsList}>
          <SocialLink url="#" icon="discord" />
          <SocialLink
            url="https://www.instagram.com/studiofrostbit/"
            icon="instagram"
          />
          <SocialLink
            url="https://twitter.com/Studio_FrostBit"
            icon="twitter"
          />
          <SocialLink
            url="https://www.youtube.com/channel/UCgB6FBZZ-Ky_RiZliI-9cgA"
            icon="youtube"
          />
          <SocialLink
            url="https://www.facebook.com/studioFrostbit"
            icon="facebook"
          />
        </div>
      </div>
    </section>
  )
}

interface SocialLinkProps {
  url: string
  icon: IconProps["icon"]
}

function SocialLink(props: SocialLinkProps) {
  const { url, icon } = props

  return (
    <a className={styles.socialLink} href={url}>
      <Icon className={styles.socialIcon} icon={icon} />
    </a>
  )
}
