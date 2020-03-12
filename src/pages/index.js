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
      allFile(filter: { relativePath: { regex: "/Gallery-Home/i" } }) {
        edges {
          node {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)
  const gallery = data.allFile.edges.map(edge => (
    <Img
      fluid={edge.node.childImageSharp.fluid}
      alt="Reflect Partners en acción"
    />
  ))
  const carousel = <Carousel>{gallery}</Carousel>
  const subheader = (
    <>
      <p>
        Usamos la mejor tecnología fotográfica del mercado para que tus
        invitados no paren de sonreír.
      </p>
      <p>
        Confía en nosotros para plasmar un maravilloso recuerdo de tu
        matrimonio, evento corporativo, gala, cumpleaños o fiesta de graduación.
      </p>
    </>
  )
  // <p> Trabajamos con gente fantástica y las más reconocidas marcas para crear experiencias únicas. </p>
  return (
    <TextImageHalf
      header="Haz que tu evento sea inolvidable"
      text={subheader}
      image={carousel}
    />
  )
}
