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

import Spacer from "../components/Spacer"

import AnimatedDownArrow from "../components/AnimatedDownArrow"

import { animateScroll as scroll } from "react-scroll"
import Experiencia from "../fragments/Experiencia"

class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.location = this.props.location
    let ref = React.createRef()
    this.state = { grow: false, finished: false, ref, hideMobileMenu: true }
  }
  componentDidMount() {
    this.setState({ grow: true })
    setTimeout(() => {
      this.setState({ wrapperBg: "transparent" })
    }, 400)
    setTimeout(() => {
      this.setState({ finished: true, hideMobileMenu: false })
    }, 1700)
  }
  scrollToRef(ref) {
    console.log("Called scrollToRef", ref)
    scroll.scrollTo(ref.current.offsetTop - 30, { smooth: true })
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
            <Layout
              location={this.location}
              hideMobileMenu={this.state.hideMobileMenu}
            >
              <SEO title="#ReflejaTuAlegría" />
              <CatchPhrase
                disableFirstAnimation={entry.state.disableFirstAnimation}
              >
                <AnimatedDownArrow
                  handleClick={() => this.scrollToRef(this.state.ref)}
                />
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
