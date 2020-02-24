import React from "react"

import SEO from "../components/seo"
import Layout from "../components/Layout"
import { TransitionState } from "gatsby-plugin-transition-link"
import CatchPhrase from "../components/CatchPhrase"
import {
  PageLoader,
  PageLoaderWrapper,
  PageLoaderRipple,
} from "../components/GrowCircle"
import TextImageHalf from "../components/TextImageHalf"
import { useStaticQuery, graphql } from "gatsby"
import Spacer from "../components/Spacer"

class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.location = this.props.location
    this.state = { grow: false, finished: false }
  }
  componentDidMount() {
    this.setState({ grow: true })
    setTimeout(() => {
      this.setState({ wrapperBg: "transparent" })
    }, 400)
    setTimeout(() => {
      this.setState({ finished: true })
    }, 1700)
  }
  render() {
    return (
      <TransitionState>
        {({ entry }) => (
          <>
            <PageLoader
              finished={
                this.state.finished || entry.state.disableFirstAnimation
              }
            >
              <PageLoaderWrapper
                bg={this.state.wrapperBg}
                finished={this.state.finished}
              >
                <PageLoaderRipple grow={this.state.grow} />
              </PageLoaderWrapper>
            </PageLoader>
            <Layout location={this.location}>
              <SEO title="#ReflejaTuAlegría" />
              <CatchPhrase
                disableFirstAnimation={entry.state.disableFirstAnimation}
              />
              <Spacer pixels={50} />
              <Experiencia />
            </Layout>
          </>
        )}
      </TransitionState>
    )
  }
}

export default IndexPage

const Experiencia = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      file(relativePath: { eq: "rp-icon.png" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <TextImageHalf
      header="Haz que tu evento sea inolvidable"
      text="Lorem"
      image={data.file.childImageSharp.fluid}
    />
  )
}
