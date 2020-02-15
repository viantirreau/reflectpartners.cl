import React from "react"

import SEO from "../components/seo"
import { Grid, Header } from "semantic-ui-react"
import Layout from "../components/Layout"
import indexStyles from "../styles/index.module.css"
import { TransitionState } from "gatsby-plugin-transition-link"

const IndexPage = ({ location }) => (
  <TransitionState>
    {({ entry }) => (
      <Layout location={location}>
        <SEO title="#ReflejaTuAlegría" />
        {/* entry.state.disableFirstAnimation */}
        <Grid columns={3} className={indexStyles.catchContainer}>
          <Grid.Row>
            <Grid.Column textAlign="center" computer={6} mobile={16}>
              <Header
                as="h1"
                className={`${indexStyles.catch} ${indexStyles.delay1}`}
              >
                Refleja
              </Header>
            </Grid.Column>
            <Grid.Column textAlign="center" computer={4} mobile={16}>
              <Header
                as="h1"
                className={`${indexStyles.catch} ${indexStyles.delay2}`}
              >
                Tu
              </Header>
            </Grid.Column>
            <Grid.Column textAlign="center" computer={6} mobile={16}>
              <Header
                as="h1"
                className={`${indexStyles.catch} ${indexStyles.delay3}`}
              >
                Alegría
              </Header>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Layout>
    )}
  </TransitionState>
)

export default IndexPage
