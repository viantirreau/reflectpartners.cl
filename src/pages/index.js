import React from "react"

import Image from "../components/image"
import SEO from "../components/seo"
import { Grid, Header } from "semantic-ui-react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Layout from "../components/layout"
import indexStyles from "../styles/index.module.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Reflect Partners" />

    <Grid columns={3} stackable>
      <Grid.Row>
        <Grid.Column textAlign="center" width={6}>
          <Header as="h1" className={indexStyles.catch}>
            Refleja
          </Header>
        </Grid.Column>
        <Grid.Column textAlign="center" width={4}>
          <Header as="h1" className={indexStyles.catch}>
            Tu
          </Header>
        </Grid.Column>
        <Grid.Column textAlign="center" width={6}>
          <Header as="h1" className={indexStyles.catch}>
            Alegría
          </Header>
        </Grid.Column>
      </Grid.Row>
    </Grid>

    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <AniLink cover bg="#ffdb01" duration={0.5} to="/page-2/">
      Go to page 2
    </AniLink>
  </Layout>
)

export default IndexPage
