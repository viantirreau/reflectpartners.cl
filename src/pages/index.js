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
import Img from "gatsby-image"
import Carousel from "../components/Carousel"
import AnimatedDownArrow from "../components/AnimatedDownArrow"

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
              >
                <AnimatedDownArrow />
              </CatchPhrase>
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
  const gallery = (
    <Img fluid={data.file.childImageSharp.fluid} alt="Con Reflect Partners" />
  )
  const gallery2 = (
    <Carousel>
      {gallery}
      {gallery}
      {gallery}
    </Carousel>
  )
  return (
    <TextImageHalf
      header="Haz que tu evento sea inolvidable"
      text="Lorem"
      image={gallery2}
    />
  )
}
