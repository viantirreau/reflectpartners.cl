import React from "react"

import SEO from "../components/seo"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Layout from "../components/layout"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <AniLink cover bg="#ffdb01" duration={0.5} to="/">
      Go back to the homepage
    </AniLink>
  </Layout>
)

export default SecondPage
