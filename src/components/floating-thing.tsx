import React, { ReactDOM } from "react"

import styles from "./floating-thing.module.scss"

interface FloatingThingProps {
  className?: string
}

export function FloatingThing(props: FloatingThingProps) {
  return (
    <div className={styles.container + " " + props.className}>
      <svg
        className={styles.crystal}
        width="140"
        height="326"
        viewBox="0 0 140 326"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0)">
          <path
            d="M26.8135 61.5341L57.278 0L92.1925 18.1585L118.207 91.2481L81.8094 203.729L55.0531 190.352L26.8135 61.5341Z"
            fill="#29B27E"
          />
          <path
            d="M114.327 131.721L86.9434 224.676V251.317L106.34 286.495L140 228.946L137.033 189.327L114.327 131.721Z"
            fill="#1C664F"
          />
          <path
            d="M23.2192 93.0127L37.881 180.504L35.1997 220.806L20.5379 247.673L0 210.844L4.22168 148.399L23.2192 93.0127Z"
            fill="#1C664F"
          />
          <path
            d="M44.4422 198.378L40.9051 225.872L34.8008 243.746L63.3256 326L96.4715 286.495L78.0445 255.13L78.2727 219.326L44.4422 198.378Z"
            fill="#0D7F69"
          />
        </g>
        <defs>
          <clipPath id="clip0">
            <rect width="140" height="326" fill="white" />
          </clipPath>
        </defs>
      </svg>

      <svg
        className={styles.shadow}
        width="60"
        height="20"
        viewBox="0 0 60 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M30 0C13.4291 0 0 4.47635 0 10C0 15.5236 13.4291 20 30 20C46.5709 20 60 15.5236 60 10C60 4.47635 46.5709 0 30 0Z"
          fill="#1C664F"
        />
      </svg>
    </div>
  )
}
