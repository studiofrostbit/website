import React from "react"

import { Layout } from "../components/layout"
import { SEO } from "../components/seo"
import { Hero } from "../components/hero"
import { About } from "../components/about"
import { Socials } from "../components/socials"
import { Footer } from "../components/footer"

export default function IndexPage() {
  return (
    <Layout>
      <SEO title="Studio Frostbit" />
      <Hero siteTitle="Studio Frostbit" />
      <About />
      <Socials />
      <Footer />
    </Layout>
  )
}
