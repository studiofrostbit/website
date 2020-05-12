import React from "react"
import { discordIcon } from "./icons/discord"
import { facebookIcon } from "./icons/facebook"
import { instagramIcon } from "./icons/instagram"
import { twitterIcon } from "./icons/twitter"
import { youtubeIcon } from "./icons/youtube"

const icons = {
  discord: discordIcon,
  facebook: facebookIcon,
  instagram: instagramIcon,
  twitter: twitterIcon,
  youtube: youtubeIcon,
}

export interface IconProps {
  icon: keyof typeof icons
  className?: string
}

export function Icon(props: IconProps) {
  const { icon, className } = props

  return (
    <svg className={className} viewBox="0 0 24 24">
      {icons[icon]}
    </svg>
  )
}
